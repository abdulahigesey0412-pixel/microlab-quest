/* Module m19: Periodontics. Written for a learner starting from zero.
   References: Newman & Carranza's Clinical Periodontology 14th ed; Lindhe's Clinical Periodontology and Implant Dentistry 7th ed;
   2017 World Workshop (Papapanou et al. 2018; Tonetti, Greenwell & Kornman 2018; Chapple et al. 2018; Jepsen et al. 2018);
   EFP S3 guideline for stage I-III periodontitis (Sanz et al. 2020). Stage and grade tables checked against the AAP chart
   reproducing Tonetti et al. 2018 Tables 1-2 and the Papapanou 2018 consensus report. */
window.CONTENT = window.CONTENT || {};

window.CONTENT["m19-n01"] = {
 understand: `
 <p><b>The periodontium is the tooth's support system, and its weak point is where soft tissue meets the tooth.</b> Four tissues make it: gingiva, periodontal ligament (PDL), cementum and alveolar bone (the deeper three are in m06). Disease starts at the gingival seal, and every probe reading is taken there.</p>
 <p><b>The gingiva from outside in.</b> The <b>free (marginal) gingiva</b> is a collar round the neck of the tooth. Between it and the tooth is a shallow groove, the <b>gingival sulcus</b>. The <b>attached gingiva</b> below it is keratinised, firm, often stippled, and bound tightly to bone and cementum. It ends at the <b>mucogingival junction</b>, where loose, red, movable <b>alveolar mucosa</b> begins. Facially, attached gingiva is usually widest in the incisor region and narrowest over the first premolars (Newman &amp; Carranza: about 1.8 to 1.9 mm there, against 3.3 to 4.5 mm over the incisors). Between teeth the <b>interdental papilla</b> fills the space; under a contact point it dips into a non-keratinised valley, the <b>col</b>, which is hard to clean and often where gingivitis starts.</p>
 <p><b>Three epithelia face the tooth.</b> The <b>oral gingival epithelium</b> faces the mouth and is keratinised. The <b>sulcular epithelium</b> lines the sulcus and is not keratinised. The <b>junctional epithelium</b> (JE) forms the floor of the sulcus and grips the tooth with hemidesmosomes on an internal basal lamina. It is thin, non-keratinised, renews quickly and has wide gaps between its cells. Neutrophils and <b>gingival crevicular fluid</b> (GCF) stream out through those gaps. That makes the JE both the main defence and the way in for bacterial products.</p>
 <p><b>Why a healthy probe reads 1 to 3 mm.</b> The sulcus itself is under 1 mm deep. A probe is pushed past it into the soft JE and stops where the connective tissue fibres resist. In inflamed tissue the fibres are lost, so the same probing force goes deeper. A probe reading measures tissue resistance as well as depth.</p>
 <p><b>Supracrestal tissue attachment.</b> Between the floor of the sulcus and the bone crest lie the JE and a band of gingival connective tissue fibres (dentogingival, circular, transseptal) inserted into cementum. This used to be called the <b>biologic width</b>; the 2017 World Workshop renamed it the <b>supracrestal tissue attachment</b>. In Gargiulo's classic cadaver study the JE averaged about 0.97 mm and the connective tissue about 1.07 mm, about 2 mm in total, with a sulcus of about 0.69 mm above it, but the workshop stressed that the true height varies between teeth and between people. A restoration margin placed inside this zone causes chronic inflammation, and the crest often resorbs until the space is rebuilt. <b>Crown lengthening</b> moves the bone crest so a margin can sit on sound tooth without invading it.</p>
 <p><b>Phenotype.</b> The <b>periodontal phenotype</b> combines gingival thickness, the width of keratinised tissue and the thickness of the buccal bone. Thin tissue (the probe shows through the margin) tends to recede after trauma, surgery or orthodontic movement. Thick tissue tends to form pockets.</p>
 <p><b>Blood and nerves.</b> Three blood supplies (supraperiosteal, PDL and crestal vessels) let a well-designed flap survive. Palatal gingiva is supplied by the greater palatine and nasopalatine nerves, and lingual mandibular gingiva by the lingual nerve. Buccal gingiva of mandibular molars is supplied by the long buccal nerve.</p>
 <p><b>Why the exam cares.</b> Junctional epithelium, the mucogingival junction, supracrestal tissue attachment and crown lengthening are tested directly. Every probing, recession and margin-placement question rests on this anatomy.</p>`,
 connect: [
  {to:"m06-n04", why:"The PDL, cementum and alveolar bone below the crest are the other half of the attachment apparatus; periodontitis destroys them in the same order the probe meets them."},
  {to:"m06-n05", why:"Keratinised attached gingiva versus non-keratinised alveolar mucosa decides where the mucogingival junction lies and why lesions differ above and below it."},
  {to:"m16-n01", why:"Crown margin placement is supracrestal tissue attachment in practice: a margin that invades it inflames the gingiva and can cost crestal bone."},
  {to:"m12-n03", why:"Gingival surgery and scaling need the right nerve blocked: greater palatine and nasopalatine for palatal tissue, lingual nerve lingually and long buccal nerve for buccal molar gingiva."},
  {to:"m19-n04", why:"Probing depth and attachment level are read against the junctional epithelium and the cemento-enamel junction described here."}
 ],
 apply: {
  vignette: "A 45-year-old had a porcelain-fused-to-metal crown placed on 1.1 six months ago. Since then the buccal gingiva of 1.1 has stayed red and bled on probing, although the gingiva on 1.2 and 2.1 is healthy and plaque control is good. Bone sounding finds the crown margin about 0.5 mm from the alveolar crest. Which of the following best explains the persistent inflammation?",
  options: ["The crown margin invades the supracrestal tissue attachment","The patient is allergic to the ceramic of the crown","Plaque-induced gingivitis from inadequate home care","Occlusal trauma from a high crown on 1.1"],
  answer: "The crown margin invades the supracrestal tissue attachment",
  steps: [
   "Step 1: the ask is a cause of inflammation confined to one crowned tooth.",
   "Step 2: the facts that matter are good plaque control, healthy neighbours, and a margin about 0.5 mm from bone, which leaves no room for junctional epithelium and connective tissue attachment.",
   "Step 3: eliminate plaque-induced gingivitis because plaque control is good and the inflammation is limited to the one tooth with the deep margin.",
   "Step 4: eliminate ceramic allergy because dental ceramic is very inert, and occlusal trauma because it affects the PDL and mobility, not marginal gingival redness.",
   "Step 5: the survivor explains everything: the attachment needs about 2 mm above the crest, the margin sits inside that zone, so the tissue stays inflamed until the crest resorbs or crown lengthening rebuilds the space."
  ]
 },
 teach: {
  prompt: "Explain why a probe reads 2 to 3 mm in a healthy sulcus that is histologically under 1 mm deep, and why the same force reads deeper when the gingiva is inflamed.",
  model: "The sulcus is a shallow groove, but its floor is the junctional epithelium, a thin and loosely joined layer that a probe tip pushes through easily. The probe stops where the intact connective tissue fibres just apical to the junctional epithelium resist it. In inflammation those collagen fibres are broken down and the tissue is swollen, so the tip goes further, into the connective tissue. A probing depth therefore depends on tissue health and force as well as on anatomy, which is why a standard light force is used and why depths fall after inflammation resolves."
 },
 cards: [
  ["Junctional epithelium: how it attaches","Hemidesmosomes on an internal basal lamina; non-keratinised, thin, permeable, fast turnover"],
  ["Mucogingival junction separates","Keratinised attached gingiva from non-keratinised, movable alveolar mucosa"],
  ["Supracrestal tissue attachment","2017 term for the old biologic width: junctional epithelium plus supracrestal connective tissue attachment"],
  ["Gargiulo's classic figures","JE about 0.97 mm + connective tissue about 1.07 mm, about 2 mm total; sulcus about 0.69 mm"],
  ["Col","Non-keratinised dip of the interdental papilla beneath a contact point; susceptible to inflammation"],
  ["Where the probe tip stops in health vs inflammation","Health: within the junctional epithelium. Inflammation: penetrates into the connective tissue"],
  ["Why crown lengthening is done","To move the bone crest so a margin sits on sound tooth without invading the supracrestal tissue attachment"],
  ["Thin periodontal phenotype risk","Recession after trauma, surgery or labial orthodontic movement"],
  ["Gingival crevicular fluid","Serum-derived exudate with neutrophils and antibodies; flow rises with inflammation"],
  ["Nerve for palatal gingiva opposite 2.4-2.6","Greater palatine nerve"]
 ],
 questions: [
  ["The junctional epithelium differs from the oral gingival epithelium in being:","Non-keratinised, thin and permeable",["Keratinised and stippled on its surface","Anchored to bone by Sharpey fibres","Thick with long, interdigitating rete ridges"],"The JE is a thin, non-keratinised collar with wide intercellular gaps that let neutrophils and fluid pass. Stippling and keratin belong to attached gingiva, and Sharpey fibres anchor PDL fibres into bone and cementum, not epithelium."],
  ["The mucogingival junction marks the boundary between:","Attached gingiva and alveolar mucosa",["Free gingiva and attached gingiva","Sulcular epithelium and junctional epithelium","Alveolar mucosa and the floor of the mouth"],"The scalloped line where firm keratinised gingiva meets loose, movable mucosa is the mucogingival junction. The free gingival groove, not the mucogingival junction, roughly separates free from attached gingiva."],
  ["The term introduced by the 2017 World Workshop to replace 'biologic width' is:","Supracrestal tissue attachment",["Junctional attachment complex","Gingival biotype","Epithelial cuff"],"The workshop renamed the junctional epithelium plus supracrestal connective tissue 'supracrestal tissue attachment'. 'Biotype' was likewise replaced by 'phenotype', which describes tissue thickness, not the attachment."],
  ["The supracrestal tissue attachment consists of:","Junctional epithelium and supracrestal connective tissue",["Sulcular epithelium and junctional epithelium together","Periodontal ligament fibres and the alveolar crest","Free gingiva and attached gingiva"],"It is the soft-tissue attachment between the sulcus floor and the bone crest. The sulcus is not attached to the tooth and is not part of it."],
  ["In a healthy 25-year-old, a periodontal probe inserted with light force into the buccal sulcus of 1.1 most likely stops:","Within the junctional epithelium, above the connective tissue",["At the alveolar bone crest","At the cemento-enamel junction on the enamel","Within the connective tissue apical to the junctional epithelium"],"In health the intact connective tissue fibres resist the probe, so the tip stays within the junctional epithelium. Penetration into connective tissue is what happens when inflammation has destroyed those fibres."],
  ["The interdental tissue beneath the contact between 4.6 and 4.7 forms a non-keratinised depression. The clinical significance of this area is that it:","Is hard to clean and is where gingivitis often starts",["Is the widest zone of attached gingiva in the arch","Contains the insertion of Sharpey fibres","Marks the position of the mucogingival junction"],"The col is non-keratinised and plaque-retentive under the contact, so interdental gingivitis often starts there. Attached gingiva and the mucogingival junction lie on the facial and lingual surfaces, not in the col."],
  ["On the facial surfaces of the permanent dentition, the width of attached gingiva is typically narrowest at the:","First premolars",["Maxillary central incisors","Maxillary lateral incisors","Mandibular central incisors"],"Newman & Carranza report the greatest widths in the incisor region and the narrowest over the first premolars (about 1.8 to 1.9 mm). The mandibular incisor region still has more attached gingiva than the premolar region, although it is a frequent site of recession."],
  ["A 40-year-old is to have a free gingival graft harvested from the palate opposite 2.4 to 2.6. The nerve that must be anaesthetised for the donor site is the:","Greater palatine nerve",["Nasopalatine nerve","Posterior superior alveolar nerve","Infraorbital nerve"],"Palatal mucosa posterior to the canine is supplied by the greater palatine nerve. The nasopalatine nerve supplies the palate behind the incisors, roughly from canine to canine."],
  ["A 14-year-old with thin, translucent gingiva on 3.1 and 4.1 is about to have these teeth moved labially by orthodontic treatment. The complication this phenotype most predicts is:","Labial gingival recession on 3.1 and 4.1",["Gingival enlargement covering the brackets","Ankylosis of 3.1 and 4.1","Formation of deep periodontal pockets"],"A thin phenotype, often with thin buccal bone, tends to recede when roots are moved labially out of the bone envelope. Thick, fibrotic tissue is the type that tends to form pockets instead."],
  ["A crown margin on 2.6 is placed 0.5 mm from the alveolar crest. If the margin is left in place, the most likely long-term consequence is:","Chronic inflammation with crestal bone loss",["Healthy gingiva because the crown seals the margin","Permanent gingival overgrowth that covers the margin","Root caries confined to the furcation"],"The body keeps a soft-tissue attachment of roughly constant height above the bone; when a margin invades it, chronic inflammation follows and the crest often resorbs to re-establish the space. Recession or pocketing, not healthy tissue, is the result."],
  ["The primary purpose of surgical crown lengthening before a crown on fractured 1.4 is to:","Expose sound tooth for a margin clear of the attachment",["Increase the width of keratinised gingiva around 1.4","Improve the crown-to-root ratio of 1.4 for support","Remove infected cementum from the root surface of 1.4"],"Crown lengthening moves the crest apically, to about 3 mm below the planned margin in common protocols (room for the attachment plus a sulcus), so the attachment can re-form above the bone. It worsens the crown-to-root ratio rather than improving it."],
  ["Gingival crevicular fluid flow increases most markedly when:","The gingiva is inflamed",["The patient is asleep","The gingiva is healthy and keratinised","Salivary flow increases"],"GCF is an inflammatory exudate from the gingival connective tissue vessels; inflammation raises vascular permeability and its flow. Healthy gingiva produces very little."],
  ["The attached gingiva of 3.3 has become smooth, shiny and has lost its stippling. The most likely explanation is:","Connective tissue oedema from gingival inflammation",["Increased keratinisation from vigorous brushing","A thick, fibrotic periodontal phenotype","Exposure of the underlying alveolar bone"],"Stippling reflects connective tissue fibres pulling on the epithelium; oedema smooths the surface. Heavy brushing tends to thicken keratin and cause recession rather than shine, and a thick fibrotic phenotype is, if anything, more stippled."]
 ]
};

