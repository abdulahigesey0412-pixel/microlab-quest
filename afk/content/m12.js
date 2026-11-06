/* Module m12: Local anaesthesia. Written for a learner starting from zero.
   References: Malamed Handbook of Local Anesthesia; Becker & Reed, Anesth Prog 2006; Ouanounou et al., Int Dent J 2020 (Canadian maximum doses);
   Health Canada monographs (Septanest SP/N, Citanest Forte); AAPD Use of Local Anesthesia 2023; Gaffen & Haas, JCDA 2009. */
window.CONTENT = window.CONTENT || {};

window.CONTENT["m12-n01"] = {
 understand: `
 <p><b>A local anaesthetic does not remove pain at its source; it stops the message travelling.</b> A nerve signal is an action potential: voltage-gated <b>sodium channels</b> open, Na+ rushes in, the membrane depolarises and the next segment fires. The drug binds inside the channel and stops Na+ passing. Block enough channels along a length of nerve and the membrane cannot reach threshold, so the impulse dies. The resting potential stays essentially unchanged. Solution reaches the outer (mantle) fibres before the central (core) fibres. In an inferior alveolar block the mantle fibres serve the molars, so molars numb before incisors.</p>
 <p><b>The molecule has three parts:</b> a lipid-soluble aromatic ring, an intermediate chain and an amine. The chain names the class. The amine makes the drug a <b>weak base</b> with two forms: a charged cation that dissolves in water and an uncharged base that dissolves in membrane.</p>
 <p><b>pKa sets the speed of onset.</b> pKa is the pH at which the two forms are equal. Every injectable dental local anaesthetic has a pKa above tissue pH (7.4), so most of a dose is charged after injection. Only the uncharged base crosses the nerve membrane. Inside, it re-equilibrates and the cation blocks the channel from the inner side. A lower pKa leaves more base: mepivacaine 7.6, articaine 7.8, lidocaine 7.9, bupivacaine 8.1. At a pKa of 7.8, about 28 percent is base at pH 7.4 but under 2 percent at pH 6.</p>
 <p><b>Why infection and inflammation cause failure.</b></p>
 <ul>
 <li><b>Low pH</b> shifts the balance to the charged form, so far less drug enters the nerve.</li>
 <li><b>Vasodilation</b> carries drug away faster.</li>
 <li><b>Sensitised nerves</b> express more sodium channels, including types less responsive to these drugs. This is why a block given in healthy tissue can still fail on a tooth with irreversible pulpitis.</li>
 </ul>
 <p>Hence the rule: block the nerve at a distance rather than inject into the infected area.</p>
 <p><b>Potency and duration.</b> Greater lipid solubility means higher potency, so bupivacaine works at 0.5% while lidocaine needs 2%. Greater protein binding keeps drug at the channel longer, so bupivacaine lasts longest. Most local anaesthetics dilate vessels, which speeds their own absorption; that is why vasoconstrictors are added.</p>
 <p><b>Esters and amides differ in clearance.</b> <b>Esters</b> (procaine, tetracaine, benzocaine) are hydrolysed by plasma cholinesterase, and those derived from <b>PABA</b> (para-aminobenzoic acid) release a potentially allergenic fragment. They are no longer packaged in dental cartridges; benzocaine and tetracaine survive as topicals. <b>Amides</b> (lidocaine, mepivacaine, prilocaine, bupivacaine) are cleared by the liver, so severe liver disease raises blood levels. <b>Articaine</b> is classed as an amide but carries an ester side chain and a thiophene ring. About 90 percent is inactivated by plasma esterases, giving a half-life of about 20 to 25 minutes against about 90 minutes for lidocaine. It releases no PABA-like fragment.</p>
 <p><b>Why the exam cares.</b> Stems ask why anaesthesia failed in an abscess, which drug has the fastest onset, or where a drug is metabolised in a patient with liver disease. One chain answers them all: pKa and pH decide how much base exists, base decides how much drug enters the nerve, and the chemical link decides how it is cleared.</p>`,
 connect: [
  {to:"m03-n03", why:"The action potential taught there is exactly what these drugs interrupt; sodium channel physiology predicts how a block works."},
  {to:"m01-n01", why:"Only the uncharged base crosses the lipid bilayer, so membrane biology is the reason pH and pKa control anaesthesia."},
  {to:"m11-n01", why:"Absorption, hepatic clearance and half-life explain why amides, esters and articaine differ in systemic risk."},
  {to:"m20-n05", why:"The endodontic emergency is where anaesthesia most often fails, because inflamed pulpal nerves and acidic tissue act together."},
  {to:"m12-n02", why:"The chemistry here explains the agents' onset and duration, and the absorption it describes is why vasoconstrictors and maximum doses matter."}
 ],
 apply: {
  vignette: "A 45-year-old receives an inferior alveolar nerve block with 3% mepivacaine plain on one visit and with 0.5% bupivacaine with 1:200,000 epinephrine on another. Bupivacaine takes noticeably longer to act and lasts far longer. Which of the following best explains both observations?",
  options: ["Bupivacaine has a higher pKa, leaving less uncharged base at tissue pH, and greater protein binding, which holds it at the channel","Bupivacaine is an ester, so slow hydrolysis in plasma delays its onset and extends its action","Bupivacaine has lower lipid solubility, so it enters the nerve slowly and leaves it slowly","Epinephrine alone delays the onset and extends the action, and the agents themselves do not differ"],
  answer: "Bupivacaine has a higher pKa, leaving less uncharged base at tissue pH, and greater protein binding, which holds it at the channel",
  steps: [
   "The ask: one explanation that covers slow onset and long duration together.",
   "Facts that matter: pKa decides how much base is available to enter the nerve; protein binding decides how long drug stays at the channel.",
   "Cross out the ester option: bupivacaine is an amide cleared by the liver, and hydrolysis in plasma would shorten action, not extend it.",
   "Cross out low lipid solubility: bupivacaine is highly lipid soluble, which is why it works at only 0.5%.",
   "Cross out epinephrine alone: a vasoconstrictor does prolong action, but lidocaine with epinephrine does not last as long as bupivacaine with epinephrine, so the agent itself matters.",
   "The survivor explains everything: pKa 8.1 against 7.6 means less base at pH 7.4 and slower onset, and the highest protein binding of the dental agents means the longest block."
  ]
 },
 teach: {
  prompt: "Starting from a cartridge of lidocaine being injected, trace the drug to its binding site and then explain three separate reasons it may fail in a patient with an acutely inflamed tooth.",
  model: "After injection the drug exists as a charged cation and an uncharged base, in a ratio set by its pKa and the tissue pH. The base crosses the nerve membrane, re-equilibrates inside, and the cation blocks the sodium channel from within so the impulse cannot pass. In inflamed tissue the low pH leaves far less base to enter the nerve. Vasodilation also carries the drug away faster. Finally, inflamed nerves are sensitised and express more sodium channels, including less responsive types, which is why even a distant block in normal tissue can fail on a tooth with irreversible pulpitis."
 },
 cards: [
  ["Site of action of local anaesthetics","Inside voltage-gated sodium channels; Na+ influx is blocked"],
  ["Which form crosses the nerve membrane?","The uncharged base"],
  ["Which form blocks the channel?","The charged cation, from the inner side of the membrane"],
  ["Definition of pKa","The pH at which charged and uncharged forms are equal"],
  ["pKa and onset","Lower pKa, more base at tissue pH, generally faster onset"],
  ["pKa values to know","Mepivacaine 7.6; articaine 7.8; lidocaine 7.9; bupivacaine 8.1"],
  ["Three reasons anaesthesia fails in inflamed tissue","Low pH, vasodilation, sensitised nerves with more sodium channels"],
  ["Lipid solubility predicts","Potency"],
  ["Protein binding predicts","Duration"],
  ["Ester clearance and allergy concern","Plasma cholinesterase; PABA-derived esters release a potential allergen"],
  ["Amide clearance","Liver; severe liver disease raises blood levels"],
  ["Why articaine has a short half-life","Ester side chain: about 90 percent inactivated by plasma esterases; half-life about 20 to 25 minutes"]
 ],
 questions: [
  ["Local anaesthetics produce conduction block by:","Binding within voltage-gated sodium channels and preventing Na+ influx",["Opening potassium channels and hyperpolarising the nerve membrane","Blocking calcium entry at the nerve terminal","Dissolving the myelin sheath around the axon"],"With Na+ unable to enter, the membrane cannot reach threshold and the impulse stops. The resting potential is essentially unchanged, so hyperpolarisation is not the mechanism."],
  ["The pKa of a local anaesthetic is the pH at which:","Charged and uncharged forms are present in equal amounts",["Most of the drug is in the uncharged, lipid-soluble form","Most of the drug is in the charged, water-soluble form","Protein binding of the drug to plasma albumin is greatest"],"pKa is defined by the 50:50 point. Because dental agents have a pKa above 7.4, the charged form predominates in normal tissue, not the uncharged form."],
  ["Inside the axon, the form of a local anaesthetic chiefly responsible for blocking the sodium channel is the:","Charged cation acting from the inner side of the membrane",["Uncharged base acting from the outer side of the membrane","Protein-bound form acting in the extracellular fluid","Hydrolysed metabolite acting at the node of Ranvier"],"The base is the form that crosses the membrane, but it re-equilibrates in the axoplasm and the cation binds within the channel. Confusing the crossing form with the blocking form is the usual error."],
  ["A local anaesthetic has a pKa of 7.8 and is placed in tissue at pH 6.8. Approximately what percentage is in the uncharged base form?","9 percent",["1 percent","50 percent","91 percent"],"One pH unit below the pKa gives a ratio of 10 charged to 1 uncharged, so 1 part in 11, or about 9 percent, is base. The figure of 91 percent is the charged fraction, the reverse of what was asked."],
  ["Judged by pKa alone, which of the following has the greatest proportion of uncharged base at pH 7.4?","Mepivacaine",["Lidocaine","Articaine","Bupivacaine"],"Mepivacaine has the lowest pKa of these (7.6), the closest to tissue pH. Bupivacaine, at 8.1, has the least base, which fits its slower onset."],
  ["A 41-year-old has a fluctuant buccal abscess on tooth 4.6. Compared with infiltration into the swelling, an inferior alveolar nerve block offers the better chance of anaesthesia because:","The solution is deposited in healthy tissue at near-normal pH, away from the infection",["A block uses a higher concentration of the same agent","Pus hydrolyses an amide placed directly into it","The inferior alveolar nerve has fewer sodium channels than peripheral branches"],"Away from the abscess, the pH allows a useful fraction of base to form and enter the nerve. Amides are not hydrolysed by pus; the problem at the abscess is ionisation, along with vasodilation."],
  ["A 29-year-old with symptomatic irreversible pulpitis of tooth 3.6 has profound lip numbness after an inferior alveolar nerve block, but the tooth remains painful on access. The injection site was not infected. The best explanation is:","Sensitised pulpal nerves express more sodium channels, including types less responsive to the drug",["The acidic pterygomandibular space ionised the anaesthetic before it reached the nerve","Enzymes in the inflamed pulp hydrolysed the anaesthetic","Lip numbness shows the injection reached the lingual nerve only"],"Lip numbness shows the nerve trunk was reached, and the injection site has normal pH, so ionisation at the site does not explain the failure. Inflammation changes the pulpal nerve itself, making it harder to block."],
  ["Which of the following is an ester local anaesthetic?","Benzocaine",["Lidocaine","Prilocaine","Articaine"],"Benzocaine is an ester used topically. Articaine is the trap: it carries an ester side chain but is classed as an amide because of its intermediate link."],
  ["Lidocaine is metabolised chiefly in the:","Liver",["Plasma, by cholinesterase","Kidney","Lung"],"Lidocaine is an amide cleared by hepatic biotransformation, and metabolites are then excreted in urine. Plasma cholinesterase handles esters."],
  ["A 56-year-old with severe cirrhosis needs multiple extractions under lidocaine. The most likely pharmacological concern is:","Higher and more prolonged blood levels from reduced hepatic clearance",["Failure of the drug to reach the nerve because of low albumin","Rapid hydrolysis of lidocaine by raised plasma esterases","Loss of the vasoconstrictor effect of epinephrine in the liver"],"An amide depends on the liver for clearance, so repeated doses can accumulate toward toxic levels. The dose is reduced to the lowest effective amount; the block itself is not expected to fail."],
  ["The plasma half-life of articaine is much shorter than that of lidocaine because articaine:","Has an ester group that plasma esterases rapidly inactivate",["Is filtered rapidly by the kidney before hepatic metabolism begins","Binds so tightly to protein that little circulates","Is oxidised at its thiophene ring by hepatic cytochrome P450 enzymes"],"About 90 percent of articaine is inactivated by plasma esterases, giving a half-life of about 20 to 25 minutes against about 90 for lidocaine. The thiophene ring adds lipid solubility; it is not the route of clearance."],
  ["A 60-year-old developed urticaria after applying a topical benzocaine gel. The component most likely responsible is:","A PABA-related moiety of the ester",["Sodium metabisulfite preservative","The o-toluidine metabolite of the drug","The epinephrine added to the gel"],"Benzocaine is a PABA-derived ester and PABA is the recognised allergenic fragment. o-Toluidine comes from prilocaine and causes methaemoglobinaemia rather than urticaria."],
  ["Bupivacaine provides the longest duration of the dental local anaesthetics chiefly because of its:","High degree of protein binding",["Low pKa relative to lidocaine","Ester intermediate linkage","Low lipid solubility of its base"],"Protein binding correlates with affinity for the channel and predicts how long the block lasts. Its pKa of 8.1 is the highest of the dental agents and is linked with slower onset, not duration."],
  ["During the onset of an inferior alveolar nerve block, the molars usually become numb before the incisors. The best explanation is that:","Molar fibres lie in the mantle of the nerve and meet the drug before incisor core fibres",["Fibres to the molars are larger and more easily blocked than those to the incisors","The incisors are supplied chiefly by the opposite side's nerve","Drug spreads forward along the mandibular canal and reaches the molars first"],"Solution diffuses from the outside of the nerve inward, and the mantle fibres serve the proximal teeth. Overlap from the opposite side affects the central incisors, but it does not explain the order of onset."]
 ]
};

