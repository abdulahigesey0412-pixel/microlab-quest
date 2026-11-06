/* Module m15: Operative dentistry. Written for a learner starting from zero.
   References: Sturdevant's Art and Science of Operative Dentistry 8th ed; Summitt's Fundamentals of Operative Dentistry;
   ICCMS; ICCC consensus (Schwendicke et al. 2016; Innes et al. 2016); ESE position statement (Duncan et al. 2019);
   EFCD-ESE-ORCA S3 guideline (Schwendicke et al. 2026); Magne & Belser; Aschheim Esthetic Dentistry. */
window.CONTENT = window.CONTENT || {};

window.CONTENT["m15-n01"] = {
 understand: `
 <p><b>A cavity preparation is a trade between removing disease and keeping the tooth strong.</b> Every millimetre lost weakens what remains, and no restoration lasts for ever. So the aim is the smallest preparation that removes what must go and lets the chosen material survive.</p>
 <div class="tscroll"><table>
 <tr><th>Class</th><th>Site</th><th>Example</th></tr>
 <tr><td>I</td><td>Pits and fissures: occlusal of premolars and molars, occlusal two-thirds of molar buccal and lingual surfaces, lingual of maxillary incisors</td><td>Buccal pit of 3.6</td></tr>
 <tr><td>II</td><td>Proximal of posterior teeth</td><td>MO on 1.4</td></tr>
 <tr><td>III</td><td>Proximal of anterior teeth, incisal angle intact</td><td>Distal of 2.1</td></tr>
 <tr><td>IV</td><td>Proximal of anterior teeth, incisal angle involved</td><td>Fractured mesial angle of 1.1</td></tr>
 <tr><td>V</td><td>Gingival third of facial or lingual, any tooth</td><td>Cervical buccal of 3.4</td></tr>
 <tr><td>VI (added later)</td><td>Incisal edge or cusp tip</td><td>Worn cusp tip of 4.6</td></tr>
 </table></div>
 <p><b>Nomenclature.</b> One surface is <b>simple</b>, two <b>compound</b>, three or more <b>complex</b>. The <b>pulpal floor</b> is perpendicular to the long axis; the <b>axial wall</b> is parallel to it; the <b>gingival floor</b> is the step of a proximal box. Two walls meet at a <b>line angle</b> (axiopulpal), three at a <b>point angle</b>.</p>
 <p><b>Why extension for prevention went.</b> Black (1908) had no fluoride, sealants or adhesives. Decay recurred at margins left in plaque zones, so he extended outlines into self-cleansing areas, cutting sound fissures. Today caries is managed as a biofilm disease: early lesions arrest, sound fissures are sealed and resin bonds without undercuts. Cutting is now the expensive option. Losing both marginal ridges in an MOD preparation removes about 63% of cuspal stiffness (Reeh 1989). Each replacement is also larger than the last. <b>Minimal intervention</b> means detect, arrest, seal, cut only when cleansing and sealing cannot control the lesion, and repair rather than replace.</p>
 <p><b>Retention versus resistance.</b> <b>Retention form</b> stops the restoration being dislodged: occlusally converging walls and grooves for amalgam, bonding for composite, near-parallel walls with cement for a casting. <b>Resistance form</b> stops tooth or restoration fracturing under load: floors flat and perpendicular to force, rounded internal angles that do not concentrate stress, preserved cusps and ridges, enough material bulk. Enamel cleaves along its rods, so unsupported enamel is removed unless a bonded material will support it.</p>
 <p><b>Cusp capping.</b> A wide preparation leaves each cusp a cantilever that flexes and splits. Sturdevant's guide measures extension from the primary groove toward the cusp tip: at about half, consider capping; at two-thirds or more, capping is usually needed. Thin walls, heavy occlusion, a lost marginal ridge and root canal treatment all push toward coverage. Capping does not add retention; it turns a wedging force into a compressive one.</p>
 <p><b>Anatomy steers the bur.</b> On 3.4 and 4.4 the bur tilts slightly lingually to keep the floor perpendicular to the long axis and clear of the large buccal pulp horn. A sound oblique ridge on 1.6 or 2.6 is preserved by two separate preparations.</p>
 <p><b>Why the exam cares.</b> Items ask which class a lesion is, name an angle, separate resistance from retention features, or decide whether a thin cusp needs coverage. The modern answer protects sound tissue.</p>`,
 connect: [
  {to:"m06-n02", why:"Enamel rod direction explains why unsupported enamel is removed and why margin design differs between amalgam, composite and castings."},
  {to:"m07-n02", why:"Groove pattern, oblique ridges and pulp horn position on premolars and molars set the outline and the bur angle."},
  {to:"m08-n03", why:"ICCMS stage and activity decide whether a lesion is cut at all, which replaced extension for prevention as the first question."},
  {to:"m15-n02", why:"Amalgam is the material that still needs mechanical retention and resistance form, so it is where these principles apply most strictly."},
  {to:"m16-n01", why:"Crown preparation uses the same retention and resistance vocabulary, applied to external walls instead of internal ones."}
 ],
 apply: {
  vignette: "A 46-year-old has a failed MOD amalgam on 3.6 with recurrent caries and no pulpal symptoms. After removal, the preparation extends about three-quarters of the way from the central groove to the lingual cusp tip, and the lingual wall is about 1.2 mm thick. The most appropriate design decision for the lingual cusp is to:",
  options: ["Reduce the cusp and cover it with the restoration","Add retention grooves in the lingual wall only","Deepen the pulpal floor to increase material bulk","Extend the outline to include all buccal fissures"],
  answer: "Reduce the cusp and cover it with the restoration",
  steps: [
   "The ask: what to do about a weak cusp. That is a resistance problem, because the threat is fracture.",
   "Facts that matter: extension past two-thirds of the groove-to-tip distance, a thin wall, both marginal ridges gone.",
   "Cross out retention grooves: they hold the restoration in but do nothing to stop a thin cusp flexing and splitting.",
   "Cross out deepening the floor: it removes more dentine and makes the cusp taller and weaker, and it approaches the pulp.",
   "Cross out extending into fissures: that is extension for prevention, which costs sound tissue and adds no strength.",
   "The survivor: covering the cusp converts wedging into compression, so the tooth is loaded through the restoration instead of being split by it."
  ]
 },
 teach: {
  prompt: "A colleague trained in the 1960s extends every Class I into all fissures and asks why you do not. Explain the reasoning behind his rule, what changed, and what the wide outline costs the tooth.",
  model: "Black extended into self-cleansing zones because margins left in plaque areas decayed again and he had no fluoride, sealants or adhesives. Now caries is controlled by managing biofilm and sugar, sound or initial fissures can be sealed, and bonded materials need no geometric retention. A wider outline thins the cusps, and crossing marginal ridges removes a large share of the tooth's stiffness, so cusps flex and fracture. It also starts a cycle in which each replacement is larger. So I remove only what the lesion requires and seal the remaining fissures."
 },
 cards: [
  ["Class I sites","Occlusal pits and fissures of premolars and molars, occlusal two-thirds of molar buccal and lingual surfaces, lingual of maxillary incisors"],
  ["Class III vs Class IV","Both are proximal on anterior teeth; Class IV involves the incisal angle"],
  ["Class V","Gingival third of the facial or lingual surface of any tooth"],
  ["Simple, compound, complex","One surface, two surfaces, three or more surfaces"],
  ["Line angle vs point angle","Junction of two walls vs junction of three walls"],
  ["Retention form","Resists dislodgement of the restoration (convergence, grooves, bonding)"],
  ["Resistance form","Resists fracture of tooth and restoration (flat floors, rounded angles, bulk, preserved ridges)"],
  ["Why extension for prevention was abandoned","Fluoride, sealants and adhesion make cutting sound tooth unnecessary, and wide outlines weaken cusps"],
  ["Cusp capping guide","Extension of two-thirds or more of the groove-to-tip distance: usually cap; about half: consider"],
  ["Bur tilt on 3.4 or 4.4","Slightly lingual, to avoid the large buccal pulp horn"],
  ["Oblique ridge on 1.6","Keep it when sound; prepare mesial and distal pits separately"]
 ],
 questions: [
  ["A carious lesion is confined to the lingual pit of 1.2. In Black's classification it is:","Class I",["Class III","Class IV","Class V"],"Lingual pits of maxillary incisors are pit-and-fissure sites, so Class I. Class III is tempting because the tooth is anterior, but Class III requires a proximal lesion."],
  ["A 19-year-old has caries on the distal of 2.1 that has undermined and lost the distoincisal angle. This lesion is:","Class IV",["Class II","Class III","Class VI"],"Proximal on an anterior tooth with the incisal angle involved is Class IV. Class III would be the same lesion with the angle intact."],
  ["A mesio-occluso-distal preparation on 2.6 is described as:","Complex",["Simple","Compound","Compound-mixed"],"Three or more surfaces make a preparation complex. Compound is the tempting answer but it means exactly two surfaces."],
  ["The internal angle formed where the axial wall meets the pulpal floor of a Class II preparation is the:","Axiopulpal line angle",["Axiogingival line angle","Pulpogingival point angle","Faciopulpal line angle"],"Two walls meet at a line angle, named from the two walls. The axiogingival line angle lies lower, where the axial wall meets the gingival floor."],
  ["Which of the following is a feature of resistance form rather than retention form?","A flat pulpal floor perpendicular to occlusal load",["Occlusal convergence of the facial and lingual walls","Retention grooves in the proximal box","Acid-etched micromechanical bonding to enamel"],"A flat floor seats the restoration and directs force so that neither tooth nor material fractures. Convergence, grooves and bonding all stop dislodgement, which is retention."],
  ["Extension for prevention has been replaced by minimal intervention mainly because:","Fluoride, sealing and adhesion now control recurrence without cutting sound tooth",["Modern amalgam alloys no longer develop any marginal breakdown","Fissures are now known to be immune to caries in adults","High-speed instruments cannot produce wide preparations accurately"],"Black's rule answered recurrence when no other control existed. Fissures are not immune: they are sealed or monitored rather than cut."],
  ["Which change to a preparation on a vital 1.6 reduces cuspal stiffness the most?","Cutting through both marginal ridges",["Rounding the internal line angles","Placing a small conservative occlusal access","Removing unsupported enamel from the margin"],"Marginal ridges act as tie-beams between cusps, and an MOD loses far more stiffness than an occlusal preparation. Rounding angles reduces stress and does not weaken the tooth meaningfully."],
  ["A 22-year-old needs a Class I preparation on 4.4. The bur is best tilted slightly toward the lingual because:","The large buccal pulp horn lies close to the buccal side of the floor",["The lingual cusp is the taller and stronger functional cusp","Enamel rods on this tooth run lingually at every level","The lingual fissure must be removed for extension"],"The mandibular first premolar crown tilts lingually with a large buccal cusp and pulp horn, so a vertical bur heads for the horn. The buccal cusp, not the small lingual cusp, is the functional one."],
  ["A 28-year-old has separate mesial and distal occlusal lesions on 2.6 and a sound oblique ridge. The most appropriate outline is:","Two separate preparations that preserve the oblique ridge",["One preparation crossing the ridge to join the pits","An MOD preparation that extends for prevention","A crown preparation to protect the weakened cusps"],"The oblique ridge is a major structural feature of the maxillary molar and need not be crossed when sound. Joining the pits would sacrifice strength with no benefit."],
  ["A dentist leaves a thin ledge of enamel with no dentine beneath it at the margin of an amalgam preparation. Under occlusal load, this most likely results in:","Fracture along the enamel rods and a marginal gap",["Remineralisation of the unsupported enamel by saliva","Delayed expansion of the amalgam against the wall","Sclerosis of the dentine beneath the marginal ledge"],"Enamel is brittle and cleaves along rods when it lacks dentine support, leaving a gap that holds plaque. Delayed expansion is a moisture contamination problem in zinc-containing alloy."],
  ["The facial and lingual walls of a cast inlay preparation diverge occlusally, whereas those of an amalgam preparation converge. The best explanation is that:","A rigid casting needs a path of withdrawal, whereas plastic amalgam is packed into undercuts",["Gold is more brittle than amalgam and requires greater bulk at margins","Amalgam bonds to dentine, so its walls can be shaped for esthetics","Zinc phosphate cement can flow only into divergent preparation walls"],"A casting is made outside the mouth and must seat and withdraw, so undercuts are forbidden. Amalgam is packed in a plastic state and locks into convergent walls. Amalgam does not bond."],
  ["A 30-year-old has a small cavitated dentine lesion in the central fossa of 3.6 and sound-looking but retentive fissures elsewhere on the tooth. The most appropriate plan is to:","Restore only the lesion and seal the remaining fissures",["Extend the preparation through all the fissures","Place a full-coverage crown on the tooth","Leave the lesion and apply fluoride varnish alone"],"Minimal intervention treats the lesion and protects sound fissures without cutting them. Varnish alone is not sufficient once a dentine lesion is cavitated in a retentive fossa that cannot be cleansed."],
  ["An occlusal Class I preparation with four walls and a floor has how many line and point angles?","8 line angles and 4 point angles",["4 line angles and 4 point angles","8 line angles and 8 point angles","11 line angles and 6 point angles"],"Each of the four walls meets its neighbours (4) and the floor (4), and each corner joins three surfaces (4 point angles). The 11 and 6 pattern describes a two-surface Class II preparation."]
 ]
};

