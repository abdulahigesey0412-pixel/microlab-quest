window.CONTENT = window.CONTENT || {};
/* Module m21 gap-closing file (GAP_SPEC.md): new nodes m21-n10, m21-n11, m21-n12, then extensions to m21-n01..n08.
   Sources: Hupp, Contemporary Oral and Maxillofacial Surgery 7th ed; Peterson's OMFS; Fonseca; Miloro;
   AAOM Clinician's Guide to Orofacial Pain; ICHD-3 (2018); ICOP (2020); Sharav & Benoliel; Okeson;
   IASP pain definition (2020); Melzack & Casey (1968); Lobbezoo et al bruxism consensus (2013, 2018);
   AASM/AADSM oral appliance guideline (Ramar et al 2015); Schropp et al 2003 (ridge resorption); IADT 2020;
   Canadian Guideline for Opioids for Chronic Non-Cancer Pain (2017). Consistent with m21.js, m17z.js (pre-prosthetic),
   m20.js, m11 (analgesics). */

/* ---------------------------------------------------------------- m21-n10 */
window.CONTENT["m21-n10"] = {
 understand: `
 <p><b>Pain is an experience, not just a signal.</b> The IASP defines pain as an unpleasant sensory and emotional experience associated with, or resembling that associated with, actual or potential tissue damage. Melzack and Casey described three dimensions: <b>sensory-discriminative</b> (where, how strong, what quality), <b>affective-motivational</b> (how unpleasant, the urge to escape) and <b>cognitive-evaluative</b> (what it means, judged against experience and belief). Chronic pain lives in the last two as much as the first, which is why mood, sleep and fear change it.</p>
 <p><b>Sort pain by mechanism.</b> <b>Nociceptive</b> pain comes from injured tissue: pulp, PDL, muscle, joint. <b>Neuropathic</b> pain comes from damage or disease of the nerve itself; it burns, shoots or tingles and may come with numbness or allodynia (pain from light touch). <b>Neurovascular</b> pain (migraine, cluster headache) comes in attacks, often with autonomic signs. Trigeminal, upper cervical, glossopharyngeal and vagal afferents converge on the same brainstem neurons, so pain from the heart, sinus, ear or neck can be felt in teeth. A sound tooth that tests normal is not treated.</p>
 <div class="tscroll"><table>
 <tr><th>Condition</th><th>Key features</th><th>First approach</th></tr>
 <tr><td>Trigeminal neuralgia</td><td>Seconds of electric-shock pain, trigger zone, pain-free gaps</td><td>Carbamazepine or oxcarbazepine; MRI</td></tr>
 <tr><td>Post-herpetic neuralgia</td><td>Burning pain and allodynia in the zoster area, 3 months or more after the rash; older patients; V1 most often</td><td>Gabapentinoid, tricyclic, topical lidocaine; vaccination prevents zoster</td></tr>
 <tr><td>Persistent idiopathic dentoalveolar pain (PIDAP)</td><td>Continuous ache in a tooth or socket area over 2 hours a day for over 3 months; normal findings; often leads to repeated, unhelpful dental treatment</td><td>Stop dental treatment; tricyclic or gabapentinoid; refer</td></tr>
 <tr><td>Migraine</td><td>Attacks of 4 to 72 hours, usually one-sided, pulsating, worse with activity, with nausea or light and sound sensitivity; aura in some</td><td>NSAID or triptan; medical care</td></tr>
 <tr><td>Tension-type headache</td><td>Bilateral pressing band, mild to moderate, no nausea, not worse with activity</td><td>Simple analgesic; sleep and stress</td></tr>
 <tr><td>Cluster headache</td><td>15 to 180 minute orbital attacks with tearing and blocked nose; restless</td><td>100% oxygen or triptan; referral</td></tr>
 </table></div>
 <p><b>Drugs follow mechanism.</b> Carbamazepine blocks sodium channels and stops the paroxysms of trigeminal neuralgia. Check a blood count and sodium, because it can cause agranulocytosis and hyponatraemia, and screen for HLA-B*15:02 in patients of Asian ancestry because of the risk of Stevens-Johnson syndrome. Low-dose tricyclics (amitriptyline 10 to 25 mg at night) and gabapentin or pregabalin damp continuous neuropathic pain. NSAIDs help inflammatory pain, not neuropathic pain. <b>Opioids are not used long term</b> for chronic orofacial pain: they lose effect, cause dependence and can make pain worse (opioid-induced hyperalgesia).</p>
 <p><b>Red flags send the patient on.</b> Spreading numbness of the lip or chin, progressive trismus, one-sided hearing loss or weight loss (tumour); a new headache after 50 with jaw claudication (giant cell arteritis); neurological signs; exertional jaw pain (cardiac). Glossopharyngeal neuralgia gives brief stabbing pain in the throat and ear on swallowing. Chronic pain is managed by a team: explanation, cognitive-behavioural therapy, sleep care and one prescriber.</p>
 <p><b>Why the exam cares.</b> Stems give the time pattern and trigger of a pain and ask for the diagnosis, the drug, the red flag, or the reason not to drill.</p>`,
 connect: [
  {to:"m21-n08", why:"TMD and the first neuropathic and neurovascular red flags are taught there; this node completes the non-dental differential."},
  {to:"m03-n03", why:"Convergence of trigeminal and other afferents in the brainstem explains referred pain to healthy teeth."},
  {to:"m02-n03", why:"The trigeminal division involved (V1 in post-herpetic neuralgia, V2 and V3 in trigeminal neuralgia) is read from the pain map."},
  {to:"m11-n04", why:"Choosing NSAIDs for inflammatory pain and avoiding long-term opioids for chronic pain are prescribing decisions."},
  {to:"m20-n01", why:"Ruling out pulpal and apical disease by testing comes before any non-odontogenic diagnosis."}
 ],
 apply: {
  vignette:"A 62-year-old woman has had a continuous dull ache in the upper left molar region for 8 months, more than 6 hours a day. Extraction of 2.6 and root canal treatment of 2.7, done for the pain, did not help. Clinical examination, radiographs and CBCT are normal, and palpation of the masticatory muscles does not reproduce the pain. The most appropriate management is:",
  options:["Stop dental treatment and refer for chronic pain management","Extract 2.5 and 2.7","Retreat 2.7 and prescribe amoxicillin","Start carbamazepine for trigeminal neuralgia"],
  answer:"Stop dental treatment and refer for chronic pain management",
  steps:["Step 1: the ask is management of a continuous toothache with no dental cause.","Step 2: continuous pain over 2 hours a day for over 3 months, normal findings and failure of dental treatment fit persistent idiopathic dentoalveolar pain.","Step 3: eliminate extraction and retreatment: more dental procedures do not treat a neuropathic-type pain and often worsen it.","Step 4: eliminate carbamazepine: trigeminal neuralgia is paroxysmal, seconds long, with triggers and pain-free gaps, not a constant ache.","Step 5: stopping dental treatment and referring for multidisciplinary care (tricyclic or gabapentinoid, explanation) matches the diagnosis."]
 },
 teach: {
  prompt:"A patient with migraine might first go to a dentist. Explain why, and how you would tell the pain from pulpitis.",
  model:"Migraine is neurovascular pain carried by the trigeminal system, so it can be felt over the maxilla and teeth. It comes in attacks of 4 to 72 hours, pulsating, worse with activity, with nausea or sensitivity to light and sound, and with symptom-free gaps between attacks. Pulpitis is triggered by thermal or sweet stimuli and is reproduced by testing the tooth, and a local anaesthetic at the tooth abolishes it. If every tooth tests normal, the pain follows the migraine pattern and anaesthetic gives no clear relief, the patient needs medical care, not dental treatment."
 },
 cards: [
  ["Three dimensions of pain (Melzack and Casey)","Sensory-discriminative, affective-motivational, cognitive-evaluative"],
  ["IASP definition of pain","An unpleasant sensory and emotional experience associated with, or resembling that associated with, actual or potential tissue damage"],
  ["Words that suggest neuropathic pain","Burning, shooting, tingling; numbness; allodynia (pain from light touch)"],
  ["Post-herpetic neuralgia","Pain persisting 3 months or more after zoster; burning and allodynia; gabapentinoid, tricyclic, topical lidocaine"],
  ["PIDAP (formerly atypical odontalgia)","Continuous tooth or socket pain over 2 h a day for over 3 months, normal findings; stop dental treatment"],
  ["Migraine pattern","4-72 h, one-sided, pulsating, worse with activity, nausea or photophobia and phonophobia"],
  ["Tension-type headache pattern","Bilateral pressing band, mild to moderate, no nausea, not worse with activity"],
  ["Acute treatment of a cluster attack","High-flow 100% oxygen or a triptan"],
  ["Monitoring on carbamazepine","Blood count and sodium; HLA-B*15:02 screening in patients of Asian ancestry"],
  ["Why no long-term opioids for chronic orofacial pain","Tolerance, dependence, hyperalgesia, no lasting benefit"],
  ["Spreading numb lip or chin with a normal tooth","Red flag for malignancy: urgent imaging and referral"]
 ],
 questions: [
  ["Which of the following lists the three dimensions of pain described by Melzack and Casey?","Sensory, affective and cognitive dimensions",["Nociceptive, neuropathic and nociplastic types","Peripheral, spinal and cortical components","Acute, subacute and chronic durations"],"Pain has a sensory-discriminative, an affective-motivational and a cognitive-evaluative dimension. Nociceptive and neuropathic are mechanisms, not dimensions."],
  ["A 72-year-old has burning pain and pain from light touch over the right forehead, 5 months after a vesicular rash there. The teeth are normal. The most likely diagnosis is:","Post-herpetic neuralgia",["Classical trigeminal neuralgia","Cluster headache","Giant cell arteritis"],"Pain persisting months after shingles in the same area, with allodynia, is post-herpetic neuralgia, most often in V1. Trigeminal neuralgia gives seconds-long shocks with pain-free gaps."],
  ["Which of the following is a first-line drug for post-herpetic neuralgia?","Gabapentin",["Oxycodone","Acyclovir","Prednisone"],"Gabapentinoids and tricyclics treat established neuropathic pain. Acyclovir treats acute zoster and does not reverse the established neuralgia."],
  ["A 48-year-old has had a constant dull ache in the region of 3.6 for 6 months, with no preceding injury or treatment. Clinical, radiographic and CBCT findings are normal, and muscle palpation does not reproduce it. The most likely diagnosis is:","Persistent idiopathic dentoalveolar pain",["Symptomatic apical periodontitis","Trigeminal neuralgia of the V3 division","Myofascial pain with referral to 3.6"],"Continuous pain for over 3 months with normal findings is PIDAP. Myofascial referral would be reproduced by palpating the muscle."],
  ["A 30-year-old has attacks of throbbing pain over the left maxilla and temple lasting about a day, with nausea and dislike of light, two or three times a month. The teeth test normal. The most likely diagnosis is:","Migraine",["Cluster headache","Tension-type headache","Trigeminal neuralgia"],"Attacks of hours to days with pulsating pain, nausea and photophobia fit migraine. Cluster attacks last 15 to 180 minutes with tearing and nasal blockage."],
  ["Which feature best distinguishes tension-type headache from migraine?","Bilateral pressing pain without nausea",["Pain lasting several hours at a time","Onset in early adult life","Relief from simple analgesics"],"Tension-type headache is a bilateral pressing band without nausea and is not worsened by activity. Duration, age of onset and analgesic response overlap."],
  ["The most effective acute treatment for a cluster headache attack is:","High-flow 100% oxygen",["Oral acetaminophen","Oral carbamazepine","Low-dose amitriptyline"],"Inhaled oxygen (or a triptan) aborts cluster attacks. Oral analgesics act too slowly for attacks lasting under 3 hours."],
  ["Which tests are most appropriate while a patient takes carbamazepine for trigeminal neuralgia?","Blood count and serum sodium",["Serum calcium and phosphate","INR and activated PTT","Fasting glucose and HbA1c"],"Carbamazepine can cause agranulocytosis and hyponatraemia. It does not routinely disturb clotting or glucose."],
  ["Which of the following best explains why long-term opioids are avoided for chronic orofacial pain?","Tolerance, dependence and hyperalgesia",["They block the action of tricyclic drugs","They inhibit platelets and cause bleeding","They are contraindicated with acetaminophen"],"Long-term opioids lose effect, create dependence and can heighten pain, without evidence of lasting benefit. They do not affect platelets."],
  ["Low-dose amitriptyline is used in chronic orofacial pain mainly because it:","Enhances descending pain inhibition",["Reduces inflammation in the muscles","Blocks sodium channels in the pulp","Treats the depression causing the pain"],"Tricyclics raise serotonin and noradrenaline in descending inhibitory pathways at doses below those used for depression. They are not anti-inflammatory."],
  ["A 25-year-old has right earache. Otoscopy is normal, and palpation of the right TMJ lateral pole reproduces the familiar pain. The most likely source is:","Arthralgia of the right TMJ",["Otitis media of the right ear","Glossopharyngeal neuralgia","A stone in the parotid duct"],"The joint lies just in front of the ear, and its pain is often felt as earache. A normal ear and familiar pain on joint palpation point to arthralgia."],
  ["A 55-year-old has brief stabbing pain deep in the throat and ear, triggered by swallowing, with pain-free intervals. The most likely diagnosis is:","Glossopharyngeal neuralgia",["Trigeminal neuralgia","Burning mouth syndrome","Acute pericoronitis of 4.8"],"Paroxysmal pain in the throat and ear triggered by swallowing is glossopharyngeal neuralgia. Trigeminal neuralgia affects the face and is triggered by touch."],
  ["A 58-year-old has numbness of the left lower lip and chin that has spread over 2 months, with a dull ache in 3.5 to 3.7, which test normal. The most appropriate next step is:","Urgent imaging and specialist referral",["Root canal treatment of 3.6","Amitriptyline and a review in one month","Reassurance and review in 6 months"],"A spreading numb chin without dental cause is a red flag for malignancy along the inferior alveolar nerve. Treating teeth or waiting delays diagnosis."]
 ]
};

