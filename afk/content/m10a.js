/* Module m10 (part a): Oral medicine & pathology, mucosal lesions, odontogenic cysts and tumours.
   Written for a learner starting from zero.
   References: Neville Oral & Maxillofacial Pathology; Burket's Oral Medicine; Regezi Oral Pathology;
   Cawson's Essentials of Oral Pathology and Oral Medicine; WHO Classification of Head and Neck Tumours, 5th ed. (2022). */
window.CONTENT = window.CONTENT || {};

window.CONTENT["m10-n01"] = {
 understand: `
 <p><b>White means either wet, thickened keratin or a layer sitting on top of the mucosa.</b> Keratin absorbs water and scatters light, hiding the red vessels below. So friction, tobacco and abnormal epithelial maturation all look alike. Do not memorise a list. Ask these questions in order, because each one cuts the list down.</p>
 <ol>
 <li><b>Does it wipe off?</b> Gauze removes <b>pseudomembranous candidiasis</b>, a surface mat of hyphae and dead cells, and leaves a raw red base. Look for a reason: inhaled steroid, antibiotics, dentures, dry mouth, diabetes, HIV. Diagnosis is usually clinical, a smear can confirm it, and treatment is an antifungal. Everything else below is part of the epithelium and stays.</li>
 <li><b>Does it fade when stretched?</b> <b>Leukoedema</b> is a grey-white, filmy veil on both buccal mucosae, caused by intracellular fluid. It disappears on stretching and needs nothing.</li>
 <li><b>Where, and on one side or both?</b> See the table.</li>
 <li><b>Since when?</b> Since childhood with an affected parent suggests <b>white sponge naevus</b>: autosomal dominant, keratin 4 or 13 mutation, thick spongy folds on both buccal mucosae, benign, no treatment.</li>
 <li><b>Is there a removable cause?</b> Remove it and re-examine at two weeks. Reversal confirms <b>frictional keratosis</b>. Persistence means biopsy.</li>
 </ol>
 <div class="tscroll"><table>
 <tr><th>Lesion</th><th>Site and pattern</th><th>Key clue</th></tr>
 <tr><td>Linea alba</td><td>Bilateral buccal, along the occlusal plane</td><td>Suction and cheek pressure; no treatment</td></tr>
 <tr><td>Frictional keratosis</td><td>Next to a sharp cusp, denture edge or chewing habit</td><td>Rough; resolves when the cause goes</td></tr>
 <tr><td>Lichen planus</td><td>Usually bilateral, posterior buccal; also tongue, gingiva</td><td>Lacy Wickham striae; middle-aged women</td></tr>
 <tr><td>Lichenoid reaction</td><td>Touching an amalgam, often unilateral; or after a new drug</td><td>Removing the trigger can clear it</td></tr>
 <tr><td>Hairy leukoplakia</td><td>Lateral tongue, often bilateral</td><td>Corrugated; EBV; signals immunosuppression</td></tr>
 <tr><td>Leukoplakia</td><td>Any site, plaque with no explanation</td><td>Biopsy; a diagnosis of exclusion</td></tr>
 </table></div>
 <p><b>Lichen planus</b> is T lymphocytes attacking basal keratinocytes, so histology shows a band of lymphocytes under the epithelium, basal cell damage and saw-tooth rete ridges. Reticular forms are usually painless; erosive forms hurt and take topical corticosteroid. It is listed as potentially malignant: pooled reviews put transformation at roughly 1%, lower when strict diagnostic criteria are used, so follow it up. Oral lichenoid lesions are on the same list. <b>Hairy leukoplakia</b> is benign, but an unexplained case calls for an HIV test.</p>
 <p><b>Leukoplakia</b> is a clinical label, not a histological one: a predominantly white plaque of questionable risk, once known causes are excluded. Histology ranges from plain hyperkeratosis to dysplasia or carcinoma. <b>Chronic hyperplastic candidiasis</b> is the trap: candida in a plaque that does not wipe off, often at the commissure of a smoker, and it needs biopsy too, because dysplasia can coexist.</p>
 <p><b>What forces a biopsy:</b> does not wipe off and has no cause; persists two weeks after the cause is removed; speckled or warty surface; induration or ulceration. Concern rises further when an unexplained plaque sits on the floor of mouth, ventrolateral tongue or soft palate complex, or the patient smokes or drinks heavily.</p>
 <p><b>Why the exam cares.</b> Stems give you the wipe test, the site, the age and the history. They then ask for the diagnosis or the next step. The commonest wrong answer is reassurance for an unexplained plaque.</p>`,
 connect: [
  {to:"m10-n02", why:"Leukoplakia is the commonest potentially malignant disorder; the same biopsy logic carries directly into erythroplakia and oral cancer."},
  {to:"m10-n09", why:"Candidiasis and EBV-driven hairy leukoplakia are white lesions with an infectious cause, so the wipe test leads straight into the infection node."},
  {to:"m06-n05", why:"Whiteness is a keratin story; knowing which mucosa is normally keratinised explains why a white patch on the floor of the mouth is abnormal."},
  {to:"m10-n12", why:"Deciding when a white lesion needs biopsy, and where to take it, is the practical endpoint of this reasoning map."},
  {to:"m11-n06", why:"Confirmed candidiasis is treated with nystatin or an azole, and azoles bring important drug interactions."}
 ],
 apply: {
  vignette: "A 56-year-old who smokes 20 cigarettes a day has a 2 cm white plaque on the left ventrolateral tongue, opposite an intact, smooth restoration on 3.5. It has been present for at least three months, does not wipe off, does not fade on stretching and is painless. Which of the following is the most appropriate next step?",
  options: ["Arrange an incisional biopsy of the lesion","Reassure the patient and re-examine at the six-month recall","Prescribe nystatin suspension and discharge if it improves","Replace the restoration on 3.5 and review after six months"],
  answer: "Arrange an incisional biopsy of the lesion",
  steps: [
   "The ask: the next step, so first decide whether this lesion already has an explanation.",
   "Facts that matter: it does not wipe off, it does not stretch away, there is no rough irritant, it sits on a high-risk site, and the patient is a heavy smoker.",
   "Cross out nystatin alone: candida that wipes off is excluded by the wipe test, and a plaque that merely improves on antifungal still needs tissue diagnosis.",
   "Cross out replacing the restoration: the restoration is smooth and not on the same surface pattern as a contact lichenoid lesion, and six months is an unsafe delay.",
   "Cross out reassurance: an unexplained plaque on the ventrolateral tongue in a smoker is clinical leukoplakia until histology says otherwise.",
   "The survivor explains everything: only histology can show whether this is hyperkeratosis, dysplasia or carcinoma, so biopsy the most suspicious area now."
  ]
 },
 teach: {
  prompt: "A colleague finds a white lesion and asks, 'What is it?' Without listing diseases first, walk through the questions you would ask, in order, and say which lesion each answer points to and what would force a biopsy.",
  model: "First I wipe it: if it comes off and leaves a red base it is surface debris such as pseudomembranous candidiasis. If it stays, I stretch it: leukoedema fades. Then I ask where and how symmetrical: a bilateral line on the occlusal plane is linea alba, lacy bilateral striae suggest lichen planus, a corrugated lateral tongue suggests hairy leukoplakia, and spongy lifelong bilateral folds with family history suggest white sponge naevus. If there is an irritant I remove it and review at two weeks, and resolution confirms frictional keratosis. Anything still unexplained is leukoplakia and needs biopsy, especially on a high-risk site, in a smoker, or if speckled, warty or indurated."
 },
 cards: [
  ["White lesion that wipes off and leaves a red base","Pseudomembranous candidiasis"],
  ["White film on both buccal mucosae that fades on stretching","Leukoedema; no treatment"],
  ["Bilateral white line on the occlusal plane","Linea alba; no treatment"],
  ["Two-week review for a white lesion with an irritant","Remove the irritant, re-examine at two weeks, biopsy if it persists"],
  ["Spongy bilateral white folds from childhood, family history","White sponge naevus: autosomal dominant, keratin 4 or 13"],
  ["Corrugated white lateral tongue that does not wipe off","Hairy leukoplakia: EBV; prompts assessment for immunosuppression"],
  ["Lichen planus histology","Band of T lymphocytes, basal cell damage, saw-tooth rete ridges"],
  ["Unilateral lacy lesion touching an amalgam","Lichenoid contact reaction"],
  ["What 'leukoplakia' means","Clinical term of exclusion: a white plaque of questionable risk with known causes excluded"],
  ["High-risk sites for a white plaque","Floor of mouth, ventrolateral tongue, soft palate complex"],
  ["Plaque at the commissure of a smoker with candida in it","Chronic hyperplastic candidiasis; needs biopsy"]
 ],
 questions: [
  ["A 30-year-old has a grey-white, filmy appearance on both buccal mucosae. It disappears when the cheek is stretched. The most likely diagnosis is:","Leukoedema",["Linea alba","White sponge naevus","Reticular lichen planus"],"Leukoedema is intracellular fluid in the spinous layer and it fades on stretching, which is the defining test. White sponge naevus is thick and spongy and does not fade."],
  ["A 67-year-old uses a corticosteroid inhaler for asthma. Creamy white patches on the soft palate rub off with gauze and leave a red, bleeding surface. The most likely diagnosis is:","Pseudomembranous candidiasis",["Leukoplakia","Hairy leukoplakia","Chronic hyperplastic candidiasis"],"A removable surface layer over a raw base, in a patient with local steroid exposure, is pseudomembranous candidiasis. The hyperplastic form is also candida but does not wipe off."],
  ["A 38-year-old living with HIV has painless, corrugated white plaques on both lateral borders of the tongue. They do not wipe off. The organism most associated with this lesion is:","Epstein-Barr virus",["Candida albicans","Human papillomavirus 16","Herpes simplex virus 1"],"Hairy leukoplakia is EBV replication in the upper epithelium, usually in an immunosuppressed patient. Candida may colonise the surface but does not cause the lesion, and it would wipe off in the pseudomembranous form."],
  ["A 14-year-old has thick, soft, folded white plaques on both buccal mucosae, present for as long as anyone can remember. The father has the same. The most likely diagnosis is:","White sponge naevus",["Oral lichen planus","Frictional keratosis","Leukoedema"],"Early onset, bilateral spongy folds and an autosomal dominant family pattern fit white sponge naevus, which is benign and needs no treatment. Lichen planus is a disease of middle age and does not run this way in families."],
  ["A 44-year-old has a rough white patch on the right buccal mucosa directly against a fractured, sharp cusp on 1.6. The patch does not wipe off. The most appropriate next step is to:","Smooth or restore the cusp and re-examine the area in two weeks",["Perform an excisional biopsy today","Prescribe a topical corticosteroid and review in six months","Reassure the patient that no follow-up is needed"],"A likely irritant should be removed first; resolution confirms frictional keratosis and persistence requires biopsy. Reassurance without review would miss a lesion that is not frictional."],
  ["The term 'oral leukoplakia' is best described as:","A white plaque of questionable risk after known causes are excluded",["A histological diagnosis of epithelial dysplasia in a white patch","A white lesion caused by Candida species invading keratin","A benign keratosis caused by chronic friction from teeth or dentures"],"Leukoplakia carries no histological meaning; biopsy may show anything from hyperkeratosis to carcinoma. A lesion with an established cause, such as friction, is by definition not leukoplakia."],
  ["A 52-year-old woman has asymptomatic, bilateral lacy white lines on the posterior buccal mucosae. A biopsy would most likely show:","Band-like lymphocytic infiltrate with basal cell damage",["Acantholysis with a suprabasal split and Tzanck cells","Parakeratin with hyphae and neutrophil microabscesses","Intracellular oedema of the spinous layer, as in leukoedema"],"Lichen planus is T cell attack on basal keratinocytes, giving a band of lymphocytes hugging the epithelium. Acantholysis belongs to pemphigus vulgaris."],
  ["A 49-year-old has a lacy white and red lesion on the left buccal mucosa only, in direct contact with a large amalgam on 2.6. The right cheek is normal. The most likely diagnosis is:","Lichenoid contact reaction",["White sponge naevus","Linea alba (frictional line)","Leukoedema"],"A unilateral lesion confined to the area touching an amalgam points to a contact reaction, and it may clear after the restoration is replaced. The other three are typically bilateral and none has a red, reactive component."],
  ["A 61-year-old started a thiazide diuretic four months ago. Bilateral lacy white lesions with mild soreness have since appeared on the buccal mucosae. The most appropriate step after biopsy confirms a lichenoid pattern is to:","Consult the physician about a possible change of medication",["Stop the thiazide and tell the patient not to resume it","Replace all posterior restorations","Treat with systemic antifungals"],"A lesion that began after a new drug suggests a lichenoid drug reaction; the dentist should raise this with the prescriber rather than stop an antihypertensive unilaterally. The bilateral pattern and timing make amalgam contact much less likely."],
  ["Which of the following best explains why pseudomembranous candidiasis wipes off and hairy leukoplakia does not?","One is a surface mat of fungus and debris, and the other is thickened epithelium itself",["One contains keratin, and the other contains no keratin at all","One is caused by a virus, and the other is caused by a bacterium","One occurs only on keratinised mucosa, and the other only on non-keratinised mucosa"],"The wipe test asks whether the white layer sits on the epithelium or is part of it. Pseudomembranous candidiasis is a removable surface mat; hairy leukoplakia is altered, keratin-thickened epithelium."],
  ["A 23-year-old has a raised white line along the occlusal plane on both cheeks. It is painless and does not wipe off. The most appropriate management is:","Reassurance with no treatment required",["Incisional biopsy of both sides","A two-week course of nystatin","Topical corticosteroid to both cheeks"],"Linea alba is a pressure and suction keratosis at the level where the teeth meet, with a characteristic site and symmetry. An unexplained plaque would need biopsy, but this one has a clear explanation."],
  ["A 58-year-old smoker has a white, partly speckled plaque at the left labial commissure. It does not wipe off, and a smear shows hyphae. The most appropriate plan includes:","Biopsy, because candida does not exclude dysplasia",["Antifungal treatment alone with no further assessment","Reassurance, because candida explains the whole lesion","Cauterising the plaque without histology"],"Chronic hyperplastic candidiasis can coexist with dysplasia, and a speckled surface raises the concern further. Antifungal treatment may help, but it does not replace tissue diagnosis."],
  ["A white patch is most concerning for dysplasia when it occurs on the:","Floor of the mouth",["Hard palate in a pipe smoker with red dots at gland openings","Buccal mucosa along the occlusal plane","Attached gingiva next to a toothbrush abrasion"],"The floor of mouth, with the ventrolateral tongue and soft palate complex, is a high-risk site where thin non-keratinised mucosa should not be white. The palatal picture described is nicotine stomatitis, which is usually reversible, and the other two have frictional explanations."]
 ]
};