window.CONTENT["m15-n02"] = {
 understand: `
 <p><b>Amalgam is packed in soft, sets brittle and does not bond.</b> The materials node gave the reasons. Here they become rules, because a preparation for amalgam must supply its own retention and protect a material that is strong only in compression.</p>
 <p><b>Preparation design</b></p>
 <ul>
 <li><b>Depth:</b> pulpal floor about 1.5 to 2 mm, just into dentine, giving the bulk that resists fracture.</li>
 <li><b>Width:</b> an isthmus as narrow as the lesion and instruments allow, which keeps cusps strong.</li>
 <li><b>Walls:</b> facial and lingual walls converge occlusally. That convergence is the retention.</li>
 <li><b>Margin:</b> a roughly 90 degree cavosurface on the occlusal surface with no bevel, since a thin edge of amalgam chips.</li>
 <li><b>Proximal box:</b> facial, lingual and gingival walls just clear the contact with the neighbour, and the facial and lingual walls converge occlusally; a flat gingival floor; unsupported rods trimmed from the gingival margin; grooves in the axiofacial and axiolingual line angles add retention in large boxes.</li>
 <li><b>Axiopulpal line angle:</b> rounded. A sharp angle notches the isthmus, the classic site of fracture.</li>
 </ul>
 <p><b>Matrix and contact.</b> A Class II has lost a wall, so a metal band (Tofflemire) replaces it. A <b>wedge</b> does two jobs: it presses the band to the gingival margin to prevent an <b>overhang</b>, and it separates the teeth slightly so that once the band is removed the contact closes against the neighbour. The band is burnished to the adjacent tooth for a contact in the correct position. An overhang holds plaque and harms the periodontium. An open contact traps food. Firm condensation also helps to close the contact.</p>
 <p><b>Placement.</b> Condense straight after trituration, box first, in small increments, and overfill. Carve back to the anatomy with the instrument resting on enamel. Remove the wedge and band carefully, because the fresh marginal ridge is fragile. Match the ridge to the neighbour's height, since a high ridge fractures. Check occlusion, then polish at a later visit, at least 24 hours on, once the material has gained strength. Keep the field dry: a contaminated zinc-containing alloy expands days later.</p>
 <p><b>Common failures</b> trace to these steps: secondary caries at the gingival margin, isthmus fracture from thin bulk or a sharp angle, cusp fracture from an unprotected wide preparation, and tenderness on biting from a high restoration. A small defect in a sound restoration is repaired or refurbished, not replaced, under minimal intervention.</p>
 <p><b>Lichenoid contact reaction.</b> A red or white striated lesion on the buccal mucosa or lateral tongue that <b>touches</b> an amalgam suggests a type IV reaction to mercury or corrosion products. The clue is topography: unilateral and in contact, whereas oral lichen planus is usually bilateral and symmetrical and not tied to a restoration. Replacing that restoration with a non-amalgam material usually brings improvement, even when patch tests are negative. Biopsy any atypical, ulcerated or indurated lesion, and review after replacement; persisting lesions are managed as lichen planus. This is a health indication for removal, unlike removing sound fillings for vague worries, which Health Canada advises against.</p>
 <p><b>Why the exam cares.</b> Stems give a failure and ask for the error: a fractured isthmus, an overhang, an open contact, pain on biting, or a white patch against a filling. Each points to a single step above.</p>`,
 connect: [
  {to:"m08-n05", why:"The brittleness, creep, zinc expansion and mercury rules applied here are explained by the alloy phases in that node."},
  {to:"m10-n01", why:"A white striated lesion against an amalgam must be separated from lichen planus and other white lesions; topography decides."},
  {to:"m10-n04", why:"Amalgam particles driven into soft tissue during placement or removal cause the amalgam tattoo, the commonest focal oral pigmentation."},
  {to:"m19-n02", why:"An overhanging amalgam margin is a local plaque-retentive factor that drives periodontal breakdown at that site."},
  {to:"m15-n01", why:"Convergent walls, flat floors and rounded angles are the general retention and resistance rules made specific for a non-adhesive material."}
 ],
 apply: {
  vignette: "A 52-year-old complains of a sore patch on the left buccal mucosa. Examination shows a white striated lesion with mild erythema directly against a large amalgam on 3.6. The right buccal mucosa, tongue and gingivae are normal, and the lesion is not ulcerated or indurated. The most appropriate management is to:",
  options: ["Replace the 3.6 amalgam with a non-amalgam restoration and review","Replace all amalgam restorations in the mouth at one visit","Excise the lesion widely and refer for radiotherapy planning","Prescribe a systemic corticosteroid and leave the amalgam in place"],
  answer: "Replace the 3.6 amalgam with a non-amalgam restoration and review",
  steps: [
   "The ask: management of a lesion, so first name it. Unilateral, striated and touching an amalgam means a lichenoid contact reaction until shown otherwise.",
   "Facts that matter: no bilateral pattern, nothing else in the mouth, no ulceration or induration, one restoration in contact.",
   "Cross out replacing all amalgams: only the restoration in contact is implicated, and needless removal adds exposure and tooth loss.",
   "Cross out wide excision: nothing here suggests malignancy. If doubt arises, an incisional biopsy comes first, not wide excision.",
   "Cross out systemic steroid: it treats the reaction but leaves the cause touching the mucosa, and carries systemic risk for a local problem.",
   "The survivor: removing the local trigger usually brings improvement, and review checks that it did. A persisting lesion gets a biopsy and is managed as lichen planus."
  ]
 },
 teach: {
  prompt: "From the single fact that amalgam is brittle, non-adhesive and placed under pressure, rebuild the design of a Class II preparation and explain the jobs of the wedge.",
  model: "Because amalgam does not bond, retention must be geometric, so walls converge occlusally and large boxes get grooves in dentine. Because it is brittle and weak in tension, it needs bulk, a flat floor, a rounded axiopulpal angle so the isthmus has no stress notch, and a 90 degree occlusal margin with no thin edge. The missing wall is replaced by a band, which needs a wedge to seal the gingival margin and prevent an overhang. The wedge also separates the teeth to take up the band's thickness, so the contact closes once the band comes off."
 },
 cards: [
  ["Occlusal margin for amalgam","About 90 degrees, no bevel: thin amalgam chips"],
  ["Amalgam pulpal floor depth","About 1.5 to 2 mm, just into dentine"],
  ["Two jobs of the wedge","Seal the gingival margin (no overhang); separate the teeth (closes the contact)"],
  ["Where do proximal retention grooves go?","Axiofacial and axiolingual line angles, in dentine, without undermining enamel"],
  ["Classic cause of isthmus fracture","Thin bulk or a sharp axiopulpal line angle"],
  ["Pain on biting the day after an amalgam","High restoration: look for a shiny contact mark and adjust"],
  ["Protrusion and pain on biting about a week later","Delayed expansion: moisture contaminated a zinc-containing alloy"],
  ["When to polish amalgam","A later visit, at least 24 hours after placement"],
  ["Overhang consequence","Plaque retention, local periodontal breakdown, secondary caries"],
  ["Lichenoid contact reaction clue","Unilateral lesion touching the amalgam; type IV reaction; improves after replacing it"],
  ["Lichen planus vs contact reaction","Lichen planus is usually bilateral and symmetrical, and not tied to a restoration"]
 ],
 questions: [
  ["The occlusal cavosurface angle of an amalgam preparation is kept near 90 degrees because:","Amalgam is brittle and thin edges fracture under load",["Amalgam bonds best to enamel rods that are cut at right angles","A bevel would reduce the thermal expansion of the amalgam","Mercury escapes more readily from thin bevelled margins"],"A butt joint gives bulk at the margin of a material weak in tension. Amalgam does not bond to enamel, so bonding cannot be the reason."],
  ["During matrix placement for an MO amalgam on 1.6, the principal functions of the wedge are to:","Adapt the band at the gingival margin and separate the teeth",["Retain the band and shape the occlusal anatomy","Keep the band away from the adjacent tooth surface","Isolate the tooth from saliva and increase visibility"],"The wedge seals the band to prevent an overhang and spreads the teeth to compensate for band thickness. The contact needs the band against the neighbour, not held away from it."],
  ["A Class II amalgam on 2.5 fractures across the isthmus after six months. The most likely preparation error is:","A sharp axiopulpal line angle with shallow isthmus depth",["Excessive occlusal convergence of the facial and lingual walls","Failure to place a bevel on the occlusal cavosurface margin","A gingival floor that was placed flat rather than inclined"],"A thin isthmus over a sharp angle concentrates tensile stress at the weakest section. A bevel would make the margin weaker, and a flat gingival floor is correct."],
  ["A 40-year-old has an MO amalgam on 3.6 and localised bleeding with 6 mm probing at the mesial. A bitewing shows amalgam extending beyond the gingival margin. The most likely cause during placement is:","Poor adaptation of the band at the gingival margin",["Excessive condensation pressure within the proximal box","Delayed expansion from a contaminated zinc alloy","Use of a spherical alloy instead of a lathe-cut alloy"],"An unwedged or poorly adapted band lets amalgam extrude past the margin, forming a plaque-retentive overhang. Delayed expansion raises the restoration occlusally but does not produce a ledge."],
  ["Three weeks after an MOD amalgam on 2.6, a 31-year-old complains of food packing between 2.5 and 2.6. Floss passes with no resistance. The most likely cause is:","The band was not burnished to the adjacent tooth surface",["The occlusal anatomy was carved too deeply into the fossa","The alloy used contained more copper than was needed","The pulpal floor was placed too close to the pulp"],"An open contact results when the band is not burnished to the neighbour and the wedge does not separate enough. Carving depth affects the occlusion, not the proximal contact."],
  ["The day after an MO amalgam on 4.6, a 28-year-old has sharp pain when biting. A small shiny facet is visible on the new restoration. The most appropriate step is to:","Adjust the occlusion with articulating paper",["Replace the restoration with a bonded composite","Start root canal treatment on the 4.6","Reassure the patient and review in six months"],"A bright facet the next day means a high spot; adjusting it removes the load. Replacement or endodontic treatment is not justified with this history, and waiting risks fracture."],
  ["An amalgam on 1.4 was placed in a wet field with a zinc-containing alloy. About a week later the restoration stands proud and the tooth aches on biting. The best explanation is:","Hydrogen gas formed when zinc reacted with moisture",["Mercury evaporated from the surface of the alloy","The gamma-2 phase crept under the occlusal load","The tooth erupted slowly because of the high contact"],"Zinc reacts with water to release hydrogen inside the mass, giving delayed expansion. Creep is a slow marginal change over years, not an expansion within days."],
  ["Proximal retention grooves in a Class II amalgam preparation are correctly placed:","In the axiofacial and axiolingual line angles, within dentine",["In the pulpal floor beneath the central fossa","In the enamel of the facial and lingual walls","In the gingival floor beneath the contact area"],"Grooves in dentine at those line angles resist proximal displacement without undermining enamel. Enamel is too brittle and thin here to carry a groove."],
  ["Amalgam should not be polished at the same visit it is placed because:","It has not yet gained enough strength to resist the polishing forces",["Polishing causes the gamma-1 phase to convert into gamma-2","The surface must first corrode to form a protective seal","Heat from polishing bonds the restoration to the enamel margin"],"Early amalgam is weak and polishing it too soon damages margins and generates heat. Corrosion is not a preparation step for polishing, and amalgam does not bond under heat."],
  ["A 47-year-old has a 2 cm white reticular lesion on the left buccal mucosa at the level of a large amalgam on 2.6. The contralateral mucosa is normal. Which finding most supports a lichenoid contact reaction rather than oral lichen planus?","The lesion is unilateral and in direct contact with the restoration",["The lesion shows lacy white striae on its surface","The patient reports mild soreness when eating spicy food","The lesion has a band of lymphocytes in the lamina propria"],"Contact and unilaterality are what separate the two, because striae, soreness and band-like infiltrate occur in both conditions. Histology alone cannot reliably distinguish them."],
  ["A 33-year-old man needs a Class II restoration on 3.7. The gingival margin is subgingival, rubber dam cannot be placed and occlusal load is heavy. Which material is most appropriate, given these conditions?","High-copper amalgam",["Microfilled resin composite","Conventional glass ionomer","Feldspathic ceramic inlay"],"Amalgam does not rely on adhesion and tolerates load, so it suits a site where isolation fails. Composite needs a dry field and glass ionomer wears and fractures under heavy load on a large occlusal surface."],
  ["A 55-year-old has a 15-year-old MOD amalgam on 1.7 with one small marginal ditch, no caries and no symptoms. The most appropriate management is to:","Repair or refurbish the margin and monitor the restoration",["Replace it with a composite at the next convenient visit","Place a full-coverage crown to protect the entire tooth","Remove it because older amalgam releases dangerous mercury"],"A sound restoration with a small defect is best repaired, since replacement enlarges the preparation. Old amalgam releases little mercury, and removal is itself the larger exposure."],
  ["When removing an old amalgam from 3.6, which precaution most reduces mercury vapour exposure for the patient and dental team?","Water spray with high-volume suction, sectioning the restoration",["A slow-speed bur used dry with low-volume suction","Asking the patient to breathe through the mouth","Warming the restoration to soften it before cutting"],"Water cooling and high-volume evacuation control heat and capture vapour and particles, and sectioning reduces cutting time. Dry cutting or heating raises mercury vapour."]
 ]
};

