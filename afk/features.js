/* AFK Quest feature layer: offline/install, protected storage and backups, search, planner,
   card-level spaced repetition, integrated cases, compare drills, high-yield sheets, number drills,
   problem reports. Loads after the engine and wraps a few of its functions. */
(function(){
"use strict";
const CASES=window.CASES||[], PAIRS=window.PAIRS||[], SHEETS=window.SHEETS||{}, NUMBERS=window.NUMBERS||[];
const DAY=864e5;
/* merge exam-detail extensions into their nodes */
(window.EXT||[]).forEach(e=>{const c=CONTENT[e.node];if(!c)return;
  if(e.notes){c.notes=(c.notes||"")+'<h3 style="margin-top:14px;font-size:16px">Exam detail</h3>'+e.notes;if(!c._extNote){c.understand=(c.understand||"")+'<p class="small muted">More exam detail for this node is in the Notes tab.</p>';c._extNote=1;}}
  if(e.cards)c.cards=(c.cards||[]).concat(e.cards);if(e.questions)c.questions=(c.questions||[]).concat(e.questions);
  if(e.connect)c.connect=(c.connect||[]).concat(e.connect);});
S.cards=S.cards||{}; S.caseBest=S.caseBest||{}; S.pairBest=S.pairBest||{}; S.reports=S.reports||[]; S.plan=S.plan||null; S.lastBackup=S.lastBackup||null;
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const strip=h=>String(h||"").replace(/<[^>]+>/g," ").replace(/&[a-z]+;/g," ").replace(/\s+/g," ").trim();
const fmtDate=d=>new Date(d).toISOString().slice(0,10);

/* ---------- styles ---------- */
const css=document.createElement("style");css.textContent=`
.searchbar{display:flex;gap:8px;margin-top:6px}.searchbar input{flex:1;min-width:0;font:inherit;color:inherit;background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:10px 12px}
.sres{display:grid;gap:8px;margin-top:10px}.sres .link .snip{font-size:13px;color:var(--muted)}.sres mark{background:var(--xp-bg);color:inherit;padding:0 2px;border-radius:3px}
.banner{border:1px solid var(--xp);background:var(--xp-bg);border-radius:12px;padding:12px 14px;display:flex;gap:10px;align-items:center;flex-wrap:wrap}
.casegrid,.pairgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:10px}
.casegrid .card,.pairgrid .card{display:grid;gap:6px;align-content:start}
.casestem{background:var(--surface2);border-radius:10px;padding:12px 14px}
.cmp{border-collapse:collapse;width:100%;font-size:14px}.cmp th,.cmp td{border:1px solid var(--line);padding:7px 8px;text-align:left;vertical-align:top}.cmp th{background:var(--surface2);font-family:var(--display)}
.ab{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}
.sheet h3{font-size:17px;margin-top:14px}.sheet ul{padding-left:20px;margin:6px 0}.sheet li{margin:3px 0}
.meter{height:12px;border-radius:6px;background:var(--surface2);overflow:hidden}.meter i{display:block;height:100%}
input[type=date]{font:inherit;color:inherit;background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:8px 10px}
.rep{margin-top:8px}.rep textarea{min-height:60px}
.srsbtns{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:10px}
`;document.head.appendChild(css);

/* ---------- 1. offline, install, protected storage, backups ---------- */
if("serviceWorker" in navigator&&location.protocol==="https:"){navigator.serviceWorker.register("sw.js").catch(()=>{});}
let persisted=null;
if(navigator.storage&&navigator.storage.persist){navigator.storage.persisted().then(p=>{persisted=p;if(!p)return navigator.storage.persist().then(r=>{persisted=r;});}).catch(()=>{});}
const standalone=()=>window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===true;
function saveBackupFile(){
  const data=JSON.stringify(S);const blob=new Blob([data],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="afk-quest-backup-"+fmtDate(Date.now())+".json";
  document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},1000);
  S.lastBackup=Date.now();save();toast("Backup file saved. Keep it in Files or iCloud Drive.");
}
function restoreFromFile(file){const r=new FileReader();r.onload=()=>{try{const o=JSON.parse(r.result);if(!o||typeof o!=="object"||!o.nodes)throw 0;S=Object.assign(DEF(),o);save();toast("Progress restored.");setTimeout(()=>location.reload(),600);}catch(e){toast("That file is not an AFK Quest backup.");}};r.readAsText(file);}
function backupBanner(){
  const needs=S.answered>=20&&(!S.lastBackup||Date.now()-S.lastBackup>7*DAY);
  if(!needs&&standalone())return"";
  const parts=[];
  if(!standalone())parts.push(`<b>Install it:</b> in Safari tap Share, then <b>Add to Home Screen</b>. The app then works offline and Safari will not clear your progress.`);
  if(needs)parts.push(`<b>Back up:</b> it has been ${S.lastBackup?Math.floor((Date.now()-S.lastBackup)/DAY)+" days":"a while"} since your last backup file.`);
  return `<div class="banner"><div style="flex:1;min-width:220px" class="small">${parts.join("<br>")}</div>${needs?'<button class="btn sm primary" id="bkNow">Save backup</button>':""}</div>`;
}

/* ---------- 2. search ---------- */
let INDEX=null;
function buildIndex(){INDEX=[];NODES.forEach(n=>{const c=CONTENT[n.id];if(!c)return;const m=modById(n.m).title;
  INDEX.push({n:n.id,step:"u",kind:"Topic",title:n.t,sub:m,text:(n.t+" "+strip(c.understand)+" "+strip(nodeNotes(n.id)))});
  nodeCards(n.id).forEach(cd=>INDEX.push({n:n.id,step:"f",kind:"Card",title:cd[0],sub:n.t,text:cd[0]+" "+cd[1]}));
  nodeQs(n.id).forEach(q=>INDEX.push({n:n.id,step:"t",kind:"Question",title:q.q,sub:n.t,text:q.q+" "+q.c+" "+(q.ex||"")}));});
  CASES.forEach(cs=>INDEX.push({cs:cs.id,kind:"Case",title:cs.title,sub:"Integrated case",text:cs.title+" "+strip(cs.stem)}));
  PAIRS.forEach(p=>INDEX.push({pair:p.id,kind:"Compare",title:p.title,sub:"Compare drill",text:p.title+" "+p.a+" "+p.b+" "+(p.table||[]).map(r=>r.join(" ")).join(" ")}));
  INDEX.forEach(x=>x.low=x.text.toLowerCase());}
function search(qs){if(!INDEX)buildIndex();const terms=qs.toLowerCase().split(/\s+/).filter(t=>t.length>1);if(!terms.length)return[];
  const out=[];for(const x of INDEX){let s=0,ok=true;for(const t of terms){const i=x.low.indexOf(t);if(i<0){ok=false;break;}s+=(x.title.toLowerCase().includes(t)?5:1)+(x.kind==="Topic"?2:0);}if(ok)out.push([s,x]);}
  return out.sort((a,b)=>b[0]-a[0]).slice(0,40).map(r=>r[1]);}
function snippet(x,terms){const t=x.text;const i=t.toLowerCase().indexOf(terms[0]);const s=Math.max(0,i-70);let sn=(s?"…":"")+t.slice(s,s+200)+"…";sn=esc(sn);terms.forEach(tt=>{sn=sn.replace(new RegExp("("+tt.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","ig"),"<mark>$1</mark>");});return sn;}
function renderSearch(host,q){const terms=q.toLowerCase().split(/\s+/).filter(t=>t.length>1);const res=search(q);
  host.innerHTML=!q.trim()?"":res.length?`<div class="small muted">${res.length} result${res.length>1?"s":""}${res.length===40?" (top 40)":""}</div>`+res.map((x,i)=>`<button class="link" data-i="${i}"><b>${esc(x.title.length>110?x.title.slice(0,110)+"…":x.title)}</b><span class="small"><span class="tag">${x.kind}</span> ${esc(x.sub)}</span><span class="snip">${snippet(x,terms)}</span></button>`).join(""):`<p class="muted small">No matches. Try a shorter word or a synonym.</p>`;
  host.querySelectorAll("[data-i]").forEach(b=>b.addEventListener("click",()=>{const x=res[+b.dataset.i];if(x.cs){showTab("cases");openCase(x.cs);return;}if(x.pair){showTab("compare");openPair(x.pair);return;}openNode(x.n);step=x.step;renderNode(x.n);}));}

/* ---------- 3. planner ---------- */
function planStats(){const remain=NODES.filter(n=>status(n.id)!=="mastered").reduce((s,n)=>s+n.h,0);const total=NODES.reduce((s,n)=>s+n.h,0);
  if(!S.plan)return{remain,total};const weeks=Math.max(0,(new Date(S.plan.date)-Date.now())/(7*DAY));const need=weeks>0?remain/weeks:Infinity;
  const span=Math.max(1,new Date(S.plan.date)-S.plan.start);const frac=Math.min(1,Math.max(0,(Date.now()-S.plan.start)/span));const expectedDone=S.plan.startRemain*frac;const done=S.plan.startRemain-remain;
  return{remain,total,weeks,need,expectedDone,done,frac};}
function plannerCard(){const st=planStats();
  if(!S.plan)return `<div class="card stack"><h2 style="font-size:20px">Study plan</h2><p class="small muted" style="margin:0">Set your target sitting and your realistic weekly hours. The plan uses the hours of every node you have not mastered yet (${Math.round(st.remain)} h now) and tells you each week whether you are on track.</p><div class="row"><label class="small" for="plDate">Target sitting</label><input type="date" id="plDate"><label class="small" for="plHours">Hours per week</label><input type="number" id="plHours" min="1" max="80" value="15"><button class="btn primary" id="plSave">Make my plan</button></div></div>`;
  const on=st.need<=S.plan.hours, ahead=st.done-st.expectedDone;const daily=Math.round(S.plan.hours/7*60);
  const dueN=NODES.filter(n=>CONTENT[n.id]&&isDue(n.id)).length,dueC=dueCards().length;const nx=nextNode();
  return `<div class="card stack"><div class="row" style="justify-content:space-between"><h2 style="font-size:20px">Study plan</h2><button class="btn sm ghost" id="plEdit">Change</button></div>
  <div class="kpis"><div class="kpi"><div class="v">${st.weeks>0?Math.ceil(st.weeks):0}</div><div class="k">Weeks to ${esc(S.plan.date)}</div></div><div class="kpi"><div class="v">${Math.round(st.remain)} h</div><div class="k">Study left</div></div><div class="kpi"><div class="v" style="color:${on?"var(--good)":"var(--bad)"}">${isFinite(st.need)?st.need.toFixed(1):"–"} h</div><div class="k">Needed per week</div></div><div class="kpi"><div class="v">${S.plan.hours} h</div><div class="k">Your weekly hours</div></div></div>
  <p style="margin:0">${st.weeks<=0?"The target date has passed. Set a new one.":on?`<span class="tag good">on track</span> At ${S.plan.hours} h a week you finish in about ${Math.ceil(st.remain/S.plan.hours)} weeks.`:`<span class="tag bad">behind</span> At ${S.plan.hours} h a week you need about ${Math.ceil(st.remain/S.plan.hours)} weeks, but only ${Math.ceil(st.weeks)} remain. Add hours or move the date.`} ${Math.abs(ahead)>=1?`You are ${Math.round(Math.abs(ahead))} h ${ahead>0?"ahead of":"behind"} the straight-line pace.`:""}</p>
  <div><b style="font-family:var(--display)">Today, about ${daily} minutes</b><ol class="small" style="margin:6px 0 0;padding-left:20px"><li>Review ${dueN} due topic${dueN===1?"":"s"} and ${Math.min(dueC,40)} due card${dueC===1?"":"s"} (Review tab).</li>${nx?`<li>Learn: <button class="btn sm ghost" id="plNext">${esc(nx.t)}</button> (about ${nx.h} h, may take more than one day).</li>`:"<li>All nodes mastered. Move to full mocks.</li>"}<li>Finish with a 10-question mixed round.</li></ol></div></div>`;}
function wirePlanner(root){const s=root.querySelector("#plSave");if(s)s.addEventListener("click",()=>{const d=root.querySelector("#plDate").value,h=parseFloat(root.querySelector("#plHours").value);if(!d||!(h>0)){toast("Enter a date and weekly hours.");return;}if(new Date(d)<=new Date()){toast("Pick a date in the future.");return;}S.plan={date:d,hours:h,start:Date.now(),startRemain:planStats().remain};save();renderReady();});
  const e=root.querySelector("#plEdit");if(e)e.addEventListener("click",()=>{S.plan=null;save();renderReady();});const n=root.querySelector("#plNext");if(n)n.addEventListener("click",()=>openNode(nextNode().id));}

/* ---------- 4. card-level spaced repetition ---------- */
const IV=[0,1,3,7,14,30,60];
const cardKey=f=>qHash("c:"+f);
function allStartedCards(){const out=[];NODES.forEach(n=>{if(!CONTENT[n.id]||status(n.id)==="new")return;nodeCards(n.id).forEach(c=>out.push({n:n.id,f:c[0],b:c[1],k:cardKey(c[0])}));});return out;}
function dueCards(){const t=today();const all=allStartedCards();const due=all.filter(c=>S.cards[c.k]&&S.cards[c.k][1]<=t);const fresh=all.filter(c=>!S.cards[c.k]).slice(0,Math.max(0,20-due.length));return due.concat(fresh);}
function gradeCard(c,g){const st=S.cards[c.k]||[0,today()];let box=st[0];if(g===0)box=1;else if(g===1)box=Math.max(1,box);else box=Math.min(6,box+1);const iv=g===1?Math.max(1,Math.round(IV[box]/2)):IV[box];S.cards[c.k]=[box,today()+iv];save();}
function runSRS(host){let deck=shuffle(dueCards());const total=deck.length;let n=0;
  const draw=()=>{if(!deck.length){host.innerHTML=`<div class="card"><b>Cards done for today.</b> ${total} reviewed. New cards appear as you start new nodes.</div>`;return;}const c=deck[0];
   host.innerHTML=`<div class="mono small muted" style="margin-bottom:6px">${n}/${total} · ${esc(nodeById(c.n).t)} · box ${(S.cards[c.k]||[0])[0]}</div><div class="fc"><div class="fcard" id="srsCard" tabindex="0"><div class="face front"><span class="lbl">QUESTION · tap to flip</span><div>${c.f}</div></div><div class="face back"><span class="lbl">ANSWER</span><div>${c.b}</div></div></div></div><div class="srsbtns"><button class="btn" data-g="0">Again</button><button class="btn" data-g="1">Hard</button><button class="btn primary" data-g="2">Good</button></div>`;
   const fc=host.querySelector("#srsCard");fc.addEventListener("click",()=>fc.classList.toggle("flip"));fc.addEventListener("keydown",e=>{if(e.key===" "||e.key==="Enter"){e.preventDefault();fc.classList.toggle("flip");}});
   host.querySelectorAll("[data-g]").forEach(b=>b.addEventListener("click",()=>{const g=+b.dataset.g;gradeCard(c,g);deck.shift();if(g===0)deck.push(c);else{n++;addXP(1);}draw();}));};draw();}

/* ---------- 5. integrated cases ---------- */
function renderCases(){const host=$("#casesHost");if(!CASES.length){host.innerHTML='<div class="card muted">Cases are loading in a later update.</div>';return;}
  host.innerHTML=`<div class="card"><h2 style="font-size:20px">Integrated cases</h2><p class="small muted" style="margin:4px 0 0">One patient, several subjects. Each case unfolds in steps that cross modules, the way exam stems connect anatomy, microbiology, drugs and treatment. Every step links back to the node that teaches it.</p></div><div class="casegrid" style="margin-top:12px">${CASES.map(c=>{const best=S.caseBest[c.id];return `<div class="card"><b style="font-family:var(--display)">${esc(c.title)}</b><span class="small muted">${c.steps.length} steps · ${(c.areas||[]).map(a=>'<span class="tag">'+a+'</span>').join(" ")}</span>${best!=null?`<span class="mono small" style="color:${best>=80?"var(--good)":"var(--muted)"}">best ${best}%</span>`:""}<div><button class="btn sm primary" data-case="${c.id}">${best!=null?"Retry":"Start"}</button></div></div>`;}).join("")}</div><div id="caseRun" class="card" hidden style="margin-top:12px"></div>`;
  host.querySelectorAll("[data-case]").forEach(b=>b.addEventListener("click",()=>openCase(b.dataset.case)));}
function openCase(id){const c=CASES.find(x=>x.id===id);if(!c)return;const box=$("#caseRun");box.hidden=false;let i=0,score=0;
  const draw=()=>{if(i>=c.steps.length){const pct=Math.round(score/c.steps.length*100);S.caseBest[c.id]=Math.max(S.caseBest[c.id]||0,pct);save();addXP(score*10);if(pct===100)confetti();
     box.innerHTML=`<h3 style="font-size:20px">${esc(c.title)}: ${score}/${c.steps.length}</h3>${c.summary?`<div class="ex">${c.summary}</div>`:""}<div class="row" style="margin-top:12px"><button class="btn primary" id="csAgain">Again</button><button class="btn" id="csBack">All cases</button></div>`;
     box.querySelector("#csAgain").addEventListener("click",()=>openCase(id));box.querySelector("#csBack").addEventListener("click",()=>{box.hidden=true;window.scrollTo({top:0});});return;}
   const s=c.steps[i];const opts=shuffle([s.answer,...s.wrong]);
   box.innerHTML=`<div class="row" style="justify-content:space-between"><span class="mono small">${esc(c.title)} · step ${i+1}/${c.steps.length}</span><span class="tag">${esc(nodeById(s.node)?nodeById(s.node).t:s.node)}</span></div><div class="casestem" style="margin-top:8px">${c.stem}${c.steps.slice(0,i+1).map(x=>x.reveal?`<p style="margin:8px 0 0"><b>Update:</b> ${x.reveal}</p>`:"").join("")}</div><p class="q" style="margin:12px 0 0">${s.q}</p><div class="opts">${opts.map((o,k)=>`<button class="opt" data-k="${k}"><span class="k">${"ABCDE"[k]}</span><span>${o}</span></button>`).join("")}</div><div id="csAfter"></div>`;
   box.querySelectorAll(".opt").forEach(b=>b.addEventListener("click",()=>{const ok=opts[+b.dataset.k]===s.answer;box.querySelectorAll(".opt").forEach(x=>{x.disabled=true;const v=opts[+x.dataset.k];if(v===s.answer)x.classList.add("right");else if(x===b)x.classList.add("wrong");else x.classList.add("dim");});
     const ns=NS(s.node);ns.a++;S.answered++;if(ok){ns.c++;S.correct++;score++;}save();
     box.querySelector("#csAfter").innerHTML=`<div class="ex"><b>${ok?"Correct.":"Not quite."}</b> ${ok?"":"Answer: "+s.answer+". "}${s.explain}</div><div class="row" style="margin-top:10px;justify-content:space-between"><button class="btn sm ghost" id="csNode">Open the node</button><button class="btn primary" id="csNext">${i===c.steps.length-1?"Finish":"Next step →"}</button></div>`;
     box.querySelector("#csNode").addEventListener("click",()=>openNode(s.node));box.querySelector("#csNext").addEventListener("click",()=>{i++;draw();});}));
   box.scrollIntoView({behavior:"smooth",block:"start"});};draw();}

/* ---------- 6. compare drills ---------- */
function renderCompare(){const host=$("#cmpHost");if(!PAIRS.length){host.innerHTML='<div class="card muted">Compare drills are loading in a later update.</div>';return;}
  host.innerHTML=`<div class="card"><h2 style="font-size:20px">Compare</h2><p class="small muted" style="margin:4px 0 0">Look-alike conditions, drugs and techniques are where exams set traps. Study the table, then sort each statement into the right side as fast as you can.</p></div><div class="pairgrid" style="margin-top:12px">${PAIRS.map(p=>{const b=S.pairBest[p.id];return `<div class="card"><b style="font-family:var(--display)">${esc(p.title)}</b><span class="small muted">${esc(p.a)} vs ${esc(p.b)}</span>${b!=null?`<span class="mono small" style="color:${b>=90?"var(--good)":"var(--muted)"}">best ${b}%</span>`:""}<div><button class="btn sm primary" data-pair="${p.id}">Open</button></div></div>`;}).join("")}</div><div id="pairRun" class="card" hidden style="margin-top:12px"></div>`;
  host.querySelectorAll("[data-pair]").forEach(b=>b.addEventListener("click",()=>openPair(b.dataset.pair)));}
function openPair(id){const p=PAIRS.find(x=>x.id===id);if(!p)return;const box=$("#pairRun");box.hidden=false;
  box.innerHTML=`<h3 style="font-size:20px">${esc(p.title)}</h3><div class="tscroll" style="margin-top:10px"><table class="cmp"><tr><th>Feature</th><th>${esc(p.a)}</th><th>${esc(p.b)}</th></tr>${p.table.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</table></div>${p.key?`<div class="ex">${p.key}</div>`:""}<div class="row" style="margin-top:12px"><button class="btn primary" id="pDrill">Start the drill (${p.drill.length})</button>${(p.nodes||[]).map(n=>nodeById(n)?`<button class="btn sm ghost" data-node="${n}">${esc(nodeById(n).t)}</button>`:"").join("")}</div><div id="pArea" style="margin-top:12px"></div>`;
  box.querySelectorAll("[data-node]").forEach(b=>b.addEventListener("click",()=>openNode(b.dataset.node)));
  box.querySelector("#pDrill").addEventListener("click",()=>{const d=shuffle(p.drill);let i=0,score=0;const area=box.querySelector("#pArea");
    const draw=()=>{if(i>=d.length){const pct=Math.round(score/d.length*100);S.pairBest[p.id]=Math.max(S.pairBest[p.id]||0,pct);save();addXP(score*2);area.innerHTML=`<div class="ex"><b>${score}/${d.length}</b> correct. ${pct>=90?"Sharp.":"Re-read the rows you missed and run it again."}</div>`;return;}
      const it=d[i];area.innerHTML=`<div class="mono small muted">${i+1}/${d.length}</div><p class="q" style="margin:6px 0 0">${it[0]}</p><div class="ab"><button class="btn" data-s="a">${esc(p.a)}</button><button class="btn" data-s="b">${esc(p.b)}</button></div><div id="pEx"></div>`;
      area.querySelectorAll("[data-s]").forEach(b=>b.addEventListener("click",()=>{const ok=b.dataset.s===it[1];if(ok)score++;area.querySelectorAll("[data-s]").forEach(x=>{x.disabled=true;if(x.dataset.s===it[1])x.classList.add("primary");});area.querySelector("#pEx").innerHTML=`<div class="ex"><b>${ok?"Right.":"No, "+esc(it[1]==="a"?p.a:p.b)+"."}</b> ${it[2]||""}</div><div class="row" style="justify-content:flex-end;margin-top:8px"><button class="btn primary" id="pNext">Next →</button></div>`;area.querySelector("#pNext").addEventListener("click",()=>{i++;draw();});}));};draw();});
  box.scrollIntoView({behavior:"smooth",block:"start"});}

/* ---------- 7. high-yield sheets and numbers ---------- */
function renderSheets(){const host=$("#sheetHost");const mods=MODS.filter(m=>SHEETS[m.id]);
  host.innerHTML=`<div class="card"><h2 style="font-size:20px">High-yield sheets</h2><p class="small muted" style="margin:4px 0 8px">One page per module for the last weeks before the exam: the facts and decisions most likely to be tested, and the traps. Read them after the module is mastered, not instead of it.</p>${mods.length?`<div class="row"><label for="shSel" class="small">Module</label><select id="shSel" class="btn">${mods.map(m=>`<option value="${m.id}">${esc(m.title)}</option>`).join("")}</select></div>`:'<p class="muted small">Sheets are loading in a later update.</p>'}</div><div id="shBody" class="card sheet prose" style="margin-top:12px" ${mods.length?"":"hidden"}></div>
  <div class="card stack" style="margin-top:12px"><h2 style="font-size:20px">Must-know numbers</h2><p class="small muted" style="margin:0">Doses, thresholds, intervals and limits drawn from the verified modules. Pick the right value from four of the same kind.</p>${NUMBERS.length?`<div class="row"><label for="nbCat" class="small">Set</label><select id="nbCat" class="btn"><option value="">All (${NUMBERS.length})</option>${[...new Set(NUMBERS.map(x=>x[0]))].map(c=>`<option>${esc(c)}</option>`).join("")}</select><button class="btn primary" id="nbGo">Start 15</button></div><div id="nbArea"></div>`:'<p class="muted small">Number drills are loading in a later update.</p>'}</div>`;
  if(mods.length){const sel=host.querySelector("#shSel"),body=host.querySelector("#shBody");const show=()=>{body.innerHTML=SHEETS[sel.value];};sel.addEventListener("change",show);show();}
  const go=host.querySelector("#nbGo");if(go)go.addEventListener("click",()=>runNumbers(host.querySelector("#nbCat").value,host.querySelector("#nbArea")));}
function runNumbers(cat,area){const pool=NUMBERS.filter(x=>!cat||x[0]===cat);const d=shuffle(pool).slice(0,15);let i=0,score=0;
  const draw=()=>{if(i>=d.length){addXP(score*2);area.innerHTML=`<div class="ex"><b>${score}/${d.length}</b> correct.</div>`;return;}const it=d[i];
    const others=shuffle(NUMBERS.filter(x=>x[0]===it[0]&&x[2]!==it[2]).map(x=>x[2]).filter((v,j,a)=>a.indexOf(v)===j)).slice(0,3);while(others.length<3){const r=NUMBERS[Math.floor(Math.random()*NUMBERS.length)][2];if(r!==it[2]&&!others.includes(r))others.push(r);}
    const opts=shuffle([it[2],...others]);
    area.innerHTML=`<div class="mono small muted" style="margin-top:8px">${i+1}/${d.length} · ${esc(it[0])}</div><p class="q" style="margin:6px 0 0">${it[1]}</p><div class="opts">${opts.map((o,k)=>`<button class="opt" data-k="${k}"><span class="k">${"ABCD"[k]}</span><span>${o}</span></button>`).join("")}</div><div id="nbEx"></div>`;
    area.querySelectorAll(".opt").forEach(b=>b.addEventListener("click",()=>{const ok=opts[+b.dataset.k]===it[2];if(ok)score++;area.querySelectorAll(".opt").forEach(x=>{x.disabled=true;const v=opts[+x.dataset.k];if(v===it[2])x.classList.add("right");else if(x===b)x.classList.add("wrong");else x.classList.add("dim");});
      area.querySelector("#nbEx").innerHTML=`<div class="ex">${it[4]||""}${it[3]&&nodeById(it[3])?` <button class="btn sm ghost" id="nbNode">${esc(nodeById(it[3]).t)}</button>`:""}</div><div class="row" style="justify-content:flex-end;margin-top:8px"><button class="btn primary" id="nbNext">Next →</button></div>`;
      const nn=area.querySelector("#nbNode");if(nn)nn.addEventListener("click",()=>openNode(it[3]));area.querySelector("#nbNext").addEventListener("click",()=>{i++;draw();});}));};draw();}

/* ---------- problem reports on every answered question ---------- */
const _answer=answer;
answer=function(btn,ok,q,opts){_answer(btn,ok,q,opts);const af=run&&run.host.querySelector("#after");if(!af)return;
  const wrap=document.createElement("div");wrap.className="rep";wrap.innerHTML=`<button class="btn sm ghost" type="button">Report a problem with this question</button>`;af.appendChild(wrap);
  wrap.querySelector("button").addEventListener("click",()=>{wrap.innerHTML=`<label class="small" for="repTxt">What looks wrong? Your coach sees this in your progress code.</label><textarea id="repTxt" placeholder="For example: my textbook says 4 mm, not 3 mm."></textarea><div class="row" style="margin-top:6px"><button class="btn sm primary" type="button">Save report</button></div>`;
    wrap.querySelector(".primary").addEventListener("click",()=>{const note=wrap.querySelector("textarea").value.trim();S.reports.push({n:q.n,q:q.q.slice(0,160),note,d:Date.now()});save();wrap.innerHTML='<span class="small muted">Saved. It appears under Progress, ready to send.</span>';});});};

/* ---------- tabs, wraps and boot ---------- */
const tabs=document.querySelector(".tabs");
const addTab=(id,label,before)=>{const b=document.createElement("button");b.setAttribute("role","tab");b.dataset.tab=id;b.textContent=label;b.setAttribute("aria-selected","false");tabs.insertBefore(b,tabs.querySelector(`[data-tab="${before}"]`));b.addEventListener("click",()=>showTab(id));
  const sec=document.createElement("section");sec.className="view";sec.id="view-"+id;sec.hidden=true;sec.innerHTML=`<div id="${{cases:"casesHost",compare:"cmpHost",sheets:"sheetHost"}[id]}"></div>`;document.getElementById("view-exams").before(sec);};
addTab("cases","Cases","exams");addTab("compare","Compare","exams");addTab("sheets","Sheets","exams");
const _showTab=showTab;
showTab=function(t){_showTab(t);if(t==="cases")renderCases();if(t==="compare")renderCompare();if(t==="sheets")renderSheets();};
/* search bar in the hero */
const hero=document.querySelector(".hero");const sb=document.createElement("div");sb.innerHTML=`<div class="searchbar"><input id="srchQ" type="search" placeholder="Search topics, cards, questions, cases" aria-label="Search everything" autocomplete="off"></div><div class="sres" id="srchRes"></div>`;hero.appendChild(sb);
let st=null;sb.querySelector("#srchQ").addEventListener("input",e=>{clearTimeout(st);const v=e.target.value;st=setTimeout(()=>renderSearch(sb.querySelector("#srchRes"),v),180);});
/* path: banner on top */
const _renderPath=renderPath;
renderPath=function(){_renderPath();const host=$("#pathHost");const b=backupBanner();if(b){host.insertAdjacentHTML("afterbegin",b);const bk=host.querySelector("#bkNow");if(bk)bk.addEventListener("click",saveBackupFile);}};
/* review: daily cards deck */
const _renderReview=renderReview;
renderReview=function(){_renderReview();const host=$("#reviewHost");const n=dueCards().length;const card=document.createElement("div");card.className="card";card.innerHTML=`<h2 style="font-size:20px">Daily cards</h2><p class="small muted" style="margin:4px 0 10px">Each flashcard from the nodes you have started returns on its own schedule: Again tomorrow, Good after 1, 3, 7, 14, 30 then 60 days.</p><div class="row"><button class="btn primary" id="srsGo" ${n?"":"disabled"}>Review ${n} card${n===1?"":"s"}</button></div><div id="srsHost" style="margin-top:12px"></div>`;host.insertBefore(card,host.children[1]||null);
  const g=card.querySelector("#srsGo");if(n)g.addEventListener("click",()=>runSRS(card.querySelector("#srsHost")));};
/* readiness: planner on top */
const _renderReady=renderReady;
renderReady=function(){_renderReady();const host=$("#readyHost");host.insertAdjacentHTML("afterbegin",plannerCard());wirePlanner(host);};
/* progress: backup, storage, reports */
const _renderProgress=renderProgress;
renderProgress=function(){_renderProgress();const host=$("#progHost");const div=document.createElement("div");div.className="card stack";
  div.innerHTML=`<h2 style="font-size:20px">Backup and device</h2><p class="small" style="margin:0">${standalone()?'<span class="tag good">installed</span> Running from the home screen.':'<span class="tag warn">not installed</span> In Safari tap Share, then Add to Home Screen, so it works offline and Safari keeps your progress.'} ${persisted===true?'<span class="tag good">storage protected</span>':persisted===false?'<span class="tag warn">storage not protected</span>':""}</p><p class="small muted" style="margin:0">Last backup file: ${S.lastBackup?fmtDate(S.lastBackup):"never"}.</p><div class="row"><button class="btn primary" id="bkSave">Save backup file</button><label class="btn" for="bkFile" style="cursor:pointer">Restore from file</label><input type="file" id="bkFile" accept="application/json,.json" hidden></div>
  <h3 style="font-size:16px;margin:6px 0 0">Question reports (${S.reports.length})</h3>${S.reports.length?`<ol class="small" style="margin:4px 0 0;padding-left:20px">${S.reports.slice(-15).reverse().map(r=>`<li><b>${esc(r.n)}</b>: ${esc(r.q)}${r.note?` <i>— ${esc(r.note)}</i>`:""}</li>`).join("")}</ol><div class="row"><button class="btn sm" id="repCopy">Copy reports</button></div>`:'<p class="small muted" style="margin:0">Use "Report a problem" under any answered question. Reports travel in your progress code.</p>'}`;
  host.insertBefore(div,host.children[1]||null);
  div.querySelector("#bkSave").addEventListener("click",saveBackupFile);div.querySelector("#bkFile").addEventListener("change",e=>{if(e.target.files[0])restoreFromFile(e.target.files[0]);});
  const rc=div.querySelector("#repCopy");if(rc)rc.addEventListener("click",()=>{const txt=S.reports.map(r=>`${r.n} | ${r.q} | ${r.note}`).join("\n");navigator.clipboard.writeText(txt).then(()=>toast("Copied.")).catch(()=>toast("Copy failed; use the progress code instead."));});};
window.addEventListener("hashchange",()=>{});
/* re-render whichever view is showing so the new layers appear */
const cur=document.querySelector('[role="tab"][aria-selected="true"]');showTab(cur?cur.dataset.tab:"path");
})();