/* ---------------------------------------------------------------- m21-n11 */
window.CONTENT["m21-n11"] = {
 understand: `
 <p><b>An emergency is defined by threat, not by noise.</b> Triage asks, in order: is the airway, breathing or circulation at risk; is a tooth or tissue time-critical (avulsion, displaced tooth, uncontrolled bleeding); is an infection spreading; or is the problem pain or function alone? The tiers are in the biopsy and triage node; this node works through presentations.</p>
 <p><b>Swelling.</b> Ask about breathing, swallowing saliva, voice, mouth opening, eye closure and fever. Any of these, or a raised floor of mouth, means hospital now. A localised swelling in a well patient is seen the same day for drainage and removal of the source; antibiotics are added for systemic signs or spreading infection.</p>
 <p><b>Bleeding after an extraction.</b> By phone: sit up and bite firmly on folded damp gauze for 20 to 30 minutes without checking. If it continues, attend. Ask about anticoagulants, antiplatelets, liver disease and alcohol. A pale, dizzy patient, or bleeding that pressure cannot slow, is an emergency.</p>
 <p><b>Trauma.</b> Screen for head injury first: loss of consciousness, vomiting, amnesia, neck pain. An avulsed permanent tooth is replanted at the scene or kept in milk, and the patient comes now. A tooth missing and not found may be intruded, in the lip, swallowed or inhaled: radiograph the socket and lip, and arrange a chest film if inhalation is possible.</p>
 <p><b>Fractured tooth or lost restoration.</b> An exposed pulp after trauma in a young patient is seen the same day to keep the pulp. Sensitive exposed dentine is covered within days. A crown that comes off a sound preparation can be recemented with temporary cement after checking for caries or fracture; household glue is not used.</p>
 <p><b>Denture sores.</b> Relieve the denture over the ulcer and review in about 2 weeks. An ulcer that persists once the cause is removed is biopsied or referred.</p>
 <p><b>Orthodontic problems</b> are mostly comfort problems. A poking wire is pushed flat or cut with distal-end cutters and covered with orthodontic wax. A loose bracket that stays on the wire is left and the orthodontist told. Aching for a few days after an adjustment is normal and needs only an analgesic.</p>
 <p><b>Pain after treatment.</b> Pain that worsens on day 2 to 4 after an extraction suggests dry socket; swelling and fever after day 3 suggest infection; swelling after root canal treatment is a flare-up.</p>
 <p><b>Continuity of care.</b> Record after-hours advice: what was asked, what was advised, who advised. Treat the problem and, where possible, its cause, then return the patient to their dentist with a written summary. Confirm that referrals arrive.</p>
 <p><b>Why the exam cares.</b> Stems give a phone call or a walk-in and ask what to do first or how soon to see the patient.</p>`,
 connect: [
  {to:"m21-n09", why:"The triage tiers and phone red flags applied here are set out in that node."},
  {to:"m21-n04", why:"A swelling call is sorted by the airway and spread signs taught for odontogenic infection."},
  {to:"m21-n03", why:"Bleeding and dry socket calls follow the haemostasis ladder and dry socket care."},
  {to:"m20-n06", why:"Avulsion, luxation and crown fracture calls depend on IADT timing rules."},
  {to:"m22-n05", why:"Knowing fixed appliance components makes wire and bracket emergencies simple to manage."}
 ],
 apply: {
  vignette:"A 10-year-old fell 1 hour ago. Tooth 2.1 is missing and was not found at the scene, the area is swollen, and the child coughed for several minutes after the fall. There was no loss of consciousness. The most appropriate first step is:",
  options:["Radiograph the socket area and lip, and arrange a chest film","Assume the tooth was lost and plan a space maintainer","Prescribe amoxicillin and review in one week","Place a flexible splint on the adjacent teeth"],
  answer:"Radiograph the socket area and lip, and arrange a chest film",
  steps:["Step 1: the ask is the first step for a tooth that is missing after trauma.","Step 2: a missing tooth may be intruded, embedded in the lip, swallowed or inhaled; coughing after the fall raises inhalation.","Step 3: eliminate planning a space maintainer: an intruded tooth needs treatment and an inhaled tooth is a medical emergency.","Step 4: eliminate antibiotics and splinting: neither finds the tooth, and there is nothing yet to splint.","Step 5: dental and lip films find an intruded or embedded tooth, and a chest film excludes inhalation."]
 },
 teach: {
  prompt:"A patient phones after hours with a swelling. Explain which answers make you send them to hospital rather than book them in tomorrow, and why.",
  model:"I ask about breathing, swallowing saliva, voice change, mouth opening, swelling under the tongue or jaw, swelling closing the eye, and fever. Difficulty breathing or swallowing, a muffled voice, a raised floor of mouth or marked trismus means the infection may be in deep spaces near the airway, and closure of the eye suggests spread toward the orbit and cavernous sinus. These patients need hospital care now because airway loss can come within hours. A localised swelling in an otherwise well patient can be seen the same day or next morning for drainage and source removal."
 },
 cards: [
  ["Triage order","Airway and circulation; time-critical tooth or tissue; spreading infection; pain or function alone"],
  ["Phone advice for an oozing socket","Sit up, bite on damp gauze 20-30 minutes without checking; attend if it continues"],
  ["Tooth missing after trauma and not found","Radiograph socket and lip; chest film if inhalation possible"],
  ["Crown off a sound preparation","Recement with temporary cement after checking for caries or fracture; no household glue"],
  ["Denture ulcer persisting after relief for about 2 weeks","Biopsy or refer"],
  ["Poking orthodontic wire","Push flat or cut with distal-end cutters; cover with orthodontic wax"],
  ["Loose bracket still on the wire","Leave it; wax if needed; tell the orthodontist"],
  ["Aching 2 days after an archwire change","Normal; reassure and give a mild analgesic"],
  ["Trauma with vomiting or amnesia","Head injury first: medical assessment before dental care"],
  ["Continuity after an emergency visit","Document advice; send a written summary to the regular dentist; confirm referrals"]
 ],
 questions: [
  ["A 45-year-old phones: swelling under the jaw since yesterday, now difficulty swallowing saliva and a muffled voice. The most appropriate advice is:","Go to a hospital emergency department now",["Come to the dental office first thing tomorrow","Start leftover amoxicillin and rest tonight","Use warm salt water rinses and an ice pack"],"Difficulty swallowing saliva and a muffled voice suggest deep-space spread threatening the airway. Waiting or self-medicating risks airway loss."],
  ["A patient phones 4 hours after an extraction because the socket is oozing. The most appropriate first advice is to:","Bite firmly on damp gauze for 30 minutes",["Rinse vigorously with warm salt water","Take aspirin for the discomfort","Lie flat with the head kept low"],"Sustained pressure lets the clot form. Rinsing dislodges it, and aspirin impairs platelet function."],
  ["A 50-year-old's crown on 2.4 has come off intact. The preparation is sound with no caries, and the regular dentist cannot see the patient for a week. The most appropriate emergency care is to:","Recement it with temporary cement",["Recement it with cyanoacrylate glue","Leave it out until a new crown is made","Remake the crown at this appointment"],"Temporary cement protects the tooth and keeps the crown removable for the regular dentist. Household glue can damage the tooth and may be toxic."],
  ["A 14-year-old with fixed appliances has an archwire end poking into the cheek, and the orthodontist is away. The most appropriate management is to:","Cut the wire end and cover it with wax",["Remove the whole appliance at once","Prescribe chlorhexidine and wait for review","Debond the molar band and the archwire"],"Trimming the distal end and covering it relieves the trauma without disturbing treatment. Removing the appliance is unnecessary."],
  ["A bracket on 1.2 has come loose but is still on the archwire and is not causing pain. The most appropriate advice is to:","Leave it and tell the orthodontist",["Pull it off the wire with pliers at home","Cut the archwire on both sides of it","Glue it back with a household adhesive"],"A loose bracket held on the wire is harmless; the orthodontist rebonds it. Cutting the wire or gluing it causes more problems."],
  ["Two days after an archwire change, a 13-year-old has diffuse aching of the teeth when chewing. The most appropriate management is to:","Reassure and suggest a mild analgesic",["Remove the archwire until the pain stops","Prescribe amoxicillin for 5 days","Take periapical films of every tooth"],"Aching for a few days after activation is the normal response of the PDL to new force. There is no infection to treat."],
  ["A denture ulcer on the lingual ridge persists 3 weeks after the flange was relieved. The most appropriate next step is to:","Biopsy or refer the lesion",["Relieve the flange again and review","Apply a topical steroid for a month","Reline the denture with a soft material"],"An ulcer that does not heal about 2 weeks after its cause is removed must be examined histologically to exclude carcinoma."],
  ["After a fall, 1.1 of an 11-year-old is missing and was not found; the child coughed for several minutes afterwards. In addition to dental films, the most appropriate investigation is:","A chest radiograph",["A lateral skull film","An MRI of the head","An abdominal ultrasound"],"Coughing after the injury raises the possibility of an inhaled tooth, which a chest film shows. A swallowed tooth usually passes and is less urgent."],
  ["A 9-year-old fractured 2.1 an hour ago, with a 1 mm pulp exposure and an immature root. The most appropriate timing of care is:","The same day, to preserve the pulp",["Within a week, once swelling settles","At the next routine recall visit","After the root has completed growth"],"Early partial pulpotomy keeps the pulp alive so the root can finish forming. Delay lets bacteria penetrate deeper."],
  ["Three days after extraction of 3.6, a 30-year-old phones with worsening throbbing pain radiating to the ear and a bad taste, without swelling or fever. The most appropriate response is to:","See the patient today for a dressing",["Prescribe amoxicillin over the phone","Advise vigorous rinsing and wait a week","Send the patient to hospital emergency"],"Worsening pain on day 2 to 4 with no systemic signs suggests dry socket, managed by irrigation and a sedative dressing. Antibiotics are not routine."],
  ["A 16-year-old arrives after a hockey collision with a fractured 1.1. He vomited twice and cannot remember the event. The first priority is:","Medical assessment of a head injury",["Restoring 1.1 with composite","A periapical film of 1.1","Splinting the adjacent teeth"],"Vomiting and amnesia suggest a head injury, which comes before dental care. The tooth can be managed once he is cleared."],
  ["After an after-hours visit to drain an abscess for another practice's patient, the most appropriate continuity step is to:","Send a summary to the regular dentist",["Complete the root canal treatment yourself","Rely on the patient to explain the visit","Keep the records until someone asks"],"A written summary lets the regular dentist continue care. Relying on the patient risks lost information."]
 ]
};