window.CONTENT["m15-n03"] = {
 understand: `
 <p><b>Adhesion changes the geometry.</b> Composite is held by its bond, so the preparation needs no undercuts or extension and no fixed depth. The outline is simply the lesion plus access. Internal angles are rounded, and enamel at the margin is kept wherever possible, because enamel gives the most reliable bond. The materials node explained shrinkage, the C-factor and the hybrid layer. This node is what your hands do about them.</p>
 <p><b>Isolation comes first.</b> Saliva, blood and crevicular fluid fill etched pores and break the bond, so a composite is only as good as its dry field. <b>Rubber dam</b> gives the best control, and also protects the airway and retracts soft tissue. The clamp usually sits on a tooth distal to the one treated. Use a non-latex dam for latex allergy. If etched enamel becomes contaminated before bonding, rinse, dry and re-etch briefly. If the field cannot be kept dry, change the material rather than hope.</p>
 <p><b>Steps.</b> Etch (or self-etch, adding selective enamel etching), prime, bond, air-thin, light-cure, then build in layers.</p>
 <p><b>Layering manages shrinkage.</b> Place oblique increments of 2 mm or less, so each is fully cured and touches fewer opposing walls. In a Class II, build the proximal wall first, turning the cavity into a Class I, then add dentine and enamel layers with the final anatomy already shaped so little finishing is needed. Bulk-fill materials are marketed to cure 4 to 5 mm at once, but depth of cure varies by product, so stay within the maker's limits. A final cure through glycerine gel reduces the oxygen-inhibited layer.</p>
 <p><b>Matrix and contact.</b> Amalgam is condensed hard enough to push a band toward the neighbour. Composite is a paste that cannot do this, so an open contact is the classic failure. The contact must be created before placement: a <b>sectional matrix</b> with a <b>separating ring</b> and wedge gives the separation and anatomic curve that a straight circumferential band struggles to give. Anterior teeth use a clear strip, which lets the curing light through.</p>
 <p><b>Class-specific points.</b></p>
 <ul>
 <li><b>Class III:</b> enter from the palatal side when possible, keeping facial enamel for appearance.</li>
 <li><b>Class IV:</b> a long enamel bevel increases bonding area and blends the join. A palatal silicone key guides the shape.</li>
 <li><b>Class V:</b> retract the gingiva, and expect the weakest bond at the cervical dentine or cementum margin. Bevels on occlusal margins of posterior teeth are not routine.</li>
 </ul>
 <p><b>Choice and failure.</b> In trials, posterior composites fail about twice as often as amalgam, with more secondary caries (Cochrane 2021, low-certainty evidence). So they suit a cooperative patient, a dry field and moderate risk, and they trade some longevity for tooth conservation and no mercury. Post-operative sensitivity points to an over-dried or poorly sealed dentine, a high restoration or under-cure. A chip or marginal defect is repaired after roughening and re-bonding, not replaced.</p>
 <p><b>Why the exam cares.</b> Stems describe an open contact, a contaminated field, a sensitive new filling or a site that cannot be isolated, and ask for the technique error or the better material.</p>`,
 connect: [
  {to:"m08-n04", why:"Isolation, increments and matrix choice are direct responses to the shrinkage, C-factor and bonding chemistry described there."},
  {to:"m06-n02", why:"Bevels and selective enamel etching exist because rods cut across their ends etch better and enamel gives the most reliable bond."},
  {to:"m13-n03", why:"Rubber dam and gloves are a latex exposure, so a history of latex allergy changes the materials used and connects to anaphylaxis management."},
  {to:"m19-n01", why:"Subgingival proximal margins threaten the supracrestal attachment and also make isolation impossible, which changes the restorative plan."},
  {to:"m15-n01", why:"Composite shows the minimal intervention idea at its purest: the lesion sets the outline and adhesion replaces mechanical retention."}
 ],
 apply: {
  vignette: "A 28-year-old returns two weeks after an MO composite on 2.6, complaining of food packing between 2.5 and 2.6. Floss passes with no resistance. The restoration was placed under rubber dam with a straight circumferential metal band and no wedge separation before bonding. Which change would most likely have prevented this problem?",
  options: ["A sectional matrix with a separating ring and wedge","A thicker circumferential band placed without any wedge","Firmer condensation of the composite against the band","A longer light-curing time for the first increment"],
  answer: "A sectional matrix with a separating ring and wedge",
  steps: [
   "The ask: the technique change that prevents an open contact on a Class II composite.",
   "Facts that matter: no resistance to floss, a circumferential band, no separation. The field was isolated, so moisture is not the problem.",
   "Cross out a thicker band: band thickness is exactly what the contact has to overcome, so a thicker band worsens the gap.",
   "Cross out firmer condensation: composite is a paste that flows away from pressure and cannot push a band against the neighbour as amalgam can.",
   "Cross out longer curing: this improves conversion but has no effect on the position of the contact.",
   "The survivor: the ring separates the teeth and the sectional band gives anatomic curvature, so the contact closes when the matrix comes off."
  ]
 },
 teach: {
  prompt: "Explain why closing a proximal contact is harder with composite than with amalgam, and rebuild the sequence you would use on a Class II composite from isolation to the last layer, giving the reason for each step.",
  model: "Amalgam is condensed firmly and can push the band against the neighbour, while composite cannot, so the contact must be created by separation before placement with a sectional matrix, ring and wedge. Rubber dam comes first because contamination fills etched pores and destroys the bond. After etch and adhesive, I build the proximal wall so the contact and marginal ridge are set, which turns the cavity into a Class I. Then I place oblique increments of 2 mm or less, so each cures fully and shrinkage stress stays low. I shape the final layer close to anatomy to minimise finishing, then check occlusion."
 },
 cards: [
  ["First requirement for a bonded restoration","A dry field; rubber dam gives the best control"],
  ["Contaminated etched enamel before bonding","Rinse, dry and re-etch briefly"],
  ["Why Class II composite contacts open","Composite cannot be condensed to push a band"],
  ["How to make a tight Class II composite contact","Sectional matrix, separating ring and wedge"],
  ["Increment size and direction","2 mm or less, oblique"],
  ["First layer in a Class II","The proximal wall; it turns the cavity into a Class I"],
  ["Class III access","Palatal whenever possible, keeps facial enamel"],
  ["Purpose of a long bevel on a Class IV","More etched enamel area and an invisible join"],
  ["How to remove the oxygen-inhibited layer","Final cure through glycerine gel, then finish"],
  ["Composite vs amalgam in posterior teeth","Higher failure and secondary caries with composite; tooth-conserving and mercury-free"],
  ["Repairing a chipped composite","Roughen, clean, bond and add; not routine replacement"]
 ],
 questions: [
  ["During a Class III composite on 2.2, saliva floods etched enamel before the adhesive is applied. The most appropriate step is to:","Rinse, dry and re-etch the enamel briefly",["Dry the surface and apply the adhesive at once","Apply a second adhesive layer over the saliva","Place a calcium hydroxide liner on the enamel"],"Saliva proteins block the microporosities and drying does not remove them, so the etch must be renewed. An extra adhesive layer sits on a contaminated surface and bonds poorly."],
  ["A proximal contact is harder to achieve with composite than with amalgam primarily because composite:","Cannot be condensed to push the matrix band toward the neighbour",["Shrinks toward the curing light rather than toward the bonded wall","Is too translucent to show the contact during placement","Bonds to the matrix band and pulls it away when set"],"Amalgam's condensation pressure helps move the band, but composite flows away from pressure, so separation must be built in. The old idea that composite shrinks toward the light is not the explanation: shrinkage direction depends mainly on where the material is bonded."],
  ["Composite in a deep Class I preparation on 3.6 is placed in oblique 2 mm increments mainly to:","Limit shrinkage stress and ensure each layer cures fully",["Create an oxygen-free surface between each increment","Reduce the time needed for the whole procedure","Increase the C-factor of the overall preparation"],"Thin increments are within depth of cure and touch fewer opposing walls, so they can flow as they shrink. The oxygen-inhibited layer actually forms on each increment and helps layers join."],
  ["A 25-year-old needs a Class III composite on the distal of 1.2 with intact facial enamel. The access is best made from the:","Palatal surface, keeping the facial enamel",["Facial surface, for easier light curing","Incisal edge, for a straight line of entry","Gingival sulcus, to hide the cervical margin"],"Palatal access preserves the visible enamel and lets composite shade blend without a facial outline. Facial access is reserved for lesions that already involve the facial surface."],
  ["A 16-year-old has a fractured mesioincisal angle on 2.1. A long enamel bevel is placed before the composite because it:","Increases etched enamel area and blends the junction",["Provides a mechanical undercut that retains the composite","Removes the aprismatic layer from all of the dentine","Allows a thinner adhesive and shorter curing time"],"A bevel exposes rod ends for a stronger etch and gives a gradual colour transition. It is a bonding and esthetic feature; it is not a mechanical undercut."],
  ["After an etch-and-rinse restoration on 3.5, a 30-year-old has cold sensitivity with a normal occlusion. The dentist recalls drying the dentine to a chalky appearance before priming. The most likely explanation is:","Collapsed collagen preventing a complete hybrid layer",["Excess primer solvent increasing the dentine strength","Fluoride released from the adhesive into the tubules","Thermal expansion of the composite during curing only"],"Over-drying collapses the exposed collagen, so resin cannot infiltrate and open tubules allow fluid movement. High occlusion would be the other common cause, but the stem excludes it."],
  ["A 78-year-old with xerostomia has root caries on the buccal of 3.4 with a subgingival margin. Moisture control is poor and retraction is difficult. Which material is most appropriate?","Glass ionomer cement",["Nanohybrid resin composite","Microfilled resin composite","Bonded ceramic restoration"],"Glass ionomer bonds chemically, tolerates some moisture better than resin and releases fluoride, which suits high-risk root surfaces. Any resin-based option would depend on a dry field that is not available here."],
  ["Compared with amalgam, direct posterior composite in permanent teeth is best described as having:","Higher failure rates, with more secondary caries",["Lower failure rates, with less secondary caries","Equal failure rates, with less fracture","Lower failure rates, with more post-operative pain"],"Systematic review evidence, though low certainty, favours amalgam on longevity and secondary caries. Composite's advantages are tooth conservation, appearance and the absence of mercury."],
  ["A 45-year-old has a small incisal chip on a three-year-old Class IV composite on 1.1. Margins are sound and there is no caries. The most appropriate management is:","Roughen, clean, bond and add new composite",["Replace the whole restoration at the same visit","Polish the chip and apply a fluoride varnish","Prepare the tooth for a full-coverage crown"],"Repair preserves tooth structure and extends service life. Replacing a sound restoration removes more tooth for no gain, and polishing cannot restore the lost contour."],
  ["A 35-year-old reports hives and wheeze after contact with rubber gloves at a previous clinic. For a Class II composite on 4.6 under dam, the most appropriate action is to:","Use a non-latex dam and non-latex gloves",["Use a latex dam with a topical antihistamine beforehand","Abandon isolation and use cotton rolls with latex gloves","Pre-medicate with a corticosteroid and use latex as normal"],"A history suggesting type I latex allergy calls for avoidance of latex in the whole environment. Pre-medication does not make the exposure safe."],
  ["In a Class II composite on 1.5, building the proximal wall first against the matrix is advantageous because it:","Sets the contact early and converts the cavity into a Class I",["Lowers the C-factor to its minimum for the entire restoration","Removes the need to place any further oblique increments","Bonds the matrix to the tooth until the restoration has set"],"Once the wall is built, the band and ring can come off and the rest of the cavity is easier to see, layer and shape. Later layers still use increments, because the Class I that remains has a high C-factor."],
  ["A universal adhesive is used in self-etch mode on 2.4. Part of the margin lies on uncut enamel. The most appropriate modification is to:","Selectively etch the enamel with phosphoric acid",["Apply phosphoric acid to the whole dentine floor for one minute","Use a bevel to convert the enamel margin to dentine","Remove the adhesive solvent before applying the adhesive"],"Mild self-etch adhesives bond poorly to uncut enamel, so a phosphoric acid etch limited to enamel improves the margin. Prolonged etching of dentine is unnecessary and raises sensitivity."],
  ["A final layer of composite is cured through a glycerine gel mainly to:","Reduce the oxygen-inhibited surface layer",["Increase the depth of cure of the restoration","Provide a fluoride reservoir at the margin","Lower the shrinkage stress in deeper layers"],"Oxygen inhibits free-radical polymerisation at the air-exposed surface, and the gel excludes air. It has no influence on deep cure or on stresses already developed below the surface."]
 ]
};

