/* Module m05: General pathology. Written for a learner starting from zero.
   References: Robbins Basic Pathology; Robbins Pathologic Basis of Disease; Cecil Essentials of Medicine;
   Scully's Handbook of Oral Disease / Medical Problems in Dentistry; Hupp Contemporary Oral and Maxillofacial Surgery. */
window.CONTENT = window.CONTENT || {};

window.CONTENT["m05-n01"] = {
 understand: `
 <p><b>A cell under stress has three possible futures: it adapts, it is injured reversibly, or it dies.</b> The outcome depends on how severe the insult is, how long it lasts and how tough the cell is. Neurons die after minutes without blood; skeletal muscle survives hours.</p>
 <p><b>Adaptations change a cell's size, number or type.</b></p>
 <ul>
 <li><b>Hypertrophy</b>: bigger cells, same number. Cells that cannot divide have no other option, so a bruxist's masseter enlarges this way.</li>
 <li><b>Hyperplasia</b>: more cells, which requires cells that can divide. Gingival overgrowth with phenytoin, cyclosporine or nifedipine belongs here, not under hypertrophy: fibroblasts multiply and add excess collagen matrix.</li>
 <li><b>Atrophy</b>: smaller, fewer cells after lost blood supply, use or stimulation, as in a salivary gland behind a blocked duct.</li>
 <li><b>Metaplasia</b>: one mature cell type replaced by another better able to withstand the stress, such as salivary duct epithelium turning squamous around a stone.</li>
 </ul>
 <p><b>Dysplasia is not an adaptation but disordered growth.</b> Cells lose orderly maturation: large dark nuclei, excess mitoses, lost polarity. It is the histological precancer beneath many oral white and red patches, graded by how much of the epithelial thickness is involved. Full thickness is <b>carcinoma in situ</b>. The basement membrane is still intact; breach it and the lesion is invasive carcinoma.</p>
 <p><b>Reversible injury begins with ATP.</b> Without oxygen the Na+/K+ pump stops, Na+ and water enter, and the cell swells (<b>hydropic change</b>), the earliest visible sign. Anaerobic glycolysis makes lactate and pH falls. Restore oxygen and the cell recovers. <b>Irreversible injury</b> has two hallmarks: mitochondria cannot restart and membranes rupture. Proteins leak into blood (troponin after an infarct), calcium floods in, and the nucleus shrinks (<b>pyknosis</b>), fragments (<b>karyorrhexis</b>) and fades (<b>karyolysis</b>). Returning blood can add damage through oxygen free radicals (<b>reperfusion injury</b>).</p>
 <p><b>Necrosis is messy death: membranes fail and inflammation follows.</b> The pattern reveals the cause.</p>
 <div class="tscroll"><table>
 <tr><th>Type</th><th>Mechanism</th><th>Example</th></tr>
 <tr><td>Coagulative</td><td>Ischaemia denatures enzymes; cell outlines persist</td><td>Infarct; pulp whose apical vessels were severed by luxation (sterile, painless, grey tooth)</td></tr>
 <tr><td>Liquefactive</td><td>Bacterial and neutrophil enzymes digest tissue</td><td>Abscess; infected carious pulp; brain infarct</td></tr>
 <tr><td>Caseous</td><td>Cheesy debris inside a granuloma</td><td>Tuberculosis</td></tr>
 </table></div>
 <p><b>Apoptosis is tidy, programmed death.</b> DNA damage acting through p53, lost survival signals or cytotoxic T cells activate <b>caspases</b>. The cell shrinks, its membrane stays intact, macrophages eat the fragments, and there is no inflammation. The Civatte bodies of oral lichen planus are keratinocytes killed this way.</p>
 <p>Dead tissue often calcifies despite normal serum calcium (<b>dystrophic calcification</b>). <b>Metastatic calcification</b> occurs in normal tissue, usually when serum calcium is high.</p>
 <p><b>Why the exam cares.</b> These words reappear throughout dentistry. Stems ask why a traumatised tooth is silently non-vital, why an infected pulp produces pus, what to call a gingival enlargement, and what separates dysplasia from carcinoma.</p>`,
 connect: [
  {to:"m01-n01", why:"Hydropic swelling is the ATP-starved Na+/K+ pump failing, so the first sign of injury is membrane transport biology."},
  {to:"m20-n01", why:"Pulp necrosis in the AAE diagnosis is this node's cell death: ischaemic after trauma, liquefactive after caries, and each predicts a different presentation."},
  {to:"m10-n02", why:"Epithelial dysplasia is the histological risk marker behind leukoplakia and erythroplakia, so the biopsy report is read with these terms."},
  {to:"m11-n08", why:"Phenytoin, cyclosporine and calcium channel blockers cause gingival overgrowth, a drug-history question answered through hyperplasia of fibroblasts and matrix."},
  {to:"m05-n05", why:"Dysplasia, carcinoma in situ and invasion through the basement membrane form the bridge from disordered growth to neoplasia."}
 ],
 apply: {
  vignette: "A 24-year-old had a lateral luxation of tooth 1.1 eight months ago. The tooth is now grey, symptom-free and caries-free, and does not respond to cold or electric pulp testing. There is no swelling or sinus tract. Which of the following best explains the state of the pulp?",
  options: ["Ischaemic necrosis after the apical vessels were severed","Liquefactive necrosis from bacterial enzymes entering through caries","Apoptosis of odontoblasts with the rest of the pulp remaining vital","Caseous necrosis within a pulpal granuloma"],
  answer: "Ischaemic necrosis after the apical vessels were severed",
  steps: [
   "The ask: the mechanism of pulp death, so match the history to a type of necrosis.",
   "Facts that matter: trauma that displaced the root apex, no caries, no pain, no pus, a grey crown and no response to testing.",
   "Cross out liquefactive necrosis from caries: there is no carious route for bacteria, and the picture lacks pus, swelling and pain.",
   "Cross out odontoblast apoptosis alone: isolated odontoblast loss would not make the whole pulp unresponsive or turn the crown grey.",
   "Cross out caseous necrosis: that belongs to tuberculous granulomas, which have no link to this history.",
   "The survivor explains everything: luxation tore the vessels at the narrow apex, the pulp died without blood in a sterile environment, and breakdown products of haemoglobin stained the dentine. Later bacterial entry can convert this silent tooth into an infected one."
  ]
 },
 teach: {
  prompt: "A friend says gingival overgrowth, oral dysplasia and oral cancer are all just too many cells. Rebuild the differences from what the cells are doing and what would happen if the cause were removed.",
  model: "Drug-related gingival overgrowth is a controlled response: fibroblasts multiply and lay down extra matrix in response to the drug and plaque inflammation, and it often improves when the drug changes and plaque is controlled. Dysplasia is different in kind, because the epithelial cells themselves are abnormal, with disordered maturation and atypical nuclei, and it carries a risk of cancer even though the basement membrane is intact. Carcinoma in situ is that atypia through the full thickness of the epithelium. Invasive carcinoma has broken through the basement membrane, gaining access to vessels and lymphatics, and it no longer depends on the original stimulus."
 },
 cards: [
  ["Hypertrophy vs hyperplasia","Hypertrophy: bigger cells, same number. Hyperplasia: more cells; needs cells that can divide"],
  ["Masseter enlargement in bruxism is which adaptation?","Hypertrophy; skeletal muscle cells do not divide to meet workload"],
  ["Drugs causing gingival overgrowth","Phenytoin, cyclosporine, calcium channel blockers such as nifedipine"],
  ["Metaplasia in one line","One mature cell type replaced by another better suited to the stress; reversible"],
  ["Dysplasia vs carcinoma in situ vs invasive carcinoma","Partial thickness atypia; full thickness atypia with intact basement membrane; basement membrane breached"],
  ["Earliest light-microscope sign of reversible injury","Cell swelling (hydropic change) from Na+/K+ pump failure"],
  ["Hallmarks of irreversible injury","Mitochondria cannot recover and membranes rupture"],
  ["Pyknosis, karyorrhexis, karyolysis","Nucleus shrinks, fragments, fades: signs of cell death"],
  ["Pulp necrosis after luxation vs after caries","Luxation: ischaemic, initially sterile. Caries: liquefactive, infected"],
  ["Apoptosis vs necrosis","Apoptosis: shrinkage, intact membrane, no inflammation. Necrosis: swelling, rupture, inflammation"],
  ["Civatte bodies","Apoptotic basal keratinocytes in lichen planus"],
  ["Dystrophic vs metastatic calcification","Dystrophic: damaged tissue, normal serum calcium. Metastatic: normal tissue, high serum calcium"]
 ],
 questions: [
  ["The earliest change seen by light microscopy in reversible hypoxic cell injury is:","Cellular swelling from sodium and water entry",["Fragmentation of the nucleus into small pieces","Rupture of the plasma membrane with enzyme leakage","Caspase activation with shrinkage of the cell"],"ATP depletion stops the Na+/K+ pump, so sodium and water accumulate. Nuclear fragmentation and membrane rupture are irreversible, and caspase-driven shrinkage is apoptosis."],
  ["A 38-year-old with severe bruxism has bilateral firm enlargement of the masseter muscles. The tissue change is best described as:","Hypertrophy of skeletal muscle cells",["Hyperplasia of skeletal muscle cells","Metaplasia of muscle into fibrous tissue","Dysplasia of skeletal muscle cells"],"Increased workload enlarges existing muscle cells. Hyperplasia is the tempting choice, but it requires cell division, which is not how adult skeletal muscle responds to workload."],
  ["A 45-year-old kidney transplant recipient taking cyclosporine has firm enlargement of the interdental gingivae. Which of the following best describes the tissue response?","Fibroblast proliferation with excess collagen matrix",["Hypertrophy of epithelium without any increase in cell number","Squamous metaplasia of the sulcular epithelium","Dysplasia of the gingival epithelium"],"Drug-influenced overgrowth reflects increased connective tissue cells and matrix, modified by plaque inflammation. It is not a precancerous epithelial change, so dysplasia is wrong."],
  ["A 56-year-old has a submandibular duct stone. Biopsy shows the duct's columnar epithelium replaced by mature stratified squamous epithelium without atypia. This change is:","Squamous metaplasia",["Epithelial dysplasia","Carcinoma in situ","Pseudoepitheliomatous hyperplasia"],"One normal mature epithelium has replaced another in response to chronic irritation. The absence of atypia rules out dysplasia and carcinoma in situ."],
  ["A 62-year-old smoker has a white patch on the lateral border of the tongue. Biopsy shows loss of polarity and increased mitoses in the lower third of the epithelium, with an intact basement membrane. The correct term is:","Mild epithelial dysplasia",["Carcinoma in situ","Invasive squamous cell carcinoma","Squamous metaplasia"],"Atypia limited to the lower third is graded mild. Carcinoma in situ needs full-thickness atypia and invasive carcinoma needs a breached basement membrane."],
  ["Tooth 3.6 has a deep carious exposure and a necrotic pulp with foul purulent material in the canals. The type of tissue death is best described as:","Liquefactive necrosis",["Coagulative necrosis","Caseous necrosis","Fibrinoid necrosis"],"Bacterial and neutrophil enzymes digest the tissue into a semi-liquid mass. Coagulative necrosis retains tissue outlines and is the pattern of sterile ischaemia."],
  ["A myocardial infarct examined at two days shows dead cells whose outlines are still recognisable. This pattern is:","Coagulative necrosis caused by ischaemia",["Liquefactive necrosis caused by bacterial enzymes","Caseous necrosis caused by granulomatous inflammation","Apoptosis caused by cytotoxic T cells"],"Ischaemia denatures both structural proteins and the cell's enzymes, so the architecture persists for a while. Liquefaction is the pattern of infection and of infarcts in the brain, not the heart."],
  ["A 41-year-old with weight loss has a chronic tongue ulcer. Biopsy shows granulomas with central cheesy, structureless debris. The necrosis is:","Caseous, and tuberculosis should be excluded",["Fat necrosis, and pancreatitis should be excluded","Fibrinoid, and vasculitis should be excluded","Coagulative, and infarction should be excluded"],"Caseous necrosis inside granulomas is the classic pattern of tuberculosis, which can present as a chronic oral ulcer. Fibrinoid necrosis affects vessel walls, not granuloma centres."],
  ["Which of the following indicates that a cell has been irreversibly injured?","Karyolysis",["Hydropic change","Ribosomal detachment","Fatty change"],"Loss of the nucleus indicates cell death. The other three options are features of reversible injury that can recover if oxygen returns."],
  ["Which of the following best distinguishes apoptosis from necrosis?","Shrinkage with an intact membrane and no inflammation",["Swelling with membrane rupture and inflammation","Cell enlargement with an increased number of mitoses","Enzyme leakage followed by neutrophil infiltration"],"Apoptotic fragments stay membrane-bound and are phagocytosed quietly. Membrane rupture and neutrophil attraction belong to necrosis."],
  ["Biopsy of a 50-year-old's reticular oral lichen planus shows eosinophilic bodies in the basal epithelium beneath a band of lymphocytes. These bodies are most likely:","Keratinocytes killed by T-cell-induced apoptosis",["Keratinocytes distended by viral inclusion bodies","Plasma cells filled with immunoglobulin","Melanocytes degenerating after pigment loss"],"Civatte bodies are apoptotic basal keratinocytes, killed by cytotoxic T cells through caspase pathways. Viral inclusions occur in infected cells and do not explain the T-cell band."],
  ["A 59-year-old receives reperfusion therapy for a myocardial infarction, yet some salvageable cells die as blood flow returns. The most likely mechanism is:","Reactive oxygen species generated when oxygen returns",["Excess ATP production by recovering mitochondria","Reduced intracellular calcium in reperfused cells","Sudden loss of plasma proteins from reopened vessels"],"Returning oxygen is partly reduced by damaged mitochondria, producing free radicals that attack membranes; calcium also rises rather than falls. This is why restoring flow is not entirely harmless."],
  ["Serum troponin rises after a myocardial infarction because:","Loss of membrane integrity lets intracellular proteins escape",["Injured cells increase their export of troponin by exocytosis","Apoptotic bodies release troponin into the bloodstream intact","Hypoxia stimulates the liver to synthesise extra troponin"],"Troponin is a structural cardiac protein that reaches the blood when membranes fail. Apoptotic bodies stay membrane-bound and are phagocytosed, so they are a poor explanation."],
  ["A 60-year-old has a long-standing stone obstructing the submandibular duct. The gland is small and its acini are shrunken and partly replaced by fibrous tissue. The change in the acinar cells is:","Atrophy",["Hypertrophy","Hyperplasia","Metaplasia"],"Obstruction and loss of stimulation reduce cell size and number. Metaplasia is a change of cell type, which may occur in the ducts but does not describe shrinking acini."],
  ["A 74-year-old has calcified, previously damaged aortic valve cusps. Serum calcium and phosphate are normal. This calcification is best described as:","Dystrophic",["Metastatic","Ectopic ossification with hypercalcaemia","Physiological mineralisation"],"Damaged or dead tissue calcifies even at normal serum calcium. Metastatic calcification usually reflects hypercalcaemia and affects normal tissues."]
 ]
};

