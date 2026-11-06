window.CONTENT = window.CONTENT || {};
/* Module m21: Oral surgery, trauma & orofacial pain, nodes n01-n09.
   References: Hupp, Contemporary Oral and Maxillofacial Surgery 7th ed; Peterson's Principles of OMFS; Fonseca, OMFS;
   AAOMS Parameters of Care; Ruggiero et al, AAOMS MRONJ position paper, JOMS 2022; ISOO-MASCC-ASCO ORN guideline, JCO 2024;
   IADT 2020 (Bourguignon, Fouad, Day); Okeson; Schiffman et al, DC/TMD, JOR 2014; AAOM Clinician's Guide to Orofacial Pain;
   Sharav & Benoliel; ICHD-3. Stay consistent with m02b (referral criteria), m11b (antibiotics), m13a (INR 3.5), m13b (MRONJ, ORN),
   m10b n12 (biopsy decisions), m00 (IADT summary). */

/* ---------------------------------------------------------------- m21-n01 */
window.CONTENT["m21-n01"] = {
 understand: `
 <p><b>Extraction is controlled expansion of bone, not pulling.</b> A tooth sits in a socket of slightly elastic bone, held by periodontal ligament (PDL) fibres. The operator widens that socket until the tooth can leave along its path of least resistance. Slow, sustained force expands bone and tears fibres. Sudden force breaks roots.</p>
 <p><b>Elevators are three simple machines.</b></p>
 <ul>
 <li><b>Wedge:</b> a straight elevator's blade driven into the PDL space displaces the tooth and expands bone.</li>
 <li><b>Lever:</b> the blade turned against bone lifts the tooth. An adjacent tooth is not used as the fulcrum unless it is also being removed.</li>
 <li><b>Wheel and axle:</b> a triangular (Cryer) elevator turns in an empty socket and its tip catches the neighbouring root.</li>
 </ul>
 <p><b>Forceps follow an order.</b> (1) <b>Apical pressure:</b> seat the beaks on root, along the long axis. This expands the crest and moves the centre of rotation apically, so the root tip is less likely to snap. (2) <b>Buccal and lingual pressure,</b> mainly toward the thinner plate: buccal for most teeth, lingual for lower third molars. (3) <b>Rotation</b> only for a single conical root such as 1.1. Thin or divided roots, as in 1.4, snap. (4) <b>Traction last,</b> once the tooth is loose. No. 150 forceps are the upper universal, No. 151 the lower; No. 23 cowhorns engage the furcation of lower molars.</p>
 <p><b>Sequence at one visit.</b> Upper before lower, because infiltration works faster and debris cannot fall into lower sockets. Posterior before anterior in an arch, so elevators can work against intact bone. First molars and canines, usually the hardest teeth, go last in their segment.</p>
 <p><b>Look first.</b> A radiograph shows root form, hypercementosis, ankylosis, sinus and canal. Plan an open (surgical) extraction from the start when force is likely to fail: bulbous or divergent roots, dense bone, heavily restored or root-filled teeth. An isolated upper molar beside a large sinus risks <b>tuberosity fracture</b>. If bone moves with the tooth, stop, stabilise it, and plan surgical removal after healing.</p>
 <p><b>Flap design protects blood supply and closure.</b></p>
 <ul>
 <li><b>Base wider than free margin,</b> because vessels enter through the base. As a rule, its length is no more than twice the width of its base (Hupp).</li>
 <li><b>Full thickness:</b> mucosa and periosteum lift as one layer, which bleeds less and heals better.</li>
 <li><b>Large enough:</b> incisions heal side to side, so a long one heals as fast as a short one. A cramped flap tears.</li>
 <li><b>Margins on sound bone,</b> never over the bony defect, or unsupported sutures lead to dehiscence.</li>
 <li><b>Releases</b> at a line angle, not through a papilla or over a prominence. Avoid lingual and palatal releases, and the mental foramen area.</li>
 </ul>
 <p>Common flaps: <b>envelope</b> (sulcular, no release), <b>three-cornered</b> (one release), <b>four-cornered</b> (two). A <b>semilunar</b> flap suits periapical surgery, not extraction.</p>
 <p><b>A root tip may stay</b> only if it is small (Hupp: usually no more than 4 to 5 mm long), deeply embedded in bone and uninfected, and retrieval risks the canal or sinus. Inform the patient, record it and review.</p>
 <p><b>Why the exam cares.</b> Stems ask for the reason behind a step: why apical force first, what the fulcrum is, where a release goes, and when to stop using force and open the site.</p>`,
 connect: [
  {to:"m12-n03", why:"An extraction needs pulpal and soft-tissue anaesthesia on both sides of the tooth, so the block chosen depends on the tooth being removed."},
  {to:"m07-n02", why:"Root number, curvature and divergence decide which forceps movements are safe, particularly rotation."},
  {to:"m10-n11", why:"Hypercementosis and concrescence change a closed extraction into a planned surgical one."},
  {to:"m09-n05", why:"Radiographic anatomy shows the sinus floor and mental foramen before a flap or a tuberosity fracture becomes a problem."},
  {to:"m21-n03", why:"Traumatic technique raises the risk of dry socket and bleeding, and upper molar extraction is the setting for oroantral communication."}
 ],
 apply: {
  vignette: "A 58-year-old needs extraction of root-filled tooth 2.5. The periapical radiograph shows a bulbous, hypercementosed root and dense surrounding bone. There is limited crown structure and no sinus proximity. The most appropriate plan is to:",
  options: ["Apply progressively greater rotational force with No. 150 forceps","Luxate with an elevator using 2.6 as the fulcrum","Raise a flap and remove buccal bone, sectioning if needed","Refer for hyperbaric oxygen before attempting removal"],
  answer: "Raise a flap and remove buccal bone, sectioning if needed",
  steps: [
   "The ask: the most appropriate extraction plan, decided before force is used.",
   "Facts that matter: a bulbous root cannot pass through a narrower socket opening, root-filled teeth are brittle, and dense bone will not expand much.",
   "Cross out greater rotational force: this root will fracture, and force does not change the geometry.",
   "Cross out using 2.6 as the fulcrum: an adjacent tooth that stays is not a fulcrum, as it can be luxated or fractured.",
   "Cross out hyperbaric oxygen: it has no role here, as there is no irradiated bone.",
   "The survivor explains everything: removing bone makes the socket opening wide enough for the root, and sectioning gives each part its own path."
  ]
 },
 teach: {
  prompt: "Explain to a new associate why forceps start with apical pressure and end with traction, and how you would decide in advance that forceps alone will not work.",
  model: "Apical pressure expands the crest and moves the centre of rotation toward the apex, so buccal and lingual movement stresses bone rather than snapping the root tip. Buccal and lingual pressure then widen the socket, mainly toward the thinner plate. Rotation is kept for single conical roots. Traction comes last because a tooth can only leave once the socket has been widened. I decide in advance from the radiograph and crown: a bulbous, divergent or brittle root, or dense bone, means a planned flap and bone removal rather than more force."
 },
 cards: [
  ["Three mechanical principles of elevators","Wedge, lever, wheel and axle"],
  ["Why apical pressure first?","Expands the crest and moves the centre of rotation apically, so less root-tip fracture"],
  ["Which teeth tolerate rotation?","Single conical roots such as 1.1; not thin, curved or divided roots"],
  ["Fulcrum rule for elevators","Use bone; not an adjacent tooth unless it is also being removed"],
  ["Upper or lower first, and why?","Upper: infiltration works faster and debris cannot fall into lower sockets"],
  ["Which teeth go last in a segment?","First molars and canines, usually the hardest"],
  ["Flap base rule","Base wider than free margin, because vessels enter through the base"],
  ["Where do flap margins rest?","On sound bone, never over the bony defect"],
  ["Where does a vertical release go?","At a line angle; not through a papilla, over a prominence, or near the mental foramen"],
  ["Conditions for leaving a root tip","Small, deep, uninfected, removal riskier than leaving; inform, record, review"],
  ["Tuberosity moves with an upper molar","Stop, stabilise it, plan surgical removal after healing"]
 ],
 questions: [
  ["During forceps extraction, firm apical pressure is applied before buccal or lingual movement. The main benefit is that it:","Expands the crest and moves the rotation centre apically",["Cuts the periodontal fibres at the root apex directly","Compresses the apical vessels and limits later bleeding","Keeps the forceps beaks on the crown and away from the root"],"Apical force widens the crest, and a more apical centre of rotation reduces the stress that snaps a root tip. Beaks belong on root rather than crown, and the step is not intended to control bleeding."],
  ["A straight elevator is used to luxate 3.6 before forceps. Tooth 3.7 is sound and will remain. The most appropriate fulcrum is:","Interdental alveolar bone",["The mesial surface of 3.7","The occlusal surface of 3.7","The opposing maxillary tooth"],"Force on a retained neighbour can luxate it or fracture a restoration, so the fulcrum should be bone. An adjacent tooth is used only if it is also being removed."],
  ["A triangular (Cryer) elevator is placed in the empty distal root socket of 3.6 to lift the remaining mesial root. The instrument is working chiefly as a:","Wheel and axle",["Simple wedge","Pulley system","Screw thread"],"The handle turns the shaft and the tip sweeps through an arc, catching the root. A wedge is driven into the PDL space along the root, as a straight elevator's blade is."],
  ["Teeth 1.7 and 4.7 are to be extracted at one appointment. The most appropriate order and reason are:","1.7 first, as infiltration is quicker and no debris falls into 4.7",["4.7 first, because the block needs time and upper bone is denser","4.7 first, because lower molars are the simpler extractions","1.7 first, because upper sockets bleed less than lower ones"],"Hupp advises upper before lower for these two reasons. Upper sockets can bleed as much as lower ones, so that claim is not the reason."],
  ["Rotation is most useful as a primary forceps movement when extracting:","1.1",["1.4","1.6","3.6"],"Tooth 1.1 has a single conical root that can turn in its socket. Tooth 1.4 usually has two thin roots and the molars have divergent roots, all of which fracture under rotation."],
  ["During extraction of 1.4 with a strong rotational force, an apical root fragment fractures. Which of the following best explains this?","Two thin roots cannot turn about one axis, so the torsion concentrates in them",["The buccal plate over 1.4 is too thick to expand under any force","The tooth was luxated too slowly, so the ligament fibres hardened","Apical pressure before rotation weakened the cervical part of the root"],"Rotation works only when one conical root can spin in its socket. Tooth 1.4 commonly has two slender roots, so torsion fractures them; slow luxation and apical pressure protect roots."],
  ["The base of a surgical flap is made wider than its free margin chiefly to:","Preserve the blood supply to the free margin",["Make retraction more comfortable for the assistant","Reduce the number of sutures needed at closure","Keep the periosteum attached to the bone"],"Vessels enter through the base, so a narrow base risks necrosis at the free end. A full-thickness flap deliberately lifts the periosteum with it, so keeping periosteum on bone is not the aim."],
  ["A vertical releasing incision for a flap around 1.6 is most appropriately placed:","At a line angle of a tooth, leaving the papilla intact",["Through the centre of the interdental papilla","Directly over the mid-buccal root prominence","On the palate beside the greater palatine foramen"],"A line-angle release keeps the papilla whole and allows closure over bone, with less risk of a recession defect. Mid-buccal incisions cross a prominence with thin tissue and heal poorly, and palatal releases endanger the greater palatine vessels."],
  ["A three-cornered flap is needed to remove a retained root of 4.5. The release is most appropriately placed:","Anterior to the mental foramen, near a line angle of 4.3",["Between 4.4 and 4.5, running straight down to the vestibule","Mid-buccal on 4.5, running straight down to the vestibule","On the lingual, mesial to 4.5, running toward the floor of mouth"],"The mental nerve usually exits near the premolar apices, so a release there can injure it. Lingual releases give poor access and endanger the lingual tissues."],
  ["A flap is being planned to reach a large bony defect over a root of 2.4. The incision margins should rest:","On sound bone beyond the edge of the defect",["Directly over the centre of the defect","On movable mucosa beyond the vestibule","Along the crest of the marginal defect only"],"Sutures need a bony base under them. A margin over a defect has nothing to support it and tends to break down."],
  ["A 60-year-old needs extraction of 2.5. The radiograph shows a markedly bulbous root. After a brief attempt with forceps, the tooth does not move. The most appropriate next step is to:","Raise a flap and remove bone to widen the path for the root",["Increase rotational force until the socket gives way","Use 2.6 as an elevator fulcrum to gain mechanical advantage","Prescribe an antibiotic and retry forceps in one week"],"A bulbous root is wider than the socket opening, so it needs a wider path rather than more force. An antibiotic does nothing to the geometry and using 2.6 as a fulcrum risks that tooth."],
  ["During forceps extraction of an isolated 2.7, the operator feels the buccal and palatal bone move with the tooth. The tuberosity is still attached to soft tissue. The most appropriate action is to:","Stop luxating, stabilise the segment and plan surgical removal after healing",["Continue the forceps movement with greater force so that the tooth comes free","Twist the segment out and suture over the empty tuberosity","Apply traction with cowhorn forceps to separate the segment"],"Continued force can tear the tuberosity away with a large oroantral opening and lose ridge. A segment attached to its soft tissue can usually heal if it is stabilised."],
  ["During surgical removal of 3.7, a 2 mm apical fragment remains deep in the socket, close to the mandibular canal. The tooth had no periapical infection. The most appropriate management is to:","Leave it, inform the patient, record it and review",["Remove more bone until the canal is exposed and clearly seen","Advise the patient nothing because the fragment is so small","Start a one-week antibiotic course and re-open in one week"],"A small, deep, uninfected fragment may be left when retrieval risks a major structure, usually when no more than 4 to 5 mm long (Hupp). The patient must be told, because it is a record and consent issue."]
 ]
};