window.CONTENT["m19-n02"] = {
 understand: `
 <p><b>Bacteria start periodontitis, but the host does most of the destruction.</b> The biofilm and its keystone pathogens were covered in m04. The question here is how a mixed biofilm in a sulcus ends with bone gone and a tooth loose.</p>
 <p><b>Gingivitis comes first and is reversible.</b> In Löe's experimental gingivitis studies, healthy students who stopped cleaning developed gingivitis within about 10 to 21 days, and it resolved within about a week of restarting oral hygiene (Löe, Theilade and Jensen 1965). Not every case of gingivitis goes on to periodontitis. That depends on a susceptible host and a biofilm that has shifted toward a dysbiotic, anaerobic, proteolytic community.</p>
 <p><b>The lesion develops in stages</b> (Page and Schroeder 1976, a histological model; the timings come from experimental gingivitis).</p>
 <ol>
 <li><b>Initial</b> (about 2 to 4 days): vasculitis, a neutrophil exudate and more crevicular fluid.</li>
 <li><b>Early</b> (about 1 week): lymphocytes, mainly T cells, accumulate and collagen is lost beneath the JE.</li>
 <li><b>Established</b> (about 2 to 3 weeks): plasma cells and B cells dominate. This is chronic gingivitis.</li>
 <li><b>Advanced</b>: the lesion reaches bone, attachment is lost and a true pocket forms. This is periodontitis.</li>
 </ol>
 <p><b>The destructive cascade.</b> Lipopolysaccharide and other bacterial products bind Toll-like receptors on epithelial cells, macrophages and fibroblasts. These cells release <b>IL-1β, TNF-α, IL-6</b> and <b>prostaglandin E2</b>. Neutrophils and fibroblasts release <b>matrix metalloproteinases</b> (MMP-8, neutrophil collagenase, is the main one) that dissolve gingival and PDL collagen. Without collagen, the JE migrates apically along the root and the sulcus deepens into a <b>periodontal pocket</b>. Bone loss works through <b>RANKL</b>. Activated T cells, B cells, osteoblasts and fibroblasts express RANKL, which binds <b>RANK</b> on osteoclast precursors and makes them fuse and resorb bone. <b>Osteoprotegerin (OPG)</b> is a decoy receptor that mops up RANKL. Inflammation raises the RANKL:OPG ratio, so bone resorption wins. The bone is not infected; it retreats from the inflamed front. When the interdental septum is wide, the zone of destruction does not span it, so an angular (vertical) defect can form. A narrow septum is lost evenly as horizontal loss.</p>
 <p><b>Risk factors change the host response.</b></p>
 <ul>
 <li><b>Smoking</b>, the strongest modifiable factor: it impairs neutrophil function, constricts gingival vessels (so bleeding is masked) and slows healing, with a dose effect.</li>
 <li><b>Diabetes</b>: advanced glycation end-products bind RAGE on macrophages and amplify cytokine release, while collagen turnover and healing are impaired. Poor control matters most.</li>
 <li><b>Genetics</b> (twin studies show a heritable share), <b>stress</b>, <b>obesity</b> and rare neutrophil defects.</li>
 </ul>
 <p><b>Local factors retain plaque without causing disease by themselves.</b> Calculus is a porous, rough scaffold covered in living biofilm. Overhangs, subgingival margins, open contacts, cervical enamel projections, enamel pearls and palatogingival grooves act the same way. <b>Occlusal trauma</b> does not start periodontitis. It injures the PDL (widened space, mobility) and may speed up loss only where plaque-induced inflammation already exists.</p>
 <p><b>Why the exam cares.</b> Items ask which cell resorbs bone, what OPG does, why smokers bleed less, why calculus is removed, and whether occlusion causes attachment loss. All of them follow from the host-mediated model.</p>`,
 connect: [
  {to:"m04-n10", why:"Dysbiosis of the subgingival biofilm is the trigger; this node is what the host does in reply."},
  {to:"m04-n11", why:"Neutrophils, T cells, B cells and cytokines are the innate and adaptive immune responses turned against the host's own collagen and bone."},
  {to:"m05-n02", why:"Periodontitis is chronic inflammation with tissue destruction; the vascular, cellular and mediator steps are the same as in general pathology."},
  {to:"m13-n06", why:"Diabetes amplifies periodontal inflammation through AGE-RAGE signalling, which is why HbA1c changes a periodontal grade and a treatment plan."},
  {to:"m19-n03", why:"Smoking and diabetes are not separate diagnoses but grade modifiers in the 2017 classification, so pathogenesis feeds directly into the label."}
 ],
 apply: {
  vignette: "A 48-year-old who smokes 20 cigarettes a day has probing depths of 6 to 7 mm around 1.6, 2.6, 3.6 and 4.6 with radiographic bone loss. The gingiva looks pale and fibrotic, and only a few sites bleed on probing despite heavy subgingival calculus. Which of the following best explains the low bleeding score?",
  options: ["Nicotine-related vasoconstriction and fibrotic tissue mask the bleeding response","The disease is inactive because the sites do not bleed","Tobacco smoke kills the subgingival bacteria so there is no inflammation","Subgingival calculus seals the pocket wall and stops bleeding"],
  answer: "Nicotine-related vasoconstriction and fibrotic tissue mask the bleeding response",
  steps: [
   "Step 1: the ask is why a patient with deep pockets bleeds so little.",
   "Step 2: the facts that matter are heavy smoking, deep pockets with bone loss, pale fibrotic gingiva and heavy calculus.",
   "Step 3: eliminate 'inactive disease': absence of bleeding predicts stability in non-smokers, but smokers bleed less at the same level of disease, so it is not reassuring here.",
   "Step 4: eliminate 'smoke kills bacteria' (smokers harbour a pathogenic subgingival flora) and 'calculus seals the pocket' (calculus is covered in living biofilm and inflames the wall).",
   "Step 5: the survivor explains everything: smoking constricts gingival vessels and thickens the tissue, so the usual bleeding sign is suppressed while destruction continues."
  ]
 },
 teach: {
  prompt: "Trace the chain from a Gram-negative biofilm in a pocket to the loss of alveolar bone, naming the molecule that tells osteoclasts to work and the molecule that stops them.",
  model: "Bacterial products such as lipopolysaccharide bind Toll-like receptors on host cells, which release IL-1, TNF-alpha, IL-6 and prostaglandin E2. These mediators drive neutrophils and fibroblasts to release matrix metalloproteinases, which dissolve the collagen holding the junctional epithelium and PDL, so the epithelium migrates down the root and a pocket forms. The same mediators make T cells, B cells, osteoblasts and fibroblasts express RANKL, which binds RANK on osteoclast precursors and drives them to mature and resorb bone. Osteoprotegerin is a decoy receptor that binds RANKL and blocks this, so periodontitis is a shift in the RANKL to OPG ratio toward resorption. The bone is never infected; it retreats from the inflammation."
 },
 cards: [
  ["Experimental gingivitis (Löe) showed","Plaque alone causes gingivitis within weeks, and it reverses when plaque is removed"],
  ["Page and Schroeder: dominant cell of the established lesion","Plasma cells and B cells"],
  ["Main collagenase in periodontitis","MMP-8 (neutrophil collagenase)"],
  ["RANKL binds to","RANK on osteoclast precursors; drives osteoclast formation and activity"],
  ["What OPG does","Decoy receptor for RANKL; blocks osteoclastogenesis"],
  ["How a true pocket forms","Collagen loss lets junctional epithelium migrate apically onto the root"],
  ["Why smokers bleed less","Vasoconstriction and fibrotic gingiva mask bleeding on probing"],
  ["Diabetes mechanism in periodontitis","AGE-RAGE signalling amplifies cytokine release; impaired collagen turnover and healing"],
  ["Calculus: cause or retention?","Plaque-retentive scaffold; the living biofilm on it causes disease"],
  ["Does occlusal trauma cause periodontitis?","No; it injures the PDL and may accelerate loss only where plaque-induced inflammation exists"],
  ["Drugs causing gingival enlargement","Phenytoin, ciclosporin, calcium channel blockers such as nifedipine"]
 ],
 questions: [
  ["The cell directly responsible for resorbing alveolar bone in periodontitis is the:","Osteoclast",["Neutrophil","Plasma cell","Fibroblast"],"Osteoclasts, driven by RANKL, dissolve bone mineral and matrix. Neutrophils and fibroblasts release collagen-degrading enzymes and RANKL but do not resorb bone themselves."],
  ["Osteoprotegerin protects alveolar bone by:","Acting as a decoy receptor that binds RANKL",["Killing Gram-negative bacteria in the pocket","Stimulating fusion of osteoclast precursors","Inhibiting matrix metalloproteinases in the gingiva"],"OPG is a soluble decoy receptor; when the RANKL to OPG ratio rises, resorption wins. It does not act on bacteria or on MMPs."],
  ["The matrix metalloproteinase most associated with collagen destruction in periodontitis, released mainly by neutrophils, is:","MMP-8",["MMP-2","Cathepsin K","Hyaluronidase"],"MMP-8 is neutrophil collagenase and is raised in diseased crevicular fluid. Cathepsin K is an osteoclast enzyme acting on bone collagen, not the main gingival collagenase."],
  ["In the Page and Schroeder model, the lesion in which plasma cells and B cells predominate, without bone loss, is the:","Established lesion",["Initial lesion","Early lesion","Advanced lesion"],"The established lesion is chronic gingivitis with plasma cell dominance. The early lesion is T-lymphocyte rich, and the advanced lesion is the one with attachment and bone loss."],
  ["Löe's experimental gingivitis studies demonstrated that:","Plaque causes gingivitis that resolves when plaque is removed",["Gingivitis progresses to periodontitis within a few months","Calculus must form before gingivitis can develop","Gingivitis is caused mainly by heavy occlusal forces"],"When students stopped cleaning, gingivitis appeared within weeks and resolved once cleaning resumed, proving cause and reversibility. Many people with gingivitis never develop periodontitis."],
  ["Subgingival calculus is removed during periodontal therapy chiefly because it:","Holds living biofilm against the pocket wall",["Releases toxic minerals that destroy alveolar bone","Is itself the primary cause of periodontitis without bacteria","Mechanically cuts the junctional epithelium"],"Calculus is mineralised plaque covered by viable biofilm; it keeps bacteria in contact with tissue and hinders cleaning. Without bacteria, sterile calculus causes little inflammation."],
  ["A 50-year-old has a widened PDL space and increased mobility of 1.6, which takes heavy contacts in lateral excursions. Probing depths around 1.6 are 2 to 3 mm with no bleeding. The most likely outcome if the occlusion is left unchanged and plaque control remains good is:","PDL adaptation without attachment loss",["Rapid conversion to periodontitis with deep pockets","Formation of a periodontal abscess","Development of necrotising gingivitis"],"Occlusal trauma alone widens the PDL and increases mobility but does not cause loss of attachment in a plaque-free periodontium. Only with plaque-induced inflammation may it speed up destruction."],
  ["A 30-year-old taking nifedipine for hypertension develops firm interdental gingival enlargement. The drug class responsible is:","Calcium channel blockers",["Beta-adrenergic blockers","Angiotensin II receptor blockers","Thiazide diuretics"],"Nifedipine and other calcium channel blockers, together with phenytoin and ciclosporin, cause drug-influenced gingival enlargement, made worse by plaque. Beta-blockers and ACE inhibitors are not typical causes."],
  ["Inflammation in the gingival connective tissue raises the RANKL to OPG ratio. The direct consequence for the alveolar crest is:","More osteoclast formation and net bone resorption",["Increased osteoblast activity and net bone fill","Ankylosis of the root to bone","Calcification of the periodontal ligament"],"More RANKL relative to its decoy means more activated osteoclasts and bone loss. Bone formation is favoured when OPG dominates, not when RANKL does."],
  ["Which of the following best explains why smoking is a strong risk factor for periodontitis?","It impairs neutrophils, narrows gingival vessels and slows healing",["It raises salivary flow and washes away protective proteins","It acidifies saliva so that it directly dissolves alveolar bone","It causes calculus to become sterile"],"Smoking weakens host defence and repair, which is why it is a grade modifier in the 2017 system. Its vasoconstriction also hides bleeding, so disease can look less active than it is."],
  ["A 55-year-old with poorly controlled type 2 diabetes shows more periodontal destruction than his plaque level suggests. The best explanation is that hyperglycaemia:","Forms AGEs that bind RAGE and amplify cytokine release",["Mainly feeds plaque bacteria through the crevicular fluid","Causes osteoclasts to be absent from the alveolar crest","Prevents the formation of periodontal pockets"],"AGE-RAGE signalling primes macrophages and neutrophils into a hyperinflammatory state and impairs collagen repair. Glucose in crevicular fluid may change the flora, but host hyper-responsiveness is the textbook mechanism."],
  ["A wide interdental septum between 3.6 and 3.7 is more likely than a narrow one to develop an angular (vertical) defect because:","The resorption zone cannot span the whole septum",["Wide septa contain no cancellous marrow spaces","Wide septa are covered by non-keratinised mucosa","Occlusal forces are not transmitted through wide septa"],"Bone is destroyed within a limited radius of the inflamed tissue; in a wide septum one side can be lost while the other remains, leaving a vertical defect. A narrow septum is lost across its full width as horizontal loss."],
  ["A true periodontal pocket differs from a gingival (pseudo-) pocket in that a true pocket:","Has its base on the root, apical to the CEJ",["Forms by gingival swelling with the base still at the CEJ","Does not bleed on probing when inflamed","Is less than 4 mm deep by definition"],"A true pocket requires loss of attachment, with the junctional epithelium displaced apically. A pseudo-pocket deepens only because the margin has moved coronally, as in drug-induced enlargement, with no attachment loss."]
 ]
};