window.CONTENT["m05-n02"] = {
 understand: `
 <p><b>Inflammation delivers blood, fluid and white cells to an injury fast.</b> Each cardinal sign is a visible consequence of that delivery: <b>rubor</b> (redness) and <b>calor</b> (heat) from vasodilation, <b>tumor</b> (swelling) from leaky vessels, <b>dolor</b> (pain) from prostaglandins, bradykinin and pressure, and lost function.</p>
 <p><b>Vascular phase.</b> Mast cells release <b>histamine</b> within seconds. Arterioles dilate and venule endothelial cells contract, opening gaps. Protein-rich <b>exudate</b> leaks out, carrying antibodies and complement. Blood slows, which lets white cells reach the vessel wall.</p>
 <p><b>Cellular phase.</b> Neutrophils dominate at 6 to 24 hours and macrophages replace them by 24 to 48 hours.</p>
 <ol>
 <li><b>Rolling</b> along endothelium on selectins.</li>
 <li><b>Firm adhesion</b> through integrins.</li>
 <li><b>Transmigration</b> between endothelial cells.</li>
 <li><b>Chemotaxis</b> toward C5a, IL-8 and bacterial products.</li>
 <li><b>Phagocytosis</b>, helped by the opsonins IgG and C3b, then killing with reactive oxygen species and lysosomal enzymes, which also damage host tissue.</li>
 </ol>
 <p><b>Mediators.</b> Membrane phospholipid releases arachidonic acid. Cyclo-oxygenase turns it into prostaglandins (vasodilation, pain, fever; blocked by NSAIDs); lipoxygenase makes leukotrienes (leak, chemotaxis, bronchospasm). Corticosteroids act further upstream. <b>TNF, IL-1 and IL-6</b> activate endothelium and produce the systemic response: fever and acute-phase proteins such as C-reactive protein.</p>
 <p><b>Pulpitis is inflammation in a closed chamber.</b> Gingiva can swell outward; pulp sits inside rigid dentine with blood vessels entering through a narrow apex. Oedema raises local tissue pressure, compresses thin-walled venules, slows flow and stimulates nerve fibres, so a small lesion hurts severely and can progress to necrosis. Lingering, spontaneous pain reflects C-fibres and irreversible disease.</p>
 <p><b>Chronic inflammation</b> follows a persistent stimulus. Macrophages, lymphocytes and plasma cells dominate, and destruction and attempted repair happen together. Words matter at the apex:</p>
 <ul>
 <li><b>True granuloma</b>: a nodule of epithelioid macrophages, often with giant cells (tuberculosis, sarcoidosis, Crohn disease).</li>
 <li><b>Periapical granuloma</b>: a misnomer. It is chronically inflamed granulation tissue with lymphocytes, plasma cells and macrophages around the apex of a necrotic tooth. It is usually symptom-free.</li>
 <li><b>Apical abscess</b>: neutrophils and pus from liquefactive necrosis. Antibiotics reach an avascular pus cavity poorly, so drainage is the treatment.</li>
 </ul>
 <p><b>Periodontitis is chronic inflammation with bone as the casualty.</b> Bacterial lipopolysaccharide stimulates macrophages to release IL-1, TNF and prostaglandin E2. Matrix metalloproteinases degrade collagen, and raised <b>RANKL</b> relative to its decoy <b>osteoprotegerin</b> drives osteoclasts. The host response does much of the damage, which is why smoking and diabetes, both of which alter the host, accelerate disease.</p>
 <p><b>Why the exam cares.</b> Mechanism predicts management: NSAIDs for pulpal pain, drainage for pus, root canal treatment for an infected apex. Expect stems contrasting granuloma with abscess, exudate with transudate, and neutrophils with plasma cells.</p>`,
 connect: [
  {to:"m04-n11", why:"Complement, neutrophils, macrophages and cytokines are innate immunity; inflammation is that system seen in tissue."},
  {to:"m11-n04", why:"NSAIDs block cyclo-oxygenase and acetaminophen acts centrally, so analgesic choice follows the arachidonic acid pathway."},
  {to:"m20-n01", why:"AAE pulpal and apical diagnoses are stages of this node: reversible and irreversible pulpitis, apical periodontitis and abscess."},
  {to:"m19-n02", why:"Periodontal bone loss is cytokine-driven RANKL excess, so pathogenesis questions are chronic inflammation questions."},
  {to:"m05-n03", why:"The macrophage links inflammation to repair: it clears debris and then releases the growth factors that build granulation tissue."}
 ],
 apply: {
  vignette: "A 26-year-old reports spontaneous, throbbing pain from tooth 3.6 that wakes her at night and lingers for minutes after cold drinks. The tooth has a deep carious lesion, and there is no swelling. A similarly sized area of marginal gingivitis elsewhere causes her no pain. Which of the following best explains why the pulpal inflammation is so painful?",
  options: ["Oedema within rigid dentine raises tissue pressure, compressing venules and stimulating pulpal nerves","The pulp contains only A-delta fibres, which fire more intensely than any fibres in gingiva","Bacterial toxins destroy the odontoblast layer and expose bare pulpal nerve endings to saliva","Neutrophils in the pulp release histamine, a mediator not found in gingival inflammation"],
  answer: "Oedema within rigid dentine raises tissue pressure, compressing venules and stimulating pulpal nerves",
  steps: [
   "The ask: why the same process hurts much more in pulp than in gingiva, so look for what differs between the two sites.",
   "Facts that matter: spontaneous and lingering pain, deep caries, no swelling, and comparable inflammation elsewhere that is painless.",
   "Cross out only A-delta fibres: the pulp also has C-fibres, and they are the ones associated with lingering, dull, throbbing pain.",
   "Cross out direct exposure to saliva: the lesion is deep but nothing states the pulp is open to the mouth, and pain is explained without it.",
   "Cross out histamine being unique to pulp: mast cell histamine is a general mediator of acute inflammation at any site, and neutrophils are not its main source.",
   "The survivor explains everything: gingiva can swell outward, but pulp is encased in dentine. Exudate raises local pressure, venous outflow falls, and mediators plus pressure stimulate the nerves."
  ]
 },
 teach: {
  prompt: "Follow a neutrophil from flowing in a venule to killing a bacterium in an inflamed periapical area, naming the molecule that makes each step possible and what happens if that step fails.",
  model: "Inflammation activates the endothelium, and the neutrophil rolls along the wall on selectins. Integrins on the neutrophil then bind endothelial ligands, stopping it firmly; if these integrins are missing, as in leukocyte adhesion deficiency, infections recur with little pus and severe early periodontal destruction. The cell squeezes between endothelial cells and follows gradients of C5a, IL-8 and bacterial products to the target. IgG and C3b coat the bacterium so it is readily engulfed, then reactive oxygen species and lysosomal enzymes kill it. Some of these products leak out and liquefy nearby tissue, producing pus."
 },
 cards: [
  ["The five signs and their causes","Redness and heat: vasodilation. Swelling: exudate. Pain: mediators and pressure. Loss of function"],
  ["Exudate vs transudate","Exudate: protein-rich, leaky vessels. Transudate: protein-poor, pressure imbalance with intact vessels"],
  ["Immediate mediator of vascular leak","Histamine from mast cells"],
  ["Rolling vs firm adhesion","Rolling: selectins. Firm adhesion: integrins binding endothelial ligands such as ICAM-1"],
  ["Neutrophil chemoattractants","C5a, IL-8, leukotriene B4, bacterial products"],
  ["Main opsonins","IgG and C3b"],
  ["Cell timeline in acute inflammation","Neutrophils at 6 to 24 hours; macrophages by 24 to 48 hours"],
  ["COX vs lipoxygenase products","COX: prostaglandins, thromboxane. Lipoxygenase: leukotrienes"],
  ["Mediators causing fever","IL-1 and TNF raise hypothalamic prostaglandin E2"],
  ["True granuloma vs periapical granuloma","True: epithelioid macrophages. Periapical: chronically inflamed granulation tissue, a misnomer"],
  ["Why abscesses need drainage","Pus cavity is avascular; antibiotics penetrate poorly and pus raises pressure"],
  ["Cytokine axis in periodontal bone loss","IL-1, TNF and PGE2 raise RANKL relative to osteoprotegerin, activating osteoclasts"]
 ],
 questions: [
  ["The mediator mainly responsible for the immediate, transient increase in venule permeability after injury is:","Histamine",["Interleukin-1","C-reactive protein","Thromboxane A2"],"Mast cells release preformed histamine within seconds, causing endothelial contraction. Interleukin-1 acts later and more slowly because it requires protein synthesis."],
  ["Firm adhesion of a neutrophil to activated endothelium is mediated mainly by:","Integrins binding endothelial ligands",["Selectins binding carbohydrate ligands","IgE binding high-affinity Fc receptors","MHC class II binding T-cell receptors"],"Integrins such as LFA-1 bind ICAM-1 and stop the cell. Selectins mediate the earlier, weaker rolling step."],
  ["A 6-year-old has recurrent skin infections with little pus, a history of delayed umbilical cord separation, and severe periodontal destruction around the primary teeth. The neutrophil count is high. The most likely defect is in:","Integrin-mediated adhesion to endothelium",["Oxidative killing within phagosomes","Production of neutrophils by the bone marrow","Antibody production by plasma cells"],"Leukocyte adhesion deficiency leaves neutrophils unable to exit the vessels, so blood counts are high but tissues contain little pus. A marrow production defect would lower the count, not raise it."],
  ["Fluid aspirated from an inflamed fascial space has a high protein content and many neutrophils. This fluid is best classified as an exudate because it results from:","Increased permeability of the vascular wall",["Increased venous hydrostatic pressure alone","Reduced plasma oncotic pressure alone","Obstruction of the draining lymphatics alone"],"Inflammatory gaps in the endothelium let protein and cells escape. The other three mechanisms produce protein-poor transudate or lymph-rich fluid, not cell-rich pus."],
  ["A 19-year-old develops acute pericoronitis around tooth 3.8 twelve hours before biopsy of the operculum. The predominant inflammatory cell is most likely the:","Neutrophil",["Plasma cell","Macrophage","Mast cell"],"Neutrophils arrive first and dominate at 6 to 24 hours. Macrophages follow by 24 to 48 hours, and plasma cells mark chronicity."],
  ["Biopsy of pocket wall from a 55-year-old with periodontitis of many years' duration most likely shows a predominance of:","Lymphocytes and plasma cells with macrophages",["Neutrophils with fibrin but no other cells","Eosinophils with mast cells","Epithelioid macrophages with giant cells"],"Chronic periodontal lesions are rich in plasma cells and lymphocytes. Epithelioid cells define granulomatous inflammation, which is not the usual pattern in periodontitis."],
  ["Ibuprofen reduces postoperative pain and swelling after surgical removal of tooth 4.8 mainly because it:","Inhibits cyclo-oxygenase and lowers prostaglandin production",["Inhibits lipoxygenase and lowers leukotriene production","Blocks histamine receptors on endothelial cells","Blocks sodium channels in peripheral nerves"],"Prostaglandins vasodilate and sensitise nociceptors. Sodium channel block is how local anaesthetics act, not NSAIDs."],
  ["Dexamethasone reduces postoperative swelling more broadly than an NSAID because it:","Suppresses phospholipase A2 and cytokine gene expression",["Irreversibly acetylates cyclo-oxygenase in platelets","Selectively blocks mast cell histamine receptors","Directly neutralises bradykinin and substance P within the tissues"],"Acting upstream, corticosteroids reduce both prostaglandins and leukotrienes and also dampen cytokines. Irreversible acetylation of cyclo-oxygenase describes aspirin."],
  ["Which pair of mediators is most directly responsible for inflammatory pain?","Bradykinin and prostaglandin E2",["Fibrinogen and C-reactive protein","Thrombin and plasmin","Albumin and transferrin"],"Bradykinin activates nociceptors and prostaglandin E2 sensitises them. Fibrinogen and C-reactive protein are acute-phase proteins, not direct pain mediators."],
  ["A 33-year-old with an acute dental abscess has a temperature of 38.9 degrees C and raised C-reactive protein. The fever is produced mainly by:","IL-1 and TNF raising hypothalamic prostaglandin E2",["Histamine dilating the skin capillaries directly","Neutrophil enzymes acting directly on muscle","Bacterial exotoxins blocking heat loss from sweat glands"],"Pyrogenic cytokines induce cyclo-oxygenase in the hypothalamus, which resets the temperature set point; this is why NSAIDs and acetaminophen lower fever. Histamine has only local vascular effects."],
  ["Bacteria coated with which of the following are most readily engulfed by neutrophils?","IgG and C3b",["IgE and C5a","IgD and C1q","IgM and histamine"],"Neutrophils have Fc-gamma receptors and complement receptors that recognise these opsonins. C5a is a chemoattractant rather than an opsonin."],
  ["A 35-year-old has persistent lip swelling and cobblestone buccal mucosa. Biopsy shows non-caseating granulomas. The cell that defines these lesions is the:","Epithelioid macrophage",["Plasma cell","Neutrophil granulocyte","Degranulating mast cell"],"A granuloma is a focal collection of activated macrophages with an epithelial-like appearance. Crohn disease or orofacial granulomatosis should be considered. Plasma cells may surround the lesion but do not define it."],
  ["A symptom-free 45-year-old has a necrotic tooth 4.6 with a well-defined periapical radiolucency. Biopsy shows granulation tissue with lymphocytes, plasma cells and macrophages and no epithelial lining. The diagnosis is:","Periapical granuloma",["Radicular cyst","Acute apical abscess","Tuberculous granuloma"],"This is chronically inflamed granulation tissue, despite the name. A radicular cyst needs an epithelial lining, and an acute abscess would be neutrophil-rich and painful."],
  ["A 29-year-old has fluctuant swelling and throbbing pain from tooth 2.6. Amoxicillin was prescribed three days ago with little effect. Which of the following best explains why drainage is needed?","The pus cavity lacks blood supply, so antibiotics reach it poorly",["Neutrophils in pus actively degrade amoxicillin before it acts","Antibiotics cannot cross the capillaries of the maxilla at all","Antibiotics stimulate more pus when no drainage has been established"],"Drug arrives by blood, and an abscess is an avascular collection under pressure. Removing the source and the pus treats the mechanism; adding more antibiotic does not."],
  ["In periodontitis, cytokines such as IL-1 and TNF lead to alveolar bone loss chiefly by:","Raising RANKL relative to osteoprotegerin, activating osteoclasts",["Raising osteoprotegerin relative to RANKL, activating osteoblasts","Directly dissolving hydroxyapatite in the bone surface","Blocking the bacterial production of lipopolysaccharide"],"RANKL binding RANK drives osteoclast differentiation and activity, and osteoprotegerin normally acts as its decoy. An increase in osteoprotegerin would protect bone, not destroy it."]
 ]
};