/* ---------------------------------------------------------------- m21-n02 */
window.CONTENT["m21-n02"] = {
 understand: `
 <p><b>Impacted means blocked.</b> A tooth is impacted when bone, soft tissue or a neighbour stops it erupting by the expected time. Third molars erupt last and often run out of room. Two classifications predict how hard a removal will be, because they describe the tooth's path out.</p>
 <p><b>Winter: angulation</b> against the long axis of the second molar.</p>
 <div class="tscroll"><table><tr><th>Angulation</th><th>Lower third molar</th><th>Upper third molar</th></tr>
 <tr><td>Mesioangular</td><td>Most common; easiest</td><td>Hardest</td></tr>
 <tr><td>Horizontal</td><td>Harder; crown caught under 4.7 or 3.7</td><td>Uncommon</td></tr>
 <tr><td>Vertical</td><td>Common; moderate</td><td>Most common; easier</td></tr>
 <tr><td>Distoangular</td><td>Hardest; path runs into the ramus</td><td>Easier</td></tr></table></div>
 <p><b>Pell and Gregory: position.</b> <b>Class I, II, III</b> compares the crown with the space between second molar and ramus: enough room, partly in the ramus, wholly in the ramus. <b>Position A, B, C</b> gives depth against the second molar: occlusal surface level with its occlusal plane, between that plane and its cervical line, or below the cervical line. Class III position C is hardest.</p>
 <p><b>Other predictors.</b> Roots one-third to two-thirds formed are easiest, because the tip has not curved and the wide follicle helps. Long, hooked or divergent roots and the denser bone of older patients make it harder.</p>
 <p><b>Remove for disease, not out of habit.</b> Indications include recurrent or severe pericoronitis, unrestorable caries, periodontal damage or resorption of the second molar, and cysts or tumours. Removal may also serve orthodontic or orthognathic plans. A first mild episode of pericoronitis does not justify surgery (NICE). Leave a deeply buried, disease-free tooth when removal risks more than retention: older patients, poor medical status, or close nerve contact. Retained teeth need periodic review (AAOMS), because disease can appear later.</p>
 <p><b>The nerve decision.</b> Rood and Shehab listed seven panoramic signs of root-canal proximity. Three are most strongly linked to injury: <b>darkening of the root</b>, <b>interruption of the canal's white line</b>, and <b>diversion of the canal</b>. These signs justify a small-field CBCT, which shows the actual relationship. If contact is real, <b>coronectomy</b> is an option: remove the crown, trim the vital roots to about 3 mm below the alveolar crest, leave them without root treatment, and close. Avoid it if the tooth is mobile, the roots are infected or a lesion involves them.</p>
 <p><b>Technique.</b> Five steps: flap, bone removal, sectioning, delivery, debridement and closure. Sectioning replaces force. For a mesioangular lower molar, the distal crown usually comes first; for a horizontal one, the crown is separated from the roots. Swing the distal incision <b>buccally</b>, because the <b>lingual nerve</b> can lie at the crest. Use a surgical handpiece with sterile irrigation; an air turbine can drive air into tissues and cause <b>surgical emphysema</b>. Upper third molars can be displaced into the infratemporal space, so keep a finger behind the tuberosity.</p>
 <p>Swelling and trismus peak at 2 to 3 days. Consent covers the inferior alveolar and lingual nerves; most deficits recover and permanent injury is uncommon.</p>
 <p><b>Why the exam cares.</b> Stems ask which class is hardest, whether to remove at all, and which film sign changes the plan.</p>`,
 connect: [
  {to:"m02-n03", why:"The inferior alveolar and lingual nerves run beside 3.8 and 4.8, so nerve anatomy explains the consent and the incision design."},
  {to:"m09-n04", why:"Panoramic signs of canal proximity trigger small-field CBCT, and the choice of imaging is tested in surgical stems."},
  {to:"m10-n05", why:"The follicle of an impacted tooth can form a dentigerous cyst, one disease-based reason to remove it."},
  {to:"m12-n03", why:"Surgery on a lower third molar needs inferior alveolar, lingual and long buccal anaesthesia, and trismus can force a closed-mouth block."},
  {to:"m21-n04", why:"Pericoronitis around a lower third molar can spread to the masticator spaces, so an impacted tooth can be the source of a deep-space infection."}
 ],
 apply: {
  vignette: "A 26-year-old has had three episodes of pericoronitis around partially erupted tooth 4.8. A panoramic radiograph shows darkening of the root where the canal crosses it and interruption of the canal's white line. The most appropriate next step is to:",
  options: ["Remove the tooth on the panoramic film alone, warning of nerve risk","Obtain a small-field CBCT to define the root and canal relationship","Retain the tooth and prescribe amoxicillin for each later episode","Perform root canal treatment of 4.8 and leave the crown in place"],
  answer: "Obtain a small-field CBCT to define the root and canal relationship",
  steps: [
   "The ask: the next step, in a tooth with a clear indication and a nerve warning.",
   "Facts that matter: recurrent pericoronitis justifies treatment, and two Rood and Shehab signs suggest real contact with the canal.",
   "Cross out surgery on the panoramic film alone: the signs are exactly what prompts further imaging before planning.",
   "Cross out repeated amoxicillin: pericoronitis will recur because the operculum remains, and antibiotics do not treat the cause.",
   "Cross out root canal treatment: it does nothing for the operculum and is not part of coronectomy, which leaves a vital root.",
   "The survivor explains everything: CBCT shows whether the canal is grooving the root, which decides between full removal and coronectomy."
  ]
 },
 teach: {
  prompt: "A colleague says every third molar should go by age 25. Using indications, risk and the panoramic film, rebuild when you would remove, leave or do a coronectomy.",
  model: "I remove a third molar for disease: recurrent or severe pericoronitis, unrestorable caries, damage to the second molar, or a cyst or tumour. I leave a disease-free, deeply buried tooth when surgery risks more than retention, and I review it because disease can appear later. If a tooth needs treatment and the film shows root darkening, an interrupted white line or canal diversion, I get a CBCT. Where roots and canal are truly in contact, coronectomy removes the disease-related crown and leaves vital roots away from the nerve, provided the roots are not infected or mobile."
 },
 cards: [
  ["Winter classification is based on","Angulation against the long axis of the second molar"],
  ["Easiest and hardest lower third molar angulation","Mesioangular easiest; distoangular hardest"],
  ["Hardest upper third molar angulation","Mesioangular"],
  ["Pell and Gregory Class I, II, III","Crown has room; partly in ramus; wholly in ramus"],
  ["Pell and Gregory A, B, C","Level with second molar occlusal plane; between that plane and cervical line; below cervical line"],
  ["Three Rood and Shehab signs most linked to nerve injury","Darkening of root, interruption of white line, diversion of canal"],
  ["Coronectomy in one line","Remove the crown, leave vital roots below the crest, no root canal treatment"],
  ["When to avoid coronectomy","Mobile tooth, infected roots, or a lesion involving the roots"],
  ["Why swing the distal incision buccally?","The lingual nerve can lie at the crest on the lingual side"],
  ["Why not use an air turbine?","It can force air into tissues: surgical emphysema"],
  ["When do swelling and trismus peak after surgery?","At 2 to 3 days"]
 ],
 questions: [
  ["Using Winter's classification, the lower third molar angulation generally considered easiest to remove is:","Mesioangular",["Horizontal","Vertical","Distoangular"],"The mesioangular tooth has a path out along the ramus side. The distoangular tooth is hardest because its path runs into the ramus."],
  ["Which of the following upper third molar angulations is generally the most difficult to remove?","Mesioangular",["Vertical","Distoangular","Buccally inclined"],"In the maxilla the pattern reverses: a mesioangular tooth is caught under the second molar with bone behind it. Vertical and distoangular teeth are easier in the upper arch."],
  ["A panoramic film shows a lower third molar whose crown lies wholly within the ramus. In the Pell and Gregory system, this is:","Class III",["Class I","Class II","Position A"],"Classes I to III describe the crown's relationship to the ramus, and Class III lies wholly within it. Letters A to C describe depth rather than ramus relationship."],
  ["The occlusal surface of an impacted 3.8 lies below the cervical line of 3.7. Under Pell and Gregory, this depth is:","Position C",["Position A","Position B","Class II"],"Position C is below the cervical line, A is level with the occlusal plane and B lies in between. Class II refers to the ramus and not to depth."],
  ["A 19-year-old has a lower third molar with roots about half formed. Which of the following best explains why this is often an easier stage for removal?","The apex has not curved, and the wide follicle and less dense bone ease delivery",["The tooth has no periodontal ligament until the roots are fully formed","Developing roots are soft enough to be pulled out without sectioning","The mandibular canal has not yet reached the region of the tooth"],"Young bone is less dense, the follicle gives space and unformed roots have not hooked. The tooth still has a developing ligament, and the canal is already there."],
  ["A 48-year-old has an asymptomatic, fully bony impacted 4.8, with no pathology on radiographs and a normal 4.7. The most appropriate management is to:","Retain it and review periodically",["Remove it now to prevent future disease","Perform coronectomy to prevent future disease","Extract 4.7 so that 4.8 can erupt"],"Disease-free deep impactions in older patients carry more surgical risk than benefit, so they are retained and monitored. Coronectomy is a treatment for a tooth needing removal, not a preventive step."],
  ["A 24-year-old has had a second episode of pericoronitis around 3.8, now resolved. The tooth has no space to erupt fully. The most appropriate management is to:","Plan removal of 3.8",["Excise the operculum and await eruption","Prescribe amoxicillin at each recurrence","Perform occlusal adjustment of 3.7"],"Recurrent pericoronitis in a tooth that cannot erupt into function is a recognised indication for removal. An operculectomy tends to fail when there is no room, because the tissue reforms."],
  ["A 21-year-old has acute pericoronitis around 4.8 and an opposing 1.8 biting on the swollen operculum. Opening is mildly limited and there is no fever or facial swelling. The most appropriate immediate management is to:","Irrigate under the operculum and relieve the occlusal trauma",["Remove 4.8 surgically at this visit under local anaesthesia","Begin clindamycin and review in two weeks","Refer the patient to hospital for intravenous antibiotics"],"Mild local pericoronitis responds to irrigation and removing the trauma from 1.8, and definitive surgery follows once it has settled. Antibiotics are for systemic signs or spread, and clindamycin carries a high C. difficile risk."],
  ["On a panoramic radiograph, which of the following signs is among those most strongly associated with inferior alveolar nerve injury at third molar surgery?","Interruption of the canal's white line",["Mesioangular inclination of the crown","A wide follicular space around the crown","Elongation of the styloid process"],"Rood and Shehab linked darkening of the root, interruption of the white line and diversion of the canal most strongly to injury. Crown angulation and a wide follicle predict difficulty rather than nerve contact."],
  ["Which of the following best explains why the root of a lower third molar appears darker where the mandibular canal crosses it?","The canal grooves or thins the root, so less root attenuates the beam",["The root is carious where the nerve touches it","The nerve contains radiolucent fat that shows through the root","The inferior alveolar artery has calcified along the root"],"Less tooth substance in the beam path means less attenuation, so the root looks darker. The sign therefore suggests real contact, which is why CBCT is considered."],
  ["A 34-year-old needs removal of a carious, non-restorable, uninfected 4.8. CBCT shows the canal grooving the roots. The roots are not mobile. The most appropriate option to discuss is:","Coronectomy, leaving vital roots below the crest",["Root canal treatment followed by a full crown","Extraction of 4.7 to create an access path","Observation, with no treatment of the caries"],"Coronectomy removes the crown and leaves the roots in the bone, reducing inferior alveolar nerve risk. Roots are left vital without root canal treatment, and a non-restorable tooth cannot be crowned."],
  ["In which of the following situations is coronectomy least appropriate?","A lower third molar with a periapical infection of its roots",["A lower third molar with deep distal caries in its crown only","A lower third molar causing recurrent pericoronitis","A lower third molar whose roots contact the canal on CBCT"],"Roots left behind must be vital and uninfected, so periapical infection removes the option. In the other three, coronectomy remains possible when the roots lie close to the canal."],
  ["During a lower third molar flap, the distal incision is angled toward the buccal mainly to avoid the:","Lingual nerve",["Long buccal nerve","Mental nerve","Facial artery"],"The lingual nerve can lie at or near the crest on the lingual side behind the second molar, so an incision running straight back can cut it. The mental nerve is far anterior, in the premolar region."],
  ["Bone is being removed around 3.8 with an air-turbine handpiece. The patient develops sudden swelling with crackling on palpation. Which complication has most likely occurred?","Surgical emphysema",["Anaphylactic reaction","Expanding haematoma","Hereditary angioedema"],"Air forced into the tissue planes causes crepitus, the feature that identifies emphysema. Haematoma has no crepitus, and this is why surgical handpieces that do not exhaust air into the wound are used."]
 ]
};