window.CONTENT["m10-n02"] = {
 understand: `
 <p><b>Red means thin or inflamed.</b> With little keratin or a thin epithelium, blood in the vessels below shows through. So the first questions are the same as for white lesions: is there a benign reason, and does the redness go away?</p>
 <ol>
 <li><b>Does it blanch under pressure?</b> Blanching means the colour is blood inside vessels: a haemangioma or varix, or simple inflammation. Failure to blanch points to tissue change or blood outside vessels.</li>
 <li><b>Is it patterned or linked to a cause?</b> Red under an upper denture is <b>denture stomatitis</b> (erythematous candidiasis). A diamond-shaped patch in front of the circumvallate papillae is median rhomboid glossitis. Migrating red areas with white borders are <b>geographic tongue</b>. A smooth, sore tongue suggests low iron, B12 or folate.</li>
 <li><b>Is it none of these?</b> A red velvety patch that cannot be assigned to another condition is <b>erythroplakia</b>.</li>
 </ol>
 <p><b>Erythroplakia is rare but the most dangerous patch.</b> In the classic biopsy series, about 90% showed severe dysplasia, carcinoma in situ or invasive carcinoma at first biopsy. A mixed red and white lesion, <b>erythroleukoplakia</b> or speckled leukoplakia, carries more risk than a uniform white one. Biopsy the red areas.</p>
 <p><b>The full list of potentially malignant disorders</b> (WHO Collaborating Centre, 2020 workshop, published 2021) has eleven entries: leukoplakia; erythroplakia; <b>proliferative verrucous leukoplakia</b> (multifocal warty plaques, often in older women who never smoked, and very likely to transform); <b>oral submucous fibrosis</b> (areca nut, fibrous bands, trismus); oral lichen planus; <b>actinic keratosis</b> (actinic cheilitis of the lower lip, from sun); palatal lesions in reverse smokers; oral lupus erythematosus; dyskeratosis congenita; and the two 2020 additions, <b>oral lichenoid lesions</b> and <b>oral chronic graft-versus-host disease</b>. Chronic hyperplastic candidiasis was left off for lack of evidence, but it is still biopsied because dysplasia can coexist.</p>
 <p><b>How a cell becomes a carcinoma.</b> Carcinogens damage genes such as TP53. <b>Dysplasia</b> is disordered growth graded by depth: lower third mild, middle third moderate, beyond that severe, and full thickness carcinoma in situ. <b>Squamous cell carcinoma</b> begins when cells breach the basement membrane. Because tobacco exposes the whole mouth, new primary tumours can arise elsewhere (field cancerisation).</p>
 <p><b>Risk factors:</b> tobacco in any form and alcohol, which multiply each other; areca nut; sunlight for the lip. <b>HPV-16</b> drives oropharyngeal cancer at the tonsil and base of tongue, often in younger non-smokers, and p16-positive tumours have a better prognosis.</p>
 <p><b>Risk sites</b> are where carcinogens pool and mucosa is thin: ventrolateral tongue, floor of mouth, soft palate complex and retromolar area. In Western populations the tongue leads.</p>
 <p><b>Signs of cancer:</b> an ulcer with raised rolled edges; induration on palpation; fixation; red or white patch that bleeds; a socket that will not heal; loose teeth without periodontal disease; numb lower lip; trismus; referred ear pain. Pain often comes late. Spread is by lymphatics first, usually to submandibular and upper jugular nodes, which feel <b>hard</b>, are usually <b>painless</b> and may become <b>fixed</b>.</p>
 <p><b>Referral urgency.</b> Remove any irritant and review at two weeks only when a lesion looks reactive. If it looks malignant, refer urgently now, by phone as well as letter, and confirm the appointment was kept. Do not prescribe antibiotics and wait. Toluidine blue and light devices never replace biopsy.</p>
 <p><b>Why the exam cares.</b> Stage drives survival, and the dentist is often the first to see the lesion. Expect stems asking for the highest-risk patch, the likely site, the node character, or the next step.</p>`,
 connect: [
  {to:"m10-n01", why:"Leukoplakia and erythroplakia are both diagnoses of exclusion, and speckled lesions join the two nodes."},
  {to:"m05-n05", why:"Dysplasia, carcinoma in situ and invasion through the basement membrane apply general neoplasia concepts to the mouth."},
  {to:"m10-n12", why:"Referral triggers, adjunct tests and biopsy selection turn suspicion here into safe action."},
  {to:"m21-n09", why:"Choosing incisional biopsy versus urgent referral depends on how suspicious the lesion looks."},
  {to:"m13-n10", why:"Oral cancer treatment leads to radiotherapy complications such as xerostomia, caries and osteoradionecrosis."}
 ],
 apply: {
  vignette: "A 62-year-old who smokes and drinks daily has a 1.5 cm painless, velvety red patch on the right floor of the mouth, lingual to 4.6 and 4.7. It has been present for about five weeks. It does not wipe off, does not blanch and feels slightly firm. No irritant is present. Which of the following is the most appropriate next step?",
  options: ["Urgent referral for biopsy of the lesion","Nystatin suspension for two weeks, then review","Routine review at the six-month recall appointment","Toluidine blue staining, with biopsy only if the lesion stains"],
  answer: "Urgent referral for biopsy of the lesion",
  steps: [
   "The ask: the next step, so judge how suspicious this patch is.",
   "Facts that matter: red and velvety, no cause, a high-risk site, firmness, tobacco and alcohol, and more than two weeks already.",
   "Cross out nystatin: there is no denture and no sign of candida, and a trial of antifungal only delays diagnosis.",
   "Cross out routine review: erythroplakia commonly hides severe dysplasia or carcinoma, and six months could change the stage.",
   "Cross out toluidine blue as a gate: adjunct stains can be falsely negative and never replace biopsy.",
   "The survivor explains everything: a firm red patch with risk factors at a classic site is treated as cancer until histology rules it out, so it is referred urgently."
  ]
 },
 teach: {
  prompt: "Explain to a patient who smokes and drinks why a painless red patch under the tongue worries you more than a painful ulcer on the lip that came up yesterday, and why you are not simply going to watch it.",
  model: "A red patch means the lining has become thin and abnormal, and in this place, with tobacco and alcohol exposure, most red patches like this turn out to contain very abnormal or cancerous cells. Early mouth cancer is often painless, so the absence of pain does not reassure me. A new painful ulcer usually has a simple cause and heals quickly, whereas this has lasted for weeks without a cause. Tobacco and alcohol multiply each other's damage, and cancer found early is far easier to treat. So I am arranging a specialist biopsy urgently, and I will check that you were seen."
 },
 cards: [
  ["Why red lesions look red","Thin or non-keratinised epithelium, or inflammation, lets vessels show through"],
  ["Definition of erythroplakia","A red patch that cannot be characterised as any other definable disease"],
  ["Which oral patch carries the greatest risk at first biopsy?","Erythroplakia"],
  ["Multifocal warty plaques in an older non-smoking woman","Proliferative verrucous leukoplakia; high transformation risk"],
  ["Areca nut, fibrous bands, trismus","Oral submucous fibrosis"],
  ["Highest-risk intraoral sites","Ventrolateral tongue, floor of mouth, soft palate complex, retromolar area"],
  ["Tobacco plus alcohol","Multiplicative rather than simply additive risk"],
  ["Dysplasia versus invasive carcinoma","Invasion means the cells have breached the basement membrane"],
  ["HPV-16-related cancer: site and prognosis","Tonsil and base of tongue; better prognosis when p16 positive"],
  ["Nodes from oral cancer feel","Hard, usually painless, may be fixed"],
  ["Two disorders added to the potentially malignant list in 2020","Oral lichenoid lesions and oral chronic graft-versus-host disease"],
  ["Numb lip plus a non-healing socket","Malignancy until proven otherwise; urgent referral"]
 ],
 questions: [
  ["Which of the following oral lesions has the highest likelihood of showing dysplasia or carcinoma at first biopsy?","Erythroplakia",["Homogeneous leukoplakia","Reticular lichen planus","Frictional keratosis"],"Most erythroplakias show severe dysplasia or worse when first biopsied, despite being far rarer than leukoplakia. Homogeneous leukoplakia is more common but much less often dysplastic at presentation."],
  ["Erythroplakia looks red mainly because:","The epithelium is thin and poorly keratinised, so vessels show",["Blood has escaped from damaged vessels into the overlying epithelium","The lesion is a surface colony of Candida","Melanin in the basal layer has been replaced by haemosiderin"],"Reduced thickness and keratin let the vascular connective tissue show. Blood outside vessels would produce a bruise that does not behave as a persistent velvety patch."],
  ["In Western populations, intraoral squamous cell carcinoma most often arises on the:","Ventrolateral tongue",["Dorsum of the tongue","Hard palate","Attached gingiva of the maxilla"],"The ventrolateral tongue and floor of the mouth are the classic high-risk sites. The dorsum is thick and keratinised and is rarely affected."],
  ["A 67-year-old farmer has a crusted, slowly enlarging ulcer on the vermilion of the lower lip, on a background of blurred lip margins. The most important aetiological factor is:","Ultraviolet radiation",["Human papillomavirus 16","Areca nut chewing","Candida albicans infection"],"Actinic cheilitis and lip carcinoma follow chronic sun exposure, and the lower lip takes the most light. HPV-16 is mainly linked to the oropharynx rather than the lip."],
  ["Which of the following best explains the combined effect of tobacco and alcohol on oral cancer risk?","Ethanol aids carcinogen entry and forms acetaldehyde, so risk multiplies",["Alcohol neutralises tobacco carcinogens, so risk is only moderately raised","Tobacco blocks ethanol metabolism, so alcohol alone drives the risk","Both act mainly through dry mouth, so the effect is simply additive"],"Alcohol acts as a solvent and penetration enhancer, and its metabolite acetaldehyde is itself carcinogenic, producing a multiplicative effect. It is not simply additive."],
  ["A 46-year-old non-smoker has a painless firm neck mass and a lesion at the base of the tongue. The tumour stains strongly for p16. The most likely cause is:","Human papillomavirus 16",["Epstein-Barr virus infection","Chronic alcohol use","Candida albicans"],"p16 overexpression is the surrogate marker for high-risk HPV in oropharyngeal carcinoma, often in younger non-smokers. EBV is more associated with nasopharyngeal carcinoma."],
  ["Oral squamous cell carcinoma most often spreads first to the:","Ipsilateral submandibular and upper jugular lymph nodes",["Lungs through the bloodstream","Liver through the portal circulation","Mandibular condyle through the inferior alveolar canal"],"Lymphatic spread to levels I and II is the usual first step. Distant blood-borne spread tends to occur later, so a clinical neck examination is part of every oral screening."],
  ["A 59-year-old heavy smoker has a 2 cm level II neck node. On palpation, it is most suggestive of metastatic carcinoma if it is:","Hard, painless and fixed",["Soft, tender and freely mobile","Fluctuant, warm and tender","Small, rubbery and recently painful"],"Metastatic nodes are infiltrated by tumour, so they feel hard and may become fixed, and they are often painless. Tender mobile nodes usually indicate infection."],
  ["Four weeks after extraction of 4.7, a 58-year-old has an unhealed socket filled with friable tissue, and new numbness of the right lower lip. The most appropriate action is to:","Refer urgently for biopsy of the socket tissue",["Place an antiseptic dressing and review in two weeks","Curette the socket and prescribe amoxicillin","Reassure the patient that numbness will resolve"],"A non-healing socket with friable tissue plus paraesthesia suggests malignancy invading the inferior alveolar nerve. A dressing for dry socket does not explain numbness or a mass, and waiting risks a stage change."],
  ["The feature that separates invasive squamous cell carcinoma from carcinoma in situ is:","Breach of the basement membrane",["Abnormal mitotic figures in the epithelium","Full-thickness epithelial cellular atypia","Loss of normal epithelial stratification"],"Carcinoma in situ already has full-thickness atypia, abnormal mitoses and disordered layers, but it remains above the basement membrane. Invasion is what gives access to lymphatics."],
  ["A 68-year-old woman who has never smoked has slowly spreading warty white plaques on the gingivae in several sites. Earlier excisions have recurred. The most likely diagnosis is:","Proliferative verrucous leukoplakia",["Multifocal frictional keratosis","White sponge naevus","Oral hairy leukoplakia (EBV)"],"Multifocal, warty, progressive and recurrent lesions in an older woman with no tobacco history are typical of this very high-risk disorder. White sponge naevus starts in childhood and does not progress this way."],
  ["A 38-year-old long-term chewer of betel quid has progressive difficulty opening the mouth and palpable fibrous bands in the buccal mucosa. The most likely diagnosis is:","Oral submucous fibrosis",["Scleroderma of the temporomandibular joint","Mucous membrane pemphigoid","Temporomandibular disc displacement without reduction"],"Areca nut stimulates collagen build-up in the submucosa, producing bands and trismus, and it is potentially malignant. Disc displacement can limit opening, but it does not produce buccal fibrous bands."],
  ["A suspicious red patch on the floor of the mouth does not take up toluidine blue. The most appropriate conclusion is that:","Biopsy is still needed, as adjuncts cannot exclude dysplasia",["The lesion is benign and can be discharged from follow-up","The test should be repeated each year in place of a formal biopsy","Brush cytology should replace histology for this lesion"],"Vital stains and light-based devices have false negatives and cannot grade a lesion. Histology remains the standard for diagnosis."],
  ["A 72-year-old wears a full upper denture at night. The palatal mucosa under the denture is uniformly red, and the patient has no symptoms. The most appropriate initial management is:","Denture hygiene, nights out of the mouth, antifungal if needed",["Incisional biopsy of the palate","Urgent referral to a head and neck surgeon for biopsy","Topical corticosteroid applied to the palate under the denture"],"The distribution matches the denture, so this is denture stomatitis, a benign candidal and hygiene problem. Erythroplakia is focal and unexplained, not a neat map of the fitting surface."],
  ["A 34-year-old has red, smooth areas on the tongue dorsum with raised white borders. The areas change position over days. The most appropriate management is:","Reassurance, as this is geographic tongue",["Incisional biopsy of the most recent area","Urgent referral for suspected erythroplakia","A course of systemic corticosteroid"],"Migrating depapillated areas with white margins are benign and self-limiting. True erythroplakia stays in the same place and does not migrate."]
 ]
};