window.CONTENT["m19-n03"] = {
 understand: `
 <p><b>The 2017 World Workshop (AAP and EFP, published 2018) replaced 'chronic' and 'aggressive' periodontitis with one disease described on two axes.</b> <b>Stage</b> is damage done plus treatment complexity; <b>grade</b> is rate of progression plus patient risk.</p>
 <p><b>Health and gingivitis</b> (no attachment loss). Health means bleeding on probing (BOP) at under 10% of sites and probing depths of 3 mm or less. <b>Gingivitis</b> means BOP at 10% of sites or more with depths of 3 mm or less: localised at 10 to 30%, generalised above 30%. A treated periodontitis patient with BOP under 10%, depths of 4 mm or less and no 4 mm site that bleeds has <b>stable periodontitis</b> (health on a reduced periodontium) but remains a periodontitis patient for life.</p>
 <p><b>Three forms of periodontitis.</b></p>
 <ol>
 <li><b>Necrotising periodontal diseases</b>: necrotic papillae, bleeding and pain, in an impaired host (HIV with CD4 under 200, stress, smoking, malnutrition); gingivitis, periodontitis or stomatitis.</li>
 <li><b>Periodontitis as a manifestation of systemic disease</b>: rare disorders that destroy the periodontium, such as Papillon-Lefèvre syndrome, leukocyte adhesion deficiency and Down syndrome. It is coded by the primary disease. Diabetes and smoking do not belong here; they are grade modifiers.</li>
 <li><b>Periodontitis</b>: everything else, staged and graded.</li>
 </ol>
 <p><b>Case definition.</b> Interdental CAL detectable at 2 or more non-adjacent teeth, or buccal or oral CAL of 3 mm or more with pocketing of more than 3 mm at 2 or more teeth (Tonetti, Greenwell and Kornman 2018). Exclude CAL with another cause: traumatic recession, cervical caries, third-molar surgery, an endodontic lesion draining through the margin, or a vertical root fracture.</p>
 <p><b>Stage</b> starts from the worst interdental CAL, or radiographic bone loss (RBL) if CAL is unavailable. Tooth loss or any one complexity factor can only raise it.</p>
 <div class="tscroll"><table>
 <tr><th></th><th>Stage I</th><th>Stage II</th><th>Stage III</th><th>Stage IV</th></tr>
 <tr><td>Worst interdental CAL</td><td>1-2 mm</td><td>3-4 mm</td><td>≥5 mm</td><td>≥5 mm</td></tr>
 <tr><td>RBL</td><td>Coronal third (&lt;15%)</td><td>Coronal third (15-33%)</td><td>Middle third or beyond</td><td>Middle third or beyond</td></tr>
 <tr><td>Teeth lost to periodontitis</td><td>None</td><td>None</td><td>≤4</td><td>≥5</td></tr>
 <tr><td>Complexity</td><td>Max PD ≤4 mm, mostly horizontal loss</td><td>Max PD ≤5 mm, mostly horizontal loss</td><td>PD ≥6 mm; vertical loss ≥3 mm; furcation class II/III; moderate ridge defect</td><td>Stage III plus need for complex rehabilitation: masticatory dysfunction, secondary occlusal trauma (mobility ≥2), severe ridge defect, bite collapse or flaring, &lt;20 teeth (10 opposing pairs)</td></tr>
 </table></div>
 <p><b>Extent</b>: localised (under 30% of teeth), generalised, or molar/incisor pattern.</p>
 <p><b>Grade</b>: assume B, then look for evidence to move it. Direct evidence (bone or CAL loss over 5 years): A none, B under 2 mm, C 2 mm or more. Indirect: % bone loss at the worst tooth divided by age: A under 0.25, B 0.25 to 1.0, C over 1.0. Phenotype: A, heavy biofilm with little destruction; C, destruction beyond what the biofilm explains. Modifiers: smoking (B under 10 a day, C 10 or more) and diabetes (B HbA1c under 7.0%, C 7.0% or more) can raise the grade.</p>
 <p><b>Worked case.</b> A 35-year-old non-smoker: worst CAL 4 mm, 20% bone loss, maximum PD 5 mm, no teeth lost: <b>Stage II</b>. 20 ÷ 35 = 0.57: <b>Grade B</b>. If she smoked 10 a day: Grade C.</p>
 <p><b>Why the exam cares.</b> Expect staging cases with arithmetic and traps such as 'diabetes-associated periodontitis'.</p>`,
 connect: [
  {to:"m09-n06", why:"Radiographic bone loss by root third and the %bone loss/age ratio are read straight off periapicals and bitewings, so interpretation decides stage and grade."},
  {to:"m13-n06", why:"HbA1c at or above 7.0% is a grade C modifier, so a medical history value changes the periodontal diagnosis."},
  {to:"m19-n04", why:"Stage begins with the worst interdental CAL, which must be calculated correctly from probing depth and margin position."},
  {to:"m10-n10", why:"Necrotising disease in HIV and periodontitis in Papillon-Lefèvre syndrome or leukocyte adhesion deficiency are oral signs of systemic disease."},
  {to:"m19-n08", why:"Grade estimates future progression and the stage records damage that cannot be undone, so together they drive prognosis and recall intervals."}
 ],
 apply: {
  vignette: "A 41-year-old who smokes 12 cigarettes a day and has no diabetes has a worst interdental CAL of 6 mm at 4.6 and 1.6. Radiographs show bone loss into the middle third of the roots, about 40% at 4.6, with a class II furcation on 4.6 and probing depths up to 7 mm. No teeth have been lost to periodontitis and 28 teeth are present. Which of the following is the most appropriate classification?",
  options: ["Periodontitis Stage III, Grade C","Periodontitis Stage II, Grade B","Periodontitis Stage IV, Grade C","Periodontitis Stage III, Grade B"],
  answer: "Periodontitis Stage III, Grade C",
  steps: [
   "Step 1: the ask is stage and grade, so work through severity first and then rate.",
   "Step 2: stage facts: worst interdental CAL 6 mm (≥5 mm), bone loss into the middle third, probing depth 7 mm and a class II furcation. All point to Stage III, so Stage II is out.",
   "Step 3: eliminate Stage IV: no teeth lost to periodontitis, 28 teeth present, and no masticatory dysfunction, bite collapse or mobility of degree 2 or more is described.",
   "Step 4: grade: 40% ÷ 41 years = 0.98, which by itself is Grade B (0.25 to 1.0). Smoking 10 or more cigarettes a day is a grade C modifier, so Stage III Grade B is the tempting wrong answer.",
   "Step 5: the survivor, Stage III Grade C, uses every fact: CAL and complexity for stage, then the ratio raised by the smoking modifier for grade."
  ]
 },
 teach: {
  prompt: "Explain to a colleague the difference between what a stage and a grade tell you, and walk through how a single smoker's diagnosis can end up Grade C even though the bone-loss-to-age ratio says B.",
  model: "Stage measures the damage already done and how complex treatment will be: worst interdental CAL, radiographic bone loss, teeth lost to periodontitis, and complexity factors such as deep pockets, vertical defects, furcations or the need for rehabilitation. Grade estimates the rate of progression and the patient's risk, starting at B and moving with direct evidence of change over five years or, more often, with the percentage of bone loss at the worst tooth divided by age. Risk factors then act as modifiers: smoking 10 or more cigarettes a day or an HbA1c of 7.0% or more moves the grade to C. So a smoker with a ratio of 0.98 is Grade B on the ratio alone but Grade C overall, because grade is meant to predict how fast this patient will lose attachment."
 },
 cards: [
  ["Gingival health (intact periodontium)","BOP under 10%, probing depth ≤3 mm, no attachment loss"],
  ["Gingivitis: BOP threshold and extent","BOP ≥10% with PD ≤3 mm; localised 10-30%, generalised over 30%"],
  ["Periodontitis case definition","Interdental CAL at ≥2 non-adjacent teeth, or buccal/oral CAL ≥3 mm with pocketing >3 mm at ≥2 teeth"],
  ["Interdental CAL by stage","I: 1-2 mm; II: 3-4 mm; III and IV: ≥5 mm"],
  ["RBL by stage","I: under 15%; II: 15-33%; III and IV: middle third of root or beyond"],
  ["Tooth loss due to periodontitis by stage","I and II: none; III: 4 or fewer; IV: 5 or more"],
  ["Stage IV complexity","Masticatory dysfunction, secondary occlusal trauma (mobility ≥2), severe ridge defect, bite collapse/drifting/flaring, under 20 teeth (10 opposing pairs)"],
  ["% bone loss / age cut-offs","A under 0.25; B 0.25 to 1.0; C over 1.0"],
  ["Direct evidence of progression over 5 years","A: no loss; B: under 2 mm; C: 2 mm or more"],
  ["Grade modifiers","Smoking: under 10/day = B, 10 or more = C. HbA1c: under 7.0% = B, 7.0% or more = C (patients with diabetes)"],
  ["Three forms of periodontitis (2017)","Necrotising periodontal diseases; periodontitis as a manifestation of systemic disease; periodontitis"],
  ["Extent descriptors","Localised (under 30% of teeth), generalised, molar/incisor pattern"]
 ],
 questions: [
  ["Under the 2017 classification, a patient with an intact periodontium has gingivitis rather than health when bleeding on probing is present at:","At least 10% of sites, with probing depths up to 3 mm",["Any single site, regardless of probing depth","More than 50% of sites, with probing depths up to 5 mm","5% or more of sites with any probing depth"],"Chapple et al. define gingivitis by BOP at 10% of sites or more with no attachment loss and depths of 3 mm or less. A single bleeding site is compatible with health."],
  ["A 28-year-old has bleeding on probing at 45% of sites, probing depths of 1 to 3 mm and no attachment or bone loss. The most appropriate diagnosis is:","Generalised plaque-induced gingivitis",["Localised plaque-induced gingivitis","Periodontitis Stage I","Periodontal health"],"With no attachment loss this is gingivitis, and above 30% bleeding sites it is generalised. Stage I periodontitis requires detectable interdental attachment loss."],
  ["A 52-year-old non-smoker without diabetes has a worst interdental CAL of 2 mm, bone loss under 15% confined to the coronal third, maximum probing depth 4 mm and no tooth loss. The stage is:","Stage I",["Stage II","Stage III","Stage IV"],"Interdental CAL of 1 to 2 mm with RBL under 15% and maximum PD of 4 mm or less is Stage I. Stage II needs CAL of 3 to 4 mm or RBL of 15 to 33%."],
  ["A 60-year-old non-smoker has a worst interdental CAL of 4 mm at 3.6, 25% bone loss there, maximum probing depth 5 mm, mostly horizontal loss and no teeth lost to periodontitis. The most appropriate classification is:","Stage II, Grade B",["Stage II, Grade A","Stage III, Grade B","Stage I, Grade A"],"CAL 3 to 4 mm with RBL 15 to 33% and PD of 5 mm or less is Stage II. The ratio 25 ÷ 60 = 0.42 lies between 0.25 and 1.0, so Grade B; Grade A would need a ratio under 0.25."],
  ["A 63-year-old has interdental CAL up to 8 mm, has lost 6 teeth to periodontitis, has 19 teeth remaining, and shows flaring of the maxillary incisors with posterior bite collapse. The stage is:","Stage IV",["Stage III","Stage II","Cannot be staged without radiographs"],"Loss of 5 or more teeth to periodontitis, fewer than 20 teeth and bite collapse with flaring are Stage IV features. When CAL is available, radiographs are not required to assign the stage."],
  ["A 30-year-old has 45% radiographic bone loss at the worst-affected tooth, 3.6. Using indirect evidence, the grade is:","Grade C",["Grade A","Grade B","Ungradable without radiographs 5 years apart"],"45 ÷ 30 = 1.5, which exceeds 1.0 and indicates rapid progression (Grade C). Direct evidence is preferred when available, but the % bone loss/age ratio is the accepted indirect measure."],
  ["A 70-year-old has 14% bone loss at the worst site, heavy plaque and calculus, does not smoke and has no diabetes. The most likely grade is:","Grade A",["Grade B","Grade C","Grade D"],"14 ÷ 70 = 0.2, under 0.25, and heavy biofilm with little destruction is the Grade A phenotype. There is no Grade D in the 2017 system."],
  ["A 47-year-old with Stage III periodontitis has a % bone loss/age ratio of 0.5, does not smoke, and has type 2 diabetes with an HbA1c of 7.8%. The most appropriate grade is:","Grade C",["Grade A","Grade B","Grade B, with a separate diagnosis of diabetes-associated periodontitis"],"The ratio alone gives Grade B, but HbA1c of 7.0% or more in a patient with diabetes is a Grade C modifier. Diabetes-associated periodontitis is not a category; diabetes acts through the grade."],
  ["Which of the following is classified as periodontitis as a manifestation of systemic disease under the 2017 classification?","Periodontitis in Papillon-Lefèvre syndrome",["Periodontitis in a patient with type 2 diabetes","Periodontitis in a heavy smoker","Gingivitis during pregnancy"],"Rare disorders that themselves cause periodontal breakdown, such as Papillon-Lefèvre syndrome, are coded by the primary disease. Diabetes and smoking are grade modifiers, and pregnancy gingivitis is a gingival condition."],
  ["A 22-year-old student who smokes and is sitting final exams presents with painful, bleeding gingiva and punched-out, grey-covered interdental papillae. There is no attachment loss. The most likely diagnosis is:","Necrotising gingivitis",["Necrotising periodontitis","Generalised plaque-induced gingivitis","Primary herpetic gingivostomatitis"],"Papillary necrosis, bleeding and pain are the three defining features of necrotising disease, and without attachment loss it is gingivitis. Primary herpes produces vesicles and diffuse gingivitis, not punched-out papillae."],
  ["A 24-year-old has 3 mm of attachment loss on the distal of 3.7 after surgical removal of an impacted 3.8, and no attachment loss anywhere else. The most appropriate classification of this finding is:","Not periodontitis, as third molar removal explains it",["Periodontitis Stage II, localised to the distal of 3.7","Periodontitis Stage I, molar/incisor pattern, Grade C","Necrotising periodontitis at 3.7"],"The case definition excludes CAL on the distal of a second molar associated with third molar malposition or extraction. Periodontitis also needs interdental CAL at 2 or more non-adjacent teeth."],
  ["A healthy 16-year-old with good plaque control has deep interdental attachment loss confined to 1.6, 2.6, 3.6, 4.6, 1.1 and 4.1. The best description is periodontitis with:","A molar/incisor pattern, most likely Grade C",["A generalised extent, Grade A","A localised extent, Grade A","No stage, because the patient is under 18"],"Destruction confined to first molars and incisors is described as the molar/incisor pattern (formerly localised aggressive periodontitis). In a teenager the bone loss/age ratio and the phenotype both point to rapid progression."],
  ["A patient diagnosed with Stage III, Grade B periodontitis now has probing depths of 4 mm or less, bleeding at 5% of sites and no bleeding 4 mm sites after treatment. The most appropriate description is:","Stable periodontitis, still recorded as Stage III",["Periodontal health, no longer a periodontitis patient","Gingivitis on an intact periodontium","Periodontitis Stage I, because the pockets have closed"],"Stage records damage that does not regenerate, so it is not lowered after successful therapy. The patient is a stable periodontitis patient on a reduced periodontium and remains at lifelong risk."],
  ["Radiographs of a 45-year-old taken 5 years apart show an additional 3 mm of bone loss at 1.6. Based on this direct evidence, the grade is:","Grade C",["Grade A","Grade B","Grade cannot be assigned without the bone loss to age ratio"],"Direct evidence of 2 mm or more over 5 years is Grade C; under 2 mm is B. Direct evidence takes precedence over the indirect ratio whenever it is available."],
  ["In the 2017 staging system, periodontitis is described as 'localised' when it involves:","Fewer than 30% of the teeth",["Fewer than 50% of the teeth","Only one sextant","Only teeth with probing depths over 6 mm"],"Localised means under 30% of teeth involved; otherwise generalised, unless the molar/incisor pattern applies. The extent is added to the stage as a descriptor."]
 ]
};

