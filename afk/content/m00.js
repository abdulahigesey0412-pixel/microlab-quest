/* Module m00: How the AFK thinks. Written for a learner starting from zero. */
window.CONTENT = window.CONTENT || {};

window.CONTENT["m00-n01"] = {
 understand: `
 <p><b>Every AFK question is a single-answer multiple-choice item.</b> There are 200 of them, delivered in two parts on one day, with two hours for each part. Each question is worth one mark and there is no penalty for a wrong answer. The protocol tells you to select the <i>most likely</i> or <i>most appropriate</i> answer. That wording matters: more than one option may be partly true, and you are being asked to rank them.</p>
 <p><b>The score is not a percentage.</b> NDEB uses test equating and re-scaling to keep the standard consistent between sittings. You pass with a re-scaled score of 75 or higher, which is not the same as 75% correct. The AFK can be taken a maximum of three times.</p>
 <p><b>The blueprint tells you where the marks are.</b> Applied Biomedical Sciences is the largest area at 20 ± 5% of questions, then Restorative, Prosthodontics and Implants (16 ± 5), Oral Medicine, Pathology and Radiology (15 ± 5), and Pharmacology, Local Anesthesia and Medical Emergencies (14 ± 5). The other five areas are 8 ± 5 or less each.</p>
 <p><b>A clinical stem is built in layers.</b> It gives (1) a person: age, sometimes sex and medical history; (2) a finding: symptom, sign, radiograph or test result; (3) the ask. Each layer removes options. A 7-year-old rules out answers that need a tooth that has not erupted yet. "Painless" makes most acute infections less likely.</p>
 <p><b>Distractors are built from real confusions.</b> The wrong options are usually the thing a tired candidate mixes up with the right one: the drug with a similar name, the lesion that looks the same, the tooth next door. So the skill is not "spot the right answer". It is "say why each wrong one is wrong".</p>
 <p><b>Items come from the KSAs.</b> They are developed from the 47 Knowledge, Skills and Abilities for a beginning dental practitioner in Canada. A KSA like "manage dental emergencies" can produce a question that gives a scene and asks what you would do. Other items are direct recall, so you need both.</p>
 <p><b>Elimination routine</b> (use it on every item until it is automatic):</p>
 <ol><li>Read the last sentence first. Know what is being asked before you read the story.</li>
 <li>Pick out the facts that change the answer: usually age, timing, and the one abnormal finding.</li>
 <li>Cross out any option that contradicts one of those facts.</li>
 <li>Between the survivors, prefer the option that explains <i>all</i> the findings, and the least invasive management that is still correct.</li>
 <li>Answer every question. Wrong and blank both score zero, so a guess cannot cost you. On a four-option item a blind guess has a one-in-four chance, and each option you eliminate improves it.</li></ol>`,
 connect: [
  {to:"m00-n02", why:"The stem names teeth in FDI notation. If 4.6 does not instantly mean lower-right first molar, you lose time on every item."},
  {to:"m00-n03", why:"'Most appropriate' is judged against the guidelines NDEB references. The same clinical scene can have a different best answer under another country's rules."},
  {to:"m00-n04", why:"The elimination routine is a skill, so it goes through the same study loop as any topic: practise, review errors, repeat."}
 ],
 apply: {
  vignette: "A 24-year-old presents with a two-day history of a painful, swollen lower right face. Tooth 4.6 has a large carious lesion and is tender to percussion. There is a fluctuant swelling in the buccal vestibule. Temperature is 37.4 °C, mouth opening is normal and there is no difficulty swallowing. What is the most appropriate first step in management?",
  options: ["Prescribe amoxicillin and review in one week.","Establish drainage and manage the source tooth.","Prescribe ibuprofen and review in one week.","Refer for incision under general anaesthesia."],
  answer: "Establish drainage and manage the source tooth.",
  steps: [
   "Ask first: the last sentence wants the FIRST step in management, not the diagnosis.",
   "Facts that matter: fluctuant swelling (pus is collecting), a clear source tooth (4.6), and a patient who is systemically well (temperature near normal, normal mouth opening, normal swallowing).",
   "Cross out antibiotics alone: a fluctuant abscess needs drainage, and antibiotics penetrate a pus collection poorly. Cross out analgesics alone for the same reason: they relieve pain but leave the pus and its source in place.",
   "Cross out general anaesthesia referral: no airway threat, no trismus, no fever, localised swelling. That is escalation without indication.",
   "The survivor explains and treats everything: drain the pus and remove the cause (root canal treatment or extraction). Antibiotics are an adjunct, for systemic involvement or spread."
  ]
 },
 teach: {
  prompt: "In your own words: what is the five-step elimination routine, and why does the exam ask for the 'most appropriate' answer rather than a 'correct' one?",
  model: "Read the ask first; pick out age, timing and the one abnormal finding; cross out options that contradict them; among survivors pick the one explaining all findings with the least invasive correct management; always answer. 'Most appropriate' is used because several options can be partly true, so the exam is testing judgement between plausible choices, not recognition of a single fact."
 },
 cards: [
  ["How many questions, how long, and what is the pass mark?","200 single-answer MCQs, two 2-hour parts in one day, test-equated re-scaled score of 75 or higher"],
  ["Is an AFK score of 75 the same as 75% correct?","No. 75 is a test-equated, re-scaled score"],
  ["Maximum number of AFK attempts","Three"],
  ["Largest area on the AFK blueprint","Applied Biomedical Sciences, 20 ± 5%"],
  ["Is there negative marking on the AFK?","No. Wrong and blank both score zero, so always answer"],
  ["What are AFK items developed from?","The 47 KSAs for a beginning dental practitioner in Canada"],
  ["What does 'manage' assume in the KSAs?","The least invasive therapy necessary for a successful outcome, in accordance with patient wishes"],
  ["First thing to read in a long stem?","The last sentence: the actual question"],
  ["Three facts that most often change the answer","Age, timing (acute vs chronic), the one abnormal finding"],
  ["Tie-break between two plausible management options","The one that explains all findings and is least invasive while still correct"]
 ],
 questions: [
  ["On the AFK, a question left blank scores:","Zero, like a wrong answer",["Minus one quarter mark, to deter guessing","Minus one mark","Half a mark, as partial credit"],"There is no penalty for incorrect answers and the lowest score for any question is zero, so a negative mark is impossible. Always answer."],
  ["AFK questions are developed from:","KSAs for a beginning dental practitioner in Canada",["The textbooks of one Canadian faculty of dentistry","The US National Board blueprint for licensure","Questions submitted by recent candidates"],"The 2026 protocol states that items are developed based on the KSAs. The reference texts are drawn from many Canadian faculties, not one."],
  ["Which of the following best describes the AFK passing standard?","A minimum test-equated, re-scaled score of 75",["At least 75% of the questions answered correctly","A place in the top 75% of candidates at that sitting","A raw score of at least 120 out of 200"],"Raw scores are correlated to a reference examination and to a standardized passing score of 75. The number looks like a percentage, but it is a re-scaled score, so 75% correct is not the standard."],
  ["A candidate has failed the AFK on two attempts. The number of further attempts allowed is:","One",["None","Two","Unlimited after a waiting period"],"The AFK can be taken a maximum of three times, so two attempts leave one more."],
  ["According to the 2026 blueprint, which of the following content areas has the largest stated share of AFK questions?","Applied Biomedical Sciences",["Restorative, Prosthodontics, Implants","Oral Medicine/Oral Pathology, Oral Radiology","Pharmacology & Therapeutics, Local Anesthesia, Medical Emergencies"],"Applied Biomedical Sciences is listed at 20 ± 5%. Restorative, Prosthodontics and Implants is second at 16 ± 5%."],
  ["The AFK allows two hours for each of its two parts, for 200 questions in total. The average time available per question is closest to:","72 seconds",["30 seconds","2 minutes","4 minutes"],"Four hours is 240 minutes, and 240 divided by 200 is 1.2 minutes, or 72 seconds. Two minutes would need 400 minutes of writing time."],
  ["Two management options in a stem would both resolve a patient's problem. According to the KSA definition of 'manage', the better option is the one that:","Is the least invasive therapy that gains a successful outcome",["Removes every possible future risk, even if more invasive","Costs the patient the least, whatever the outcome","Appears first among the acceptable options"],"The KSA document says 'manage' assumes the least invasive therapy necessary to gain a successful outcome in accordance with patient wishes. Removing all future risk is not the standard if it means more treatment than the outcome needs."],
  ["Under the elimination routine in this module, the first move on a long clinical vignette is to:","Read the final question sentence first",["Compare the lengths of the four options","Note the patient's age and medical history","Skip to the next question"],"Knowing the ask tells you which details in the story matter. Age is one of those details, but you cannot weigh it until you know what is being asked."],
  ["A distractor on a well-written single-answer item is usually:","A plausible option built from a common confusion",["An obviously absurd option with no clinical link","A trick based on a spelling difference","The longest option on the list"],"Distractors mirror real mistakes, which is why explaining why each wrong option is wrong is the skill to train. Length and spelling do not signal anything reliable."],
  ["A candidate has narrowed an item to two options and is still unsure, with little time left in the part. The most appropriate action is to:","Select one of the two remaining options",["Leave the item blank to avoid losing a mark","Select an option that was already eliminated","Leave the item blank so that it is excluded from the score"],"Incorrect answers carry no penalty and the protocol says to always answer. A blank scores zero, so it can never beat a guess."],
  ["A stem describes a 5-year-old with a normal eruption history. Which of the following options can be eliminated on age alone?","Extraction of tooth 1.7",["Pulpotomy of tooth 5.4","Stainless steel crown on tooth 7.5","Fluoride varnish on tooth 6.1"],"Tooth 1.7 is a permanent second molar, which does not erupt until about 12 years of age. The other three are primary teeth, which a 5-year-old is expected to have."],
  ["A 30-year-old reports pain from tooth 3.6 when drinking cold water. The pain lasts several minutes after the cold is removed. The tooth has a large restoration and is not tender to percussion. Which detail best separates irreversible from reversible pulpitis in this stem?","Pain lasting minutes after the cold is removed",["Pain being triggered by drinking cold water","Absence of tenderness to percussion","Presence of a large existing restoration"],"Lingering thermal pain is an AAE descriptor of symptomatic irreversible pulpitis. A cold trigger alone occurs in both conditions, so it does not separate them."],
  ["A 22-year-old has an active, non-cavitated white-spot lesion on the buccal surface of tooth 1.6. There are no symptoms. The most appropriate management is:","Topical fluoride and hygiene instruction, with review",["Composite restoration after excavating the whole lesion","Amalgam restoration after removing the lesion","Full-coverage crown to protect the surface"],"ICCMS manages initial active lesions with non-operative care, which also fits the least-invasive rule. A restoration removes tooth structure that can still be preserved."]
 ]
};

