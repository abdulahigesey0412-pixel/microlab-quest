/* Module m04: Microbiology & immunology. Nodes n01 to n06 are built from the Avicenna lectures (data in micro-data.js)
   with the learning layer written here. Nodes n07 to n12 are mapped but not yet built. */
window.CONTENT = window.CONTENT || {};

window.CONTENT["m04-n01"] = {
 topics: ["gen","var"],
 understand: `
 <p><b>A bacterium is a cell with one chromosome and, often, extra bits of DNA it can trade.</b> The chromosome is the core recipe. <b>Plasmids</b> are small circular DNA rings that copy themselves separately and can be passed to other bacteria. <b>Transposons</b> are DNA segments that cut and paste themselves between chromosome and plasmid. <b>Bacteriophages</b> are viruses that inject DNA into bacteria and can leave some behind.</p>
 <p><b>Why this matters clinically: resistance and virulence travel.</b> A gene for a penicillin-destroying enzyme (β-lactamase) on a plasmid can move from one species to another in a single step. That is why resistance appears in a population far faster than mutation alone could explain.</p>
 <p><b>Three ways DNA moves between bacteria</b>, each named for its vehicle:</p>
 <ul><li><b>Conjugation</b>: cell-to-cell contact through a sex pilus, driven by F plasmids. Think "direct handover".</li>
 <li><b>Transformation</b>: a dying cell spills naked DNA and a neighbour picks it up. Think "scavenging".</li>
 <li><b>Transduction</b>: a phage carries DNA from one host to the next. Think "courier".</li></ul>
 <p><b>Phages have two life plans.</b> In the <b>lytic</b> cycle they multiply and burst the cell. In the <b>lysogenic</b> cycle they splice their DNA into the chromosome as a <b>prophage</b> and ride along quietly. A prophage can carry a toxin gene: <i>Corynebacterium diphtheriae</i> only makes diphtheria toxin when lysogenised. The same idea explains why some strains of a species are dangerous and others harmless.</p>
 <p><b>Variation</b> is any change in what the bacterium looks like or does. <b>Phenotypic</b> change is a response to the environment and reverses when conditions change (loss of flagella in phenol, L-forms without walls). <b>Genotypic</b> change is in the DNA, is inherited, and comes from mutation (replication error, or induced by radiation and chemicals) or from the three transfer routes above.</p>`,
 connect: [
  {to:"m04-n02", why:"β-lactamase genes on R plasmids are the main reason penicillins fail against staphylococci. Mechanism of transfer meets mechanism of drug."},
  {to:"m04-n06", why:"Diphtheria toxin exists only because of a prophage. Lysogenic conversion is the whole story of that disease."},
  {to:"m04-n03", why:"Exotoxins are coded on plasmids or phages; endotoxin is chromosomal. The genetics predicts the toxin table."},
  {to:"m01-n05", why:"Plasmids, transposons and mutation are the bacterial version of the DNA replication and repair you meet in cell biology."}
 ],
 apply: {
  vignette: "A hospital reports that a strain of Staphylococcus aureus previously sensitive to penicillin now produces β-lactamase. Genetic analysis shows the same resistance gene in an unrelated Enterococcus species on the same ward. The most likely mechanism for the appearance of this resistance is:",
  options: ["Spontaneous point mutation in each species","Transfer of an R plasmid","Phenotypic adaptation to the antibiotic","Lysogenic conversion by a bacteriophage"],
  answer: "Transfer of an R plasmid",
  steps: [
   "The ask: the mechanism of resistance appearing in two unrelated species.",
   "Key facts: identical gene, two different genera, same location and time. Something moved between them.",
   "Independent mutation would not produce the same gene in both; phenotypic adaptation is not heritable and does not create an enzyme gene.",
   "Lysogenic conversion carries toxin genes via phages and phages are usually species-specific, so cross-genus spread of a resistance gene points elsewhere.",
   "R plasmids carry resistance genes and move by conjugation, including across genera. That explains every finding."
  ]
 },
 teach: {
  prompt: "Explain the three gene-transfer routes with one everyday analogy each, and why lysogeny matters for diphtheria.",
  model: "Conjugation is a direct handover through a sex pilus (F plasmid). Transformation is scavenging DNA a dead cell left behind. Transduction is a courier: a phage carries DNA between hosts. In lysogeny the phage DNA sits in the chromosome as a prophage; the diphtheria toxin gene lives on such a prophage, so only lysogenised strains cause disease."
 }
};