window.CONTENT["m19-n04"] = {
 understand: `
 <p><b>Diagnosis rests on one fixed landmark and one moving one.</b> The <b>cemento-enamel junction (CEJ)</b> does not move. The gingival margin does: it swells upward in inflammation and recedes downward after trauma or treatment. <b>Probing depth (PD)</b> is measured from the margin to the base of the pocket, so it changes when the margin changes. <b>Clinical attachment level (CAL)</b> is measured from the CEJ to the base of the pocket. It records support actually lost, so staging uses it.</p>
 <p><b>CAL arithmetic.</b></p>
 <ul>
 <li>Margin apical to the CEJ (recession): <b>CAL = PD + recession</b>. On 4.6 MB, PD 5 mm with 2 mm recession gives CAL 7 mm.</li>
 <li>Margin coronal to the CEJ: <b>CAL = PD − distance from CEJ to margin</b>. On 1.1, PD 6 mm with the margin 2 mm over the CEJ gives CAL 4 mm.</li>
 <li>Margin at the CEJ: CAL = PD.</li>
 <li>On 1.3 with drug-induced enlargement, PD 5 mm with the margin 5 mm coronal to the CEJ gives CAL 0. This is a <b>pseudo-pocket</b> and gingivitis, not periodontitis.</li>
 <li>Width of attached gingiva = width of keratinised gingiva − PD. With 5 mm of keratinised tissue and PD 3 mm, 2 mm is attached.</li>
 </ul>
 <p><b>Probing technique.</b> Use a calibrated probe with light force, about 0.2 to 0.25 N (20 to 25 g, roughly the pressure that blanches a fingernail). Keep the probe parallel to the long axis and walk it round the tooth, recording 6 sites per tooth. Angle under the contact at interproximal sites, where disease is worst.</p>
 <p><b>Bleeding on probing</b>: its absence has a high negative predictive value: sites that do not bleed rarely progress. Its presence is a weaker predictor of future loss. Smokers bleed less for the same disease. The <b>Löe and Silness gingival index</b> scores 0 (normal) to 3 (severe, spontaneous bleeding). Score 2 is moderate inflammation that bleeds on probing. The <b>O'Leary plaque control record</b> is the percentage of surfaces with plaque.</p>
 <p><b>Mobility</b> is graded 1 to 3. Grade 1 is slightly more than normal. Grade 2 is moderate horizontal movement, around 1 mm. Grade 3 is severe movement with vertical depressibility. The millimetre cut-offs differ a little between textbooks (Miller's index, Lindhe's degrees), but vertical movement always means grade 3. <b>Fremitus</b> is movement felt under a fingertip as the patient taps the teeth together.</p>
 <p><b>Radiographs</b> confirm bone loss, its pattern (horizontal or vertical) and furcations, but have limits. A radiograph is 2-D, so buccal and lingual bone overlie the root and hide early defects. Loss appears late and is underestimated, and pockets and activity are invisible. The healthy crest lies within about 1 to 2 mm of the CEJ. Vertical bitewings show crestal bone well when loss is advanced. Radiographs supplement probing; they never replace it.</p>
 <p><b>Screening: BPE (UK) and PSR (ADA/AAP, used in North America).</b> Both use a ball-ended probe with a 0.5 mm ball and a coloured band at 3.5 to 5.5 mm, and score each sextant by its worst site.</p>
 <ul>
 <li>Code 0: band fully visible, no bleeding.</li>
 <li>Code 1: bleeding.</li>
 <li>Code 2: calculus or an overhang.</li>
 <li>Code 3: band partly visible.</li>
 <li>Code 4: band disappears (over 5.5 mm).</li>
 <li><b>*</b>: furcation in BPE; any abnormality (furcation, mobility, mucogingival problem, recession of 3.5 mm or more) in PSR.</li>
 </ul>
 <p>Codes 3 and 4 call for more detailed charting. In the BPE (BSP 2019), a code 3 sextant gets a six-point pocket chart after initial therapy, and a code 4 in any sextant calls for a six-point chart of the whole dentition, with radiographs of code 3 and 4 sextants. In the PSR, code 3 calls for a comprehensive examination of that sextant, and code 4, or code 3 in two or more sextants, for a full-mouth examination.</p>
 <p><b>Why the exam cares.</b> CAL arithmetic, pseudo-pockets, mobility grades, the meaning of no bleeding, and what radiographs cannot show are favourite items.</p>`,
 connect: [
  {to:"m09-n06", why:"Radiographs show bone level and pattern but not pockets or activity, so periodontal radiographic interpretation and probing are paired skills."},
  {to:"m19-n03", why:"The worst interdental CAL calculated here is the first entry in the staging table."},
  {to:"m14-n03", why:"Plaque and gingival indices are ordinal scores whose calibration and reliability are biostatistics questions."},
  {to:"m20-n08", why:"A narrow isolated deep pocket on a non-vital tooth suggests an endodontic origin, so vitality testing belongs in every periodontal examination."},
  {to:"m19-n07", why:"Recession, keratinised tissue width and furcation probing are recorded in the same chart and drive the mucogingival and furcation diagnosis."}
 ],
 apply: {
  vignette: "A 49-year-old non-smoker is charted. At the mesial of 2.6, the deepest interdental site, the probing depth is 3 mm and the gingival margin sits 2 mm apical to the cemento-enamel junction. All other interdental sites have less attachment loss. Which of the following correctly states the clinical attachment level at this site and its significance for staging?",
  options: ["5 mm, which meets the interdental CAL threshold for Stage III or IV","1 mm, which is consistent with Stage I","3 mm, which is consistent with Stage II","2 mm, which is consistent with Stage I"],
  answer: "5 mm, which meets the interdental CAL threshold for Stage III or IV",
  steps: [
   "Step 1: the ask is a CAL value and what it means for stage.",
   "Step 2: the facts that matter are PD 3 mm and a margin 2 mm apical to the CEJ (recession), at the worst interdental site.",
   "Step 3: eliminate 1 mm: that would be PD minus recession, the formula for a margin coronal to the CEJ, used the wrong way round.",
   "Step 4: eliminate 3 mm: that is the probing depth, which ignores the recession and underestimates loss of support. 2 mm is the recession alone.",
   "Step 5: the survivor: CAL = PD + recession = 3 + 2 = 5 mm, the ≥5 mm interdental threshold for Stage III or IV; complexity and tooth loss then decide which."
  ]
 },
 teach: {
  prompt: "Explain why staging uses clinical attachment level rather than probing depth, using one tooth with recession and one with gingival enlargement to show how the two can disagree.",
  model: "Probing depth is measured from the gingival margin, which moves: it rises with swelling and falls with recession. Clinical attachment level is measured from the cemento-enamel junction, which does not move, so it records how much attachment has actually been lost. A tooth with 3 mm pockets and 4 mm recession has only shallow pockets but 7 mm of attachment loss. A tooth with 5 mm pockets caused by drug-induced enlargement, with the margin 5 mm over the CEJ, has no attachment loss: a pseudo-pocket. Staging is about destroyed support, so it must use CAL."
 },
 cards: [
  ["Probing depth vs CAL: reference points","PD: margin to pocket base. CAL: CEJ to pocket base"],
  ["CAL with recession","CAL = PD + recession (margin apical to CEJ)"],
  ["CAL with margin coronal to CEJ","CAL = PD − distance from CEJ to margin"],
  ["Pseudo-pocket","Deepening from gingival enlargement with no attachment loss (CAL 0)"],
  ["Width of attached gingiva","Keratinised gingiva width − probing depth"],
  ["Probing force","About 0.2-0.25 N (20-25 g), probe parallel to long axis, 6 sites per tooth"],
  ["Meaning of no bleeding on probing","High negative predictive value: site likely stable"],
  ["Mobility grade 3","Horizontal movement plus vertical depressibility"],
  ["Three things a radiograph cannot show","Pockets, bleeding/disease activity, early buccal or lingual bone loss"],
  ["BPE/PSR probe","0.5 mm ball, coloured band 3.5-5.5 mm"],
  ["BPE/PSR code 3 and code 4","3: band partly visible; 4: band disappears (over 5.5 mm)"],
  ["Gingival index score 2","Moderate inflammation: redness, oedema, bleeding on probing"]
 ],
 questions: [
  ["Clinical attachment level is measured from the:","Cemento-enamel junction to the base of the pocket",["Gingival margin to the base of the pocket","Gingival margin to the cemento-enamel junction","Alveolar crest to the base of the pocket"],"CAL uses the fixed CEJ, so it is unaffected by swelling or recession. Margin to pocket base is the probing depth."],
  ["On 1.1 the probing depth is 6 mm and the gingival margin is 2 mm coronal to the cemento-enamel junction. The clinical attachment level is:","4 mm",["8 mm","6 mm","2 mm"],"When the margin is coronal to the CEJ, subtract: 6 − 2 = 4 mm. Adding (8 mm) is the formula for recession."],
  ["On 4.1 the probing depth is 3 mm and there is 4 mm of recession. The clinical attachment level is:","7 mm",["1 mm","3 mm","4 mm"],"With recession, CAL = PD + recession = 3 + 4 = 7 mm. The shallow probing depth hides substantial loss of support."],
  ["A 35-year-old taking ciclosporin has 5 mm probing depths on 1.3 with the gingival margin 5 mm coronal to the cemento-enamel junction, and no radiographic bone loss. The pocket is best described as a:","Pseudo-pocket with no attachment loss",["True periodontal pocket with 5 mm attachment loss","Periodontal abscess","Infrabony pocket"],"CAL = 5 − 5 = 0, so the depth is due entirely to enlargement of the margin. A true pocket requires apical migration of the junctional epithelium."],
  ["The keratinised gingiva on the buccal of 3.4 measures 4 mm from margin to mucogingival junction, and the probing depth is 3 mm. The width of attached gingiva is:","1 mm",["4 mm","7 mm","3 mm"],"Attached gingiva = keratinised width minus probing depth = 4 − 3 = 1 mm. The part above the pocket base is free, unattached gingiva."],
  ["Tooth 3.1 moves more than 1 mm buccolingually and can be depressed into its socket. The mobility grade is:","Grade 3",["Grade 1","Grade 2","Grade 0"],"Vertical depressibility places a tooth in grade 3 in both Miller's index and Lindhe's degrees. Grade 2 is moderate horizontal movement without vertical displacement."],
  ["At re-evaluation, a site that does not bleed on probing is most likely to:","Stay stable, given the high negative predictive value",["Lose further attachment within the next year","Contain a hidden periodontal abscess","Have an underestimated probing depth from oedema"],"Non-bleeding sites rarely progress, so absence of BOP is a strong sign of stability. Presence of bleeding is a much weaker predictor of future loss."],
  ["A 50-year-old heavy smoker has 6 mm pockets with little bleeding on probing. When interpreting the bleeding score, the clinician should recognise that:","Smoking masks bleeding, so the score underestimates inflammation",["Low bleeding confirms the pockets are inactive","Smokers bleed more, so the score overestimates active disease","Bleeding is irrelevant in periodontal diagnosis"],"Nicotine-related vasoconstriction and fibrosis mask BOP. The absence of bleeding is less reassuring in a smoker than in a non-smoker."],
  ["Which of the following is a limitation of conventional intraoral radiographs in periodontal diagnosis?","They underestimate bone loss and miss buccal and lingual bone",["They exaggerate bone loss because of image magnification","They show current disease activity at each individual site","They show the soft-tissue pocket wall clearly"],"A 2-D image superimposes the buccal and lingual plates on the root and shows loss only after substantial demineralisation. Activity and pockets are clinical findings."],
  ["During a PSR screening of the lower right sextant, the coloured band on the probe is partly visible at the deepest site. The code recorded is:","Code 3",["Code 2","Code 4","Code 1"],"A partly hidden band means a depth between 3.5 and 5.5 mm, code 3. Code 4 is recorded when the band disappears completely."],
  ["A sextant scores BPE code 4. This indicates that:","Probing depth over 5.5 mm, so the band disappears",["There is bleeding on probing but no pocket","Calculus or an overhang is present without pocketing","A furcation involvement has been detected"],"Code 4 means the whole band, ending at 5.5 mm, has entered the pocket. Furcation involvement is recorded with an asterisk."],
  ["The recommended way to probe a periodontal pocket is to:","Use light force, parallel to the long axis, walking round 6 sites",["Use firm force at the mesial and distal sites","Hold the probe perpendicular to the long axis at the margin","Probe at a single mid-buccal point per tooth with heavy force"],"Light force (about 0.2 to 0.25 N) and a parallel, walking stroke reproduce readings and find the deepest point, which is often interproximal. Heavy force pushes past the attachment and overestimates depth."],
  ["A Löe and Silness gingival index score of 2 at a site indicates:","Moderate inflammation with redness, oedema and bleeding on probing",["Normal gingiva","Mild inflammation without bleeding on probing","Severe inflammation with spontaneous bleeding and ulceration"],"Score 1 is mild with no bleeding on probing, score 2 bleeds on probing, and score 3 bleeds spontaneously. The index scores inflammation, not plaque."],
  ["A 46-year-old has a single narrow 9 mm pocket on the buccal of 3.6, while all other sites are 3 mm or less. The most important next test before diagnosing periodontitis is:","Pulp sensibility testing of 3.6",["A full-mouth plaque score","Fremitus testing of the anterior teeth","Panoramic radiography of the whole dentition"],"An isolated narrow deep pocket suggests an endodontic lesion draining through the sulcus or a vertical root fracture, both excluded from the periodontitis case definition. Vitality testing separates these possibilities."]
 ]
};

