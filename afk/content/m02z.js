/* Module m02 gap-closing file: new node m02-n11 and extensions to m02-n01, m02-n02, m02-n04, m02-n09, m02-n10. */
window.CONTENT = window.CONTENT || {};

window.CONTENT["m02-n11"] = {
 understand: `<p>A lesion is located by asking which functions fail together. Three ideas carry most questions: where pathways cross the midline, what each cranial nerve does, and which artery feeds which territory.</p>
<p><b>Cortex.</b> The <b>precentral gyrus</b> (frontal lobe) is primary motor cortex; the <b>postcentral gyrus</b> (parietal lobe) is primary sensory cortex. Each is mapped as a <b>homunculus</b> in which lips, tongue, face and hand get far more cortex than the trunk, so the mouth is controlled and felt very finely. The face lies low on the lateral surface; the leg lies on the medial surface. Broca's area (left frontal) produces speech, Wernicke's area (left temporal) understands it.</p>
<p><b>Deep structures.</b> The <b>thalamus</b> relays every sense except smell to the cortex. Motor fibres to the brainstem (<b>corticobulbar</b>) and cord (<b>corticospinal</b>) pack through the <b>internal capsule</b>, so a small stroke there weakens the whole opposite side, lower face included. The <b>basal ganglia</b> tune movement: loss of dopamine neurons in the substantia nigra is <b>Parkinson's disease</b> (resting tremor, rigidity, slowness, drooling, hard-to-manage oral hygiene). The <b>cerebellum</b> coordinates its own side: a lesion gives ataxia, intention tremor and slurred speech.</p>
<p><b>Brainstem and cord.</b> As a rule of thumb the midbrain holds the nuclei of III and IV, the pons V to VIII and the medulla IX to XII with the breathing and cardiovascular centres (the trigeminal nuclei actually stretch from midbrain to upper cord, and the accessory nucleus lies in the upper cervical cord). The trigeminal has four nuclei: <b>mesencephalic</b> (jaw-muscle and periodontal proprioception), <b>principal sensory</b> (touch), <b>spinal</b> (pain, temperature) and <b>motor</b>. Corticospinal fibres cross in the lower medulla (pyramidal decussation); fine touch and proprioception (dorsal columns) cross in the medulla after relaying in the gracile and cuneate nuclei; pain and temperature fibres (spinothalamic) cross in the cord within a segment or two of entry. An <b>upper motor neuron</b> lesion gives spastic weakness with brisk reflexes; a <b>lower motor neuron</b> lesion gives flaccid weakness with wasting.</p>
<p><b>Coverings.</b> The middle meningeal artery runs between the skull and the dura; a blow at the temple tears it, giving an <b>extradural haematoma</b> with a lucid interval. CSF is made by the <b>choroid plexus</b> and drains into the dural venous sinuses. Clear nasal fluid after a midface fracture is <b>CSF rhinorrhoea</b>, usually through a fracture of the anterior cranial base such as the cribriform plate: a meningitis risk.</p>
<p><b>Blood supply.</b> Carotid and vertebrobasilar systems join in the <b>circle of Willis</b>. The <b>middle cerebral artery</b> feeds the lateral cortex where face and arm are mapped, so its stroke gives opposite face and arm weakness, with aphasia when the left (usually dominant) hemisphere is affected. FAST (face, arm, speech, time) screens for stroke.</p>
<div class="tscroll"><table><tr><th>Nerve</th><th>Quick test</th></tr>
<tr><td>I olfactory</td><td>Name a smell, each nostril</td></tr>
<tr><td>II optic</td><td>Acuity, fields, pupil light reflex</td></tr>
<tr><td>III, IV, VI</td><td>Follow a finger; III lesion: ptosis, dilated pupil, eye down and out; VI: cannot look outward</td></tr>
<tr><td>V trigeminal</td><td>Touch in V1-V3, corneal reflex, clench</td></tr>
<tr><td>VII facial</td><td>Raise brows, close eyes, smile</td></tr>
<tr><td>VIII vestibulocochlear</td><td>Whisper or finger rub</td></tr>
<tr><td>IX, X</td><td>Say 'ah', gag</td></tr>
<tr><td>XI accessory</td><td>Shrug, turn head against resistance</td></tr>
<tr><td>XII hypoglossal</td><td>Protrude tongue</td></tr></table></div>
<p><b>Why the exam cares.</b> Stems give a deficit (eye that will not abduct, weak shoulder after neck surgery, lost smell, ataxia, drooping face) and ask for the nerve, the site or the next step.</p>`,
 connect: [
  {to:"m02-n04", why:"The facial, glossopharyngeal, vagus and hypoglossal nerves are tested in detail there; this node adds the other eight nerves and the upper versus lower motor neuron logic."},
  {to:"m02-n05", why:"Infection reaching the cavernous sinus through valveless facial veins threatens the abducens and other orbital nerves described here."},
  {to:"m03-n03", why:"The trigeminal sensory nuclei and thalamic relay are the central half of the dental pain pathway."},
  {to:"m21-n07", why:"Midface and cranial base fractures produce CSF rhinorrhoea, anosmia and eye-movement deficits that this node explains."},
  {to:"m13-n02", why:"Stroke and seizures in the chair are recognised by the cortical maps and arterial territories taught here."}
 ],
 apply: {
  vignette: "A 40-year-old with an untreated abscess on 1.3 has had swelling around the right eye for two days. Today the temperature is 39 °C, the eyelids are swollen shut, and on examination the right eye cannot turn outward, giving double vision on looking right. Which of the following best explains the eye sign?",
  options: ["Cavernous sinus thrombosis affecting the abducens nerve","Orbital floor fracture trapping the inferior rectus muscle","Bell's palsy affecting the facial nerve","Spread of anaesthetic to the infraorbital nerve"],
  answer: "Cavernous sinus thrombosis affecting the abducens nerve",
  steps: [
   "The ask: the cause of a failure of abduction after a spreading upper canine infection.",
   "Facts that matter: canine-region infection, periorbital swelling, high fever, and an eye that cannot look laterally (lateral rectus, CN VI).",
   "Cross out orbital floor fracture: there is no trauma, and entrapment limits upward gaze, not abduction.",
   "Cross out Bell's palsy: the facial nerve closes the eye and moves the face; it does not move the eyeball.",
   "Cross out anaesthetic spread to the infraorbital nerve: that numbs the cheek and lip and causes no squint, and no injection is described.",
   "The survivor explains everything: facial and ophthalmic veins are valveless, so infection from the canine region can reach the cavernous sinus. The abducens nerve runs free through the sinus beside the internal carotid artery, so it is often the first nerve to fail. This is a medical emergency needing hospital care."
  ]
 },
 teach: {
  prompt: "A patient's face droops on one side. Using the brain's wiring, explain how you would tell a stroke from a lesion of the facial nerve, and why the cause matters to what you do next.",
  model: "Corticobulbar fibres to the part of the facial nucleus that serves the forehead come from both hemispheres, while the lower face receives fibres only from the opposite cortex. A stroke (upper motor neuron lesion) therefore weakens the opposite lower face and spares the forehead, often with arm weakness or speech change from the same middle cerebral artery territory. A facial nerve lesion (lower motor neuron) paralyses the whole half of the face, forehead included, with no limb signs. Forehead sparing with arm or speech signs means a possible stroke: call emergency services, because treatment is time-critical."
 },
 cards: [
  ["Primary motor and sensory cortex","Precentral gyrus (frontal) and postcentral gyrus (parietal)"],
  ["Body parts with the largest homunculus areas","Lips, tongue, face and hand"],
  ["Sense not relayed through the thalamus","Smell"],
  ["Small internal capsule stroke","Dense weakness of the whole opposite side, including the lower face"],
  ["Parkinson's disease lesion","Loss of dopaminergic neurons in the substantia nigra"],
  ["Cerebellar lesion signs","Same-side ataxia, intention tremor, slurred speech"],
  ["Four trigeminal nuclei","Mesencephalic (proprioception), principal sensory (touch), spinal (pain, temperature), motor"],
  ["Upper vs lower motor neuron signs","UMN: spastic, brisk reflexes, little wasting. LMN: flaccid, wasting, fasciculation"],
  ["Extradural haematoma vessel and sign","Middle meningeal artery; lucid interval then deterioration"],
  ["Where CSF is made and drained","Choroid plexus; arachnoid granulations into dural venous sinuses"],
  ["Nerve testing: shrug and head turn","Accessory nerve (XI): trapezius and sternocleidomastoid"],
  ["Cranial nerve most often first affected in cavernous sinus thrombosis","Abducens (VI): eye cannot abduct"]
 ],
 questions: [
  ["The primary motor cortex is located in the:","Precentral gyrus of the frontal lobe",["Postcentral gyrus of the parietal lobe","Superior temporal gyrus of the temporal lobe","Calcarine cortex of the occipital lobe"],"The precentral gyrus sends corticospinal and corticobulbar fibres. The postcentral gyrus is the primary somatosensory cortex."],
  ["On the sensory homunculus, a disproportionately large area of cortex represents the:","Lips and tongue",["Back and abdominal wall","Thigh","Upper arm"],"Cortical area follows receptor density and the precision of use, so the lips, tongue and hand dominate. The trunk has few receptors per area and a small representation."],
  ["Which sensory modality reaches the cortex without relaying in the thalamus?","Smell",["Taste","Hearing","Facial touch"],"Olfactory fibres project to the olfactory cortex directly. Taste and facial touch relay in the ventral posteromedial nucleus, hearing in the medial geniculate."],
  ["A 70-year-old suddenly develops weakness of the right arm and leg and drooping of the right lower face, but can still wrinkle the right forehead. The lesion is most likely in the:","Left internal capsule",["Right facial nerve","Right internal capsule","Left hypoglossal nerve"],"Corticospinal and corticobulbar fibres cross below the capsule, so a left capsule lesion weakens the right side. Forehead sparing marks an upper motor neuron lesion rather than a facial nerve palsy."],
  ["A 68-year-old with a resting tremor, rigidity and slow movements finds it hard to brush his teeth. The condition results from loss of dopaminergic neurons in the:","Substantia nigra",["Cerebellar cortex","Motor nucleus of the trigeminal","Anterior horn of the spinal cord"],"Parkinson's disease is degeneration of the nigrostriatal pathway of the basal ganglia. Cerebellar disease gives ataxia and intention tremor rather than a resting tremor."],
  ["A patient has an unsteady wide-based gait, a tremor of the left hand that worsens as it approaches a target, and slurred speech. The lesion is most likely in the:","Left cerebellar hemisphere",["Right cerebellar hemisphere","Left precentral gyrus","Right substantia nigra"],"The cerebellum controls coordination on its own side, so a left lesion gives left-sided ataxia and intention tremor. Motor cortex lesions cause weakness, not incoordination."],
  ["Proprioceptive impulses from the muscle spindles of the masseter travel in neurons whose cell bodies lie in the:","Mesencephalic nucleus of the trigeminal",["Trigeminal ganglion","Spinal nucleus of the trigeminal, caudal part","Facial motor nucleus"],"These are the only primary sensory neurons with cell bodies inside the CNS, and they form the afferent limb of the jaw-jerk reflex. Most other trigeminal sensory cell bodies are in the trigeminal ganglion."],
  ["Which finding indicates a lower motor neuron lesion rather than an upper motor neuron lesion?","Muscle wasting with fasciculation",["Spasticity","Brisk tendon reflexes","An upgoing plantar response"],"Destroying the motor neuron or its axon denervates the muscle, which wastes and twitches. Spasticity, hyperreflexia and an extensor plantar response are upper motor neuron signs."],
  ["A 19-year-old struck on the side of the head by a baseball is lucid for an hour, then becomes drowsy with a dilating pupil on the injured side. The vessel most likely damaged is the:","Middle meningeal artery",["Bridging cerebral veins","Middle cerebral artery","Superficial temporal artery"],"The thin bone at the pterion overlies the middle meningeal artery, and arterial bleeding between skull and dura produces an extradural haematoma with a lucid interval. Torn bridging veins cause a slower subdural haematoma."],
  ["After a Le Fort III fracture a patient has a clear, watery discharge from the nose that increases when he leans forward. The most important concern is:","Meningitis from a cerebrospinal fluid leak",["Rhinitis from nasal mucosal oedema","Maxillary sinusitis from a retained blood clot","Epistaxis from the sphenopalatine artery"],"Clear fluid after a fracture through the anterior cranial base is CSF rhinorrhoea; the open path lets bacteria reach the meninges. Nose blowing is avoided and neurosurgical review arranged."],
  ["Cerebrospinal fluid is produced mainly by the:","Choroid plexus of the ventricles",["Arachnoid granulations of the sagittal sinus","Dural venous sinuses","Pia mater over the cortex"],"Choroid plexus epithelium secretes CSF, which circulates through the ventricles and subarachnoid space. Arachnoid granulations return it to the venous sinuses."],
  ["A 55-year-old cannot shrug the left shoulder after a lymph node biopsy in the posterior triangle of the neck. The nerve injured is the:","Accessory nerve",["Phrenic nerve","Hypoglossal nerve","Great auricular nerve"],"The accessory nerve crosses the posterior triangle superficially on its way to trapezius and is easily cut. The phrenic nerve supplies the diaphragm."],
  ["A patient has a drooping left eyelid, a dilated left pupil, and a left eye that rests looking down and out. The nerve involved is the:","Oculomotor nerve",["Trochlear nerve","Abducens nerve","Facial nerve"],"The oculomotor supplies levator palpebrae, most extraocular muscles and the pupillary constrictor, so the unopposed lateral rectus and superior oblique pull the eye down and out. The facial nerve closes the eye rather than opening it."],
  ["After a fall onto the face a 30-year-old reports that food has lost its flavour and he cannot smell coffee. The structure most likely injured is the:","Cribriform plate of the ethmoid",["Chorda tympani","Optic canal","Foramen rotundum"],"Olfactory nerve fibres pass through the cribriform plate and are sheared when it fractures; flavour depends largely on smell. The chorda tympani would affect taste from the anterior tongue only."],
  ["A sudden weakness of the left face and arm with slurred speech, starting 30 minutes ago, most likely involves the territory of the:","Right middle cerebral artery",["Left middle cerebral artery","Right anterior cerebral artery","Left posterior cerebral artery"],"The middle cerebral artery supplies the lateral cortex where face and arm are mapped, and motor pathways cross, so left-sided signs point to the right hemisphere. The anterior cerebral artery mainly affects the leg. Call emergency services: treatment is time-dependent."]
 ]
};