/* ---------------------------------------------------------------- m21-n03 */
window.CONTENT["m21-n03"] = {
 understand: `
 <p><b>A healing socket depends on a stable clot.</b> Most post-operative complications come from losing that clot, failing to form it, or having a hole where the clot needs a floor.</p>
 <p><b>Dry socket (alveolar osteitis).</b> Fibrinolysis dissolves the clot early and bare bone is left. Severe, throbbing pain usually begins on day 2 to 4 and often radiates to the ear, with bad taste and smell. The socket is empty or grey. Fever, spreading swelling and pus are not typical, and they suggest infection. It follows about 0.5 to 5% of routine extractions, and roughly ten times as many surgical extractions; reported rates after lower third molar surgery vary widely. Risks: lower third molar surgery, smoking, oral contraceptives, previous pericoronitis, and traumatic surgery. Pre-operative chlorhexidine rinse lowers the risk.</p>
 <p><b>Care is palliative:</b> take a radiograph if a retained fragment is possible, gently irrigate with saline, place a sedative dressing (such as eugenol-based), and give analgesics. Replace the dressing every day or two until pain settles. Do <b>not curette</b>: it exposes more bone and increases pain. Antibiotics are not routine, because there is no spreading infection.</p>
 <p><b>The haemostasis ladder.</b> Prevention comes first: the patient bites on gauze for about 30 minutes, then avoids rinsing, spitting, smoking and straws for 24 hours. Timing helps. <b>Primary</b> bleeding occurs during surgery, <b>reactionary</b> within about 24 hours as the vasoconstrictor wears off or blood pressure rises, and <b>secondary</b> at about 7 to 10 days, from infection eroding vessels. Climb one step at a time.</p>
 <ol>
 <li>Sit the patient up, check blood pressure, and ask about drugs and alcohol. Clear the clot and find the source.</li>
 <li>Apply firm gauze pressure for 20 to 30 minutes.</li>
 <li>Inject local anaesthetic with vasoconstrictor, which gives vasoconstriction and allows work.</li>
 <li>Pack a haemostatic agent (gelatin sponge, collagen, oxidised cellulose) and place a figure-of-eight suture.</li>
 <li>Treat a bone bleeder with burnishing or bone wax, and a vessel with cautery or ligation. Use tranexamic acid, as a 5% mouthwash or soaked gauze, for coagulopathy or anticoagulation.</li>
 <li>If it persists, order blood tests (CBC, INR, aPTT) and refer.</li>
 </ol>
 <p><b>Oroantral communication (OAC).</b> Sinus floor can dip between upper molar roots, so extracting 1.6, 1.7, 2.6 or 2.7 can open the sinus. Signs include bubbles in the socket blood, sinus lining on the root, or air passing on a gentle nose-blow test. Do not probe: it can enlarge the opening or push infection or a root into the sinus.</p>
 <p>Size guides treatment (Hupp):</p>
 <ul>
 <li><b>About 2 mm or less:</b> protect the clot and advise sinus precautions.</li>
 <li><b>About 2 to 6 mm:</b> haemostatic agent, figure-of-eight suture, and sinus precautions, with antibiotic and decongestant.</li>
 <li><b>7 mm or more:</b> flap closure, usually by a buccal advancement flap, by referral.</li>
 </ul>
 <p><b>Sinus precautions</b> mean no nose blowing, sneezing with the mouth open, and no straws or smoking, for about 10 to 14 days. A root displaced into the sinus needs a radiograph, not blind probing, then referral if not simply retrieved. Without closure, an OAC can become a chronic <b>oroantral fistula</b>.</p>
 <p><b>Why the exam cares.</b> Stems test day of onset, the instruction not to curette, the next rung on the ladder, and the instruction not to probe.</p>`,
 connect: [
  {to:"m05-n03", why:"Dry socket is failure of the clot stage in socket healing, so the healing sequence explains the timing and treatment."},
  {to:"m13-n05", why:"Anticoagulated patients are managed with the same local measures on this ladder, within the INR limit."},
  {to:"m03-n06", why:"Coagulation and fibrinolysis explain why a clot forms, why it dissolves in dry socket, and why tranexamic acid helps."},
  {to:"m02-n01", why:"The sinus floor dipping between upper molar roots is the anatomical reason OAC follows extraction of 1.6 or 2.7."},
  {to:"m09-n05", why:"Radiographic anatomy of the sinus floor warns of OAC risk and locates a displaced root."}
 ],
 apply: {
  vignette: "A 44-year-old has 2.6 extracted. On inspection, there are bubbles in the socket blood and an opening of about 4 mm into the sinus. No root fragment is missing. The sinus has no prior infection. The most appropriate management is to:",
  options: ["Probe the opening to determine its full depth and irrigate the sinus","Leave the socket open and allow drainage for one week","Place an immediate implant to seal the opening","Place a haemostatic agent and a figure-of-eight suture, with sinus precautions"],
  answer: "Place a haemostatic agent and a figure-of-eight suture, with sinus precautions",
  steps: [
   "The ask: the most appropriate immediate management of an OAC of known size.",
   "Facts that matter: 4 mm falls in the moderate range, with no root in the sinus and no prior sinusitis.",
   "Cross out probing and irrigating: this can enlarge the opening and push contaminated material into the sinus.",
   "Cross out leaving it open: the goal is a protected clot, and open drainage invites a fistula when no infection needs draining.",
   "Cross out an immediate implant: it cannot seal a fresh communication and would be lost to infection.",
   "The survivor explains everything: the agent supports the clot, the suture holds it, and the precautions keep pressure changes from displacing it."
  ]
 },
 teach: {
  prompt: "From the single idea that a socket needs a stable clot, explain the treatment of dry socket, the rung order for a bleeding socket, and why sinus precautions work.",
  model: "In dry socket, fibrinolysis has removed the clot, leaving bare bone, so I irrigate, cover the bone with a sedative dressing and give analgesics, and I do not curette because that exposes more bone. In a bleeding socket, the clot has not formed or held, so I find the source and apply pressure, then add vasoconstrictor, a scaffold of haemostatic material and a suture, moving to blood tests and referral if needed. In an OAC, the clot is the only floor between mouth and sinus. Sinus precautions avoid pressure changes that would blow it out."
 },
 cards: [
  ["Dry socket onset","About day 2 to 4 after extraction"],
  ["Dry socket mechanism","Early fibrinolysis of the clot, leaving bare bone"],
  ["Dry socket treatment","Gentle irrigation, sedative dressing, analgesia; no curettage; antibiotics not routine"],
  ["Features suggesting infection rather than dry socket","Fever, spreading swelling, pus"],
  ["Reduces dry socket risk","Pre-operative chlorhexidine rinse; no smoking"],
  ["Reactionary vs secondary bleeding","Reactionary: within about 24 hours. Secondary: about 7 to 10 days, from infection"],
  ["First steps for a bleeding socket","Sit up, check BP and history, clear clot, find source, firm pressure 20 to 30 minutes"],
  ["After pressure fails","Vasoconstrictor LA, haemostatic agent, figure-of-eight suture"],
  ["Signs of OAC","Bubbles in socket blood, sinus lining on root, positive gentle nose-blow"],
  ["Why not probe an OAC?","It can enlarge the opening and push material or a root into the sinus"],
  ["Sinus precautions","No nose blowing, sneeze with mouth open, no straws or smoking"]
 ],
 questions: [
  ["A 28-year-old smoker returns 3 days after surgical removal of 3.8 with severe pain radiating to the ear and a bad taste. The socket is empty with exposed bone. Temperature is normal and there is no swelling. The most likely diagnosis is:","Alveolar osteitis",["Osteomyelitis of the mandible","Post-operative submandibular abscess","Lingual nerve injury"],"Severe pain at day 3, with an empty socket and no systemic signs, fits alveolar osteitis. Osteomyelitis develops later, with deep pain and sometimes pus or lip numbness."],
  ["The most appropriate treatment of alveolar osteitis at 3 days after extraction is:","Gentle saline irrigation, a sedative dressing and analgesics",["Curettage of the socket to establish a new blood clot","Amoxicillin for 7 days without local treatment","Surgical closure with a buccal advancement flap"],"Treatment relieves pain while the bone heals by itself. Curettage exposes more bone and raises pain, and there is no spreading infection to treat with an antibiotic."],
  ["Which of the following best explains why curettage of a dry socket is avoided?","It removes granulation tissue and exposes more sensitive bone",["It produces a clot that later causes a pulmonary embolus","It drives anaerobes directly into the maxillary sinus","It removes the sedative effect of eugenol from the bone"],"The aim is to protect already exposed bone, and curetting exposes more of it and worsens pain. Lower third molar sockets have no relation to the sinus."],
  ["Which of the following measures has good evidence for reducing the risk of alveolar osteitis?","Chlorhexidine rinse before and after extraction",["Routine curettage of every socket after delivery","Vigorous saline rinsing from the first post-operative hour","Prophylactic oral iron for the week after surgery"],"Chlorhexidine lowers the bacterial load at the socket, and bacteria are thought to contribute to clot breakdown. Vigorous early rinsing dislodges the clot and is the opposite of what is advised."],
  ["A 62-year-old has a persistent fever, swelling and pus from the 4.7 socket 7 days after extraction. The most likely diagnosis is:","Infection of the extraction socket",["Alveolar osteitis (dry socket) of 4.7","Oroantral fistula formation","Reactionary haemorrhage"],"Pus, swelling and fever indicate infection and need drainage, debridement and often an antibiotic. Dry socket has an empty, painful socket without systemic signs."],
  ["A healthy 40-year-old phones 5 hours after extracting 3.6 with oozing and clots in the mouth. At the clinic, blood pressure is normal. After clearing the clots, the most appropriate first measure is:","Firm pressure with gauze for 20 to 30 minutes",["A figure-of-eight suture without any pressure","Immediate referral to hospital for transfusion","A prescription for tranexamic acid tablets"],"Most post-extraction bleeding stops with direct pressure, so it comes first once the source has been found. Suturing and tranexamic acid are later steps if bleeding continues."],
  ["A 50-year-old returns 8 days after a surgical extraction with new bleeding and an inflamed, tender socket. This timing and appearance best fit:","Secondary haemorrhage from infection eroding vessels",["Primary haemorrhage from a cut artery","Reactionary haemorrhage as vasoconstrictor wears off","Haemophilia A newly presenting at age 50"],"Secondary haemorrhage comes at about 7 to 10 days, from infection. Reactionary bleeding comes within about 24 hours, when vasoconstriction wears off or blood pressure rises."],
  ["A patient's socket is still bleeding after 30 minutes of firm pressure. Blood pressure is normal. The most appropriate next step is to:","Infiltrate with vasoconstrictor, pack a haemostatic agent and suture",["Send the patient home with instructions to rinse with saline","Order an INR and wait for the result before any treatment","Apply more gauze and advise the patient to wait until the morning"],"This is the next rung: vasoconstriction, then a scaffold for the clot, then a suture to hold it. Rinsing removes the clot, and waiting without treatment leaves an active bleed unmanaged."],
  ["A 72-year-old on warfarin with an INR of 2.8 this morning oozes after extraction of 4.6. Which local measure is most appropriate to add to pressure and suturing?","A tranexamic acid-soaked gauze or rinse",["Oral vitamin K given at the clinic","Omission of warfarin for one week","Acetylsalicylic acid for pain relief"],"Tranexamic acid slows fibrinolysis locally without affecting systemic anticoagulation. Vitamin K and stopping warfarin expose the patient to thromboembolism and are decisions for the prescriber."],
  ["The maxillary tooth most likely to create an oroantral communication when extracted is:","2.6",["2.4","2.3","2.1"],"The sinus floor lies closest to the roots of upper molars. Premolars can occasionally be involved, but canines and incisors rarely are."],
  ["After extraction of 1.6, the operator suspects an oroantral communication. The most appropriate way to assess it is to:","Inspect the root and socket, then do a gentle nose-blow test",["Pass a periodontal probe firmly through the socket floor","Syringe saline forcefully into the socket under high pressure","Curette the socket apex until sinus lining is visible"],"Inspection and gentle signs are safe. Firm probing or forceful irrigation can enlarge the opening or drive material into the sinus."],
  ["A communication of about 1 to 2 mm is noted after extraction of 2.7. A good clot has formed and the sinus is healthy. The most appropriate management is to:","Protect the clot and give sinus precautions",["Raise a buccal advancement flap and close immediately","Refer the patient for immediate sinus surgery","Pack the socket firmly with a eugenol dressing"],"Openings of about 2 mm or less usually close with a stable clot (Hupp). A large flap is reserved for larger openings, and a eugenol dressing is for dry socket, not a sinus opening."],
  ["The palatal root tip of 2.6 cannot be found after a fracture, and the socket is open to the sinus. Which of the following is the most appropriate next step?","Obtain a radiograph to locate the fragment, avoiding blind probing",["Push a straight elevator apically to dislodge the fragment","Close the socket and tell the patient nothing unless pain develops","Repeatedly flush the socket under pressure to float the root out"],"A radiograph confirms where the fragment is, and referral may follow if it is not simply retrieved. Apical elevator force can push it further, and the patient must always be informed."]
 ]
};