window.CONTENT["m19-n05"] = {
 understand: `
 <p><b>Periodontitis is treated by removing the biofilm the host is reacting to, then keeping it away.</b> The EFP S3 guideline (Sanz 2020) sets out four steps for Stage I to III.</p>
 <ol>
 <li><b>Step 1, for everyone</b>: explain the disease, coach supragingival plaque control (interdental brushes first), remove supragingival plaque and calculus, correct plaque-retentive factors, and control risk factors (smoking cessation, diabetes control).</li>
 <li><b>Step 2</b>: subgingival instrumentation of every tooth with pockets or attachment loss, with or without adjuncts.</li>
 <li><b>Step 3</b>: sites that have not responded receive repeat instrumentation or surgery.</li>
 <li><b>Step 4</b>: supportive periodontal care.</li>
 </ol>
 <p><b>Scaling and root planing, now called subgingival instrumentation.</b> The aim is to disrupt the biofilm and remove calculus. Endotoxin lies loosely on the root, so aggressive removal of cementum is no longer the goal. Hand and powered (sonic or ultrasonic) instruments work equally well, and quadrant-wise or full-mouth treatment within 24 hours gives similar results. <b>Gracey curettes</b> are area-specific, with one cutting edge and an offset blade: 5/6 for anterior teeth and premolars, 11/12 for mesial surfaces of posterior teeth, 13/14 for distal surfaces. <b>Universal curettes</b> have two cutting edges and work anywhere.</p>
 <p><b>How it heals.</b> Oedema resolves, so the margin shrinks back (recession). Collagen re-forms, so the probe stops sooner. The pocket heals mainly by a <b>long junctional epithelium</b>, which is repair, not regeneration. In the S3 evidence, mean PD reduction was about 1.7 mm with about 74% of pockets closed, and deeper sites gained more. Shallow sites can lose a little attachment from the instrumentation itself.</p>
 <p><b>Re-evaluation</b> happens after an adequate healing period. The guideline gives no fixed date and published intervals vary widely, so the principle is what matters: let the tissues heal before judging the response. The <b>endpoints</b> are no pocket over 4 mm that bleeds and no pocket of 6 mm or more. A pocket of 4 mm or less without bleeding is "closed". Residual 4 to 5 mm sites are usually instrumented again; sites of 6 mm or more go to Step 3 surgery. Patients who meet the endpoints enter maintenance.</p>
 <p><b>Adjuncts, and their limits.</b></p>
 <ul>
 <li><b>Systemic antibiotics are not routine</b>: resistance and adverse effects outweigh the small average gain. They may be considered for specific groups, such as young adults with generalised Stage III disease. Metronidazole plus amoxicillin is the best-studied combination.</li>
 <li>Antibiotics are always given with instrumentation, never instead of it, because an intact biofilm tolerates them.</li>
 <li>Local sustained-release antibiotics or chlorhexidine chips, and short courses of chlorhexidine rinse (which stains teeth), may be considered.</li>
 <li>The guideline advises against lasers, photodynamic therapy, probiotics, sub-antimicrobial doxycycline, statin gels and NSAIDs as adjuncts.</li>
 </ul>
 <p><b>Acute conditions.</b> A <b>periodontal abscess</b> is drained through the pocket and debrided; antibiotics are added only if there is spreading infection or systemic involvement. <b>Necrotising gingivitis</b> is treated with gentle debridement and chlorhexidine; systemic metronidazole is added if there is systemic involvement such as fever or lymphadenopathy.</p>
 <p><b>Why the exam cares.</b> Expect the sequence of steps, curette choice, re-evaluation endpoints, and when an antibiotic is and is not justified.</p>`,
 connect: [
  {to:"m11-n05", why:"Adjunctive amoxicillin plus metronidazole is a dental prescribing decision governed by the same stewardship rules as any antibiotic."},
  {to:"m11-n06", why:"Chlorhexidine's substantivity explains why a short course helps plaque control and why staining limits long-term use."},
  {to:"m04-n02", why:"Biofilm tolerance explains why antibiotics fail without mechanical disruption of the subgingival plaque."},
  {to:"m13-n09", why:"Subgingival instrumentation manipulates gingival tissue, so a highest-risk cardiac patient needs AHA 2021 prophylaxis first."},
  {to:"m19-n06", why:"Residual pockets of 6 mm or more after re-evaluation are the entry criterion for Step 3 surgery."}
 ],
 apply: {
  vignette: "A 54-year-old non-smoker with Stage III, Grade B periodontitis is re-evaluated 10 weeks after full-mouth subgingival instrumentation. Plaque score is 15% and most sites are 4 mm or less without bleeding. The distal of 3.6 is 5 mm and bleeds; the mesial of 4.6 is 7 mm, bleeds, and has a 4 mm angular defect on the radiograph. What is the most appropriate next step?",
  options: ["Repeat subgingival instrumentation at 3.6 distal and plan surgical treatment for 4.6 mesial","Prescribe systemic amoxicillin and metronidazole and place the patient on 12-month recall","Discharge to routine care because most sites have closed","Extract 4.6 because of the angular defect"],
  answer: "Repeat subgingival instrumentation at 3.6 distal and plan surgical treatment for 4.6 mesial",
  steps: [
   "Step 1: the ask is the next step after re-evaluation.",
   "Step 2: the facts are good plaque control, one bleeding 5 mm site and one bleeding 7 mm site with an angular defect; the endpoints (no bleeding pocket over 4 mm, none 6 mm or more) are not met at those sites.",
   "Step 3: eliminate discharge: residual bleeding pockets carry a higher risk of progression and tooth loss.",
   "Step 4: eliminate systemic antibiotics, which are not routine and are given with instrumentation, not instead of treating residual sites; extraction is premature for a defect that may respond to surgery.",
   "Step 5: the survivor follows S3: re-instrument moderately deep (4 to 5 mm) residual sites, and send 6 mm or more, especially with an intrabony defect, to Step 3 surgery."
  ]
 },
 teach: {
  prompt: "A patient asks why you will not simply prescribe antibiotics for her gum disease instead of deep cleaning. Explain the biology and the guideline position.",
  model: "The bacteria live in a biofilm stuck to the root and calculus, and a biofilm resists antibiotics because the matrix and slow-growing cells protect them, so the drug alone hardly touches the pocket. Mechanical instrumentation breaks up the biofilm and removes calculus, and that alone closes most pockets. Antibiotics add only a modest average benefit, carry side effects and drive resistance, so the EFP guideline advises against routine use and reserves them for specific situations, such as young adults with generalised severe disease, always together with instrumentation. Her own daily cleaning is what keeps the result."
 },
 cards: [
  ["EFP S3 four steps","1 OHI, supragingival PMPR, risk factors; 2 subgingival instrumentation ± adjuncts; 3 retreatment/surgery of non-responding sites; 4 supportive care"],
  ["Gracey 11/12 vs 13/14","11/12 mesial of posterior teeth; 13/14 distal of posterior teeth"],
  ["Gracey vs universal curette","Gracey: area-specific, one cutting edge, offset blade. Universal: two cutting edges"],
  ["Healing after subgingival instrumentation","Mainly long junctional epithelium (repair), shrinkage of the margin, less inflammation"],
  ["S3 average result of subgingival instrumentation","About 1.7 mm PD reduction; about 74% of pockets closed"],
  ["Endpoints of therapy","No pocket over 4 mm with bleeding; no pocket of 6 mm or more"],
  ["Residual 4-5 mm vs ≥6 mm","4-5 mm: repeat instrumentation. 6 mm or more: consider surgery"],
  ["Systemic antibiotics in periodontitis","Not routine; may be considered in specific groups (for example young adults with generalised Stage III), with instrumentation"],
  ["Best-studied adjunct antibiotic regimen","Amoxicillin plus metronidazole"],
  ["Adjuncts S3 advises against","Lasers, photodynamic therapy, probiotics, sub-antimicrobial doxycycline, statin gels, NSAIDs"],
  ["Periodontal abscess: first-line care","Drainage through the pocket and debridement; antibiotics only if spreading or systemic"]
 ],
 questions: [
  ["According to the EFP S3 guideline, the first step of periodontal therapy for all patients consists of:","OHI, supragingival plaque removal, risk factor control",["Subgingival instrumentation of all pockets over 4 mm","Periodontal flap surgery at the residual deep sites","Systemic antibiotics for two weeks with chlorhexidine"],"Step 1 builds the patient's plaque control and controls smoking and diabetes before or alongside subgingival work. Subgingival instrumentation is Step 2."],
  ["The Gracey curette designed for the mesial surfaces of posterior teeth is the:","11/12",["13/14","5/6","1/2"],"Gracey 11/12 adapts to mesial posterior surfaces and 13/14 to distal posterior surfaces. 5/6 is for anterior teeth and premolars."],
  ["Compared with a universal curette, a Gracey curette:","Has one offset cutting edge and is area-specific",["Has two cutting edges and works on every tooth surface","Has a pointed tip for removing supragingival calculus","Has a blade at 90 degrees to the terminal shank"],"The Gracey blade is offset about 70 degrees from the terminal shank, so only the lower edge cuts and each instrument suits particular surfaces. A universal curette has a blade face at 90 degrees to the terminal shank with two cutting edges."],
  ["The EFP S3 guideline states that subgingival instrumentation:","Can be hand or powered, quadrant-wise or full-mouth",["Should use hand curettes so that the cementum is removed","Needs adjunctive systemic antibiotics to be effective","Should be completed in one session under general anaesthesia"],"Hand and powered instruments, and quadrant or full-mouth delivery, give similar clinical outcomes. Aggressive cementum removal is unnecessary because endotoxin is loosely bound."],
  ["Six weeks after subgingival instrumentation, a 4 mm pocket on 2.4 that was 6 mm before treatment no longer bleeds. The main type of healing is:","A long junctional epithelium along the root",["Regeneration of cementum, PDL and bone","New bone fill of the pocket","Ankylosis of the root"],"Instrumentation heals by repair: shrinkage of the inflamed margin and a long junctional epithelium. True regeneration needs specific surgical techniques and is proven only histologically."],
  ["A patient asks why his gingiva looks 'longer' after deep cleaning. The best explanation is that:","Reduced swelling has lowered the gingival margin",["The instruments removed bone from the alveolar crest","The cleaning caused a new periodontal infection","The teeth have extruded from their sockets"],"Recession after instrumentation is expected as swollen tissue tightens, and it is part of how probing depth falls. Instruments do not remove alveolar bone."],
  ["The endpoint of active periodontal therapy at re-evaluation, as defined by the EFP S3 guideline, is:","No bleeding pockets over 4 mm and none of 6 mm or more",["No pockets over 3 mm anywhere, with or without bleeding","Bleeding on probing below 30% of sites at re-evaluation","Complete radiographic bone fill of intrabony defects"],"The guideline defines pocket closure as PD of 4 mm or less without BOP. Requiring 3 mm everywhere is unrealistic in a reduced periodontium."],
  ["At re-evaluation, a 58-year-old has a residual 5 mm pocket that bleeds on the distal of 1.6, with good plaque control. The most appropriate management is:","Repeat subgingival instrumentation",["Immediate regenerative surgery at the site","Systemic antibiotics without instrumentation","Extraction of 1.6"],"S3 suggests repeat instrumentation for moderately deep (4 to 5 mm) residual pockets and access surgery for 6 mm or more. Antibiotics are never a substitute for mechanical treatment."],
  ["Routine use of systemic antibiotics as an adjunct to subgingival instrumentation is not recommended mainly because:","The small benefit is outweighed by harms and resistance",["Antibiotics cannot reach therapeutic levels in the pocket","Antibiotics worsen probing depths after instrumentation","Periodontitis is not caused by bacterial infection"],"Adjunctive antibiotics give a small additional PD reduction on average, but stewardship and patient harms weigh against routine use. They may be considered for specific patient categories."],
  ["Systemic antibiotics given without mechanical instrumentation are ineffective in periodontitis chiefly because:","The subgingival biofilm protects bacteria from antibiotics",["Antibiotics are inactivated by saliva","Periodontal pathogens are viruses","Antibiotics cannot be absorbed in patients with periodontitis"],"Biofilm structure and slow-growing cells give tolerance far above that of free-floating bacteria; disruption by instrumentation is needed first. Absorption is not the problem."],
  ["A young adult with generalised Stage III periodontitis is a candidate for adjunctive systemic antibiotics. The combination with the most supporting evidence is:","Amoxicillin plus metronidazole",["Penicillin V plus clindamycin","Tetracycline plus erythromycin","Ciprofloxacin plus nitrofurantoin"],"Metronidazole plus amoxicillin is the most studied adjunctive regimen in the S3 evidence. Dose and duration must follow current prescribing references."],
  ["The EFP S3 guideline suggests NOT using which of the following as an adjunct to subgingival instrumentation?","Lasers",["Locally delivered sustained-release antibiotics","Locally delivered sustained-release chlorhexidine","Chlorhexidine mouth rinse for a limited period"],"Lasers and photodynamic therapy are suggested against. Local sustained-release antimicrobials and short-term chlorhexidine rinses 'may be considered'."],
  ["A 42-year-old has a fluctuant, painful swelling on the buccal of 2.6 arising from a 7 mm pocket. She is afebrile and there is no spreading cellulitis. The most appropriate initial management is:","Drainage through the pocket and root debridement",["Systemic antibiotics alone and review in two weeks","Immediate extraction of 2.6","Regenerative surgery at 2.6"],"A periodontal abscess is treated by establishing drainage and removing the cause; antibiotics are added only for systemic involvement or spread. Regenerative surgery is not done during acute infection."],
  ["Long-term use of chlorhexidine 0.12% mouth rinse is limited mainly by:","Extrinsic staining of teeth and altered taste",["Development of candidiasis in most users","Induction of gingival enlargement","Severe allergy in most patients"],"Chlorhexidine stains teeth and tongue and alters taste, so it is used for limited periods. Allergy, including anaphylaxis, is rare but reported."]
 ]
};