window.CONTENT["m04-n02"] = {
 topics: ["mech","use","comp"],
 understand: `
 <p><b>An antibiotic works by hitting something bacteria have and we do not, or have differently.</b> That difference is called <b>selective toxicity</b>, and the size of the difference predicts side effects.</p>
 <ul>
 <li><b>Cell wall</b> (penicillins, cephalosporins): human cells have no wall, so these are bactericidal and gentle on tissues. Their weakness is allergy and β-lactamase.</li>
 <li><b>Cell membrane</b> (polymyxins): all cells have membranes, so selectivity is poor and toxicity high.</li>
 <li><b>Ribosome</b> (aminoglycosides, tetracyclines): bacterial ribosomes are 70S, ours 80S. Selective but not perfect, hence ear, kidney and tooth effects.</li>
 <li><b>DNA</b> (ciprofloxacin blocks DNA gyrase; metronidazole breaks DNA, mainly in anaerobes).</li></ul>
 <p><b>Bactericidal vs bacteriostatic.</b> Killing (cidal) is preferred when the host cannot help: immunocompromised patients, endocarditis. Static drugs rely on the immune system to finish the job.</p>
 <p><b>Broad vs narrow.</b> Broad spectrum hits Gram-positive and Gram-negative. It sounds better and is usually worse: it disturbs normal flora (superinfection with <i>Candida</i> or <i>Clostridioides difficile</i>, long called <i>Clostridium difficile</i>) and breeds resistance. The ideal antibiotic is narrow, cidal, selective, easy to take, reaches the site of infection, is unlikely to cause allergy, and is safe in children and pregnancy. No real drug meets the whole list, so it is a yardstick for comparing drugs rather than a description of any one of them.</p>
 <p><b>How to decide in dentistry.</b> Most dental infections come from oral flora, which is mostly Gram-positive and anaerobic and still largely penicillin-sensitive. So penicillin V or amoxicillin is first-line for pulpal and periapical infection; metronidazole is added for anaerobes. In true penicillin allergy, azithromycin, clarithromycin or cephalexin is used; clindamycin still appears as a treatment alternative but carries a higher risk of <i>C. difficile</i> colitis, and it is <b>no longer an endocarditis-prophylaxis option</b>. Antibiotics are an adjunct to drainage and removal of the cause, never a replacement.</p>
 <p><b>Empiric therapy</b> is a best guess before culture results. It is justified for severe or spreading infection, but specimens are taken first when possible. <b>Chemoprophylaxis</b> is a dose before the event. The dental one is <b>amoxicillin 2 g, 30 to 60 minutes before</b> procedures that manipulate gingival tissue or the periapical region or perforate the oral mucosa, and under <b>AHA 2021</b> it is limited to four highest-risk groups: a prosthetic valve or prosthetic valve-repair material, previous infective endocarditis, specified congenital heart disease, and a cardiac transplant with valvulopathy. A murmur, valve prolapse or a coronary stent is <b>not</b> an indication. Other examples: rifampin for close contacts of meningococcal disease, and long-term penicillin to prevent recurrent pharyngitis after rheumatic fever.</p>
 <p><b>The four complications</b>: toxicity (tetracycline stains developing teeth; streptomycin deafens; aminoglycosides harm kidneys; chloramphenicol suppresses marrow), allergy (penicillin: urticaria to anaphylaxis; topical sulphonamides: contact dermatitis), resistance (bred by low dose, short course, no indication, wrong choice), and superinfection.</p>`,
 connect: [
  {to:"m11-n05", why:"This is the biology under the dental prescribing node: which drug, what dose, how long, and when not to prescribe at all."},
  {to:"m13-n09", why:"Chemoprophylaxis for endocarditis is the AHA 2021 regimen: amoxicillin 2 g, highest-risk hearts only."},
  {to:"m04-n01", why:"Resistance spreads on R plasmids by conjugation. Abuse of antibiotics selects the cells that carry them."},
  {to:"m21-n04", why:"Odontogenic infection is treated by drainage first; the antibiotic choice here is the adjunct."},
  {to:"m04-n09", why:"Superinfection with Candida after broad-spectrum antibiotics is the common dental example of flora disturbance."}
 ],
 apply: {
  vignette: "A 30-year-old with no medical history has a localised periapical abscess of tooth 2.6 with mild facial swelling and a temperature of 38.4 °C. The tooth has been opened and drainage established. Which antibiotic is most appropriate as an adjunct?",
  options: ["Penicillin V","Tetracycline","Ciprofloxacin","Chloramphenicol"],
  answer: "Penicillin V",
  steps: [
   "The ask: an adjunct antibiotic after drainage, in a patient with systemic signs (fever), so an antibiotic is justified.",
   "Source is pulpal: oral flora, mostly Gram-positive and anaerobic, largely penicillin-sensitive.",
   "Tetracycline is bacteriostatic and broad, with tooth and bone effects; ciprofloxacin targets Gram-negatives and is not first-line for odontogenic infection; chloramphenicol carries marrow toxicity and is reserved for life-threatening infections.",
   "Penicillin V is narrow, bactericidal, cheap and matches the organisms of a pulpal infection, which is why it remains first-line in Canadian dental practice."
  ]
 },
 teach: {
  prompt: "For each of the four antibiotic targets, name the drug class, say why it is or is not selective, and give the characteristic side effect.",
  model: "Cell wall: penicillins and cephalosporins, highly selective because we have no wall, side effect allergy. Membrane: polymyxins, poorly selective, toxic. Ribosome: aminoglycosides (nephro- and ototoxic) and tetracyclines (tooth staining), selective because 70S vs 80S. DNA: ciprofloxacin via gyrase, metronidazole by breaking DNA."
 }
};