/* ---------------------------------------------------------------- m21-n12 */
window.CONTENT["m21-n12"] = {
 understand: `
 <p><b>Pre-prosthetic surgery reshapes the foundation, then the prosthesis follows.</b> A denture is best retained by a broad, smooth, firm ridge with a deep vestibule and no undercuts. Surgery removes what blocks that: sharp or bulky bone, mobile tissue or a high frenum. It is planned with the prosthodontist, done before final impressions, and conservative, because lost bone is hard to replace.</p>
 <ul>
 <li><b>Alveoloplasty:</b> at extraction, compress the expanded socket walls and smooth only sharp spicules with a rongeur or bone file; later, reduce undercuts that stop a denture seating.</li>
 <li><b>Tori and exostoses:</b> remove only if they block a denture or connector, are repeatedly ulcerated, or affect speech. A palatal torus is sectioned and removed in pieces, because the nasal floor lies above it.</li>
 <li><b>Tuberosity reduction</b> when the tuberosity meets the retromolar pad at the correct vertical dimension; take a radiograph first, because the sinus may extend into it.</li>
 <li><b>Frenectomy</b> for a frenum that unseats a denture, keeps a diastema open after the canines erupt, or restricts the tongue.</li>
 <li><b>Epulis fissuratum:</b> remove the irritation first (relieve the flange); excise what remains and send it for histology. <b>Vestibuloplasty</b> is now rare, as implants replaced it.</li>
 <li><b>Ridge preservation:</b> a socket loses about half its width in the first year, most of it in the first 3 months, so grafting at extraction can keep volume for an implant. A pneumatised sinus is managed by lifting and grafting the sinus floor.</li>
 <li><b>Canine exposure:</b> a palatal canine is often exposed openly; a labial canine high in the vestibule is exposed by a closed technique (bonded attachment, flap replaced), and one nearer the crest by an apically repositioned flap, to keep attached gingiva.</li>
 </ul>
 <p><b>Orthognathic surgery</b> corrects skeletal discrepancies too large for orthodontic camouflage, usually after growth. Pre-surgical orthodontics removes dental compensations, surgery moves the jaws, and post-surgical orthodontics finishes the bite. A <b>Le Fort I osteotomy</b> cuts above the root apices so the tooth-bearing maxilla can be advanced, raised (impacted) or lowered. A <b>bilateral sagittal split osteotomy (BSSO)</b> splits the ramus: the <b>proximal segment</b> keeps the condyle and coronoid; the <b>distal segment</b> carries the teeth and the inferior alveolar nerve, which should stay with it. Altered lower lip sensation is the commonest complication. A genioplasty moves the chin.</p>
 <p><b>Snoring and obstructive sleep apnoea (OSA).</b> The upper airway collapses repeatedly in sleep, so oxygen falls and sleep fragments. Clues: loud snoring, witnessed pauses, daytime sleepiness, obesity, a thick neck, retrognathia, hypertension. The apnoea-hypopnoea index grades it: 5 to 15 events an hour mild, 15 to 30 moderate, 30 or more severe. Snoring may be its only sign, so the dentist screens and refers to a physician for a sleep study; a dentist does not diagnose it. CPAP is first-line. A custom, titratable mandibular advancement device suits patients who cannot tolerate CPAP or prefer an alternative; it is made after diagnosis, with dental follow-up and a repeat sleep test. Maxillomandibular advancement is for severe or refractory cases.</p>
 <p><b>Why the exam cares.</b> Stems ask which surgery fits a problem, which segment holds the nerve, and what to do first for a snorer.</p>`,
 connect: [
  {to:"m17-n04", why:"Denture problems from tori, flabby tissue, tuberosities and epulis are solved by the surgery taught here."},
  {to:"m18-n02", why:"Ridge preservation and sinus augmentation decide whether an implant can be placed."},
  {to:"m22-n07", why:"Orthognathic surgery is planned with pre- and post-surgical orthodontics."},
  {to:"m02-n03", why:"The inferior alveolar nerve's course through the ramus decides where the sagittal split runs and why the lip goes numb."},
  {to:"m21-n08", why:"Mandibular advancement devices load the TMJ and change the bite, so jaw function is checked before and during use."}
 ],
 apply: {
  vignette:"A 52-year-old overweight man's partner complains of his loud snoring and pauses in his breathing. He nods off while driving. He asks the dentist for an anti-snoring appliance. The most appropriate first step is to:",
  options:["Refer him to a physician for a sleep study","Make a custom mandibular advancement device","Advise a nasal decongestant at night","Refer him for palatal surgery"],
  answer:"Refer him to a physician for a sleep study",
  steps:["Step 1: the ask is the first step for a snorer with possible sleep apnoea.","Step 2: snoring, witnessed pauses, sleepiness while driving and obesity strongly suggest OSA, a medical diagnosis.","Step 3: eliminate making an appliance now: it could mask the snoring while untreated OSA continues, and the severity decides whether CPAP is needed.","Step 4: eliminate decongestants and palatal surgery: neither addresses an undiagnosed airway disorder.","Step 5: a physician-ordered sleep study confirms and grades OSA; an oral appliance may then be prescribed."]
 },
 teach: {
  prompt:"Explain why, in a sagittal split osteotomy, the nerve should stay with the distal segment and why lip numbness is still common.",
  model:"The split runs through the ramus and body so that the inner (lingual) and outer (buccal) cortices separate. The inferior alveolar nerve enters the lingual side of the ramus and runs in the canal to the tooth-bearing body, which becomes the distal segment, so it should stay there as that segment is moved. The proximal segment keeps the condyle and must not take the nerve with it. Even when the nerve stays in place, it is stretched, compressed or handled during splitting and moving, so altered lower lip sensation is the commonest complication, and most cases improve with time."
 },
 cards: [
  ["Goal of pre-prosthetic surgery","A broad, smooth, firm ridge with a deep vestibule and no undercuts, done before final impressions"],
  ["Risk when removing a torus palatinus","Perforating the nasal floor"],
  ["Before tuberosity reduction","Radiograph: the sinus may extend into a bony tuberosity"],
  ["Epulis fissuratum: first step","Relieve the flange; excise what remains and send for histology"],
  ["Ridge width loss after extraction","About half in the first year, most in the first 3 months"],
  ["BSSO: proximal vs distal segment","Proximal: condyle and coronoid. Distal: teeth and inferior alveolar nerve"],
  ["Commonest complication of BSSO","Altered lower lip sensation"],
  ["Orthognathic sequence","Pre-surgical orthodontics (decompensation), surgery, post-surgical orthodontics"],
  ["AHI severity bands","5-15 mild, 15-30 moderate, 30 or more severe events per hour"],
  ["First step for a snorer","Refer to a physician for a sleep study; the dentist does not diagnose OSA"],
  ["Oral appliance for OSA: who","Adults intolerant of CPAP or preferring an alternative; custom, titratable; after diagnosis"]
 ],
 questions: [
  ["In a bilateral sagittal split osteotomy, the segments that carry the condyles are the:","Proximal segments",["Distal segments","Tooth-bearing segments","Symphyseal segments"],"The proximal segments keep the condyle and coronoid. The distal segment carries the teeth."],
  ["In a sagittal split osteotomy, the inferior alveolar neurovascular bundle should remain in the:","Distal segment",["Proximal segment","Coronoid segment","Condylar segment"],"The nerve runs to the tooth-bearing body, which is the distal segment. Trapping it in the proximal segment stretches or tears it."],
  ["The most common complication of a bilateral sagittal split osteotomy is:","Altered lower lip sensation",["Facial nerve palsy","Resorption of the condyles","Non-union of the ramus"],"The inferior alveolar nerve is handled during the split, so lip numbness is frequent, though usually improving. The others are uncommon."],
  ["A 19-year-old with a skeletal Class III malocclusion is planned for orthognathic surgery. Pre-surgical orthodontics aims to:","Remove the dental compensations",["Camouflage the discrepancy fully","Close all spaces by extraction","Expand the arches for stability"],"Decompensation places the teeth upright over their bases so the jaws can be moved by the full skeletal amount. Camouflage is the alternative to surgery, not preparation for it."],
  ["Which procedure is used to advance a hypoplastic maxilla?","Le Fort I osteotomy",["Sagittal split osteotomy","Genioplasty","Vertical ramus osteotomy"],"A Le Fort I osteotomy mobilises the tooth-bearing maxilla. Sagittal split and ramus osteotomies move the mandible."],
  ["A 45-year-old overweight man snores, according to his wife. The most appropriate initial management is:","Medical referral for a sleep assessment",["An over-the-counter boil-and-bite device","A custom mandibular advancement device","Reassurance that snoring is harmless"],"Snoring is a cardinal sign of obstructive sleep apnoea, which a physician must diagnose with a sleep study. An appliance first may mask untreated OSA."],
  ["Under the AASM and AADSM 2015 guideline, an oral appliance is most appropriate for an adult with OSA who:","Cannot tolerate CPAP",["Has not yet had a sleep study","Has severe OSA and uses CPAP well","Wears complete upper and lower dentures"],"Oral appliances are recommended for diagnosed OSA when CPAP is not tolerated or the patient prefers an alternative. They need teeth to anchor them."],
  ["An apnoea-hypopnoea index of 22 events per hour indicates:","Moderate OSA",["Mild OSA","Severe OSA","Primary snoring"],"An AHI of 15 to 30 is moderate; 30 or more is severe."],
  ["A long-term side effect of a mandibular advancement device is:","Reduced overjet and overbite",["Increased overjet and overbite","A bilateral posterior crossbite","Intrusion of the lower incisors"],"Forward force retroclines the upper incisors and proclines the lower ones, so overjet and overbite fall. Patients are reviewed for these bite changes."],
  ["A large lobulated torus palatinus prevents a seal under a planned complete upper denture. During its removal, the structure most at risk is the:","Floor of the nose",["Maxillary sinus","Infraorbital nerve","Pterygoid hamulus"],"The torus lies under the midline nasal floor, which can be perforated if it is removed in one piece. The sinus lies lateral to it."],
  ["A 70-year-old has folds of fibrous tissue in the labial vestibule where an over-extended denture flange rests. The most appropriate first step is to:","Relieve the flange and review",["Excise the folds at this visit","Reline with a hard acrylic","Prescribe a topical antifungal"],"Removing the irritation lets the inflammatory part shrink; what remains is then excised and sent for histology."],
  ["Without intervention, the greatest loss of alveolar ridge width after an extraction occurs:","In the first 3 months",["Between years 1 and 2","After 5 years","Once a denture is first worn"],"Most of the roughly 50% width loss in the first year happens in the first 3 months, which is why ridge preservation is done at extraction."],
  ["For a labially impacted canine high in the vestibule, which exposure best preserves attached gingiva?","Closed eruption technique",["Excision of the overlying gingiva","Extraction and implant placement","Laser gingivectomy over the crown"],"A closed technique brings the canine through the attached gingiva, keeping keratinised tissue over it. Simple excision high in the vestibule leaves it with mucosa only."]
 ]
};