window.CONTENT["m05-n03"] = {
 understand: `
 <p><b>Injured tissue recovers by regeneration or by scar.</b> The outcome depends on whether its cells can divide and whether its framework survives. <b>Labile</b> cells (oral epithelium, marrow) divide constantly. <b>Stable</b> cells (hepatocytes, fibroblasts, endothelium) rest but can divide when needed. <b>Permanent</b> cells (neurons, cardiac muscle) essentially cannot, so a myocardial infarct heals with a scar.</p>
 <p><b>Repair runs in overlapping phases.</b></p>
 <ol>
 <li><b>Haemostasis</b>: clot forms; platelets release growth factors such as PDGF and TGF-beta, and fibrin serves as a scaffold.</li>
 <li><b>Inflammation</b>: neutrophils and then macrophages clear debris; macrophages direct the next phase.</li>
 <li><b>Proliferation</b>: epithelium migrates across the wound. <b>Granulation tissue</b> fills the gap: new capillaries driven by VEGF, fibroblasts and loose matrix. It is unrelated to a granuloma.</li>
 <li><b>Remodelling</b>: type III collagen is replaced by stronger type I, and matrix metalloproteinases reshape it. Strength is about 10% of normal at one week and 70-80% at three months, and it never fully returns.</li>
 </ol>
 <p><b>Intention describes the gap.</b> In <b>primary intention</b> the edges are brought together, as in a sutured flap: little granulation tissue, epithelium bridges within 24 to 48 hours, and scarring is small. In <b>secondary intention</b> the edges stay apart: a large clot, more inflammation and granulation tissue, and contraction by <b>myofibroblasts</b>.</p>
 <p><b>A tooth socket heals by secondary intention.</b> Clot fills it within hours. Granulation tissue replaces the clot during the first week as osteoclasts round the crest, and epithelium migrates across the surface. Woven bone forms from the apex upward, is filling the socket by about 4 to 6 weeks, and remodels toward mature bone over about 4 to 6 months, with slower remodelling continuing beyond that. Timing varies between patients and with socket size. The ridge shrinks, especially in width.</p>
 <p><b>Dry socket (alveolar osteitis)</b> is healing without a clot. Fibrinolysis, promoted by trauma, infection, smoking and possibly oral contraceptives, dissolves the clot early, leaving bare bone. Severe radiating pain and bad odour begin around day 2 to 4, most often after mandibular third molar removal. Treatment is gentle saline irrigation, a sedative dressing and analgesia. Do not curette, since this exposes more bone; it is not primarily an infection.</p>
 <p><b>Delayed healing has local and systemic causes.</b></p>
 <ul>
 <li><b>Local</b>: infection, foreign body, movement, tension, poor blood supply, previous radiotherapy.</li>
 <li><b>Systemic</b>: smoking (vasoconstriction, carbon monoxide, poor neutrophil function); diabetes (microvascular damage, glycation, neutrophil defects); corticosteroids (less inflammation and collagen); poor nutrition (protein, zinc, and vitamin C for collagen hydroxylation); immunosuppression; age.</li>
 </ul>
 <p>Oral mucosa heals faster and with less scarring than skin. Too much healing has its own lesions: <b>keloid</b> (scar beyond the wound margin) and <b>pyogenic granuloma</b> (exuberant granulation tissue). After periodontal therapy, repair commonly gives a <b>long junctional epithelium</b>, not new attachment.</p>
 <p><b>Why the exam cares.</b> Expect a socket timeline, a dry socket scene and a patient who heals badly because of smoking, diabetes, steroids or radiotherapy. Name the failed step and the answer follows.</p>`,
 connect: [
  {to:"m21-n03", why:"Dry socket is clot failure in a healing socket; recognising and managing it depends on knowing this healing sequence."},
  {to:"m01-n04", why:"Vitamin C is required for collagen hydroxylation, which is why scurvy produces bleeding gingivae and sockets that fail to heal."},
  {to:"m13-n06", why:"Diabetes delays healing and raises infection risk through microvascular disease, glycation and neutrophil defects, shaping surgical planning."},
  {to:"m21-n05", why:"Radiotherapy and antiresorptive drugs impair bone blood supply or turnover, the basis of osteoradionecrosis and MRONJ after extractions."},
  {to:"m19-n06", why:"Repair by long junctional epithelium versus true regeneration of attachment is the central question in periodontal surgery."}
 ],
 apply: {
  vignette: "A 34-year-old smoker returns three days after surgical removal of tooth 3.8 with severe throbbing pain radiating to the ear and a bad taste. The socket is empty with exposed greyish bone. There is no facial swelling, no trismus beyond that expected and no fever. Which of the following best explains this condition?",
  options: ["Early fibrinolytic loss of the blood clot exposing socket bone","Spreading pyogenic infection of the mandibular medullary bone","A retained root fragment causing a foreign-body granuloma","Necrosis of the socket bone caused by a bisphosphonate"],
  answer: "Early fibrinolytic loss of the blood clot exposing socket bone",
  steps: [
   "The ask: the mechanism behind a painful socket on day three.",
   "Facts that matter: mandibular third molar, smoker, onset at day three, empty socket with bare bone, bad taste, no swelling and no fever.",
   "Cross out spreading osteomyelitis: it brings systemic illness, swelling and often pus, and it typically develops later.",
   "Cross out retained root fragment: a foreign body can delay healing, but nothing indicates a fragment, and it does not explain an empty socket on day three.",
   "Cross out antiresorptive necrosis: there is no drug history, and MRONJ is chronic exposed bone over weeks, not acute pain on day three.",
   "The survivor explains everything: the clot was lysed early, which left bone without its protective scaffold. Treat with gentle irrigation, a sedative dressing and analgesia, not curettage or routine antibiotics."
  ]
 },
 teach: {
  prompt: "Compare a sutured flap with an extraction socket: what fills each wound, how long the sequence takes, and what single failure produces dry socket. Then choose two patient factors that delay healing and show which step each one damages.",
  model: "A sutured flap heals by primary intention: the edges are close, the clot is thin, and epithelium bridges in a day or two with little granulation tissue. A socket heals by secondary intention: a large clot is replaced by granulation tissue in the first week, then woven bone forms over weeks and matures over months while epithelium covers the surface. Dry socket happens when the clot is lost early through fibrinolysis, leaving bare bone without a scaffold. Smoking damages the steps that need blood and oxygen, because of vasoconstriction, carbon monoxide and poorer neutrophil function. Corticosteroids damage the inflammatory and proliferative steps because they suppress macrophage signals and collagen synthesis."
 },
 cards: [
  ["Labile, stable, permanent cells","Labile: epithelium, marrow. Stable: hepatocytes, fibroblasts, endothelium. Permanent: neurons, cardiac muscle"],
  ["Granulation tissue is composed of","New capillaries, fibroblasts, loose matrix and inflammatory cells"],
  ["Collagen switch in remodelling","Type III replaced by type I"],
  ["Wound strength at 1 week and 3 months","About 10% at 1 week; about 70-80% at 3 months; never fully normal"],
  ["Which cell contracts a wound?","Myofibroblast"],
  ["Primary vs secondary intention","Primary: edges apposed, little scar. Secondary: gap fills with granulation tissue and contracts"],
  ["Socket healing sequence","Clot, granulation tissue, woven bone, lamellar bone, with epithelium covering the surface"],
  ["Dry socket: timing and cause","Around day 2 to 4; early fibrinolytic loss of the clot"],
  ["Dry socket treatment","Gentle irrigation, sedative dressing, analgesia; no curettage; antibiotics not routine"],
  ["Why vitamin C deficiency delays healing","Proline and lysine hydroxylation fails, so collagen is weak"],
  ["Keloid vs hypertrophic scar","Keloid extends beyond the wound margin; hypertrophic scar stays within it"],
  ["Common healing outcome after periodontal scaling and root planing","Long junctional epithelium: repair, not regeneration"]
 ],
 questions: [
  ["A myocardial infarct heals by fibrous scar rather than by new muscle because cardiac muscle cells are:","Permanent cells with minimal capacity to divide",["Labile cells that divide only under oxygen lack","Stable cells that divide only after infection","Epithelial cells attached to a damaged basement membrane"],"Permanent cells cannot replace themselves in useful numbers, so fibroblasts fill the defect. Stable cells such as hepatocytes can regenerate if their framework survives, which cardiac muscle cannot."],
  ["Granulation tissue is best described as:","New capillaries and fibroblasts in a loose matrix",["A focal collection of epithelioid macrophages","Dense type I collagen with few blood vessels","A collection of neutrophils in liquefied tissue"],"Granulation tissue is the red, granular, vascular tissue of repair. A collection of epithelioid macrophages is a granuloma, a different process despite the similar name."],
  ["A 3.8 envelope flap is repositioned and sutured with its edges apposed. The incision line heals mainly by:","Primary intention, with minimal granulation tissue",["Secondary intention, with marked wound contraction","Regeneration of mesenchyme without epithelial coverage","Tertiary intention, with delayed surgical closure"],"Apposed edges need little granulation tissue and epithelium bridges quickly. Secondary intention is what happens when the edges remain apart, as in an extraction socket."],
  ["After routine extraction of tooth 1.6 in a healthy 40-year-old, which sequence best describes socket healing?","Clot, granulation tissue, woven bone, lamellar bone",["Clot, lamellar bone, granulation tissue, woven bone","Granulation tissue, clot, lamellar bone, woven bone","Woven bone, clot, granulation tissue, lamellar bone"],"The clot is the scaffold for granulation tissue, then woven bone forms and is remodelled into lamellar bone. Lamellar bone cannot appear before the woven stage."],
  ["During the remodelling phase of a healing wound, which change in collagen occurs?","Type III collagen is replaced by type I collagen",["Type I collagen is replaced by type III collagen","Type II collagen is replaced by type IV collagen","Type IV collagen is replaced by type II collagen"],"Early matrix is rich in thin type III, and remodelling replaces it with stronger type I. Type II is found in cartilage and type IV in basement membranes."],
  ["A 71-year-old living on tea and toast has bleeding gingivae and an extraction socket unhealed after three weeks. The healing failure most likely reflects impaired:","Hydroxylation of proline and lysine in collagen",["Carboxylation of clotting factors in the liver","Formation of myelin around peripheral nerves","Absorption of calcium in the small intestine"],"Vitamin C is the cofactor for collagen hydroxylases, without which the helix is unstable. Carboxylation is the vitamin K step, which would cause bleeding but not poor collagen."],
  ["Which cell is chiefly responsible for contraction of a healing wound?","Myofibroblast",["Osteoclast","Plasma cell","Keratinocyte"],"Myofibroblasts combine collagen synthesis with contractile actin filaments. Keratinocytes cover the wound surface but do not pull its edges together."],
  ["Approximately what proportion of the tensile strength of unwounded skin has a wound regained at three months?","70-80%",["10-20%","30-40%","100%"],"Strength rises steeply after the first week through collagen synthesis and cross-linking, but it plateaus at about 70-80%. A wound never regains full original strength."],
  ["A 36-year-old has severe radiating pain and bad odour three days after removal of tooth 4.8. The socket contains no clot and bone is exposed. The most appropriate management is:","Gentle saline irrigation, a sedative dressing and analgesia",["Vigorous curettage to establish a new blood clot","A course of intravenous antibiotics with hospital admission","Immediate surgical closure with a mucoperiosteal flap"],"Treatment controls pain while healing proceeds by secondary intention. Curettage is the tempting option, but it exposes more bone and worsens pain."],
  ["Which of the following patients is at greatest risk of alveolar osteitis?","A smoker having a surgical extraction of tooth 3.8",["A non-smoker having a simple extraction of tooth 2.2","A non-smoker having a primary tooth 5.3 exfoliate naturally","A smoker having a composite restoration on tooth 1.1"],"Risk rises with mandibular third molar surgery, surgical trauma and smoking. Natural exfoliation and non-surgical restorations leave no socket clot at risk."],
  ["A 58-year-old with poorly controlled type 2 diabetes has delayed healing and repeated infection after extractions. Which of the following best explains this?","Microvascular disease and glycation products impair blood flow and neutrophil function",["High blood glucose directly dissolves new collagen after it is deposited","Insulin resistance prevents epithelial cells from attaching to the basement membrane","Raised blood glucose increases fibrinolysis within all surgical wounds at every stage"],"Hyperglycaemia damages small vessels and forms advanced glycation end products, while neutrophil chemotaxis and killing are reduced. Glucose does not chemically dissolve collagen."],
  ["A heavy smoker has a delayed-healing palatal donor site. The best explanation is that smoking:","Reduces tissue oxygen through vasoconstriction and carbon monoxide",["Raises tissue oxygen and overstimulates fibroblasts","Dilates gingival vessels and floods the wound with neutrophils","Coats the wound with a protective tar layer that blocks epithelial migration"],"Nicotine constricts vessels and carbon monoxide reduces oxygen carriage, and neutrophil function also suffers. The tar layer is an invented mechanism."],
  ["A 62-year-old takes long-term prednisone for rheumatoid arthritis and has poor wound healing after extractions. The drug delays healing mainly by:","Suppressing inflammation and fibroblast collagen synthesis",["Accelerating epithelial turnover so wound edges separate","Directly destroying platelets within the socket clot","Blocking vitamin K activation of clotting factors"],"Macrophage signalling and collagen deposition are both reduced. Blocking vitamin K activation describes warfarin, which affects clotting rather than fibroblast function."],
  ["A 66-year-old received high-dose radiotherapy to the mandible years ago. An extraction there fails to heal, and bone becomes exposed. The underlying mechanism is that irradiated bone is:","Hypovascular, hypocellular and hypoxic, so it cannot mount repair",["Hypervascular and hypercellular, so it bleeds until healing fails","Heavily colonised by neutrophils that destroy new collagen rapidly","Newly mineralised and therefore too dense for osteoclasts to enter"],"Radiation causes progressive endarteritis and loss of cells, so traumatised bone cannot heal, leading to osteoradionecrosis. Too many cells and vessels is the reverse of what occurs."],
  ["A pregnant 29-year-old has a soft, red, easily bleeding gingival mass between 1.1 and 1.2. Histology shows lobules of new capillaries with inflammatory cells. This lesion is best understood as:","Exuberant granulation tissue, a pyogenic granuloma",["A true epithelioid granuloma caused by a mycobacterium","A pus-filled abscess of the gingival connective tissue","A benign neoplasm of the gingival squamous epithelium"],"Irritation and hormonal change produce a reactive mass of granulation tissue. The name misleads: there is neither pus nor a true granuloma."]
 ]
};

