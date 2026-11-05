/* Module m00: How the AFK thinks. Written for a learner starting from zero. */
window.CONTENT = window.CONTENT || {};

window.CONTENT["m00-n01"] = {
 understand: `
 <p><b>Every AFK question is a single-best-answer item.</b> 200 of them, one mark each, no negative marking, four or five options. The stem usually asks for the <i>most likely</i> diagnosis, the <i>most appropriate</i> treatment, or the <i>best</i> explanation. That wording matters: more than one option may be partly true, and you are being asked to rank them.</p>
 <p><b>The stem is built in layers.</b> A typical stem gives (1) a person: age, sometimes sex and medical history; (2) a finding: symptom, sign, radiograph or test result; (3) the ask. Each layer removes options. A 7-year-old rules out adult-only answers. "Painless" rules out most acute infections. "Non-functional molar" points to something mechanical.</p>
 <p><b>Distractors are built from real confusions.</b> The wrong options are usually the thing a tired candidate mixes up with the right one: the drug with a similar name, the lesion that looks the same, the tooth next door. So the skill is not "spot the right answer". It is "say why each wrong one is wrong".</p>
 <p><b>The exam tests application more than recall.</b> Items are written from the 47 KSAs (Knowledge, Skills and Abilities of a beginning Canadian dentist). A KSA like "manage dental emergencies" produces a question that gives a scene and asks what you would do, not a definition.</p>
 <p><b>Elimination routine</b> (use it on every item until it is automatic):</p>
 <ol><li>Read the last sentence first. Know what is being asked before you read the story.</li>
 <li>Underline, in your head, the three facts that change the answer: age, timing, and the one abnormal finding.</li>
 <li>Cross out any option that contradicts one of those facts.</li>
 <li>Between the survivors, prefer the option that explains <i>all</i> the findings, and the least invasive management that is still correct.</li>
 <li>Answer every question. Blank scores zero; a guess scores at least 25%.</li></ol>`,
 connect: [
  {to:"m00-n02", why:"The stem names teeth in FDI notation. If 4.6 does not instantly mean lower-right first molar, you lose time on every item."},
  {to:"m00-n03", why:"'Most appropriate' is judged against Canadian guidelines. The same clinical scene can have a different best answer under another country's rules."},
  {to:"m00-n04", why:"The elimination routine is a skill, so it goes through the same study loop as any topic: practise, review errors, repeat."}
 ],
 apply: {
  vignette: "A 24-year-old presents with a two-day history of a painful, swollen lower right face. Tooth 4.6 has a large carious lesion and is tender to percussion. There is a fluctuant swelling in the buccal vestibule. Temperature is 37.4 °C. What is the most appropriate first step in management?",
  options: ["Prescribe amoxicillin and review in one week.","Establish drainage and manage the source tooth.","Prescribe ibuprofen and review in one week.","Refer for incision under general anaesthesia."],
  answer: "Establish drainage and manage the source tooth.",
  steps: [
   "Ask first: the last sentence wants the FIRST step in management, not the diagnosis.",
   "Three facts that matter: fluctuant swelling (pus is collecting), a clear source tooth (4.6), and the patient is systemically well (temperature near normal).",
   "Cross out antibiotics alone: a fluctuant abscess needs drainage; antibiotics do not penetrate a pus collection. Cross out analgesics alone for the same reason.",
   "Cross out general anaesthesia referral: no airway threat, no trismus, no fever, localised swelling. That is escalation without indication.",
   "The survivor explains and treats everything: drain the pus and remove the cause (extraction or pulpectomy). Antibiotics are an adjunct only if there is systemic involvement or spread."
  ]
 },
 teach: {
  prompt: "In your own words: what is the five-step elimination routine, and why does the exam prefer 'most appropriate' over 'correct'?",
  model: "Read the ask first; mark age, timing and the one abnormal finding; cross out options that contradict them; among survivors pick the one explaining all findings with the least invasive correct management; always answer. 'Most appropriate' is used because several options can be partly true, so the exam is testing judgement between plausible choices, not recognition of a single fact."
 },
 cards: [
  ["How many questions, how long, and what is the pass mark?","200 single-answer MCQs, two 2-hour parts, equated score of 75 or higher"],
  ["Is there negative marking on the AFK?","No. Wrong and blank both score zero, so always answer"],
  ["What are AFK items written from?","The 47 KSAs for a beginning dental practitioner in Canada"],
  ["First thing to read in a long stem?","The last sentence: the actual question"],
  ["Three facts that most often change the answer","Age, timing (acute vs chronic), the one abnormal finding"],
  ["Tie-break between two plausible management options","The one that explains all findings and is least invasive while still correct"]
 ],
 questions: [
  ["On the AFK, a question left blank scores:","Zero, the same as a wrong answer",["Minus one quarter mark","Minus one mark","Half a mark"],"There is no penalty for wrong answers and the lowest score for any item is zero, so always answer."],
  ["AFK questions are developed from:","The Knowledge, Skills and Abilities (KSAs) for a beginning dental practitioner in Canada",["The textbooks of one Canadian faculty","The US National Board blueprint","Questions submitted by candidates"],"The 2026 protocol states items are based on the KSAs available in the NDEB exam resources."],
  ["A stem asks for the 'most appropriate' treatment. Two options are both clinically acceptable. The exam expects you to choose:","The option that addresses all the findings with the least invasive effective approach",["The more invasive option, to be safe","The cheaper option","The first acceptable option listed"],"'Manage' in the KSAs assumes the least invasive therapy necessary to gain a successful outcome."],
  ["The most efficient first move on a long clinical vignette is to:","Read the final question sentence before the story",["Read every option first","Memorise the patient's age","Skip to the next question"],"Knowing the ask tells you which details in the story matter."],
  ["A distractor on a well-written AFK item is usually:","A plausible option built from a common confusion with the correct answer",["Obviously absurd","A trick based on spelling","Always the longest option"],"Distractors mirror real mistakes, which is why explaining why each wrong option is wrong is the skill to train."]
 ]
};