window.CONTENT["m10-n03"] = {
 understand: `
 <p><b>An ulcer is lost epithelium; a vesicle or bulla is fluid inside or below it.</b> In the wet mouth, blisters quickly break and leave ulcers, so ask questions that reveal the story.</p>
 <ol>
 <li><b>Acute, recurrent or chronic?</b> Sudden and generalised suggests virus or erythema multiforme. Repeated ulcers that heal suggest aphthae or recurrent herpes. Persistent lesions suggest immune blistering disease or malignancy.</li>
 <li><b>Is there one ulcer with a local cause?</b> A <b>traumatic ulcer</b> sits against the cause. Remove it. <b>If the ulcer has not healed at two weeks, biopsy or refer.</b> Induration, rolled margins or no pain raise suspicion of squamous cell carcinoma.</li>
 <li><b>Which mucosa?</b> <b>Aphthae</b> favour movable, non-keratinised mucosa such as lips, cheeks and ventral tongue. <b>Recurrent intraoral herpes</b> favours bound, keratinised hard palate and attached gingiva, in healthy patients.</li>
 <li><b>Fever and malaise? Skin, eyes, genitals?</b></li>
 </ol>
 <p><b>Aphthae versus herpes.</b> <b>Recurrent aphthous ulcers</b> are immune-mediated and have no vesicle stage. Minor ones are under 10 mm and heal within about two weeks without scars. Major ones are larger, last weeks and scar. Herpetiform ones are many tiny ulcers. Use topical corticosteroid. In severe or new adult cases, check iron, B12, folate and coeliac or bowel disease; add genital ulcers and uveitis and think of <b>Behçet disease</b>. <b>Primary herpetic gingivostomatitis</b> (HSV-1, usually a child) brings fever, swollen painful gingivae, and vesicles anywhere. The virus then rests in the trigeminal ganglion, and reactivates as cold sores or clustered intraoral ulcers. <b>Zoster</b> is unilateral and stops at the midline.</p>
 <p><b>Pemphigus versus pemphigoid: the level of the split explains everything.</b></p>
 <div class="tscroll"><table>
 <tr><th></th><th>Pemphigus vulgaris</th><th>Mucous membrane pemphigoid</th></tr>
 <tr><td>Target</td><td>Desmogleins, in desmosomes</td><td>Hemidesmosome and basement membrane proteins</td></tr>
 <tr><td>Split</td><td>Intraepithelial, suprabasal, with acantholysis</td><td>Subepithelial; whole epithelium lifts</td></tr>
 <tr><td>Blister</td><td>Thin roof; rarely seen intact</td><td>Thicker roof; may stay intact</td></tr>
 <tr><td>Direct immunofluorescence</td><td>Net-like, between cells</td><td>Linear, along basement membrane</td></tr>
 <tr><td>Danger</td><td>Life-threatening; skin; oral lesions often first</td><td>Eye scarring and blindness; gingival desquamation</td></tr>
 </table></div>
 <p>A rub that lifts the surface (Nikolsky sign) can occur in both, so it does not separate them. Biopsy intact <b>perilesional</b> tissue, not the ulcer. Put one piece in formalin, and one in <b>Michel's medium</b> or fresh for immunofluorescence, because formalin spoils that test. Pemphigus needs urgent referral and systemic immunosuppression. Pemphigoid needs an eye examination.</p>
 <p><b>Erythema multiforme</b> is a sudden hypersensitivity reaction, most often to recent HSV, sometimes Mycoplasma or a drug. Young adults get crusted, bleeding lips, widespread oral erosions with gingiva relatively spared, and target lesions on the skin. It settles over weeks and can recur.</p>
 <p><b>Why the exam cares.</b> Stems test site (keratinised or not), split level, immunofluorescence pattern, eye risk, and the two-week rule. Know the mechanism and you can predict the rest.</p>`,
 connect: [
  {to:"m01-n01", why:"Pemphigus and pemphigoid are failures of desmosomes and hemidesmosomes, so cell junction biology predicts the level of the split."},
  {to:"m10-n09", why:"Herpes simplex, zoster and coxsackie infections make up the acute multi-ulcer differential."},
  {to:"m10-n12", why:"Perilesional biopsy and Michel's medium are special handling rules that decide whether immunofluorescence can be read."},
  {to:"m11-n06", why:"Antivirals help herpes and zoster but not aphthae, so the choice of drug depends on making this distinction correctly."},
  {to:"m10-n10", why:"Recurrent ulceration can be the first clue to deficiency, bowel disease, Behçet disease or immunosuppression."}
 ],
 apply: {
  vignette: "A 58-year-old has had painful oral erosions for three months on the buccal mucosa and soft palate. Few intact blisters have ever been seen, and flaccid skin blisters have recently appeared on the chest. Perilesional biopsy shows a suprabasal split with rounded, separated cells. Which of the following is the most likely diagnosis?",
  options: ["Pemphigus vulgaris","Mucous membrane pemphigoid","Erythema multiforme","Erosive lichen planus"],
  answer: "Pemphigus vulgaris",
  steps: [
   "The ask: the most likely diagnosis, so use the histology as the deciding clue.",
   "Facts that matter: chronic painful erosions, rarely intact blisters, skin involvement and an intraepithelial split with acantholysis.",
   "Cross out mucous membrane pemphigoid: its split is subepithelial with the whole epithelium lifted, and rounded separated cells do not appear.",
   "Cross out erythema multiforme: it starts suddenly, often with crusted lips and target lesions, and it does not smoulder on for three months.",
   "Cross out erosive lichen planus: it shows a band of lymphocytes and basal cell damage, not a suprabasal split with acantholysis.",
   "The survivor explains everything: antibodies against desmogleins separate cell from cell, the thin roof breaks early, and the skin soon follows. Urgent referral is needed because it can be life-threatening."
  ]
 },
 teach: {
  prompt: "From the single fact that pemphigus attacks desmosomes and pemphigoid attacks hemidesmosomes, predict the level of the split, how long the blister lasts, the immunofluorescence pattern and which biopsy to take.",
  model: "Desmosomes join cell to cell, so pemphigus splits the epithelium from within, above the basal layer, and the loose cells round up as acantholysis. Its thin roof breaks fast, leaving erosions, and immunoglobulin outlines each cell in a net-like pattern. Hemidesmosomes bolt the basal layer to the basement membrane, so pemphigoid lifts the whole epithelium; its thick roof lasts longer, and immunoglobulin forms a linear band along the basement membrane. In both, I biopsy intact perilesional tissue, since an ulcer has no epithelium left to read, and send a piece unfixed or in Michel's medium for direct immunofluorescence."
 },
 cards: [
  ["Aphthae versus recurrent intraoral herpes: site in a healthy patient","Aphthae: movable non-keratinised mucosa. Herpes: keratinised hard palate and attached gingiva"],
  ["Minor aphthae: size and healing","Under 10 mm; heal within about two weeks without a scar"],
  ["Where HSV stays latent after oral infection","Trigeminal ganglion"],
  ["Ulcer that has not healed two weeks after removing the cause","Biopsy or refer"],
  ["Pemphigus vulgaris: target and split","Desmoglein; intraepithelial, suprabasal, with acantholysis"],
  ["Pemphigoid: split and immunofluorescence","Subepithelial; linear band along the basement membrane"],
  ["Pemphigus immunofluorescence","Net-like intercellular IgG and C3"],
  ["Serious complication to screen for in pemphigoid","Eye scarring (symblepharon), which can lead to blindness"],
  ["How to send a biopsy for direct immunofluorescence","Perilesional tissue, in Michel's medium or fresh, not formalin"],
  ["Sudden crusted lips, target lesions, recent cold sore","Erythema multiforme, triggered by HSV"],
  ["Unilateral vesicles stopping at the midline","Herpes zoster"]
 ],
 questions: [
  ["In an immunocompetent adult, recurrent aphthous ulcers most often occur on the:","Labial and buccal mucosa",["Hard palate","Attached gingiva and palate","Dorsum of the tongue"],"Aphthae favour movable, non-keratinised mucosa. Clustered ulcers on the hard palate or attached gingiva point instead to recurrent intraoral herpes."],
  ["A 22-year-old has three painful, 5 mm round ulcers on the labial mucosa, with similar episodes every few weeks. They heal without scarring. The most appropriate management is:","A topical corticosteroid applied to the ulcers",["Systemic acyclovir at the first sign of an ulcer","A course of amoxicillin","Excisional biopsy of the largest ulcer"],"This is the classic pattern of minor aphthae, for which topical corticosteroid reduces symptoms and duration. Aphthae are not herpetic, so acyclovir has no useful target here."],
  ["A 3-year-old has fever, irritability and refuses to eat. The gingivae are swollen and red, and small vesicles and ulcers are present on the tongue, palate and gingiva. The most likely diagnosis is:","Primary herpetic gingivostomatitis",["Herpangina","Herpetiform recurrent aphthous stomatitis","Erythema multiforme"],"Fever with widespread gingival involvement in a young child is typical of primary HSV infection. Herpangina tends to be limited to the posterior mouth, sparing the gingiva."],
  ["A 42-year-old notices a cluster of small painful ulcers on the hard palate near the site of a recent palatal injection. The most likely diagnosis is:","Recurrent intraoral herpes",["Minor aphthous ulceration","Pemphigus vulgaris","Traumatic ulcerative granuloma"],"Clustered ulcers on bound keratinised mucosa, sometimes triggered by local trauma, are typical of reactivated HSV in a healthy adult. Aphthae prefer movable mucosa."],
  ["After primary infection, herpes simplex virus causing oral lesions remains latent in the:","Trigeminal ganglion",["Submandibular salivary gland","Oral basal keratinocytes","Tonsillar lymphoid tissue"],"The virus travels along sensory nerves to the trigeminal ganglion and later reactivates down the same path. It is not latent in the surface epithelium that it infects during an outbreak."],
  ["The histological finding most characteristic of pemphigus vulgaris is:","Suprabasal intraepithelial clefting with acantholysis",["Subepithelial clefting with an intact epithelium","A band-like subepithelial lymphocytic infiltrate","Keratin pearls invading the connective tissue"],"Loss of desmosome adhesion lets cells separate within the epithelium above the basal layer. A subepithelial split belongs to mucous membrane pemphigoid."],
  ["A 63-year-old woman has red, peeling gingivae, an intact blood-filled blister on the palate and gritty eyes. Direct immunofluorescence shows a linear band of IgG and C3 at the basement membrane. The most likely diagnosis is:","Mucous membrane pemphigoid",["Pemphigus vulgaris","Erosive lichen planus","Primary herpetic gingivostomatitis"],"Desquamative gingivitis with a linear basement membrane pattern, plus eye symptoms, indicates pemphigoid. Pemphigus would give a net-like intercellular pattern."],
  ["Mucous membrane pemphigoid is confirmed in a patient with desquamative gingivitis. The most important referral to arrange, because of the risk of permanent disability, is to:","An ophthalmologist",["A nephrologist","A cardiologist","A speech-language pathologist"],"Conjunctival scarring can progress silently to symblepharon and blindness, so eye review is essential even when eyes seem normal."],
  ["A biopsy is planned for suspected pemphigus. Which approach is most appropriate?","Take perilesional tissue; put part in Michel's medium for immunofluorescence",["Sample the ulcer base, and send all tissue in formalin","Sample the ulcer base, and send all of the tissue in saline for viral culture","Sample normal mucosa on the opposite side, and send it all in formalin for H&E"],"An ulcer has lost the epithelium needed for diagnosis, and formalin spoils direct immunofluorescence. Perilesional tissue preserves the split and the bound antibodies."],
  ["Which of the following best explains why blisters are rarely seen intact in pemphigus vulgaris, but may be seen in pemphigoid?","The pemphigus split leaves a thin, fragile roof, whereas the pemphigoid roof is full-thickness epithelium",["Pemphigus blisters contain enzymes that digest their roof, whereas pemphigoid blisters are empty","Pemphigus affects only keratinised mucosa, whereas pemphigoid affects only non-keratinised mucosa","Pemphigus is viral and lyses the cells, whereas pemphigoid is bacterial and does not"],"Level predicts behaviour. A suprabasal split has only part of the epithelium above it, which breaks with chewing, whereas a subepithelial split keeps the whole epithelium over the blister."],
  ["A 19-year-old has sudden onset of haemorrhagic crusts on the lips, painful oral erosions and target-like lesions on the palms, 10 days after a cold sore. The most likely diagnosis is:","Erythema multiforme",["Primary herpetic gingivostomatitis","Pemphigus vulgaris","Mucous membrane pemphigoid"],"Sudden onset with crusted lips and target lesions after HSV is the classic pattern of this hypersensitivity reaction. Primary herpes prominently involves the gingivae and does not cause target lesions."],
  ["A 55-year-old has a 1 cm ulcer on the lateral tongue against a sharp cusp on 3.7. The cusp was smoothed two weeks ago, but the ulcer is unchanged. The most appropriate next step is to:","Arrange biopsy or urgent referral of the ulcer",["Apply a topical corticosteroid and review in a further month","Prescribe an antibiotic and review in a further month","Adjust the cusp again and reassure the patient"],"A traumatic ulcer should heal within about two weeks after the cause has gone. A persistent ulcer on a high-risk site must be treated as possible carcinoma, and further delay is the error."],
  ["Which clinical feature most suggests that a chronic oral ulcer is malignant rather than traumatic?","Induration with rolled margins",["Yellow fibrin slough on the surface","Red halo around the ulcer","A nearby sharp cusp on the tooth"],"Tumour infiltrating the base makes it firm, and growth at the edge rolls the margin. Fibrin and an erythematous halo are common in benign ulcers."],
  ["A 68-year-old has a burning pain and then unilateral vesicles on the left palate and left upper lip, with an abrupt stop at the midline. The most appropriate management is:","Early systemic antiviral therapy, ideally within 72 hours",["Topical corticosteroid gel applied to the vesicles three times daily","Systemic amoxicillin until the vesicles crust and resolve","Observation alone, with review after four weeks"],"Unilateral dermatomal vesicles indicate zoster in the maxillary division. Early antiviral therapy shortens the attack and may reduce complications; corticosteroid alone does not treat the virus."],
  ["A 28-year-old has recurrent oral aphthae, recurrent genital ulcers and uveitis. The most likely diagnosis is:","Behçet disease",["Pemphigus vulgaris","Secondary herpes simplex infection","Coeliac disease"],"Oral plus genital ulceration with eye inflammation is the classic triad, reflecting a systemic vasculitis. Coeliac disease can cause aphthae, but not uveitis with genital ulcers as its typical picture."]
 ]
};