window.CONTENT["m12-n02"] = {
 understand: `
 <p><b>Every dose question is arithmetic on three facts: what is in a cartridge, what the patient may have, and how much vasoconstrictor comes with it.</b> A percentage is grams per 100 mL, so percent times 10 gives mg/mL: 2% is 20 mg/mL, 4% is 40 mg/mL. Multiply by the volume printed on the box. Canadian lidocaine, mepivacaine and prilocaine cartridges are listed at 1.8 mL; Septanest articaine is 1.7 mL.</p>
 <div class="tscroll"><table>
 <tr><th>Agent</th><th>mg per cartridge</th><th>mg/kg</th><th>Cap (mg)</th></tr>
 <tr><td>Lidocaine 2%</td><td>36 (1.8 mL)</td><td>7</td><td>500</td></tr>
 <tr><td>Articaine 4%</td><td>68 (1.7 mL); 72 (1.8 mL)</td><td>7</td><td>500</td></tr>
 <tr><td>Mepivacaine 3%</td><td>54 (1.8 mL)</td><td>6.6</td><td>400</td></tr>
 <tr><td>Prilocaine 4%</td><td>72 (1.8 mL)</td><td>8</td><td>500 (some US sources 600)</td></tr>
 <tr><td>Bupivacaine 0.5%</td><td>9 (1.8 mL)</td><td>2</td><td>200</td></tr>
 </table></div>
 <p>These are Canadian figures, and caps vary by source: the articaine monographs state only 7 mg/kg, and US sources cap bupivacaine at 90 mg. Use the lowest effective dose. Doses of different agents are <b>additive</b>: half the lidocaine maximum leaves half the maximum of a second agent.</p>
 <p><b>Method:</b> weight times mg/kg, apply the cap, divide by mg per cartridge, round down, then check the vasoconstrictor. A healthy 70 kg adult may have 490 mg of lidocaine: 490 / 36 = 13.6, so 13 cartridges. At 1:100,000 each 1.8 mL holds 0.018 mg of epinephrine, and 0.2 / 0.018 = 11.1, so the true limit is <b>11</b>. A 60 kg adult may have 420 mg of articaine: 420 / 68 = 6.2, so 6.</p>
 <p><b>Vasoconstrictors</b> slow absorption, which lowers peak blood level, lengthens the block and reduces bleeding. A ratio is grams per mL: 1:100,000 is 0.01 mg/mL, 1:200,000 is 0.005 mg/mL, 1:50,000 is 0.02 mg/mL and is reserved for haemostasis. The usual epinephrine ceiling is <b>0.2 mg per visit</b> when healthy and <b>0.04 mg</b> with significant cardiovascular disease, a convention rather than a trial-proven limit. That means 2 cartridges of 1:100,000 at 1.8 mL, or 4 of 1:200,000 at 1.7 mL (0.0085 mg each). Levonordefrin 1:20,000 is weaker; its usual maximum is 1 mg. Solutions containing a vasoconstrictor also contain <b>sulfite</b>, an antioxidant.</p>
 <p><b>Interactions.</b> Non-selective beta-blockers (propranolol) remove beta-2 dilation, so epinephrine's alpha effect is unopposed: blood pressure rises and reflex bradycardia follows, so use the least possible, record vital signs and pause to recheck them after each cartridge. Selective beta-1 blockers at usual doses have little of this effect. Tricyclic antidepressants heighten the pressor and arrhythmia risk, so levonordefrin is avoided. After cocaine or amphetamines, postpone treatment for 24 hours.</p>
 <p><b>Choosing an agent.</b> Approximate pulpal duration: mepivacaine 3% plain 20 to 40 minutes, lidocaine or articaine with epinephrine 60 to 90 minutes, and bupivacaine with epinephrine longest after a block (about 4 hours), though not after infiltration. Plain solutions suit short procedures or a patient who must avoid vasoconstrictor or sulfite. Articaine is widely used in Canada; choose 1:200,000 when haemostasis is not needed. It is not recommended under age 4.</p>
 <p><b>Why the exam cares.</b> Expect a weight, a solution and the question "how many cartridges?". The trap is forgetting the vasoconstrictor limit or rounding up.</p>`,
 connect: [
  {to:"m11-n03", why:"Alpha and beta receptor effects explain why epinephrine constricts vessels and why non-selective beta-blockers cause a hypertensive interaction."},
  {to:"m13-n05", why:"The cardiac patient is where the 0.04 mg ceiling and drug interactions change how a routine injection is given."},
  {to:"m03-n01", why:"Blood pressure physiology explains the pressor response, the reflex bradycardia and what the vasoconstrictor limit protects against."},
  {to:"m13-n03", why:"Sulfite in vasoconstrictor solutions matters most to sensitive patients with asthma, and the airway emergency is managed there."},
  {to:"m12-n04", why:"Maximum doses exist to prevent systemic toxicity, and the same arithmetic becomes critical in low-weight children."}
 ],
 apply: {
  vignette: "A healthy 65 kg adult is having a long surgical appointment using 2% lidocaine with 1:100,000 epinephrine in 1.8 mL cartridges. The maximum lidocaine dose is 7 mg/kg, capped at 500 mg, and the epinephrine ceiling is 0.2 mg per visit. What is the maximum number of whole cartridges?",
  options: ["11 cartridges, because the epinephrine limit is reached first","12 cartridges, because the lidocaine limit is reached first","13 cartridges, because the 500 mg cap applies","6 cartridges, because each cartridge holds 72 mg of lidocaine"],
  answer: "11 cartridges, because the epinephrine limit is reached first",
  steps: [
   "The ask: the limiting dose in whole cartridges, so test both the drug and the vasoconstrictor.",
   "Lidocaine limit: 7 x 65 = 455 mg, below the cap. Each cartridge holds 36 mg, and 455 / 36 = 12.6, so 12 whole cartridges.",
   "Epinephrine limit: 1:100,000 is 0.01 mg/mL, so each 1.8 mL holds 0.018 mg. Then 0.2 / 0.018 = 11.1, so 11 whole cartridges.",
   "Cross out 13: the 500 mg cap only applies when weight-based dose exceeds it, and 455 mg does not.",
   "Cross out 6: 72 mg is the content of a 4% cartridge; a 2% solution holds 36 mg in 1.8 mL.",
   "The survivor: the lower of the two limits governs, so epinephrine sets the ceiling at 11 cartridges (0.198 mg). Rounding is always downward."
  ]
 },
 teach: {
  prompt: "Without notes, derive the milligrams of drug and epinephrine in a 1.8 mL cartridge of 2% lidocaine with 1:100,000 epinephrine, then show how you would find the maximum cartridges for a 50 kg patient and for a cardiac patient.",
  model: "A 2% solution is 20 mg/mL, so 1.8 mL holds 36 mg of lidocaine. A ratio of 1:100,000 is 1 g in 100,000 mL, or 0.01 mg/mL, so 1.8 mL holds 0.018 mg of epinephrine. For 50 kg, 7 mg/kg gives 350 mg, and 350 / 36 is 9.7, so 9 whole cartridges; that carries 0.162 mg of epinephrine, under the 0.2 mg ceiling, so lidocaine is the limit. For a patient with significant cardiovascular disease the 0.04 mg ceiling applies: 0.04 / 0.018 is 2.2, so 2 cartridges. I always check both limits, take the lower, and round down."
 },
 cards: [
  ["Percent to mg/mL","Multiply percent by 10: 2% is 20 mg/mL, 4% is 40 mg/mL"],
  ["mg in 1.8 mL of 2% lidocaine","36 mg"],
  ["mg in 1.7 mL of 4% articaine","68 mg (72 mg if the cartridge is 1.8 mL)"],
  ["mg in 1.8 mL of 3% mepivacaine, 4% prilocaine, 0.5% bupivacaine","54 mg, 72 mg, 9 mg"],
  ["Canadian maximums, mg/kg and cap: lidocaine and mepivacaine","Lidocaine 7, 500 mg; mepivacaine 6.6, 400 mg"],
  ["Canadian maximums: articaine, prilocaine, bupivacaine","Articaine 7; prilocaine 8; bupivacaine 2 (caps vary by source: see the table)"],
  ["1:100,000, 1:200,000 and 1:50,000 in mg/mL","0.01, 0.005 and 0.02 mg/mL"],
  ["Epinephrine per 1.8 mL at 1:100,000","0.018 mg"],
  ["Epinephrine ceilings per visit","0.2 mg healthy; 0.04 mg significant cardiovascular disease"],
  ["Cartridges to the 0.04 mg ceiling","2 of 1:100,000 (1.8 mL); 4 of 1:200,000 (1.7 mL)"],
  ["Propranolol plus epinephrine","Unopposed alpha effect: hypertension, then reflex bradycardia"],
  ["Two agents in one visit","Doses are additive: count the fraction of each maximum used"]
 ],
 questions: [
  ["A 1.8 mL cartridge of 2% lidocaine contains how much lidocaine?","36 mg",["18 mg","20 mg","72 mg"],"A 2% solution is 20 mg/mL, and 20 x 1.8 = 36 mg. The figure of 20 mg is the content of 1 mL, not of a cartridge."],
  ["A 1.7 mL cartridge of 4% articaine contains how much articaine?","68 mg",["17 mg","40 mg","72 mg"],"A 4% solution is 40 mg/mL, and 40 x 1.7 = 68 mg. The figure of 72 mg applies to a 1.8 mL cartridge, so read the volume on the box."],
  ["A healthy 60 kg adult is to receive 4% articaine in 1.7 mL cartridges. Using a maximum of 7 mg/kg, the maximum number of whole cartridges is:","6",["5","7","10"],"7 x 60 = 420 mg and 420 / 68 = 6.2, so 6 whole cartridges, the figure the Canadian monograph gives. Rounding up to 7 would exceed the maximum."],
  ["A healthy 50 kg adult is to receive 2% lidocaine with 1:100,000 epinephrine in 1.8 mL cartridges. Using a maximum of 7 mg/kg and an epinephrine ceiling of 0.2 mg, the maximum number of whole cartridges is:","9",["7","10","13"],"7 x 50 = 350 mg and 350 / 36 = 9.7, so 9 whole cartridges carrying 0.162 mg of epinephrine, under the ceiling. Here the anaesthetic, not the vasoconstrictor, is the limit."],
  ["A healthy 80 kg adult is to receive 3% mepivacaine plain in 1.8 mL cartridges. Using a maximum of 6.6 mg/kg capped at 400 mg, the maximum number of whole cartridges is:","7",["8","9","10"],"The weight-based dose of 528 mg exceeds the cap, so 400 mg applies, and 400 / 54 = 7.4, so 7. Using 528 mg would give 9 cartridges and miss the absolute limit."],
  ["How much epinephrine is contained in three 1.8 mL cartridges of a 1:100,000 solution?","0.054 mg",["0.018 mg","0.030 mg","0.54 mg"],"A 1:100,000 solution holds 0.01 mg/mL, so each cartridge has 0.018 mg and three have 0.054 mg. The figure of 0.018 mg is one cartridge; 0.54 mg is a tenfold error."],
  ["A 66-year-old with significant cardiovascular disease is to receive 4% articaine with 1:200,000 epinephrine in 1.7 mL cartridges. With an epinephrine ceiling of 0.04 mg, the maximum number of whole cartridges is:","4",["2","6","8"],"Each cartridge holds 0.005 x 1.7 = 0.0085 mg, and 0.04 / 0.0085 = 4.7, so 4 whole cartridges. Two cartridges is the limit for 1:100,000 solutions, which carry twice the epinephrine."],
  ["An epinephrine concentration of 1:50,000 equals:","0.02 mg/mL",["0.002 mg/mL","0.05 mg/mL","0.2 mg/mL"],"One gram in 50,000 mL is 1000 mg / 50,000 mL, or 0.02 mg/mL. That is twice the concentration of 1:100,000 and the reason it is reserved for haemostasis rather than routine use."],
  ["Adding a vasoconstrictor to a local anaesthetic lowers the risk of systemic toxicity because it:","Slows absorption, reducing the peak blood level of the anaesthetic",["Increases the hepatic metabolism of the anaesthetic once absorbed","Raises the pH of the solution and speeds onset","Binds the anaesthetic in tissue so that less free drug is active"],"Local vasoconstriction keeps drug at the nerve longer and lets it enter the blood more slowly. Epinephrine-containing solutions are in fact more acidic, which may slow onset rather than speed it."],
  ["A 58-year-old taking propranolol receives several cartridges of lidocaine with epinephrine. The expected interaction is:","A rise in blood pressure followed by reflex bradycardia",["A fall in blood pressure followed by reflex tachycardia","Prolonged anaesthesia without any cardiovascular change","Methaemoglobin formation with cyanosis"],"Blocking beta-2 removes epinephrine's vasodilator action, leaving alpha vasoconstriction unopposed; the baroreceptor reflex then slows the heart. Selective beta-1 blockers at usual doses have little of this effect."],
  ["A 47-year-old taking amitriptyline needs a restoration on tooth 2.5. Which of the following is the most appropriate anaesthetic choice?","Lidocaine 2% with 1:100,000 epinephrine at a low dose, monitoring vital signs",["Mepivacaine 2% with 1:20,000 levonordefrin at the usual adult dose","Lidocaine 2% with 1:50,000 epinephrine for stronger, longer vasoconstriction","Articaine 4% with 1:100,000 epinephrine up to the full weight-based maximum"],"Tricyclics heighten the pressor and arrhythmia risk of sympathomimetics, and levonordefrin is avoided in these patients. A low dose of epinephrine with monitoring is acceptable; maximum or concentrated doses are not."],
  ["A 33-year-old with asthma has a confirmed sulfite sensitivity and needs a short restoration on tooth 1.5. The most appropriate solution is:","Mepivacaine 3% plain",["Lidocaine 2% with 1:100,000 epinephrine","Articaine 4% with 1:200,000 epinephrine","Bupivacaine 0.5% with 1:200,000 epinephrine"],"Sulfite is the antioxidant protecting the vasoconstrictor, so a plain solution avoids it. A lower epinephrine concentration does not help: the 1:200,000 product still contains sulfite."],
  ["A 25-year-old arrives for elective restorations and admits to using cocaine three hours ago. The most appropriate action is to:","Postpone the appointment for at least 24 hours",["Proceed using 1:200,000 epinephrine","Proceed using levonordefrin instead of epinephrine","Proceed after giving a beta-blocker"],"Cocaine blocks catecholamine reuptake, so a vasoconstrictor risks severe hypertension and arrhythmia. The Canadian articaine monograph advises postponing treatment if a sympathomimetic was used within 24 hours."],
  ["A healthy 52-year-old is having four impacted third molars removed and wants the longest postoperative pain relief from the anaesthetic. The most appropriate agent is:","Bupivacaine 0.5% with 1:200,000 epinephrine",["Mepivacaine 3% plain","Lidocaine 2% with 1:100,000 epinephrine","Articaine 4% with 1:200,000 epinephrine"],"Bupivacaine has the longest duration of the dental agents because of its high protein binding. Plain mepivacaine is the shortest acting of those listed and suits brief procedures instead."],
  ["A 60 kg adult has already received half the maximum dose of lidocaine (210 mg). Using 7 mg/kg, how many whole 1.7 mL cartridges of 4% articaine may still be given?","3",["1","4","6"],"Maximums are additive, so half of the articaine maximum of 420 mg remains: 210 mg, and 210 / 68 = 3.1, so 3. Six cartridges would treat the two drugs as if they did not add together."]
 ]
};