window.EXT = (window.EXT || []).concat([
 { node:"m02-n01",
   notes:`<p><b>Temporal bone.</b> Five parts: <b>squamous</b> (flat side wall, carrying the zygomatic process, the mandibular fossa and the articular eminence), <b>petrous</b> (dense pyramid holding the inner and middle ear), <b>tympanic</b> (around the external acoustic meatus), <b>mastoid</b> (air cells behind the ear) and the <b>styloid process</b>. The <b>pterygoid hamulus</b> is not temporal: it is the hook at the end of the medial pterygoid plate of the sphenoid.</p>
<p><b>Orbit.</b> Seven bones build it: frontal, zygomatic, maxilla, sphenoid, ethmoid, lacrimal and palatine. The two thinnest walls are the <b>floor</b> (maxilla, roof of the maxillary sinus, with the infraorbital groove) and the <b>medial wall</b> (ethmoid). A blow to the eye raises orbital pressure and the floor most often gives way: a <b>blow-out fracture</b>. Orbital fat and the inferior rectus can herniate into the sinus, so expect double vision on looking up, a sunken eye (enophthalmos) and numbness of the cheek and upper lip from the infraorbital nerve.</p>
<p><b>Pterygomaxillary fissure.</b> This vertical slit lies between the back of the maxilla (the tuberosity) and the lateral pterygoid plate of the <b>sphenoid</b>. It leads from the infratemporal fossa into the pterygopalatine fossa, carrying the third part of the maxillary artery inward. On a lateral cephalogram it is the inverted teardrop used as a landmark, and the Le Fort fractures all separate the maxilla from the pterygoid plates here.</p>`,
   cards:[
    ["Five parts of the temporal bone","Squamous, petrous, tympanic, mastoid, styloid"],
    ["Seven bones of the orbit","Frontal, zygomatic, maxilla, sphenoid, ethmoid, lacrimal, palatine"],
    ["Pterygomaxillary fissure lies between","Maxillary tuberosity and the lateral pterygoid plate of the sphenoid"]
   ],
   questions:[
    ["The pterygoid hamulus, around which the tendon of tensor veli palatini turns, is part of which bone?","Sphenoid",["Temporal","Palatine","Maxilla"],"The hamulus is the hooked tip of the medial pterygoid plate of the sphenoid. It lies just behind the maxillary tuberosity and palate, which is why it is wrongly attributed to the maxilla or palatine bone."],
    ["How many bones contribute to the walls of the orbit?","Seven",["Five","Six","Eight"],"Frontal, zygomatic, maxilla, sphenoid, ethmoid, lacrimal and palatine bones form the orbit. The palatine contributes only a small part of the floor."],
    ["A 22-year-old is hit in the right eye by a ball. Which finding most strongly suggests a fracture of the right orbital floor?","Diplopia on upward gaze with cheek numbness",["Bleeding from the right ear with facial weakness","Clear nasal discharge with loss of smell","Inability to open the mouth beyond 20 mm"],"The thin floor breaks, trapping the inferior rectus and stretching the infraorbital nerve in its groove. Ear bleeding with facial weakness suggests a temporal bone fracture."],
    ["The pterygomaxillary fissure is formed by the maxilla and the:","Sphenoid",["Temporal","Palatine","Zygomatic"],"The fissure separates the maxillary tuberosity from the lateral pterygoid plate of the sphenoid. The palatine bone lies medially in the pterygopalatine fossa but does not form the fissure."]
   ] },

 { node:"m02-n02",
   notes:`<p><b>Which closer is strongest.</b> The <b>masseter</b> is the most powerful jaw-closing muscle: it has the largest physiological cross-section, multipennate fibres and a long lever arm at the angle. Temporalis is mainly a positioner, its posterior fibres retruding the jaw.</p>
<p><b>Clenching on front teeth versus back teeth.</b> Elevator (masseter and temporalis) activity is <b>lower</b> during an incisal clench than during a clench in intercuspal position. Few anterior teeth are loaded, periodontal mechanoreceptors around the incisors inhibit the elevators, and the incisors sit farthest from the joint, so the system protects them. This is why anterior guidance that separates the back teeth in excursions reduces elevator activity, and why an anterior bite stop is used to relax the elevators.</p>
<p><b>TMJ ankylosis</b> is fibrous or bony fusion of the condyle to the fossa, with severely limited opening. The most frequent cause is <b>trauma</b>, especially an intracapsular condylar fracture in childhood with bleeding into the joint; next come infection (spread from otitis media or mastoiditis) and inflammatory arthritis. In a child the condyle is a growth site, so ankylosis also gives a small, retruded mandible, with the chin deviated to the affected side if one joint is involved. Treatment is surgical release followed by sustained jaw exercise.</p>
<p><b>Weak jaw closure.</b> <b>Myasthenia gravis</b> is autoantibody against acetylcholine receptors at the neuromuscular junction, so muscles tire with use. After chewing, the elevators fail and the patient may support the jaw with a hand; ptosis, double vision and difficult swallowing worsen through the day. Book short morning visits soon after the anticholinesterase dose, and remember that some antibiotics (aminoglycosides, fluoroquinolones) can worsen weakness.</p>`,
   cards:[
    ["Most powerful jaw-closing muscle","Masseter"],
    ["Elevator activity: incisal vs intercuspal clench","Lower on an incisal clench"],
    ["Most frequent cause of TMJ ankylosis","Trauma, especially childhood intracapsular condylar fracture"],
    ["Patient must push the mandible up to close after chewing","Myasthenia gravis: fatigable weakness from acetylcholine receptor antibodies"]
   ],
   questions:[
    ["Which of the following is the most powerful jaw-closing muscle?","Masseter",["Temporalis","Medial pterygoid","Lateral pterygoid"],"Masseter has the largest physiological cross-section and works at the angle with a long lever arm. The lateral pterygoid protrudes and helps open; it does not close the jaw."],
    ["Compared with clenching in intercuspal position, clenching on the incisors only produces elevator muscle activity that is:","Decreased",["Increased","Unchanged","Increased on the working side"],"Fewer teeth are loaded and anterior periodontal mechanoreceptors inhibit the elevators, so masseter and temporalis activity falls. This underlies anterior guidance and anterior bite-stop splints."],
    ["The most frequent cause of ankylosis of the temporomandibular joint is:","Trauma to the joint",["Rheumatoid arthritis","Anterior disc displacement","Bruxism"],"Intracapsular fractures with haemarthrosis, especially in children, organise into fibrous or bony union. Disc displacement limits opening but does not fuse the joint."],
    ["A 10-year-old who fractured the right condyle at age 4 now opens only 12 mm and has a small mandible with the chin deviated to the right. The most likely diagnosis is:","Right TMJ ankylosis",["Left condylar hyperplasia","Bilateral disc displacement without reduction","Masseteric hypertrophy"],"Ankylosis stops opening and also removes condylar growth on that side, so the mandible is short and the chin swings to the affected side. Disc displacement does not stunt growth."],
    ["A 45-year-old reports that after chewing for a few minutes she has to push her mandible up with her hand to close her mouth, and her eyelids droop by evening. The most likely cause is:","Myasthenia gravis",["Bell's palsy","Multiple sclerosis","Trigeminal neuralgia"],"Antibodies against acetylcholine receptors cause weakness that worsens with use and through the day, often first in eye and bulbar muscles. Bell's palsy affects facial expression, not the V3 elevators."]
   ] },

 { node:"m02-n04",
   notes:`<p><b>What a facial palsy spares.</b> The facial nerve moves the face, not the jaw or the eyelid's opener. In a facial palsy, including the temporary one after an inferior alveolar block reaches the parotid, these still work:</p>
<ul>
<li>the <b>muscles of mastication</b> (V3), so the patient can still clench;</li>
<li><b>levator palpebrae superioris</b> (oculomotor, III), so the eye can open but cannot close, because orbicularis oculi is paralysed;</li>
<li>tensor veli palatini and tensor tympani (V3).</li>
</ul>
<p><b>Buccinator</b>, though a cheek muscle that helps chewing, is facial-nerve supplied. When it is weak, food collects in the buccal vestibule and the cheek is bitten.</p>
<p><b>Perioral muscle map.</b> Orbicularis oris encircles the lips as a sphincter. Elevators of the upper lip and corner: levator labii superioris (from just above the infraorbital foramen), <b>levator anguli oris</b> (caninus, from the canine fossa below the foramen), zygomaticus major and minor. Lateral pull: risorius. Depressors: depressor anguli oris and depressor labii inferioris. Small slips arise from the maxilla just above the incisor roots: <b>incisivus labii superioris</b>, part of the orbicularis system, and depressor septi to the nasal septum. In the mandible, <b>mentalis</b> rises from the incisive fossa below the lower incisors and lifts the chin.</p>
<p>Two clinical consequences follow. When the canine root apex lies above the origin of levator anguli oris, a canine abscess drains into the canine space beside the nose; when it lies below, the swelling stays in the vestibule. A high mentalis attachment makes the lower labial vestibule shallow and can unseat a lower denture flange.</p>`,
   cards:[
    ["Facial palsy: muscles still working","Muscles of mastication (V3) and levator palpebrae superioris (III)"],
    ["Nerve to buccinator","Facial nerve (buccal branches); the long buccal nerve is sensory only"],
    ["Muscle whose origin decides canine-space spread","Levator anguli oris (caninus)"],
    ["Muscle from the incisive fossa of the mandible","Mentalis: raises the chin, can unseat a lower denture"]
   ],
   questions:[
    ["Minutes after a right inferior alveolar nerve block the right side of the face is paralysed. Which muscle on that side still contracts normally?","Levator palpebrae superioris",["Buccinator","Depressor labii inferioris","Levator labii superioris"],"Levator palpebrae is supplied by the oculomotor nerve, so the eye can still open though it cannot close. Buccinator, depressor labii inferioris and levator labii superioris are all facial-nerve muscles."],
    ["During a transient facial palsy after an inferior alveolar block, the patient can still:","Clench the teeth firmly",["Close the eye on that side","Purse the lips evenly","Wrinkle the forehead on that side"],"The elevators are supplied by V3 and are unaffected; closing the eye, pursing the lips and raising the brow need the facial nerve. Protect the eye until blinking returns."],
    ["A patient with a long-standing left facial palsy complains that food collects between the left cheek and the teeth. The weak muscle responsible is the:","Buccinator",["Masseter","Medial pterygoid","Temporalis"],"Buccinator presses the cheek against the teeth and returns food to the occlusal table; it is a facial-nerve muscle. The masseter and pterygoids are V3 muscles and keep working."],
    ["An abscess at the apex of 2.3 produces swelling beside the nose that obliterates the nasolabial fold, rather than a vestibular swelling. This is determined by the apex lying above the origin of the:","Levator anguli oris",["Buccinator","Orbicularis oris","Zygomaticus major"],"Pus perforating the bone above the attachment of levator anguli oris enters the canine space; below it, the swelling stays in the vestibule. Buccinator decides spread for the molars, not the canine."]
   ] },

 { node:"m02-n09",
   notes:`<p><b>Sucking</b> is a pressure job. The <b>buccinator</b> holds the cheeks against the gums and the <b>orbicularis oris</b> seals the lips around the nipple or straw, while the tongue moves back and down to create negative pressure. Both muscles are facial-nerve supplied, so a facial palsy makes drinking through a straw difficult.</p>
<p><b>How taste is transduced.</b> Taste cells sit in buds on fungiform, foliate and circumvallate papillae, the soft palate and the epiglottis.</p>
<ul>
<li><b>Sweet, umami and bitter</b> use G-protein-coupled receptors (T1R2 with T1R3 for sweet, T1R1 with T1R3 for umami, T2R receptors for bitter) linked to the G protein <b>gustducin</b>.</li>
<li><b>Salty</b>: sodium enters through epithelial sodium channels and depolarises the cell directly.</li>
<li><b>Sour</b>: acids act through <b>protons</b>. They enter sour-sensing cells through a proton channel (otopetrin-1) and, inside, block potassium channels; both effects depolarise the cell.</li>
</ul>
<p>Taste fibres in VII, IX and X all end in the <b>nucleus of the solitary tract</b> in the medulla, which relays through the thalamus (VPM) to the gustatory cortex of the insula.</p>
<p><b>Lingual tonsil.</b> Lymphoid tissue on the posterior third of the tongue, and at its lateral margins near the foliate papillae, can become hyperplastic after infection. A firm, red or nodular swelling on the posterolateral tongue, the commonest site of oral squamous cell carcinoma, can then mimic carcinoma. Symmetry, soft texture and a short history favour lymphoid tissue; a persistent, indurated or ulcerated lesion needs biopsy.</p>`,
   cards:[
    ["Two muscles of sucking","Buccinator and orbicularis oris"],
    ["Sour taste transduction","Protons enter through a proton channel and block potassium channels"],
    ["G protein of sweet, bitter and umami taste","Gustducin"],
    ["First central synapse for taste","Nucleus of the solitary tract (medulla)"],
    ["Lesion a hyperplastic lingual tonsil can mimic","Squamous cell carcinoma of the posterolateral tongue"]
   ],
   questions:[
    ["Which two muscles are chiefly involved in sucking?","Buccinator and orbicularis oris",["Risorius and zygomaticus major","Masseter and temporalis","Mentalis and depressor anguli oris"],"Orbicularis oris seals the lips and buccinator keeps the cheeks taut so the tongue's movement creates suction. Masseter and temporalis close the jaw."],
    ["The sensation of sour is mediated mainly by:","Hydrogen ions that enter cells and block K+ channels",["Gustducin-coupled receptors binding organic acids","Sodium entry through epithelial sodium channels","Activation of T1R2 and T1R3 sweet receptor dimers"],"Acids act through hydrogen ions that enter sour cells and inhibit potassium channels, depolarising them. Gustducin and T1R3 belong to sweet, umami and bitter pathways; sodium channels carry salty taste."],
    ["Bitter taste receptors signal through:","A G-protein-coupled receptor linked to gustducin",["An epithelial sodium channel admitting cations","A receptor tyrosine kinase activating MAP kinase","A proton-selective otopetrin channel in the membrane"],"T2R bitter receptors are G-protein-coupled and use gustducin. Proton channels serve sour taste."],
    ["Taste fibres from the facial, glossopharyngeal and vagus nerves make their first central synapse in the:","Nucleus of the solitary tract",["Spinal trigeminal nucleus","Nucleus ambiguus","Mesencephalic trigeminal nucleus"],"All taste afferents converge on the solitary nucleus in the medulla. The spinal trigeminal nucleus receives facial pain and temperature."],
    ["A 30-year-old non-smoker has bilateral soft, smooth nodules at the posterolateral borders of the tongue that appeared after a sore throat. The lesion they most resemble, and which must be excluded if they persist, is:","Squamous cell carcinoma",["Median rhomboid glossitis","Fissured tongue","Lingual varicosities"],"Hyperplastic lingual tonsil sits at the commonest site of oral carcinoma and can look like it; persistence, induration or ulceration calls for biopsy. Median rhomboid glossitis is midline on the dorsum."]
   ] },

 { node:"m02-n10",
   notes:`<p><b>The pterygomandibular space</b> is where the inferior alveolar block is placed. Its walls: the ramus laterally, the medial pterygoid medially, the lateral pterygoid above, the pterygomandibular raphe and buccinator in front, and the <b>parotid gland</b> wrapping round the posterior border of the ramus behind. It contains the inferior alveolar nerve, artery and vein, the lingual nerve in front of them, the nerve to mylohyoid and the sphenomandibular ligament.</p>
<p><b>Ligament and nerve.</b> The sphenomandibular ligament runs from the sphenoid spine to the lingula. The inferior alveolar nerve and vessels pass down <b>lateral</b> to it, between ligament and ramus, to enter the mandibular foramen. Solution must be deposited in that gap; a needle that passes medial to the ligament leaves a fibrous sheet between drug and nerve, one anatomical reason for a failed block. Too far back, the needle enters the parotid and anaesthetises the facial nerve.</p>
<p><b>Palatine tonsil.</b> The tonsil sits in the tonsillar fossa between the <b>palatoglossal arch</b> in front and the <b>palatopharyngeal arch</b> behind (the anterior and posterior faucial pillars), on a bed of superior constrictor. The glossopharyngeal nerve lies just deep to that bed.</p>
<p><b>Auditory tube.</b> The pharyngotympanic tube opens from the lateral wall of the nasopharynx and is closed at rest. During swallowing and yawning <b>tensor veli palatini</b>, which turns round the pterygoid hamulus, pulls it open (helped by levator veli palatini and salpingopharyngeus). This equalises middle-ear pressure, which is why swallowing clears the ears on a plane.</p>`,
   cards:[
    ["Relation of the inferior alveolar nerve to the sphenomandibular ligament","Lateral to it, between ligament and ramus"],
    ["Posterior boundary of the pterygomandibular space","Parotid gland around the posterior border of the ramus"],
    ["Palatine tonsil lies between","Palatoglossal (anterior) and palatopharyngeal (posterior) arches"],
    ["Auditory tube during swallowing","Opened, mainly by tensor veli palatini"]
   ],
   questions:[
    ["Within the pterygomandibular space, the inferior alveolar nerve descends:","Lateral to the sphenomandibular ligament",["Medial to the sphenomandibular ligament","Medial to the medial pterygoid muscle","Within the substance of the parotid gland"],"The nerve passes between the ligament and the ramus to reach the mandibular foramen, so solution must be placed lateral to the ligament. Solution medial to it is walled off."],
    ["The palatine tonsils lie:","Between the palatoglossal and palatopharyngeal arches",["On the dorsum of the posterior third of the tongue","On the posterior wall of the nasopharynx","Lateral to the pterygomandibular raphe"],"The tonsillar fossa is bounded by the two faucial pillars. Lymphoid tissue on the tongue base is the lingual tonsil, and the nasopharyngeal mass is the adenoid."],
    ["During swallowing, the pharyngotympanic (auditory) tube is:","Opened",["Closed","Unaffected","Opened in infants but closed in adults"],"Tensor veli palatini, acting round the hamulus, pulls the tube open as the palate rises, equalising middle-ear pressure. At rest the tube is closed."],
    ["During an inferior alveolar block the needle advances too far posteriorly without meeting bone. The structure it enters is the:","Parotid gland",["Submandibular gland","Medial pterygoid muscle","Superior pharyngeal constrictor"],"The parotid wraps the posterior border of the ramus, and the facial nerve runs within it, so solution there produces a transient facial palsy. Too medial, the needle enters medial pterygoid instead."]
   ] }
]);