window.CONTENT["m00-n02"] = {
 understand: `
 <p><b>The exam uses the FDI two-digit system only.</b> The first digit is the quadrant, the second is the tooth counted from the midline.</p>
 <div class="tscroll"><table><tr><th>Quadrant digit</th><th>Permanent</th><th>Primary</th></tr>
 <tr><td>Upper right</td><td>1</td><td>5</td></tr><tr><td>Upper left</td><td>2</td><td>6</td></tr><tr><td>Lower left</td><td>3</td><td>7</td></tr><tr><td>Lower right</td><td>4</td><td>8</td></tr></table></div>
 <p>Second digit, permanent: 1 central incisor, 2 lateral incisor, 3 canine, 4 first premolar, 5 second premolar, 6 first molar, 7 second molar, 8 third molar. Primary: 1 central, 2 lateral, 3 canine, 4 first molar, 5 second molar (no premolars in the primary dentition).</p>
 <p>So <b>1.6</b> is the upper right first molar, <b>3.4</b> is the lower left first premolar, <b>5.5</b> is the upper right primary second molar, <b>8.1</b> is the lower right primary central incisor. Quadrants run clockwise from the patient's upper right as you face them.</p>
 <p><b>Vocabulary that stems assume.</b> Mesial = toward the midline; distal = away. Buccal/labial = toward cheek or lip; lingual (lower) and palatal (upper) = toward the tongue or palate. Occlusal = biting surface of posterior teeth; incisal = edge of anterior teeth. Cervical = at the neck of the tooth; apical = toward the root tip; coronal = toward the crown. Proximal = the surface facing a neighbouring tooth. Interproximal = between two teeth.</p>
 <p><b>Timing words carry diagnoses.</b> Acute = sudden, days. Chronic = weeks to months. Spontaneous pain = pain without a trigger (suggests irreversible pulpitis). Lingering = pain that continues after the stimulus is removed (also irreversible pulpitis). Percussion tenderness = inflammation has reached the periodontal ligament around the apex.</p>
 <p><b>Mixed dentition</b> = both primary and permanent teeth present, roughly ages 6 to 12. The first permanent tooth to erupt is usually the first molar (around 6), behind the primary teeth, without replacing any of them.</p>`,
 connect: [
  {to:"m07-n01", why:"Numbering is only useful once each number calls up a shape: 1.3 is a canine with one long root and a cingulum."},
  {to:"m06-n08", why:"Eruption dates tell you which FDI numbers can even exist at a given age. A 5-year-old has no 1.6 yet."},
  {to:"m20-n01", why:"Words like 'spontaneous' and 'lingering' map directly onto the pulp diagnosis categories you will learn in endodontics."}
 ],
 apply: {
  vignette: "A parent reports that their 8-year-old child has 'a loose tooth at the back on the lower left'. On examination the mobile tooth is the second tooth distal to the lower left canine, with a permanent molar erupted behind it. Which tooth is mobile?",
  options: ["3.5","7.5","3.6","7.4"],
  answer: "7.5",
  steps: [
   "Age 8 means mixed dentition: primary molars are still present and the permanent first molar (3.6) has erupted behind them.",
   "Lower left quadrant: permanent digit 3, primary digit 7.",
   "Second tooth distal to the canine in the primary arch is the second primary molar: digit 5.",
   "3.5 would be the permanent second premolar, which erupts around 11 to 12 and does not go mobile at 8. 7.4 is the first primary molar, one tooth too close to the canine. 3.6 is the erupted permanent molar behind.",
   "So the mobile tooth is 7.5, the lower left second primary molar, which is normally shed around 10 to 12. Early mobility invites a question about space maintenance next."
  ]
 },
 teach: {
  prompt: "Explain the FDI system to someone who has never seen it, and decode 2.3, 4.7 and 6.4.",
  model: "Two digits: quadrant then tooth from the midline. Quadrants 1 to 4 clockwise from the upper right for permanent teeth, 5 to 8 for primary. 2.3 = upper left permanent canine. 4.7 = lower right permanent second molar. 6.4 = upper left primary first molar."
 },
 cards: [
  ["FDI quadrant digits, permanent","1 upper right, 2 upper left, 3 lower left, 4 lower right"],
  ["FDI quadrant digits, primary","5 upper right, 6 upper left, 7 lower left, 8 lower right"],
  ["Tooth 1.6","Upper right permanent first molar"],
  ["Tooth 8.2","Lower right primary lateral incisor"],
  ["Mesial vs distal","Toward the midline vs away from it"],
  ["Lingering pain means","Pain continues after the stimulus is removed: irreversible pulpitis"],
  ["Percussion tenderness means","Inflammation has reached the periapical periodontal ligament"],
  ["Mixed dentition age range","About 6 to 12 years"]
 ],
 questions: [
  ["In the FDI system, tooth 4.6 is the:","Lower right permanent first molar",["Lower left permanent first molar","Upper right permanent first molar","Lower right primary first molar"],"Quadrant 4 is lower right, permanent; tooth 6 is the first molar."],
  ["Which FDI number denotes a primary tooth?","6.5",["2.5","4.5","3.8"],"Quadrants 5 to 8 are primary. 6.5 is the upper left second primary molar."],
  ["A 5-year-old cannot normally have which of the following teeth erupted?","1.6",["5.5","6.3","8.1"],"The permanent first molar erupts at about 6 years; the others are primary teeth."],
  ["The surface of a tooth facing the tongue in the mandible is called:","Lingual",["Palatal","Buccal","Labial"],"Palatal is used for the upper arch, lingual for the lower."],
  ["'Spontaneous, lingering pain' in a stem most strongly suggests:","Irreversible pulpitis",["Reversible pulpitis","Normal pulp","Dentine hypersensitivity"],"Pain without a trigger that outlasts the stimulus is the classic description of irreversible pulpitis."],
  ["Tooth 3.4 is the:","Lower left first premolar",["Lower left first molar","Upper left first premolar","Lower left primary first molar"],"Quadrant 3 is lower left permanent; tooth 4 is the first premolar."]
 ]
};