window.CONTENT["m12-n03"] = {
 understand: `
 <p><b>Choose an injection by asking two questions: which nerve carries this tooth's pulp, and which nerves carry the tissue I will touch?</b> The landmarks node teaches where the needle goes. This node teaches what each injection numbs and how injections combine. Thin, porous maxillary bone lets <b>infiltration</b> reach the apex, while the thick adult mandibular cortex usually does not, so posterior mandibular teeth need a block. A child's thinner mandible makes infiltration more useful there.</p>
 <div class="tscroll"><table>
 <tr><th>Injection</th><th>Pulps</th><th>Soft tissue</th></tr>
 <tr><td>Infiltration</td><td>Tooth at the site</td><td>Buccal tissue at the site</td></tr>
 <tr><td>PSA</td><td>1.8, 1.7, most of 1.6</td><td>Buccal, over those teeth</td></tr>
 <tr><td>MSA (if present)</td><td>1.5, 1.4, mesiobuccal root of 1.6</td><td>Buccal, over those teeth</td></tr>
 <tr><td>Infraorbital (ASA)</td><td>1.3, 1.2, 1.1; often premolars</td><td>Buccal; lower eyelid, side of nose, upper lip</td></tr>
 <tr><td>Greater palatine</td><td>None</td><td>Palate from first premolar back</td></tr>
 <tr><td>Nasopalatine</td><td>None</td><td>Palate canine to canine</td></tr>
 <tr><td>IANB</td><td>All lower teeth on that side</td><td>Buccal anterior to mental foramen; lower lip, chin</td></tr>
 <tr><td>Lingual</td><td>None</td><td>Anterior two-thirds of tongue, floor of mouth, lingual gingiva</td></tr>
 <tr><td>Long buccal</td><td>None</td><td>Buccal gingiva of the molars</td></tr>
 <tr><td>Mental</td><td>None</td><td>Buccal anterior to foramen; lower lip, chin</td></tr>
 <tr><td>Incisive</td><td>Premolars to midline</td><td>As for mental</td></tr>
 </table></div>
 <p><b>Build the combination from the procedure.</b> A restoration needs the pulp. An extraction needs the pulp and all the soft tissue around the tooth.</p>
 <ul>
 <li><b>3.6 extraction:</b> IANB, lingual and long buccal. The IANB alone leaves the lingual and buccal gingiva sensitive.</li>
 <li><b>2.6 extraction:</b> PSA, an infiltration to cover the mesiobuccal root, and greater palatine.</li>
 <li><b>1.4 extraction:</b> buccal infiltration and greater palatine.</li>
 <li><b>2.2 extraction:</b> buccal infiltration and nasopalatine.</li>
 <li><b>Mandibular premolar restorations in one quadrant:</b> incisive block, because the lingual nerve and tongue need not be numbed.</li>
 </ul>
 <p>A surgical flap or a palatal clamp brings its own soft-tissue requirement. Nerve overlap at the midline means a central incisor may also need a labial infiltration, or a block from the other side.</p>
 <p><b>Alternatives for the mandible.</b> <b>Gow-Gates</b> deposits high at the condylar neck and anaesthetises the mandibular division: inferior alveolar, lingual, mylohyoid, mental, incisive, auriculotemporal and usually buccal. It helps when an IANB fails because of accessory supply. <b>Vazirani-Akinosi</b> is done with the mouth closed, so it is the choice in trismus. <b>Supplemental</b> techniques, used after a block that has not given pulpal anaesthesia, are periodontal ligament, intraosseous and intrapulpal injection.</p>
 <p><b>Safe technique every time.</b> Apply topical, aspirate before depositing because blocks sit beside vessels, and inject slowly: the Canadian articaine monograph specifies about 1 mL per minute. Use a long needle for deep blocks and never insert to the hub. In children the mandibular foramen lies lower, so the IANB is given lower.</p>
 <p><b>Why the exam cares.</b> Stems name a tooth and a procedure and ask for the injections, or describe a residual pain and ask which nerve was missed. If you can say what each block covers, you can solve both.</p>`,
 connect: [
  {to:"m02-n10", why:"That node teaches the landmarks and needle path for each injection; this node decides which injections a given tooth and procedure need."},
  {to:"m02-n03", why:"Every entry in the coverage table is a branch of the trigeminal nerve, so its distribution predicts what a block will and will not numb."},
  {to:"m21-n01", why:"An extraction needs pulpal and all surrounding soft-tissue anaesthesia, so the choice of block is the first step in the operation."},
  {to:"m20-n05", why:"Supplemental periodontal ligament, intraosseous and intrapulpal injections are the standard rescue when a block fails on an acutely painful tooth."},
  {to:"m21-n02", why:"Surgical removal of a mandibular third molar needs inferior alveolar, lingual and long buccal anaesthesia, and trismus may call for a closed-mouth block."}
 ],
 apply: {
  vignette: "A 46-year-old requires extraction of tooth 2.6. Medical history is unremarkable and there is no infection at the injection sites. Which of the following combinations is most appropriate to give complete anaesthesia for the extraction?",
  options: ["Posterior superior alveolar block, buccal infiltration over the mesiobuccal root, and greater palatine block","Posterior superior alveolar block and nasopalatine block","Infraorbital block and greater palatine block","Buccal infiltration alone over the apices of 2.6"],
  answer: "Posterior superior alveolar block, buccal infiltration over the mesiobuccal root, and greater palatine block",
  steps: [
   "The ask: complete anaesthesia for an extraction, which means pulp, buccal tissue and palatal tissue.",
   "Facts that matter: 2.6 is an upper first molar; the PSA may not cover its mesiobuccal root; palatal tissue distal to the canine is supplied by the greater palatine nerve.",
   "Cross out PSA plus nasopalatine: the nasopalatine covers the palate only from canine to canine, nowhere near 2.6.",
   "Cross out infraorbital plus greater palatine: the infraorbital block covers anterior teeth and premolars at best, leaving most of the molar.",
   "Cross out infiltration alone: it can numb the pulp, but the palate would still feel the forceps and the elevator.",
   "The survivor covers every structure: PSA for the molar's roots, infiltration for a possible middle superior alveolar supply to the mesiobuccal root, and the greater palatine for the palate."
  ]
 },
 teach: {
  prompt: "Explain from nerve anatomy why extracting 3.6 needs three nerves, while filling 2.1 can need only one injection, and say how the plan would change if the patient could open only 15 mm.",
  model: "The pulp of 3.6 is supplied by the inferior alveolar nerve, its lingual gingiva by the lingual nerve, and its buccal gingiva by the long buccal nerve, so extraction needs all three. The thick mandibular cortex also means an infiltration would not reliably reach the apex, so the inferior alveolar nerve is blocked before it enters the bone. A restoration in 2.1 involves only the pulp, and thin maxillary bone lets a single labial infiltration reach the apex; palatal tissue need not be numbed. If the patient can open only 15 mm, the standard IANB and Gow-Gates for 3.6 are impractical, so I would use the closed-mouth Vazirani-Akinosi block."
 },
 cards: [
  ["PSA covers which pulps?","1.8, 1.7 and most of 1.6; the mesiobuccal root of 1.6 may be missed"],
  ["MSA covers (when present)","1.5, 1.4 and the mesiobuccal root of 1.6"],
  ["Infraorbital block soft tissue","Lower eyelid, side of nose, upper lip, labial gingiva"],
  ["Greater palatine covers","Palate from the first premolar backward; no pulp"],
  ["Nasopalatine covers","Anterior palate from canine to canine; no pulp"],
  ["IANB covers","All lower teeth to the midline on that side, buccal tissue anterior to the mental foramen, lower lip, chin"],
  ["Tissue the IANB misses","Buccal gingiva of the molars (long buccal) and lingual tissue unless the lingual nerve is also blocked"],
  ["Mental vs incisive block","Mental: soft tissue only. Incisive: adds the pulps of premolars to midline"],
  ["Gow-Gates advantage","High block of the mandibular division, including mylohyoid and usually buccal"],
  ["Block for limited opening","Vazirani-Akinosi (closed mouth)"],
  ["Why infiltrate 2.3 but block 3.6 in an adult?","Thin porous maxillary bone versus thick mandibular cortex"],
  ["Supplemental injections after a block","Periodontal ligament, intraosseous, intrapulpal"]
 ],
 questions: [
  ["A 37-year-old needs extraction of tooth 3.6. Which of the following combinations is most appropriate?","Inferior alveolar, lingual and long buccal blocks",["Inferior alveolar block alone with a deeper deposit","Mental and incisive blocks with lingual infiltration","Long buccal and lingual infiltrations for the soft tissue"],"The inferior alveolar nerve supplies the pulp, the lingual nerve the lingual gingiva and the long buccal the buccal gingiva at the molar. An IANB alone leaves the soft tissue around the tooth sensitive."],
  ["After an inferior alveolar and lingual block, a 44-year-old has a numb lip and tongue, but feels sharp pain when a periosteal elevator reflects the buccal gingiva at tooth 4.7. The nerve most likely responsible is the:","Long buccal nerve",["Mental nerve","Mylohyoid nerve","Lingual nerve"],"The long buccal nerve supplies the buccal gingiva of the mandibular molars and is not blocked by a routine IANB. The mental nerve supplies tissue anterior to the mental foramen, well forward of 4.7."],
  ["After a posterior superior alveolar block, tooth 1.6 remains sensitive in its mesial part during cavity preparation, while 1.7 is numb. The most appropriate next step is:","Buccal infiltration over the mesiobuccal root of 1.6",["A greater palatine block on the same side","A nasopalatine block at the incisive papilla","A second PSA injected more deeply and further posteriorly"],"The mesiobuccal root may be supplied by the middle superior alveolar nerve, so a local infiltration covers it. A deeper PSA adds haematoma risk without reaching that supply, and palatal blocks do not anaesthetise pulp."],
  ["A 50-year-old needs extraction of tooth 2.4. Which of the following gives complete anaesthesia?","Buccal infiltration and greater palatine block",["Buccal infiltration and nasopalatine block","Posterior superior alveolar and nasopalatine blocks","Infraorbital block alone"],"The first premolar's pulp and buccal tissue are reached by infiltration, and its palatal tissue is supplied by the greater palatine nerve. The nasopalatine covers only canine to canine."],
  ["A 28-year-old needs extraction of tooth 2.2. In addition to a labial infiltration, the palatal tissue is best anaesthetised by:","A nasopalatine block",["A greater palatine block","A posterior superior alveolar block","An infraorbital block"],"The palate from canine to canine is supplied by the nasopalatine nerve. A greater palatine block covers the palate from the first premolar backward, leaving the lateral incisor's palatal tissue sensitive."],
  ["A 39-year-old is having restorations on teeth 1.1, 1.2 and 1.3 and prefers one injection. A successful infraorbital block is also expected to numb the:","Lower eyelid, side of the nose and upper lip",["Palatal mucosa from canine to canine","Upper molars and their buccal gingiva","Lower lip, chin and anterior labial gingiva"],"The terminal infraorbital branches supply these skin areas, and the anterior superior alveolar branch supplies the anterior pulps. Palatal tissue has a separate supply, so it would remain sensitive."],
  ["A 34-year-old needs a soft-tissue biopsy of the lower labial mucosa opposite tooth 4.3. The injection that anaesthetises this area with least additional numbness is the:","Mental block",["Inferior alveolar block","Gow-Gates block","Lingual block"],"The mental nerve supplies the lower lip and the buccal mucosa anterior to the foramen. An IANB would also numb the tongue through its usual lingual spread and all of the teeth, none of which is needed."],
  ["A 42-year-old needs a Class V restoration on tooth 4.4 and does not want a numb tongue. Which of the following is most appropriate?","Incisive block",["Mental block","Lingual block","Long buccal block"],"Pressure after a deposit at the mental foramen drives solution to the incisive nerve, adding premolar and anterior pulps. A mental block without this reaches soft tissue only, leaving the pulp sensitive."],
  ["After a left inferior alveolar block, tooth 3.1 remains sensitive while 3.6 and 3.4 are numb. The most likely explanation is:","Crossover fibres from the opposite side, managed by labial infiltration",["Partial failure of the left IANB, managed by repeating the block","The long buccal nerve, managed with a long buccal block","The greater palatine nerve, managed with a palatal injection near the molars"],"Numb molars and premolars show the IANB worked, so overlap at the midline is the likely cause. The long buccal supplies molar soft tissue and has no pulpal role at the incisor."],
  ["A 25-year-old with a pericoronal infection on tooth 4.8 can open only 15 mm. The most appropriate mandibular block is:","Vazirani-Akinosi",["Standard inferior alveolar block","Gow-Gates","Mental block"],"The Vazirani-Akinosi block is performed with the teeth together, so it does not need mouth opening. Gow-Gates needs the mouth wide open, which is impossible here."],
  ["Compared with a standard inferior alveolar block, the chief advantage of the Gow-Gates block is that it:","Blocks the nerve high up, catching mylohyoid and usually long buccal fibres",["Can be given with the mouth closed in patients with limited opening","Has a faster onset than an IANB because less soft tissue is crossed","Works without a vasoconstrictor at a lower total dose of anaesthetic solution"],"A high deposit at the condylar neck catches branches that an IANB can miss, including accessory supply. Onset is actually slower, and the closed-mouth technique is Vazirani-Akinosi."],
  ["A supraperiosteal infiltration usually anaesthetises tooth 2.3 in an adult but is unreliable for tooth 3.6, chiefly because:","Thick mandibular cortex limits diffusion to the apex, unlike porous maxillary bone",["The pulp of 3.6 is supplied by more than one cranial nerve","The maxillary nerve is more sensitive to anaesthetic than the mandibular nerve","The solution is carried away more quickly from the mandible"],"Solution must diffuse through bone to the apical nerves, and the adult posterior mandibular cortex is thick. This is why posterior mandibular teeth are generally blocked before the nerve enters the bone."],
  ["A 38-year-old has a numb lip after two inferior alveolar blocks, but tooth 3.6 with symptomatic irreversible pulpitis is still painful on access. The most appropriate next step is:","A supplemental intraosseous or periodontal ligament injection",["A third inferior alveolar block at the same site","Proceeding, as the numb lip shows the pulp is anaesthetised","A mental block on the same side"],"Lip numbness shows the block took effect but does not prove pulpal anaesthesia. Supplemental techniques place solution close to the apical nerves, whereas repeating the same block adds dose and little benefit."],
  ["The main reason for aspirating before depositing an inferior alveolar block is that:","The inferior alveolar vessels run with the nerve, risking intravascular injection",["Aspiration tests whether the nerve has been touched","Aspiration removes tissue fluid and improves diffusion to the nerve trunk","The block is deposited into a closed fascial space whose air must first be vented"],"The IANB has a high positive aspiration rate because the nerve runs with its artery and vein. Intravascular injection causes a rapid rise in blood level, the classic route to toxicity even at low doses."]
 ]
};