/* ---------------------------------------------------------------- m21-n04 */
window.CONTENT["m21-n04"] = {
 understand: `
 <p><b>Odontogenic infection is a plumbing problem first and a drug problem second.</b> A necrotic pulp or a periodontal pocket feeds a mixed population of streptococci (such as the anginosus group) and anaerobes (<i>Prevotella</i>, <i>Fusobacterium</i>, peptostreptococci). Pus under pressure in a closed space is poorly reached by antibiotics because it has no blood supply. So the core treatment is to <b>remove the source and drain</b>: pulpectomy, extraction, or incision and drainage (I&amp;D). An antibiotic is the <b>adjunct</b>.</p>
 <p><b>Stages tell you what to do</b> (Hupp). <b>Inoculation</b> is soft, doughy and mildly tender. <b>Cellulitis</b> is hard, red, diffuse and very tender. An <b>abscess</b> is localised and fluctuant. Drain what is fluctuant and remove the cause. Do not wait for fluctuance in a spreading or deep-space infection.</p>
 <p><b>Spread follows muscle attachments.</b> Pus leaves bone where the cortex is thinnest, then the apex position against a muscle decides the space.</p>
 <div class="tscroll"><table><tr><th>Source</th><th>Apex position</th><th>Usual space</th></tr>
 <tr><td>Most upper teeth</td><td>Below buccinator attachment</td><td>Vestibule</td></tr>
 <tr><td>Upper canine 1.3, 2.3</td><td>Above levator anguli oris</td><td>Canine (infraorbital)</td></tr>
 <tr><td>Upper and lower molars, long roots</td><td>Beyond buccinator</td><td>Buccal</td></tr>
 <tr><td>Lower incisors (labial), apex below mentalis</td><td>Below mentalis</td><td>Submental</td></tr>
 <tr><td>Lower premolars, often 3.6, 4.6 (lingual)</td><td>Above mylohyoid</td><td>Sublingual</td></tr>
 <tr><td>3.7, 3.8, 4.7, 4.8</td><td>Below mylohyoid</td><td>Submandibular</td></tr></table></div>
 <p>From these primary spaces, infection reaches the <b>masticator spaces</b> (trismus), the <b>lateral pharyngeal space</b> (dysphagia, a deviated uvula), and the <b>retropharyngeal</b> and <b>danger spaces</b>, which run to the mediastinum. Veins without effective valves link the face to the <b>cavernous sinus</b>: suspect it with fever, eyelid swelling, proptosis and a failing eye movement.</p>
 <p><b>Ludwig's angina</b> is bilateral cellulitis of the submandibular, sublingual and submental spaces, usually from a lower second or third molar. The floor of mouth turns woody and the tongue is pushed up and back. Patients die of airway obstruction. <b>Secure the airway first</b>, then decompress surgically and give intravenous antibiotics in hospital.</p>
 <p><b>Decide where to treat.</b> Hupp's referral triggers: rapidly progressing swelling, difficulty breathing or swallowing, secondary-space involvement, interincisal opening under 10 mm, a toxic appearance, temperature above 38.3 °C, or a compromised host. Watch for drooling, a muffled voice and an upright, leaning-forward posture.</p>
 <p><b>Drainage technique.</b> Anaesthetise by block away from the swelling, because acidic pus defeats local anaesthetic. Incise healthy tissue at the most dependent point. Open every pocket with a haemostat, culture the pus if severe, and place a drain. Remove it once drainage has stopped, usually after a few days.</p>
 <p><b>Antibiotics only for systemic or spreading signs</b> (fever, malaise, spreading cellulitis, trismus, a compromised host). A localised vestibular abscess drained in the chair needs none. First line is amoxicillin 500 mg three times daily for 3 to 7 days, or penicillin V. For a severe allergy, use azithromycin or clindamycin. If first line fails, add metronidazole. <b>Re-evaluate within 3 days</b> (ADA 2019). If the patient is not better, first ask whether the source was removed and the pus drained, then about host defences and antibiotic choice.</p>
 <p><b>Why the exam cares.</b> Stems name a tooth and a swelling, then ask which space, what comes first, or whether to refer. The answers are muscle attachment, drainage and airway.</p>`,
 connect: [
  {to:"m02-n06", why:"Fascial space anatomy is the map this node applies: apex against muscle attachment, then primary to secondary spaces."},
  {to:"m02-n05", why:"Valveless facial and ophthalmic veins and the pterygoid plexus are the route to cavernous sinus thrombosis."},
  {to:"m11-n05", why:"Antibiotic selection, duration and allergy alternatives for odontogenic infection come from the prescribing node."},
  {to:"m12-n04", why:"Acidic, inflamed tissue lowers the unionised fraction of local anaesthetic, so a block away from the swelling is chosen before drainage."},
  {to:"m04-n07", why:"The anaerobes of a mixed odontogenic infection explain the role of metronidazole when first-line therapy fails."}
 ],
 apply: {
  vignette: "A 38-year-old has a painful swelling below the left mandible for 3 days, from a carious 3.7. Temperature is 38.9 °C, interincisal opening is 8 mm, and swallowing is painful. There is no stridor. The most appropriate management is to:",
  options: ["Prescribe amoxicillin and review in 48 hours","Refer urgently to hospital for airway assessment, drainage and IV antibiotics","Extract 3.7 in the chair under inferior alveolar block, then discharge","Incise intraorally at the mucobuccal fold and discharge with analgesics"],
  answer: "Refer urgently to hospital for airway assessment, drainage and IV antibiotics",
  steps: [
   "The ask: the setting and first management of a spreading infection.",
   "Facts that matter: a lower second molar below mylohyoid, fever above 38.3 °C, opening under 10 mm, and dysphagia, which suggests spread beyond the submandibular space.",
   "Cross out amoxicillin and review: an antibiotic alone does not drain the infection, and waiting 48 hours risks the airway.",
   "Cross out chair-side extraction under a block: trismus prevents access, the block will be unreliable, and the deep space still needs drainage.",
   "Cross out a vestibular incision: the pus is below mylohyoid, so a mucobuccal incision does not reach it.",
   "The survivor explains everything: several Hupp referral triggers are present, and hospital care allows airway control, deep drainage and IV antibiotics."
  ]
 },
 teach: {
  prompt: "Explain to a patient's family why their relative's swollen jaw needs surgery rather than just stronger antibiotics, and why the doctors talk about the airway first.",
  model: "The infection has formed pus in a closed pocket. The pocket has no blood supply, so antibiotics carried in the blood cannot reach enough of it, and the pressure keeps pushing the infection along loose tissue planes. Opening and draining the pocket and removing the infected tooth removes the source, and the antibiotic then mops up what has spread. The planes under the jaw connect to the floor of the mouth and the throat, so swelling can push the tongue back and narrow the airway. Breathing must be safe before anything else."
 },
 cards: [
  ["Core treatment of odontogenic infection","Remove the source and drain; antibiotic is the adjunct"],
  ["Cellulitis vs abscess","Cellulitis: hard, diffuse, very tender. Abscess: localised, fluctuant"],
  ["Lower molar apex below mylohyoid","Submandibular space"],
  ["Upper canine apex above levator anguli oris","Canine (infraorbital) space; loses nasolabial fold"],
  ["Masticator space sign","Trismus"],
  ["Lateral pharyngeal space signs","Dysphagia, deviated uvula, trismus"],
  ["Ludwig's angina: spaces and first step","Bilateral submandibular, sublingual, submental; secure the airway"],
  ["Hupp referral: trismus and temperature","Opening under 10 mm; temperature above 38.3 °C"],
  ["When are antibiotics indicated?","Systemic or spreading signs, or a compromised host"],
  ["First-line antibiotic (adults)","Amoxicillin 500 mg three times daily, 3 to 7 days"],
  ["No improvement within 3 days: first question","Was the source removed and the pus drained?"]
 ],
 questions: [
  ["A 30-year-old has a localised, fluctuant vestibular swelling over a necrotic 2.5. Temperature is normal and there is no spread. The most appropriate management is to:","Drain through the canal or an incision and treat the tooth, with no antibiotic",["Prescribe amoxicillin and delay treatment until the swelling settles","Prescribe clindamycin and refer to a hospital emergency department","Apply a warm extraoral compress and review in one week"],"A localised abscess without systemic signs is treated by removing the source and draining. An antibiotic alone leaves the pus and the source in place."],
  ["Which of the following best explains why drainage is more important than the antibiotic in an odontogenic abscess?","Pus in a closed cavity has no blood supply for the drug to reach",["Oral bacteria are mostly resistant to oral antibiotics","Antibiotics are inactivated by the low oxygen in normal tissue","Drainage raises the local pH, which kills the bacteria directly"],"Antibiotics travel in blood, and an abscess cavity is avascular and under pressure. Most odontogenic bacteria remain sensitive to penicillins, so resistance is not the main reason."],
  ["A 45-year-old has a swelling below the right angle of the mandible from a carious 4.7. The space most likely involved is the:","Submandibular space",["Sublingual space","Pterygomandibular space","Canine space"],"The roots of 4.7 usually reach below the mylohyoid line, so pus enters the submandibular space. Apices above mylohyoid drain to the sublingual space and raise the floor of mouth."],
  ["A 50-year-old has swelling of the floor of mouth on one side, raising the tongue, from a necrotic 3.4. The most likely space is the:","Sublingual space",["Submandibular space","Submental space","Pterygomandibular space"],"Premolar apices usually lie above mylohyoid, so infection appears in the floor of mouth. The submandibular space produces swelling below the jaw rather than in the mouth."],
  ["A 35-year-old has swelling beside the nose that obliterates the left nasolabial fold, with lower eyelid oedema. The most likely source is:","2.3",["2.6","3.3","2.1"],"The long upper canine root reaches above levator anguli oris into the canine (infraorbital) space. A molar more often produces buccal space swelling over the cheek."],
  ["A patient with an infection from 3.8 develops marked trismus with little visible facial swelling. Which space is most likely involved?","Pterygomandibular space",["Submental space","Infraorbital (canine) space","Sublingual space"],"Masticator space infection inflames the muscles of mastication, so trismus dominates and swelling is hidden deep to the ramus. Submental and canine spaces produce visible swelling without major trismus."],
  ["A patient with a lower molar infection develops dysphagia, a deviated uvula and medial bulging of the lateral pharyngeal wall. The space most likely involved is the:","Lateral pharyngeal space",["Buccal space","Submental space","Superficial temporal space"],"Swelling pushing the pharyngeal wall and uvula medially is typical of lateral pharyngeal space infection, a secondary space that needs hospital care. The buccal space swells the cheek externally."],
  ["A 40-year-old has bilateral, board-like swelling of the submandibular and sublingual regions, with the tongue elevated and drooling. The most appropriate first priority is to:","Secure the airway",["Extract the source tooth","Start oral amoxicillin","Obtain a panoramic radiograph"],"In Ludwig's angina, death results from airway obstruction, so airway control precedes drainage and antibiotics. Imaging and source removal follow in hospital."],
  ["A patient with an upper canine infection develops fever, proptosis and ophthalmoplegia. Which of the following best explains the route of spread?","Valveless facial and ophthalmic veins reach the cavernous sinus",["Lymphatics drain the canine region directly into the orbit","The infraorbital nerve conducts bacteria back to the brainstem","The maxillary sinus opens directly into the cavernous sinus"],"Facial veins lack effective valves, so flow can reverse through the ophthalmic veins or pterygoid plexus into the cavernous sinus. The sinus does not open into the cavernous sinus."],
  ["According to Hupp, which finding is a criterion for referring an odontogenic infection to a specialist or hospital?","Interincisal opening under 10 mm",["Temperature of 37.4 °C","A fluctuant vestibular swelling","Pain on biting on the source tooth"],"Severe trismus, below 10 mm, suggests deep-space spread and threatens airway access. A temperature of 37.4 °C is below Hupp's 38.3 °C threshold."],
  ["Incision and drainage is planned for a fluctuant buccal abscess over 1.6. The most appropriate anaesthetic approach is to:","Use a regional block away from the swelling, plus topical",["Inject directly into the fluctuant abscess cavity","Use plain lidocaine infiltrated into the swelling's centre","Avoid anaesthesia because the abscess is already numb"],"Acidic pus increases the ionised fraction of local anaesthetic, so injection into it fails and can spread infection. A block placed in healthy tissue reaches nerves at normal pH."],
  ["A patient was given amoxicillin three days ago for a swelling from 4.6 without any surgical treatment. The swelling is worse. The most appropriate next step is to:","Drain it and treat or remove the source",["Switch to a broader-spectrum antibiotic","Double the amoxicillin dose","Add a corticosteroid to reduce swelling"],"Failure to improve is most often surgical: undrained pus and a source still present. Changing antibiotics without draining treats the wrong problem."],
  ["A 55-year-old with a spreading odontogenic cellulitis reports urticaria with amoxicillin. Oral therapy is appropriate. The most appropriate antibiotic is:","Azithromycin",["Amoxicillin-clavulanate","Cephalexin","Penicillin V"],"Urticaria suggests an immediate-type reaction, so penicillins are avoided and many cephalosporins are avoided as well. Azithromycin or clindamycin are the listed alternatives, and clindamycin carries a higher C. difficile risk."]
 ]
};