window.CONTENT["m00-n02"] = {
 understand: `
 <p><b>The exam uses the FDI two-digit system.</b> The first digit is the quadrant, the second is the tooth counted from the midline.</p>
 <div class="tscroll"><table><tr><th>Quadrant digit</th><th>Permanent</th><th>Primary</th></tr>
 <tr><td>Upper right</td><td>1</td><td>5</td></tr><tr><td>Upper left</td><td>2</td><td>6</td></tr><tr><td>Lower left</td><td>3</td><td>7</td></tr><tr><td>Lower right</td><td>4</td><td>8</td></tr></table></div>
 <p>Second digit, permanent: 1 central incisor, 2 lateral incisor, 3 canine, 4 first premolar, 5 second premolar, 6 first molar, 7 second molar, 8 third molar. Primary: 1 central, 2 lateral, 3 canine, 4 first molar, 5 second molar (no premolars in the primary dentition, and no number above 5).</p>
 <p>So <b>1.6</b> is the upper right first molar, <b>3.4</b> is the lower left first premolar, <b>5.5</b> is the upper right primary second molar, <b>8.1</b> is the lower right primary central incisor. Quadrants run clockwise from the patient's upper right as you face them. Right and left are always the patient's.</p>
 <p>Referral letters from the United States may use the Universal system. The protocol prints a conversion chart: Universal 3 is 1.6, 14 is 2.6, 19 is 3.6 and 30 is 4.6.</p>
 <p><b>Vocabulary that stems assume.</b> Mesial = toward the midline along the arch; distal = away from it. Buccal/labial = toward cheek or lip; lingual (lower) and palatal (upper) = toward the tongue or palate. Occlusal = biting surface of posterior teeth; incisal = edge of anterior teeth. Cervical = at the neck of the tooth; apical = toward the root tip; coronal = toward the crown. Proximal = the surface facing a neighbouring tooth. Interproximal = between two teeth.</p>
 <p><b>Timing words carry diagnoses.</b> Acute = sudden onset, usually over days. Chronic = weeks to months. Spontaneous pain = pain without a trigger. Lingering = pain that continues after the stimulus is removed. The AAE lists both as descriptors of symptomatic irreversible pulpitis. Pain on biting or percussion usually means inflammation has reached the apical periodontium, which the AAE calls symptomatic apical periodontitis.</p>
 <p><b>Mixed dentition</b> = both primary and permanent teeth present, roughly ages 6 to 12. The first permanent teeth to erupt are usually the first molars (about 6 to 7 years) and the mandibular central incisors. The first molar erupts behind the primary teeth, without replacing any of them.</p>`,
 connect: [
  {to:"m07-n01", why:"Numbering is only useful once each number calls up a shape: 1.3 is a canine with one long root and a cingulum."},
  {to:"m06-n08", why:"Eruption dates tell you which FDI numbers to expect at a given age. A 4-year-old is not expected to have a 1.6 yet."},
  {to:"m20-n01", why:"Words like 'spontaneous' and 'lingering' map directly onto the pulp diagnosis categories you will learn in endodontics."}
 ],
 apply: {
  vignette: "A parent reports that their 8-year-old child has 'a loose tooth at the back on the lower left'. On examination the mobile tooth is the second tooth distal to the lower left primary canine, with a permanent molar erupted behind it. Which tooth is mobile?",
  options: ["3.5","7.5","3.6","7.4"],
  answer: "7.5",
  steps: [
   "Age 8 means mixed dentition: primary molars are still present and the permanent first molar (3.6) has erupted behind them.",
   "Lower left quadrant: permanent digit 3, primary digit 7.",
   "Second tooth distal to the canine in the primary arch is the second primary molar: digit 5.",
   "3.5 would be the permanent second premolar, which normally erupts at about 11 to 12 years, so it is not in the mouth at 8. 7.4 is the first primary molar, one tooth too close to the canine. 3.6 is the erupted permanent molar behind.",
   "So the mobile tooth is 7.5, the lower left second primary molar, which is normally shed at about 10 to 12 years. Mobility at 8 is early, so the next questions are why it is loose and whether space will need to be maintained."
  ]
 },
 teach: {
  prompt: "Explain the FDI system to someone who has never seen it, and decode 2.3, 4.7 and 6.4.",
  model: "Two digits: quadrant then tooth from the midline. Quadrants 1 to 4 run clockwise from the patient's upper right for permanent teeth, 5 to 8 for primary. 2.3 = upper left permanent canine. 4.7 = lower right permanent second molar. 6.4 = upper left primary first molar."
 },
 cards: [
  ["FDI quadrant digits, permanent","1 upper right, 2 upper left, 3 lower left, 4 lower right"],
  ["FDI quadrant digits, primary","5 upper right, 6 upper left, 7 lower left, 8 lower right"],
  ["Highest second digit in a primary quadrant","5: there is no primary tooth numbered 6, 7 or 8"],
  ["Tooth 1.6","Upper right permanent first molar"],
  ["Tooth 8.2","Lower right primary lateral incisor"],
  ["Universal 30 in FDI","4.6"],
  ["Mesial vs distal","Toward the midline vs away from it, along the arch"],
  ["Which surfaces touch at the midline, 1.1 and 2.1?","Mesial against mesial"],
  ["Lingering pain suggests","Symptomatic irreversible pulpitis: pain continues after the stimulus is removed"],
  ["Percussion tenderness usually means","Inflammation has reached the apical periodontium"],
  ["Mixed dentition age range","About 6 to 12 years"]
 ],
 questions: [
  ["In the FDI system, tooth 4.6 is the:","Lower right permanent first molar",["Lower left permanent first molar","Upper right permanent first molar","Lower right primary first molar"],"Quadrant 4 is lower right, permanent; tooth 6 is the first molar. The lower left would be quadrant 3."],
  ["Which FDI number denotes a primary tooth?","6.5",["2.5","4.5","3.8"],"Quadrants 5 to 8 are primary. 6.5 is the upper left second primary molar, while 2.5 is the permanent second premolar in the same area."],
  ["Tooth 3.4 is the:","Lower left first premolar",["Lower left first molar","Upper left first premolar","Lower left primary first molar"],"Quadrant 3 is lower left permanent; tooth 4 is the first premolar. The primary first molar in this quadrant is 7.4."],
  ["Tooth 7.4 is the:","Lower left primary first molar",["Lower left permanent first premolar","Upper left primary first molar","Lower right primary first molar"],"Quadrant 7 is lower left primary; tooth 4 in a primary quadrant is the first molar. The permanent first premolar in that area is 3.4."],
  ["A dental chart entry reads 'tooth 7.6'. The most appropriate interpretation is that this entry is:","An invalid FDI number",["The lower left permanent first molar","The lower left primary second molar","A lower left supernumerary tooth"],"Quadrant 7 is primary and primary quadrants contain only teeth 1 to 5. The lower left permanent first molar is 3.6, which is the likely intended number but not what the entry says."],
  ["A healthy 4-year-old with normal development is examined. Which of the following teeth is most likely to be still unerupted?","1.6",["5.5","6.3","8.1"],"Tooth 1.6 is a permanent first molar, which erupts at about 6 to 7 years. The other three are primary teeth, which have normally erupted by about 3 years."],
  ["A 6-year-old has a new tooth erupting distal to tooth 8.5. No primary tooth has been lost. The erupting tooth is most likely:","4.6",["4.4","4.5","4.7"],"The first permanent molar erupts behind the primary second molar without replacing a primary tooth. Teeth 4.4 and 4.5 are premolars, which replace primary molars and erupt later, and 4.7 erupts at about 12 years."],
  ["A 9-year-old has teeth 1.1, 2.1 and 3.6 along with teeth 5.4 and 8.5 in the mouth. This stage is called the:","Mixed dentition",["Primary dentition","Permanent dentition","Predentate stage"],"Quadrant digits 1 to 4 and 5 to 8 appear together, so both primary and permanent teeth are present. The primary dentition would contain only digits 5 to 8."],
  ["A referral letter from the United States describes a lesion on 'tooth 30'. In the FDI system this tooth is:","4.6",["3.6","1.6","2.6"],"The NDEB conversion chart gives Universal 30 as 4.6. Universal 19 is 3.6, which is the tempting mirror-image error."],
  ["The surface of a mandibular tooth facing the tongue is called:","Lingual",["Palatal","Buccal","Labial"],"Palatal is used for the upper arch, lingual for the lower. Buccal and labial face the cheek and lip."],
  ["The surface of tooth 1.1 that contacts tooth 2.1 is the:","Mesial",["Distal","Labial","Palatal"],"Each central incisor's mesial surface faces the midline, so the two mesial surfaces touch. The distal surface of 1.1 contacts tooth 1.2."],
  ["A radiograph shows a carious lesion on the surface of tooth 2.5 that faces tooth 2.6. This surface is the:","Distal",["Mesial","Buccal","Occlusal"],"Tooth 2.6 is further from the midline than 2.5, so the facing surface of 2.5 is distal. The mesial surface of 2.5 faces 2.4."],
  ["A 45-year-old has spontaneous pain and lingering pain to cold from tooth 1.6. The tooth responds to pulp testing. The most likely pulpal diagnosis is:","Symptomatic irreversible pulpitis",["Reversible pulpitis","Asymptomatic irreversible pulpitis","Dentine hypersensitivity"],"Spontaneous pain and lingering thermal pain are the AAE descriptors of symptomatic irreversible pulpitis. In reversible pulpitis the inflammation should resolve and pain does not behave this way."],
  ["A 45-year-old has tooth 4.6 with no response to cold and pain on biting and percussion. Which of the following best explains the percussion tenderness?","Inflammation has spread to the apical periodontium",["Pulpal nerve fibres are responding to temperature","Fluid is moving within open dentinal tubules","The enamel surface has been demineralised by acid"],"Percussion loads the periodontal ligament, so tenderness points to the apical tissues; the AAE terms this symptomatic apical periodontitis. A thermal or tubule mechanism would need a stimulus to the dentine and a responsive pulp, and this tooth does not respond to cold."]
 ]
};