window.CONTENT["m19-n06"] = {
 understand: `
 <p><b>Surgery is access, not magic.</b> It is Step 3, for sites that stay deep after good non-surgical treatment. A flap lets the clinician see and clean the root, reshape tissue so the pocket is shallower, or rebuild lost attachment. The EFP S3 guideline suggests access flaps for residual pockets of 6 mm or more and repeat instrumentation for 4 to 5 mm. It also recommends not operating on patients who cannot reach and keep adequate plaque control, because surgical results depend on it. Smoking reduces every surgical outcome.</p>
 <p><b>Flap types.</b> A <b>full-thickness (mucoperiosteal) flap</b> lifts periosteum with the gingiva and exposes bone, for osseous work and regeneration. A <b>partial-thickness (split) flap</b> leaves periosteum on the bone, for mucogingival surgery and positioning flaps. The <b>modified Widman flap</b> uses an internal bevel incision to remove the pocket lining, gives access for debridement and replaces tissue close to its old position. It aims at healing with little recession, mainly by long junctional epithelium. The <b>apically positioned flap</b> moves the gingiva down to the bone crest. It removes the pocket while keeping keratinised tissue and is often combined with osseous recontouring. <b>Papilla preservation flaps</b> keep interdental tissue over a defect and are recommended for regeneration.</p>
 <p><b>Gingivectomy</b> cuts away the pocket wall. It suits only suprabony pockets with enough attached gingiva, such as drug-induced enlargement. It is wrong for infrabony defects or where the pocket base lies at or beyond the mucogingival junction, because it would remove all the keratinised tissue.</p>
 <p><b>Osseous resective surgery</b> reshapes bone toward a "positive architecture" (interdental bone coronal to radicular bone). <b>Osteoplasty</b> removes non-supporting bone, such as thick ledges. <b>Ostectomy</b> removes supporting bone. It suits shallow craters and one-wall defects, and is the core of crown lengthening.</p>
 <p><b>Regeneration</b> means new cementum, PDL and bone on a root that had lost them. Melcher's idea explains the design. Whichever cells reach the root first decide the healing:</p>
 <ul>
 <li>Epithelium gives a long junctional epithelium (repair).</li>
 <li>Gingival connective tissue gives root resorption.</li>
 <li>Bone gives root resorption and ankylosis.</li>
 <li>PDL cells give a new attachment.</li>
 </ul>
 <p>The tools are:</p>
 <ul>
 <li><b>Guided tissue regeneration</b> (GTR): a barrier membrane keeps epithelium and gingival connective tissue out so PDL cells can repopulate the root.</li>
 <li><b>Enamel matrix derivative</b> (EMD): porcine amelogenins that mimic root development.</li>
 <li><b>Bone grafts</b>: autograft (the patient's own bone, with living cells), allograft (freeze-dried or demineralised human bone), xenograft (usually bovine, a scaffold) and alloplast (synthetic).</li>
 </ul>
 <p>Defect shape decides the result. Deep, narrow defects with more bony walls (3-wall) contain the clot and regenerate best, while 1-wall defects do worst. S3 recommends regeneration for residual pockets with intrabony defects of 3 mm or deeper, using membranes or EMD with or without grafts. Only histology can prove regeneration. A radiograph shows bone fill and a probe shows attachment gain, but neither shows new cementum and PDL.</p>
 <p><b>Why the exam cares.</b> Expect questions on which flap or procedure suits which defect, when gingivectomy is contraindicated, osteoplasty versus ostectomy, GTR's principle and the best defect for regeneration.</p>`,
 connect: [
  {to:"m05-n03", why:"Repair by long junctional epithelium versus true regeneration is wound healing applied to a root surface."},
  {to:"m21-n01", why:"Full- versus partial-thickness flaps, releasing incisions and blood supply follow the same rules in oral surgery and periodontal surgery."},
  {to:"m16-n01", why:"Crown lengthening uses ostectomy to restore supracrestal tissue attachment before a restoration margin is placed."},
  {to:"m19-n07", why:"Class II furcations are among the defects treated by regeneration, and recession is treated with flaps described here."},
  {to:"m18-n02", why:"Bone grafts and barrier membranes used around teeth are the same materials used in ridge and implant site development."}
 ],
 apply: {
  vignette: "A 47-year-old non-smoker with Stage III periodontitis has completed Steps 1 and 2. Plaque score is 12%. The mesial of 3.6 still probes 7 mm with bleeding, and a radiograph and bone sounding show a narrow, 5 mm deep three-wall intrabony defect. Which of the following is the most appropriate treatment of this site?",
  options: ["Regenerative surgery with a papilla preservation flap using enamel matrix derivative or a barrier membrane","Gingivectomy to remove the pocket wall","Ostectomy to eliminate the defect and create positive architecture","Extraction of 3.6 and placement of an implant"],
  answer: "Regenerative surgery with a papilla preservation flap using enamel matrix derivative or a barrier membrane",
  steps: [
   "Step 1: the ask is the best procedure for a residual deep pocket with a specific defect.",
   "Step 2: the facts are excellent plaque control, a non-smoker, and a narrow 5 mm three-wall intrabony defect, the most favourable shape for regeneration.",
   "Step 3: eliminate gingivectomy: it is contraindicated for infrabony defects and would leave the bony defect untreated.",
   "Step 4: eliminate ostectomy, which would sacrifice a lot of supporting bone on 3.6 and its neighbour to flatten a deep defect, and extraction, which discards a treatable tooth.",
   "Step 5: the survivor matches S3: residual pockets with intrabony defects of 3 mm or more should be treated regeneratively, with a tissue-preserving flap and membranes or EMD."
  ]
 },
 teach: {
  prompt: "Using Melcher's idea of cell repopulation, explain why a barrier membrane placed over an intrabony defect can produce new attachment, while a flap debridement alone usually heals with a long junctional epithelium.",
  model: "After a flap, four tissues compete to cover the cleaned root: epithelium, gingival connective tissue, bone and periodontal ligament. Epithelium migrates fastest, so without a barrier it runs down the root and the site heals by a long junctional epithelium, which is repair. Gingival connective tissue on the root tends to cause resorption, and bone in direct contact causes root resorption and ankylosis. Only PDL cells can form new cementum with inserting fibres. A barrier membrane holds back epithelium and gingival connective tissue and keeps a space over the defect, so PDL and bone cells from the defect walls repopulate the root and true regeneration can occur."
 },
 cards: [
  ["S3: residual pocket 6 mm or more after Step 2","Suggest access flap surgery"],
  ["S3: intrabony defect of 3 mm or more with residual pocket","Recommend regenerative surgery (membrane or EMD, with or without graft)"],
  ["Gingivectomy contraindications","Infrabony defects; pocket base at or beyond the mucogingival junction; inadequate attached gingiva"],
  ["Modified Widman flap aim","Access for debridement with minimal tissue removal and little recession"],
  ["Apically positioned flap aim","Pocket elimination while keeping keratinised gingiva"],
  ["Osteoplasty vs ostectomy","Osteoplasty: reshape non-supporting bone. Ostectomy: remove supporting bone"],
  ["Melcher's concept","The cell type that repopulates the root decides the type of healing"],
  ["GTR principle","Barrier excludes epithelium and gingival connective tissue so PDL cells repopulate the root"],
  ["Enamel matrix derivative","Porcine amelogenins mimicking root development"],
  ["Defect with best regenerative prognosis","Deep, narrow, three-wall intrabony defect"],
  ["Proof of regeneration","Histology only (new cementum, PDL and bone)"],
  ["Plaque control needed before surgery","Adequate, sustained plaque control; S3 recommends no surgery while hygiene is poor"]
 ],
 questions: [
  ["Gingivectomy is contraindicated when:","The base of the pocket lies at or apical to the mucogingival junction",["The pocket is suprabony with a wide band of attached gingiva","There is drug-induced gingival enlargement","Fibrotic gingiva covers the crowns of the teeth"],"Excising a pocket that extends beyond the mucogingival junction would remove all the keratinised tissue and leave alveolar mucosa at the margin. Suprabony pockets in wide attached gingiva are the indication."],
  ["The principal aim of the modified Widman flap is to:","Give access for debridement with minimal tissue loss",["Eliminate pockets by resecting and recontouring bone","Increase the width of keratinised gingiva","Cover exposed root surfaces"],"The modified Widman flap is an access flap that replaces tissue close to its original position, healing mostly by long junctional epithelium. Pocket elimination is the aim of apically positioned flaps with osseous surgery."],
  ["An apically positioned flap is chosen in preference to gingivectomy for a 6 mm suprabony pocket on 2.6 with a narrow band of attached gingiva because it:","Removes the pocket but keeps the keratinised tissue",["Regenerates new cementum and bone on the root","Avoids the need to raise a flap","Moves the gingival margin coronally over the root"],"Repositioning the flap at the crest removes the pocket without cutting away scarce keratinised gingiva. A coronally advanced flap moves the margin coronally, the opposite direction."],
  ["Removal of a thick buccal bony ledge that does not support the tooth, to allow better flap adaptation, is called:","Osteoplasty",["Ostectomy","Guided bone regeneration","Hemisection"],"Osteoplasty reshapes non-supporting bone. Ostectomy removes bone that supports the tooth and therefore reduces attachment."],
  ["Which intrabony defect has the best prognosis for periodontal regeneration?","A deep, narrow three-wall defect",["A shallow, wide one-wall defect","A horizontal bone loss pattern","An interproximal crater with thin walls"],"More bony walls and a narrow angle contain the clot and provide cells and vessels, giving the most predictable fill. Horizontal loss is not amenable to regeneration with current techniques."],
  ["The rationale of guided tissue regeneration is to:","Exclude gingival tissues so PDL cells repopulate the root",["Stimulate rapid epithelial migration along the root","Replace the root surface with new bone","Remove the cementum from the root before healing"],"The barrier stops fast-growing epithelium and gingival connective tissue from reaching the root first, which would give repair or resorption. PDL progenitors are the cells able to form new attachment."],
  ["Enamel matrix derivative used in regenerative periodontal surgery consists mainly of:","Amelogenins derived from developing porcine teeth",["Bovine hydroxyapatite granules","Recombinant human bone morphogenetic protein","Collagen from human skin"],"EMD is a porcine amelogenin preparation thought to mimic the events of root development. Bovine mineral is a xenograft scaffold, a different material."],
  ["The only method that can confirm true periodontal regeneration after treatment of an intrabony defect on 1.6 is:","Histology showing new cementum, PDL and bone",["A radiograph showing bone fill of the defect","A probing depth reduction of 3 mm or more","Absence of bleeding on probing"],"Radiographic fill and clinical attachment gain can be produced by a long junctional epithelium against new bone. Only histology shows new inserting fibres in new cementum."],
  ["Four months after open flap debridement without regenerative materials on 4.6, the pocket has reduced from 7 mm to 4 mm. The tissue most likely lining the root is:","A long junctional epithelium",["New cementum with inserting PDL fibres","Bone fused directly to the root","Keratinised oral epithelium"],"Without a barrier or biologic, epithelium wins the race down the root, so healing is mostly repair. True new attachment is unusual with flap debridement alone."],
  ["A 50-year-old with a plaque score of 60% requests surgery for residual 7 mm pockets. The most appropriate response is to:","Defer surgery and improve plaque control first",["Proceed with regenerative surgery immediately","Perform a gingivectomy as it does not need good hygiene","Prescribe systemic antibiotics in place of surgery"],"S3 recommends not operating on patients who cannot keep adequate plaque control, because outcomes depend on it and attachment can be lost. Antibiotics do not replace either hygiene or surgery."],
  ["A bone graft material that has living cells capable of forming new bone (osteogenic potential) is a:","Autograft",["Xenograft","Alloplast","Freeze-dried allograft"],"Only autogenous bone carries living osteogenic cells. Xenografts and alloplasts act mainly as scaffolds (osteoconduction)."],
  ["A partial-thickness (split) flap differs from a full-thickness flap in that it:","Leaves periosteum covering the bone",["Includes the periosteum with the flap","Exposes the alveolar bone for osseous surgery","Is used only on the palate"],"A split flap is dissected above the periosteum, useful when the flap is to be positioned or for mucogingival grafts. Osseous surgery and regeneration need full-thickness flaps to expose bone."],
  ["Compared with non-smokers, smokers who receive periodontal regenerative surgery typically show:","Less attachment gain and pocket reduction",["Greater bone fill","Faster healing with fewer complications","No difference in outcome"],"Smoking impairs vascularity, neutrophil function and fibroblast activity, so all periodontal treatments, especially regeneration, give poorer results. Cessation is part of Step 1."]
 ]
};