/* ---------------------------------------------------------------- m21-n05 */
window.CONTENT["m21-n05"] = {
 understand: `
 <p><b>Two bones that cannot heal.</b> A socket heals because osteoclasts remodel the walls and new vessels bring cells in. Remove either and an extraction can leave dead bone exposed.</p>
 <p><b>MRONJ: turnover switched off.</b> Bisphosphonates bind bone mineral and poison osteoclasts. They stay in bone for years. <b>Denosumab</b> blocks RANKL, so osteoclasts do not form. Its effect fades within months, but stopping it suddenly can cause rebound vertebral fractures. Antiangiogenic drugs such as bevacizumab add vessel injury. Infection and inflammation at the surgical site complete the picture. The mandible is affected more often than the maxilla.</p>
 <p><b>Definition (AAOMS 2022)</b>, all three: current or previous antiresorptive therapy, alone or with immune modulators or antiangiogenic agents; exposed bone, or bone probed through a fistula, for <b>more than 8 weeks</b>; and no radiation to the jaws or metastases there.</p>
 <p><b>Risk depends on indication.</b> Cancer doses, such as monthly zoledronate or denosumab, carry a risk under 5%. Osteoporosis doses carry a risk of about 0.02 to 0.05% with bisphosphonates and about 0.04 to 0.3% with denosumab. After an extraction, the figure in cancer patients on bisphosphonates is about 1.6 to 14.8%; in osteoporosis it stays well under 1%. Longer exposure, concurrent corticosteroids and dentoalveolar surgery raise risk; dentoalveolar surgery is the most common trigger. AAOMS 2014 treated oral bisphosphonate use for more than 4 years as higher risk.</p>
 <p><b>Surgical decisions.</b></p>
 <ul>
 <li><b>Before therapy:</b> complete dental clearance. If systemic conditions permit, the physician may delay therapy until extraction sites have mucosalised, about 14 to 21 days (AAOMS).</li>
 <li><b>During cancer-dose therapy:</b> avoid extraction where possible. For a non-restorable tooth that is not infected or mobile, root canal treatment with crown removal can keep the roots in place.</li>
 <li><b>Osteoporosis doses:</b> needed surgery usually proceeds, with consent about the small risk.</li>
 <li><b>When surgery is needed:</b> atraumatic technique, minimal flaps, smooth sharp bone, primary closure where possible, chlorhexidine rinses, and review until healed.</li>
 <li><b>Drug holidays:</b> evidence is limited, and stopping is the prescriber's decision, never the dentist's.</li>
 </ul>
 <p><b>Stage-based treatment.</b> At-risk: no treatment, education. Stage 0: symptoms only, systemic care. Stage 1, exposed bone without symptoms: antimicrobial rinse and review. Stage 2, pain and infection: add antibiotics, analgesia and debridement. Stage 3, adding fracture, extraoral fistula or sinus communication: resection by a specialist. Do not use bone turnover blood tests to predict risk.</p>
 <p><b>Osteoradionecrosis (ORN): blood supply lost.</b> Radiation leaves bone hypovascular, hypocellular and hypoxic, so it cannot repair a wound. ORN is irradiated bone exposed and not healing, without tumour recurrence, usually in the mandible. Risk is high above 60 Gy and lifelong. Extract poor teeth in the field at least 2 weeks before radiotherapy (ISOO-MASCC-ASCO 2024). Afterwards, prefer root canal treatment. If extraction is unavoidable, check the radiation plan, refer to a specialist, and use atraumatic technique and primary closure. Do not use hyperbaric oxygen routinely. A biopsy may be needed to exclude recurrence.</p>
 <p><b>Other medically complex surgery</b> relies on rules from the medical modules. Warfarin: proceed if INR is 3.5 or below, using local measures. DOACs and antiplatelets: usually continue. Prosthetic valves: AHA 2021 prophylaxis. Chemotherapy: operate near count recovery, not at the nadir.</p>
 <p><b>Why the exam cares.</b> Stems test the definition, risk by indication, and the safest way to manage a bad tooth without making a wound in bone that cannot heal.</p>`,
 connect: [
  {to:"m13-n10", why:"The medical node sets the timing of surgery around cancer therapy; this node turns it into surgical technique and staging."},
  {to:"m11-n08", why:"Bisphosphonate and denosumab pharmacology explains why one persists in bone for years and the other does not."},
  {to:"m09-n02", why:"Osteoradionecrosis is a deterministic radiation effect on bone, so dose and field decide extraction risk."},
  {to:"m13-n05", why:"Anticoagulants and antiplatelets are the commonest medically complex surgery questions, managed with the INR limit and local measures."},
  {to:"m10-n10", why:"Exposed bone in a medicated patient is a systemic disease clue recognised in oral medicine before it is managed surgically."}
 ],
 apply: {
  vignette: "A 66-year-old receives monthly intravenous zoledronate for bone metastases from breast cancer. Tooth 3.6 has a fractured, non-restorable crown. It is not mobile and has no periapical lesion. The most appropriate management is to:",
  options: ["Extract 3.6 with a mucoperiosteal flap and bone removal","Ask her to stop zoledronate for 3 months, then extract 3.6","Root canal treatment of 3.6, remove the crown, and leave the roots","Extract 3.6 and request hyperbaric oxygen before and after"],
  answer: "Root canal treatment of 3.6, remove the crown, and leave the roots",
  steps: [
   "The ask: the safest way to manage a bad tooth in a high-risk MRONJ patient.",
   "Facts that matter: cancer-dose zoledronate, a non-restorable tooth that is not mobile or infected.",
   "Cross out flap extraction: it creates the bony wound that triggers MRONJ.",
   "Cross out stopping zoledronate: holiday benefit is unproven, it stays in bone for years, and stopping is the prescriber's decision.",
   "Cross out hyperbaric oxygen: it has no routine role here.",
   "The survivor explains everything: retained roots avoid a socket, while endodontics removes the infection risk."
  ]
 },
 teach: {
  prompt: "Explain why both MRONJ and osteoradionecrosis follow an extraction, using what a healing socket needs, and then say how that changes your plan for a bad tooth.",
  model: "A socket heals because osteoclasts remodel its walls and new vessels carry repair cells into the clot. Antiresorptives switch off the osteoclasts, and radiation destroys the vessels and cells, so in both cases the socket wall cannot be repaired and becomes exposed dead bone. The plan is therefore to avoid making a bony wound: clear teeth before therapy, prefer root canal treatment or retaining roots during and after it, and when surgery is unavoidable use atraumatic technique and primary closure with close review. Drug changes are left to the prescriber, and radiation history is checked with the oncologist."
 },
 cards: [
  ["MRONJ definition","Antiresorptive or antiangiogenic exposure; exposed or probeable bone over 8 weeks; no jaw radiation or metastases"],
  ["MRONJ risk: cancer vs osteoporosis doses","Under 5% vs about 0.02 to 0.05% (bisphosphonates) or 0.04 to 0.3% (denosumab)"],
  ["Commonest trigger for MRONJ","Dentoalveolar surgery, especially extraction"],
  ["Bisphosphonate vs denosumab persistence","Bisphosphonate stays in bone for years; denosumab's effect fades within months"],
  ["Non-restorable tooth on cancer-dose zoledronate","Root canal treatment, crown removal, retain roots if not mobile or infected"],
  ["Who decides a drug holiday?","The prescriber; evidence of benefit is limited"],
  ["Stage 3 MRONJ features","Stage 2 plus fracture, extraoral fistula or sinus or nasal communication"],
  ["ORN mechanism","Radiation makes bone hypovascular, hypocellular, hypoxic"],
  ["ORN dose risk","High above 60 Gy; lifelong"],
  ["Extraction timing before head and neck radiotherapy","At least 2 weeks before (ISOO-MASCC-ASCO 2024)"],
  ["Hyperbaric oxygen for ORN prevention","Not routine"]
 ],
 questions: [
  ["Which of the following patients meets the AAOMS 2022 definition of MRONJ?","A 72-year-old on denosumab with exposed bone at 4.6 for 10 weeks and no jaw radiation",["A 72-year-old on denosumab with exposed bone at 4.6 for 3 weeks","A 66-year-old with exposed bone after 66 Gy to the mandible and no antiresorptive","A 55-year-old with a painful empty socket 3 days after extraction of 3.8"],"MRONJ needs drug exposure, more than 8 weeks of exposed or probeable bone, and no jaw radiation. Three weeks is too early, radiation history points to ORN, and a painful socket at day 3 is dry socket."],
  ["Which of the following patients has the highest risk of MRONJ after extraction of a lower molar?","A 60-year-old on monthly intravenous zoledronate for myeloma",["A 70-year-old on weekly alendronate for 2 years","A 68-year-old who had one annual zoledronate infusion for osteoporosis","A 58-year-old on calcium and vitamin D supplements"],"Risk follows potency and dose: cancer-dose zoledronate carries a far higher risk than osteoporosis regimens. Calcium and vitamin D carry no MRONJ risk."],
  ["Which of the following best explains why denosumab and bisphosphonates differ in how long the MRONJ risk persists after stopping?","Bisphosphonates bind bone for years; denosumab is not stored in bone",["Denosumab is excreted unchanged by the kidney within hours","Bisphosphonates are oral, whereas denosumab is given intravenously","Denosumab acts on osteoblasts, whereas bisphosphonates act on vessels"],"Bisphosphonates are incorporated into bone and released slowly, whereas denosumab is an antibody whose RANKL blockade wears off. Denosumab is given by subcutaneous injection, and both drugs act on osteoclasts."],
  ["A 63-year-old is about to start monthly zoledronate for bone metastases. Tooth 2.6 is non-restorable. The most appropriate timing of extraction is:","Before therapy begins, allowing healing if her physician agrees",["After the first three infusions, once the drug is established","Once 2.6 becomes symptomatic during therapy","After a planned drug holiday following one year of therapy"],"Extracting before antiresorptive therapy, with time for mucosal healing, avoids creating a wound in drug-affected bone. Waiting until symptoms appear means surgery in high-risk bone."],
  ["A 70-year-old has taken oral alendronate for 2 years for osteoporosis, with no steroids. She needs extraction of a non-restorable 3.5. The most appropriate plan is to:","Extract atraumatically after consent about the low risk",["Decline to extract because of the risk of MRONJ","Stop alendronate for 6 months before extraction","Order a serum CTX test first to decide whether it is safe"],"Osteoporosis doses carry a low risk, so necessary surgery proceeds with consent and careful technique. Bone turnover markers are not reliable predictors, and holidays are the prescriber's decision."],
  ["A 75-year-old on zoledronate for metastatic prostate cancer has exposed bone in the 4.6 region for 12 weeks. There is no pain and no sign of infection. The stage and management are:","Stage 1, with an antimicrobial rinse and regular review",["Stage 2, with antibiotics and surgical resection","Stage 3, with segmental resection","Stage 0, with no treatment needed"],"Exposed bone without symptoms or infection is stage 1, managed with an antimicrobial rinse and follow-up. Stage 2 adds pain and infection, and stage 0 has no exposed bone."],
  ["A patient with MRONJ has exposed bone at 3.7 with a pathological fracture of the mandible. This is classified as:","Stage 3",["Stage 1","Stage 2","At risk"],"Pathological fracture, extraoral fistula or communication with the sinus or nose defines stage 3. Stage 2 has pain and infection without these features."],
  ["Which of the following best explains why osteoradionecrosis can develop many years after radiotherapy?","Radiation leaves bone permanently hypovascular, hypocellular and hypoxic",["Radiation activates osteoclasts that keep resorbing for many years","The tumour recurs inside the bone in every case","Radiation stops the salivary glands, which directly kills bone"],"Vessel and cell damage is permanent, so any later wound may fail to heal. Recurrence must be excluded, but it is not the mechanism of ORN."],
  ["A 64-year-old received 70 Gy to the left mandible three years ago. Tooth 3.6 has a deep carious lesion with irreversible pulpitis and is restorable. The most appropriate treatment is:","Root canal treatment and restoration",["Extraction with primary closure in the practice","Extraction after one session of hyperbaric oxygen","Extraction with a socket preservation graft"],"Avoiding extraction avoids the wound that triggers ORN in a high-dose field. When the tooth is restorable, root canal treatment is the safer option."],
  ["According to ISOO-MASCC-ASCO 2024, non-restorable teeth in a planned head and neck radiation field should ideally be extracted:","At least 2 weeks before radiotherapy",["On the first day of radiotherapy","During the final week of radiotherapy","Six months after radiotherapy ends"],"Two weeks allows initial healing before the bone loses its blood supply, without delaying cancer care. Extraction after radiotherapy carries the ORN risk this timing aims to avoid."],
  ["A 68-year-old with a history of 66 Gy to the mandible needs extraction of a mobile, non-restorable 4.7. The most appropriate approach is to:","Liaise with oncology and refer for atraumatic extraction",["Extract routinely in practice with a flap and alveoloplasty","Delay until the tooth exfoliates naturally","Prescribe routine hyperbaric oxygen as the main prevention"],"A high-dose field needs the radiation plan, a specialist setting and minimal trauma. Hyperbaric oxygen is not routine prevention, and a tooth that is left in place can become a source of infection."],
  ["A 70-year-old with a mechanical mitral valve takes warfarin and has an INR of 2.9 measured this morning. He needs extraction of 3.5. The most appropriate plan is to:","Proceed with local haemostasis and AHA 2021 prophylaxis",["Stop warfarin for 5 days and extract when INR is normal","Bridge with heparin and extract without prophylaxis","Defer extraction until the INR is below 1.5"],"An INR of 3.5 or below allows extraction with local measures, and a prosthetic valve is a highest-risk condition for prophylaxis. Stopping warfarin risks valve thrombosis."],
  ["A patient receiving chemotherapy cycles every 3 weeks needs an extraction. The most appropriate timing is:","Shortly before the next cycle, with counts confirmed",["At the nadir, about 10 days after a cycle","The day after a cycle, before counts fall","At any point, since chemotherapy does not affect healing"],"Counts are lowest at the nadir, about 7 to 14 days after treatment, and recover before the next cycle. Operating at the nadir risks infection and bleeding."]
 ]
};

/* ---------------------------------------------------------------- m21-n06 */
window.CONTENT["m21-n06"] = {
 understand: `
 <p><b>Two tissues decide the outcome: the PDL and the pulp.</b> After an injury, the periodontal ligament (PDL) must survive or the root fuses to bone. The pulp must survive or become infected and then be removed. Every IADT 2020 instruction protects one of the two.</p>
 <p><b>Avulsion is a race against the PDL drying out.</b> After about 30 minutes dry, most PDL cells are not viable. After 60 minutes, IADT counts the tooth's PDL as dead. A dead PDL heals by <b>replacement resorption</b> (ankylosis): bone fuses to the root and slowly replaces it. A surviving PDL that touches infected pulp drives <b>inflammatory resorption</b>, so pulp management matters too.</p>
 <p><b>At the scene:</b> hold the crown, not the root. Rinse briefly under cold running water if dirty, and replant at once. If that is not possible, store the tooth in milk, HBSS, saliva or saline. Water is poor, better only than air-drying. <b>Primary teeth are never replanted.</b></p>
 <p><b>In the clinic, closed apex.</b></p>
 <ul>
 <li><b>Already replanted:</b> leave it, clean the area, check its position on a radiograph, and splint.</li>
 <li><b>Dry time under 60 minutes, kept in a medium:</b> rinse the root with saline, irrigate the socket clot away gently without curetting, and replant with light pressure.</li>
 <li><b>Dry time over 60 minutes:</b> remove dead soft tissue from the root with gauze and replant. Expect ankylosis. The tooth still preserves the ridge.</li>
 <li><b>For all three:</b> passive flexible splint for 2 weeks; root canal treatment started within 2 weeks; systemic antibiotics; chlorhexidine rinse and a soft diet.</li>
 </ul>
 <p><b>Open apex.</b> Replant and splint the same way, but do not start root canal treatment at once. A wide apex can revascularise, so monitor and act only on signs of necrosis or infection. In a growing child with ankylosis, <b>decoronation</b> keeps the ridge when infraposition becomes significant.</p>
 <p><b>Luxations (permanent teeth).</b></p>
 <div class="tscroll"><table><tr><th>Injury</th><th>Signs</th><th>Management</th></tr>
 <tr><td>Concussion</td><td>Tender, not mobile</td><td>No splint; monitor pulp</td></tr>
 <tr><td>Subluxation</td><td>Tender, mobile, not displaced; sulcular bleeding</td><td>Splint 2 weeks only if needed for comfort</td></tr>
 <tr><td>Extrusion</td><td>Longer, mobile</td><td>Reposition; flexible splint 2 weeks</td></tr>
 <tr><td>Lateral luxation</td><td>Displaced, locked in bone; metallic percussion note</td><td>Free and reposition; splint 4 weeks</td></tr>
 <tr><td>Intrusion</td><td>Pushed in; metallic note</td><td>Immature: allow re-eruption. Mature: up to 3 mm allow, 3 to 7 mm surgical or orthodontic, over 7 mm surgical</td></tr></table></div>
 <p>A mature tooth with intrusion or lateral luxation usually loses its pulp, so root canal treatment usually follows. Early negative sensibility tests do not prove necrosis; wait for corroborating signs.</p>
 <p><b>Tetanus.</b> A dirty wound, soil contact or an uncertain vaccination history needs a medical check. Under the Canadian Immunization Guide, a patient with 3 or more previous doses needs a tetanus-containing booster for a clean minor wound if the last dose was 10 or more years ago, and for any other wound if it was 5 or more years ago. An unknown or incomplete history needs the vaccine, plus tetanus immune globulin for wounds other than clean minor ones.</p>
 <p><b>Follow up</b> avulsions at 2 weeks, 4 weeks, 3 months, 6 months, 1 year and then yearly for at least 5 years. Document carefully, and consider abuse when the history does not fit the injury.</p>
 <p><b>Why the exam cares.</b> Stems give dry time, storage, apex and injury type, then ask for the medium, the splint duration or the pulp decision.</p>`,
 connect: [
  {to:"m20-n06", why:"The endodontics node carries the IADT 2020 crown and root fracture guidance and the pulp side of these decisions."},
  {to:"m23-n05", why:"Primary teeth follow different rules, beginning with never replanting an avulsed primary tooth."},
  {to:"m01-n01", why:"Storage media are chosen by osmosis, which is why hypotonic water damages PDL cells and milk preserves them."},
  {to:"m04-n06", why:"Clostridium tetani is a Gram-positive spore-former, so soil-contaminated wounds raise the tetanus question."},
  {to:"m14-n08", why:"Injuries whose history does not match the findings must be documented and considered as possible abuse."}
 ],
 apply: {
  vignette: "A 13-year-old avulsed tooth 1.1 in a fall 40 minutes ago. The tooth was placed in milk within 5 minutes. The apex is closed on the radiograph of the contralateral tooth and there is no alveolar fracture. The most appropriate management is to:",
  options: ["Rinse with saline, replant, flexible splint 2 weeks, and start root canal treatment within 2 weeks","Scrape the root surface clean with a curette, then replant and rigidly splint for 4 weeks","Complete root canal treatment outside the mouth, then replant and splint for 4 weeks","Do not replant, because more than 30 minutes have passed since the injury"],
  answer: "Rinse with saline, replant, flexible splint 2 weeks, and start root canal treatment within 2 weeks",
  steps: [
   "The ask: management of an avulsed mature permanent tooth.",
   "Facts that matter: dry time is about 5 minutes, because time in milk does not count as dry; the apex is closed; there is no fracture.",
   "Cross out scraping the root: it destroys the PDL cells that milk kept alive, and rigid splinting for 4 weeks is for associated fractures.",
   "Cross out extraoral root canal treatment: it lengthens the time out of the socket and is not indicated with a short dry time.",
   "Cross out not replanting: the 30 to 60 minute figures refer to dry time, and this tooth was stored in milk.",
   "The survivor explains everything: replanting preserves the living PDL, a flexible splint for 2 weeks allows function, and early root canal treatment prevents inflammatory resorption in a closed apex."
  ]
 },
 teach: {
  prompt: "Using only the PDL and the pulp, explain why IADT says replant at once, store in milk not water, splint flexibly, and root-treat a mature avulsed tooth but not an immature one.",
  model: "The PDL is living tissue on the root, and if it dies the root fuses with bone and is slowly replaced. Replanting at once or storing in near-isotonic milk keeps those cells alive, while water is hypotonic and bursts them. A flexible splint lets the tooth move slightly, which favours PDL healing over fusion. The pulp of a mature tooth is cut off at a narrow apex and will die and become infected, which drives inflammatory resorption, so root canal treatment starts within 2 weeks. A wide open apex can revascularise, so that pulp is given a chance and watched."
 },
 cards: [
  ["Avulsion storage media, best to poorest","Milk, HBSS, saliva, saline; water is poor, better only than dry"],
  ["Avulsed primary tooth","Never replant"],
  ["PDL viability and dry time","Most PDL cells non-viable after 30 minutes dry; IADT treats PDL as dead after 60 minutes"],
  ["Splint after avulsion (no fracture)","Passive flexible splint, 2 weeks"],
  ["Root canal treatment after avulsion, closed apex","Start within 2 weeks of replantation"],
  ["Open-apex avulsed tooth: pulp plan","Allow revascularisation; treat only on signs of necrosis"],
  ["Lateral luxation: sign and splint","Metallic percussion note; reposition and splint 4 weeks"],
  ["Extrusion splint","Flexible splint, 2 weeks"],
  ["Mature intrusion over 7 mm","Surgical repositioning"],
  ["Replacement resorption","Ankylosis after PDL death: bone fuses with and replaces the root"],
  ["Avulsion follow-up","2 wk, 4 wk, 3 mo, 6 mo, 1 yr, then yearly for at least 5 years"]
 ],
 questions: [
  ["A 15-year-old's avulsed 2.1 was replanted by a teacher 10 minutes after injury. At the clinic it is well positioned. The most appropriate management is to:","Leave it, check it radiographically and apply a flexible splint",["Remove it, rinse it with saline and replant it again","Remove it and store it in milk until the parents arrive","Extract it, as replantation by a non-professional is unsafe"],"A tooth replanted at the scene stays in place, which avoids further PDL injury. Removing it to rinse adds damage for no benefit."],
  ["The parent of a 10-year-old phones: tooth 1.1 has just been avulsed and is clean. The child is calm. The most appropriate advice is to:","Replant it at once by the crown and come to the clinic",["Wrap it in a dry tissue and come to the clinic","Store it in a cup of tap water and come to the clinic","Scrub the root clean with a toothbrush, then replant"],"Immediate replantation gives the best PDL survival. A dry tissue adds dry time, and water and scrubbing destroy PDL cells."],
  ["According to IADT 2020, which is the least suitable medium for transporting an avulsed permanent tooth when replantation is not possible?","Tap water",["Milk","Saline","Hank's balanced salt solution"],"Water is hypotonic and lyses PDL cells, so it is better only than air-drying. Milk, saline and HBSS are suitable media."],
  ["A 35-year-old's avulsed 1.1 has been dry in a pocket for 2 hours. There are no medical contraindications. The most appropriate management is to:","Clean the root, replant and splint, expecting ankylosis",["Do not replant, because the PDL cells are no longer viable","Replant after scraping the root and the socket walls","Replant without a splint and without any further follow-up"],"Even with a dead PDL, replantation keeps the ridge and the tooth's appearance for a time, while the patient accepts the likely ankylosis. Scraping the socket is not part of IADT care."],
  ["A 4-year-old avulsed tooth 5.1 thirty minutes ago, and it is now in milk. The most appropriate management is to:","Not replant, and review the developing successor",["Replant and splint for 2 weeks","Replant and splint for 4 weeks","Replant and start pulpectomy within 2 weeks"],"IADT 2020 says avulsed primary teeth are not replanted because of the risk to the developing permanent tooth. Storage in milk does not change this."],
  ["After replantation of an avulsed mature 1.1, the most appropriate timing for root canal treatment is:","Within 2 weeks",["Only after 6 months if symptoms develop","Immediately, before replantation, in all cases","After the splint has been in place for 3 months"],"Starting early prevents infected pulp from driving inflammatory resorption. Treating the canal before replantation is only considered when dry time is long, and even then it is optional."],
  ["An 8-year-old's avulsed 1.1, with a wide open apex, is replanted after storage in milk. Which pulp plan is most appropriate?","Monitor for revascularisation; treat if necrosis appears",["Start root canal treatment within 2 weeks of replantation","Extirpate the pulp before replantation","Perform pulpotomy at the splint removal visit"],"A wide apex allows new vessels to grow in, so the pulp is given a chance. Routine early extirpation is the rule for closed apices, not open ones."],
  ["A 25-year-old's 2.1 is displaced palatally and locked, with a high metallic percussion note. There is no alveolar fracture. The most appropriate management is to:","Free the apex, reposition and splint flexibly for 4 weeks",["Reposition and apply a flexible splint for 2 weeks","Leave the tooth in place to drift back on its own","Extract, then replant with a rigid wire splint for 6 months"],"IADT 2020 specifies 4 weeks of splinting for lateral luxation, because the bone around the socket was also displaced. Two weeks is the splint time for extrusion and avulsion."],
  ["A 28-year-old has tooth 1.1 intruded by about 8 mm. The apex is closed. The most appropriate management is to:","Reposition surgically, splint, and begin root canal treatment",["Allow spontaneous re-eruption and review every 4 weeks","Extract the tooth and plan an implant","Leave it and place a composite build-up to restore length"],"Mature teeth intruded more than 7 mm are repositioned surgically, and their pulps almost always become necrotic. Spontaneous re-eruption is expected only for immature teeth or minor mature intrusions."],
  ["A 9-year-old has tooth 2.1 intruded by 3 mm. The apex is wide open. The most appropriate initial management is to:","Allow spontaneous re-eruption and monitor",["Reposition surgically and splint at once","Start root canal treatment at once","Extract the tooth to protect the bone"],"Immature intruded teeth are allowed to re-erupt regardless of the amount, with orthodontic repositioning if they do not move. Early root canal treatment would remove a pulp that can survive."],
  ["A 12-year-old's 1.1 is tender to percussion and slightly mobile, with blood at the gingival sulcus, but it is not displaced. The most likely diagnosis is:","Subluxation",["Concussion","Extrusive luxation","Lateral luxation"],"Mobility and sulcular bleeding without displacement define subluxation. Concussion is tender without mobility, and the luxations involve displacement."],
  ["A replanted 1.1 shows, at 6 months, a metallic percussion note, infraposition and loss of the PDL space with no radiolucency. Which of the following best explains this?","Replacement resorption after PDL cell death",["Inflammatory resorption from infected pulp","Surface resorption that will soon repair","Internal resorption from a vital pulp"],"Ankylosis follows loss of the PDL, so bone fuses to the root, the tooth stops moving and fails to keep up with growth. Inflammatory resorption shows radiolucent bowl-shaped defects in root and bone."],
  ["A 30-year-old cyclist has an avulsed 1.1 that fell into garden soil. He cannot recall his last tetanus vaccination. In addition to dental management, the most appropriate step is to:","Refer for assessment of tetanus immunisation",["Prescribe oral metronidazole as tetanus prophylaxis","Take no action because oral wounds cannot cause tetanus","Delay replantation until tetanus status is confirmed"],"Soil contamination and an unknown history mean his tetanus status must be checked, and a booster or immunoglobulin may be needed. Replantation should not wait for this."]
 ]
};