window.CONTENT["m00-n03"] = {
 understand: `
 <p>"Most appropriate" is judged against the reference texts, clinical guidelines and practice standards that NDEB references. A candidate trained elsewhere often knows the medicine but answers with an older or local convention. These are the conventions that recur, and each one gets its own node later. Learn the names now so you recognise them when they appear in a stem.</p>
 <ul>
 <li><b>Tooth numbering</b>: FDI two-digit, in all NDEB examinations. Not Universal (1 to 32) or Palmer.</li>
 <li><b>Units</b>: Canadian practice is metric. Doses in milligrams (mg per kg for children), temperatures in Celsius, pressures in mmHg.</li>
 <li><b>Periodontal disease</b>: the 2017 AAP/EFP classification. Periodontitis is described by <b>stage</b> (I to IV: severity and complexity of management), extent, and <b>grade</b> (A to C: rate of progression, with smoking and diabetes as grade modifiers). The older labels "chronic" and "aggressive" periodontitis are grouped under the single term periodontitis. Peri-implant mucositis and peri-implantitis are named conditions.</li>
 <li><b>Pulp and periapical diagnosis</b>: the AAE 2009 terminology. Pulp: normal, reversible pulpitis, symptomatic or asymptomatic irreversible pulpitis, necrosis, previously treated, previously initiated therapy. Apical: normal apical tissues, symptomatic or asymptomatic apical periodontitis, acute or chronic apical abscess, condensing osteitis.</li>
 <li><b>Dental trauma</b>: the IADT 2020 guidelines. Avulsed permanent tooth: replant at once if possible. Otherwise store it in, by order of preference, milk, HBSS (Hanks' balanced salt solution), saliva or saline. Water is a poor medium, better only than letting the tooth air-dry. Most periodontal ligament cells are non-viable after 30 minutes dry. Passive flexible splint for 2 weeks (a more rigid splint for about 4 weeks if there is an alveolar or jaw fracture). Avulsed primary teeth are not replanted.</li>
 <li><b>Endocarditis prophylaxis</b>: AHA 2021. Suggested only for the highest-risk conditions: prosthetic valve or valve repair material (also ventricular assist devices), previous infective endocarditis, certain congenital heart disease, and cardiac transplant with valvulopathy. Not for pacemakers. Only for procedures that manipulate gingival tissue or the periapical region or perforate the oral mucosa. Regimen: amoxicillin 2 g orally 30 to 60 minutes before. Clindamycin is no longer recommended. Oral options in penicillin allergy: cephalexin 2 g (not after anaphylaxis, angioedema or urticaria with penicillin), azithromycin or clarithromycin 500 mg, or doxycycline 100 mg.</li>
 <li><b>Blood pressure</b>: AHA categories. Normal under 120 and under 80; elevated 120 to 129 and under 80; stage 1 hypertension 130 to 139 or 80 to 89; stage 2 hypertension 140 or higher, or 90 or higher. Above 180 and/or above 120 is the top tier, labelled severe hypertension or hypertensive crisis in AHA materials.</li>
 <li><b>Caries</b>: ICCMS (International Caries Classification and Management System). Lesions are staged initial, moderate or extensive and assessed for activity, patients for risk. Initial active lesions generally get non-operative care.</li>
 <li><b>TMD</b>: the DC/TMD 2014 diagnostic criteria.</li>
 <li><b>Analgesia</b>: treat the dental cause, and use a non-opioid first: an NSAID and/or acetaminophen. Opioids are reserved for pain a maximised non-opioid has not controlled, in the smallest quantity (RCDSO guidance).</li>
 <li><b>Consent and records</b>: informed consent is a process, recorded, with capacity assessed; privacy legislation governs records (KSAs 12, 41, 42; RCDSO).</li>
 </ul>`,
 connect: [
  {to:"m19-n03", why:"Stage and grade is the whole language of periodontal questions. It replaces the 1999 labels 'chronic' and 'aggressive'."},
  {to:"m20-n01", why:"The AAE terms are how the exam names pulp states, so expect the options to use them rather than older words."},
  {to:"m20-n06", why:"Trauma questions follow IADT 2020 step by step: storage medium, splint type, splint time, follow-up."},
  {to:"m13-n09", why:"Prophylaxis questions turn on two things: is this patient in the highest-risk group, and what is the 2021 regimen."},
  {to:"m11-n04", why:"Non-opioid analgesia first, with opioids held in reserve, decides the 'most appropriate' prescription."}
 ],
 apply: {
  vignette: "A 10-year-old avulsed tooth 1.1 in the playground 20 minutes ago. The tooth has been kept dry in a tissue. The child is too upset to allow replantation, and the parent phones to ask what to do before reaching the clinic. The most appropriate advice is to:",
  options: ["Place the tooth in milk immediately","Place the tooth in tap water","Scrub the root clean and replant it","Keep it dry; it will be replanted at the clinic"],
  answer: "Place the tooth in milk immediately",
  steps: [
   "The ask: the best advice BEFORE arrival, when replantation at the scene is not possible. This is a storage-medium question.",
   "Facts that matter: permanent tooth (1.1, age 10), 20 minutes dry already, and a lay person on the phone. Most periodontal ligament cells are non-viable after 30 minutes dry, so every minute counts.",
   "Tap water is hypotonic and a poor medium: IADT rates it better only than air-drying, so it loses to milk. Scrubbing the root destroys the ligament: wrong. Keeping it dry adds more dry time: wrong.",
   "IADT 2020: if replantation is not possible, store in milk, HBSS, saliva or saline, in that order of preference. Milk is first and is usually at hand.",
   "If the child had allowed it, immediate replantation (holding the crown, after rinsing briefly, at most about 10 seconds, under cold running water if dirty, per IADT 2020) would be the first choice. Here milk is the best advice."
  ]
 },
 teach: {
  prompt: "List five Canadian-standard conventions the AFK assumes and say in one line each what an 'imported' mistake would look like.",
  model: "FDI numbering (mistake: using Universal 1 to 32); 2017 perio staging and grading (mistake: 'aggressive periodontitis'); AAE pulp terms (mistake: 'acute pulpitis'); IADT 2020 trauma (mistake: choosing water when milk is available, or replanting a primary tooth); AHA 2021 prophylaxis (mistake: giving clindamycin or covering a mitral valve prolapse)."
 },
 cards: [
  ["Periodontitis is described by","Stage I to IV and Grade A to C (AAP/EFP 2017), plus extent"],
  ["Grade modifiers in the 2017 classification","Smoking and diabetes"],
  ["Storage media for an avulsed permanent tooth, in order of preference","Milk, HBSS, saliva, saline. Water is poor, better only than air-drying"],
  ["Splint after replanting an avulsed permanent tooth, no fracture","Passive flexible splint for 2 weeks"],
  ["Are avulsed primary teeth replanted?","No"],
  ["Standard endocarditis prophylaxis regimen (AHA 2021)","Amoxicillin 2 g orally 30 to 60 min before"],
  ["Antibiotic no longer recommended by AHA 2021 for prophylaxis","Clindamycin"],
  ["Which dental procedures need prophylaxis in a high-risk patient?","Those manipulating gingival tissue or the periapical region, or perforating oral mucosa"],
  ["Stage 2 hypertension threshold","Systolic 140 or higher, or diastolic 90 or higher"],
  ["First-line analgesia for dental pain","A non-opioid: NSAID and/or acetaminophen"],
  ["ICCMS lesion stages","Initial, moderate, extensive"],
  ["Tooth numbering used in all NDEB exams","FDI two-digit"]
 ],
 questions: [
  ["Under the 2017 classification, the rate of progression of periodontitis is expressed as:","Grade A, B or C",["Stage I to IV","Class I to III","Type 1 or 2"],"Grade reflects progression rate and risk. Stage describes severity and complexity of management."],
  ["A 28-year-old has rapid bone loss around the first molars and incisors. Under the 2017 AAP/EFP classification, this is best classified as:","Periodontitis, with stage, extent and grade",["Localized aggressive periodontitis","Early-onset juvenile periodontitis","Chronic periodontitis, generalized and severe"],"Forms previously called chronic or aggressive are now grouped as periodontitis and characterised by stage and grade. Aggressive periodontitis is the tempting 1999 label."],
  ["A 58-year-old has periodontitis with 6 mm interdental attachment loss, 7 mm pockets, high tooth mobility and posterior bite collapse. The most appropriate stage is:","Stage IV",["Stage I","Stage II","Stage III"],"The distinction between stages III and IV rests mainly on complexity factors, and the 2017 consensus names high mobility and posterior bite collapse as indicating stage IV. Attachment loss alone would not separate it from stage III."],
  ["According to IADT 2020, which of the following is the least suitable medium for transporting an avulsed permanent tooth?","Tap water",["Milk","Physiologic saline","Saliva"],"Water is hypotonic and IADT calls it a poor medium, better only than air-drying. Milk, saliva and saline are all listed as suitable."],
  ["A 3-year-old has avulsed tooth 5.1 in a fall and arrives within 30 minutes with the tooth in milk. There are no other injuries. The most appropriate management is to:","Not replant the tooth; advise parents and review",["Replant the tooth with a flexible splint for 2 weeks","Replant the tooth with a rigid splint for 4 weeks","Replant the tooth without a splint and review"],"IADT 2020 states that primary teeth should not be replanted, so storage in milk does not change the plan. Replanting with a splint is the permanent-tooth protocol and is the tempting error."],
  ["A 12-year-old has had avulsed tooth 1.1 replanted, with no alveolar or jaw fracture. According to IADT 2020, the most appropriate stabilization is a:","Passive flexible splint for 2 weeks",["Rigid splint for 4 weeks","Rigid splint for 2 weeks","Passive flexible splint for 6 months"],"IADT 2020 specifies a passive flexible splint for 2 weeks. A more rigid splint for about 4 weeks is for associated alveolar or jaw fracture, which this patient does not have."],
  ["A patient is scheduled for scaling and root planing. According to AHA 2021, antibiotic prophylaxis is suggested if the patient has:","A prosthetic heart valve",["Mitral valve prolapse without regurgitation","A cardiac pacemaker","Well-controlled hypertension"],"Only the highest-risk cardiac conditions qualify. AHA 2021 specifically lists pacemakers as not needing prophylaxis."],
  ["The standard AHA 2021 prophylaxis regimen for an adult with no allergy is:","Amoxicillin 2 g orally 30 to 60 minutes before the procedure",["Amoxicillin 500 mg three times daily for 5 days","Clindamycin 600 mg orally 1 hour before the procedure","Penicillin V 500 mg after the procedure"],"The regimen is a single pre-procedure dose. Clindamycin is no longer recommended for prophylaxis in the 2021 statement."],
  ["A 52-year-old with a prosthetic aortic valve developed urticaria after taking amoxicillin. Extraction of tooth 3.6 is planned. According to AHA 2021, the most appropriate oral prophylaxis is:","Azithromycin 500 mg 30 to 60 minutes before the procedure",["Cephalexin 2 g 30 to 60 minutes before the procedure","Clindamycin 600 mg 30 to 60 minutes before the procedure","Amoxicillin 2 g 30 to 60 minutes before the procedure"],"Azithromycin is a listed alternative in penicillin allergy. Cephalexin is also listed, but AHA says cephalosporins should not be used after anaphylaxis, angioedema or urticaria with penicillin, and clindamycin is no longer recommended."],
  ["A patient with a history of infective endocarditis is attending for several procedures. According to AHA 2021, which of the following procedures calls for antibiotic prophylaxis?","Subgingival scaling",["Bitewing radiographs","Anaesthetic injection through non-infected tissue","Adjustment of an orthodontic appliance"],"Prophylaxis is suggested for procedures that manipulate gingival tissue or the periapical region or perforate the oral mucosa. The other three are specifically listed as not needing it."],
  ["A blood pressure of 150/95 mmHg is classified by the AHA as:","Stage 2 hypertension",["Elevated","Stage 1 hypertension","Hypertensive crisis"],"Stage 2 is a systolic of 140 or higher, or a diastolic of 90 or higher. The top tier begins only above 180 and/or above 120."],
  ["A 50-year-old has a blood pressure of 128/85 mmHg. According to AHA categories, this reading is classified as:","Stage 1 hypertension",["Normal","Elevated","Stage 2 hypertension"],"Stage 1 is systolic 130 to 139 OR diastolic 80 to 89, so the diastolic of 85 alone places it here. Elevated requires a diastolic under 80, which makes it the tempting wrong answer."],
  ["The diagnostic terminology for pulpal and periapical disease used on the AFK comes from:","The American Association of Endodontists",["The World Health Organization","The 2017 AAP/EFP workshop","The International Association of Dental Traumatology"],"The AAE 2009 consensus terms are on the NDEB reference list. The 2017 workshop classifies periodontal and peri-implant disease, not pulp disease."],
  ["A 35-year-old has a non-vital tooth 1.6 with no discomfort and a sinus tract that discharges pus intermittently. The most likely AAE apical diagnosis is:","Chronic apical abscess",["Acute apical abscess","Symptomatic apical periodontitis","Condensing osteitis"],"The AAE defines chronic apical abscess by gradual onset, little or no discomfort and intermittent discharge through a sinus tract. An acute apical abscess has rapid onset and spontaneous pain."],
  ["A healthy 30-year-old with no drug allergies expects moderate pain after extraction of tooth 3.8. The most appropriate first-line analgesic is:","Ibuprofen with acetaminophen",["Acetaminophen with codeine","Oxycodone","Tramadol"],"A non-opioid comes first, and an opioid is reserved for pain that a maximised non-opioid has not controlled. Acetaminophen with codeine is tempting, but it adds an opioid before non-opioids have been tried."]
 ]
};