window.CONTENT["m15-n04"] = {
 understand: `
 <p><b>Deep caries forces a trade: chase every soft layer and risk opening the pulp, or leave some behind and trust the seal.</b> Evidence favours the seal. Cut off from sugar, bacteria under a tight restoration decline and the lesion arrests. The reason for removing caries today is to create a sealable, durable restoration. All this assumes a vital pulp with no symptoms or only reversible pulpitis; lingering or spontaneous pain leads to endodontic diagnosis first.</p>
 <p>The ICCC (2016) judges by <b>hardness</b>. <b>Soft</b> scoops away easily; <b>leathery</b> does not deform under an instrument but still lifts away without much force; <b>firm</b> resists an excavator; <b>hard</b> needs a bur and feels scratchy.</p>
 <div class="tscroll"><table>
 <tr><th>Strategy</th><th>Left over pulp</th><th>Use</th></tr>
 <tr><td>Selective to firm</td><td>Leathery or firm</td><td>Shallow or moderately deep lesions</td></tr>
 <tr><td>Selective to soft</td><td>Soft</td><td>Deep lesions (inner third or quarter on radiograph); one visit</td></tr>
 <tr><td>Stepwise</td><td>Soft, then re-entry at 6-12 months to firm</td><td>Option for deep lesions in permanent teeth</td></tr>
 <tr><td>Non-selective</td><td>Hard only</td><td>No longer recommended: overtreatment</td></tr>
 </table></div>
 <p>The <b>periphery is always hard</b>, because that is where the seal lives. Stepwise adds a second exposure risk and depends on patient return. In a multicentre trial it gave about 11 percentage points fewer exposures than direct complete excavation (Bjørndal 2010). ESE 2019 calls a lesion <b>deep</b> if it reaches the inner quarter with a rim of hard or firm dentine, and <b>extremely deep</b> if it crosses the whole dentine, when exposure should be anticipated. The EFCD-ESE-ORCA guideline (2026) suggests selective or stepwise over non-selective removal. The AAE (2021) instead favours complete removal, so that the pulp can be inspected and managed by vital pulp therapy if it exposes. This module follows the ICCC and European guidance, which match the ICCMS approach: with a vital pulp and no irreversible symptoms, keep the pulp closed.</p>
 <p><b>Liners.</b> Remaining dentine thickness and the quality of the seal matter more than the liner material. ESE 2019 recommended a calcium silicate or glass ionomer over deep dentine when the pulp is not exposed, but the 2026 guideline found no consistent benefit from liners and suggests not using them routinely. An insulating base still has logic under thermally conductive amalgam.</p>
 <p><b>Pulp response to materials</b></p>
 <ul>
 <li><b>Zinc phosphate:</b> very acidic when freshly mixed, so it can hurt through thin dentine, and it approaches neutral over the next day or two.</li>
 <li><b>ZOE:</b> eugenol through dentine soothes; in direct contact it is cytotoxic. Never on an exposure.</li>
 <li><b>Calcium hydroxide:</b> pH about 12.5 causes surface necrosis, then a bridge that often has tunnel defects. It dissolves over time.</li>
 <li><b>MTA and other hydraulic calcium silicates:</b> also release calcium hydroxide, but give a thicker bridge, less inflammation and a better seal. Preferred for capping and pulpotomy.</li>
 <li><b>Adhesives and resin-modified glass ionomer:</b> HEMA and unset monomer irritate, so not directly on pulp.</li>
 </ul>
 <p><b>If the pulp is exposed.</b> Under rubber dam, control bleeding with a sodium hypochlorite pellet; protocols allow a few minutes, up to about 5 to 10. Then cap with a calcium silicate cement and seal immediately. Bleeding that will not stop means inflamed pulp: move to partial or full pulpotomy, or root canal treatment.</p>
 <p><b>Why the exam cares.</b> Items give lesion depth and symptoms, then ask how far to remove, what to place, and what to do when bleeding will not stop.</p>`,
 connect: [
  {to:"m06-n03", why:"Tubule density near the pulp and the difference between reactionary and reparative dentine explain why seal and remaining dentine govern the pulp's fate."},
  {to:"m08-n06", why:"The setting chemistry of zinc phosphate, ZOE, calcium hydroxide and MTA described there predicts the pulp responses used here."},
  {to:"m20-n01", why:"Selective removal is for vital pulps with no symptoms or reversible pulpitis, so the AAE diagnosis decides whether this path applies."},
  {to:"m20-n07", why:"Exposure leads to direct capping or pulpotomy, whose technique, material and follow-up are developed in vital pulp therapy."},
  {to:"m23-n03", why:"In primary teeth selective removal to soft dentine replaces stepwise removal, and pulp therapy choices differ from permanent teeth."}
 ],
 apply: {
  vignette: "A 23-year-old has a deep occlusal lesion on 4.6. A bitewing shows radiolucency reaching the inner quarter of the dentine with a visible rim of dentine over the pulp. Cold produces a sharp pain that stops within seconds; there is no spontaneous pain and no periapical change. The most appropriate caries removal strategy is:",
  options: ["Selective removal to soft dentine with a hard periphery, then a definitive restoration","Non-selective removal to hard dentine, then a direct pulp cap if the pulp exposes","Selective removal to firm dentine over the pulp, then a direct composite restoration","Root canal treatment now, because the lesion has reached the inner quarter of dentine"],
  answer: "Selective removal to soft dentine with a hard periphery, then a definitive restoration",
  steps: [
   "The ask: how far to remove in a deep lesion with a vital pulp.",
   "Facts that matter: inner quarter with a dentine rim, so deep by ICCC and ESE definitions; brief cold pain, so reversible pulpitis at most; no periapical change.",
   "Cross out non-selective removal: it is the outdated option and is the one most likely to expose a pulp that could have been kept closed.",
   "Cross out selective to firm: that is the right endpoint for shallow or moderately deep lesions, but in a deep lesion it carries a higher exposure risk.",
   "Cross out root canal treatment: depth alone is not a diagnosis, and this pulp is vital with reversible symptoms.",
   "The survivor: leave soft dentine over the pulp to avoid exposure and take the periphery to hard dentine so a tight, durable restoration can seal the lesion."
  ]
 },
 teach: {
  prompt: "A patient asks: 'You left decay in my tooth?' Explain why this is sound, what must be true of the rest of the cavity, and when you would not do it.",
  model: "The aim is a healthy pulp and a lasting seal, not sterile dentine. Bacteria left under a tight seal lose their sugar supply and decline, and the lesion stops progressing. Removing that last soft layer is the step most likely to open the pulp. That only works if the margins of the cavity are taken to hard dentine so the restoration can seal. I would not do this if the pulp had lingering or spontaneous pain, or if the tooth had a periapical lesion, because then the pulp needs endodontic care, not a seal."
 },
 cards: [
  ["ICCC dentine hardness terms","Soft, leathery, firm, hard"],
  ["Shallow or moderately deep lesion: endpoint","Selective removal to firm dentine, hard periphery"],
  ["Deep lesion: endpoint","Selective removal to soft dentine, hard periphery; stepwise is an option in permanent teeth"],
  ["ICCC radiographic definition of deep","Extends into the inner (pulpal) third or quarter of dentine"],
  ["ESE extremely deep caries","Through the whole dentine with no barrier; exposure should be anticipated"],
  ["Stepwise re-entry interval","6 to 12 months; the provisional must last that long"],
  ["Non-selective removal status","Formerly complete removal; no longer recommended"],
  ["Preferred pulp capping material","Hydraulic calcium silicate (MTA type), over calcium hydroxide"],
  ["Weakness of a calcium hydroxide bridge","Tunnel defects, and the material dissolves over time"],
  ["Why ZOE never goes on an exposure","Eugenol in direct contact is cytotoxic"],
  ["Bleeding will not stop after NaOCl","Pulp is too inflamed: pulpotomy or root canal treatment"],
  ["Routine liner after selective removal","Not routinely suggested; seal and dentine thickness matter more"]
 ],
 questions: [
  ["For a moderately deep cavitated lesion in a vital permanent tooth, the ICCC recommended endpoint over the pulpal wall is:","Firm dentine, with a hard dentine periphery",["Soft dentine, with a soft dentine periphery","Hard dentine, with a firm dentine periphery","Leathery dentine, with a soft dentine periphery"],"Selective removal to firm dentine balances restoration longevity with pulp safety when the pulp is not at close risk. A periphery must always be hard so that a seal can be achieved."],
  ["ICCC guidance for a deep lesion extending into the inner third or quarter of dentine on 3.6, with a vital asymptomatic pulp, is:","Selective removal to soft dentine",["Non-selective removal to hard dentine","Elective root canal treatment before restoring","Fluoride varnish without any restoration"],"Preserving the pulp takes priority in deep lesions, so soft dentine is left over the pulp. Non-selective removal is no longer recommended because it raises the exposure risk."],
  ["In selective removal of a deep lesion, peripheral dentine and enamel are taken to hard tissue because:","The margin must allow a tight seal and durable restoration",["The pulp cannot produce tertiary dentine beneath soft margins","Bacteria in peripheral dentine are more virulent than central ones","Hard margins are needed to release fluoride from the restoration"],"Seal is the mechanism behind selective removal: it starves residual bacteria and protects the pulp. The periphery provides that seal and bonding surface, which is why it is treated differently."],
  ["Which of the following best explains why bacteria left under a well-sealed restoration usually do not cause lesion progression?","They lose access to dietary carbohydrate, and their numbers and activity fall",["The restorative material kills all of them within minutes of placement","Salivary antibodies diffuse through the restoration to neutralise them","The pulp secretes acids that dissolve the residual biofilm bacteria"],"The cariogenic ecosystem depends on repeated sugar supply from the mouth, and a seal removes that supply. Materials have limited antibacterial reach, which is why the seal and not the material is decisive."],
  ["In stepwise removal of a deep lesion on 4.7, re-entry is typically planned after about:","6 to 12 months",["1 to 2 weeks","24 to 36 months","5 to 7 years"],"The interval gives time for tertiary dentine and lesion arrest, so the provisional restoration has to be durable. Two weeks is too short to allow these changes."],
  ["A 36-year-old with a deep lesion on 1.6 often misses appointments and travels for months at a time. Compared with stepwise removal, one-stage selective removal to soft dentine is preferred here chiefly because it:","Avoids reliance on a return visit and avoids re-entry exposure risk",["Removes more infected dentine than a stepwise procedure can achieve","Needs no peripheral caries removal and no local anaesthesia at all","Produces a thicker tertiary dentine bridge within the first month"],"Stepwise needs the patient to return, and the second entry itself carries an exposure risk. Peripheral dentine still has to be hard in one-stage removal."],
  ["A 44-year-old has a deep lesion on 3.6 with spontaneous night pain and cold pain lingering for minutes. The most appropriate statement is that:","The pulp needs endodontic management, such as pulpotomy or root canal treatment",["Selective removal to soft dentine under a composite is the treatment of choice","A sedative ZOE dressing will reverse the pulpal inflammation permanently","Antibiotics should be prescribed before any operative treatment is considered"],"These are symptoms of irreversible pulpitis, and sealing in the lesion will not resolve them. Antibiotics do not treat pulpitis, and selective removal assumes a vital pulp without such symptoms."],
  ["The material with the strongest current support for direct pulp capping of a mechanical exposure on 2.6 is:","A hydraulic calcium silicate cement",["A hard-setting calcium hydroxide liner","A resin-modified glass ionomer liner","A zinc oxide eugenol sedative cement"],"Calcium silicates give a thicker, more complete bridge with less inflammation than calcium hydroxide. Calcium hydroxide is the older standard, but it dissolves and its bridges have tunnel defects."],
  ["The dentine bridge formed under calcium hydroxide is often less protective than expected because:","Tunnel defects persist through it and the liner dissolves over time",["Its high pH prevents any odontoblast-like cells from forming there","It forms only in teeth with open apices and never in mature teeth","It bonds to composite and is pulled off by polymerisation shrinkage"],"Porous bridges can admit bacteria, particularly if the overlying restoration leaks. High pH causes a superficial necrosis, and it is beneath this layer that new cells form the bridge."],
  ["ZOE is contraindicated as a direct pulp cap because:","Eugenol at direct contact concentrations is toxic to pulp cells",["It cannot set in the presence of any moisture or blood","It releases fluoride that causes pulp necrosis at the exposure","Its pH is too high and it dissolves the dentine bridge"],"Through intact dentine eugenol reaches the pulp at low, soothing doses; applied directly its concentration is high and it is cytotoxic. Its setting chemistry actually tolerates moisture."],
  ["A 29-year-old has a crown cemented on 1.4 with zinc phosphate over thin remaining dentine and feels a sharp ache during setting. The most likely cause is:","The low pH of the freshly mixed cement",["The eugenol content of the cement","The fluoride released by the cement","The thermal contraction of the cement"],"Freshly mixed zinc phosphate is strongly acidic and thin dentine is highly permeable, so the pulp responds. Zinc phosphate contains no eugenol; that is ZOE."],
  ["After a pinpoint carious exposure on 4.6 under rubber dam, bleeding is still uncontrolled after 10 minutes with a sodium hypochlorite pellet. The most appropriate next step is:","Partial or full pulpotomy, or root canal treatment",["Applying more calcium hydroxide to the bleeding pulp","Placing a composite restoration directly over the bleeding site","Sealing a ZOE pellet and reviewing the tooth in one year"],"Persistent bleeding indicates inflamed tissue at the exposure, so inflamed pulp is removed down to healthy tissue. Capping or sealing over active bleeding predicts failure."],
  ["A 34-year-old has a deep lesion on 3.7 treated by selective removal under a bonded composite. No exposure occurred. Current guideline evidence on placing a liner in this situation is best summarised as:","Routine liner use has shown no consistent clinical benefit",["A calcium hydroxide liner is mandatory beneath all composites","A zinc phosphate base is required to prevent any microleakage","An amalgam base is required to insulate the floor of the cavity"],"The 2026 EFCD-ESE-ORCA guideline suggests not lining routinely, because seal and remaining dentine matter more. The older mandatory-liner teaching has not been supported by trials."],
  ["A cooperative 6-year-old has a deep lesion on 7.5 with no symptoms and a vital pulp. The ICCC-recommended approach is:","Selective removal to soft dentine in one visit",["Stepwise removal with re-entry at twelve months","Non-selective removal to hard dentine under dam","Extraction and placement of a space maintainer"],"Primary teeth have a limited life span, and the second stage adds exposure risk and discomfort for little gain. Extraction would cause avoidable space loss when the pulp is healthy."]
 ]
};