/* ---------------------------------------------------------------- m21-n07 */
window.CONTENT["m21-n07"] = {
 understand: `
 <p><b>The mandible is a ring, so it often breaks twice.</b> It is a U-shaped bone hinged at two joints. A blow on one side can break it there and at a second point, often the opposite condyle or angle.</p>
 <p><b>Weak points.</b> The <b>condylar neck</b> is thin. The <b>angle</b> is weakened by an unerupted third molar. The <b>parasymphysis</b> and body are weakened by the long canine root and the mental foramen. A blow on the chin commonly fractures one or both condyles.</p>
 <p><b>Signs come from bone, nerve and muscle.</b></p>
 <ul>
 <li><b>A changed bite:</b> a step in the occlusion, or a new open bite.</li>
 <li><b>Numb lower lip:</b> the inferior alveolar nerve is stretched or torn where the fracture crosses the canal, behind the mental foramen.</li>
 <li><b>Sublingual haematoma:</b> bruising in the floor of mouth strongly suggests a body or symphysis fracture.</li>
 <li><b>A gingival tear</b> over a step makes it an open (compound) fracture, which needs antibiotics.</li>
 <li><b>Condyle:</b> preauricular pain and swelling. With one fractured, the lateral pterygoid pulls the condyle forward and medially, the ramus shortens, that side's molars meet first, and the chin deviates to the fractured side on opening. With both fractured, an <b>anterior open bite</b> and retruded chin follow.</li>
 </ul>
 <p><b>Muscles decide stability.</b> Masseter, temporalis and medial pterygoid pull the posterior fragment up and in. If the fracture line resists that pull, it is <b>favourable</b>; if it allows displacement, it is <b>unfavourable</b> and needs fixation. Bilateral parasymphyseal fractures let the genial muscles pull the anterior segment back, so the tongue falls back and threatens the airway.</p>
 <p><b>Midface: Le Fort described three levels.</b> All three cross the pterygoid plates.</p>
 <ul>
 <li><b>Le Fort I:</b> horizontal, above the apices. The palate and upper teeth move as one block: a floating palate.</li>
 <li><b>Le Fort II:</b> pyramidal, through nasal bones, orbital floor and infraorbital rim. The nose moves with the palate. Infraorbital numbness and bilateral periorbital bruising are common.</li>
 <li><b>Le Fort III:</b> craniofacial disjunction through the orbits and zygomatic arches. The whole face moves, it looks long and flat, and CSF can leak from the nose.</li>
 </ul>
 <p>The pterygoid muscles pull the separated maxilla down and back, giving early molar contact and an <b>anterior open bite</b>. To test it, hold the forehead steady and move the upper incisors; note what moves with them.</p>
 <p><b>Zygoma (zygomaticomaxillary complex):</b> flat cheek, step at the infraorbital rim, infraorbital numbness, a subconjunctival haemorrhage with no posterior limit, and trismus if the arch presses on the coronoid. <b>Orbital floor (blow-out):</b> diplopia on upward gaze from tissue entrapment, and enophthalmos.</p>
 <p><b>Dangers.</b> Clear nasal fluid that forms a halo on gauze suggests CSF: no nose blowing and no nasal packing. Rapid vision loss with a tense, protruding eye suggests retrobulbar haemorrhage, an emergency.</p>
 <p><b>The dentist's role.</b> Airway, with the cervical spine protected. Then bleeding and neurological state: loss of consciousness, vomiting, pupils. Then refer. CT is the standard for the midface; for the mandible, two views at right angles, such as panoramic plus PA, or CT. A tooth in the fracture line is kept unless it is loose, fractured, infected, or prevents reduction.</p>
 <p><b>Why the exam cares.</b> Stems describe a sign and ask which fracture, which muscle displaced it, or what comes first. The answer is usually anatomy, then airway.</p>`,
 connect: [
  {to:"m02-n01", why:"Le Fort lines, the mental foramen and the mandibular weak points come from the bony anatomy of the skull and jaws."},
  {to:"m02-n02", why:"Lateral pterygoid pull explains condylar displacement, deviation to the fractured side and anterior open bite."},
  {to:"m09-n04", why:"Panoramic and CBCT views, and when CT is needed instead, decide how fractures are imaged."},
  {to:"m13-n03", why:"Bilateral parasymphyseal fractures and midface injuries threaten the airway, the first step in any facial trauma."},
  {to:"m21-n06", why:"Alveolar fractures and luxated teeth often accompany jaw fractures, and teeth in the fracture line change the plan."}
 ],
 apply: {
  vignette: "A 30-year-old was struck in the face. Holding the forehead steady and moving the upper incisors moves the palate and the nose together, but not the zygomatic arches. There is bilateral periorbital bruising, numbness of both cheeks, and an anterior open bite. The most likely diagnosis is:",
  options: ["Le Fort I fracture","Le Fort II fracture","Le Fort III fracture","Bilateral zygomatic arch fractures"],
  answer: "Le Fort II fracture",
  steps: [
   "The ask: the fracture pattern from the mobility test and signs.",
   "Facts that matter: the nose moves with the palate, the arches stay, and there is infraorbital numbness with periorbital bruising.",
   "Cross out Le Fort I: the fracture is below the nose, so only the palate and teeth move.",
   "Cross out Le Fort III: the zygomatic arches would move with the whole face.",
   "Cross out zygomatic arch fractures alone: the palate would not move, and the bite would not open anteriorly.",
   "The survivor explains everything: the pyramidal Le Fort II line runs through the nasal bones and infraorbital rims, so the nose moves and the infraorbital nerves are bruised."
  ]
 },
 teach: {
  prompt: "Predict the bite, the chin and the lip sensation in a patient with a left condylar neck fracture and a right parasymphyseal fracture, explaining each finding from muscles and nerves.",
  model: "The left lateral pterygoid pulls the condylar head forward and medially, so the left ramus shortens, the left molars meet first and the bite opens on the right. On opening, the chin swings to the left because the left condyle cannot translate. The right parasymphyseal fracture shows a step in the occlusion near the right canine, and if it crosses the canal behind the mental foramen the right lower lip is numb. A blow to the right chin breaking the opposite condyle is the classic two-fracture pattern of a ring."
 },
 cards: [
  ["Why mandible fractures often come in pairs","It is a ring hinged at two joints"],
  ["Chin blow: second fracture to look for","One or both condyles"],
  ["Sublingual haematoma suggests","Mandibular body or symphysis fracture"],
  ["Unilateral condylar fracture: deviation on opening","Toward the fractured side"],
  ["Bilateral condylar fractures","Anterior open bite and retruded chin"],
  ["Favourable fracture","Line resists muscle pull, so the fragments do not displace"],
  ["Le Fort I sign","Floating palate; teeth and palate move as one"],
  ["Le Fort II sign","Nose moves with palate; infraorbital numbness"],
  ["Le Fort III sign","Whole face moves; long flat face; CSF leak possible"],
  ["Orbital floor blow-out","Diplopia on upward gaze, enophthalmos, infraorbital numbness"],
  ["CSF rhinorrhoea precautions","No nose blowing, no nasal packing"],
  ["First priority in facial trauma","Airway with cervical spine protection"]
 ],
 questions: [
  ["A 22-year-old was struck on the left side of the chin. There is a step between 3.3 and 3.4. The second fracture most likely to be present is at the:","Right condyle",["Left coronoid process","Right coronoid process","Left zygomatic arch"],"The mandible is a ring, so force at the left parasymphysis is transmitted to the opposite condyle. Coronoid fractures are uncommon and rarely accompany this pattern."],
  ["A 25-year-old has a fracture of the left mandibular body after an assault. The left lower lip and chin are numb. Which of the following best explains the numbness?","The fracture injures the inferior alveolar nerve in its canal",["Swelling compresses the lingual nerve at the floor of mouth","The facial nerve is injured where it crosses the mandibular body","The long buccal nerve is torn in the buccal mucosa"],"The inferior alveolar nerve runs in the canal and gives the mental nerve to the lip and chin. The lingual nerve supplies the tongue, and the facial nerve is motor."],
  ["A 19-year-old fell on her chin. She has pain in front of the right ear, her right molars meet first, and her chin deviates to the right on opening. The most likely diagnosis is:","Fracture of the right condylar neck",["Fracture of the left condylar neck","Anterior dislocation of the right TMJ","Fracture of the right zygomatic arch"],"A right condylar fracture shortens the right ramus, so the right molars contact first and the jaw deviates to that side. A dislocation holds the mouth open with the chin pushed away from the affected side."],
  ["A 30-year-old has bilateral preauricular pain after a fall on the chin, and only the molars meet, with an anterior open bite. The most likely diagnosis is:","Bilateral condylar fractures",["A Le Fort I fracture alone","Bilateral coronoid fractures","Fracture of the symphysis alone"],"Both rami shorten when both condyles are fractured, so the posterior teeth meet first and the front opens. A Le Fort I can also open the bite but does not cause preauricular pain after a chin blow."],
  ["A 28-year-old has bruising of the floor of the mouth after a punch. This finding most strongly suggests a fracture of the:","Mandibular body or symphysis",["Unilateral condylar neck","Depressed zygomatic arch","Isolated coronoid process tip"],"Bleeding from a fracture of the tooth-bearing mandible tracks into the floor of mouth. Condylar fractures show preauricular signs and do not usually bleed into the sublingual area."],
  ["A mandibular angle fracture runs in a direction that allows masseter and medial pterygoid to pull the posterior fragment upward. This fracture is described as:","Unfavourable, and is likely to need fixation",["Favourable, and is likely to heal without fixation","Greenstick, because the cortex is intact","Comminuted, because it has several fragments"],"Unfavourable means the line does not resist muscle pull, so fragments displace. A favourable line is held together by the same muscles."],
  ["A 40-year-old has bilateral parasymphyseal fractures, and the anterior mandible is mobile. The most important immediate concern is:","The tongue falling back and obstructing the airway",["Loss of taste on the anterior tongue","Permanent paralysis of the lower lip","Dislocation of both temporomandibular joints"],"The genioglossus and geniohyoid attach to the free anterior segment and pull it back with the tongue. Airway comes first; taste and lip motor function are not the main concern."],
  ["In a Le Fort I fracture, the clinical feature most expected is:","The palate and upper teeth moving as one block",["The nose moving with the palate","CSF leaking from the nose","The whole face moving with the zygomatic arches"],"Le Fort I runs above the apices, below the nose, so only the tooth-bearing maxilla moves. Nasal mobility suggests Le Fort II, and whole-face mobility suggests Le Fort III."],
  ["After a high-energy injury, a 35-year-old has a long, flat face, clear fluid from the nose, and the whole face moves when the upper incisors are moved. The most likely fracture is:","Le Fort III",["Le Fort I","Le Fort II","Isolated nasal fracture"],"Craniofacial disjunction separates the face from the cranium, so everything moves, and CSF can leak through a skull base fracture. Le Fort II leaves the zygomatic arches in place."],
  ["Which of the following best explains why maxillary fractures at Le Fort levels tend to produce an anterior open bite?","Pterygoid muscles pull the free maxilla down and back",["The masseter pulls the maxilla up and forward","The temporalis pulls the hard palate upward","The buccinator draws the alveolar segment into the mouth"],"All three Le Fort levels cross the pterygoid plates, so the medial and lateral pterygoids pull the posterior maxilla downward. Posterior teeth then meet first and the front opens."],
  ["A 32-year-old has a flattened left cheek, a step at the left infraorbital rim, numbness of the left upper lip, and a subconjunctival haemorrhage with no posterior limit. The most likely diagnosis is:","Zygomaticomaxillary complex fracture",["Le Fort I fracture","Fracture of the left condylar neck","Isolated nasal fracture"],"A depressed zygoma flattens the cheek, the rim step and infraorbital nerve injury place the fracture at the orbit, and the haemorrhage tracks forward from it. A Le Fort I lies below the orbit."],
  ["After a blow to the eye, a patient has double vision on looking up and a sunken eye. The most likely injury is:","Orbital floor (blow-out) fracture",["Le Fort I fracture","Mandibular condylar fracture","Zygomatic arch fracture alone"],"Tissue trapped in the floor fracture limits upward gaze, and enlarged orbital volume causes enophthalmos. An isolated arch fracture can limit opening but does not affect the eye."],
  ["A 24-year-old arrives after a road crash with a mobile maxilla, blood in the mouth and noisy breathing. The most appropriate first step is to:","Protect the cervical spine and assess and clear the airway",["Take a panoramic radiograph to classify the fracture","Place wires to stabilise the occlusion","Pack the nose to control any bleeding"],"Airway with cervical spine protection always comes first in trauma. Imaging follows, and nasal packing is avoided until a CSF leak has been ruled out."]
 ]
};