window.CONTENT["m12-n04"] = {
 understand: `
 <p><b>Most failures and complications come down to where the drug or needle went, and how much drug reached the blood.</b></p>
 <p><b>Failed anaesthesia.</b> No lip numbness after an IANB means the block missed: review the landmarks and repeat. A numb lip with a painful tooth means the trunk was reached, so think of an inflamed pulp or <b>accessory innervation</b>: the mylohyoid nerve (lingual infiltration or Gow-Gates), fibres crossing the midline (labial infiltration), or a bifid canal. Then supplement with periodontal ligament or intraosseous injection.</p>
 <p><b>Local complications.</b></p>
 <ul>
 <li><b>Haematoma:</b> a nicked vessel, fastest after PSA overinsertion (pterygoid plexus). Apply pressure and cold.</li>
 <li><b>Trismus:</b> trauma to the medial pterygoid, repeated penetrations or infection. Use heat, analgesics and jaw exercises.</li>
 <li><b>Facial palsy:</b> an IANB too far posterior reaches the parotid. The face droops and the eyelid will not close, usually lasting hours. Reassure, remove contact lenses and protect the eye.</li>
 <li><b>Paraesthesia:</b> numbness lasting beyond expected, most often lingual. Ontario reports over-represent 4% articaine and prilocaine, though causation is unproven. Most cases recover within 8 weeks. Document, review, refer if it persists.</li>
 <li><b>Needle breakage:</b> linked to fine needles, bending and insertion to the hub. Keep the mouth open; retrieve a visible fragment, otherwise image and refer.</li>
 </ul>
 <div class="tscroll"><table>
 <tr><th>Reaction</th><th>Clues</th><th>Response</th></tr>
 <tr><td>Vasovagal syncope</td><td>Pallor, sweating, slow pulse, faint</td><td>Supine, legs raised</td></tr>
 <tr><td>Epinephrine effect</td><td>Palpitations, tremor, fast pulse within minutes; brief</td><td>Stop, reassure, monitor</td></tr>
 <tr><td>Systemic toxicity</td><td>Perioral tingling, tinnitus, talkativeness, twitching, seizure, then depression</td><td>Stop, oxygen, airway, call EMS</td></tr>
 <tr><td>Allergy</td><td>Urticaria, wheeze, angioedema, hypotension</td><td>IM epinephrine, EMS</td></tr>
 <tr><td>Methaemoglobinaemia</td><td>Cyanosis unresponsive to oxygen, chocolate-brown blood</td><td>IV methylene blue 1 to 2 mg/kg</td></tr>
 </table></div>
 <p>True amide allergy is rare, so a reported allergy is usually one of the first two rows. <b>Methaemoglobinaemia</b> follows oxidation of haemoglobin iron, classically by benzocaine or by prilocaine's metabolite <b>o-toluidine</b>. Avoid both after previous methaemoglobinaemia. G6PD deficiency raises the risk, and methylene blue may not work or may cause haemolysis in those patients.</p>
 <p><b>Children</b> reach toxic doses quickly. The AAPD uses 4.4 mg/kg for lidocaine and mepivacaine, 7 mg/kg for articaine and 1.3 mg/kg for bupivacaine; the lidocaine manufacturer's maximum is 7 mg/kg. A 20 kg child: 4.4 x 20 = 88 mg, or 2.4 cartridges of 2% lidocaine (1.8 mL). Avoid articaine under 4 years and bupivacaine under 12; benzocaine is contraindicated under 2. Reduce amides by 30 percent under 6 months. Warn about lip biting, which long soft-tissue anaesthesia invites.</p>
 <p><b>Pregnancy.</b> Do not withhold necessary care. Lidocaine with epinephrine has the most supporting data. Use the lowest effective dose and aspirate.</p>
 <p><b>Cardiac patients.</b> Good anaesthesia limits the patient's own adrenaline surge. Apply the 0.04 mg ceiling, aspirate and inject slowly. Consult the physician after a recent infarction, decompensated heart failure or significant arrhythmia.</p>
 <p><b>Why the exam cares.</b> Stems describe signs and ask for the diagnosis or first action. Timing and pulse separate the reactions.</p>`,
 connect: [
  {to:"m13-n02", why:"Vasovagal syncope is the commonest reaction to an injection, and its management is taught with the other causes of collapse."},
  {to:"m13-n03", why:"True allergic reactions to a local anaesthetic are managed by the anaphylaxis algorithm, including intramuscular epinephrine."},
  {to:"m13-n05", why:"The cardiac patient's vasoconstrictor ceiling and need for medical consultation sit within the wider management of cardiovascular disease."},
  {to:"m13-n08", why:"Pregnancy questions on anaesthetic choice belong to the broader rules on timing and safety of dental care in pregnancy."},
  {to:"m23-n01", why:"Weight-based dosing, warnings about lip biting and a calm injection technique are all part of managing a child in the chair."}
 ],
 apply: {
  vignette: "A 5-year-old weighing 19 kg receives five 1.8 mL cartridges of 2% lidocaine with 1:100,000 epinephrine for extractions in two quadrants. Ten minutes later the child is unusually talkative, complains of a tingling mouth and develops muscle twitching. Pulse and blood pressure are raised. Which of the following is the most likely diagnosis?",
  options: ["Local anaesthetic systemic toxicity","Vasovagal syncope","Anaphylaxis","Hypoglycaemia"],
  answer: "Local anaesthetic systemic toxicity",
  steps: [
   "The ask: the most likely diagnosis, so work out the dose first.",
   "The dose: 5 x 36 mg = 180 mg, and 180 / 19 = 9.5 mg/kg. That exceeds both the AAPD limit of 4.4 mg/kg and the manufacturer's 7 mg/kg.",
   "Cross out vasovagal syncope: that gives pallor, sweating, a slow pulse and a faint, not excitation with a raised pulse.",
   "Cross out anaphylaxis: there is no urticaria, wheeze, angioedema or hypotension.",
   "Cross out hypoglycaemia: it can cause confusion, but it does not explain a tingling mouth at the moment a calculated overdose was given.",
   "The survivor explains everything: toxic blood levels first show as excitation (talkativeness, perioral tingling, twitching), which may progress to seizures and depression. Stop injecting, give oxygen, protect the airway and call EMS."
  ]
 },
 teach: {
  prompt: "Four patients become unwell shortly after an injection: one fainted, one has palpitations, one is twitching and talkative, one has urticaria and wheeze. Explain the mechanism of each and how you would tell them apart at the chair.",
  model: "The faint is vasovagal: fear causes vasodilation and a slow pulse, so the brain is underperfused and the patient is pale, sweaty and recovers lying flat. Palpitations and tremor within minutes are an epinephrine effect from absorption or an intravascular injection, with a fast pulse that settles quickly. Twitching and talkativeness are systemic toxicity: high blood levels first depress inhibitory pathways in the brain, causing excitation that can progress to seizures and depression, usually after an overdose or an intravascular injection. Urticaria and wheeze point to allergy; true amide allergy is rare, so a component such as the sulfite antioxidant, or an ester topical, is the likelier trigger; hypotension and airway signs call for intramuscular epinephrine and EMS. Pulse rate, skin signs and timing separate the four."
 },
 cards: [
  ["Numb lip, painful tooth after an IANB","Trunk reached: think inflamed pulp or accessory supply, then supplement"],
  ["Accessory supply to lower teeth","Mylohyoid nerve; contralateral fibres at the midline"],
  ["Fastest-forming haematoma","After PSA overinsertion: pterygoid plexus"],
  ["Trismus after an IANB: main cause and care","Medial pterygoid trauma; heat, analgesics, jaw exercises"],
  ["Facial palsy after an IANB: cause and care","Needle too far posterior into parotid; reassure, protect the eye, resolves in hours"],
  ["Nerve most often in persistent paraesthesia","Lingual nerve; most cases recover within 8 weeks"],
  ["Early signs of local anaesthetic toxicity","Perioral tingling, tinnitus, talkativeness, twitching, then seizure"],
  ["Prilocaine toxic metabolite and result","o-Toluidine; methaemoglobinaemia with cyanosis unresponsive to oxygen"],
  ["Methaemoglobinaemia treatment","IV methylene blue 1 to 2 mg/kg; caution in G6PD deficiency"],
  ["AAPD paediatric limits","Lidocaine and mepivacaine 4.4 mg/kg; articaine 7 mg/kg; bupivacaine 1.3 mg/kg"],
  ["Paediatric age limits","Articaine not under 4; bupivacaine not under 12; benzocaine contraindicated under 2"],
  ["Pulse in syncope vs epinephrine effect","Slow in syncope; fast with epinephrine"]
 ],
 questions: [
  ["A healthy 20 kg child is to receive 2% lidocaine in 1.8 mL cartridges. Using the AAPD limit of 4.4 mg/kg, the maximum is approximately:","2.4 cartridges",["1.2 cartridges","3.9 cartridges","4.4 cartridges"],"4.4 x 20 = 88 mg, and 88 / 36 = 2.4 cartridges. The 3.9 figure comes from the manufacturer's 7 mg/kg, which is the higher limit and not the one asked for."],
  ["A healthy 18 kg 6-year-old is to receive 4% articaine in 1.7 mL cartridges. Using a maximum of 7 mg/kg, the maximum dose is:","126 mg, just under 2 cartridges",["72 mg, about 1 cartridge","126 mg, about 3.5 cartridges","252 mg, about 4 cartridges"],"7 x 18 = 126 mg, and 126 / 68 = 1.85 cartridges. The 3.5-cartridge option divides by the 36 mg content of a 2% cartridge, a common error with a 4% solution."],
  ["A healthy 3-year-old needs extraction of tooth 7.4. Which of the following local anaesthetics is most appropriate?","Lidocaine 2% with 1:100,000 epinephrine, calculated by weight",["Articaine 4% with 1:200,000 epinephrine, calculated by weight","Articaine 4% with 1:100,000 epinephrine at half the adult dose","Bupivacaine 0.5% with 1:200,000 epinephrine for longer action"],"Articaine is not recommended under 4 years, whatever the epinephrine ratio, and bupivacaine is not recommended under 12. Lidocaine is appropriate when the dose is worked out from body weight."],
  ["A 40-year-old receives a rapid inferior alveolar block without aspiration. Within a minute the patient is talkative with perioral tingling and muscle twitching. The first action is to:","Stop injecting, give oxygen, maintain the airway and call EMS",["Give intramuscular epinephrine at once and lay the patient flat","Give a further cartridge slowly to complete the block","Sit the patient upright and offer oral glucose for hypoglycaemia"],"This excitation is the early phase of systemic toxicity, likely from intravascular injection. Treatment is supportive; epinephrine is for anaphylaxis and would not address the cause."],
  ["A 24-year-old becomes pale and sweaty as the needle is withdrawn, with a slow pulse, then briefly loses consciousness. No rash or wheeze is present. The most appropriate management is:","Lay the patient supine with the legs raised and monitor recovery",["Give intramuscular epinephrine and call EMS","Give intravenous methylene blue for methaemoglobinaemia","Give oral glucose gel while the patient is still unconscious in the chair"],"This is vasovagal syncope: venous pooling and a slow pulse reduce brain perfusion, which lying flat corrects. Nothing is given by mouth to an unconscious patient."],
  ["A 35-year-old develops generalised urticaria, wheeze and hypotension within minutes of an injection of articaine with epinephrine. The most appropriate first drug is:","Intramuscular epinephrine",["Oral diphenhydramine","Intravenous methylene blue","Sublingual nitroglycerin"],"Hypotension with airway signs is anaphylaxis, and epinephrine reverses both. An oral antihistamine is too slow, and it does not treat bronchospasm or shock."],
  ["Rapid cheek swelling appears seconds after a posterior superior alveolar block in a 31-year-old. The structure most likely punctured and the most appropriate immediate care are:","Pterygoid venous plexus; direct pressure and cold",["Parotid duct; massage and heat","Facial artery; immediate surgical ligation","Infraorbital nerve; high-dose corticosteroids"],"Overinsertion behind the tuberosity enters the pterygoid plexus, and blood collects quickly in loose tissue. Pressure and cold limit the swelling, and the patient is warned about bruising."],
  ["Minutes after an inferior alveolar block in a 27-year-old, the ipsilateral lower face droops and the eyelid will not close. The most likely cause and appropriate care are:","Solution reached the facial nerve in the parotid; reassure, protect the eye",["The lingual nerve was severed by the needle; refer for microsurgery","A stroke has occurred; give aspirin and wait","An allergic reaction to the anaesthetic has occurred; give intramuscular epinephrine"],"A needle placed too far posterior deposits solution in the parotid, and the palsy resolves as the drug wears off, usually within hours. Protecting the cornea matters because the blink is lost. A stroke would not normally follow this immediate, local pattern."],
  ["Three days after an inferior alveolar block, a 33-year-old has painful limited opening of 20 mm, with no fever or swelling. The most likely cause and most appropriate care are:","Medial pterygoid trauma; heat, analgesics and gentle jaw exercises",["Fracture of the coronoid process; intermaxillary fixation and referral","Anterior disc displacement without reduction; a surgical referral","Facial nerve injury; corticosteroids and an eye patch"],"The needle passes near the medial pterygoid, and muscle trauma or bleeding causes spasm. Most cases settle with conservative care; antibiotics are reserved for signs of infection, none of which are present here."],
  ["Three weeks after a mandibular block with 4% articaine, a 48-year-old still has numbness on one side of the tongue. The most appropriate management is to:","Document the altered area, review regularly and refer if it persists",["Reassure the patient that it will resolve fully and arrange no follow-up","Refer immediately for microsurgical repair of the lingual nerve","Prescribe a course of antibiotics and oral corticosteroids"],"Most cases recover spontaneously within about 8 weeks, but a minority do not, so the deficit must be recorded and followed. Immediate repair is not justified this early, while no follow-up would miss the minority."],
  ["A short needle breaks during a mandibular injection when a 9-year-old moves suddenly, and no fragment is visible. The most appropriate action is to:","Keep the mouth open, tell the patient, image and refer to an oral surgeon",["Probe the tissue with a haemostat until the fragment is found and removed","Leave it in place and tell the patient about it at the next recall","Give another injection to make searching easier"],"A fragment that cannot be seen should not be chased blindly, because that risks pushing it deeper. A visible fragment could be removed with a haemostat, but here localisation by imaging and referral are needed."],
  ["Several hours after multiple injections of 4% prilocaine, a 2-year-old is cyanosed and lethargic, with chocolate-brown blood, and does not improve with oxygen. The most appropriate treatment is:","Intravenous methylene blue 1 to 2 mg/kg in hospital",["Intramuscular epinephrine with high-flow oxygen by mask","Intravenous flumazenil to reverse the sedation","Oral glucose gel and observation at home"],"o-Toluidine oxidises haemoglobin iron to the ferric state, which cannot carry oxygen, so supplemental oxygen fails. Methylene blue restores the iron; epinephrine would treat anaphylaxis, which this picture is not."],
  ["A numb lip follows an inferior alveolar block in a 36-year-old, yet tooth 4.6 stays sensitive on its lingual side during preparation, and the tooth is not inflamed. Which of the following is the most likely explanation?","Accessory supply from the mylohyoid nerve",["Failure of the block at the mandibular foramen","Supply from the long buccal nerve to the pulp","Low pH at the injection site"],"Lip numbness shows the block reached the inferior alveolar trunk, so a separate pulpal supply is suspected, and the mylohyoid can arise too high to be reached. A lingual infiltration or Gow-Gates can cover it. The long buccal supplies soft tissue, not pulp."],
  ["A healthy 28-year-old at 22 weeks of pregnancy has an acute pulpitis on tooth 1.6. The most appropriate approach to anaesthesia is:","Treat now with lidocaine-epinephrine at the lowest effective dose",["Defer all care until after delivery, using analgesics meanwhile","Treat without anaesthesia to protect the fetus from drug exposure","Use a plain solution at the maximum dose to avoid any epinephrine"],"Necessary treatment should not be withheld in pregnancy, and pain itself is a stressor. Lidocaine with epinephrine has the most supporting data; a vasoconstrictor also helps limit systemic absorption of the anaesthetic."],
  ["A 64-year-old with significant cardiovascular disease needs restorations. Using an epinephrine ceiling of 0.04 mg, the maximum number of 1.8 mL cartridges of 2% lidocaine with 1:100,000 epinephrine is:","2",["1","4","11"],"Each cartridge holds 0.018 mg, and 0.04 / 0.018 = 2.2, so 2 whole cartridges. Eleven cartridges is the limit for a healthy adult at the 0.2 mg ceiling."]
 ]
};