window.CONTENT["m05-n04"] = {
 understand: `
 <p><b>Blood stays in its vessels and stays liquid because two sets of forces are balanced.</b> Upset the first and you get oedema. Upset the second and you get thrombosis. Fail to perfuse the tissues and you get shock.</p>
 <p><b>Oedema is excess fluid outside the vessels.</b> <b>Starling forces</b> govern it: hydrostatic pressure pushes fluid out of capillaries, plasma proteins (mainly albumin) pull it back through oncotic pressure, and lymphatics return the rest. Four failures cause oedema:</p>
 <ul>
 <li><b>Raised hydrostatic pressure</b>: heart failure, with ankle swelling and, in left-sided failure, breathlessness when lying flat. Sodium and water retention adds to it by expanding plasma volume.</li>
 <li><b>Low oncotic pressure</b>: cirrhosis (albumin not made), nephrotic syndrome (albumin lost).</li>
 <li><b>Lymphatic obstruction</b>: neck dissection, radiotherapy.</li>
 <li><b>Increased permeability</b>: inflammation and anaphylaxis, giving exudate. Lip and tongue <b>angioedema</b> follows histamine in allergy, or bradykinin with ACE inhibitors and hereditary C1 inhibitor deficiency.</li>
 </ul>
 <p><b>Thrombosis is a clot inside a living vessel.</b> <b>Virchow's triad</b> explains it: endothelial injury, abnormal flow (stasis or turbulence) and hypercoagulability. Arterial thrombi form on ruptured atheroma and cause infarcts. Venous thrombi form in slow flow, typically deep leg veins. A thrombus may dissolve, organise and recanalise, propagate or embolise.</p>
 <p><b>An embolus is anything carried by blood until it lodges.</b> Leg vein thrombi travel to the lungs (<b>pulmonary embolism</b>). Clots from a fibrillating left atrium travel to brain and limbs. Infective endocarditis throws <b>septic emboli</b>. Fat, air and amniotic fluid can also embolise. Arterial occlusion without collateral flow causes an <b>infarct</b>: pale in solid organs, red in tissues with a dual supply such as lung. Dental infection can reach the <b>cavernous sinus</b> through facial and ophthalmic veins, or through the pterygoid plexus from posterior maxillary teeth, causing septic thrombosis.</p>
 <p><b>Shock is widespread failure of tissue perfusion</b>, whatever the cause. Cells turn to anaerobic metabolism, lactate accumulates, and untreated shock moves from compensated to progressive to irreversible.</p>
 <div class="tscroll"><table>
 <tr><th>Type</th><th>Mechanism</th><th>Clues</th></tr>
 <tr><td>Hypovolaemic</td><td>Lost volume; low output</td><td>Cold, clammy, rapid weak pulse</td></tr>
 <tr><td>Cardiogenic</td><td>Pump failure; low output</td><td>Cold, chest pain, raised neck veins, lung oedema</td></tr>
 <tr><td>Septic</td><td>Cytokines dilate vessels; vessels leak</td><td>Fever, warm skin early, known infection</td></tr>
 <tr><td>Anaphylactic</td><td>IgE triggers mast cells; vessels dilate and leak</td><td>Minutes after drug or latex: hives, wheeze, swelling</td></tr>
 </table></div>
 <p>Vasovagal syncope is not shock: it is a brief faint with slow pulse that recovers when the patient lies flat. Anaphylaxis is treated first with intramuscular epinephrine, whose alpha effect raises pressure and beta-2 effect opens airways.</p>
 <p><b>Why the exam cares.</b> Stems supply skin temperature, pulse and timing, and ask you to name the type of shock and its first treatment. They also test how infection reaches the cavernous sinus, why atrial fibrillation needs anticoagulation, and why a patient cannot lie flat in the chair.</p>`,
 connect: [
  {to:"m03-n01", why:"Blood pressure is cardiac output times resistance, so each type of shock is identified by which term has failed."},
  {to:"m03-n06", why:"Thrombosis is normal coagulation in the wrong place; Virchow's triad is built on endothelium, platelets and clotting factors."},
  {to:"m13-n03", why:"Anaphylactic shock is the emergency drill here, and its mechanism explains why epinephrine comes first."},
  {to:"m13-n09", why:"Infective endocarditis produces septic emboli from valve vegetations, the reason prophylaxis decisions focus on the highest-risk hearts."},
  {to:"m02-n05", why:"Cavernous sinus thrombosis is venous anatomy turned pathological: infection follows facial and ophthalmic veins backward into the skull."}
 ],
 apply: {
  vignette: "A 34-year-old is given amoxicillin in the dental office. Fifteen minutes later she has generalised hives, wheeze and lip swelling. Her pulse is 128 per minute, weak, and her blood pressure is 74/40 mmHg. Which of the following is the most likely type of shock and mechanism?",
  options: ["Anaphylactic: IgE-triggered mast cell mediators cause vasodilation and capillary leak","Hypovolaemic: loss of blood volume through the skin causes low cardiac output","Cardiogenic: amoxicillin directly depresses the myocardium and causes low cardiac output","Septic: bacterial lysis by amoxicillin releases toxins that cause vasodilation"],
  answer: "Anaphylactic: IgE-triggered mast cell mediators cause vasodilation and capillary leak",
  steps: [
   "The ask: the type of shock and why, so link the timing and skin signs to a mechanism.",
   "Facts that matter: a recognised drug allergen, onset in minutes, hives, bronchospasm, angioedema, tachycardia and hypotension.",
   "Cross out hypovolaemic: no external fluid loss occurred, and that picture is cold and clammy without hives or wheeze.",
   "Cross out cardiogenic: there is no cardiac history or chest pain, and pump failure does not cause hives or lip swelling.",
   "Cross out septic: there is no established severe infection or fever, and sepsis does not develop over fifteen minutes with hives.",
   "The survivor explains everything: IgE on sensitised mast cells triggers release of histamine and other mediators, which produce vasodilation, leak, bronchospasm and hives. First treatment is intramuscular epinephrine and an emergency call."
  ]
 },
 teach: {
  prompt: "Four patients all have a low blood pressure: one lost blood, one has a failing heart, one has a severe spreading infection, one reacted to a drug. Starting from output and resistance, explain why their skin and pulse look different and which one you treat with epinephrine first.",
  model: "Pressure equals cardiac output times resistance. After blood loss and in pump failure, output falls, so the sympathetic system clamps the vessels: skin is cold and clammy with a rapid weak pulse, and the failing heart adds raised neck veins and lung oedema. In sepsis and anaphylaxis output may be preserved at first, but mediators dilate vessels and make them leak, so resistance falls and skin may be warm. Timing and associated signs separate those two: fever and a source for sepsis, minutes after an allergen with hives and wheeze for anaphylaxis. The anaphylactic patient receives intramuscular epinephrine first because it constricts vessels and opens airways."
 },
 cards: [
  ["Four causes of oedema","Raised hydrostatic pressure, low oncotic pressure, lymphatic obstruction, increased permeability"],
  ["Protein responsible for most plasma oncotic pressure","Albumin"],
  ["Allergic vs ACE-inhibitor angioedema","Allergic: histamine, often with hives. ACE inhibitor: bradykinin, typically no hives"],
  ["Virchow's triad","Endothelial injury, abnormal flow, hypercoagulability"],
  ["Most common source of pulmonary emboli","Deep veins of the legs"],
  ["Four fates of a thrombus","Dissolution, organisation with recanalisation, propagation, embolisation"],
  ["White vs red infarct","White: arterial occlusion in solid organs. Red: venous occlusion or dual-supply tissue such as lung"],
  ["Route from upper-face infection to cavernous sinus","Facial and ophthalmic veins, then the sinus"],
  ["Cold vs warm shock","Cold: hypovolaemic, cardiogenic. Warm early: septic and other vasodilatory shock"],
  ["First drug in anaphylaxis, and why","Intramuscular epinephrine: alpha raises pressure, beta-2 opens airways"],
  ["Vasovagal syncope vs shock","Syncope is brief with a slow pulse and recovers on lying flat; shock is sustained hypoperfusion"],
  ["Why late shock becomes irreversible","Lactic acidosis and cell damage lead to organ failure that restoring volume cannot reverse"]
 ],
 questions: [
  ["A 72-year-old with heart failure has bilateral ankle swelling and cannot lie flat in the dental chair. The ankle oedema is due mainly to:","Raised capillary hydrostatic pressure",["Reduced lymphatic capillary number","Increased endothelial permeability","Increased plasma oncotic pressure"],"A failing pump backs blood up into veins and capillaries, forcing fluid out. Increased permeability is the inflammatory mechanism and would produce a protein-rich exudate."],
  ["A 9-year-old with nephrotic syndrome has puffy eyelids and generalised oedema. The most likely mechanism is:","Reduced plasma oncotic pressure from loss of albumin",["Raised capillary permeability from mast cell histamine","Lymphatic obstruction from enlarged cervical nodes","Raised arterial pressure from increased cardiac output"],"Albumin lost in the urine lowers the force holding fluid in capillaries. Histamine would produce hives and rapid swelling rather than persistent generalised oedema."],
  ["A 61-year-old has persistent submental and neck swelling after bilateral neck dissection and radiotherapy for oral cancer. The most likely mechanism is:","Lymphatic obstruction",["Reduced oncotic pressure","Right-sided heart failure","Superior vena cava thrombus"],"Surgery and radiation remove or scar lymphatic channels, so interstitial fluid is not returned. Heart failure would cause dependent oedema rather than localised neck swelling."],
  ["A 63-year-old taking ramipril develops marked lip and tongue swelling without hives or itching. Which of the following best explains this reaction?","Reduced bradykinin breakdown increases vascular permeability",["IgE on mast cells triggers massive histamine release","Raised capillary hydrostatic pressure causes transudation","Lymphatic vessels are blocked by drug-antibody complexes"],"ACE normally degrades bradykinin, so inhibition lets it accumulate. The lack of hives argues against the histaminergic reaction, and this form often responds poorly to antihistamines."],
  ["Virchow's triad consists of:","Endothelial injury, abnormal blood flow and hypercoagulability",["Vasodilation, abnormal blood flow and hypercoagulability","Endothelial injury, vasodilation and hypoalbuminaemia","Abnormal blood flow, hypoalbuminaemia and leukocytosis"],"These three factors predispose to thrombosis, alone or together. Vasodilation and low albumin relate to shock and oedema rather than to thrombus formation."],
  ["Two days after hip surgery a 70-year-old develops sudden breathlessness and pleuritic chest pain. The source of the embolus is most likely:","A thrombus in a deep vein of the leg",["A thrombus in the left atrium of the heart","A fat globule from the mandibular marrow","A vegetation on the aortic valve"],"Stasis and surgery create deep vein thrombi, which travel through the right heart to the lung. A left atrial thrombus travels into the systemic arteries, not the pulmonary circulation."],
  ["A 75-year-old with atrial fibrillation takes apixaban. Which of the following best explains the need for this anticoagulant?","Stasis in the left atrium promotes thrombi that can embolise to the brain",["Rapid flow through the coronary arteries strips their endothelium away","Atrial fibrillation depletes platelets and leaves no primary haemostasis","Thrombi from leg veins pass directly to the brain through the normal lung"],"Ineffective atrial contraction causes stasis, especially in the appendage, and clots travel into the arterial circulation. Without an intracardiac shunt or similar route, leg vein thrombi stop in the lungs."],
  ["A 55-year-old with a prosthetic valve has fever, new petechiae, and a sudden painful cold toe. The arterial occlusion is most likely caused by:","A septic embolus from a valve vegetation",["An air embolus from a dental handpiece","A fat embolus from a long bone","A venous thrombus from the deep leg veins"],"Infected vegetations fragment and enter the systemic arteries. A deep leg vein clot would reach the lungs, not the toe, unless there is a cardiac shunt."],
  ["A 28-year-old with an infected tooth 1.3 develops fever, periorbital oedema, proptosis and lateral gaze palsy. Which of the following is the most likely diagnosis?","Septic cavernous sinus thrombosis",["Ludwig's angina of the submandibular space","Maxillary sinusitis without complications","Superior vena cava obstruction"],"Infection can pass from the upper face along the facial and ophthalmic veins to the sinus, where cranial nerves such as the abducens run. Ludwig's angina affects the floor of the mouth and airway instead of the orbit."],
  ["A 35-year-old has lost about 1.5 L of blood from facial and chest injuries. The skin is cold and clammy, and the pulse is rapid and weak. Which haemodynamic pattern is most likely?","Low cardiac output with high systemic vascular resistance",["High cardiac output with low systemic vascular resistance","Normal cardiac output with low systemic vascular resistance","High cardiac output with high systemic vascular resistance"],"Less venous return lowers output, and sympathetic vasoconstriction attempts to maintain pressure, which is why the skin is cold. High output with low resistance is early septic shock."],
  ["A 44-year-old with a rapidly spreading submandibular infection has a temperature of 39.2 degrees C, warm flushed skin, a bounding rapid pulse and blood pressure of 82/44 mmHg. The most likely diagnosis is:","Septic shock",["Cardiogenic shock","Hypovolaemic shock","Vasovagal syncope"],"Bacterial products induce cytokines that dilate vessels and make them leak, with warm skin early in the course. Vasovagal syncope has a slow pulse and resolves on lying flat."],
  ["Epinephrine is the first drug given in anaphylactic shock because it:","Constricts vessels through alpha receptors and opens airways through beta-2 receptors",["Binds histamine in plasma and neutralises it before it can reach any tissue","Blocks IgE on mast cells and dissolves all antibody-antigen complexes in plasma","Lowers heart rate through beta-1 blockade and allows better cardiac filling"],"Its receptor actions directly reverse vasodilation, leak and bronchospasm. Antihistamines block histamine receptors, but they are too slow and too narrow to be first-line treatment."],
  ["A 67-year-old has crushing chest pain, then cold clammy skin, distended neck veins, lung crackles and a blood pressure of 78/50 mmHg. The most likely type of shock is:","Cardiogenic",["Septic","Anaphylactic","Hypovolaemic"],"A damaged pump cannot clear venous return, so pressure backs up into the neck and lungs. Hypovolaemia also causes cold skin, but neck veins would be flat rather than distended."],
  ["Occlusion of an end artery in a solid organ such as the kidney typically produces:","A pale (white) infarct",["A red infarct from dual supply","A true granuloma with caseation","A bruise with intact parenchyma"],"Without collateral flow, little blood enters the dead tissue, so it looks pale. Red infarcts occur with venous occlusion or in dual-supply tissues such as lung."],
  ["Untreated hypovolaemic shock progresses from compensated to irreversible largely because:","Tissue hypoxia causes lactic acidosis, vasomotor failure and organ cell damage",["Raised oxygen delivery causes free radical injury in every organ from the start","Excess sympathetic tone causes permanent hypertension and rupture of arteries","Increased cardiac output causes the heart to outstrip its coronary blood supply"],"Anaerobic metabolism produces lactate, acidosis blunts vascular responses, and cell injury becomes irreversible. Cardiac output is reduced in hypovolaemia rather than increased."]
 ]
};