/* ---------------------------------------------------------------- m21-n08 */
window.CONTENT["m21-n08"] = {
 understand: `
 <p><b>Most facial pain that does not come from a tooth comes from muscle or joint.</b> Orofacial pain is sorted by tissue: musculoskeletal (TMD), neuropathic, neurovascular, or a disease outside the mouth that refers pain to it. Convergence of afferents onto shared trigeminal neurons means pain can be felt in a tooth that is healthy. Never treat a tooth that tests normal.</p>
 <p><b>DC/TMD (2014)</b> uses two axes. <b>Axis I</b> is the physical diagnosis. <b>Axis II</b> screens psychosocial factors: pain-related disability, depression, anxiety and oral behaviours such as clenching. Both affect prognosis.</p>
 <p><b>Axis I pain disorders</b> require pain modified by jaw movement or function, and <b>familiar pain</b> on examination: the patient recognises it as their pain.</p>
 <ul>
 <li><b>Myalgia:</b> familiar pain on palpating temporalis or masseter, or on opening. Subtypes: local myalgia; myofascial pain, which spreads within the muscle; and <b>myofascial pain with referral</b>, felt beyond the muscle, for example in the teeth.</li>
 <li><b>Arthralgia:</b> familiar pain on palpating the condyle's lateral pole or on jaw movement.</li>
 <li><b>Headache attributed to TMD:</b> temple headache reproduced by jaw function or temporalis palpation.</li>
 </ul>
 <p><b>Joint disorders.</b> <b>Disc displacement with reduction</b> gives a click on opening and closing. Painless clicking needs reassurance only. <b>With intermittent locking</b>, the jaw catches and then frees. <b>Without reduction, with limited opening</b>, the jaw is locked and assisted opening, including vertical incisal overlap, is under 40 mm, with deflection to the affected side. <b>Degenerative joint disease</b> shows crepitus. <b>Subluxation</b> is the jaw stuck open past the eminence. MRI shows the disc; CBCT or CT shows bone.</p>
 <p><b>Treatment starts reversible.</b> Explain, encourage self-care (soft diet, heat, avoiding clenching and gum chewing), short NSAID courses, physiotherapy, a stabilisation splint, and cognitive-behavioural approaches. Occlusal adjustment and other irreversible treatment are not indicated. Most patients improve.</p>
 <p><b>Neuropathic pain.</b> <b>Trigeminal neuralgia</b>: unilateral, brief electric-shock pain lasting a fraction of a second to 2 minutes, usually in V2 or V3, triggered by light touch, washing or talking, with pain-free intervals. Usually caused by a vessel compressing the nerve root. First-line treatment is carbamazepine or oxcarbazepine. Order MRI, especially in younger patients or with neurological signs, to exclude multiple sclerosis or a tumour. <b>Burning mouth syndrome</b>: daily burning for over 2 hours a day for over 3 months, with normal mucosa, often in postmenopausal women. First exclude candidiasis, deficiencies (iron, B12, folate), diabetes, xerostomia and drug causes.</p>
 <p><b>Neurovascular.</b> <b>Cluster headache</b> can mimic upper molar pain: severe one-sided orbital pain lasting 15 to 180 minutes, with a tearing eye and blocked nose.</p>
 <p><b>Red flags: refer the same day.</b></p>
 <ul>
 <li><b>Giant cell arteritis:</b> over 50, new temporal headache, scalp tenderness, <b>jaw claudication</b> (pain on chewing that eases with rest), and visual symptoms. ESR and CRP are raised. Urgent corticosteroids prevent blindness.</li>
 <li><b>Referred cardiac pain:</b> jaw or tooth pain, often bilateral, on exertion and relieved by rest, sometimes with sweating or breathlessness. The teeth are sound. Arrange emergency medical care.</li>
 <li><b>Tumour:</b> progressive trismus, numb chin or lip, one-sided hearing loss, or weight loss.</li>
 </ul>
 <p><b>Why the exam cares.</b> Stems ask for the DC/TMD label, the conservative first step, or the red flag that makes a jaw ache an emergency.</p>`,
 connect: [
  {to:"m02-n02", why:"DC/TMD diagnoses name what happens to the disc, condyle and muscles of mastication described in TMJ anatomy."},
  {to:"m03-n03", why:"Convergence, referred pain and central sensitisation explain why a sound tooth can hurt."},
  {to:"m07-n06", why:"Deviation, deflection and limited translation are the movement signs used to separate disc disorders."},
  {to:"m13-n04", why:"Jaw pain on exertion can be angina or infarction, and the medical emergency node gives the response."},
  {to:"m11-n04", why:"NSAIDs are a short-term TMD treatment, and their risks shape how long they are used."}
 ],
 apply: {
  vignette: "A 29-year-old has aching in both cheeks and temples for 3 months, worse after chewing and on waking. Palpation of both masseters reproduces her familiar pain, which stays within the muscle. Maximum opening is 46 mm with no joint noise. The teeth test normal. The most appropriate diagnosis and initial management are:",
  options: ["Disc displacement without reduction; refer for arthrocentesis","Myalgia; education, self-care and a stabilisation splint","Trigeminal neuralgia; start carbamazepine","Myalgia; adjust the occlusion to remove interferences"],
  answer: "Myalgia; education, self-care and a stabilisation splint",
  steps: [
   "The ask: the DC/TMD diagnosis and the first management.",
   "Facts that matter: familiar pain on muscle palpation, pain modified by function, normal opening and no noise.",
   "Cross out disc displacement without reduction: opening is not limited and there is no history of locking.",
   "Cross out trigeminal neuralgia: the pain is a constant ache provoked by function, not brief shock-like attacks from light touch.",
   "Cross out occlusal adjustment: it is irreversible and not indicated in TMD.",
   "The survivor explains everything: myalgia, which stays within the muscle, is treated first with reversible measures."
  ]
 },
 teach: {
  prompt: "A patient asks why you will not drill their aching molar when it tests normal. Explain how orofacial pain can be felt in a healthy tooth, and how you would decide whether to treat it, refer it, or treat it as an emergency.",
  model: "Nerve signals from many structures in the face converge onto the same brainstem neurons, so pain from a muscle, the joint, a nerve or even the heart can be felt in a tooth. A tooth that tests normal is therefore not proved to be the source, and drilling it cannot help. I test whether the pain is reproduced by pressing the jaw muscles or joint, which suggests TMD and reversible care, and whether it is brief and electric, which suggests trigeminal neuralgia and a neurology referral. Jaw pain on exertion or jaw claudication in an older patient is an emergency."
 },
 cards: [
  ["DC/TMD Axis I vs Axis II","Axis I: physical diagnosis. Axis II: psychosocial status and behaviours"],
  ["Key DC/TMD examination concept","Familiar pain: the patient recognises it as their pain"],
  ["Myofascial pain with referral","Familiar pain felt beyond the boundary of the palpated muscle"],
  ["Disc displacement with reduction","Click on opening and closing; painless clicking needs reassurance only"],
  ["Disc displacement without reduction, limited opening","Assisted opening under 40 mm including vertical overlap; deflection to affected side"],
  ["First-line TMD treatment","Reversible: education, self-care, NSAIDs short-term, physiotherapy, splint"],
  ["Trigeminal neuralgia features and first drug","Brief unilateral shock-like pain, light-touch trigger; carbamazepine"],
  ["Burning mouth syndrome criteria","Daily burning over 2 hours a day for over 3 months, normal mucosa"],
  ["Cluster headache mimicking toothache","Severe orbital pain 15 to 180 minutes, tearing, blocked nose"],
  ["Giant cell arteritis red flags","Over 50, temporal headache, scalp tenderness, jaw claudication, visual change"],
  ["Referred cardiac jaw pain","Exertional, relieved by rest, teeth sound; emergency care"]
 ],
 questions: [
  ["Under DC/TMD 2014, Axis II assesses:","Psychosocial status and pain-related disability",["Imaging findings of the condyle","The position of the disc on MRI","Occlusal interferences in centric relation"],"Axis II screens disability, depression, anxiety and oral behaviours, which affect prognosis. Disc position and imaging belong to Axis I diagnosis."],
  ["A 34-year-old has pain on palpation of the right masseter that she recognises as her usual pain, and it spreads to her right lower molars. The DC/TMD diagnosis is:","Myofascial pain with referral",["Local myalgia","Arthralgia","Disc displacement with reduction"],"Familiar pain felt beyond the boundary of the palpated muscle is myofascial pain with referral. Local myalgia stays at the palpation site."],
  ["A 22-year-old has a painless click on opening and closing of the left TMJ for a year, with normal opening. The most appropriate management is to:","Reassure and explain, with no active treatment",["Fit a repositioning splint for full-time wear","Refer for arthroscopic disc repositioning","Adjust the occlusion to stop the click"],"Painless disc displacement with reduction is common and usually stable, so reassurance is enough. Irreversible procedures are not indicated."],
  ["A 27-year-old reports that a long-standing click in the right TMJ stopped two days ago. Opening is now 30 mm assisted, with deflection to the right. The most likely diagnosis is:","Disc displacement without reduction",["Disc displacement with reduction","Subluxation of the right TMJ on opening","Degenerative joint disease"],"Loss of the click with sudden limited opening and deflection to the affected side means the disc no longer reduces and blocks translation. Subluxation leaves the jaw stuck open rather than limited."],
  ["Which of the following best explains why the jaw deflects to the affected side in disc displacement without reduction?","The disc blocks translation on that side but not the other",["The lateral pterygoid on the affected side is paralysed","The affected condyle is fractured and shortened","The masseter on the unaffected side is in spasm"],"The condyle on the affected side can rotate but not translate past the disc. The healthy side keeps translating, so the chin swings toward the locked side."],
  ["A 60-year-old has crepitus in the left TMJ on opening, with flattening of the condyle on CBCT. The most likely DC/TMD diagnosis is:","Degenerative joint disease",["Disc displacement with reduction","Local myalgia","Subluxation"],"Crepitus with bony change in the condyle is degenerative joint disease. Disc displacement with reduction gives a click and normal bone."],
  ["The most appropriate initial management for a 30-year-old with painful myalgia of the masticatory muscles is:","Education, self-care and a stabilisation splint",["Selective occlusal grinding to balance contacts","Full-mouth orthodontic treatment to fix the bite","TMJ arthroscopy and lavage"],"TMD usually responds to reversible care, which is the first step. Occlusal adjustment is irreversible and not supported as treatment."],
  ["A 58-year-old has attacks of stabbing pain in the right lower lip and chin lasting seconds, triggered by shaving. Between attacks there is no pain. The teeth test normal. The most appropriate first-line medication is:","Carbamazepine",["Ibuprofen","Amoxicillin","Amitriptyline"],"Brief triggered shock-like pain with pain-free intervals is trigeminal neuralgia, which responds to carbamazepine. Amitriptyline is used for other chronic neuropathic pain."],
  ["A 32-year-old has typical trigeminal neuralgia in V2, with reduced corneal sensation. The most appropriate next step is:","Referral for MRI to exclude MS or a tumour",["Extraction of the upper premolars on that side","Root canal treatment of the upper canine","Reassurance and review in one year"],"Young age and a neurological sign suggest a secondary cause such as demyelination or a tumour. Dental treatment does not help trigeminal neuralgia."],
  ["A 62-year-old woman has a burning tongue every day for 6 months, worse later in the day. The mucosa looks normal. Before diagnosing burning mouth syndrome, it is most important to:","Exclude candidiasis, deficiencies, diabetes and drugs",["Biopsy the dorsum of the tongue to look for lichen planus","Adjust her occlusion and denture contacts","Replace her amalgam restorations with composite"],"Burning mouth syndrome is diagnosed only after secondary causes have been excluded. Biopsy of normal mucosa and amalgam removal are not indicated."],
  ["A 35-year-old man has nightly attacks of severe pain behind the right eye and upper molars, each lasting about an hour, with a tearing eye and blocked nose. The teeth test normal. The most likely diagnosis is:","Cluster headache",["Irreversible pulpitis of 1.6","Trigeminal neuralgia","Maxillary sinusitis"],"Attacks of 15 to 180 minutes with autonomic features on the same side are typical of cluster headache. Trigeminal neuralgia attacks last seconds and lack autonomic features."],
  ["A 74-year-old woman has a new temporal headache, scalp tenderness and jaw pain that develops while chewing and eases with rest. The most appropriate action is to:","Refer same day for giant cell arteritis assessment",["Fit a stabilisation splint for presumed masticatory myalgia","Prescribe ibuprofen and review in 2 weeks","Take a panoramic radiograph of the jaws"],"Jaw claudication with temporal headache in an older patient suggests giant cell arteritis, which can cause blindness. Treating it as TMD delays steroids."],
  ["A 66-year-old reports pain in both sides of the lower jaw when walking uphill, which settles with rest. The teeth and joints examine normally. Which of the following best explains the pain?","Referred pain from cardiac ischaemia",["Bilateral anterior disc displacement","Bilateral trigeminal neuralgia of V3","Bruxism-related masseter myalgia"],"Exertional pain relieved by rest suggests myocardial ischaemia, felt in the jaw because cardiac and trigeminal afferents converge. TMD pain is related to jaw function, not exertion."]
 ]
};