window.CONTENT["m04-n03"] = {
 topics: ["tox"],
 understand: `
 <p><b>Two kinds of bacterial poison, with opposite personalities.</b></p>
 <p><b>Exotoxins</b> are proteins a living bacterium secretes on purpose. They are coded on plasmids or phages, so they can appear and disappear between strains. Each one does a specific job: tetanospasmin locks muscles, diphtheria toxin kills heart and nerve cells, staphylococcal enterotoxin causes vomiting. Because they are proteins they are heat-labile, strongly antigenic, and can be chemically tamed into a <b>toxoid</b> that keeps the shape but loses the harm. That is what the tetanus and diphtheria vaccines are.</p>
 <p><b>Endotoxin</b> is not secreted at all. It is lipopolysaccharide (LPS), part of the outer membrane of Gram-negative bacteria, released when the cell breaks apart. Its active part is lipid A. It is heat-stable, weakly antigenic, cannot be made into a toxoid, and does the same thing whatever the species: fever, inflammation, and in large amounts septic shock. Periodontal pathogens are Gram-negative, so LPS is a central player in periodontitis.</p>
 <p><b>How to remember the table</b>: exo = protein, specific, potent, vaccine-able. Endo = LPS, generic, less potent per molecule, no vaccine.</p>`,
 connect: [
  {to:"m04-n06", why:"Tetanus and diphtheria are the textbook exotoxin diseases, and their vaccines are toxoids."},
  {to:"m19-n02", why:"LPS from Gram-negative periodontal bacteria drives the host inflammation that destroys bone in periodontitis."},
  {to:"m04-n11", why:"Toxoid vaccines work because exotoxins are strongly antigenic; the adaptive immune response is the mechanism."},
  {to:"m05-n02", why:"Endotoxin triggers the cytokine cascade (fever, vasodilation) that you will study as acute inflammation."}
 ],
 apply: {
  vignette: "A vaccine is prepared by treating a purified bacterial product with formalin so that it loses toxicity but keeps its antigenic structure. The product used must be:",
  options: ["A protein exotoxin","Lipopolysaccharide","Lipid A","Peptidoglycan"],
  answer: "A protein exotoxin",
  steps: [
   "The ask: what kind of toxin can be made into a toxoid.",
   "Toxoid preparation keeps antigenicity and removes toxicity, which requires a strongly antigenic protein.",
   "LPS and lipid A are endotoxin: heat-stable, poorly antigenic, cannot be converted. Peptidoglycan is cell wall, not a toxin.",
   "Only exotoxins (tetanus, diphtheria) qualify. That is exactly how those vaccines are made."
  ]
 },
 teach: {
  prompt: "Explain exotoxin vs endotoxin to a first-year student using tetanus and periodontitis as the two examples.",
  model: "Tetanus toxin is an exotoxin: a specific protein secreted by living Clostridium tetani, coded on a plasmid, so potent and antigenic that we vaccinate with its toxoid. Periodontal bacteria are Gram-negative; when they break down they release endotoxin (LPS), which is not specific, triggers general inflammation and bone loss, and cannot be vaccinated against."
 }
};