window.CONTENT["m10-n04"] = {
 understand: `
 <p><b>Colour comes from three sources: melanin from melanocytes, blood, or foreign material.</b> Melanin high in the epithelium looks brown; deeper pigment looks blue or grey because of how light scatters (the Tyndall effect). Sort lesions with these questions.</p>
 <ol>
 <li><b>Does it blanch?</b> Press with a glass slide (diascopy). Blue or purple that empties is blood in a vessel, such as a <b>varix</b> on the lip of an older adult. A lesion that does not empty contains pigment or extravasated blood. A recent bruise fades over days and has a history of trauma.</li>
 <li><b>One spot or many?</b> A focal lesion suggests amalgam tattoo, melanotic macule, naevus or melanoma. Multifocal or diffuse pigmentation suggests a whole-body cause: physiological pigmentation, smoking, a drug or a hormone.</li>
 <li><b>Is it stable or changing?</b> Unchanged for years favours benign. Growth, irregular borders, mixed colours, ulceration or bleeding force a biopsy.</li>
 <li><b>Is there a medical story?</b> Fatigue, low blood pressure or weight loss suggests Addison's disease. Bowel symptoms suggest Peutz-Jeghers syndrome.</li>
 </ol>
 <div class="tscroll"><table>
 <tr><th>Lesion</th><th>Typical picture</th><th>What to do</th></tr>
 <tr><td>Amalgam tattoo</td><td>Blue-grey macule on gingiva or alveolar mucosa, near a restoration or apical surgery; stable</td><td>Radiograph may show fine radiopaque flecks; biopsy if unsure</td></tr>
 <tr><td>Melanotic macule</td><td>Flat brown spot under 1 cm; lower lip, gingiva, cheek; stable</td><td>Baseline photo; biopsy if recent or uncertain</td></tr>
 <tr><td>Melanoma</td><td>Palate or maxillary gingiva; irregular, multicoloured, growing</td><td>Urgent referral</td></tr>
 <tr><td>Addison's disease</td><td>Multifocal brown patches on mucosa plus bronzed skin</td><td>Medical referral</td></tr>
 </table></div>
 <p><b>Amalgam tattoo</b> is implanted metal, and it does not change after settling. A negative radiograph does not exclude it, because particles can be too fine to see.</p>
 <p><b>Melanotic macule</b> has more melanin in the basal layer, but not more melanocytes. <b>Physiological pigmentation</b> is symmetrical, long-standing and usually on the attached gingiva in people with darker skin. <b>Smoker's melanosis</b> affects the anterior labial gingiva and fades after quitting. Drugs such as <b>minocycline</b> and antimalarials can cause blue-grey or brown patches.</p>
 <p><b>Oral melanoma</b> is rare, but very dangerous. Melanocytes grow radially, then vertically, and reach blood vessels early. Most cases arise on the palate and maxillary gingiva in older adults. They are often painless and found late, so prognosis is worse than for most skin melanomas. Do not watch and wait. Refer the patient urgently.</p>
 <p><b>Addison's disease</b> is adrenal failure, most often autoimmune in developed countries. Low cortisol removes negative feedback, the pituitary pours out ACTH, and its precursor carries melanocyte-stimulating activity. Pigment rises in skin and mucosa. The chairside risk is acute adrenal crisis under stress.</p>
 <p><b>Peutz-Jeghers syndrome</b> gives dark perioral and lip macules with intestinal polyps and a raised cancer risk.</p>
 <p><b>Why the exam cares.</b> Stems contrast a stable harmless spot with one that must not wait. Site, change and pattern decide. A new or growing pigmented lesion on the palate is melanoma until histology says otherwise.</p>`,
 connect: [
  {to:"m13-n06", why:"Addison's mucosal pigmentation links to adrenal crisis risk and steroid planning for treatment."},
  {to:"m15-n02", why:"Amalgam tattoo arises when particles enter soft tissue during placing, removing or apical procedures."},
  {to:"m05-n05", why:"Radial then vertical growth and early metastasis of melanoma apply general neoplasia concepts."},
  {to:"m10-n12", why:"The decision to biopsy or refer a pigmented lesion rests on the triggers in that node."},
  {to:"m10-n10", why:"Multifocal pigmentation can reveal systemic disease or drug effects."}
 ],
 apply: {
  vignette: "A 46-year-old has a flat, 5 mm blue-grey area on the alveolar mucosa apical to 3.6, which has a large amalgam and an old apicectomy. Dental records show the same lesion six years ago, unchanged. A periapical radiograph shows fine radiopaque flecks in the same soft tissue area. Which of the following is the most appropriate management?",
  options: ["Record the finding and reassure the patient, with no treatment needed","Refer urgently for wide local excision","Prescribe a topical antifungal and review in two weeks","Remove the amalgam on 3.6 to clear the lesion"],
  answer: "Record the finding and reassure the patient, with no treatment needed",
  steps: [
   "The ask: management, so first decide what this lesion is.",
   "Facts that matter: flat, blue-grey, next to a restoration and earlier apical surgery, unchanged for six years, and with radiopaque flecks in soft tissue.",
   "Cross out urgent excision: melanoma would typically be growing, irregular and multicoloured, often on the palate or maxillary gingiva, and this has none of those features.",
   "Cross out antifungal: candida does not produce a stable, blue-grey flat lesion.",
   "Cross out removing the amalgam: particles sit in connective tissue, so removing the restoration does not clear them.",
   "The survivor explains everything: this is an amalgam tattoo, supported by the radiograph, so record it and reassure. A biopsy is needed only if the appearance is doubtful."
  ]
 },
 teach: {
  prompt: "A patient has dark oral patches. Explain how you would sort exogenous, vascular, local melanocytic and systemic causes, and describe how an adrenal gland failure can darken the inside of the mouth.",
  model: "I press first, because a vessel empties and blanches. Then I ask whether there is one lesion or many, whether it has changed, and whether there is a restoration, drug, smoking or medical story. A stable blue-grey spot near an amalgam suggests a tattoo, while a growing irregular patch on the palate must be referred urgently as possible melanoma. Multifocal pigmentation with fatigue, weight loss and low blood pressure makes me consider Addison's disease. With adrenal failure, low cortisol removes negative feedback on the pituitary, so ACTH rises; because ACTH and its precursor have melanocyte-stimulating activity, melanin increases in skin and mucosa."
 },
 cards: [
  ["First test for a blue or purple lesion","Diascopy: does it blanch? A vessel empties"],
  ["Blue-grey macule near amalgam or apicectomy","Amalgam tattoo"],
  ["Radiograph in an amalgam tattoo","May show fine radiopaque flecks; a negative film does not exclude it"],
  ["Melanotic macule histology","More melanin in the basal layer, with no increase in melanocytes"],
  ["Most common oral sites for melanoma","Palate and maxillary gingiva"],
  ["Features forcing urgent biopsy or referral of a pigmented lesion","Growth, irregular border, varied colour, ulceration, bleeding"],
  ["Why Addison's disease causes pigmentation","Low cortisol, high ACTH and melanocyte-stimulating activity"],
  ["Peutz-Jeghers syndrome","Perioral macules plus intestinal polyps and raised cancer risk"],
  ["Smoker's melanosis site","Anterior labial gingiva; fades after quitting"],
  ["Drug classically causing blue-grey oral pigmentation","Minocycline"]
 ],
 questions: [
  ["The most common source of localised exogenous oral pigmentation is:","Implanted amalgam particles",["Graphite from a pencil injury","Lead absorbed from the environment","Silver nitrate cautery"],"Amalgam entering a wound during restorative or surgical work is the commonest foreign pigment in the mouth. Graphite tattoos happen, but they are far less common."],
  ["A periapical radiograph of a suspected amalgam tattoo is most likely to show:","Fine radiopaque flecks in the soft tissue",["A well-defined radiolucency in the bone","A resorbed root apex under the area","A widened periodontal ligament space around the tooth"],"Metal particles are radiopaque when they are large enough to resolve. Their absence does not exclude the diagnosis, since fine particles may not be visible."],
  ["Primary oral mucosal melanoma most often arises on the:","Palate and maxillary gingiva",["Floor of the mouth","Lower labial mucosa","Ventral surface of the tongue"],"The maxillary mucosa, especially hard palate and gingiva, is the classic site. Floor of mouth and ventral tongue are classic sites for squamous cell carcinoma rather than melanoma."],
  ["A 64-year-old has a 2 cm irregular, brown-black patch on the hard palate. A family member says it has enlarged over three months. The most appropriate action is to:","Refer urgently for biopsy and specialist care",["Take a photograph and review in six months","Reassure the patient, as this is physiological pigmentation","Prescribe an antifungal and review in two weeks"],"A growing, irregular, varied pigmented lesion on the palate of an older adult must be treated as melanoma until disproved. A six-month delay could be fatal, since this tumour reaches vessels early."],
  ["A 30-year-old has a stable, flat 4 mm brown spot on the lower lip vermilion. Biopsy is most likely to show:","Increased basal melanin with no increase in melanocyte numbers",["Nests of atypical melanocytes in the connective tissue","Dark metallic particles along collagen fibres","Dilated vascular channels full of red cells"],"This is a melanotic macule. Atypical melanocyte nests suggest melanoma, and metal particles indicate an amalgam tattoo."],
  ["A 40-year-old has fatigue, weight loss, low blood pressure and a bronzed skin tone, with new brown patches on the buccal mucosa. The most likely diagnosis is:","Addison's disease",["Peutz-Jeghers syndrome","Hairy leukoplakia","Multiple melanotic macules"],"Adrenal failure links the systemic symptoms and the pigment. Peutz-Jeghers typically presents much earlier with perioral macules and bowel polyps, not hypotension."],
  ["Which of the following best explains mucosal pigmentation in primary adrenal insufficiency?","Low cortisol removes feedback, so ACTH rises and stimulates melanocytes",["High cortisol stimulates melanocytes in the basal epithelium directly","Reduced aldosterone causes retained haemosiderin in the mucosa","Excess adrenaline causes vascular dilation that appears as a brown colour"],"Loss of cortisol feedback drives the pituitary to produce more ACTH, whose precursor also yields melanocyte-stimulating activity. Cortisol is low rather than high in this disease."],
  ["A patient with Addison's disease, on replacement steroid, needs a stressful surgical extraction of 4.8. The most serious chairside risk is:","Acute adrenal crisis with collapse",["Hyperglycaemic ketoacidosis","A hypertensive stroke during the procedure","Anaphylaxis to the corticosteroid"],"The patient cannot increase cortisol under stress, so vascular collapse can follow. Planning includes a medical consultation about the steroid regimen."],
  ["A 17-year-old has multiple dark macules on the lips and around the mouth, and a history of intussusception from intestinal polyps. The most likely diagnosis is:","Peutz-Jeghers syndrome",["Addison's disease","Melanoma with satellite lesions","Multiple amalgam tattoos"],"Mucocutaneous macules with gut hamartomatous polyps define Peutz-Jeghers syndrome, which also raises cancer risk. Addison's disease would not explain polyps."],
  ["A 25-year-old with dark skin has symmetrical, diffuse brown pigmentation of the attached gingiva that has been present since childhood. The most appropriate management is:","Reassurance, as this is physiological pigmentation",["Incisional biopsy of multiple gingival sites","Urgent referral for suspected melanoma","Testing for adrenal insufficiency"],"Symmetrical, long-standing gingival pigmentation in a person with darker skin is normal. Melanoma would be asymmetrical and changing, and there is no systemic story here."],
  ["A 50-year-old who smokes heavily has brown macules limited to the anterior labial gingiva. The most likely diagnosis is:","Smoker's melanosis",["Oral melanoma","Amalgam tattoo","Peutz-Jeghers syndrome"],"Tobacco stimulates melanocytes, classically on the anterior labial gingiva, and it fades over time after quitting. Melanoma would be focal, irregular and growing."],
  ["A 72-year-old has a soft, blue, 4 mm papule on the lower lip that empties under pressure from a glass slide. The most likely diagnosis is:","Varix",["Melanotic macule","Amalgam tattoo","Oral melanoma"],"Blanching on diascopy shows blood flowing in a dilated vessel. Pigment in a macule or tattoo stays when the tissue is pressed."],
  ["A 19-year-old on long-term acne therapy develops blue-grey pigmentation of the palate and alveolar mucosa. The drug most likely responsible is:","Minocycline",["Amoxicillin","Ibuprofen","Metformin"],"Minocycline can pigment bone and mucosa with long-term use, and the dark bone may show through the thin mucosa. The other drugs are not classically linked to this picture."],
  ["Oral mucosal melanoma usually has a worse prognosis than most skin melanomas, mainly because it:","Is painless and hidden, so it is found late, after vascular spread",["Arises from a benign melanotic macule in nearly all patients","Occurs mainly in children, whose tumour immunity is still immature","Spreads mainly through bone and therefore cannot be resected"],"Late detection at a hidden site gives the tumour time for deep invasion and metastasis. Melanotic macules are not established precursors, and most patients are older adults."]
 ]
};

