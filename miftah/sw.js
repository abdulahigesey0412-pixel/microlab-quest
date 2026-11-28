/* Miftāḥ offline support. Pages: network first, so a reader always gets the newest version when online; the saved copy only when offline. Fonts and icons: saved copy first. Book text is kept by the page itself; services are never cached here. */
const CACHE="miftah-v4";
const FILES=["./","index.html","manifest.webmanifest","icon-180.png","icon-192.png","icon-512.png"].concat(["fonts/Amiri-0bf41955.woff2", "fonts/Amiri-202e96cd.woff2", "fonts/Amiri-5ed9bd83.woff2", "fonts/Amiri-64a948bf.woff2", "fonts/Amiri-967a6925.woff2", "fonts/Amiri-b2ed8126.woff2", "fonts/IBMPlexSans-05d29bfe.woff2", "fonts/IBMPlexSans-118b756c.woff2", "fonts/Newsreader-7a09be03.woff2", "fonts/Newsreader-7ab0b816.woff2", "fonts/Newsreader-7abfa560.woff2", "fonts/Newsreader-f0c28dac.woff2", "fonts/fonts.css"]);
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES).catch(()=>{})));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);if(u.origin!==self.location.origin)return;
  if(r.mode==="navigate"||u.pathname.endsWith("/")||u.pathname.endsWith(".html")){
    e.respondWith(fetch(r).then(res=>{if(res&&res.ok){const c2=res.clone();caches.open(CACHE).then(c=>c.put("./",c2));}return res;}).catch(()=>caches.open(CACHE).then(c=>c.match("./").then(h=>h||c.match("index.html")))));
    return;}
  e.respondWith(caches.open(CACHE).then(c=>c.match(r,{ignoreSearch:true}).then(hit=>hit||fetch(r).then(res=>{if(res&&res.ok)c.put(r,res.clone());return res;}))));});