/* ---------------------------------------------------------------- m21-n09 */
window.CONTENT["m21-n09"] = {
 understand: `
 <p><b>A biopsy is only as good as the specimen.</b> m10-n12 covers when to sample. This node covers how. The pathologist needs representative tissue, with no crush or heat damage, oriented and fixed correctly, with a full clinical history.</p>
 <p><b>Steps for a soft-tissue biopsy.</b></p>
 <ol>
 <li><b>Anaesthesia:</b> use a block or inject well away from the lesion. Fluid in the specimen distorts it.</li>
 <li><b>Incision:</b> an <b>ellipse</b> about three times as long as it is wide, so that the wound closes without puckering. Run it parallel to nerves and vessels. Cut deep enough to include connective tissue.</li>
 <li><b>Margins:</b> for an excisional biopsy, include a margin of normal tissue around the lesion, usually 2 to 3 mm for a lesion that looks benign. For an incisional biopsy, take the most suspicious area and some adjacent normal tissue, and avoid necrotic centres.</li>
 <li><b>Handling:</b> place a suture through the specimen and use it to lift the tissue rather than crushing it with forceps. Avoid electrosurgery or lasers at the margins, as heat destroys detail. The suture can also mark orientation.</li>
 <li><b>Fixation:</b> immerse at once in 10% neutral-buffered formalin at no less than about 10 times the specimen volume; many texts advise 20 times. For direct immunofluorescence (pemphigus or pemphigoid), use perilesional tissue in Michel's medium or fresh, never formalin.</li>
 <li><b>Closure and paperwork:</b> suture the wound. The requisition gives age, site, duration, appearance, history, radiographs and a differential diagnosis.</li>
 </ol>
 <p><b>Hard-tissue and deep lesions.</b> Aspirate a radiolucency with a wide needle before opening it. Pulsatile blood suggests a vascular lesion: stop and refer. Straw-coloured fluid suggests a cyst, pus an infection, and air a simple bone cavity. A <b>mucocele</b> is removed with the minor glands that feed it, or it recurs. Major salivary gland masses are sampled by fine-needle aspiration, not open biopsy.</p>
 <p><b>Act on the report.</b> If a benign result does not match a suspicious lesion, call the pathologist and resample or refer. Track every specimen and tell the patient.</p>
 <p><b>Emergency triage: rank by threat, not by pain.</b></p>
 <div class="tscroll"><table><tr><th>Level</th><th>Examples</th><th>Action</th></tr>
 <tr><td>Life-threatening</td><td>Airway swelling, Ludwig's angina, anaphylaxis, uncontrolled bleeding, chest pain, facial trauma with altered consciousness</td><td>Call emergency services or send to hospital now</td></tr>
 <tr><td>Same-day dental</td><td>Avulsed or displaced permanent tooth, localised swelling, severe pulpal pain, dry socket, bleeding controlled by pressure</td><td>See today</td></tr>
 <tr><td>Soon</td><td>Mild pain, chipped tooth without pain, broken denture</td><td>Within days</td></tr>
 <tr><td>Routine</td><td>Lost restoration without pain, check-up</td><td>Schedule</td></tr></table></div>
 <p><b>On the phone,</b> ask about breathing and swallowing, swelling near the eye or under the jaw, fever, mouth opening, bleeding, trauma with loss of consciousness, and medical history. A patient who cannot swallow saliva, cannot open, or has a swollen floor of mouth goes to hospital, not to the next dental slot. Some medical red flags, such as giant cell arteritis, need a same-day physician, not emergency services. Document the call and the advice, confirm that a referral was received, and arrange follow-up.</p>
 <p><b>Why the exam cares.</b> Stems ask for the correct specimen handling or which patient to see first. The safe answer protects the tissue and the airway.</p>`,
 connect: [
  {to:"m10-n12", why:"That node decides whether, how urgently and by which type to sample; this one is the surgical procedure."},
  {to:"m10-n03", why:"Suspected pemphigus and pemphigoid need perilesional tissue for direct immunofluorescence, never in formalin."},
  {to:"m13-n03", why:"Anaphylaxis and airway obstruction are the highest-level emergencies a triage must catch first."},
  {to:"m21-n04", why:"Hupp's referral criteria for odontogenic infection are the core of dental emergency triage."},
  {to:"m14-n07", why:"Triage advice, referrals and biopsy results must be recorded and followed up as part of the record."}
 ],
 apply: {
  vignette: "A dentist has one emergency slot. Four patients call: a 52-year-old with diabetes with swelling under the jaw and floor of mouth who cannot swallow saliva; a 30-year-old with severe throbbing pain in 3.6; a 45-year-old who lost a crown from 2.1 without pain; and a 25-year-old with dry socket pain on day 3. The most appropriate action is to:",
  options: ["Give the slot to the 3.6 patient, as pain is the most severe","Give the slot to the dry socket patient, as the problem follows surgery","Give the slot to the crown patient, as it is the quickest to treat","Send the 52-year-old to hospital now and give the slot to another patient"],
  answer: "Send the 52-year-old to hospital now and give the slot to another patient",
  steps: [
   "The ask: triage priority across four calls.",
   "Facts that matter: inability to swallow saliva with floor of mouth swelling in a diabetic patient signals an airway threat.",
   "Cross out the 3.6 patient taking priority over the threat: severe pain is not a threat to life, though it is a same-day problem.",
   "Cross out the dry socket patient: it is painful and same-day, but not dangerous.",
   "Cross out the crown patient: a painless lost crown is routine or soon, not an emergency.",
   "The survivor explains everything: the airway threat needs hospital care at once, not a dental slot, and the remaining slot can go to the next most urgent patient."
  ]
 },
 teach: {
  prompt: "Explain to a new assistant why each step of a soft-tissue biopsy (injection site, ellipse, suture handling, formalin volume, requisition) exists, in terms of what the pathologist needs.",
  model: "The pathologist needs tissue that looks as it did in the mouth. Injecting away from the lesion avoids distorting it with fluid, and an ellipse with enough depth gives connective tissue for judging invasion and closes neatly. Lifting it by a suture rather than squeezing it prevents crush artefact, and avoiding heat at the margins prevents burn artefact. Formalin at no less than about 10 times the specimen volume (many texts advise 20 times) fixes it before it autolyses, except for immunofluorescence, which needs Michel's medium. The requisition gives the history and differential, which lets the pathologist interpret what they see."
 },
 cards: [
  ["Where to inject local anaesthetic for a biopsy","Block, or well away from the lesion"],
  ["Shape of an excisional biopsy incision","Ellipse, about three times as long as wide"],
  ["Incisional biopsy site","Most suspicious area plus adjacent normal tissue; avoid necrosis"],
  ["Why lift the specimen with a suture?","Avoids crush artefact and can mark orientation"],
  ["Routine fixative","10% neutral-buffered formalin, no less than about 10 times specimen volume; many texts 20 times"],
  ["Medium for direct immunofluorescence","Michel's medium or fresh; perilesional tissue; never formalin"],
  ["Aspiration yields pulsatile blood","Possible vascular lesion: stop and refer"],
  ["Why remove minor glands with a mucocele?","The feeding glands cause recurrence"],
  ["Triage ranks by","Threat to life and airway, not by pain severity"],
  ["Phone red flags for hospital","Cannot swallow saliva, cannot open, floor of mouth or periorbital swelling, breathing difficulty"]
 ],
 questions: [
  ["During excisional biopsy of a fibroma on the buccal mucosa, the local anaesthetic is most appropriately injected:","Around the lesion, not into it",["Directly into the centre of the lesion","Into the lesion and the margin equally","Only after the specimen is removed"],"Fluid injected into the lesion distorts the tissue architecture. A ring block or nerve block anaesthetises without affecting the specimen."],
  ["An excisional biopsy incision on the lower lip mucosa is designed as an ellipse mainly so that:","The wound closes in a straight line without puckering",["The specimen fits more easily into the container","The lesion can be divided in half for two laboratories","The incision avoids the minor salivary glands"],"An ellipse of roughly 3:1 length to width lets the edges come together neatly. The shape is not designed to avoid glands, and the specimen is not divided."],
  ["A clinician lifts a biopsy specimen by pinching its centre with toothed forceps. The most likely consequence is:","Crush artefact that can ruin the histology",["Contamination with surface bacteria","Faster fixation of the tissue in formalin","Selective loss of immunofluorescence staining"],"Squeezing distorts cells and can make a specimen uninterpretable. A suture through the tissue or forceps at its edge avoids this."],
  ["Which of the following best explains why electrosurgery is avoided at the margins of a biopsy?","Heat destroys cell detail at the margins being read",["It increases the risk of wound infection afterward","It prevents the use of sutures for closure","It makes the specimen too large to fix"],"Thermal artefact coagulates the tissue at the margin, which may be where dysplasia or invasion must be assessed. Infection and closure are not the main concern."],
  ["A routine incisional biopsy of a suspicious ulcer should be placed immediately in:","10% neutral-buffered formalin, about 10 times its volume",["Sterile saline until the pathologist arrives to collect it","Michel's transport medium for every specimen","A dry sealed container kept in the refrigerator"],"Formalin fixes tissue and halts autolysis, and enough volume is needed to penetrate it: no less than about 10 times the specimen, and many texts advise 20 times. Michel's medium is for immunofluorescence, and saline allows autolysis."],
  ["A 60-year-old has desquamative gingivitis and suspected mucous membrane pemphigoid. For direct immunofluorescence, the most appropriate specimen is:","Perilesional tissue placed in Michel's medium",["Tissue from the centre of an ulcer placed in formalin","A brush cytology sample in fixative","An excision of the whole lesion in saline"],"Direct immunofluorescence needs intact epithelium beside the lesion, and formalin destroys the antigens. Ulcer centres have lost the epithelium."],
  ["Before biopsy of a well-defined radiolucency in the body of the mandible, aspiration returns bright red blood that pulsates in the syringe. The most appropriate action is to:","Stop and refer for vascular assessment",["Proceed with an incisional biopsy at once","Curette the lesion to stop the bleeding","Pack the site and complete the biopsy tomorrow"],"Pulsatile blood suggests an arteriovenous malformation or other vascular lesion, which can bleed catastrophically if opened. Aspiration is done for exactly this reason."],
  ["Aspiration of a radiolucency at the 3.6 apex returns straw-coloured fluid. The most likely type of lesion is:","A cyst",["A vascular malformation","A simple bone cavity","An acute abscess"],"Straw-coloured fluid is typical of a cyst. A simple bone cavity often yields air or little fluid, and an abscess yields pus."],
  ["A mucocele on the lower lip is removed by cutting off the dome, and it recurs within weeks. Which of the following best explains the recurrence?","The feeding minor salivary glands were not removed",["The specimen was fixed in the wrong medium","The lesion was transformed into a malignancy","Local anaesthetic was injected directly into the lesion"],"A mucocele forms from extravasated mucus from damaged minor glands, so the glands must be removed with it. Fixation and injection affect diagnosis, not recurrence."],
  ["A 50-year-old has a firm, slowly growing mass in the right parotid gland. The most appropriate sampling method is:","Fine-needle aspiration",["Open incisional biopsy through the skin","Excisional biopsy in the dental office","Brush cytology of the overlying skin"],"An open biopsy of a major-gland mass risks seeding tumour and injuring the facial nerve. Fine-needle aspiration samples it safely, and definitive surgery is planned from the result."],
  ["A 46-year-old phones with toothache from 2.6 and a swelling that is now closing his left eye, with fever. Which of the following is the most appropriate triage decision?","Same-day hospital assessment",["Appointment in the next week","Advice to take analgesics and call back","Antibiotic prescription by phone and routine review"],"Periorbital swelling with fever suggests spread toward the orbit and cavernous sinus, a serious threat. A prescription by phone without examination delays drainage."],
  ["A 9-year-old's avulsed 1.1 is in milk, and the parent calls the office. Which of the following is the most appropriate triage response?","Come in immediately so the tooth can be replanted",["Book the first appointment tomorrow morning","Leave the tooth in milk overnight and call back","Go to hospital, as dentists cannot manage avulsion"],"Outcome depends on time and storage, so this is a same-day, immediate visit to the dental office. Hospital is not needed unless there are other injuries."],
  ["A biopsy of an indurated ulcer on the lateral tongue is reported as non-specific inflammation, but the lesion still looks suspicious. The most appropriate action is to:","Discuss with the pathologist and resample or refer",["Reassure the patient and discharge from review","Repeat brush cytology and review in 6 months","Treat with a topical steroid and review again in a year"],"A benign report that does not match a suspicious lesion may reflect a non-representative sample. Reassurance or cytology delays the diagnosis of a possible carcinoma."]
 ]
};