window.CONTENT["m19-n07"] = {
 understand: `
 <p><b>Two problems that resist ordinary cleaning: roots exposed by recession, and bone lost between the roots of a multirooted tooth.</b> Both are diagnosed with a probe and graded, and the grade predicts what treatment can achieve.</p>
 <p><b>Gingival recession</b> is the apical shift of the margin below the CEJ, measured from CEJ to margin. Causes include a thin phenotype, toothbrushing trauma, a prominent root or thin buccal bone, labial orthodontic movement, a high frenum, plaque-induced inflammation and periodontitis. Recession gives sensitivity, root caries, a poor smile and difficult cleaning.</p>
 <p><b>Two classifications.</b> <b>Miller (1985)</b> uses the mucogingival junction and interdental tissue:</p>
 <ul>
 <li>Class I: recession short of the mucogingival junction, no interdental bone or soft tissue loss.</li>
 <li>Class II: recession to or beyond the junction, no interdental loss.</li>
 <li>Class III: interdental loss or malposition.</li>
 <li>Class IV: severe interdental loss or malposition.</li>
 </ul>
 <p>Full root coverage is expected in classes I and II, partial coverage in class III, and none in class IV (Miller 1985). The 2017 World Workshop adopted <b>Cairo's (2011)</b> types, which use interdental attachment only:</p>
 <ul>
 <li><b>RT1</b>: no interproximal attachment loss.</li>
 <li><b>RT2</b>: interproximal loss less than or equal to the buccal loss.</li>
 <li><b>RT3</b>: interproximal loss greater than the buccal loss.</li>
 </ul>
 <p>Interdental attachment supports the blood supply of a coronally moved flap, so it sets the ceiling for coverage. The 2017 workshop concluded that, with good plaque control and no inflammation, no minimum width of keratinised gingiva is needed to prevent attachment loss. Grafting is for progressing recession, sensitivity, aesthetics, or before restorations or orthodontics in thin tissue.</p>
 <p><b>Treatment.</b> A <b>coronally advanced flap with a subepithelial connective tissue graft</b> is the most predictable method for root coverage. A <b>free gingival graft</b> from the palate reliably widens keratinised tissue but covers roots poorly and leaves a colour mismatch. A <b>frenectomy</b> removes a frenum that pulls the margin.</p>
 <p><b>Furcations.</b> Once bone is lost into the area between roots, curettes cannot clean the concavities and the roof, and the tooth loses support quickly. A short root trunk exposes the furcation early. Cervical enamel projections and enamel pearls create a path for plaque, and accessory canals can carry pulpal infection there. A curved <b>Nabers probe</b> is used. The mesial furcation of a maxillary molar is reached from the palatal.</p>
 <p><b>Glickman grades</b>: I, incipient, inside the flute; II, a cul-de-sac with partial horizontal loss; III, through and through but covered by soft tissue; IV, through and through and visible. <b>Hamp degrees</b> (Hamp, Nyman and Lindhe 1975): 1, horizontal loss up to 3 mm; 2, more than 3 mm but not through; 3, through and through. Some textbooks state the cut-off as one-third of the tooth width instead of 3 mm.</p>
 <p><b>Management by class.</b> Class I: instrumentation and odontoplasty. Class II: regeneration, recommended for mandibular molars and suggested for maxillary buccal furcations (S3). Class III: tunnelling (which risks root caries), root resection or hemisection (with root canal treatment), or extraction.</p>
 <p><b>Why the exam cares.</b> Expect Miller or RT type to predict coverage, the right graft for each goal, Glickman and Hamp grades, and management of a furcation by class.</p>`,
 connect: [
  {to:"m07-n02", why:"Root trunk length, furcation entrances and root concavities of molars and maxillary first premolars decide how early furcations are involved and how hard they are to clean."},
  {to:"m20-n08", why:"Accessory canals into a furcation and root resection both join endodontics to furcation management."},
  {to:"m22-n05", why:"Labial movement of incisors through thin bone is a classic cause of recession, so phenotype is assessed before orthodontics."},
  {to:"m15-n06", why:"Recession exposes root dentine, so cervical sensitivity, abrasion and root caries follow the mucogingival diagnosis."},
  {to:"m19-n06", why:"Flap designs and regenerative materials from periodontal surgery are the tools for root coverage and class II furcations."}
 ],
 apply: {
  vignette: "A 32-year-old has 4 mm of buccal recession on 3.1 that extends past the mucogingival junction. Interproximal attachment and bone are intact and the teeth are well aligned. She reports sensitivity and dislikes the appearance. Which of the following best describes the defect and the expected result of treatment?",
  options: ["Miller class II (Cairo RT1); full root coverage is achievable with a coronally advanced flap and connective tissue graft","Miller class III (Cairo RT2); only partial coverage can be expected","Miller class I (Cairo RT1); a free gingival graft is the best method for root coverage","Miller class IV (Cairo RT3); root coverage is not possible"],
  answer: "Miller class II (Cairo RT1); full root coverage is achievable with a coronally advanced flap and connective tissue graft",
  steps: [
   "Step 1: the ask is classification plus prognosis for root coverage.",
   "Step 2: the facts are recession beyond the mucogingival junction, intact interproximal attachment and no malposition.",
   "Step 3: eliminate class III/RT2 and class IV/RT3, which require interdental attachment loss or malposition.",
   "Step 4: eliminate class I: the recession passes the mucogingival junction, and a free gingival graft is poor for root coverage anyway.",
   "Step 5: the survivor: Miller II with no interdental loss is RT1, full coverage is expected, and coronally advanced flap plus connective tissue graft is the most predictable technique."
  ]
 },
 teach: {
  prompt: "Explain why interproximal attachment, rather than the depth of the recession itself, sets the limit on how much of an exposed root can be covered, and how this is built into Cairo's classification.",
  model: "A root coverage flap or graft lying on avascular root survives on blood from the surrounding tissue, especially the interdental papillae and bone on each side. If interproximal attachment is intact, the papillae stand at their original height and can support tissue up to the CEJ, so full coverage is possible however deep the buccal recession. Once interproximal attachment is lost, the papillae have fallen and the new margin can rise only to about their level. Cairo's RT1, RT2 and RT3 grade recession by interproximal attachment loss for exactly this reason: RT1 can be fully covered, RT2 partially, and RT3 has the poorest prognosis."
 },
 cards: [
  ["Miller class I","Recession short of the MGJ, no interdental loss; full coverage expected"],
  ["Miller class II","Recession to or beyond the MGJ, no interdental loss; full coverage expected"],
  ["Miller class III and IV","III: interdental loss or malposition, partial coverage. IV: severe interdental loss, no coverage expected"],
  ["Cairo RT1, RT2, RT3","RT1: no interproximal CAL. RT2: interproximal CAL ≤ buccal. RT3: interproximal CAL > buccal"],
  ["Most predictable root coverage technique","Coronally advanced flap with subepithelial connective tissue graft"],
  ["Free gingival graft: best use","Widening keratinised tissue; poor for root coverage, colour mismatch"],
  ["Glickman grades I-IV","I incipient; II cul-de-sac; III through-and-through covered by soft tissue; IV through-and-through and visible"],
  ["Hamp degrees","1: horizontal loss up to 3 mm (or 1/3 tooth width); 2: more than that, not through; 3: through-and-through"],
  ["Instrument to probe furcations","Curved Nabers probe"],
  ["Maxillary molar mesial furcation access","From the palatal"],
  ["S3 for mandibular class II furcation with residual pocket","Recommend regenerative surgery"],
  ["Options for class III furcation","Tunnelling, root resection or hemisection (with endodontics), or extraction"]
 ],
 questions: [
  ["Gingival recession on 4.1 extends beyond the mucogingival junction with no interdental bone or soft tissue loss and no malposition. The Miller class is:","Class II",["Class I","Class III","Class IV"],"Passing the mucogingival junction without interdental loss is class II; class I does not reach the junction. Classes III and IV need interdental loss or malposition."],
  ["In the 2017 classification, Cairo recession type RT2 is defined as recession with:","Interproximal attachment loss no more than the buccal",["No interproximal attachment loss at all","Interproximal attachment loss greater than the buccal loss","Recession confined to keratinised gingiva"],"RT1 has no interproximal loss, RT2 interproximal loss up to the buccal loss, and RT3 interproximal loss greater than the buccal loss. The mucogingival junction is not part of Cairo's system."],
  ["The amount of root coverage achievable on a recession defect is most strongly limited by the:","Level of interproximal attachment and papillae",["Width of the remaining keratinised tissue","Depth of the buccal probing","Age of the patient"],"The interdental tissues supply and support the graft or flap, so their height sets the ceiling. This is why both Miller III/IV and Cairo RT2/RT3 predict incomplete coverage."],
  ["A 29-year-old has 3 mm Miller class I recession on 1.3 with sensitivity and wants the root covered. The most predictable procedure is:","Coronal flap with a connective tissue graft",["Free gingival graft taken from the palate","Gingivectomy with a gingivoplasty","Apically positioned flap with osteoplasty"],"CAF plus connective tissue graft gives the most predictable complete coverage. A free gingival graft widens keratinised tissue but covers roots poorly and matches colour badly."],
  ["The main indication for a free gingival graft is to:","Increase the width of keratinised tissue",["Achieve aesthetic root coverage in the maxillary anterior region","Treat a class III furcation","Eliminate a suprabony pocket"],"The epithelialised palatal graft reliably creates a band of keratinised tissue, for example below a mandibular incisor with mobile mucosa at the margin. Its root coverage and colour match are poor."],
  ["A 25-year-old has thin tissue, 1 mm of keratinised gingiva on 3.1, no recession progression, no inflammation and good plaque control. Grafting is:","Not required solely because the keratinised band is narrow",["Required because at least 5 mm of keratinised tissue is necessary for health","Required before any scaling can be done","Contraindicated in all patients under 30"],"Current consensus holds that, with good plaque control, a narrow band of keratinised tissue does not by itself cause attachment loss (2017 World Workshop). Grafting is indicated for progression, symptoms, aesthetics or planned treatment in thin tissue."],
  ["Probing between the mesial and distal roots of 3.6 shows a horizontal component that enters the furcation but does not pass through. The Glickman grade is:","Grade II",["Grade I","Grade III","Grade IV"],"Glickman II is a cul-de-sac with partial horizontal loss. Grade III passes through the furcation, and grade I is incipient bone loss within the flute."],
  ["A probe passes through the furcation of 4.6 from buccal to lingual, and the furcation is visible clinically because of recession. The Glickman grade is:","Grade IV",["Grade I","Grade II","Grade III"],"Through-and-through and clinically open is grade IV; when the through-and-through defect is still covered by soft tissue it is grade III."],
  ["The instrument designed to detect and measure furcation involvement is the:","Nabers probe",["Williams probe","Explorer 23","WHO ball-ended probe"],"The curved Nabers probe follows the curve into a furcation. Straight probes measure pocket depth but cannot follow the furcation roof."],
  ["The mesial furcation of a maxillary first molar is best probed from the:","Palatal aspect",["Buccal aspect","Distal aspect","Occlusal aspect"],"The mesial furcation entrance lies nearer the palatal than the buccal side because the mesiobuccal root is broad buccolingually. The distal furcation can be reached from buccal or palatal."],
  ["A 46-year-old has a residual 6 mm pocket at a class II buccal furcation of 3.6 after non-surgical therapy, with good plaque control. According to the EFP S3 guideline, the most appropriate treatment is:","Periodontal regenerative surgery",["Extraction and implant placement","Tunnel preparation","Gingivectomy"],"S3 recommends regeneration for mandibular molars with residual pockets and class II furcations, using EMD or bone-derived graft with or without membrane. Tunnelling is a class III option and carries a root caries risk."],
  ["A 58-year-old has a class III furcation on 4.6 with the distal root severely affected and the mesial root well supported. A conservative option to keep part of the tooth is:","Hemisection with removal of the distal root",["Gingivectomy to eliminate the furcation pocket","Free gingival graft to cover the furcation","Regenerative surgery with a barrier membrane"],"Separating the roots and removing the hopeless one, after endodontics, can keep the strong mesial half as a premolar-like abutment. Regeneration is unpredictable in class III furcations."],
  ["A thin, ectopic enamel extension running from the CEJ into the buccal furcation of 3.7 most likely contributes to periodontal breakdown because it:","Blocks connective tissue attachment and retains plaque",["Releases fluoride that inhibits periodontal healing","Causes pulpal necrosis through lateral canals","Increases the length of the root trunk"],"Cervical enamel projections and enamel pearls lack cementum, so no fibres attach; plaque tracks along them into the furcation. They do not involve the pulp."]
 ]
};