window.CONTENT["m05-n05"] = {
 understand: `
 <p><b>A neoplasm is a clone of cells that has escaped the rules of growth.</b> Hyperplasia stops when its stimulus stops; a neoplasm continues. The name usually tells you the cell of origin and whether it behaves.</p>
 <div class="tscroll"><table>
 <tr><th>Origin</th><th>Benign</th><th>Malignant</th></tr>
 <tr><td>Squamous epithelium</td><td>Papilloma</td><td>Squamous cell carcinoma</td></tr>
 <tr><td>Glandular epithelium</td><td>Adenoma</td><td>Adenocarcinoma</td></tr>
 <tr><td>Fibrous tissue</td><td>Fibroma</td><td>Fibrosarcoma</td></tr>
 <tr><td>Bone</td><td>Osteoma</td><td>Osteosarcoma</td></tr>
 </table></div>
 <p>So <b>carcinoma</b> is malignant epithelium and <b>sarcoma</b> is malignant mesenchyme. Some names break the rule: <b>melanoma</b> and <b>lymphoma</b> are malignant despite "-oma". Two lookalikes are traditionally not counted as true neoplasms: a <b>hamartoma</b> is a disorganised overgrowth of local tissue, the usual classification of an odontoma, and a <b>choristoma</b> is normal tissue in the wrong place.</p>
 <p><b>Behaviour separates benign from malignant.</b> Benign tumours are usually slow, well differentiated, expansile and often encapsulated. Malignant tumours grow faster, may show <b>anaplasia</b> (lost differentiation), invade and can metastasise. <b>Metastasis is the one unequivocal sign of malignancy.</b> Carcinomas favour lymphatics; sarcomas favour blood. Oral squamous cell carcinoma usually spreads first to submandibular and upper deep cervical nodes. Dentistry supplies exceptions: <b>ameloblastoma</b> is benign yet locally invasive, <b>pleomorphic adenoma</b> is benign yet recurs if shelled out through its incomplete capsule, and basal cell carcinoma is malignant yet rarely metastasises.</p>
 <p><b>Grade and stage answer different questions.</b> <b>Grade</b> is how differentiated the cells look. <b>Stage</b> is how far the tumour has spread, and it usually predicts outcome better. <b>TNM</b> records Tumour size and extent, regional Nodes and distant Metastasis. For oral cavity cancer the AJCC eighth edition combines greatest dimension with <b>depth of invasion (DOI)</b>. T1 is up to 2 cm with DOI up to 5 mm. T2 is up to 2 cm with DOI over 5 and up to 10 mm, or over 2 and up to 4 cm with DOI up to 10 mm. T3 is over 4 cm with DOI up to 10 mm, or up to 4 cm with DOI over 10 mm. T4a is over 4 cm with DOI over 10 mm, or invasion of adjacent structures such as through the cortical bone of the jaw. N1 is one ipsilateral node up to 3 cm without extranodal extension.</p>
 <p><b>Carcinogenesis is accumulated DNA damage.</b> Key gene classes are <b>oncogenes</b> (accelerators activated by mutation or amplification, such as RAS or EGFR), <b>tumour suppressors</b> (brakes that usually lose both copies, such as TP53 and RB), apoptosis regulators and DNA repair genes. Cells then acquire limitless division through telomerase, recruit vessels through VEGF, evade immunity, and cross the basement membrane to invade.</p>
 <p><b>Oral carcinogens.</b></p>
 <ul>
 <li><b>Tobacco</b>: nitrosamines and polycyclic hydrocarbons form DNA adducts.</li>
 <li><b>Alcohol</b>: acetaldehyde damages DNA, and ethanol helps tobacco carcinogens penetrate mucosa, so the two multiply risk.</li>
 <li><b>Areca nut</b>: oral submucous fibrosis and carcinoma.</li>
 <li><b>Ultraviolet light</b>: pyrimidine dimers, lower lip.</li>
 <li><b>HPV-16</b>: E6 degrades p53 and E7 inactivates RB, driving mainly oropharyngeal cancer.</li>
 </ul>
 <p>Because the whole mucosa is exposed, patients may develop multiple primaries: <b>field cancerisation</b>.</p>
 <p><b>Why the exam cares.</b> Expect a naming question, a "which is most reliable sign of malignancy" question, a grade versus stage trap, and a risk-factor stem. Dentists find these lesions early, so stage at detection is partly in your hands.</p>`,
 connect: [
  {to:"m10-n02", why:"Oral potentially malignant disorders and squamous cell carcinoma apply this node's carcinogens, dysplasia and invasion to the mucosa you examine."},
  {to:"m01-n05", why:"Oncogenes, tumour suppressors and DNA repair are molecular genetics; TP53 and RB are the exam's core examples."},
  {to:"m10-n06", why:"Ameloblastoma and odontoma test the limits of the benign, malignant and hamartoma vocabulary."},
  {to:"m10-n08", why:"Pleomorphic adenoma and mucoepidermoid carcinoma show how salivary tumours are named and why capsule status affects surgery."},
  {to:"m02-n07", why:"Lymphatic spread predicts staging: knowing where each oral site drains tells you which neck nodes to palpate."}
 ],
 apply: {
  vignette: "A 67-year-old who smokes and drinks daily has an indurated 2.5 cm ulcer on the lateral border of the tongue, present for two months. Biopsy shows atypical squamous cells with keratin pearls forming islands in the connective tissue beneath the epithelium. Which of the following findings establishes that this is invasive carcinoma rather than carcinoma in situ?",
  options: ["Atypical cells beyond the basement membrane","Hyperchromatic nuclei in the basal layer","Increased mitotic figures in the epithelium","Loss of polarity across the full epithelial thickness"],
  answer: "Atypical cells beyond the basement membrane",
  steps: [
   "The ask: the single feature that divides invasive carcinoma from carcinoma in situ.",
   "Facts that matter: a high-risk patient, an indurated persistent ulcer, and epithelial islands within the connective tissue.",
   "Cross out hyperchromatic nuclei: this is a cytological feature found in dysplasia as well as in carcinoma.",
   "Cross out increased mitoses: proliferation occurs in dysplasia, in carcinoma in situ and in some reactive lesions, so it does not establish invasion.",
   "Cross out full-thickness loss of polarity: this defines carcinoma in situ, and it does not by itself indicate invasion.",
   "The survivor explains everything: a basement membrane breach gives cells access to connective tissue, vessels and lymphatics, which is the point where metastasis becomes possible."
  ]
 },
 teach: {
  prompt: "A patient asks why smoking, drinking and one virus can all cause mouth or throat cancer when they seem unrelated. Explain the shared final pathway, and separately explain why two equally differentiated tumours can have very different prognoses.",
  model: "All three end by disabling the genes that control cell growth and repair. Tobacco chemicals and acetaldehyde from alcohol damage DNA directly, and alcohol also helps tobacco carcinogens enter the mucosa, while HPV-16 makes proteins that disable p53 and RB rather than mutating them. Once the brakes fail and the accelerators are stuck on, cells accumulate more damage, then invade through the basement membrane and may spread. Differentiation is grade, which describes how the cells look. Prognosis depends more on stage: a well-differentiated tumour with neck metastases has a worse outlook than a similar one confined to a small area."
 },
 cards: [
  ["Carcinoma vs sarcoma","Carcinoma: malignant epithelium. Sarcoma: malignant mesenchyme"],
  ["Malignant despite the name","Melanoma, lymphoma"],
  ["Hamartoma vs choristoma","Hamartoma: disorganised local tissue. Choristoma: normal tissue in the wrong place"],
  ["Only unequivocal sign of malignancy","Metastasis"],
  ["Usual spread: carcinoma vs sarcoma","Carcinoma by lymphatics; sarcoma by blood"],
  ["First nodes for oral squamous cell carcinoma","Submandibular and upper deep cervical (jugulodigastric region)"],
  ["Grade vs stage","Grade: differentiation. Stage: extent of spread (TNM); usually better predicts outcome"],
  ["Meaning of TNM","Tumour size and extent, regional Nodes, distant Metastasis"],
  ["Oncogene vs tumour suppressor","Oncogene: gain of function. Tumour suppressor: both copies usually lost"],
  ["HPV-16 oncoproteins","E6 degrades p53; E7 inactivates RB"],
  ["Viruses with named tumours","EBV: nasopharyngeal carcinoma, Burkitt lymphoma. HHV-8: Kaposi sarcoma"],
  ["Field cancerisation","Carcinogen exposure of the whole mucosa, leading to multiple primary tumours"]
 ],
 questions: [
  ["A malignant neoplasm arising from fibrous connective tissue is called a:","Fibrosarcoma",["Fibroma","Fibrocarcinoma","Fibroadenoma"],"Malignant mesenchymal tumours take the suffix -sarcoma. Carcinoma refers to epithelial origin, so fibrocarcinoma is not a valid term for this tumour."],
  ["Which of the following is malignant despite the name ending only in -oma?","Melanoma",["Papilloma","Lipoma","Adenoma"],"Melanoma and lymphoma are the classic naming exceptions and are malignant. Papilloma, lipoma and adenoma are benign, following the usual rule."],
  ["A complex odontoma in a 14-year-old is generally regarded as a:","Hamartoma",["Choristoma","Sarcoma","Metastasis"],"An odontoma is a disorganised mass of tissues normally found at that site, and its growth is limited. A choristoma would be normal tissue located where it does not belong."],
  ["Which of the following features establishes with certainty that a tumour is malignant?","Metastasis to a distant site",["Rapid increase in tumour size","Numerous mitotic figures","Absence of a fibrous capsule"],"Only malignant tumours metastasise. Rapid growth, mitoses and lack of a capsule are suggestive, but benign tumours can show them too."],
  ["A 62-year-old with squamous cell carcinoma of the lateral tongue is examined for spread. Which route of spread and nodal group is most likely first?","Lymphatics to submandibular and upper deep cervical nodes",["Bloodstream to the liver and lung via the jugular vein","Direct spread along nerves through the skull base","Bloodstream to the femoral bone marrow"],"Carcinomas favour lymphatic spread to regional nodes, so the neck should be palpated at each examination. Bloodstream spread occurs later and is the favoured early route of sarcomas."],
  ["A 38-year-old has a parotid tumour enucleated. It recurs as multiple nodules. Histology of both shows epithelial and myxoid stroma components. The most likely explanation for recurrence is that:","Tumour projections through an incomplete capsule were left behind",["The benign tumour had undergone rapid lymphatic metastasis at surgery","Enucleation stimulated new tumours from normal salivary gland cells","The patient was re-exposed to an oncogenic virus after surgery"],"Pleomorphic adenoma has an incomplete capsule with extensions into surrounding tissue, so surgeons excise it with a margin. It is benign, so lymphatic metastasis is not the explanation."],
  ["A 35-year-old has a multilocular radiolucency in the posterior mandible; biopsy confirms conventional ameloblastoma. Its behaviour is best described as:","Benign but locally invasive, often recurring after enucleation",["Benign and encapsulated, with no tendency for recurrence","Malignant and rapidly fatal through early lung metastases","Malignant with early spread to the regional lymph nodes"],"Ameloblastoma infiltrates cancellous bone beyond its radiographic edge, which is why enucleation alone often fails. Metastasis is rare, and conventional ameloblastoma is classified as benign."],
  ["Which statement best distinguishes grade from stage in malignant tumours?","Grade describes differentiation, and stage describes extent of spread",["Grade describes tumour size, and stage describes differentiation","Grade describes nodal spread, and stage describes mitotic rate","Grade and stage are two terms for the same clinical measurement"],"Grade comes from microscopy and stage from clinical, imaging and pathological extent. Stage is usually the better predictor of prognosis."],
  ["A 3 cm squamous cell carcinoma of the tongue has a depth of invasion of 6 mm, a single 2 cm ipsilateral node without extranodal extension, and no distant metastasis. The TNM description is most likely:","T2 N1 M0",["T1 N0 M0","T3 N2 M0","T4 N3 M1"],"Under the AJCC eighth edition, tumours over 2 cm and up to 4 cm with depth up to 10 mm are T2, and one ipsilateral node up to 3 cm without extranodal extension is N1. T1 N0 is wrong on both counts: T1 needs a tumour of 2 cm or less with depth up to 5 mm, and N0 means no involved node."],
  ["The tumour suppressor protein p53 responds to DNA damage by:","Arresting the cell cycle and triggering apoptosis if damage persists",["Activating telomerase and extending the replicative lifespan of cells","Promoting angiogenesis and recruiting new blood supply to damaged tissue","Stimulating growth factor receptors and accelerating the cell cycle"],"p53 halts division so repair can occur, and if repair fails it directs the cell toward apoptosis. Losing it allows damaged cells to divide. The other options describe processes that favour tumours."],
  ["A 52-year-old non-smoker has a mass at the base of the tongue. Biopsy shows squamous cell carcinoma with strong p16 staining. The virus involved promotes cancer mainly through:","Inactivation of p53 and RB by its E6 and E7 proteins",["Insertion of a viral RAS gene into nuclear DNA","Destruction of CD4 T cells in the regional nodes","Induction of pyrimidine dimers in the basal layer"],"High-risk HPV uses E6 to degrade p53 and E7 to inactivate RB, and p16 rises as a marker of RB loss. Pyrimidine dimers are ultraviolet damage rather than a viral mechanism."],
  ["A 58-year-old has used smokeless tobacco in the mandibular vestibule for decades. Which of the following carcinogens is most directly implicated?","Tobacco-specific nitrosamines",["Aflatoxins","Vinyl chloride from plastic packaging","Asbestos fibres"],"Nitrosamines in tobacco form DNA adducts at the site of contact. Aflatoxin is a liver carcinogen, and asbestos is linked to mesothelioma and lung cancer."],
  ["A 65-year-old farmer has a crusted, indurated ulcer on the lower lip vermilion. The most likely causal agent is:","Ultraviolet B radiation producing pyrimidine dimers",["Ionising radiation producing double-stranded DNA breaks","HPV-16 producing the E6 and E7 proteins","Areca nut producing submucosal fibrosis"],"Lower lip cancer tracks chronic sun exposure, as the lower lip receives more direct sunlight than the upper. Ionising radiation is not the typical cause in an outdoor worker."],
  ["Which of the following best explains why heavy alcohol use and smoking together raise oral cancer risk more than either alone?","Ethanol raises mucosal permeability to tobacco carcinogens, and acetaldehyde adds DNA damage",["Alcohol neutralises tobacco carcinogens but exposes the mucosa to more ultraviolet light","Tobacco increases alcohol's antiseptic action, killing the protective oral microbiota","Smoking removes acetaldehyde from saliva, which transfers its toxicity to the salivary glands"],"The interaction is multiplicative because alcohol helps carcinogens enter and adds its own genotoxic metabolite. Alcohol does not neutralise tobacco carcinogens."],
  ["A 40-year-old who chews betel quid daily has trismus and blanched fibrous bands in the buccal mucosa. The condition is most strongly linked to which agent?","Areca nut",["Human herpesvirus 8","Sun exposure","Mercury vapour"],"Areca alkaloids stimulate fibroblast collagen production, producing oral submucous fibrosis, a potentially malignant disorder. Human herpesvirus 8 causes Kaposi sarcoma."]
 ]
};