window.CONTENT["m15-n05"] = {
 understand: `
 <p><b>An indirect restoration is made outside the mouth and then cemented in.</b> That solves problems a direct filling struggles with on large defects: contour, contact and occlusion can be perfected on a model, and resin shrinkage happens before the piece reaches the tooth, leaving only a thin cement layer to shrink. The price is more visits, more cost, a laboratory or scanner step, and a preparation that must have no undercuts.</p>
 <p><b>Inlay or onlay?</b> An <b>inlay</b> sits between the cusps and can wedge them apart. An <b>onlay</b> covers one or more cusps, so load compresses the tooth instead of splitting it. Choose an onlay when the isthmus is wide, cusps are thin or undermined, or a cusp has cracked. These are the same cusp-capping rules used for direct work.</p>
 <p><b>Preparation follows the material.</b></p>
 <div class="tscroll"><table>
 <tr><th></th><th>Cast gold</th><th>Bonded ceramic</th></tr>
 <tr><td>Walls</td><td>Slight occlusal divergence, about 2-5 degrees per wall</td><td>Greater divergence, rounded angles</td></tr>
 <tr><td>Margin</td><td>Bevel, so the thin gold edge can be burnished</td><td>Butt joint, no bevel: thin ceramic chips</td></tr>
 <tr><td>Cusp reduction</td><td>About 1.5 mm functional, 1 mm non-functional</td><td>About 1.5-2 mm, for ceramic strength</td></tr>
 <tr><td>Cement</td><td>Conventional or resin</td><td>Resin, after HF etch and silane</td></tr>
 <tr><td>Strength from</td><td>The metal itself</td><td>The bond to tooth</td></tr>
 </table></div>
 <p>Undercuts from removed caries are <b>blocked out</b> with glass ionomer or composite, not cut away, which saves tooth. <b>Immediate dentine sealing</b> (Magne) bonds adhesive to fresh dentine at the preparation visit, before contamination, to improve bond and reduce sensitivity. Provisionals should be eugenol-free when a resin cement will follow. Gold remains the kindest to opposing enamel and needs the least tooth reduction, and it suits a bruxist's second molar if appearance is no concern.</p>
 <p><b>Veneers</b> are thin shells bonded to the facial surface. The bond to enamel makes a weak ceramic and a tooth act as one stiff unit, restoring the behaviour of the original crown (Magne's biomimetic principle). So keeping the preparation in <b>enamel</b> is the central rule: about 0.3 to 0.5 mm cervically, 0.5 to 0.7 mm mid-facially, because cervical enamel is thinnest. Large dentine exposure predicts debonding and leakage. A diagnostic wax-up and mock-up guide reduction from the final tooth form, not the existing tooth, which often avoids cutting at all.</p>
 <ul>
 <li><b>Indications:</b> discolouration unresponsive to bleaching, diastema closure, peg-shaped laterals, minor malposition or fractures, enamel defects.</li>
 <li><b>Cautions:</b> heavy bruxism or an edge-to-edge bite, little remaining enamel, severe crowding, active caries or poor hygiene, extensive existing restorations.</li>
 <li><b>Conservative first:</b> bleach, microabrasion or direct composite where they would meet the goal.</li>
 </ul>
 <p><b>Cementation.</b> Thin veneers transmit light, so light-cured resin cement gives working time and colour stability. Thick onlays block light, so a dual-cure resin cement is the usual choice. Glass ceramic is etched with hydrofluoric acid and silanated; zirconia cannot be etched this way and is a poor veneer choice.</p>
 <p><b>Why the exam cares.</b> Expect items on onlay versus inlay, bevel versus butt joint, why enamel matters under a veneer, when veneers are unwise, and which cement cures through which thickness.</p>`,
 connect: [
  {to:"m08-n08", why:"The ceramic strength and translucency trade-off and alloy behaviour decide which indirect material suits each preparation."},
  {to:"m08-n06", why:"Bonding an inlay, onlay or veneer depends on matching the cement to the material and its surface treatment."},
  {to:"m08-n07", why:"An indirect restoration can fit only as well as the impression and die allow."},
  {to:"m16-n01", why:"Onlays are partial crowns: taper, reduction and path of withdrawal carry over directly to full-crown preparation."},
  {to:"m07-n05", why:"Functional cusps, guidance and parafunction determine reduction depth and whether a veneer or onlay will survive."}
 ],
 apply: {
  vignette: "A 41-year-old has lost the disto-lingual cusp of 3.6 next to a large old amalgam. The patient requests a tooth-coloured restoration, moisture control is good and most margins are in enamel. An adhesive lithium disilicate onlay is planned. The most appropriate preparation design includes:",
  options: ["Butt-joint margins, rounded angles and adequate occlusal ceramic thickness","Long bevels at all margins with sharp internal line angles","Parallel walls with undercuts that lock the ceramic in place","Thin feather-edge cusp coverage to conserve as much tooth as possible"],
  answer: "Butt-joint margins, rounded angles and adequate occlusal ceramic thickness",
  steps: [
   "The ask: preparation features for a bonded ceramic, a material strong in compression and weak in tension, supported by its bond.",
   "Facts that matter: lost cusp means coverage; good isolation means bonding is reliable; ceramic means thin edges chip.",
   "Cross out long bevels with sharp angles: bevels suit gold and direct composite, thin ceramic chips, and sharp angles concentrate stress.",
   "Cross out undercuts: a restoration made outside the mouth cannot seat past them. Divergent walls and adhesion do the work.",
   "Cross out feather-edge coverage: thin ceramic fractures, so the cusps need enough reduction for ceramic thickness.",
   "The survivor: butt joints and rounded angles avoid stress points, and adequate thickness lets the bonded ceramic carry load."
  ]
 },
 teach: {
  prompt: "Explain why gold inlays are prepared with bevelled margins but ceramic ones are not, and why a veneer preparation tries to stay in enamel, using only the properties of the materials.",
  model: "Gold is ductile and strong as a thin edge, so a bevel gives a fine margin that can be burnished against the tooth and closes with cement. Ceramic is brittle and weak in tension, so a thin bevelled edge would chip, and it needs a butt joint and bulk. A veneer is too thin to be strong itself and gains its strength from the bond. Enamel gives a stiff surface and the most reliable bond, so the ceramic and tooth act as one unit. On dentine, the bond is weaker and the substrate more flexible, so debonding and cracks are more likely."
 },
 cards: [
  ["Inlay vs onlay","Inlay stays between the cusps; onlay covers at least one cusp"],
  ["Why indirect restorations reduce shrinkage stress","Polymerisation occurs outside the mouth; only a thin cement layer shrinks"],
  ["Margin for gold vs ceramic","Gold: bevel; ceramic: butt joint"],
  ["Undercuts in an inlay preparation","Blocked out with glass ionomer or composite, not cut away"],
  ["Immediate dentine sealing","Bonding fresh dentine at the preparation visit, before impression and provisional"],
  ["Veneer preparation depth (cervical to mid-facial)","About 0.3-0.5 mm cervically, 0.5-0.7 mm mid-facially, staying in enamel"],
  ["Main risk of large dentine exposure in a veneer preparation","Debonding and leakage"],
  ["Veneer indications","Stubborn discolouration, diastema, peg laterals, minor malposition, enamel defects"],
  ["Veneer cautions","Bruxism, edge-to-edge bite, little enamel, caries, heavy existing restorations"],
  ["Veneer cement","Light-cured resin: long working time, colour stable"],
  ["Thick ceramic onlay cement","Dual-cure resin, because light does not pass through"],
  ["Glass ceramic surface treatment","Hydrofluoric acid etch, then silane"]
 ],
 questions: [
  ["The principal mechanical advantage of an onlay over an inlay on a tooth with thin cusps is that the onlay:","Loads cusps in compression instead of wedging them apart",["Provides greater retention through a deeper pulpal floor","Eliminates the need for any cement at the margins","Requires a smaller preparation than a conservative inlay"],"Covering a cusp changes how force reaches it, so it no longer acts as a cantilever. Coverage is about resistance to fracture; retention is not its main aim."],
  ["A cast gold inlay preparation has bevelled margins mainly because:","The thin gold edge can be burnished to close the margin",["Gold bonds chemically to the bevelled enamel surface","A bevel prevents the casting from corroding in saliva","The bevel allows a much thicker cement line at the margin"],"Gold is ductile, so a thin bevelled margin adapts and closes. Gold does not bond to enamel, and a thick cement line would be a defect, not an aim."],
  ["A 37-year-old has a ceramic onlay planned for 2.6. Ceramic margins are best prepared as butt joints because:","Thin ceramic edges fracture under stress",["Butt joints reduce the need for occlusal reduction","Bevels cannot be scanned or captured in impressions","Resin cement does not bond to a bevelled surface"],"Ceramic is brittle, so a bevel leaves a fragile edge. Bevels can be recorded by impressions; the problem lies in the strength of the ceramic."],
  ["After caries removal for a ceramic inlay on 1.7, an undercut remains in the axial wall. The most appropriate management is to:","Block out the undercut with composite or glass ionomer",["Cut the wall back until the undercut disappears","Leave it, since resin cement will flow into it","Make the ceramic with a matching undercut extension"],"Blocking out preserves tooth while giving a path of withdrawal. Cutting it away sacrifices sound tooth, and a ceramic piece could not seat past an undercut."],
  ["A dentist applies dentine adhesive to freshly cut dentine before making the impression for a ceramic onlay. This technique is intended primarily to:","Bond fresh uncontaminated dentine and reduce sensitivity",["Increase the thermal conductivity of the remaining dentine","Reduce the final wear of the opposing enamel surface","Replace the need for later cementation with a resin"],"Immediate dentine sealing bonds dentine before it is contaminated, improving the later resin bond and reducing sensitivity. The restoration still needs luting."],
  ["The primary rule when preparing a tooth for a porcelain veneer is to:","Keep the preparation within enamel as much as possible",["Extend margins subgingivally around the whole tooth","Remove all contact points to allow easy cementation","Prepare at least 1.5 mm deep across the facial surface"],"Enamel gives the strongest and most predictable bond, which is what supports thin ceramic. A depth of 1.5 mm would go well into dentine, and cervical enamel is thin."],
  ["Which patient is the most suitable candidate for porcelain veneers on 1.2 to 2.2?","A 30-year-old with diastemas, peg laterals and good enamel",["A 45-year-old with severe nocturnal bruxism and edge wear","A 60-year-old with extensive Class IV composites on each tooth","A 22-year-old with multiple active carious lesions present"],"Spaces and form defects with plenty of enamel are classic indications. The others carry fracture risk from bruxism, a poor bonding substrate, or uncontrolled disease that must be treated first."],
  ["A veneer debonds from 1.1 eighteen months after cementation. The preparation exposed much of the mid-facial dentine. Which of the following best explains the failure?","Dentine gives a weaker, less stiff substrate than enamel",["Feldspathic ceramic is too strong to bond to a tooth","Enamel-bonded veneers are known to fail earlier than this","Silane reacts with dentine to cause tooth discolouration"],"Bonding to dentine is less predictable and dentine flexes more than enamel, stressing the thin ceramic. Well-bonded enamel preparations have much better long-term outcomes."],
  ["A thin feldspathic veneer on 2.1 is best luted with a light-cured resin cement rather than a dual-cured one because light-cured cements offer:","Long working time and better colour stability",["Higher bulk strength through thick restorations","A chemical bond to untreated zirconia surfaces","A fluoride release that stops any further caries"],"Light passes through a thin veneer, so a chemical activator is unnecessary, and amine-related colour change is reduced. Thick or opaque restorations are the ones that need dual cure."],
  ["A 3 mm thick lithium disilicate onlay is to be cemented on 3.7. Which luting approach is most appropriate?","A dual-cure resin cement after etching and silane",["A light-cured resin cement with no ceramic surface treatment","A zinc oxide eugenol cement placed as a permanent lute","A polycarboxylate cement placed after sandblasting only"],"Curing light is attenuated by this thickness, so a chemical cure component is needed, and the ceramic must be etched and silanated. Eugenol would also interfere with resin bonding."],
  ["A lithium disilicate restoration is prepared for bonding by:","Etching with hydrofluoric acid and applying silane",["Etching with phosphoric acid and applying a zinc primer","Sandblasting only, with no silane or primer needed","Heating to 200 degrees Celsius before seating"],"Hydrofluoric acid dissolves the glass phase to create surface texture and silane couples it to the resin. Phosphoric acid cleans ceramic but does not etch it."],
  ["A 55-year-old with heavy wear facets on a posterior tooth needs an onlay on 4.7, an area not visible when smiling. Which material choice best protects the opposing enamel?","Polished cast gold alloy",["Rough feldspathic ceramic","Unpolished lithium disilicate","Rough glazed porcelain"],"Gold has wear behaviour close to enamel and is strong in thin section. Rough ceramic surfaces are the most abrasive to opposing enamel."],
  ["A diagnostic wax-up and mock-up are used before a veneer preparation mainly so that the reduction is:","Measured from the planned final tooth form",["Deep enough to reach dentine throughout","Taken uniformly from the existing tooth surface","Completed before the patient sees the result"],"Reducing through the mock-up tells the clinician where tooth really needs cutting, and teeth that are short of the final form may need little or none. The aim is to stay in enamel, not to reach dentine."]
 ]
};