window.CONTENT["m04-n04"] = {
 topics: ["ss","aur","cons"],
 understand: `
 <p><b>Staphylococci are the tough, local, skin-living cocci.</b> They sit in grape-like clusters, make catalase (which splits hydrogen peroxide, so a drop of peroxide bubbles), grow happily on plain nutrient agar, survive drying and salt, and tend to make <b>localised, walled-off</b> infections: boils, abscesses. Compare streptococci, which are delicate, catalase-negative, and spread.</p>
 <p><b>One test splits the genus: coagulase.</b> <i>S. aureus</i> clots plasma (coagulase-positive) and is the dangerous one. The coagulase-negative species are skin flora that cause trouble only when a foreign body gives them a surface: <i>S. epidermidis</i> on catheters, valves, joints and pacemakers; <i>S. saprophyticus</i> in the urinary tract of young women.</p>
 <p><b><i>S. aureus</i> is dangerous because it carries a toolkit.</b> Toxins: hemolysins and leucocidins kill blood cells; enterotoxins A to E survive heat and acid and cause food poisoning hours after eating; TSST-1, historically called enterotoxin F, causes toxic shock by acting as a superantigen; exfoliative toxins peel the skin of young children (scalded skin syndrome). Enzymes: coagulase walls the infection off, hyaluronidase and staphylokinase let it spread, β-lactamase destroys penicillin. Surface: protein A and clumping factor block phagocytosis; the slime layer sticks to implants and hides the organism from immune cells.</p>
 <p><b>Diseases follow the toolkit.</b> Non-invasive (food poisoning), cutaneous (impetigo, folliculitis, furuncles, abscess, scalded skin), systemic (toxic shock, bacteraemia, endocarditis, pneumonia, osteomyelitis).</p>
 <p><b>Lab identification in one line</b>: Gram-positive clusters, catalase-positive, coagulase-positive, golden colonies, beta-haemolysis, ferments mannitol.</p>`,
 connect: [
  {to:"m04-n05", why:"The catalase test is the fork between staph and strep; everything downstream depends on it."},
  {to:"m04-n02", why:"β-lactamase on R plasmids is why many S. aureus strains resist penicillin; methicillin resistance (MRSA) is the next step."},
  {to:"m04-n03", why:"Enterotoxin, TSST and exfoliative toxin are all exotoxins: specific, protein, potent."},
  {to:"m18-n03", why:"S. epidermidis biofilm on implant surfaces is the model for peri-implant and prosthetic infection."},
  {to:"m10-n09", why:"Impetigo and angular cheilitis questions in oral pathology often have S. aureus as the organism."}
 ],
 apply: {
  vignette: "A 68-year-old with a prosthetic hip replaced two years ago develops a low-grade infection of the joint. Culture grows Gram-positive cocci in clusters that are catalase-positive and coagulase-negative. The most likely organism is:",
  options: ["Staphylococcus epidermidis","Staphylococcus aureus","A viridans group streptococcus","Enterococcus faecalis"],
  answer: "Staphylococcus epidermidis",
  steps: [
   "The ask: the organism.",
   "Clusters and catalase-positive put us in Staphylococcus; streptococci and enterococci are catalase-negative and in chains.",
   "Coagulase-negative removes S. aureus.",
   "A prosthetic device is the classic setting: S. epidermidis forms a slime layer on artificial surfaces. S. saprophyticus would be a urinary story in a young woman."
  ]
 },
 teach: {
  prompt: "Walk through the lab identification of a Gram-positive coccus from plate to species, naming the test at each fork.",
  model: "Gram stain shows Gram-positive cocci. Arrangement: clusters suggest Staphylococcus, chains suggest Streptococcus. Catalase: positive confirms Staphylococcus. Coagulase: positive is S. aureus (also golden pigment, beta-haemolysis, mannitol fermentation); negative is a coagulase-negative staph, S. epidermidis (devices) or S. saprophyticus (UTI in young women)."
 }
};