window.CONTENT["m05-n06"] = {
 understand: `
 <p><b>The mouth is attached to a person.</b> Medical disease changes dentistry in predictable ways, so ask the same five questions about any condition. (1) Can the patient <b>tolerate stress and positioning</b>? (2) Will they <b>bleed</b>? (3) Will they <b>get infected or heal badly</b>? (4) Will <b>drugs behave differently</b>? (5) What will show <b>in the mouth</b>? Pathology provides the reason for each answer.</p>
 <div class="tscroll"><table>
 <tr><th>Condition</th><th>Why it matters at the chair</th></tr>
 <tr><td>Hypertension, ischaemic disease, heart failure</td><td>Stress raises cardiac work; angina or collapse in the chair; failing hearts cannot lie flat; vasoconstrictor dose needs thought</td></tr>
 <tr><td>Prosthetic valve, previous endocarditis</td><td>Prophylaxis decisions (AHA 2021); septic emboli</td></tr>
 <tr><td>Atrial fibrillation, stents, clots</td><td>Anticoagulants and antiplatelets; usually continued with local haemostasis</td></tr>
 <tr><td>Asthma, COPD</td><td>Bronchospasm with stress or NSAIDs; COPD treated upright</td></tr>
 <tr><td>Diabetes</td><td>Hypoglycaemia in the chair; infection, poor healing, periodontitis</td></tr>
 <tr><td>Long-term steroids, thyroid disease</td><td>Adrenal suppression, poor healing; thyroid storm or myxoedema in severe uncontrolled disease</td></tr>
 <tr><td>Liver disease</td><td>Fewer clotting factors and platelets; slower drug metabolism</td></tr>
 <tr><td>Kidney disease, dialysis</td><td>Reduced drug excretion; avoid NSAIDs; heparin; protect fistula arm</td></tr>
 <tr><td>Haemophilia, von Willebrand disease, low platelets</td><td>Bleeding after surgery and deep blocks; coordinate replacement therapy</td></tr>
 <tr><td>Leukaemia, chemotherapy, transplant, HIV</td><td>Oral signs may come first; infection, mucositis, bleeding; candidiasis</td></tr>
 <tr><td>Head and neck radiotherapy, antiresorptives</td><td>Osteoradionecrosis, dry mouth, caries; MRONJ</td></tr>
 <tr><td>Epilepsy, stroke, Parkinson disease, dementia</td><td>Seizures; phenytoin overgrowth; swallowing risk; capacity and consent</td></tr>
 <tr><td>Pregnancy</td><td>Supine hypotension late in pregnancy; drug choice; pregnancy gingivitis</td></tr>
 <tr><td>Sjogren syndrome, Crohn disease, coeliac disease, reflux</td><td>Dry mouth and caries; mucosal cobblestoning; enamel defects and aphthae; erosion</td></tr>
 </table></div>
 <p><b>Three mechanisms explain most of this table.</b> <b>Reduced reserve</b>: a failing heart, lung or adrenal gland manages at rest but not under stress, so treatment is kept short, calm and well anaesthetised. <b>Altered haemostasis</b>: bleeding reflects platelets (count or function), clotting factors, or both, and the screening test depends on which is affected. INR monitors warfarin, aPTT reflects factor VIII and IX, and platelet count must be requested separately. <b>Altered clearance</b>: the liver metabolises amide local anaesthetics and many sedatives, while the kidney excretes NSAID metabolites and many antibiotics.</p>
 <p><b>Medications are often the clue.</b> A patient who says they are healthy may list metformin, warfarin, levothyroxine or zoledronate. Each drug reveals a disease, and it can create its own oral problem: xerostomia, gingival overgrowth, candidiasis, lichenoid reaction or osteonecrosis.</p>
 <p><b>The dentist may diagnose first.</b> Spontaneous gingival bleeding with enlargement in a tired teenager suggests leukaemia. Sudden severe candidiasis in a young adult suggests immunosuppression. A smooth sore tongue suggests a haematinic deficiency. Refer promptly and order or request appropriate tests.</p>
 <p><b>Why the exam cares.</b> Medical histories appear across every discipline. Stems give one line of history, and the right answer usually asks what changes today: postpone, consult, modify a drug or proceed with local measures. This node is a map; module m13 teaches the protocols.</p>`,
 connect: [
  {to:"m13-n01", why:"ASA classification and vital signs turn this map into an actual decision: treat, modify or defer."},
  {to:"m13-n05", why:"Hypertension, ischaemic disease and anticoagulation are the commonest medical modifications to dental care in adults."},
  {to:"m13-n07", why:"Bleeding disorders, liver disease and renal disease share altered haemostasis and drug clearance, covered as chair-side protocols there."},
  {to:"m10-n10", why:"Oral signs of systemic disease allow the dentist to suspect leukaemia, HIV, anaemia or Crohn disease first."},
  {to:"m13-n10", why:"Cancer therapy, transplant and immunosuppression concentrate the infection, bleeding and healing risks in a single patient."}
 ],
 apply: {
  vignette: "A 72-year-old with atrial fibrillation takes warfarin and needs extraction of tooth 3.6. There is no other bleeding history. His physician confirms the indication for anticoagulation remains. Which of the following is the most appropriate plan?",
  options: ["Obtain a recent INR and extract with local haemostasis if it is within the acceptable range","Stop warfarin for five days without medical advice and then extract the tooth","Switch warfarin to aspirin for one week and extract without any INR check","Defer the extraction until warfarin is no longer required by the patient"],
  answer: "Obtain a recent INR and extract with local haemostasis if it is within the acceptable range",
  steps: [
   "The ask: the most appropriate plan for extraction in an anticoagulated patient.",
   "Facts that matter: a single simple extraction, a continuing need for warfarin, and an INR that can be measured.",
   "Cross out stopping warfarin: stroke from thromboembolism is a catastrophic risk, whereas local bleeding is usually controllable.",
   "Cross out switching to aspirin: this does not provide equivalent stroke protection, and the dentist should not change the regimen alone.",
   "Cross out indefinite deferral: warfarin is lifelong for many patients, so waiting leaves the tooth untreated without reducing risk.",
   "The survivor fits the guidance: check an INR close to the appointment (ideally within 24 hours, within 72 hours if stable), and if it is at or below the usual North American limit of 3.5, extract with sutures and a local haemostatic agent. Above the limit, defer and contact the prescriber. Avoid drugs that raise the INR or add a bleeding risk."
  ]
 },
 teach: {
  prompt: "Pick one patient on dialysis and one with cirrhosis needing the same extraction. Using the five questions, explain why each may bleed, why their drug choices differ, and what you would ask their physician.",
  model: "Both may bleed, for different reasons. The dialysis patient has uraemic platelet dysfunction and receives heparin during dialysis, so extraction is best planned for the day after dialysis. The patient with cirrhosis makes fewer clotting factors and may have a low platelet count because of hypersplenism, so an INR and platelet count are requested. Drug handling also differs: the kidney patient clears many drugs slowly and should avoid NSAIDs, while the liver patient metabolises amide anaesthetics, sedatives and acetaminophen more slowly. I would ask each physician about current disease severity, recent laboratory values and medications, and infection risk."
 },
 cards: [
  ["The five questions for any medical condition","Tolerate stress? Bleed? Infection or poor healing? Drugs behave differently? Oral signs?"],
  ["Patient on a high-dose or long-term steroid","Possible adrenal suppression and poor healing; plan with the physician for major surgery"],
  ["Best day for dental treatment on haemodialysis","The day after dialysis: heparin has cleared and the patient is in the best metabolic state"],
  ["Tests by bleeding problem","Warfarin: INR. Haemophilia A or B: aPTT prolonged. Thrombocytopenia: platelet count"],
  ["Elective care with blood pressure at or above 180/110 mmHg","Defer elective treatment and refer to a physician. Some references defer elective care earlier, at 160/100"],
  ["INR commonly accepted for simple extraction","At or below 3.5 (usual North American limit), with local haemostasis. UK guidance accepts below 4"],
  ["Who needs endocarditis prophylaxis (AHA 2021)?","Prosthetic valves, previous endocarditis, specified congenital heart disease, transplant valvulopathy"],
  ["Asthma and aspirin","Some patients develop bronchospasm because cyclo-oxygenase inhibition shunts arachidonate to leukotrienes"],
  ["Pregnancy positioning late in the third trimester","Tilt to the left to relieve pressure on the inferior vena cava"],
  ["Oral signs suggesting acute leukaemia","Spontaneous gingival bleeding, gingival enlargement, ulcers, petechiae, with fatigue and fever"],
  ["Drugs that carry MRONJ risk","Antiresorptives such as bisphosphonates or denosumab, particularly high cancer doses"],
  ["Why cirrhosis causes bleeding","Reduced clotting factor synthesis and thrombocytopenia from hypersplenism"]
 ],
 questions: [
  ["A 48-year-old has taken prednisone for several years for lupus. A dentist planning major oral surgery should anticipate which of the following complications?","Acute adrenal insufficiency with hypotension under major stress",["Hypercalcaemia with widespread metastatic calcification of tissues","Thyroid storm caused by long-term corticosteroid exposure","Severe hypertension caused by abrupt adrenal overproduction"],"Long-term steroid use suppresses the hypothalamic-pituitary-adrenal axis, so major stress can reveal adrenal insufficiency. Routine dentistry usually needs no extra steroid, but major surgery requires planning with the physician."],
  ["A 56-year-old with alcoholic cirrhosis needs multiple extractions. Which of the following best explains the bleeding risk?","Reduced clotting factor synthesis and thrombocytopenia",["Excess vitamin K carboxylation and thrombocytosis","Increased antithrombin causing hypercoagulation","Selective loss of factor VIII alone from hepatocytes"],"The liver makes most clotting factors, and portal hypertension causes hypersplenism with low platelets. Factor VIII is not selectively lost; it is usually preserved because endothelial cells produce it."],
  ["A 64-year-old undergoes haemodialysis on Monday, Wednesday and Friday. The most appropriate day for elective extraction is:","Tuesday, the day after dialysis",["Monday, immediately before dialysis","Wednesday, immediately after dialysis","Friday, during the dialysis session"],"By the day after dialysis, heparin has cleared and uraemia and fluid balance are at their best. Immediately after dialysis, residual heparin increases the risk of bleeding."],
  ["A 62-year-old with chronic kidney disease requests ibuprofen after extraction. Which of the following best explains why NSAIDs are usually avoided?","They reduce prostaglandin-dependent renal blood flow",["They directly crystallise inside the proximal tubules","They increase glomerular filtration above safe limits","They stimulate renin to cause sustained salt wasting"],"Damaged kidneys depend on prostaglandins to keep the afferent arteriole open, so cyclo-oxygenase inhibition can reduce filtration further. Filtration falls rather than rises."],
  ["A 19-year-old with haemophilia A needs a mandibular block and extraction. Which set of laboratory results is most likely?","Prolonged aPTT with normal PT and normal platelet count",["Prolonged PT with normal aPTT and low platelet count","Normal aPTT with normal PT and low platelet count","Prolonged PT with prolonged aPTT and high platelet count"],"Factor VIII lies in the intrinsic pathway, which aPTT measures. PT tests the extrinsic pathway, which haemophilia A leaves intact."],
  ["A 41-year-old with nasal polyps and asthma developed wheeze after a dose of ibuprofen. Which of the following best explains this reaction?","Cyclo-oxygenase inhibition diverts arachidonate into leukotriene synthesis",["IgE against ibuprofen releases histamine in every affected patient","Ibuprofen directly blocks beta-2 receptors on bronchial muscle","Prostaglandin excess after ibuprofen narrows the bronchial lumen"],"Aspirin-exacerbated respiratory disease reflects shunted leukotriene production and cross-reacts between NSAIDs. It is not a classic IgE allergy, and prostaglandin output falls rather than rises."],
  ["A 70-year-old with severe COPD becomes breathless when reclined. Which adaptation is most appropriate for restorative treatment?","Seating the patient semi-upright",["Reclining the patient fully supine","Treating under deep opioid sedation","Using a high-flow oxygen rate throughout"],"Upright positioning eases the work of breathing. Opioid sedation depresses respiration, and high-flow oxygen can worsen carbon dioxide retention in some COPD patients."],
  ["A 34-year-old at 37 weeks' gestation becomes pale, dizzy and hypotensive while lying flat in the dental chair. The most appropriate immediate action is to:","Turn her onto her left side",["Elevate her legs while supine","Give sublingual nitroglycerin","Give intramuscular epinephrine"],"The gravid uterus compresses the inferior vena cava and reduces venous return; a left tilt relieves it. Raising the legs in the supine position leaves that compression in place."],
  ["A 63-year-old on intravenous zoledronate for breast cancer metastases to bone has a non-restorable tooth 3.6. The complication most relevant to extraction planning is:","Medication-related osteonecrosis of the jaw",["Metastatic calcification of the salivary glands","Osteoradionecrosis of the mandible","Severe gingival overgrowth around the socket"],"High-potency antiresorptives at cancer doses suppress bone turnover and carry the highest MRONJ risk. Osteoradionecrosis requires previous radiotherapy to the area, which is not in the history."],
  ["A 17-year-old presents with fatigue, fever, skin petechiae and spontaneously bleeding, enlarged gingivae despite modest plaque. The most appropriate next step is:","Urgent complete blood count with medical referral",["Scaling and gingivectomy of the enlarged gingivae","Prescribing chlorhexidine with review in three months","Prescribing amoxicillin and repeating the examination in a week"],"This picture suggests acute leukaemia, and surgery could cause serious bleeding. Local periodontal measures alone would delay a life-threatening diagnosis."],
  ["A 27-year-old has pseudomembranous candidiasis and corrugated white patches on the lateral tongue that cannot be wiped off. There is no recent antibiotic or steroid use. The most likely underlying condition is:","HIV infection with immunosuppression",["Vitamin C deficiency with scurvy","Uncontrolled systemic hypertension","Iron deficiency with koilonychia"],"Unexplained candidiasis with hairy leukoplakia, an Epstein-Barr virus lesion, strongly suggests immunosuppression and warrants testing and referral. Iron deficiency may predispose to candidiasis but does not explain hairy leukoplakia."],
  ["An asymptomatic 58-year-old attends for elective restorations with a confirmed blood pressure of 190/115 mmHg. The most appropriate action is to:","Defer elective treatment and refer to a physician",["Proceed and use a larger dose of vasoconstrictor","Proceed after giving sublingual nitroglycerin","Give an antihypertensive and treat immediately"],"A confirmed reading at or above 180/110 mmHg warrants deferring elective care and medical assessment; references differ only on whether to defer earlier, at 160/100. Treating and lowering pressure acutely in the dental office is not the dentist's role."],
  ["A 39-year-old with untreated Graves disease has tremor, weight loss, exophthalmos and a resting pulse of 124 per minute. The most appropriate decision for elective dental care is to:","Postpone until the thyroid disease is medically controlled",["Proceed and add extra epinephrine to deepen anaesthesia","Proceed after a single oral dose of levothyroxine","Provide treatment under deep sedation without medical input"],"Uncontrolled thyrotoxicosis raises the risk of arrhythmia and thyroid storm under stress or infection. Levothyroxine is a treatment for hypothyroidism and would worsen this patient."],
  ["A 52-year-old with type 2 diabetes has an HbA1c of 9.1% and needs periodontal surgery. Which of the following best explains why control should be discussed before surgery?","Chronic hyperglycaemia raises infection risk and impairs wound healing",["High HbA1c shows that the patient has hypoglycaemia at this moment","High HbA1c shows that amide anaesthetics will not work in the tissue","High HbA1c shows that the patient is allergic to bone-graft material"],"HbA1c reflects glycaemia over about 2 to 3 months, and poor control impairs neutrophil function and healing. It does not report the current glucose level, which needs a separate reading to check for hypoglycaemia."],
  ["Under AHA 2021 guidance, which patient is most likely to need antibiotic prophylaxis before an extraction?","A 68-year-old with a mechanical mitral valve",["A 54-year-old with a recent coronary stent","A 70-year-old with a prosthetic hip joint","A 28-year-old with mitral valve prolapse without valve repair"],"Prosthetic valves are among the highest-risk conditions for adverse outcomes from endocarditis. Coronary stents, joint replacements and mitral valve prolapse alone are not indications under this guidance."]
 ]
};