window.CONTENT["m15-n06"] = {
 understand: `
 <p><b>Teeth can lose substance without any bacteria.</b> Non-carious tooth loss comes in four patterns, each named for its cause, and the pattern tells you what to ask about.</p>
 <div class="tscroll"><table>
 <tr><th>Type</th><th>Cause</th><th>Look</th></tr>
 <tr><td><b>Erosion</b></td><td>Acid, not from plaque</td><td>Smooth, silky, rounded; cupped cusp tips; restorations stand proud; often a cervical enamel rim</td></tr>
 <tr><td><b>Attrition</b></td><td>Tooth against tooth</td><td>Flat, shiny facets that match the opposing teeth; restorations wear level</td></tr>
 <tr><td><b>Abrasion</b></td><td>Foreign object, usually a brush</td><td>Cervical V-shaped notches, sharp edges, several adjacent facial surfaces</td></tr>
 <tr><td><b>Abfraction</b></td><td>Proposed: tooth flexure under load</td><td>Sharp wedge at the cervix, often one tooth, may lie below the gingiva</td></tr>
 </table></div>
 <p><b>Erosion tells you the acid source.</b> <b>Intrinsic</b> gastric acid (bulimia, reflux, chronic vomiting) reaches the <b>palatal surfaces of maxillary anterior teeth</b> first; the tongue shields the mandibular lingual surfaces. Enlarged parotids or knuckle scars add to the suspicion, and the patient needs a sensitive conversation and medical referral. <b>Extrinsic</b> acid (soft drinks, citrus, sports drinks, acidic pool water) favours <b>facial surfaces</b> and occlusal cupping. Unlike caries, erosion has no plaque involvement: acid is below the critical pH, so mineral dissolves from a clean surface. Softened enamel then wears faster, so advise gentle brushing with a soft brush and fluoride toothpaste. The old advice to delay brushing after acid has weak and conflicting support.</p>
 <p><b>Abfraction</b> is the contested one. Lee and Eakle and later Grippo proposed that flexing under occlusal load concentrates tensile stress at the cervix and pops out enamel. Evidence for this as a sole cause is weak. Most cervical lesions are multifactorial. On the exam, an isolated sharp wedge on one tooth with neighbours spared points to abfraction; many adjacent notches in a heavy brusher point to abrasion.</p>
 <p><b>Management.</b> Find and remove the cause first, or restoration will fail. Diet advice, treatment of reflux or vomiting, brushing technique and an occlusal splint for parafunction (it protects teeth but does not cure bruxism). Record wear with models or scans to judge activity. Restore for pain, pulp risk, function or appearance, not simply because a lesion exists. Glass ionomer suits cervical lesions, since it bonds chemically and has lower stiffness. Localised anterior wear with no space can use the <b>Dahl concept</b>: bonded anterior build-ups briefly separate posterior teeth, and these re-establish contact by eruption.</p>
 <p><b>Hypersensitivity is exposed dentine with open tubules.</b> Brännström's hydrodynamic theory: cold, air, touch or osmotic stimuli move tubule fluid, which activates A-delta fibres, causing short, sharp pain. It is diagnosed by exclusion, after ruling out caries, a cracked tooth, leaking restoration, recent bleaching or pulpitis.</p>
 <ol>
 <li><b>Remove causes:</b> erosive diet, harsh brushing.</li>
 <li><b>First line, home:</b> desensitising toothpaste twice daily, either nerve-acting (potassium nitrate, which depolarises the nerve and takes weeks) or occluding (stannous fluoride, arginine, bioactive glass).</li>
 <li><b>In-office:</b> fluoride varnish, oxalates, glutaraldehyde-based agents, adhesive resin.</li>
 <li><b>Then:</b> restoration or root coverage graft. Root canal treatment is the last resort.</li>
 </ol>
 <p><b>Why the exam cares.</b> Items describe a surface and a history, then ask the cause. Others ask the first step for sensitive roots: conservative home care.</p>`,
 connect: [
  {to:"m06-n03", why:"Hypersensitivity is the hydrodynamic theory in the clinic; every desensitiser either plugs tubules or quietens A-delta fibres."},
  {to:"m08-n02", why:"Erosion and caries both dissolve mineral below a critical pH, but erosion needs no plaque, which is why its pattern and prevention differ."},
  {to:"m03-n08", why:"Saliva buffers acid and supplies pellicle and mineral, so low flow makes erosion and wear progress much faster."},
  {to:"m21-n08", why:"Attrition from bruxism overlaps with TMD assessment and splint therapy, and neither fully controls the underlying parafunction."},
  {to:"m19-n07", why:"Recession exposes the root dentine that becomes sensitive, and a graft may treat both the defect and the symptom."}
 ],
 apply: {
  vignette: "A 24-year-old student presents with sensitive upper front teeth. The palatal surfaces of 1.3 to 2.3 are smooth and glassy with exposed dentine, and small amalgams on 1.6 and 2.6 stand proud of the occlusal surface. The mandibular anterior teeth are unaffected and bilateral parotid enlargement is noted. The most likely cause of the tooth loss is:",
  options: ["Intrinsic gastric acid from recurrent vomiting","Dietary citrus held against the facial surfaces","Attrition from a deep overbite and nocturnal bruxism","Abrasion from hard-bristled horizontal toothbrushing"],
  answer: "Intrinsic gastric acid from recurrent vomiting",
  steps: [
   "The ask: the cause, read from a pattern of tooth loss.",
   "Facts that matter: palatal maxillary anterior surfaces, glassy with no facets, proud amalgams, parotid enlargement, lower anterior teeth spared.",
   "Cross out dietary citrus: extrinsic acid favours facial surfaces, and it would not explain the salivary gland finding.",
   "Cross out attrition: this leaves flat matching facets and wears restorations level with the tooth, not proud.",
   "Cross out abrasion: this gives sharp cervical notches on facial surfaces, not smooth palatal loss.",
   "The survivor: gastric acid washes over the palate and the tongue shields the lower teeth. The next step is a sensitive conversation and medical referral, with restoration delayed until the cause is managed."
  ]
 },
 teach: {
  prompt: "You see four teeth, one each with erosion, attrition, abrasion and abfraction. Describe what you would see on each and the one question you would ask each patient, explaining why each pattern arises.",
  model: "Erosion is smooth and silky with cupped cusps and proud restorations, because acid dissolves a clean surface, so I ask about diet and vomiting or reflux. Attrition is flat, shiny and matches the opposing tooth because enamel is grinding on enamel, so I ask about clenching and grinding. Abrasion is a sharp V-notch at the neck of several adjacent teeth because a brush or object cuts softer root dentine, so I ask about brushing method. Abfraction is a sharp wedge usually on one tooth, proposed to come from cervical flexure under load, so I look at occlusal contacts and ask about parafunction. Many real lesions combine these causes."
 },
 cards: [
  ["Erosion signs","Smooth, silky surface; cupped cusps; proud restorations; cervical enamel rim"],
  ["Palatal maxillary anterior erosion","Intrinsic acid: bulimia, reflux, chronic vomiting; lower anteriors shielded by the tongue"],
  ["Facial surface erosion","Extrinsic acid: soft drinks, citrus, acidic pools"],
  ["Attrition signs","Flat, shiny, matching facets; restorations wear level"],
  ["Abrasion signs","Sharp V-shaped cervical notches on several adjacent facial surfaces"],
  ["Abfraction proposed mechanism","Occlusal flexure and tensile stress at the cervix; evidence as a sole cause is weak"],
  ["Hydrodynamic theory","Stimulus moves tubule fluid, which activates A-delta fibres"],
  ["Hypersensitivity is diagnosed how?","By exclusion: caries, crack, leaking restoration, bleaching, pulpitis must be ruled out"],
  ["Potassium nitrate action","Raises potassium at the nerve, depolarising it so it fires less; takes weeks"],
  ["Occluding desensitisers","Stannous fluoride, arginine, bioactive glass, oxalates"],
  ["First step for sensitive roots","Remove the cause and start a desensitising toothpaste"],
  ["Dahl concept","Anterior build-up separates posterior teeth, which then erupt back into contact"]
 ],
 questions: [
  ["A 21-year-old has smooth palatal loss on 1.3 to 2.3 with dentine showing and normal lower anterior teeth. The most likely cause is:","Recurrent vomiting",["Citrus fruit sucking","Horizontal toothbrushing","Nocturnal bruxism"],"Gastric acid washes the palatal surfaces while the tongue shields the mandibular anterior teeth. Citrus usually affects facial surfaces."],
  ["A 33-year-old sips lemon water all day. The surface most likely to show the earliest erosion is the:","Facial of maxillary incisors",["Palatal of maxillary incisors","Lingual of mandibular molars","Lingual of mandibular incisors"],"Extrinsic acid held at the lips and front teeth reaches facial surfaces first. Palatal maxillary loss suggests intrinsic acid, and mandibular lingual surfaces are protected by saliva and tongue."],
  ["Which finding best distinguishes attrition from erosion on 3.6?","A flat facet that meets a matching facet on the opposing tooth",["Exposed dentine on the occlusal surface of the tooth","Sensitivity of the tooth to a cold air blast","Absence of plaque on the occlusal surface"],"Matching facets show tooth-on-tooth contact. Dentine exposure and sensitivity occur with any wear, so they do not separate the two."],
  ["A small amalgam on 2.6 stands proud of a smooth, cupped occlusal surface. This appearance is best explained by:","Acid dissolving tooth while the amalgam remains unaffected",["Delayed expansion of the amalgam over many years","Tooth-on-tooth grinding wearing the enamel preferentially","Bacterial acid dissolving the tooth beneath the plaque"],"Acid dissolves tooth much more readily than amalgam, so the filling is left standing. Attrition wears both, which keeps them level."],
  ["A 50-year-old who scrubs with a hard brush has sharp V-shaped notches at the buccal cervix of 2.3, 2.4 and 2.5, with no occlusal wear. The most likely diagnosis is:","Abrasion",["Attrition","Erosion","Root caries"],"Several adjacent facial cervical notches with sharp borders in a heavy brusher indicate mechanical wear. Abfraction is the tempting choice, but it is usually isolated and is linked to occlusal load."],
  ["A 46-year-old has a deep, sharp wedge-shaped lesion on the buccal cervix of 3.5 only. Adjacent teeth are unaffected, and 3.5 has a heavy occlusal facet. The term that best describes this lesion is:","Abfraction",["Abrasion","Erosion","Attrition"],"An isolated cervical wedge associated with load fits the proposed flexure mechanism. Abrasion from brushing would normally affect several neighbouring teeth."],
  ["Abfraction has been proposed to occur because:","Cervical tensile stress under flexure disrupts enamel and dentine",["Bacterial acid at the gingival margin dissolves the cervical enamel","Gastric acid pools in the gingival sulcus during sleep","Root cementum resorbs when occlusal force is removed"],"The theory holds that load flexes the tooth and the cervix fails in tension. The evidence for this as a sole cause is limited and most lesions are multifactorial."],
  ["A 30-year-old has a short, sharp pain from 2.4 when drinking cold water or breathing in cold air, with an exposed root surface and no other findings. The mechanism is best explained by:","Fluid movement in open tubules activating A-delta fibres",["Bacterial toxins reaching C fibres deep in the pulp","Direct stimulation of odontoblast cell bodies by cold","Inflammatory pressure rising within the pulp chamber"],"Brännström's hydrodynamic theory fits brief pain from exposed dentine. C-fibre or pressure-driven pain is dull and lingering, which is pulpitis."],
  ["Potassium nitrate toothpaste reduces dentine hypersensitivity mainly by:","Reducing nerve excitability through raised potassium levels",["Forming a calcium fluoride layer over open tubules","Sealing tubules with an adhesive resin plug","Stimulating odontoblasts to form tertiary dentine"],"Potassium depolarises the nerve so it does not repolarise and fire, which is why benefit takes weeks. Occlusion is how stannous fluoride, arginine or resin agents work."],
  ["A 38-year-old has sensitive roots on 1.3 and 1.4 with mild recession, no caries, and a hard brush. The most appropriate first step is to:","Correct brushing and start a desensitising toothpaste",["Place Class V composite restorations on both teeth","Perform a free gingival graft on both teeth","Begin root canal treatment on the 1.4"],"Treatment goes from least to most invasive, starting by removing the cause and using a home desensitiser. Restoration or surgery is reserved for persisting symptoms or larger defects."],
  ["A 42-year-old has sharp pain from 3.6 only on releasing biting pressure, with intact restorations and no exposed dentine. The most likely diagnosis is:","Cracked tooth",["Dentine hypersensitivity","Tooth erosion","Reversible pulpitis from caries"],"Pain on release of biting is the typical crack symptom. Hypersensitivity needs exposed dentine, which is why it is a diagnosis of exclusion."],
  ["A 58-year-old has a cervical wedge-shaped lesion on 2.4 that needs restoring. A material with chemical adhesion and low stiffness, which is often chosen for this site, is:","Glass ionomer cement",["Dental amalgam alloy","Lithium disilicate ceramic","Zinc phosphate cement"],"Glass ionomer bonds to dentine without needing a mechanical preparation and tolerates cervical flexure better than rigid materials. Amalgam would need retentive cutting of an already thin site."],
  ["A 35-year-old has a soft drink habit and active erosion on several teeth. Which advice is most appropriate?","Drink acid less often and brush gently with fluoride toothpaste",["Brush firmly with a hard brush after every acid drink","Sip the soft drink slowly through the entire day","Rinse with a low-pH mouthwash after each drink"],"Frequency and contact time drive erosion, and fluoride with gentle brushing protects softened enamel. Slow sipping prolongs acid contact, and firm brushing with a hard brush adds abrasion to an acid-softened surface."],
  ["A 62-year-old has localised wear on 1.3 to 2.3 with no interocclusal space for restorations. Bonded composite build-ups are placed on those teeth, temporarily separating the posterior teeth. This approach relies on:","Eruption of the separated teeth back into contact",["Permanent separation of the posterior teeth","Intrusion of the condyles within the fossae","Fracture of the anterior composite build-ups"],"The Dahl concept uses anterior separation to create space, with posterior teeth erupting into occlusion over time. It does not leave a permanent posterior open bite."]
 ]
};