window.CONTENT["m10-n05"] = {
 understand: `
 <p><b>A cyst is a sac lined by epithelium that expands slowly in bone.</b> Each lining comes from one embryological leftover, so tissue of origin predicts site and behaviour. The WHO 2022 classification lists these together as cysts of the jaws. It keeps the <b>odontogenic keratocyst</b> (OKC) as a cyst, not "keratocystic odontogenic tumour" (the 2005 term, dropped in 2017), though debate continues. Work through these questions.</p>
 <ol>
 <li><b>Is the tooth vital?</b> A non-vital tooth with an apical radiolucency suggests a radicular cyst. A vital tooth argues strongly against it.</li>
 <li><b>Where is it relative to the tooth?</b> Apex, crown, lateral root surface, or midline palate.</li>
 <li><b>How old is the patient and what does it do?</b> Bucco-lingual expansion and root resorption matter. OKC grows along the bone with little expansion.</li>
 </ol>
 <div class="tscroll"><table>
 <tr><th>Cyst</th><th>Tissue of origin</th><th>Clue</th></tr>
 <tr><td>Radicular</td><td>Rests of Malassez, stimulated by inflammation</td><td>Non-vital tooth, apical; commonest jaw cyst</td></tr>
 <tr><td>Residual</td><td>Radicular cyst left behind (no separate WHO entry)</td><td>Edentulous site after extraction</td></tr>
 <tr><td>Dentigerous</td><td>Reduced enamel epithelium</td><td>Attached at the cemento-enamel junction of an unerupted 3.8, 4.8, 1.3 or 2.3</td></tr>
 <tr><td>OKC</td><td>Dental lamina rests</td><td>Posterior mandible and ramus; keratin</td></tr>
 <tr><td>Lateral periodontal</td><td>Dental lamina rests</td><td>Vital canine-premolar region of mandible</td></tr>
 <tr><td>Nasopalatine duct</td><td>Duct remnants (non-odontogenic)</td><td>Midline between vital 1.1 and 2.1; may be heart-shaped</td></tr>
 </table></div>
 <p><b>Radicular cyst.</b> Pulp necrosis leads to periapical inflammation, which wakes the rests. Radiographs cannot reliably separate a cyst from a granuloma. Treat the tooth by root canal treatment or extraction, and review healing. If a cyst is left after extraction, it becomes residual.</p>
 <p><b>Dentigerous cyst.</b> Fluid collects between the reduced enamel epithelium and the crown. A normal follicular space is a few millimetres wide; a space beyond about 5 mm on a radiograph raises suspicion, though film alone cannot separate an enlarged follicle from a small cyst. Enucleate and send the specimen, because a unicystic ameloblastoma or OKC can look the same on film.</p>
 <p><b>Odontogenic keratocyst.</b> Lining is thin and uniform, usually about 6 to 8 cell layers, corrugated and parakeratinised, with palisaded dark basal cells. Most show <b>PTCH1</b> mutation. The fragile lining and satellite cysts leave fragments behind, so recurrence after enucleation alone is high: about 29% in one pooled review, with individual series ranging very widely. Enucleation is often supplemented by peripheral ostectomy or Carnoy's solution, and follow-up lasts years. Multiple OKCs in a young patient suggest <b>Gorlin syndrome</b> (naevoid basal cell carcinoma syndrome): multiple basal cell carcinomas, palmar pits, calcified falx and bifid ribs.</p>
 <p><b>Nasopalatine duct cyst.</b> On an intraoral radiograph, an incisive canal wider than about 6 mm suggests a cyst; this is a traditional guide, and CBCT studies show normal canals vary in width. Pulp testing avoids needless root canal treatment on healthy incisors.</p>
 <p><b>Also on the WHO list:</b> orthokeratinised odontogenic cyst (separate from OKC, with bland unpalisaded basal cells), calcifying and glandular odontogenic cysts, the gingival cyst, the botryoid odontogenic cyst (with the lateral periodontal cyst), the inflammatory collateral cyst, and the non-odontogenic surgical ciliated cyst.</p>
 <p><b>Why the exam cares.</b> Stems give position, vitality, age and aspirate. Thick keratin in the aspirate suggests OKC. Always test vitality first, and send every enucleated lining to pathology.</p>`,
 connect: [
  {to:"m09-n06", why:"Periapical radiolucencies must be read with pulp testing, since granuloma and radicular cyst are not reliably separated on film."},
  {to:"m20-n01", why:"AAE pulp and periapical diagnosis decides whether an apical lesion has an endodontic cause."},
  {to:"m06-n01", why:"Rests of Malassez, reduced enamel epithelium and dental lamina are normal developmental structures, which explains the origin of each cyst."},
  {to:"m21-n02", why:"Dentigerous cysts form around impacted teeth, so radiographic follow-up and removal decisions overlap with third molar surgery."},
  {to:"m10-n06", why:"Unicystic ameloblastoma can mimic a dentigerous cyst, so histology decides between cyst and tumour."}
 ],
 apply: {
  vignette: "A 27-year-old has a panoramic radiograph showing a 4 cm well-corticated, unilocular radiolucency extending from the 4.7 region up into the right ramus. There is minimal buccal expansion, and 4.5, 4.6 and 4.7 respond normally to pulp testing. No unerupted tooth is present. Aspiration yields thick, creamy, cheesy material. Which of the following is the most likely diagnosis?",
  options: ["Odontogenic keratocyst","Radicular cyst","Dentigerous cyst","Conventional ameloblastoma"],
  answer: "Odontogenic keratocyst",
  steps: [
   "The ask: the most likely diagnosis, so use position, vitality and aspirate.",
   "Facts that matter: large posterior mandibular and ramus lesion, spreading along the bone with little expansion, vital teeth, keratin in the aspirate, and a young adult.",
   "Cross out radicular cyst: all teeth nearby are vital, so there is no necrotic pulp to drive the lesion.",
   "Cross out dentigerous cyst: there is no unerupted tooth with the lining attached at its cemento-enamel junction.",
   "Cross out conventional ameloblastoma: it usually expands the bone and may be multilocular with root resorption, and it would not usually yield keratin.",
   "The survivor explains everything: dental lamina rests form a keratin-producing lining that grows along the medullary bone. The fragile lining is why recurrence is high, and long follow-up is needed."
  ]
 },
 teach: {
  prompt: "Starting only from the embryological leftovers (rests of Malassez, reduced enamel epithelium, dental lamina, nasopalatine duct), reconstruct the matching cyst for each one, where it appears, and what the pulp test would show.",
  model: "Rests of Malassez in the periodontal ligament are woken by periapical inflammation and form a radicular cyst at the apex of a non-vital tooth; if left after extraction it becomes a residual cyst. Reduced enamel epithelium covering an unerupted crown forms a dentigerous cyst attached at the cemento-enamel junction, and nearby teeth are vital. Dental lamina rests form the OKC in the posterior mandible and ramus, and the lateral periodontal cyst near a vital mandibular canine or premolar. Nasopalatine duct remnants are not odontogenic at all, and they form a midline cyst between vital central incisors."
 },
 cards: [
  ["Radicular cyst: origin and tooth state","Rests of Malassez; non-vital tooth"],
  ["Most common jaw cyst","Radicular cyst"],
  ["Dentigerous cyst: origin and attachment","Reduced enamel epithelium; attaches at the cemento-enamel junction"],
  ["OKC origin and preferred site","Dental lamina rests; posterior mandible and ramus"],
  ["OKC under WHO 2022","A cyst; 'keratocystic odontogenic tumour' has been dropped since 2017"],
  ["OKC lining histology","Thin, corrugated parakeratin with palisaded dark basal cells"],
  ["Gene mutated in most OKCs and in Gorlin syndrome","PTCH1"],
  ["Gorlin syndrome features","Multiple OKCs, basal cell carcinomas, palmar pits, calcified falx, bifid ribs"],
  ["Lateral periodontal cyst","Vital mandibular canine-premolar region, between the roots; dental lamina origin"],
  ["Nasopalatine duct cyst","Non-odontogenic; midline between vital 1.1 and 2.1"],
  ["First test for an apical radiolucency","Pulp vitality testing"]
 ],
 questions: [
  ["The epithelial lining of a radicular cyst is derived from:","Rests of Malassez",["Reduced enamel epithelium","Dental lamina remnants","Nasopalatine duct remnants"],"Inflammation from a necrotic pulp stimulates these rests in the periodontal ligament. Reduced enamel epithelium is the origin of the dentigerous cyst."],
  ["The lining of a dentigerous cyst is derived from:","Reduced enamel epithelium",["Rests of Malassez","Dental lamina remnants","Hertwig's root sheath at the apex"],"Fluid collects between the crown and the reduced enamel epithelium, which is why the cyst attaches at the cemento-enamel junction. Rests of Malassez form radicular cysts."],
  ["The odontogenic keratocyst arises from:","Dental lamina remnants",["Rests of Malassez","Reduced enamel epithelium","Nasopalatine duct remnants"],"Dental lamina rests form the keratinising lining with its palisaded basal layer. It can surround an unerupted tooth and mimic a dentigerous cyst, but its origin differs."],
  ["The most common cyst of the jaws is the:","Radicular cyst",["Odontogenic keratocyst","Dentigerous cyst","Lateral periodontal cyst"],"Radicular cysts are the most frequent, reflecting how common pulp necrosis is. Dentigerous cysts come second and are the commonest developmental odontogenic cyst."],
  ["A 28-year-old has a well-defined pericoronal radiolucency around unerupted 3.8, attached at the cemento-enamel junction. The most likely diagnosis is:","Dentigerous cyst",["Radicular cyst","Lateral periodontal cyst","Nasopalatine duct cyst"],"A pericoronal lesion attached at the neck of an unerupted tooth is the classic appearance. A unicystic ameloblastoma can look the same on film, which is why the specimen must go to pathology."],
  ["A 70-year-old has a well-defined, unilocular radiolucency in the edentulous 3.6 region. The tooth was removed years ago because of a large abscess. The most likely diagnosis is:","Residual cyst",["Dentigerous cyst","Odontogenic myxoma","Nasopalatine duct cyst"],"A radicular cyst left behind after extraction persists as a residual cyst, explaining the edentulous site. A dentigerous cyst requires an unerupted crown."],
  ["A 52-year-old has an 8 mm well-corticated radiolucency between the roots of 3.4 and 3.5. Both teeth respond normally to pulp testing. The most likely diagnosis is:","Lateral periodontal cyst",["Lateral radicular cyst","Dentigerous cyst","Residual radicular cyst"],"A small lateral lesion in the mandibular canine-premolar area, with vital adjacent teeth, is typical. A radicular cyst on a lateral canal would need a non-vital tooth."],
  ["A 45-year-old has a heart-shaped radiolucency in the midline of the anterior maxilla, between 1.1 and 2.1, and both teeth are vital. The most likely diagnosis is:","Nasopalatine duct cyst",["Radicular cyst","Odontogenic keratocyst","Lateral periodontal cyst"],"A midline lesion between vital central incisors arises from duct remnants and is non-odontogenic. The vital pulp tests exclude a radicular cyst and prevent unnecessary endodontic treatment."],
  ["Under the WHO 2022 classification, the odontogenic keratocyst is classified as:","A cyst of the jaws, with continuing debate about neoplastic behaviour",["A benign epithelial odontogenic tumour under 'keratocystic odontogenic tumour'","A malignant odontogenic carcinoma","A non-odontogenic fissural cyst"],"The 2005 tumour label was dropped in 2017, and the 2022 edition retains cyst status, even though PTCH1 mutations keep the debate alive. Many older textbooks still use the 2005 term."],
  ["Which of the following best explains the high recurrence of odontogenic keratocyst after simple enucleation?","Its thin, friable lining and satellite cysts leave epithelium behind",["Its lining is thick, and the cyst cannot be separated from the tooth","It has a blood supply from the inferior alveolar artery","It is a malignant tumour that seeds the bloodstream"],"Fragments and daughter cysts can remain in bone, and the lining has a high proliferative capacity. That is why adjuncts and long-term follow-up are used; it is not malignant."],
  ["A 15-year-old has several jaw radiolucencies proved to be odontogenic keratocysts. There are pits on the palms, and a skull film shows a calcified falx. The gene most likely mutated is:","PTCH1",["BRAF V600E","KRAS","TP53"],"Multiple OKCs with these signs suggest Gorlin syndrome, due to PTCH1 mutation in the hedgehog pathway. BRAF is more typical of conventional ameloblastoma."],
  ["A radiolucency sits at the apex of 4.4, and the tooth responds normally to electric and cold pulp testing. Which diagnosis does this finding make most unlikely?","Radicular cyst",["Odontogenic keratocyst","Lateral periodontal cyst","Normal anatomic structure"],"A radicular cyst depends on a necrotic pulp, so a vital tooth makes it most unlikely. A normal anatomical shadow such as the mental foramen, by contrast, can project over a vital apex."],
  ["A dentist enucleates what appears to be a straightforward dentigerous cyst around 4.8. The most appropriate handling of the specimen is to:","Send all the tissue for histopathological examination",["Discard the tissue, because the radiograph was diagnostic","Keep the tissue in water and send it only if the cyst recurs","Send only the fluid for culture and sensitivity"],"Several lesions look similar on film, including OKC and unicystic ameloblastoma, and histology changes follow-up and treatment. A radiograph cannot provide a tissue diagnosis."],
  ["A 34-year-old has a restorable 1.2 with a necrotic pulp and a 1 cm well-defined periapical radiolucency. The most appropriate initial management is:","Root canal treatment, with radiographic follow-up of healing",["Immediate extraction of 1.2 and enucleation of the lesion","Marsupialisation and long-term antibiotics","Biopsy of the lesion before any endodontic treatment"],"Radiographs cannot separate granuloma from radicular cyst, and many lesions heal after the root canal system is disinfected. Extraction of a restorable tooth is not the first choice, and surgery is kept for failed healing."],
  ["The lining most characteristic of odontogenic keratocyst is:","Corrugated parakeratin with a palisaded, hyperchromatic basal layer",["Non-keratinised stratified squamous epithelium with arcading and inflammation","Respiratory epithelium with mucous cells","Cuboidal epithelium with focal plaques and glycogen-rich clear cells"],"This lining pattern is diagnostic. Arcading, inflamed non-keratinised epithelium is typical of a radicular cyst, and focal plaques with clear cells suggest a lateral periodontal cyst."]
 ]
};