/* ================================================================ EXTENSIONS */
window.EXT = (window.EXT || []).concat([

/* ---------------------------------------------------------------- m21-n01 */
{ node:"m21-n01",
  notes:`<p><b>Forceps placement.</b> Seat the beaks on root, below the cemento-enamel junction, as far apically as possible and <b>parallel to the long axis</b> of the tooth. Beaks on the crown crush or snap it; beaks at an angle tip the force and break the root. Seat the lingual or palatal beak first, where it is harder to see.</p>
<p><b>Movements used</b> are apical, buccal, lingual or palatal, rotation, figure-of-eight (lower molars) and traction. Mesiodistal movement is not used: neighbours block it. The <b>upper first molar</b> is delivered mainly <b>buccally</b>, because the buccal plate is thin and the palatal root is held in thick palatal bone; strong palatal force snaps the palatal root. When the roots are <b>trifurcated and widely divergent</b>, or the sinus dips between them, section the roots and deliver each separately, rather than forcing the tooth, which can fracture the sinus floor or tuberosity.</p>
<p><b>Positions.</b> For upper teeth, tip the chair back so the maxillary occlusal plane is at about 60° to the floor, with the mouth at or slightly below the operator's elbow. For lower teeth, sit the patient more upright and lower, so the mandibular occlusal plane is parallel to the floor when the mouth is open.</p>
<p><b>Bone file.</b> The teeth of a Miller bone file are angled to cut on the <b>pull stroke</b>; pushing burnishes and crushes bone. It is for final smoothing, while rongeurs remove bulk.</p>
<p><b>Root fragments.</b></p>
<ul>
<li><b>Primary tooth:</b> a small fractured root tip is left when retrieving it would damage the successor; it usually resorbs or is shed. Tell the parents and record it.</li>
<li><b>Permanent root with a circumscribed radiolucency:</b> remove the root and curette the lesion, because infected granulation tissue or cyst lining left behind can persist or enlarge.</li>
</ul>`,
  cards:[
   ["Forceps beak placement","On root, as far apically as possible, parallel to the long axis"],
   ["Why deliver 1.6 mainly buccally?","Thin buccal plate; the palatal root is held in thick palatal bone"],
   ["Chair for maxillary extractions","Tipped back: maxillary occlusal plane about 60° to the floor, mouth near the operator's elbow"],
   ["A Miller bone file cuts on","The pull stroke"],
   ["Fractured primary root tip next to the successor","Leave it; it usually resorbs; inform and record"]
  ],
  questions:[
   ["When extracting a tooth with forceps, the beaks should be placed:","Parallel to the long axis of the tooth",["Perpendicular to the long axis of the root","On the enamel just above the contact area","At 45 degrees to the occlusal plane"],"Beaks seated on root along the long axis transmit force to the socket and move the centre of rotation apically. Angled beaks break the root."],
   ["The main forceps movement for 2.6 is buccal because:","The buccal cortical plate is thinner",["The palatal root is the shortest root","The sinus lies palatal to the roots","The buccal roots are usually fused"],"Bone expands most easily where it is thin, which is buccally for upper molars. The palatal root is usually the longest and strongest."],
   ["Which forceps movement is NOT used in extracting teeth?","Mesiodistal",["Rotational","Figure-of-eight","Apical"],"Adjacent teeth prevent mesiodistal movement. Figure-of-eight is used for lower molars and rotation for conical single roots."],
   ["For extraction of 1.7, the chair should be positioned so that the:","Maxillary occlusal plane is about 60° to the floor",["Mandibular occlusal plane is parallel to the floor","Patient's mouth is at the operator's shoulder level","Patient sits fully upright with the head flexed"],"Tipping the chair back gives a direct view and line of force for upper teeth, with the mouth near elbow height. A plane parallel to the floor is used for lower extractions."],
   ["The teeth of a Miller bone file are designed to smooth bone on the:","Pull stroke",["Push stroke","Rotary stroke","Side-to-side stroke"],"The file cuts as it is drawn toward the operator. Pushing it burnishes and crushes bone."],
   ["During extraction of 7.5 in a 7-year-old, the tip of the distal root fractures. It is 2 mm long and lies against the developing crown of 3.5. The most appropriate management is to:","Leave it and inform the parents",["Raise a flap and remove it","Retrieve it with a root tip pick","Refer for removal under sedation"],"Chasing a small primary root tip risks injuring the successor; it usually resorbs. Record it and review."],
   ["The roots of 1.6 are widely divergent and the sinus dips into the trifurcation. The most appropriate technique is to:","Section and remove the roots separately",["Use strong palatal force with the forceps","Rotate the tooth with upper molar forceps","Elevate it using 1.5 as the fulcrum"],"Divergent roots will not follow one path out; forcing them risks fracturing the sinus floor or tuberosity. Sectioning lets each root follow its own path."],
   ["A retained root of 4.6 in an edentulous area has a well-defined 1 cm radiolucency around it. It should be removed with curettage of the lesion because:","Its lining may persist and enlarge",["It slows resorption of the ridge","The lesion confirms osteomyelitis","Retained roots resorb the ridge"],"Infected granulation tissue or cyst epithelium left in bone can persist and grow under a prosthesis. A circumscribed radiolucency does not mean osteomyelitis."]
  ] },

/* ---------------------------------------------------------------- m21-n02 */
{ node:"m21-n02",
  notes:`<p><b>What makes a lower third molar easier or harder?</b> Beyond the Winter and Pell and Gregory classes:</p>
<ul>
<li><b>Easier:</b> mesioangular; Class I, position A; roots one-third to two-thirds formed; conical or fused roots; a wide follicle and PDL space; the elastic bone of a young patient; a gap between it and the second molar; distance from the canal; soft-tissue impaction only.</li>
<li><b>Harder:</b> distoangular; Class III, position C; long, thin, curved or divergent roots; a thin follicle or PDL space; the dense, less elastic bone of patients over about 35; contact with the second molar; closeness to the canal; complete bony impaction.</li>
</ul>
<p><b>Root pushed into the submandibular space.</b> At the lower third molar the lingual plate is thin and the roots lie below the mylohyoid line. Apical force on a loose root or an elevator can push a fragment through the lingual cortex into the submandibular space. Prevent it by avoiding apical pressure on loose roots and supporting the lingual plate with a finger. If it happens, a finger pressing up from the lingual side, below the socket, may push it back; otherwise stop searching blindly, image it and refer for retrieval.</p>
<p><b>Acute pericoronitis: settle first, then remove.</b> Extracting during acute infection risks spreading it into the fascial spaces, and trismus and inflamed tissue make access and anaesthesia poor, with more complications afterwards. Irrigate under the operculum, relieve trauma from an opposing upper third molar (which may be removed at once), prescribe chlorhexidine, and add an antibiotic only for systemic signs or spread. Remove the lower third molar once the acute phase has settled.</p>`,
  cards:[
   ["Root features that make a lower third molar easier","One-third to two-thirds formed; conical or fused roots"],
   ["Bone feature that makes removal harder","Dense, less elastic bone in patients over about 35"],
   ["Lower third molar root pushed lingually goes to","The submandibular space (roots lie below the mylohyoid line)"],
   ["Why delay extraction in acute pericoronitis?","Risk of spreading infection to deep spaces; poor access and anaesthesia"]
  ],
  questions:[
   ["Which feature makes surgical removal of an impacted 3.8 more difficult?","Dense bone in a 45-year-old",["A wide follicular space","Roots two-thirds formed","Conical fused roots"],"Dense, less elastic bone resists expansion and needs more removal. The other three are favourable features."],
   ["During removal of 4.8, a root tip disappears after apical pressure with an elevator, and the lingual plate is perforated below the mylohyoid line. The root is most likely in the:","Submandibular space",["Sublingual space","Pterygomandibular space","Inferior alveolar canal"],"Below the mylohyoid attachment, the lingual side of the lower third molar opens into the submandibular space. Above it lies the sublingual space."],
   ["A root tip of 3.8 has been pushed through the lingual plate below the mylohyoid. Gentle lingual finger pressure does not bring it back. The most appropriate next step is to:","Stop, image it and refer for retrieval",["Enlarge the socket to search for it","Leave it without telling the patient","Incise the floor of the mouth at once"],"Blind searching risks the lingual nerve and pushes the fragment deeper. Imaging locates it and a surgeon retrieves it, with the patient informed."],
   ["Extraction of 4.8 is usually deferred until acute pericoronitis has settled, mainly because of the risk of:","Spreading infection to deep spaces",["Damaging the developing roots of 4.7","Fracturing the mandible at the angle","Allergy to the local anaesthetic"],"Surgery through acutely infected tissue can spread infection into fascial spaces. The acute phase is settled first, then the tooth is removed."]
  ] },

/* ---------------------------------------------------------------- m21-n03 */
{ node:"m21-n03",
  notes:`<p><b>The expected course after third molar surgery.</b> Pain is usually worst on the first day as the anaesthetic wears off, then eases over 2 to 3 days. Swelling and trismus peak at about 2 to 3 days and settle over about a week; bruising may spread down the neck and fade over 1 to 2 weeks. Not expected: pain that worsens after easing (dry socket, usually day 2 to 4); swelling or trismus that increases after day 3, with fever (infection); numbness that outlasts the anaesthetic (nerve injury: record and review).</p>
<p><b>Late bleeding.</b> Bleeding that restarts a day or two after good haemostasis and does not stop with firm pressure has a cause. Look locally: a disturbed or infected clot, a torn flap, a bleeding bone or vessel. Ask systemically: a new aspirin, NSAID or anticoagulant, alcohol, liver disease, an undiagnosed bleeding disorder. Then act: local anaesthetic with vasoconstrictor, remove the loose clot, irrigate, find the source, pack a haemostatic agent and suture; add tranexamic acid. If it persists, order a CBC with platelets, INR and aPTT, and refer.</p>
<p><b>Sutures.</b> Sizes follow the USP scale: the more zeros, the thinner the thread, so 6-0 is finer than 3-0. Intraoral wounds usually take 3-0 or 4-0, facial skin 5-0 or 6-0. Resorbable: plain gut (resorbs fastest), chromic gut (tanned with chromium salts, which slows its breakdown, so it lasts longer), and synthetic polyglactin 910 or polyglycolic acid. Non-resorbable: silk (braided, easy to handle, wicks plaque), nylon and polypropylene (monofilament, little tissue reaction). Non-resorbable intraoral sutures are removed at about 5 to 7 days.</p>
<p><b>Fractured tuberosity still attached to soft tissue.</b> Stop. Bone held by mucoperiosteum is alive and will heal, so keep it. Free the tooth from it if possible (section the tooth and dissect the roots out), leave the bone and suture the soft tissue to stabilise it; or splint the segment and remove the tooth surgically after about 6 to 8 weeks. A segment that has lost its soft-tissue attachment is removed and the wound closed, managing any oroantral opening.</p>`,
  cards:[
   ["Swelling and trismus after third molar surgery peak at","About 2 to 3 days; settle within about a week"],
   ["Pain that worsens on day 3 after easing","Dry socket until proven otherwise"],
   ["Suture size: 6-0 or 3-0, which is thinner?","6-0: the more zeros, the finer the thread"],
   ["Plain vs chromic gut","Chromic is tanned with chromium salts and resists resorption for longer"],
   ["Fractured tuberosity still attached to periosteum","Keep the bone: free the tooth from it, or splint and remove the tooth later; suture"]
  ],
  questions:[
   ["On day 2 after surgical removal of 3.8, a 20-year-old has moderate swelling, limited opening and pain that is easing with analgesics. There is no fever. The most appropriate management is to:","Reassure; this is the expected course",["Start amoxicillin for an infection","Incise and drain the swelling","Dress the socket for alveolar osteitis"],"Swelling and trismus normally peak around day 2 to 3 while pain eases. Without fever or worsening pain there is no infection or dry socket."],
   ["Which finding after third molar surgery is NOT part of the normal course?","Swelling that increases on day 5 with fever",["Swelling that peaks on the second day","Limited opening during the first week","Bruising on the neck on the third day"],"Swelling should be settling by day 4 or 5; new increase with fever means infection. The others are expected."],
   ["Forty-eight hours after a simple extraction of 4.7, bleeding restarts and firm gauze pressure for 30 minutes fails. The most appropriate management is to:","Pack the socket with a haemostat and suture",["Repeat firm gauze pressure for another hour","Prescribe oral tranexamic acid and wait","Send the patient home to rest upright"],"Once pressure fails, local measures under anaesthesia are needed: clear the clot, find the source, pack and suture, then look for a cause."],
   ["When bleeding restarts 2 days after an extraction, which question is most important?","Has a new drug been started since?",["Was the tooth heavily restored?","Is there a family history of caries?","Did the tooth have a root filling?"],"A newly started antiplatelet, NSAID or anticoagulant is a common, correctable cause of late bleeding."],
   ["Which resorbable suture has the smallest thread diameter?","6-0 polyglactin 910",["3-0 chromic gut","4-0 plain gut","2-0 polyglycolic acid"],"On the USP scale more zeros mean a thinner thread, so 6-0 is the finest. The material does not change the size scale."],
   ["Chromic gut differs from plain gut in that it:","Resists resorption for longer",["Is non-resorbable in the mouth","Is made from a synthetic polymer","Causes less reaction than nylon"],"Tanning with chromium salts slows enzymatic breakdown. Both are natural collagen sutures and both resorb."],
   ["During extraction of 2.8, the tuberosity fractures. The tooth and bone move together but remain attached to the buccal and palatal soft tissue. The most appropriate management is to:","Keep the bone, free the tooth and suture",["Pull the tooth and bone out together","Continue with stronger rotational force","Leave the tooth loose and pack the site"],"Bone attached to mucoperiosteum keeps its blood supply and heals, so it is preserved. Tearing it out risks a large oroantral defect and loss of ridge."]
  ] },

/* ---------------------------------------------------------------- m21-n04 */
{ node:"m21-n04",
  notes:`<p><b>Which teeth drain palatally?</b> Pus leaves bone through the nearest thin cortex. Most upper teeth have apices near the buccal plate and swell in the vestibule. Two exceptions point to the palate: the <b>upper lateral incisor</b>, whose apex is often inclined palatally, and the <b>palatal roots</b> of upper premolars and first molars.</p>
<p><b>What a palatal abscess looks like.</b> The palatal mucoperiosteum is thick and firmly bound to bone, so pus cannot spread under it. The swelling is tense, painful, localised and dome-shaped on one side of the palate, rather than diffuse.</p>
<p><b>Draining it.</b> Anaesthetise with a greater palatine or nasopalatine block, or infiltrate beside the swelling. Incise <b>anteroposteriorly, parallel to the greater palatine vessels</b>, which run forward from the greater palatine foramen opposite the molars; a transverse incision could cut them. Then remove the source promptly by root canal treatment or extraction.</p>
<p><b>Why it matters.</b> A palatal swelling is easily mistaken for a salivary gland tumour or a cyst; testing the pulp of the lateral incisor and premolars, and a periapical radiograph, usually settle it.</p>`,
  cards:[
   ["Teeth that most often give palatal abscesses","Upper lateral incisor; palatal roots of upper premolars and first molars"],
   ["Direction of a palatal drainage incision","Anteroposterior, parallel to the greater palatine vessels"]
  ],
  questions:[
   ["Which tooth most commonly causes an abscess on the anterior palate?","Maxillary lateral incisor",["Maxillary central incisor","Maxillary canine","Maxillary first premolar"],"The lateral incisor apex is often inclined palatally, so pus perforates the palatal cortex. Central incisors and canines usually drain labially."],
   ["When incising a palatal abscess over 2.6, the incision should run:","Anteroposteriorly, parallel to the vessels",["Transversely, across the palatal vault","Along the midline palatal raphe","In a circle around the swelling"],"The greater palatine vessels run forward from the foramen near the molars; an incision parallel to them avoids cutting them."],
   ["A palatal abscess is usually tense and localised rather than diffuse because the:","Mucoperiosteum is bound to the bone",["Palate has no lymphatic drainage","Palatal bacteria are less virulent","Greater palatine artery limits spread"],"Thick mucoperiosteum firmly attached to bone stops pus spreading beneath it. The palate does have lymphatic drainage."]
  ] },

/* ---------------------------------------------------------------- m21-n06 */
{ node:"m21-n06",
  notes:`<p><b>Tooth fragments in the lip.</b> A crown fracture with a lip wound means a fragment may be embedded. Palpate, then take a <b>soft-tissue radiograph of the lip</b>: a film held between lip and teeth with reduced exposure shows enamel fragments and dense foreign bodies. Remove them before closing, or they cause infection and fibrosis. A tooth missing and not found after trauma may be intruded, in the lip, swallowed or inhaled: radiograph the socket and lip, and arrange a chest film if inhalation is possible.</p>
<p><b>Through-and-through lip laceration.</b> Clean thoroughly and remove debris; debride sparingly, because the lip's rich blood supply keeps marginal tissue alive. Then close in layers:</p>
<ol>
<li>Place the first, key suture at the <b>vermilion border</b> to align it exactly, because even a small step is visible.</li>
<li>Close the oral mucosa with resorbable sutures (for example 4-0).</li>
<li>Close the orbicularis oris with buried resorbable sutures, to restore the muscle and prevent a notch.</li>
<li>Close the skin with fine non-resorbable monofilament (5-0 or 6-0), removed early, at about 5 days, to limit suture marks.</li>
</ol>
<p>Check tetanus status, as for any contaminated wound.</p>`,
  cards:[
   ["Finding tooth fragments in a lacerated lip","Palpate, then a soft-tissue radiograph of the lip"],
   ["First suture in a lip laceration crossing the vermilion","A key suture to align the vermilion border"],
   ["Layers of a through lip repair","Mucosa (resorbable), orbicularis oris (buried resorbable), skin (fine non-resorbable)"]
  ],
  questions:[
   ["A 12-year-old fell. Tooth 1.1 has a crown fracture with the fragment missing, and the lower lip has a laceration with a firm lump. The most appropriate investigation is:","A soft-tissue radiograph of the lip",["An ultrasound of the submental region","A panoramic radiograph","A CBCT of the anterior maxilla"],"A low-exposure film of the lip shows embedded enamel fragments. A panoramic film does not image the lip soft tissue well."],
   ["In repairing a through-and-through upper lip laceration that crosses the vermilion, the first suture should be placed:","To align the vermilion border",["In the deepest part of the muscle","At the corner of the mouth","In the mucosa at the sulcus depth"],"Exact alignment of the vermilion border is the cosmetic key, so it is fixed first. The other layers are then closed against it."],
   ["The skin layer of a facial lip laceration is best closed with:","6-0 nylon",["3-0 silk","3-0 chromic gut","2-0 polyglactin"],"Fine nylon monofilament causes little reaction and leaves the least scarring. Thick braided silk or resorbable sutures in facial skin leave marks."],
   ["The orbicularis oris layer of a through lip laceration is closed with buried resorbable sutures mainly to:","Prevent a notch in the lip contour",["Reduce the risk of tetanus","Allow earlier removal of skin sutures","Avoid the need for a skin layer"],"Unrepaired muscle retracts and leaves a visible notch and weak lip function."]
  ] },

/* ---------------------------------------------------------------- m21-n07 */
{ node:"m21-n07",
  notes:`<p><b>Fracture terms.</b></p>
<ul>
<li><b>Simple (closed):</b> no communication with the outside.</li>
<li><b>Compound (open):</b> the fracture communicates with the exterior through skin or oral mucosa. This includes any fracture through a tooth socket, because the PDL opens into the mouth, so most fractures of the tooth-bearing mandible are compound and receive antibiotics.</li>
<li><b>Comminuted:</b> several fragments. <b>Greenstick:</b> incomplete, one cortex bent, typical in children. <b>Complicated:</b> injury to a nerve, vessel or other structure. <b>Pathological:</b> through bone weakened by disease.</li>
</ul>
<p><b>Principles.</b> Reduce (put the fragments back), fix, immobilise long enough to heal, and restore the pre-injury occlusion, which is the guide to correct reduction. <b>Closed reduction</b> aligns the fragments without opening the fracture site, using the teeth: arch bars and maxillomandibular fixation (MMF), usually for about 4 to 6 weeks. It suits undisplaced or favourable fractures, many condylar fractures (short MMF then early movement) and children. Open reduction with plates allows early function without long MMF.</p>
<p><b>Pathological fracture.</b> An atrophic edentulous mandible, or one weakened by a large cyst or tumour, osteomyelitis, osteoradionecrosis or MRONJ, can break with minor force, including during removal of a deep third molar in an older patient. Assess bone height and lesions on imaging, section teeth rather than lever them, warn the patient and advise a soft diet afterwards.</p>
<p><b>Dislocation of the mandible.</b> The condyle is locked in front of the eminence with the mouth open. Reduce it by pressing down on the posterior teeth or external oblique ridges with protected thumbs, then back; spasm may need local anaesthetic or sedation. Afterwards: limit opening for several weeks (support the chin when yawning, avoid wide opening), a soft diet, NSAIDs and heat; some add a supporting bandage for a few days. Recurrent dislocation is referred.</p>`,
  cards:[
   ["Compound mandibular fracture","Communicates with the exterior through skin or mucosa, including via a tooth socket"],
   ["Greenstick fracture","Incomplete: one cortex broken, the other bent; children"],
   ["Guide to correct reduction of a jaw fracture","The patient's pre-injury occlusion"],
   ["Closed reduction in one line","Aligning fragments without exposing the fracture, using the teeth and MMF for about 4-6 weeks"],
   ["Aftercare once a dislocated jaw is reduced","Limit opening for several weeks, support the chin when yawning, soft diet, NSAIDs"]
  ],
  questions:[
   ["By definition, a compound fracture of the mandible:","Communicates with the exterior",["Has more than two fragments","Involves the inferior alveolar nerve","Breaks one cortex and bends the other"],"Compound means open to the outside, through skin or mucosa. Multiple fragments define comminuted, and a bent cortex defines greenstick."],
   ["A fracture of the mandibular body passing through the socket of 4.5 is classified as compound because:","The PDL opens it to the mouth",["It involves several fragments","It crosses the mental foramen","It is displaced by muscle pull"],"A fracture through a tooth socket communicates with the mouth via the PDL, so it is contaminated and treated as open."],
   ["In closed reduction of a dentate mandibular fracture, correct reduction is judged mainly by:","The pre-injury occlusion",["Symmetry of the soft tissues","Absence of pain on biting","Alignment of the lower border"],"When the teeth meet as they did before injury, the fragments are in their correct relation."],
   ["Closed reduction of a dentate mandibular body fracture usually involves maxillomandibular fixation for about:","4 to 6 weeks",["1 to 2 weeks","3 to 4 months","6 to 9 months"],"Bone union in the mandible takes about 4 to 6 weeks. Condylar fractures in adults get shorter fixation, then early movement."],
   ["An 8-year-old has a mandibular fracture in which one cortex is broken and the other bent. This is a:","Greenstick fracture",["Comminuted fracture","Compound fracture","Pathological fracture"],"Children's elastic bone bends on one side and breaks on the other. Comminuted means several fragments."],
   ["A 78-year-old with a severely atrophic edentulous mandible needs removal of a deeply buried, symptomatic 3.8. The complication of greatest concern is:","Fracture of the mandible",["Oroantral communication","Displacement into the sinus","A torn lingual frenum"],"Little bone remains around the tooth, so ordinary force can cause a pathological fracture. The sinus is not involved in the mandible."],
   ["A patient's first dislocation of the mandible has just been reduced. The most appropriate management is to:","Advise limited opening and a soft diet",["Fit maxillomandibular fixation for 6 weeks","Refer for eminectomy","Exercise the jaw to full opening daily"],"Limiting opening for several weeks lets the stretched capsule and ligaments recover. Surgery is for recurrent dislocation."]
  ] },

/* ---------------------------------------------------------------- m21-n08 */
{ node:"m21-n08",
  notes:`<p><b>Drugs in chronic TMD pain.</b> Short NSAID courses help arthralgia. For chronic myalgia, a low-dose tricyclic at night helps, and a muscle relaxant such as cyclobenzaprine can be used short term. <b>Opioids are not used long term</b>: tolerance, dependence and hyperalgesia, with no lasting benefit. Benzodiazepines are short-term only.</p>
<p><b>Splints.</b> The standard is a hard, full-coverage acrylic <b>stabilisation splint</b> with even contacts, usually worn at night. Indications: sleep bruxism, to protect teeth and restorations; and myalgia or arthralgia, as one part of conservative care. It does not work by correcting the bite, and evidence for pain relief is modest. An <b>anterior repositioning splint</b> is used only short term, for painful disc displacement with intermittent locking, because full-time wear can leave a posterior open bite. Partial-coverage appliances worn long term let uncovered teeth overerupt.</p>
<p><b>Sleep bruxism is driven by the brain, not by the bite.</b> Episodes of rhythmic jaw-muscle activity follow brief <b>micro-arousals</b> from sleep. Central neurotransmitter systems, especially the dopaminergic pathways of the <b>basal ganglia</b>, are implicated. SSRIs, amphetamines, cocaine and MDMA can trigger it, as can alcohol, smoking, caffeine, stress and sleep apnoea. Signs: grinding noises reported by a partner, wear facets, masseter hypertrophy, morning jaw stiffness, fractured cusps. Movement in general is planned in the motor cortex, selected by the basal ganglia and coordinated by the cerebellum; chewing rhythm comes from a central pattern generator in the brainstem.</p>
<p><b>Occlusion is a weak factor.</b> Occlusal features show only weak associations with TMD and bruxism, so occlusal adjustment and orthodontics do not treat them. Nocturnal bruxism with a malocclusion is managed with a stabilisation splint and attention to contributing factors.</p>
<p><b>TMJ ankylosis</b> is fibrous or bony fusion of the condyle to the fossa. Causes: trauma (especially an intracapsular condylar fracture in childhood), infection spreading from the ear, and inflammatory arthritis. It gives painless, progressive, severe limitation of opening. In a child it stunts growth: one-sided ankylosis deviates the chin to that side; bilateral gives a retrognathic "bird face". Treatment is surgical, then prolonged physiotherapy.</p>`,
  cards:[
   ["Long-term opioids for chronic TMD pain?","No: tolerance, dependence, hyperalgesia, no lasting benefit"],
   ["Indications for a stabilisation splint","Sleep bruxism (protect teeth) and myalgia or arthralgia as part of conservative care"],
   ["Risk of full-time anterior repositioning splint","Posterior open bite"],
   ["CNS basis of sleep bruxism","Micro-arousals; dopaminergic basal ganglia pathways"],
   ["Drugs that can induce bruxism","SSRIs, amphetamines, cocaine, MDMA"],
   ["Main cause of TMJ ankylosis","Trauma, especially intracapsular condylar fracture in childhood"]
  ],
  questions:[
   ["A 40-year-old has had chronic myofascial pain of the masseters for 2 years. Which drug is LEAST appropriate for long-term use?","Oxycodone",["Low-dose amitriptyline","Topical diclofenac","Nortriptyline at night"],"Long-term opioids cause tolerance and dependence and may worsen pain, without lasting benefit. Low-dose tricyclics are standard for chronic myalgia."],
   ["A 35-year-old's partner reports nightly grinding. The patient has wear facets, fractured cusps and a mild Class II malocclusion. The most appropriate management is:","A hard stabilisation splint at night",["Selective occlusal equilibration","Orthodontic correction of the bite","A soft mouthguard worn all day"],"Sleep bruxism is centrally driven, so correcting the bite does not stop it; a hard night splint protects the teeth."],
   ["Which structure is most associated with the central nervous system basis of sleep bruxism?","Basal ganglia",["Cerebellar cortex","Hypoglossal nucleus","Occipital lobe"],"Dopaminergic basal ganglia pathways are implicated in sleep bruxism, which is linked to arousal mechanisms rather than occlusion."],
   ["Sleep bruxism episodes are most closely linked to:","Micro-arousals from sleep",["The onset of deep slow-wave sleep","Occlusal interferences","Low blood glucose at night"],"Most episodes follow brief arousals with a rise in heart rate before jaw activity. Occlusal interferences have not been shown to cause them."],
   ["Which drug is most likely to induce bruxism?","Sertraline",["Metformin","Amlodipine","Ramipril"],"SSRIs such as sertraline are a recognised cause of bruxism. The others have no such association."],
   ["Which statement best describes the link between occlusion and TMD?","Occlusal factors show weak associations",["Class II malocclusion causes most TMD","Equilibration prevents TMD from recurring","Orthodontics is a common cause of TMD"],"TMD is multifactorial; occlusal features add little risk, so irreversible occlusal treatment is not indicated."],
   ["A risk of wearing an anterior repositioning splint full time for months is:","A posterior open bite",["Ankylosis of the condyle","A deep anterior overbite","Recession on the canines"],"Holding the mandible forward for long periods can remodel the joint and leave the posterior teeth apart. The splint is kept short term."],
   ["A 12-year-old has painless, progressive limitation of opening to 12 mm, mandibular retrusion and chin deviation to the left. He had a fall on the chin at age 5. The most likely diagnosis is:","Left TMJ ankylosis",["Right TMJ ankylosis","Left disc displacement without reduction","Bilateral masseter myalgia"],"A childhood condylar injury can ankylose the joint and stunt growth on that side, so the chin deviates toward the affected left side. Disc displacement rarely limits opening to 12 mm."]
  ] }
]);