window.CONTENT["m04-n05"] = {
 topics: ["scl","gas","gbs","vir"],
 understand: `
 <p><b>Streptococci are the delicate, spreading cocci in chains.</b> Catalase-negative, fussy about food (they need blood agar and extra CO₂), killed by drying, and still mostly penicillin-sensitive. They are the most important bacteria in dentistry because the mouth is full of them.</p>
 <p><b>Sort them by what they do to blood agar.</b> <b>Alpha</b> haemolysis is partial, leaving a green ring: viridans streptococci and <i>S. pneumoniae</i>. <b>Beta</b> is complete clearing: these get sorted further by the Lancefield carbohydrate antigen, lettered A to V with I and J never assigned, so 20 groups. <b>Gamma</b> is no haemolysis: enterococci. The anaerobic cousins are the peptostreptococci.</p>
 <p><b>Group A, <i>S. pyogenes</i></b>: strep throat, tonsillitis, scarlet fever (pyrogenic exotoxin: rash, strawberry tongue), impetigo, erysipelas, cellulitis, necrotising fasciitis. Its M protein resists phagocytosis; streptokinase and hyaluronidase let it spread. Two late immune complications: <b>rheumatic fever, which follows pharyngitis only</b>, and <b>post-streptococcal glomerulonephritis, which follows a skin infection or a pharyngitis</b> (skin infection is the classic antecedent). Lab: bacitracin-sensitive, ASO titre rises.</p>
 <p><b>Group B, <i>S. agalactiae</i></b>: lives in the gut and vagina, infects newborns (meningitis, sepsis) and mothers after birth. Bacitracin-resistant, CAMP-positive.</p>
 <p><b><i>S. pneumoniae</i></b>: capsulated diplococci, alpha. Otitis media and sinusitis most often, then pneumonia and meningitis.</p>
 <p><b>Viridans streptococci</b> (<i>S. mutans</i>, <i>S. sanguinis</i>, <i>S. mitis</i> and others): no Lancefield group, and alpha-haemolytic, so a green zone of haemoglobin breakdown forms in the agar around the colony. They are the dominant mouth flora. They cause <b>dental caries</b> and, when they reach the bloodstream during dental procedures, <b>infective endocarditis</b> on damaged valves. With peptostreptococci they are the usual organisms of pulpitis.</p>
 <p><b>Enterococci</b> (<i>E. faecalis</i>, <i>E. faecium</i>): gut flora, gamma, tough and disinfectant-resistant. <i>E. faecalis</i> tolerates high pH and intracanal medicaments, and it is the species <b>most often recovered from root-filled teeth with persistent periapical disease</b>. It is one important contributor to endodontic failure rather than its single cause: missed canals, incomplete cleaning and a leaking coronal seal matter at least as much.</p>`,
 connect: [
  {to:"m08-n01", why:"S. mutans is the keystone caries organism: acid production in biofilm is the mechanism of decay."},
  {to:"m13-n09", why:"Viridans bacteraemia during dental work is why endocarditis prophylaxis exists; amoxicillin 2 g targets exactly these organisms."},
  {to:"m20-n08", why:"E. faecalis in the root canal is the organism of persistent periapical disease and retreatment."},
  {to:"m04-n04", why:"Catalase separates streptococci from staphylococci; chains vs clusters is the microscope version of the same fork."},
  {to:"m05-n02", why:"Rheumatic fever and glomerulonephritis are immune-mediated sequelae, not direct infection: the organism is gone when the damage happens."}
 ],
 apply: {
  vignette: "A 9-year-old had a sore throat three weeks ago, treated with no antibiotics. She now has fever, migrating joint pain and a new heart murmur. Throat culture is negative; ASO titre is raised. The most likely diagnosis is:",
  options: ["Acute rheumatic fever","Infective endocarditis","Scarlet fever","Acute glomerulonephritis"],
  answer: "Acute rheumatic fever",
  steps: [
   "The ask: the diagnosis of a post-pharyngitis illness.",
   "Timing: three weeks after a sore throat, culture now negative, antibody (ASO) raised. That is an immune sequela, not active infection.",
   "Scarlet fever is during the infection, with rash and strawberry tongue: timing wrong. Glomerulonephritis follows skin infection and presents with haematuria and oedema, not joints and murmur.",
   "Endocarditis would need a bacteraemia on a damaged valve; here the valve damage is the result, not the cause.",
   "Rheumatic fever: pharyngitis, then weeks later fever, polyarthritis and carditis. This is also why penicillin prophylaxis is given to prevent recurrent pharyngitis in such patients."
  ]
 },
 teach: {
  prompt: "Explain why a dentist must know viridans streptococci, enterococci and group A streptococci, with one disease and one practical consequence for each.",
  model: "Viridans: cause caries and, via bacteraemia from dental procedures, endocarditis on damaged valves, hence amoxicillin prophylaxis for highest-risk hearts. E. faecalis: survives in root canals and is the organism most often recovered when treatment fails, hence attention to disinfection, canal location and coronal seal. Group A: strep throat and scarlet fever, with rheumatic fever as a late complication, hence penicillin prophylaxis in patients with past rheumatic fever."
 }
};