window.CONTENT["m00-n04"] = {
 understand: `
 <p>Starting from zero means the goal is not to "cover" 206 topics. It is to build 206 small, connected understandings that can be retrieved under time pressure. Four habits produce that, and the app is built around them.</p>
 <p><b>1. Understand before memorise.</b> Each node starts with a mechanism card: the why, in a few lines. A fact with a reason attached survives; a bare fact decays. When you read the card, your only job is to be able to say the idea back in your own words. That is the teach-back box.</p>
 <p><b>2. Connect.</b> Exam items often live at the joins between topics: a bacterium, the disease it causes, the drug that treats it, the patient it endangers. Each node lists its neighbours and why they are linked. Follow at least one link every session.</p>
 <p><b>3. Apply, then test.</b> The worked vignette shows the elimination routine on a realistic stem. Then you answer questions on the node. Before each answer you say whether you are sure. Confident-and-wrong is the worst outcome on exam day, and the way to fix it is to find it now. The target is 90% or better on the answers you mark sure. After a wrong answer you label the error: did not know, misread, reasoning slip, or Canadian-standard gap. The label decides what to do next.</p>
 <p><b>4. Space and interleave.</b> A score of 80% or better marks the node mastered, and it comes back in 3 days, then about a week, then longer. A score of 60 to 79% brings it back in 2 days, and under 60% brings it back tomorrow. The Review tab is the list of what is due. Mixed rounds pull from every node you have started, because the real exam does not announce the topic.</p>
 <p><b>A realistic pace from zero.</b> The path is about 608 hours of study. At 15 hours a week that is about nine to ten months; at 25 hours a week, about five and a half to six months. Do not chase a sitting that forces skipping Phase 1. Applied biomedical sciences are 20 ± 5% of the paper directly, and they explain the reasoning behind much of the clinical rest.</p>
 <p><b>Daily shape</b> (about 2 hours): review what is due (20 min), work on the current node (80 min), a 10-question mixed round (15 min), write down one error and its fix (5 min). Many nodes take more than one sitting; the Path shows the hours for each.</p>`,
 connect: [
  {to:"m00-n01", why:"The elimination routine is practised inside every Apply and Test step."},
  {to:"m00-n03", why:"The 'Canadian-standard gap' label sends you back to this list of conventions and the guideline it names."},
  {to:"m25-n01", why:"Area exams test each blueprint area. Aim for 80% or better, the same bar this app uses for node mastery; it is a study target, not the NDEB passing standard."},
  {to:"m25-n02", why:"A full mock in two timed parts checks whether what the loop built holds up at exam length."}
 ],
 apply: {
  vignette: "You have just finished a node test and scored 4 out of 10. Three of the six errors you labelled 'did not know', two 'misread' and one 'reasoning slip'. What is the most appropriate next action?",
  options: ["Re-read the Understand card and redo the teach-back, then retest tomorrow","Move on to the next node to keep pace","Retest the same questions immediately until you score 10","Skip the node; it will come back in a mock"],
  answer: "Re-read the Understand card and redo the teach-back, then retest tomorrow",
  steps: [
   "The largest error type is 'did not know', which is a knowledge gap, not a test-taking problem. A score under 60% also brings the node back tomorrow.",
   "Immediate retest on the same items trains recognition of those questions, not the knowledge; tomorrow's retest with the questions reshuffled is the honest check.",
   "Moving on or waiting for a mock leaves the gap in place, and later nodes build on this one.",
   "Misreads would call for slowing down and reading the ask first; a reasoning slip would call for redoing the worked vignette. Both are secondary here."
  ]
 },
 teach: {
  prompt: "Describe your daily study shape and the four error labels, and say what each label tells you to do.",
  model: "Daily: review due nodes, work on the current node through understand, connect, apply, test, a mixed round, one written error. Labels: did not know (re-read and teach back, retest next day); misread (read the ask first, slow down); reasoning slip (redo the worked vignette, explain each distractor); Canadian-standard gap (open the standards node and the guideline named)."
 },
 cards: [
  ["Four steps of the node loop","Understand, Connect, Apply, Test"],
  ["Why rate confidence before answering?","To find confident-and-wrong items, the most dangerous kind"],
  ["Accuracy target on answers marked 'sure'","90% or better"],
  ["Four error labels","Did not know, misread, reasoning slip, Canadian-standard gap"],
  ["Node score that counts as mastered in the app","80% or better"],
  ["When does a node come back?","80%+: 3 days, then about a week, then longer. 60 to 79%: 2 days. Under 60%: tomorrow"],
  ["Total study hours on the path","About 608"],
  ["Time to finish at 15 and at 25 hours a week","About nine to ten months; about five and a half to six months"],
  ["Study target for an area exam","80% or better (a course target, not the NDEB pass standard)"]
 ],
 questions: [
  ["Interleaving (mixing topics within a practice session) is used mainly to:","Train retrieval without a topic cue",["Reduce total study time","Remove the need for later review","Replace the Understand step"],"The exam does not announce the topic of each question, and mixed practice trains you to tell similar topics apart, which is what distractors test. It is usually harder and slower in the moment, not a time-saver."],
  ["The main purpose of the teach-back box is to:","Check you can rebuild the idea unaided",["Record your own notes for later re-reading","Earn experience points for the session","Replace the flashcards"],"Recognition feels like knowledge but fails under exam pressure, while reconstruction shows what you can actually retrieve. Notes alone do not test that."],
  ["A learner is 'sure' on 20 answers and gets 12 right. This pattern indicates:","Overconfidence, so review the missed items",["Good calibration for a first attempt","Underconfidence on the harder items","Nothing, because confidence is irrelevant"],"12 of 20 is 60%, far under the 90% target for 'sure' answers. Sure-but-wrong items are the ones likely to be answered wrongly, and quickly, on exam day."],
  ["A learner plans to study 15 hours a week. Given the 608-hour path, the plan will take about:","Nine to ten months",["Three to four months","Five to six months","Fourteen months"],"608 divided by 15 is about 41 weeks, which is about nine to ten months. Five to six months is the figure for 25 hours a week."],
  ["A learner wants to skip Phase 1 because clinical areas make up most of the AFK. The best response is that:","Biomedical sciences are 20 ± 5% and underlie clinical reasoning",["Biomedical sciences are not examined directly on the AFK","Biomedical sciences make up more than half of the AFK paper","Skipping is reasonable because the KSAs exclude basic science"],"Applied Biomedical Sciences is the largest single blueprint area. Clinical areas are indeed the majority, but they still rest on those mechanisms."],
  ["In this app, a learner scores 65% on a node test. The node will next come back for review:","In 2 days",["Tomorrow","In 3 days","In 60 days"],"A score of 60 to 79% brings the node back in 2 days. Tomorrow is for scores under 60%, and 3 days is the first interval after a score of 80% or better."],
  ["A learner scores 7 out of 10 on a node test and asks if the node is mastered. The most accurate answer is:","No, because mastery in the app requires 80% or better",["Yes, because 70% is close to the AFK passing score of 75","Yes, because any score over 60% counts as mastered","No, because mastery in the app requires 100%"],"The app marks a node mastered at 80% or better. The AFK's 75 is a re-scaled score, so it cannot be compared with a percentage on a node test."],
  ["A dentist trained abroad chooses clindamycin 600 mg as endocarditis prophylaxis for a patient with penicillin allergy, as taught years ago. The answer is marked wrong. The most appropriate error label is:","Canadian-standard gap",["Did not know","Misread","Reasoning slip"],"The learner knows a regimen, but it is out of date against the guideline the exam references. The fix is to open the standards node and the guideline, which a plain 'did not know' would not prompt."],
  ["A stem asks for the most likely adverse effect of a drug. A learner who knows the answer skims the last sentence and selects the indication for the drug instead. The most appropriate error label is:","Misread",["Did not know","Reasoning slip","Canadian-standard gap"],"The learner answered a different question from the one asked. The fix is to read the ask first, whereas a reasoning slip means the correct question was read and the logic failed."],
  ["A learner knows that a patient has a prosthetic valve and knows the amoxicillin regimen, but answers that no prophylaxis is needed for a subgingival scaling because no tooth is being extracted. The most appropriate next step is to:","Redo the vignette, saying why each distractor is wrong",["Open the standards node to learn the current guideline","Slow down and read the final question sentence first","Memorise the amoxicillin dose and timing again"],"The facts were known and the question was read correctly, so this is a reasoning slip: the error is in linking the procedure to gingival manipulation. Re-memorising the dose treats a gap the learner does not have."],
  ["A learner has 30 minutes before retesting a weak node. The most effective use of this time is to:","Write the ideas from memory, then check the card",["Re-read the card slowly until it feels familiar","Highlight the key terms on the card","Read through the questions and their answers"],"Retrieving from memory strengthens recall more than re-exposure does. Re-reading feels productive because the text becomes familiar, and that familiarity is easily mistaken for knowledge."],
  ["Which of the following best explains why reviewing a node after a gap of several days is more effective than reviewing it again immediately?","Retrieval after some forgetting strengthens memory more",["The node contains less material on a second pass","Short-term memory holds more after several days","Question wording becomes easier to recognise"],"Effortful retrieval after a delay is what builds durable memory. Immediate repetition feels easy because the material is still in short-term memory, so it shows little about later recall."],
  ["A learner has memorised viridans group streptococci as an isolated fact. Which next step best fits how exam items are built?","Follow its link to endocarditis prophylaxis",["Re-read the definition of the organism","Memorise its full taxonomic classification","Move to an unrelated node to keep up the pace"],"Exam items often join a microbe, its disease, the drug and the patient at risk. Re-reading or adding taxonomy deepens the isolated fact without building those joins."]
 ]
};