window.CONTENT["m15-n07"] = {
 understand: `
 <p><b>Colour has three dimensions, and the eye ranks them.</b> <b>Hue</b> is the colour family. <b>Chroma</b> is saturation of that hue. <b>Value</b> is lightness, the one that most affects whether a restoration looks right. On the Vita Classical guide, the letters give hue (A reddish-brown, B reddish-yellow, C grey, D reddish-grey) and the numbers give rising chroma. A natural tooth is more chromatic at the cervical third and more translucent at the incisal edge, so shades are read from the middle third.</p>
 <p><b>Taking a shade.</b> Clean the teeth and take the shade <b>first, before rubber dam or preparation</b>. Dry teeth look lighter and take time to rehydrate. Use colour-corrected daylight, around 5500 K. Look in brief glances, because cones fatigue, and remove lipstick and strong colours. <b>Metamerism</b> means two objects match under one light and differ under another, so check under a second source. For composite, cure a test button on the unetched tooth. Layer an opaque dentine shade under a translucent enamel shade.</p>
 <p><b>How bleaching works.</b> Hydrogen peroxide diffuses through enamel and dentine and forms reactive oxygen species. These oxidise large pigment molecules with conjugated double bonds into smaller ones that absorb less light. No tooth surface is removed; the main colour change is in dentine. <b>Carbamide peroxide</b> breaks into about one-third hydrogen peroxide plus urea, so 10% carbamide peroxide gives about 3.5% hydrogen peroxide. Tray bleaching overnight for about two weeks is the standard home method, sometimes extended for several weeks. In-office methods use higher concentrations with a gingival barrier; light activation adds little proven benefit.</p>
 <p><b>What to expect.</b> Yellow-brown ageing stain responds best. Grey-blue tetracycline banding responds slowly, over months, and can fail. Extrinsic tea and tobacco stain may need only a polish. Superficial fluorosis mottling responds to microabrasion or resin infiltration. <b>Restorations do not bleach</b>, so bleach first and restore after. <b>Sensitivity</b> is the commonest side effect, as peroxide reaches the pulp; it is usually transient and helped by potassium nitrate or less frequent use. Residual oxygen also inhibits resin curing, so <b>delay bonding about 1-2 weeks</b>. Defer bleaching with active caries, leaking restorations or exposed roots, and in pregnancy.</p>
 <p><b>Non-vital walking bleach.</b> A dark root-filled tooth with sound obturation and no periapical disease can be bleached from inside.</p>
 <ol>
 <li>Remove root filling to about 2 mm below the cementoenamel junction.</li>
 <li>Seal it with a <b>cervical barrier</b> of glass ionomer, shaped to follow the external bone and attachment level.</li>
 <li>Seal in sodium perborate mixed with water, or carbamide peroxide, under a provisional; change it about weekly until the shade is reached.</li>
 <li>Restore with composite after a delay of about 1-2 weeks.</li>
 </ol>
 <p><b>External cervical resorption</b> is the feared complication. Peroxide passes down tubules at the cervix, where gaps in cementum may expose dentine, denaturing it and triggering an inflammatory resorption. The risk rises with 30% hydrogen peroxide, heat (thermocatalytic bleaching), previous trauma and no barrier. Water-based perborate lowers it. Review radiographically.</p>
 <p><b>Why the exam cares.</b> Stems test value, shade before dam, metamerism, why restorations look wrong after bleaching, bonding delay and the resorption risk.</p>`,
 connect: [
  {to:"m08-n04", why:"Composite shade, translucency and polish come from its filler and pigments, and residual oxygen after bleaching inhibits its free-radical cure."},
  {to:"m20-n04", why:"Walking bleach needs a well-obturated canal, with the barrier replacing coronal root filling at the cervix."},
  {to:"m20-n06", why:"Trauma is both the commonest cause of a dark non-vital tooth and a risk factor for cervical resorption after bleaching."},
  {to:"m10-n11", why:"Tetracycline staining, fluorosis, amelogenesis and dentinogenesis imperfecta decide whether bleaching can work or veneers are needed."},
  {to:"m13-n08", why:"Elective bleaching is deferred in pregnancy, an example of separating optional care from necessary care."}
 ],
 apply: {
  vignette: "A 43-year-old has a dark root-filled 2.1 that was traumatised at age 12. The root filling is sound and there is no periapical lesion. Walking bleach is planned. Which approach best reduces the risk of external cervical resorption?",
  options: ["Place a cervical glass ionomer barrier and use sodium perborate mixed with water","Use 30% hydrogen peroxide with a heated instrument for a stronger, faster result","Remove all root filling to the mid-root so that the bleach reaches deeper dentine","Etch the pulp chamber dentine with phosphoric acid to open tubules before bleaching"],
  answer: "Place a cervical glass ionomer barrier and use sodium perborate mixed with water",
  steps: [
   "The ask: how to lower the risk of resorption, the key complication of non-vital bleaching.",
   "Facts that matter: previous trauma, which raises the risk, and a sound root filling, which makes bleaching possible.",
   "Cross out 30% peroxide with heat: thermocatalytic bleaching is the classic association with cervical resorption.",
   "Cross out removing filling to mid-root: this exposes more dentine to peroxide and leaves no coronal seal.",
   "Cross out etching: opening tubules helps peroxide reach the cervical root surface, which is the wrong direction.",
   "The survivor: the barrier blocks cervical tubules, and water-based perborate is a milder agent with a lower reported risk."
  ]
 },
 teach: {
  prompt: "A patient has composite restorations on 1.1 and 2.1 and wants a whiter smile. Explain the order of treatment and the reason for each step, including what bleaching chemistry changes and does not change.",
  model: "Bleaching is oxidation: peroxide diffuses into the tooth and breaks large pigment molecules into smaller ones that absorb less light, mainly in dentine. Composite has no such pigments, so its shade stays the same and it will look darker after treatment. So I would bleach first, wait about 1-2 weeks for the shade to stabilise and residual oxygen to clear, because oxygen inhibits resin curing. Then I would take the shade before any dam, because dry teeth look lighter, and replace the composites to match. Treat any caries or leaking restorations before bleaching starts."
 },
 cards: [
  ["Hue, chroma, value","Colour family, saturation, lightness; value matters most"],
  ["Vita Classical letters and numbers","A reddish-brown, B reddish-yellow, C grey, D reddish-grey; rising numbers mean higher chroma"],
  ["Why take shade before rubber dam","Dehydrated teeth look lighter"],
  ["Metamerism","A match under one light but not another: check under a second source"],
  ["Bleaching mechanism","Reactive oxygen species oxidise large pigment molecules into smaller, less coloured ones"],
  ["10% carbamide peroxide equals","About 3.5% hydrogen peroxide plus urea"],
  ["Which stain responds worst?","Grey-blue tetracycline banding"],
  ["Commonest bleaching side effect","Transient sensitivity"],
  ["Delay bonding after bleaching","About 1-2 weeks: residual oxygen inhibits resin cure"],
  ["Do restorations bleach?","No: bleach first, then replace to match"],
  ["Walking bleach barrier","Glass ionomer at the cervix, shaped to the external attachment level"],
  ["Cervical resorption risk factors","30% hydrogen peroxide, heat, previous trauma, no barrier"]
 ],
 questions: [
  ["Tooth bleaching with peroxide lightens teeth mainly by:","Oxidising large pigment molecules into smaller ones",["Etching a thin stained layer from the enamel surface","Replacing lost enamel mineral with white crystals","Coating the surface with a reflective polymer film"],"Reactive oxygen species break conjugated pigment molecules, so they absorb less visible light. Bleaching does not remove a surface layer of enamel, which distinguishes it from microabrasion."],
  ["A home bleaching gel labelled 10% carbamide peroxide contains an equivalent of about:","3.5% hydrogen peroxide",["1% hydrogen peroxide","10% hydrogen peroxide","30% hydrogen peroxide"],"Carbamide peroxide releases hydrogen peroxide at about one-third of its concentration, plus urea. The 10% figure refers to the carbamide compound, not to the active peroxide."],
  ["A 34-year-old has bleached teeth and notices that composite restorations on 1.1 and 2.1 now look darker. The most appropriate explanation is:","Composite does not lighten with bleaching",["The peroxide stained the composite restorations","The enamel next to the composite has become thinner","The composite has absorbed urea from the gel"],"Peroxide lightens tooth but not the composite's pigments, so the mismatch appears as the tooth becomes lighter. Replacement after bleaching corrects this."],
  ["A patient finishes bleaching today and wants composite on 1.2 replaced at once. The best reason to delay is that:","Residual oxygen inhibits the polymerisation of the resin",["The peroxide makes the composite shade permanently unstable","Hydrogen peroxide removes all of the enamel surface minerals","Urea in the tooth prevents the etchant from reaching the enamel"],"Oxygen left in tooth tissue interferes with free-radical curing and reduces bond strength, so a delay of about 1-2 weeks is usual. Shade stabilisation is also helped by waiting."],
  ["A patient bleaching with trays develops sharp pain in several teeth during the first week. The most appropriate management is to:","Reduce the frequency and use potassium nitrate in the tray",["Begin root canal treatment on the most painful tooth","Switch to a higher peroxide concentration for less time","Reassure and continue the same regimen without change"],"Bleaching sensitivity is usually reversible pulpal irritation, so reducing exposure and adding a desensitiser is appropriate. Endodontic treatment is not indicated for a transient effect."],
  ["When selecting a shade for a crown on 1.1, the dimension that should be matched first because it most influences the result is:","Value",["Hue","Chroma","Translucency"],"Lightness is what the eye picks up most readily, and a wrong value is obvious even with correct hue. Hue is usually easier to adjust and is less noticeable."],
  ["A dentist places rubber dam on 1.1 to 2.1 and then selects the composite shade. The restoration later looks too light. The most likely explanation is that:","Dehydration made the teeth appear lighter at the time of selection",["The dam reflected extra blue light into the shade guide","Composite darkens by several shades during the first year","The rubber dam material stained the enamel surfaces"],"Enamel loses water under dam, which makes it look whiter, and it takes time to rehydrate. A shade taken at this point therefore looks too light once the tooth rehydrates, or too high in value."],
  ["A crown looks matched under the operatory lights but appears different outdoors. This effect is known as:","Metamerism",["Fluorescence","Opalescence","Translucency"],"Two objects with different reflectance curves may match only under one light source. Fluorescence is the emission of visible light under ultraviolet, which is a separate property."],
  ["The agent and technique most strongly associated with external cervical root resorption in non-vital bleaching is:","30% hydrogen peroxide with heat",["10% carbamide peroxide in a tray","Sodium perborate mixed with water","Sodium fluoride varnish at the cervix"],"Thermocatalytic bleaching combines strong peroxide with heat, which is the classic risk factor. Perborate with water is the safer choice, and resorption has been reported far less often with it."],
  ["During walking bleach on 2.1, a glass ionomer barrier is placed over the root filling mainly to:","Stop peroxide reaching cervical dentinal tubules",["Provide a reservoir of fluoride to the bleach","Increase retention of the temporary restoration","Support the crown against occlusal force"],"The barrier prevents peroxide reaching the cervical dentine and thus the periodontal tissues, where it can start resorption. It is not there for retention or fluoride."],
  ["A 45-year-old has a dark 1.1 with a poorly condensed root filling and a persisting periapical radiolucency. The most appropriate next step is to:","Retreat the root canal before any bleaching",["Start walking bleach and review the lesion later","Place a porcelain veneer directly over the discoloured tooth","Apply in-office bleach externally to the single tooth"],"Non-vital bleaching needs a sound root filling and no periapical disease, because it depends on a sealed canal and the infection comes first. A veneer leaves the disease untreated."],
  ["A 28-year-old has grey-blue horizontal bands on the anterior teeth from childhood tetracycline. Compared with yellow-brown ageing stain, the expected response to tray bleaching is:","Slower, taking months, with less predictable results",["Faster, taking days, with very predictable results","Identical, taking two weeks, with the same outcome","Absent, with worsening of the tetracycline stain"],"Tetracycline is bound within dentine and grey-blue shades respond poorly and slowly. Some improvement can occur, so an absent response would be too absolute a statement."],
  ["A 20-year-old has superficial opaque white mottling from mild fluorosis on 1.1 and 2.1 and wants the least invasive treatment. The most appropriate option is:","Microabrasion or resin infiltration",["Full-coverage ceramic crowns","Heated intracoronal bleaching","Root canal treatment and post"],"These treatments address a superficial enamel defect with minimal tissue loss. Crowns remove far more tooth, and intracoronal bleaching is for non-vital teeth."],
  ["A 31-year-old requests bleaching. Examination shows active caries on 2.4 and a leaking composite on 1.2. The most appropriate plan is to:","Treat the caries and restoration first, then bleach",["Bleach first, then restore both teeth afterwards","Bleach only the teeth without any restorations","Place fluoride varnish and start bleaching together"],"Peroxide can reach the pulp through leaking margins and open lesions, so disease is treated first. Final esthetic restorations are then matched after bleaching, once the shade has stabilised."]
 ]
};