window.CONTENT["m00-n03"] = {
 understand: `
 <p>The AFK judges "most appropriate" against the standards taught in Canadian faculties. A candidate trained elsewhere often knows the medicine but answers with an older or local convention. These are the conventions that recur, and each one gets its own node later. Learn the names now so you recognise them when they appear in a stem.</p>
 <ul>
 <li><b>Tooth numbering</b>: FDI two-digit only. Never Universal (1 to 32) or Palmer.</li>
 <li><b>Units</b>: metric. Doses in milligrams per kilogram, temperatures in Celsius, pressures in mmHg.</li>
 <li><b>Periodontal disease</b>: the 2017 AAP/EFP classification. Periodontitis is described by <b>stage</b> (I to IV: severity and complexity) and <b>grade</b> (A to C: rate of progression, with smoking and diabetes as grade modifiers). Peri-implant mucositis and peri-implantitis are named conditions. Older words like "aggressive periodontitis" are no longer used.</li>
 <li><b>Pulp and periapical diagnosis</b>: the AAE terminology. Pulp: normal, reversible pulpitis, symptomatic or asymptomatic irreversible pulpitis, necrosis, previously treated, previously initiated. Apical: normal, symptomatic or asymptomatic apical periodontitis, acute or chronic apical abscess, condensing osteitis.</li>
 <li><b>Dental trauma</b>: the IADT 2020 guidelines. Avulsed permanent tooth: replant at once if possible; otherwise transport in milk, Hank's solution, saliva or saline, never water; flexible splint for about two weeks. Avulsed primary teeth are not replanted.</li>
 <li><b>Endocarditis prophylaxis</b>: AHA 2021. Only for the highest-risk cardiac conditions (prosthetic valve or valve material, previous infective endocarditis, certain congenital heart disease, cardiac transplant with valve disease). Standard regimen: amoxicillin 2 g orally 30 to 60 minutes before the procedure. Clindamycin is no longer recommended as the penicillin-allergy alternative.</li>
 <li><b>Blood pressure</b>: AHA categories. Normal under 120/80; elevated 120 to 129 over under 80; stage 1 hypertension 130 to 139 or 80 to 89; stage 2 at or above 140/90; hypertensive crisis above 180/120.</li>
 <li><b>Caries</b>: ICCMS (International Caries Classification and Management System). Caries is managed by risk and activity, not only by drilling.</li>
 <li><b>TMD</b>: the DC/TMD 2014 diagnostic criteria.</li>
 <li><b>Analgesia</b>: NSAID plus acetaminophen is first-line for dental pain; opioids are a last resort in the smallest quantity (RCDSO guidance).</li>
 <li><b>Consent and records</b>: informed consent is a process, documented, with capacity assessed; privacy legislation governs records (RCDSO, provincial law).</li>
 </ul>`,
 connect: [
  {to:"m19-n03", why:"Stage and grade is the whole language of periodontal questions. It replaces every older classification."},
  {to:"m20-n01", why:"The AAE terms are how the exam names pulp states. An answer using older words is simply not among the options."},
  {to:"m20-n06", why:"Trauma questions follow IADT 2020 step by step: storage medium, splint type, splint time, follow-up."},
  {to:"m13-n09", why:"Prophylaxis questions turn on two things: is this patient in the highest-risk group, and what is the 2021 regimen."},
  {to:"m11-n04", why:"Canadian analgesic practice (NSAID plus acetaminophen first) decides the 'most appropriate' prescription."}
 ],
 apply: {
  vignette: "A 10-year-old avulsed tooth 1.1 in the playground 20 minutes ago. The tooth was kept dry in a tissue. The parent asks what to do before reaching the clinic. The most appropriate advice is to:",
  options: ["Place the tooth in milk immediately","Place the tooth in tap water","Scrub the root clean and replant it","Keep it dry; it will be replanted at the clinic"],
  answer: "Place the tooth in milk immediately",
  steps: [
   "The ask: the best advice BEFORE arrival. This is a storage-medium question.",
   "Facts that matter: permanent tooth (1.1, age 10), 20 minutes dry already, parent is a lay person on the phone.",
   "Tap water is hypotonic and kills periodontal ligament cells: wrong. Scrubbing the root destroys the ligament: wrong. Keeping it dry adds more dead time: wrong.",
   "IADT 2020: if immediate replantation is not possible, store in milk, Hank's balanced salt solution, saliva or saline. Milk is the most available.",
   "Ideally the parent would replant it gently (holding the crown) after a brief rinse, but that was not among the options; milk is the best offered."
  ]
 },
 teach: {
  prompt: "List five Canadian-standard conventions the AFK assumes and say in one line each what an 'imported' mistake would look like.",
  model: "FDI numbering (mistake: using Universal 1 to 32); 2017 perio staging and grading (mistake: 'aggressive periodontitis'); AAE pulp terms (mistake: 'acute pulpitis'); IADT 2020 trauma (mistake: storing an avulsed tooth in water or replanting a primary tooth); AHA 2021 prophylaxis (mistake: giving clindamycin or covering a mitral valve prolapse)."
 },
 cards: [
  ["Periodontitis is described by","Stage I to IV and Grade A to C (AAP/EFP 2017)"],
  ["Grade modifiers in the 2017 classification","Smoking and diabetes"],
  ["Storage media for an avulsed permanent tooth","Milk, Hank's solution, saliva, saline. Never water"],
  ["Are avulsed primary teeth replanted?","No"],
  ["Standard endocarditis prophylaxis regimen (AHA 2021)","Amoxicillin 2 g orally 30 to 60 min before"],
  ["Penicillin-allergy alternative no longer recommended by AHA 2021","Clindamycin"],
  ["Stage 2 hypertension threshold","140/90 mmHg or higher"],
  ["First-line analgesia for dental pain in Canada","NSAID plus acetaminophen"],
  ["Tooth numbering used in all NDEB exams","FDI two-digit"]
 ],
 questions: [
  ["Under the 2017 classification, the rate of progression of periodontitis is expressed as:","Grade A, B or C",["Stage I to IV","Class I to III","Type 1 or 2"],"Stage describes severity and complexity; grade describes progression rate and risk."],
  ["Which medium is NOT acceptable for transporting an avulsed permanent tooth?","Tap water",["Milk","Saline","Saliva"],"Water is hypotonic and damages periodontal ligament cells."],
  ["According to AHA 2021, antibiotic prophylaxis before dental procedures is recommended for a patient with:","A prosthetic heart valve",["Mitral valve prolapse without regurgitation","A cardiac pacemaker","Well-controlled hypertension"],"Only the highest-risk cardiac conditions qualify."],
  ["The standard AHA 2021 prophylaxis regimen for an adult with no allergy is:","Amoxicillin 2 g orally 30 to 60 minutes before the procedure",["Amoxicillin 500 mg three times daily for 5 days","Clindamycin 600 mg orally 1 hour before","Penicillin V 500 mg after the procedure"],"A single pre-procedure dose; clindamycin was removed in 2021."],
  ["A blood pressure of 150/95 mmHg is classified by the AHA as:","Stage 2 hypertension",["Elevated","Stage 1 hypertension","Hypertensive crisis"],"Stage 2 is at or above 140 systolic or 90 diastolic."],
  ["The diagnostic terminology for pulpal and periapical disease used on the AFK comes from:","The American Association of Endodontists (AAE) consensus",["The World Health Organization","The 2017 AAP/EFP workshop","The IADT guidelines"],"AAE 2009 consensus terms are on the NDEB reference list."]
 ]
};