window.CONTENT["m19-n08"] = {
 understand: `
 <p><b>Periodontitis is controlled, not cured.</b> After active therapy the biofilm grows back, and in susceptible patients a pathogenic subgingival flora returns within weeks to months. The patient therefore enters <b>supportive periodontal care</b> (SPC), also called maintenance. Patients who skip maintenance lose more teeth.</p>
 <p><b>The interval.</b> The EFP S3 guideline recommends SPC at 3 to a maximum of 12 months, tailored to risk. In practice most treated periodontitis patients start at about 3 months and are extended if they stay stable. Factors that shorten the interval include residual bleeding pockets, a high bleeding score, smoking, poorly controlled diabetes, Grade C disease and poor plaque control. A typical visit:</p>
 <ul>
 <li>Update the medical history and risk factors.</li>
 <li>Re-chart probing and bleeding.</li>
 <li>Check plaque and coach hygiene (interdental brushes before floss).</li>
 <li>Professional plaque removal, with re-instrumentation of sites that bleed or have deepened.</li>
 <li>Radiographs when indicated, and smoking cessation support.</li>
 </ul>
 <p>Recurrence means a new diagnosis and a return to treatment.</p>
 <p><b>Risk assessment.</b> The Lang and Tonetti hexagon combines six factors: % sites with bleeding, number of pockets of 5 mm or more, teeth lost, bone loss relative to age, systemic or genetic conditions (such as diabetes) and smoking. Together they rate the patient low, moderate or high risk.</p>
 <p><b>Prognosis</b> is judged for the patient and for each tooth.</p>
 <ul>
 <li><b>Patient factors</b>: age relative to destruction (the grade), smoking, diabetes control, compliance and plaque control.</li>
 <li><b>Tooth factors</b>: remaining bone, probing depth, mobility, furcation involvement, crown-to-root ratio, root form, endodontic or caries problems, and strategic value.</li>
 </ul>
 <p>McGuire and Nunn graded teeth as good, fair, poor, questionable or hopeless. Kwok and Caton simplified this to favourable, questionable, unfavourable and hopeless. Furcation involvement, smoking and mobility are among the factors that predict tooth loss.</p>
 <p><b>Perio-systemic links: say "associated with", not "causes".</b></p>
 <ul>
 <li><b>Diabetes</b> is a two-way relationship. Poor glycaemic control increases the risk and severity of periodontitis, and periodontitis is associated with worse glycaemic control. Periodontal treatment is safe in diabetes and lowers HbA1c by about 0.4 percentage points at 3 to 4 months and about 0.3 at 6 months (Cochrane review, Simpson 2022). Evidence beyond 6 months is limited, and treatment does not replace medical care.</li>
 <li><b>Cardiovascular disease</b>: periodontitis is associated with atherosclerotic disease independently of shared risk factors. Bacteraemia and systemic inflammation (raised C-reactive protein) are plausible links. An AHA scientific statement (Lockhart et al. 2012) concluded that a causal relationship has not been proven and that there is no evidence treatment prevents atherosclerotic events such as heart attacks or strokes.</li>
 <li><b>Pregnancy</b>: periodontitis is associated with preterm birth and low birth weight. Treatment during pregnancy is safe, but trials have not shown that it reduces preterm birth.</li>
 <li>Associations are also reported with aspiration pneumonia in dependent elderly people, rheumatoid arthritis and chronic kidney disease.</li>
 </ul>
 <p><b>Why the exam cares.</b> Expect recall interval, prognostic factors, the diabetes two-way link and the wording trap: the best answer usually says "associated with", not "causes".</p>`,
 connect: [
  {to:"m13-n06", why:"Glycaemic control changes periodontal risk and grade, and periodontal treatment can modestly lower HbA1c, so diabetes and periodontics are managed together."},
  {to:"m13-n05", why:"Patients with cardiovascular disease often take antiplatelets or anticoagulants that affect periodontal instrumentation and surgery, while the perio-CVD link is an association."},
  {to:"m13-n08", why:"Pregnancy gingivitis and the association of periodontitis with preterm birth are managed with safe, timely periodontal care."},
  {to:"m13-n09", why:"Bacteraemia from instrumentation is one proposed systemic link, and it is why highest-risk cardiac patients need AHA 2021 prophylaxis."},
  {to:"m18-n03", why:"Patients with a history of periodontitis carry higher risk of peri-implantitis, so the same supportive care applies to implants."}
 ],
 apply: {
  vignette: "A 58-year-old with type 2 diabetes (HbA1c 8.4%) has completed active treatment for Stage III, Grade C periodontitis. She asks whether treating her gums will cure her diabetes. Which of the following is the most appropriate response?",
  options: ["Periodontal treatment may modestly improve your blood sugar control, but it does not replace your diabetes care","Treating your gums will cure your diabetes if you keep regular recalls","Your gums and your diabetes are unrelated, so your treatment will have no effect on your blood sugar","You must stop all diabetes medicines while having periodontal treatment"],
  answer: "Periodontal treatment may modestly improve your blood sugar control, but it does not replace your diabetes care",
  steps: [
   "Step 1: the ask is the most accurate patient-facing statement about the diabetes link.",
   "Step 2: the facts are poorly controlled diabetes (a Grade C modifier) and completed periodontal therapy.",
   "Step 3: eliminate 'cure': trials show only a modest short-term HbA1c reduction, and no periodontal treatment cures diabetes.",
   "Step 4: eliminate 'unrelated', because the relationship is two-way, and 'stop medicines', which is dangerous and never part of periodontal care.",
   "Step 5: the survivor states the evidence without overclaiming: a modest benefit and continued medical management, with short supportive care intervals because of her risk."
  ]
 },
 teach: {
  prompt: "Explain to a patient with heart disease what is and is not known about the link between periodontitis and cardiovascular disease, without overclaiming.",
  model: "People with periodontitis have more heart and blood vessel disease, and this link remains after allowing for shared risk factors such as smoking and diabetes. Plausible reasons are bacteria entering the bloodstream from inflamed gums and body-wide inflammation. However, studies have not proven that gum disease causes heart disease, and there is no evidence that treating the gums prevents heart attacks or strokes. Periodontal treatment is still worthwhile for the mouth and is safe, and the cardiologist's treatment of blood pressure, cholesterol and smoking remains the main protection for the heart."
 },
 cards: [
  ["EFP S3 supportive care interval","3 to a maximum of 12 months, tailored to risk"],
  ["Common starting recall after active therapy","About 3 months, extended if stable"],
  ["Lang and Tonetti risk hexagon factors","% BOP, pockets 5 mm or more, tooth loss, bone loss/age, systemic/genetic factors, smoking"],
  ["Kwok and Caton prognosis categories","Favourable, questionable, unfavourable, hopeless"],
  ["Tooth-level prognostic factors","Bone level, probing depth, mobility, furcation, crown-root ratio, root form, endodontic status"],
  ["Diabetes and periodontitis","Two-way: poor control worsens periodontitis; periodontitis is associated with worse glycaemic control"],
  ["Effect of periodontal treatment on HbA1c","Modest reduction (about 0.4 percentage points at 3-4 months, 0.3 at 6 months; Cochrane 2022)"],
  ["Periodontitis and cardiovascular disease","Independent association; causation not proven; treatment not shown to prevent events"],
  ["Periodontal treatment in pregnancy","Safe; has not been shown to reduce preterm birth"],
  ["Best exam wording for perio-systemic links","'Associated with', not 'causes'"]
 ],
 questions: [
  ["According to the EFP S3 guideline, supportive periodontal care visits should be scheduled at intervals of:","3 to 12 months, set by the patient's risk",["Every 2 weeks for the first year","A fixed 6 months for every patient","When symptoms such as bleeding appear"],"The guideline sets a 3 to 12 month range adjusted to risk profile and periodontal status. A fixed 6-month interval for everyone ignores individual risk."],
  ["A 45-year-old has just completed active therapy for Stage III, Grade C periodontitis. She smokes 15 cigarettes a day and still has two bleeding 5 mm sites. The most appropriate initial supportive care interval is:","3 months",["12 months","18 months","24 months"],"High-risk patients start at the short end of the range. Smoking, Grade C disease and residual bleeding pockets all argue against a long interval."],
  ["The main reason periodontitis patients need lifelong supportive care is that:","Biofilm regrows and susceptibility persists after treatment",["Treatment permanently removes the subgingival bacteria","The stage improves to Stage I after successful therapy","Yearly courses of systemic antibiotics are needed"],"Treatment controls rather than cures; a pathogenic flora can recolonise residual pockets and the host remains susceptible. Stage is not downgraded after therapy."],
  ["Which of the following factors most strongly worsens the prognosis of an individual molar?","Class III furcation involvement",["Presence of a composite restoration","Absence of the opposing third molar","Mild gingival recession on the buccal surface"],"Through-and-through furcation involvement makes the tooth hard to clean and predicts tooth loss. Restorations and mild recession matter much less."],
  ["Under the Kwok and Caton prognosis system, the four categories are:","Favourable, questionable, unfavourable and hopeless",["Good, fair, poor, questionable and hopeless","Stage I, II, III and IV, by severity and complexity","Grade A, B, C and D by progression rate"],"Kwok and Caton simplified the older McGuire and Nunn scheme (good, fair, poor, questionable, hopeless). Stages and grades describe the disease, not tooth prognosis."],
  ["The Lang and Tonetti periodontal risk assessment includes all of the following EXCEPT:","Number of restored teeth",["Percentage of sites with bleeding on probing","Number of pockets of 5 mm or more","Smoking status"],"The six vectors are bleeding, pockets of 5 mm or more, tooth loss, bone loss/age, systemic or genetic factors and smoking. The number of restorations is not one of them."],
  ["A 55-year-old with type 2 diabetes asks about her gums. The relationship between diabetes and periodontitis is best described as:","Two-way: poor control worsens periodontitis and vice versa",["One-way: periodontitis causes type 2 diabetes to develop","Unrelated once smoking and age are accounted for","Protective: diabetes reduces periodontal inflammation"],"Hyperglycaemia amplifies periodontal inflammation, and periodontal inflammation is associated with insulin resistance and higher HbA1c. Periodontitis is not shown to cause diabetes."],
  ["Non-surgical periodontal treatment in patients with type 2 diabetes has been shown to:","Lower HbA1c modestly in the short term",["Cure diabetes in most patients","Raise HbA1c significantly","Eliminate the need for diabetes medication"],"The 2022 Cochrane review found a reduction of about 0.4 percentage points at 3 to 4 months and 0.3 at 6 months, with little evidence beyond that. It complements, not replaces, medical management."],
  ["The most accurate statement about periodontitis and atherosclerotic cardiovascular disease is that:","Independently associated, but causation is not proven",["Periodontitis has been proven to cause myocardial infarction","Periodontal treatment has been shown to prevent strokes","There is no association between them"],"Epidemiology shows an independent association with plausible mechanisms, but no proof of causation and no trial evidence that treatment prevents cardiovascular events (AHA statement, Lockhart et al. 2012). Exam answers favour 'associated with'."],
  ["A pregnant 29-year-old in her second trimester has Stage II periodontitis. Regarding treatment, the most appropriate advice is that:","Treatment is safe but has not been shown to prevent preterm birth",["Treatment should be postponed until after the delivery","Treatment will lower her risk of preterm birth","Treatment requires cover with systemic antibiotics in pregnancy"],"Randomised trials found periodontal treatment in pregnancy safe but without a reduction in preterm birth. The second trimester is a convenient time for elective care."],
  ["A proposed mechanism linking periodontitis with systemic conditions such as cardiovascular disease is:","Bacteraemia and raised systemic markers such as CRP",["Systemic absorption of fluoride from toothpaste","Swallowing of dislodged subgingival calculus","Reduced salivary flow from periodontal pockets"],"Ulcerated pocket epithelium allows bacteria and their products into the circulation, and inflamed tissues raise systemic inflammatory markers. These remain plausible mechanisms rather than proven causes."],
  ["A 70-year-old resident of a long-term care home with poor oral hygiene is at increased risk of which condition associated with periodontal pathogens and dental plaque?","Aspiration pneumonia",["Infective endocarditis in all residents","Type 1 diabetes","Osteoarthritis of the knee"],"Plaque acts as a reservoir for respiratory pathogens that can be aspirated in frail, dependent elderly people, and oral care reduces pneumonia risk. Endocarditis concerns only specific cardiac conditions."],
  ["During a supportive care visit, a site previously 4 mm without bleeding now probes 6 mm and bleeds. The most appropriate action is to:","Re-diagnose, re-instrument and shorten the recall interval",["Record it and review at the next 12-month visit","Prescribe systemic antibiotics without instrumentation","Extract the tooth at this visit"],"Recurrent disease during SPC calls for a new diagnosis and re-treatment, and the risk profile should be reassessed. Waiting a year allows further loss."]
 ]
};