window.CONTENT["m10-n06"] = {
 understand: `
 <p><b>Odontogenic tumours are named for the tissue that is growing: epithelium, mesenchyme or both.</b> Tooth development runs through an epithelial and a mesenchymal partner, and either can misbehave. The diagnosis is made from age, site, radiographic density and relation to teeth. Biopsy decides.</p>
 <ol>
 <li><b>Is it radiolucent, mixed or opaque?</b> Opaque with a dark rim, on a root, suggests <b>cementoblastoma</b>. Tooth-like densities suggest <b>odontoma</b>.</li>
 <li><b>Is it multilocular?</b> Think <b>ameloblastoma</b> or <b>myxoma</b>.</li>
 <li><b>Is a tooth unerupted?</b> Anterior maxilla in a teenager suggests <b>AOT</b> (adenomatoid odontogenic tumour). A molar in middle age with specks suggests <b>CEOT</b> (calcifying epithelial odontogenic tumour).</li>
 <li><b>Are roots resorbed or bone expanded?</b> Think of a true neoplasm.</li>
 </ol>
 <div class="tscroll"><table>
 <tr><th>Tumour</th><th>Who and where</th><th>Radiograph</th><th>Key feature</th></tr>
 <tr><td>Ameloblastoma, conventional</td><td>Adults; posterior mandible and ramus</td><td>Multilocular "soap bubble"; root resorption</td><td>Palisaded, reverse-polarity cells; BRAF V600E</td></tr>
 <tr><td>Odontoma</td><td>Young; compound anterior maxilla, complex posterior jaw</td><td>Dense, rimmed mass</td><td>Blocks eruption; behaves as a hamartoma</td></tr>
 <tr><td>Myxoma</td><td>Young adults; posterior jaws</td><td>Honeycomb or "tennis racket"</td><td>Gelatinous; hard to remove cleanly</td></tr>
 <tr><td>AOT</td><td>Teens, more often female; anterior maxilla, often unerupted canine</td><td>Lucent with fine flecks</td><td>Duct-like structures; shells out easily</td></tr>
 <tr><td>CEOT (Pindborg)</td><td>Mid-life; posterior mandible</td><td>Lucent with "driven snow"</td><td>Amyloid; Liesegang rings</td></tr>
 <tr><td>Cementoblastoma</td><td>Usually under 30; mandibular first molar</td><td>Opaque mass fused to the root; lucent rim</td><td>Pain; tooth stays vital</td></tr>
 </table></div>
 <p><b>WHO 2022 ameloblastoma terms.</b> <b>Conventional</b> replaces "solid/multicystic". The others are <b>unicystic</b>, <b>extraosseous/peripheral</b>, <b>adenoid</b> (the only new entity) and <b>metastasizing</b>. Follicular, plexiform and desmoplastic are microscopic patterns, not separate entities. Conventional ameloblastoma is benign but infiltrative: fingers run through marrow past the radiographic edge, so curettage alone has a high recurrence rate, and resection with a margin of clinically normal bone gives the lowest recurrence and is the usual treatment. <b>BRAF V600E</b> offers a target for selected cases.</p>
 <p><b>Unicystic ameloblastoma</b> affects younger patients, and it mimics a dentigerous cyst around an unerupted molar. Luminal and intraluminal forms can often be treated conservatively. <b>Mural</b> tumour infiltrates the wall and may need treatment like a conventional tumour. <b>Extraosseous</b> tumour sits in gingiva without bone involvement and has a low recurrence after local excision.</p>
 <p><b>Odontoma</b> is usually an incidental finding: a retained primary tooth or an unerupted permanent one prompts the radiograph. Compound forms have miniature tooth-like denticles; complex forms are an amorphous mass. Enucleation is usually curative. <b>AOT</b> extends past the cemento-enamel junction, down the root, which helps separate it from a dentigerous cyst. <b>Cementoblastoma</b> is fused to the root, so the tumour is removed with the involved tooth, and tissue left behind can recur. <b>Myxoma</b> contains loose stellate cells that resemble a dental follicle, and it needs clinical correlation.</p>
 <p><b>Why the exam cares.</b> Stems supply age, site, film and one histological word. Match the pattern. Remember too that any biopsy-proved tumour changes the operation.</p>`,
 connect: [
  {to:"m10-n05", why:"Unicystic ameloblastoma and AOT can mimic a dentigerous cyst, so the pericoronal differential spans both nodes."},
  {to:"m06-n01", why:"Tumours mirror tooth development: reverse polarity and stellate reticulum in ameloblastoma are copies of the enamel organ."},
  {to:"m05-n05", why:"Benign but infiltrative behaviour and BRAF-driven growth show why benign does not always mean simple surgery."},
  {to:"m09-n04", why:"Panoramic and CBCT images show locularity, root resorption and cortical expansion that guide the differential."},
  {to:"m10-n07", why:"Mixed and opaque jaw lesions require separation from fibro-osseous lesions and other non-odontogenic bone disease."}
 ],
 apply: {
  vignette: "A 38-year-old has a slowly enlarging, painless swelling of the right posterior mandible. A panoramic radiograph shows a multilocular radiolucency from 4.6 to the ramus, with buccal and lingual expansion and knife-edge resorption of the roots of 4.6 and 4.7. Biopsy shows islands with palisaded columnar peripheral cells whose nuclei are polarised away from the basement membrane. Which of the following is the most likely diagnosis?",
  options: ["Conventional ameloblastoma","Odontogenic keratocyst","Odontogenic myxoma","Calcifying epithelial odontogenic tumour"],
  answer: "Conventional ameloblastoma",
  steps: [
   "The ask: the most likely diagnosis, so bring together site, film and histology.",
   "Facts that matter: adult, posterior mandible and ramus, soap-bubble radiolucency, expansion in both directions, root resorption, and reverse polarity.",
   "Cross out odontogenic keratocyst: it grows along the bone with little expansion, and its lining is parakeratinised rather than islands of palisaded cells.",
   "Cross out odontogenic myxoma: it can be multilocular, but it is composed of loose stellate cells in a mucoid stroma rather than these islands.",
   "Cross out CEOT: it typically shows driven-snow opacities and amyloid, neither of which is described here.",
   "The survivor explains everything: the cells mimic the enamel organ, they infiltrate through marrow, and so resection rather than curettage is the usual treatment."
  ]
 },
 teach: {
  prompt: "Using only radiographic appearance and a few patient details, explain how you would separate ameloblastoma, AOT, CEOT, odontoma, myxoma and cementoblastoma, and say why ameloblastoma needs a bigger operation than an odontoma.",
  model: "A multilocular lucency with root resorption in an adult posterior mandible suggests ameloblastoma, and a honeycomb pattern in a young adult suggests myxoma. A teenager with an unerupted canine and fine flecks suggests AOT, while mid-life specks of driven snow around an unerupted molar suggest CEOT. Tooth-like or dense, rimmed masses that block eruption suggest odontoma, while an opaque mass fused to a vital mandibular first molar root with a lucent rim is cementoblastoma. Conventional ameloblastoma is benign but infiltrates marrow beyond its visible edge, so curettage leaves tumour behind. An odontoma is a hamartoma with a capsule-like rim and shells out cleanly."
 },
 cards: [
  ["Ameloblastoma histological signature","Palisaded columnar cells with reverse polarity around stellate reticulum-like tissue"],
  ["WHO 2022 name for solid/multicystic ameloblastoma","Conventional ameloblastoma"],
  ["Only new odontogenic tumour entity in WHO 2022","Adenoid ameloblastoma"],
  ["Most common molecular change in conventional ameloblastoma","BRAF V600E"],
  ["Compound versus complex odontoma","Compound: tooth-like denticles, anterior maxilla. Complex: amorphous mass, posterior jaw"],
  ["AOT classic picture","Teen, often female; anterior maxilla, unerupted canine; flecks; lesion extends past the CEJ"],
  ["CEOT hallmarks","Driven-snow radiograph; amyloid; Liesegang rings; also called Pindborg tumour"],
  ["Stain for amyloid in CEOT","Congo red, apple-green birefringence"],
  ["Myxoma radiograph and tissue","Honeycomb or tennis racket; loose stellate cells in mucoid stroma"],
  ["Cementoblastoma","Opaque mass fused to a vital root with a lucent rim; often 3.6 or 4.6; pain"],
  ["Why conventional ameloblastoma recurs after curettage","Infiltrates marrow beyond the radiographic margin"]
 ],
 questions: [
  ["Excluding odontoma, which behaves as a hamartoma, the most common true odontogenic neoplasm is:","Ameloblastoma",["Adenomatoid odontogenic tumour","Calcifying epithelial odontogenic tumour","Cementoblastoma"],"Ameloblastoma is the most common odontogenic neoplasm in this sense. Odontoma is more frequently encountered overall, but it is a hamartomatous lesion."],
  ["The classic histological criterion for ameloblastoma is:","Palisaded columnar cells with nuclei polarised away from the basement membrane",["Sheets of polyhedral cells with amyloid and concentric calcifications","Duct-like structures and rosettes in a thin fibrous capsule","Loose stellate cells within an abundant mucoid stroma"],"Reverse polarity imitates the preameloblast of the enamel organ. Amyloid with concentric calcifications is CEOT, and rosettes with duct-like structures are AOT."],
  ["Under the WHO 2022 classification, a conventional ameloblastoma is the tumour formerly called:","Solid/multicystic ameloblastoma",["Extraosseous ameloblastoma","Metastasizing ameloblastoma","Ameloblastic carcinoma"],"The term 'conventional' replaced solid/multicystic. Follicular and plexiform are histological patterns inside it, not separate entities."],
  ["The only newly defined odontogenic tumour entity in the WHO 2022 classification is:","Adenoid ameloblastoma",["Ameloblastic fibro-odontoma","Keratocystic odontogenic tumour","Primordial odontogenic tumour"],"Adenoid ameloblastoma was added in 2022. Primordial odontogenic tumour dates from 2017, and ameloblastic fibro-odontoma was removed in 2017, mostly regarded as a developing odontoma, rather than added."],
  ["A 19-year-old has a unilocular radiolucency around unerupted 3.8. The enucleation specimen shows ameloblastic epithelium, with tumour islands infiltrating the fibrous wall. Which of the following best explains why this finding changes management?","Mural infiltration means tumour may remain in bone after simple enucleation",["Any ameloblastic lining indicates carcinoma requiring neck dissection","Tumour islands in the wall indicate a keratin-producing cyst","Infiltration means the lesion was a dentigerous cyst all along"],"Mural unicystic ameloblastoma can infiltrate beyond the lining and may need treatment as conventional ameloblastoma. It is still benign, so the carcinoma option is wrong."],
  ["A 40-year-old has a biopsy-proven conventional ameloblastoma of the mandible. Which of the following is the most appropriate treatment approach?","Surgical resection with a margin of clinically normal bone",["Enucleation and curettage alone, with review at five years","Radiotherapy alone as first-line treatment","Marsupialisation alone, with no later surgery"],"Conventional ameloblastoma infiltrates the marrow beyond the visible edge, so curettage has high recurrence. Radiotherapy is not the first-line treatment for this benign tumour."],
  ["A 16-year-old girl has a swelling of the anterior maxilla. A radiograph shows a corticated radiolucency with fine flecks around unerupted 1.3, extending past the cemento-enamel junction down the root. The most likely diagnosis is:","Adenomatoid odontogenic tumour",["Dentigerous cyst of the canine","Conventional ameloblastoma","Complex odontoma"],"Age, site, unerupted canine, flecks and extension past the CEJ are the classic picture. A dentigerous cyst attaches at the CEJ and does not contain calcified flecks."],
  ["A 42-year-old has a posterior mandibular lesion with an unerupted 3.7. Radiographs show a radiolucency with scattered 'driven-snow' opacities. The tissue most likely shows:","Amyloid and Liesegang ring calcifications among polyhedral cells",["Palisaded columnar cells with stellate reticulum-like areas","Loose stellate cells in mucoid stroma","Tooth-like structures of enamel and dentine in a fibrous capsule"],"This is CEOT, whose amyloid stains with Congo red and shows apple-green birefringence. Palisaded cells with stellate reticulum are ameloblastoma."],
  ["A 12-year-old's permanent 2.1 has not erupted, and primary 6.1 is retained. A radiograph shows a cluster of small tooth-like opacities above the unerupted 2.1, in a radiolucent rim. The most likely diagnosis is:","Compound odontoma",["Complex odontoma","Cementoblastoma","Calcifying epithelial odontogenic tumour"],"Tooth-like denticles in the anterior maxilla identify compound odontoma, a classic cause of failed eruption. Complex odontoma forms a shapeless mass, usually further back."],
  ["A 30-year-old has a multilocular radiolucency in the posterior mandible with straight bony septa like the strings of a tennis racket. The lesion has a gelatinous consistency at surgery. The most likely diagnosis is:","Odontogenic myxoma",["Odontogenic keratocyst","Adenomatoid odontogenic tumour","Compound odontoma"],"Thin straight septa and a gelatinous tissue are characteristic. Its loose matrix makes clean removal difficult, which contributes to recurrence."],
  ["A 19-year-old has dull pain from 4.6, which responds normally to pulp testing. A radiograph shows a round opaque mass fused to the root and surrounded by a thin radiolucent rim. The most likely diagnosis is:","Cementoblastoma",["Condensing osteitis","Hypercementosis","Complex odontoma"],"A vital mandibular first molar with a rimmed opaque mass attached to the root and with pain is classic. Condensing osteitis is linked to pulpal inflammation and has no lucent rim or fusion to the root."],
  ["A diagnosis of cementoblastoma on 3.6 has been confirmed. The most appropriate treatment is:","Surgical removal of the mass together with the involved tooth",["Root canal treatment of 3.6 with no surgery","Radiographic observation for ten years","Enucleation of the lucent rim with the mass left in place"],"The tumour is fused to the root and can recur if left. Root canal treatment does not address the tumour, because it is not of pulpal origin."],
  ["A 63-year-old has a sessile mass on the mandibular gingiva. Radiographs show no bone involvement, and biopsy shows ameloblastomatous epithelium. Which of the following is the most appropriate management approach?","Local excision of the extraosseous ameloblastoma with follow-up",["Segmental resection of the mandible with reconstruction","Palliative radiotherapy to the mass","Neck dissection and systemic chemotherapy"],"Extraosseous/peripheral ameloblastoma lacks the marrow infiltration that forces resection and has a low recurrence rate. Segmental resection would be overtreatment here."],
  ["An ameloblastoma is described as 'metastasizing' when it:","Spreads to distant sites, often lung, with benign histology",["Shows cytological malignancy in the primary tumour and nodes","Recurs locally after incomplete surgery","Arises from the lining of a dentigerous cyst"],"The definition depends on the metastasis while histology remains benign. Cytological malignancy instead indicates ameloblastic carcinoma."],
  ["Which of the following best explains why a radiographically localised conventional ameloblastoma can recur after careful curettage?","Tumour cells infiltrate marrow beyond the radiographic edge",["Its capsule is too thick to remove surgically","It seeds the bloodstream in nearly all patients","It transforms into carcinoma in most patients after surgery"],"It has no true capsule and tumour extends between the bony trabeculae, so the radiographic margin understates its extent. That justifies resection with a margin."]
 ]
};