window.CONTENT["m04-n06"] = {
 topics: ["bac","cor","clo"],
 understand: `
 <p><b>Gram-positive rods sort by two questions: do they need oxygen, and do they make spores?</b> Aerobic spore-former: <i>Bacillus</i>. Aerobic non-sporing: <i>Lactobacillus</i>, <i>Corynebacterium</i>. Anaerobic spore-former: <i>Clostridium</i>. Anaerobic non-sporing: <i>Actinomyces</i>. Spores are why anthrax and tetanus come from soil and survive for years.</p>
 <p><b><i>Bacillus anthracis</i></b> causes anthrax from animal products. Its capsule plus two toxins (lethal toxin causes necrosis, oedema toxin causes swelling) produce the painless black skin pustule, or, when inhaled, the haemorrhagic mediastinitis of wool-sorter's disease. It is a bioterrorism agent.</p>
 <p><b><i>Lactobacillus</i></b> is a harmless commensal with one dental twist: it makes a lot of acid and tolerates acid (acidogenic and aciduric), so it thrives inside established caries and drives the advanced lesion into dentine.</p>
 <p><b><i>Corynebacterium diphtheriae</i></b>: slender pleomorphic rods in Chinese-character clumps. It never invades; it sits in the throat under a pseudomembrane and releases an A-B exotoxin (only in phage-lysogenised strains) that travels to heart, muscle and nerves. The membrane can suffocate; the toxin can paralyse. Treatment is antitoxin first and early, because antitoxin neutralises only toxin that has not yet entered cells, then penicillin or erythromycin to clear the organism. Prevention is the diphtheria <b>toxoid</b> inside a DTaP-containing combination vaccine: in Canada at 2, 4, 6 and 18 months, a booster at 4 to 6 years and Tdap in adolescence, with the exact product and timing set provincially.</p>
 <p><b><i>Clostridium</i></b>: anaerobic spore-formers from soil and gut. <i>C. perfringens</i> causes gas gangrene through alpha toxin (a lecithinase that dissolves cell membranes) plus collagenase and DNase that liquefy tissue. <i>C. tetani</i> causes tetanus through tetanospasmin, a plasmid-coded neurotoxin that blocks the release of glycine and GABA from inhibitory interneurons. Removing inhibition is why the paralysis is spastic rather than flaccid: lock jaw, spasms, and death from spasm of the respiratory muscles. <i>Clostridioides difficile</i> (from the antibiotic node) causes pseudomembranous colitis.</p>
 <p><b>Actinomycetes</b> grow as branching filaments and look like fungi but are bacteria: Gram-positive type wall, no nucleus or mitochondria, killed by antibacterials not antifungals. They are normal mouth flora that invade after caries, extractions or trauma, producing cervicofacial actinomycosis: a hard swelling of the jaw with draining sinuses and yellow sulphur granules in the pus.</p>`,
 connect: [
  {to:"m04-n01", why:"Diphtheria toxin exists only in lysogenised strains: the prophage carries the gene."},
  {to:"m04-n03", why:"Tetanospasmin, diphtheria toxin and alpha toxin are exotoxins; tetanus and diphtheria vaccines are toxoids."},
  {to:"m08-n01", why:"Lactobacilli take over the deep carious lesion; S. mutans starts it. Together they explain the progression of caries."},
  {to:"m21-n04", why:"Actinomycosis belongs in the differential of a chronic jaw swelling with sinus tracts after an extraction."},
  {to:"m21-n06", why:"A dirty wound from trauma raises the question of tetanus immunisation status."}
 ],
 apply: {
  vignette: "A 45-year-old presents six weeks after extraction of tooth 3.7 with a firm, slowly enlarging swelling over the angle of the mandible and two draining skin sinuses. The pus contains small yellow granules. The most likely diagnosis is:",
  options: ["Cervicofacial actinomycosis","Osteomyelitis due to Staphylococcus aureus","Cutaneous anthrax","Gas gangrene"],
  answer: "Cervicofacial actinomycosis",
  steps: [
   "The ask: the diagnosis.",
   "Facts: chronic (six weeks), firm, after a dental extraction, multiple sinuses, yellow granules.",
   "Anthrax gives a black painless pustule after animal contact; gas gangrene is acute, crepitant and necrotic within days; staphylococcal osteomyelitis is possible but does not produce sulphur granules.",
   "Sulphur granules plus a post-extraction chronic sinus is actinomycosis. Treatment is prolonged penicillin with drainage."
  ]
 },
 teach: {
  prompt: "Sort the five Gram-positive rod genera by oxygen need and spore formation, then give each one's single most examinable fact.",
  model: "Aerobic spore-former Bacillus (anthrax: painless black pustule, two toxins plus capsule). Aerobic non-sporing Lactobacillus (acidogenic and aciduric, advanced caries) and Corynebacterium (diphtheria: phage-coded A-B toxin that blocks elongation factor 2, pseudomembrane, antitoxin early). Anaerobic spore-former Clostridium (perfringens gas gangrene by alpha toxin; tetani spastic paralysis by plasmid-coded tetanospasmin). Anaerobic non-sporing Actinomyces (sulphur granules, endogenous, after extraction)."
 }
};