window.CONTENT["m00-n04"] = {
 understand: `
 <p>Starting from zero means the goal is not to "cover" 150 topics. It is to build 150 small, connected understandings that can be retrieved under time pressure. Four things are known to produce that, and the app is built around them.</p>
 <p><b>1. Understand before memorise.</b> Each node starts with a mechanism card: the why, in a few lines. A fact with a reason attached survives; a bare fact decays. When you read the card, your only job is to be able to say the idea back in your own words. That is the teach-back box.</p>
 <p><b>2. Connect.</b> Exam items live at the joins between topics: a bacterium, the disease it causes, the drug that treats it, the patient it endangers. Each node lists its neighbours and why they are linked. Follow at least one link every session.</p>
 <p><b>3. Apply, then test.</b> The worked vignette shows the elimination routine on a realistic stem. Then you answer questions on the node. Before each answer you say whether you are sure. Confident-and-wrong is the worst outcome on exam day, and the only way to fix it is to find it now. After a wrong answer you label the error: did not know, misread, reasoning slip, or Canadian-standard gap. The label decides what to do next.</p>
 <p><b>4. Space and interleave.</b> A node you tested well comes back in a few days, then a week, then longer. A node you tested badly comes back tomorrow. The Review tab is the list of what is due. Mixed rounds pull from every node you have unlocked, because the real exam does not announce the topic.</p>
 <p><b>A realistic pace from zero.</b> The path is roughly 560 hours of study. At 15 hours a week that is nine to ten months; at 25 hours a week, five to six. Do not chase a sitting that forces skipping Phase 1. The biomedical foundations are 20% of the paper directly and the reason behind most of the other 80%.</p>
 <p><b>Daily shape</b> (about 2 hours): review what is due (20 min), one new node through all four steps (60 min), a 10-question mixed round (15 min), write down one error and its fix (5 min).</p>`,
 connect: [
  {to:"m00-n01", why:"The elimination routine is practised inside every Apply and Test step."},
  {to:"m25-n01", why:"Area exams are the exit test for each blueprint area: 80% or better before you call an area done."}
 ],
 apply: {
  vignette: "You tested a node yesterday and scored 4 out of 10. Three of the six errors you labelled 'did not know', two 'misread' and one 'reasoning slip'. What is the most appropriate next action?",
  options: ["Re-read the Understand card and redo the teach-back, then retest tomorrow","Move on to the next node to keep pace","Retest the same questions immediately until you score 10","Skip the node; it will come back in a mock"],
  answer: "Re-read the Understand card and redo the teach-back, then retest tomorrow",
  steps: [
   "The dominant error type is 'did not know', which is a knowledge gap, not a test-taking problem.",
   "Immediate retest on the same items trains recognition of those questions, not the knowledge; tomorrow's retest with the pool reshuffled is the honest check.",
   "Moving on or waiting for a mock leaves the gap in place, and later nodes build on this one.",
   "Misreads would call for slowing down and re-reading the ask first; a reasoning slip would call for redoing the worked vignette. Both are secondary here."
  ]
 },
 teach: {
  prompt: "Describe your daily study shape and the four error labels, and say what each label tells you to do.",
  model: "Daily: review due nodes, one new node through understand, connect, apply, test, a mixed round, one written error. Labels: did not know (re-read and teach back, retest next day); misread (read the ask first, slow down); reasoning slip (redo the worked vignette, explain each distractor); Canadian-standard gap (open the standards node and the guideline named)."
 },
 cards: [
  ["Four steps of the node loop","Understand, Connect, Apply, Test"],
  ["Why rate confidence before answering?","To find confident-and-wrong items, the most dangerous kind"],
  ["Four error labels","Did not know, misread, reasoning slip, Canadian-standard gap"],
  ["Spacing rule of thumb","Tested well: back in days then weeks; tested badly: back tomorrow"],
  ["Exit standard for a blueprint area","80% or better on its area exam"]
 ],
 questions: [
  ["Interleaving (mixing topics within a practice session) is used because:","The exam does not announce the topic of each question, so retrieval must work without that cue",["It is faster than studying one topic at a time","It avoids the need for review","It replaces the Understand step"],"Mixed practice trains discrimination between similar topics, which is what distractors test."],
  ["The main purpose of the teach-back box is to:","Check that you can reconstruct the idea in your own words rather than recognise it",["Record notes for later","Earn XP","Replace the flashcards"],"Recognition feels like knowledge but fails under exam pressure; reconstruction does not."],
  ["A learner is 'sure' on 20 answers and gets 12 right. This pattern indicates:","Overconfidence that needs targeted review of the missed items",["Good calibration","Underconfidence","Nothing; confidence is irrelevant"],"Sure-but-wrong items are exactly the ones that will be answered wrongly, quickly, on exam day."]
 ]
};
