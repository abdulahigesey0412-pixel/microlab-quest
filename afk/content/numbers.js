/* AFK Quest: must-know numbers. Every value is taken from the verified node content in content/*.js
   (including the *z.js extension packs and micro-data.js); the node id is where it is taught.
   Fields: set name, prompt, value, node id, note. Figures that the content marks as disputed, or that
   two files state differently, are deliberately left out. */
window.NUMBERS = (window.NUMBERS || []).concat([

 /* ---------- Local anaesthetic doses (mg/kg) ---------- */
 ["LA doses (mg/kg)", "Canadian maximum dose of 2% lidocaine with epinephrine, healthy adult", "7 mg/kg", "m12-n02", "Capped at 500 mg. Canadian figure."],
 ["LA doses (mg/kg)", "Canadian maximum dose of 3% mepivacaine, healthy adult", "6.6 mg/kg", "m12-n02", "Capped at 400 mg."],
 ["LA doses (mg/kg)", "Canadian maximum dose of 4% prilocaine, healthy adult", "8 mg/kg", "m12-n02", "The cap in mg varies by source; the mg/kg figure does not."],
 ["LA doses (mg/kg)", "Canadian maximum dose of 0.5% bupivacaine, healthy adult", "2 mg/kg", "m12-n02", "US sources set a lower cap in mg (90 mg)."],
 ["LA doses (mg/kg)", "AAPD paediatric maximum for lidocaine and mepivacaine", "4.4 mg/kg", "m12-n04", "Lower than the adult lidocaine figure of 7 mg/kg."],
 ["LA doses (mg/kg)", "AAPD paediatric maximum for bupivacaine", "1.3 mg/kg", "m12-n04", "Bupivacaine is not recommended under 12 years in any case."],

 /* ---------- mg per cartridge ---------- */
 ["mg per cartridge", "Milligrams of lidocaine in one 1.8 mL cartridge of 2% lidocaine", "36 mg", "m12-n02", "2% = 20 mg/mL; 20 x 1.8 = 36."],
 ["mg per cartridge", "Milligrams of articaine in one 1.7 mL Canadian cartridge of 4% articaine", "68 mg", "m12-n02", "4% = 40 mg/mL; 40 x 1.7 = 68."],
 ["mg per cartridge", "Milligrams of articaine in one 1.8 mL cartridge of 4% articaine", "72 mg", "m12-n02", "Septanest in Canada is 1.7 mL, so 68 mg is the Canadian figure."],
 ["mg per cartridge", "Milligrams of mepivacaine in one 1.8 mL cartridge of 3% mepivacaine", "54 mg", "m12-n02", "3% plain mepivacaine suits short procedures."],
 ["mg per cartridge", "Milligrams of bupivacaine in one 1.8 mL cartridge of 0.5% bupivacaine", "9 mg", "m12-n02", "High lipid solubility lets it work at only 0.5%."],
 ["mg per cartridge", "Total milligram cap on lidocaine for any adult, whatever the weight (Canada)", "500 mg", "m12-n02", "Weight x 7 mg/kg, never above 500 mg."],

 /* ---------- Epinephrine limits ---------- */
 ["Epinephrine limits", "Epinephrine in one 1.8 mL cartridge of 1:100,000", "0.018 mg", "m12-n02", "1:100,000 = 0.01 mg/mL."],
 ["Epinephrine limits", "Epinephrine in one 1.7 mL cartridge of 1:200,000", "0.0085 mg", "m12-n02", "1:200,000 = 0.005 mg/mL."],
 ["Epinephrine limits", "Usual epinephrine ceiling per visit, healthy patient", "0.2 mg", "m12-n02", "A convention rather than a trial-proven limit."],
 ["Epinephrine limits", "Usual epinephrine ceiling per visit with significant cardiovascular disease", "0.04 mg", "m13-n05", "About two 1:100,000 cartridges."],
 ["Epinephrine limits", "Concentration of epinephrine 1:100,000 (mg/mL)", "0.01 mg/mL", "m12-n02", "A ratio is grams per mL: 1 g in 100,000 mL."],
 ["Epinephrine limits", "Concentration of epinephrine 1:50,000 (mg/mL)", "0.02 mg/mL", "m12-n02", "Reserved for haemostasis."],

 /* ---------- Cartridge counts (worked examples) ---------- */
 ["Cartridge counts", "Healthy 70 kg adult, 2% lidocaine 1:100,000 (1.8 mL): whole cartridges allowed by the lidocaine limit alone", "13", "m12-n02", "490 mg / 36 mg = 13.6, round down."],
 ["Cartridge counts", "Same 70 kg adult: true maximum once the 0.2 mg epinephrine ceiling is applied", "11", "m12-n02", "0.2 / 0.018 = 11.1, so epinephrine is the limit."],
 ["Cartridge counts", "Healthy 50 kg adult, 2% lidocaine 1:100,000 (1.8 mL): maximum whole cartridges", "9", "m12-n02", "350 mg / 36 mg = 9.7; epinephrine 0.162 mg stays under 0.2 mg."],
 ["Cartridge counts", "Healthy 60 kg adult, 4% articaine in 1.7 mL cartridges: maximum whole cartridges", "6", "m12-n02", "420 mg / 68 mg = 6.2."],
 ["Cartridge counts", "Significant cardiovascular disease, 1:100,000 epinephrine in 1.8 mL cartridges: maximum", "2", "m12-n02", "0.04 / 0.018 = 2.2."],
 ["Cartridge counts", "Significant cardiovascular disease, 1:200,000 epinephrine in 1.7 mL cartridges: maximum", "4", "m12-n02", "0.0085 mg each; 4 stays within 0.04 mg."],

 /* ---------- pH and pKa ---------- */
 ["pH and pKa values", "pKa of mepivacaine", "7.6", "m12-n01", "Lowest pKa of the four: more base at tissue pH."],
 ["pH and pKa values", "pKa of articaine", "7.8", "m12-n01", "About 28% base at pH 7.4, under 2% at pH 6."],
 ["pH and pKa values", "pKa of lidocaine", "7.9", "m12-n01", "Lower pKa, generally faster onset."],
 ["pH and pKa values", "pKa of bupivacaine", "8.1", "m12-n01", "Highest of the four listed."],
 ["pH and pKa values", "Normal tissue pH, against which LA pKa is compared", "7.4", "m12-n01", "Every injectable dental LA has a pKa above this."],
 ["pH and pKa values", "Critical pH of enamel", "about 5.5", "m08-n02", "Not a fixed constant: more calcium and phosphate lowers it."],
 ["pH and pKa values", "Critical pH of fluorapatite", "about 4.5", "m08-n02", "Why a fluoride-rich surface resists acid."],
 ["pH and pKa values", "Critical pH of root dentine and cementum (commonly quoted)", "6.2 to 6.7", "m08-n02", "Exposed roots dissolve under mild acid that spares enamel."],

 /* ---------- Drug timing ---------- */
 ["Drug timing", "Approximate pulpal anaesthesia from 3% mepivacaine plain", "20 to 40 minutes", "m12-n02", "Suits short procedures."],
 ["Drug timing", "Approximate pulpal anaesthesia from lidocaine or articaine with epinephrine", "60 to 90 minutes", "m12-n02", "Bupivacaine with epinephrine lasts longest after a block."],
 ["Drug timing", "Pulpal anaesthesia from 2% lidocaine without a vasoconstrictor", "about 5-10 minutes", "m12-n03", "Strong vasodilation; unsatisfactory alone."],
 ["Drug timing", "Interval between sublingual nitroglycerin doses (up to 3 doses)", "every 5 minutes", "m13-n04", "Withhold if systolic under 90 mmHg."],
 ["Drug timing", "Endocarditis prophylaxis is taken this long before the procedure", "30 to 60 minutes", "m13-n09", "Single dose (AHA 2021)."],
 ["Drug timing", "Nitrates are contraindicated if tadalafil was taken within", "48 hours", "m13-n04", "Sildenafil or vardenafil: within 24 hours."],

 /* ---------- Blood pressure lines (mmHg) ---------- */
 ["Blood pressure lines (mmHg)", "AHA normal adult blood pressure", "under 120 and under 80", "m03-n01", "AHA categories; Hypertension Canada uses its own thresholds."],
 ["Blood pressure lines (mmHg)", "AHA 'elevated' systolic range (diastolic under 80)", "120 to 129", "m03-n01", "A diastolic of 80 or more makes it stage 1 instead."],
 ["Blood pressure lines (mmHg)", "AHA stage 1 hypertension", "130 to 139 or 80 to 89", "m03-n01", "Either number qualifies."],
 ["Blood pressure lines (mmHg)", "AHA stage 2 hypertension", "140 or more or 90 or more", "m03-n01", "Either number qualifies."],
 ["Blood pressure lines (mmHg)", "Little and Falace line at which elective dental care is deferred and the patient referred", "180/110 or above", "m13-n01", "The line this course uses."],
 ["Blood pressure lines (mmHg)", "Severe hypertension in pregnancy, needing same-day obstetric assessment", "160/110 or above", "m13-n08", "140/90 or above is hypertension in pregnancy."],
 ["Blood pressure lines (mmHg)", "Hypertension Canada diagnostic threshold for automated office readings", "135/85", "m03-n01", "140/90 for non-automated office readings."],

 /* ---------- Lab thresholds ---------- */
 ["Lab thresholds", "Diabetes Canada definition of hypoglycaemia (treated patient with symptoms)", "below 4.0 mmol/L", "m13-n02", "Give 15 g of fast carbohydrate and retest in 15 minutes."],
 ["Lab thresholds", "Glucose typical of a severe hypoglycaemic episode", "below 2.8 mmol/L", "m13-n02", "Severe episodes need another person's help."],
 ["Lab thresholds", "Diabetes Canada HbA1c target for most adults", "7.0% or lower", "m13-n06", "HbA1c reflects the previous two to three months."],
 ["Lab thresholds", "Usual warfarin target INR for most indications", "2.0 to 3.0", "m03-n06", "1.0 is normal."],
 ["Lab thresholds", "North American INR limit for simple extractions without stopping warfarin", "3.5 or below", "m11-n08", "Use local haemostatic measures."],
 ["Lab thresholds", "WHO anaemia line for haemoglobin in men", "below 130 g/L", "m05-n07", "Women (non-pregnant): below 120 g/L."],
 ["Lab thresholds", "Protective anti-HBs level after the hepatitis B vaccine series", "at least 10 IU/L", "m14-n02", "Below this, a second series is given."],

 /* ---------- Blood count lines (x 10⁹/L) ---------- */
 ["Blood count lines (x 10⁹/L)", "Usual adult reference range for white cells", "4 to 11", "m05-n07", "Read the differential, not the total."],
 ["Blood count lines (x 10⁹/L)", "Usual adult reference range for neutrophils (ANC)", "about 2 to 7.5", "m05-n07", "ANC = white count x neutrophil fraction."],
 ["Blood count lines (x 10⁹/L)", "ANC below which neutropenia is defined", "below 1.5", "m05-n07", "Agranulocytosis is near zero, usually below 0.5."],
 ["Blood count lines (x 10⁹/L)", "ANC usually below which agranulocytosis is described", "below 0.5", "m05-n07", "Usually drug-induced; necrotic ulcers without a red rim."],
 ["Blood count lines (x 10⁹/L)", "ANC below which this course defers invasive care and consults", "below 1.0", "m05-n07", "1.0 x 10⁹/L = 1000/mm³."],
 ["Blood count lines (x 10⁹/L)", "Usual adult reference range for platelets", "150 to 400", "m05-n07", "Reference range only; the surgical line is treated elsewhere."],

 /* ---------- Emergency drug doses ---------- */
 ["Emergency drug doses", "Maximum single IM dose of epinephrine 1 mg/mL in anaphylaxis", "0.5 mg", "m13-n03", "0.01 mg/kg up to this maximum, mid-anterolateral thigh."],
 ["Emergency drug doses", "Epinephrine autoinjector strength typically used above 30 kg", "0.3 mg", "m13-n03", "The smaller device is 0.15 mg."],
 ["Emergency drug doses", "Smaller epinephrine autoinjector strength", "0.15 mg", "m13-n03", "CSACI: a 0.5 mg device may be considered at 45 kg or more."],
 ["Emergency drug doses", "Glucagon for an unconscious hypoglycaemic patient (IM or SC)", "1 mg", "m13-n02", "Nothing by mouth; call emergency services."],
 ["Emergency drug doses", "Oral glucose or sucrose for a conscious hypoglycaemic patient", "15 g", "m13-n02", "20 g if the episode is severe but the patient is conscious."],
 ["Emergency drug doses", "One metered sublingual nitroglycerin spray", "0.4 mg", "m13-n04", "Canadian tablets are 0.3 mg or 0.6 mg."],
 ["Emergency drug doses", "Aspirin chewed for suspected myocardial infarction", "162 to 325 mg", "m13-n04", "Preferably non-enteric-coated."],
 ["Emergency drug doses", "IM midazolam for a seizure, given by a trained provider, patient above 40 kg", "10 mg", "m13-n02", "5 mg for 13 to 40 kg; call EMS if a seizure lasts 5 minutes."],

 /* ---------- Antibiotic regimens ---------- */
 ["Antibiotic regimens", "Adult endocarditis prophylaxis: oral amoxicillin, single dose", "2 g", "m13-n09", "Only for the highest-risk heart conditions (AHA 2021)."],
 ["Antibiotic regimens", "Adult prophylaxis in penicillin allergy: oral azithromycin or clarithromycin", "500 mg", "m13-n09", "Cephalexin 2 g is an option unless the allergy was anaphylaxis, angioedema or urticaria."],
 ["Antibiotic regimens", "Adult prophylaxis in penicillin allergy: oral doxycycline", "100 mg", "m13-n09", "Single dose, 30 to 60 minutes before."],
 ["Antibiotic regimens", "Adult prophylaxis with no oral route: cefazolin or ceftriaxone IM/IV", "1 g", "m13-n09", "Not after anaphylaxis, angioedema or urticaria with penicillin."],
 ["Antibiotic regimens", "First-line adult regimen for a spreading odontogenic infection: amoxicillin", "500 mg three times daily", "m11-n05", "3-7 days (ADA 2019); preferred over penicillin V."],
 ["Antibiotic regimens", "Alternative first-line regimen: penicillin V", "500 mg four times daily", "m11-n05", "3-7 days."],
 ["Antibiotic regimens", "Clindamycin regimen in penicillin allergy with anaphylaxis, angioedema or hives", "300 mg four times daily", "m11-n05", "Azithromycin is the other listed option."],
 ["Antibiotic regimens", "Sub-antimicrobial doxycycline used to inhibit collagenase", "20 mg twice daily", "m11-n05", "Acts on matrix metalloproteinases, not bacteria."],

 /* ---------- Analgesic and sedation doses ---------- */
 ["Analgesic and sedation doses", "Usual adult dental dose of ibuprofen", "400 mg every 6 h", "m11-n04", "1600 mg/day is a prescription-level dose."],
 ["Analgesic and sedation doses", "Canadian non-prescription daily maximum of ibuprofen", "1200 mg", "m11-n04", "For up to 7 days."],
 ["Analgesic and sedation doses", "Daily maximum of acetaminophen, healthy adult", "4 g", "m11-n04", "Lower in liver disease or heavy drinking."],
 ["Analgesic and sedation doses", "RCDSO adult oral triazolam range for minimal sedation (appointments of 2 hours or less)", "0.125-0.25 mg", "m11-n07", "Reduce in elderly or compromised patients."],
 ["Analgesic and sedation doses", "Initial IV flumazenil dose to reverse benzodiazepine oversedation", "0.2 mg", "m11-n07", "Given over 15 seconds; watch for resedation."],
 ["Analgesic and sedation doses", "Usual maximum total dose of flumazenil", "1 mg", "m11-n07", "Further small doses about every minute up to this."],

 /* ---------- Fluoride (ppm) ---------- */
 ["Fluoride (ppm)", "Standard toothpaste in Canada", "about 1000 ppm", "m08-n02", "Health Canada monograph range 850 to 1150 ppm."],
 ["Fluoride (ppm)", "Upper end of standard toothpaste strength used outside Canada", "about 1500 ppm", "m08-n02", "Canada stays near 1000 ppm."],
 ["Fluoride (ppm)", "High-fluoride (1.1% NaF) prescription toothpaste", "5000 ppm", "m08-n02", "High risk, age 6 and over."],
 ["Fluoride (ppm)", "5% sodium fluoride varnish", "22,600 ppm", "m08-n02", "The professional fluoride recommended under age 6."],
 ["Fluoride (ppm)", "1.23% APF gel", "12,300 ppm", "m08-n02", "Professional trays; not under age 6."],
 ["Fluoride (ppm)", "38% silver diamine fluoride", "about 44,800 ppm", "m08-n02", "Arrests cavitated lesions but stains them black."],

 /* ---------- Fluoride doses and water levels ---------- */
 ["Fluoride doses and water levels", "Health Canada optimal fluoride level for community water", "0.7 mg/L", "m14-n05", "PHAC uses the same figure."],
 ["Fluoride doses and water levels", "Health Canada maximum acceptable concentration of fluoride in drinking water", "1.5 mg/L", "m14-n05", "A safety ceiling set to prevent moderate fluorosis, not a target."],
 ["Fluoride doses and water levels", "Water level near which very mild fluorosis already appears in some children", "about 1 mg/L", "m08-n02", "Fluorosis rises with fluoride swallowed while enamel forms."],
 ["Fluoride doses and water levels", "Probably toxic dose (PTD) of fluoride, the threshold for hospital care", "5 mg/kg", "m08-n02", "Estimate the dose in mg F per kg."],
 ["Fluoride doses and water levels", "Fluoride dose that could be fatal for a small child", "about 15 mg/kg", "m08-n02", "Three times the PTD."],
 ["Fluoride doses and water levels", "Fluoride in 1 g of a 1000 ppm toothpaste", "1 mg", "m08-n02", "1000 ppm = 1 mg/g, for ingestion arithmetic."],

 /* ---------- Eruption ages (years) ---------- */
 ["Eruption ages (years)", "Eruption of the permanent first molars (both arches)", "6-7", "m06-n08", "Erupts distal to E without replacing a tooth."],
 ["Eruption ages (years)", "Eruption of the maxillary permanent central incisor", "7-8", "m06-n08", "The mandibular central comes earlier, at 6-7."],
 ["Eruption ages (years)", "Eruption of the maxillary permanent lateral incisor", "8-9", "m06-n08", "Wheeler's chronology table."],
 ["Eruption ages (years)", "Eruption of the mandibular permanent canine", "9-10", "m06-n08", "Before the premolars in the mandible (6-1-2-3-4-5-7)."],
 ["Eruption ages (years)", "Eruption of the maxillary permanent canine", "11-12", "m06-n08", "Late because it travels furthest; often impacted."],
 ["Eruption ages (years)", "Eruption of the maxillary second permanent molar", "12-13", "m06-n08", "Mandibular second molar: 11-13."],
 ["Eruption ages (years)", "Eruption of the third molars", "17-21", "m06-n08", "Wheeler's chronology table."],

 /* ---------- Primary eruption ages (months) ---------- */
 ["Primary eruption ages (months)", "Mandibular primary central incisor, usually the first tooth", "6 to 10", "m06-n08", "Order A B D C E."],
 ["Primary eruption ages (months)", "Maxillary primary central incisor", "8 to 12", "m06-n08", "Lower centrals lead the uppers."],
 ["Primary eruption ages (months)", "Mandibular primary lateral incisor", "10 to 16", "m06-n08", "The upper lateral (9 to 13) leads the lower."],
 ["Primary eruption ages (months)", "Maxillary primary first molar", "13 to 19", "m06-n08", "First molars arrive at about the same time in both arches."],
 ["Primary eruption ages (months)", "Mandibular primary canine", "17 to 23", "m06-n08", "Upper canine: 16 to 22 months."],
 ["Primary eruption ages (months)", "Maxillary primary second molar", "25 to 33", "m06-n08", "All 20 present by about 2.5 to 3 years."],

 /* ---------- Radiation doses and limits ---------- */
 ["Radiation doses and limits", "Average natural background radiation in Canada per year", "1.8 mSv", "m09-n02", "Radon is its largest single contributor."],
 ["Radiation doses and limits", "Safety Code 30 worker limit, averaged over five years (per year)", "20 mSv", "m09-n02", "No more than 50 mSv in any one year."],
 ["Radiation doses and limits", "Safety Code 30 maximum for a worker in any single year", "50 mSv", "m09-n02", "The five-year average must still be 20 mSv a year."],
 ["Radiation doses and limits", "Annual dose limit for the public", "1 mSv", "m09-n02", "Safety Code 30."],
 ["Radiation doses and limits", "Effective dose limit for the rest of a pregnancy once a worker declares it", "4 mSv", "m09-n02", "Safety Code 30."],
 ["Radiation doses and limits", "Four bitewings taken with a round cone", "about 38 microsieverts", "m09-n02", "About 5 microsieverts with rectangular collimation and fast receptors."],
 ["Radiation doses and limits", "Panoramic radiograph on typical digital units", "14 to 24 microsieverts", "m09-n04", "Small-field CBCT can approach this; large fields far exceed it."],

 /* ---------- Periodontal staging cut-offs (mm) ---------- */
 ["Periodontal staging cut-offs (mm)", "Worst interdental CAL in stage I periodontitis", "1-2 mm", "m19-n03", "2017 classification."],
 ["Periodontal staging cut-offs (mm)", "Worst interdental CAL in stage II periodontitis", "3-4 mm", "m19-n03", "Bone loss still in the coronal third."],
 ["Periodontal staging cut-offs (mm)", "Worst interdental CAL in stage III and IV periodontitis", "≥5 mm", "m19-n03", "Tooth loss and complexity separate III from IV."],
 ["Periodontal staging cut-offs (mm)", "Maximum probing depth allowed in stage II (complexity)", "≤5 mm", "m19-n03", "Stage I allows ≤4 mm."],
 ["Periodontal staging cut-offs (mm)", "Probing depth that marks stage III complexity", "≥6 mm", "m19-n03", "With vertical loss ≥3 mm or class II/III furcation."],
 ["Periodontal staging cut-offs (mm)", "Bone or CAL loss over 5 years that makes it grade C (direct evidence)", "2 mm or more", "m19-n03", "Under 2 mm is grade B; none is grade A."],
 ["Periodontal staging cut-offs (mm)", "Probing depth of a 'closed' pocket after therapy (if it does not bleed)", "4 mm or less", "m19-n05", "Endpoint: no bleeding pocket over 4 mm, none of 6 mm or more."],
 ["Periodontal staging cut-offs (mm)", "Intrabony defect depth for which S3 recommends regeneration", "3 mm or deeper", "m19-n06", "Residual pockets of 6 mm or more go to access flaps."],

 /* ---------- Periodontal cut-offs (%) ---------- */
 ["Periodontal cut-offs (%)", "Bleeding on probing in periodontal health", "under 10%", "m19-n03", "With probing depths of 3 mm or less."],
 ["Periodontal cut-offs (%)", "BOP range for localised gingivitis", "10 to 30%", "m19-n03", "Depths 3 mm or less, no attachment loss."],
 ["Periodontal cut-offs (%)", "BOP above which gingivitis is generalised", "above 30%", "m19-n03", "2017 classification."],
 ["Periodontal cut-offs (%)", "Radiographic bone loss in stage I", "under 15%", "m19-n03", "Coronal third."],
 ["Periodontal cut-offs (%)", "Radiographic bone loss in stage II", "15-33%", "m19-n03", "Still the coronal third."],
 ["Periodontal cut-offs (%)", "Share of pockets closed after step 2 instrumentation in the S3 evidence", "about 74%", "m19-n05", "Mean PD reduction about 1.7 mm."],

 /* ---------- Implant and prosthodontic dimensions (mm) ---------- */
 ["Implant and prosthodontic dimensions (mm)", "Minimum distance from an implant to an adjacent tooth", "1.5 mm", "m18-n02", "So a 4 mm implant between teeth needs a 7 mm gap."],
 ["Implant and prosthodontic dimensions (mm)", "Minimum distance between two implants", "3 mm", "m18-n02", "Closer, and bone loss zones merge and the papilla is lost."],
 ["Implant and prosthodontic dimensions (mm)", "Safety zone from an implant to the inferior alveolar canal", "2 mm", "m18-n02", "Protects the nerve from drill overshoot."],
 ["Implant and prosthodontic dimensions (mm)", "Gap needed for a 4 mm implant between two teeth", "7 mm", "m18-n02", "1.5 + 4 + 1.5."],
 ["Implant and prosthodontic dimensions (mm)", "Classic success criterion: maximum vertical bone loss per year after the first year", "under 0.2 mm", "m18-n01", "Some first-year remodelling is physiological."],
 ["Implant and prosthodontic dimensions (mm)", "Usual freeway space at the premolars", "2 to 4 mm", "m17-n02", "VDO = rest vertical dimension minus freeway space."],
 ["Implant and prosthodontic dimensions (mm)", "Minimum height from gingival margin to raised floor of mouth for a lingual bar", "at least 8 mm", "m17-n05", "Otherwise use a lingual plate."],
 ["Implant and prosthodontic dimensions (mm)", "Undercut engaged by a cast cobalt-chromium clasp", "0.25 mm", "m17-n05", "Cast gold 0.5 mm; wrought wire 0.75 mm."],

 /* ---------- Restorative preparation dimensions (mm) ---------- */
 ["Restorative preparation dimensions (mm)", "Pulpal floor depth of an amalgam preparation", "about 1.5 to 2 mm", "m15-n02", "Just into dentine, for bulk."],
 ["Restorative preparation dimensions (mm)", "Maximum thickness of a composite increment", "2 mm or less", "m15-n03", "Oblique increments, each fully cured."],
 ["Restorative preparation dimensions (mm)", "Depth bulk-fill composites are marketed to cure at once", "4 to 5 mm", "m15-n03", "Depth of cure varies by product."],
 ["Restorative preparation dimensions (mm)", "Cervical reduction for a porcelain veneer", "about 0.3 to 0.5 mm", "m15-n05", "Mid-facial 0.5 to 0.7 mm; stay in enamel."],
 ["Restorative preparation dimensions (mm)", "Occlusal reduction for a metal-ceramic crown", "1.5-2.0 mm", "m16-n01", "Facial 1.2-1.5 mm; lingual metal 0.5 mm."],
 ["Restorative preparation dimensions (mm)", "Occlusal reduction for a full metal crown", "1.0-1.5 mm", "m16-n01", "Axial 0.5 mm, chamfer."],
 ["Restorative preparation dimensions (mm)", "Minimum axial wall height on molars", "4 mm", "m16-n01", "About 3 mm on incisors and premolars."],
 ["Restorative preparation dimensions (mm)", "Gutta-percha left as an apical seal under a post", "at least 4-5 mm", "m16-n04", "Even if the post ends up shorter."],

 /* ---------- Orthodontic norms (mm) ---------- */
 ["Orthodontic norms (mm)", "Normal overjet", "about 2 to 3 mm", "m22-n01", "Horizontal overlap."],
 ["Orthodontic norms (mm)", "Leeway space per side in the mandible (Proffit)", "about 2.5 mm", "m07-n03", "Larger than in the maxilla."],
 ["Orthodontic norms (mm)", "Leeway space per side in the maxilla (Proffit)", "1.5 mm", "m07-n03", "Taken up by first molar drift unless held."],
 ["Orthodontic norms (mm)", "Tanaka-Johnston: lower canine and premolars per quadrant = half the four lower incisors plus", "10.5 mm", "m22-n03", "Maxillary: plus 11.0 mm."],
 ["Orthodontic norms (mm)", "Crowding that can usually be resolved without extraction (Proffit's rough guide)", "up to about 4 mm", "m22-n03", "10 mm or more almost always needs extractions."],
 ["Orthodontic norms (mm)", "Midline diastema that usually closes as laterals and canines erupt", "up to about 2 mm", "m22-n04", "The 'ugly duckling' stage."],

 /* ---------- Surgical, endodontic and injection distances (mm) ---------- */
 ["Surgical and endodontic distances (mm)", "Depth at which bone is contacted in an inferior alveolar nerve block", "20 to 25 mm", "m02-n10", "Withdraw about 1 mm, aspirate, deposit."],
 ["Surgical and endodontic distances (mm)", "Height of IANB needle entry above the occlusal plane", "6 to 10 mm", "m02-n10", "Lateral to the pterygomandibular raphe, from the opposite premolars."],
 ["Surgical and endodontic distances (mm)", "Length of a long dental needle used for deep blocks", "about 32 mm", "m12-n02", "Short needle about 20 mm; never insert to the hub."],
 ["Surgical and endodontic distances (mm)", "Maximum assisted opening below which DC/TMD calls it limited opening", "less than 40 mm", "m02-n02", "Includes vertical incisal overlap; normal is about 40 to 55 mm."],
 ["Surgical and endodontic distances (mm)", "Interincisal opening defining severe trismus, a referral trigger (Hupp)", "under 10 mm", "m02-n06", "Signals secondary-space involvement and a threatened airway."],
 ["Surgical and endodontic distances (mm)", "Usual working length short of the radiographic apex", "0.5 to 1 mm", "m20-n03", "The end point is the apical constriction, short of the foramen."],
 ["Surgical and endodontic distances (mm)", "Root tip resected in apical surgery", "about 3 mm", "m20-n08", "Removes about 98% of apical ramifications."],

 /* ---------- Material properties (%) ---------- */
 ["Material properties (%)", "Mineral content of enamel by weight", "about 96%", "m08-n02", "Carbonated hydroxyapatite."],
 ["Material properties (%)", "Mineral content of dentine by volume", "about 50%", "m08-n04", "About 30% organic and 20% water by volume."],
 ["Material properties (%)", "Usual phosphoric acid concentration for etching", "about 37%", "m08-n04", "Range 30 to 40%, for 15 to 30 seconds."],
 ["Material properties (%)", "Polymerisation shrinkage of current composites by volume", "about 2 to 6%", "m08-n04", "More in low-filler flowables."],
 ["Material properties (%)", "Volume shrinkage of pure methyl methacrylate monomer on polymerising", "about 21%", "m08-n09", "Dough shrinks only about 6-7%."],
 ["Material properties (%)", "Copper content of high-copper amalgam alloys", "roughly 12-30%", "m08-n05", "Conventional alloys hold under about 6%."],
 ["Material properties (%)", "Noble metal content of a high noble alloy", "at least 60%", "m08-n08", "With at least 40% gold."],

 /* ---------- Solution concentrations (%) ---------- */
 ["Solution concentrations (%)", "EDTA used as a chelator in endodontics", "17%", "m20-n04", "Softens the canal wall; does not dissolve tissue."],
 ["Solution concentrations (%)", "Chlorhexidine as an endodontic irrigant", "2%", "m20-n04", "Binds dentine; does not dissolve tissue."],
 ["Solution concentrations (%)", "Usual range of sodium hypochlorite as an endodontic irrigant", "roughly 0.5 to 6%", "m20-n04", "The only common irrigant that dissolves organic tissue."],
 ["Solution concentrations (%)", "Sodium hypochlorite used to disinfect gutta-percha cones at the chair", "5.25%", "m20-n04", "About 1 minute, then rinse off crystals."],
 ["Solution concentrations (%)", "Chlorhexidine rinse advised after dental trauma", "0.12%", "m20-n06", "With a soft diet."],
 ["Solution concentrations (%)", "Neutral-buffered formalin for biopsy fixation", "10%", "m21-n09", "At least about 10 times the specimen volume."],
 ["Solution concentrations (%)", "Silver diamine fluoride", "38%", "m23-n02", "Arrests cavitated lesions without drilling."],
 ["Solution concentrations (%)", "Salt concentration S. aureus grows in (basis of mannitol salt agar)", "7.5–10% NaCl", "m04-n04", "Salt tolerance selects staphylococci from mixed flora."],

 /* ---------- Epidemiology and statistics ---------- */
 ["Epidemiology and statistics", "Hepatitis B transmission risk after a needlestick from an HBsAg-positive source, non-immune worker", "6 to 30%", "m14-n02", "Depends mainly on whether the source is HBeAg-positive."],
 ["Epidemiology and statistics", "HIV transmission risk per needlestick from an infected source", "about 0.3%", "m14-n02", "PEP within hours, no later than 72 hours."],
 ["Epidemiology and statistics", "Share of Canadians with access to community water fluoridation (PHAC 2022)", "about 38.8%", "m14-n05", "From 0% in some regions to 73.2% in Ontario."],
 ["Epidemiology and statistics", "Reduction in decay linked to community water fluoridation (PHAC)", "about 25%", "m14-n05", "In children and adults."],
 ["Epidemiology and statistics", "Prevented fraction of fluoride varnish in permanent teeth (Cochrane 2013)", "about 43%", "m14-n05", "About 37% in primary teeth."],
 ["Epidemiology and statistics", "Canadian children aged 6-11 with caries experience (CHMS)", "about 57%", "m08-n01", "The 2022-2024 cycle found the same figure."],
 ["Epidemiology and statistics", "Canadians with no dental insurance (CHMS 2007-2009)", "32%", "m14-n08", "62% private, 6% public."],
 ["Epidemiology and statistics", "Share of a normal distribution within 2 standard deviations", "95%", "m14-n03", "About 68% within 1 SD."],
 ["Epidemiology and statistics", "Statistical power usually set for a trial", "80%", "m14-n04", "Power = 1 minus beta."],
 ["Epidemiology and statistics", "Share of strokes that are ischaemic", "about 85%", "m05-n04", "About 15% are haemorrhagic."],

 /* ---------- Basic life support figures ---------- */
 ["Basic life support figures", "Adult chest compression rate", "100 to 120 per minute", "m13-n04", "AHA 2025."],
 ["Basic life support figures", "Adult chest compression depth", "5 to 6 cm", "m13-n04", "Recoil lets the heart refill."],
 ["Basic life support figures", "Compression depth in an infant", "about 4 cm", "m13-n04", "One third of chest depth; about 5 cm in a child."],
 ["Basic life support figures", "Compression-ventilation ratio for a child with two rescuers", "15:2", "m13-n04", "30:2 for adults and for one rescuer."],
 ["Basic life support figures", "Maximum time for the pulse and breathing check", "no more than 10 seconds", "m13-n04", "Blood flow falls quickly during pauses."],
 ["Basic life support figures", "Rescue breathing rate for an adult who has a pulse", "1 breath every 6 seconds", "m13-n04", "Every 5 to 6 seconds was older teaching."],

 /* ---------- Paediatric doses (mg/kg) ---------- */
 ["Paediatric doses (mg/kg)", "Child endocarditis prophylaxis: oral amoxicillin", "50 mg/kg", "m13-n09", "Single dose 30 to 60 minutes before."],
 ["Paediatric doses (mg/kg)", "Child prophylaxis in penicillin allergy: azithromycin or clarithromycin", "15 mg/kg", "m13-n09", "Adult dose 500 mg."],
 ["Paediatric doses (mg/kg)", "Child prophylaxis with doxycycline, under 45 kg", "2.2 mg/kg", "m13-n09", "Over 45 kg: 100 mg."],
 ["Paediatric doses (mg/kg)", "IM epinephrine 1 mg/mL in anaphylaxis", "0.01 mg/kg", "m13-n03", "A 20 kg child gets 0.2 mg (0.2 mL)."],
 ["Paediatric doses (mg/kg)", "AAPD paediatric maximum for articaine", "7 mg/kg", "m12-n04", "Not recommended under 4 years."],
 ["Paediatric doses (mg/kg)", "IV methylene blue for prilocaine-induced methaemoglobinaemia", "1 to 2 mg/kg", "m12-n04", "Caution in G6PD deficiency."],

 /* ---------- Paediatric age limits ---------- */
 ["Paediatric age limits", "Age under which articaine is not recommended", "4 years", "m12-n04", "Whatever the epinephrine ratio."],
 ["Paediatric age limits", "Age under which bupivacaine is not recommended", "12 years", "m12-n04", "Warn about lip biting with long soft-tissue anaesthesia."],
 ["Paediatric age limits", "Age under which topical benzocaine is contraindicated", "2 years", "m12-n04", "Methaemoglobinaemia risk."],
 ["Paediatric age limits", "Age from which 5000 ppm fluoride toothpaste may be used for high-risk patients", "6 years", "m08-n02", "Not for young children who swallow paste."],
 ["Paediatric age limits", "Age under which an adult brushes with a rice-grain amount only if the child is at risk", "3 years", "m08-n02", "Otherwise a brush moistened with water (CDA, Health Canada)."],
 ["Paediatric age limits", "Age under which child AED pads are used", "8 years", "m13-n04", "Use adult pads if none are available."],

 /* ---------- Infection control parameters ---------- */
 ["Infection control parameters", "Gravity (wrapped) steam sterilisation cycle", "121 C for 30 minutes", "m14-n01", "Manufacturer's instructions govern."],
 ["Infection control parameters", "Pre-vacuum steam cycle at the lower temperature", "132 C for 4 minutes", "m14-n01", "Or 135 C for 3 minutes."],
 ["Infection control parameters", "Dry heat cycle at 160 C", "160 C for 120 minutes", "m14-n01", "Slow, but does not rust carbon steel."],
 ["Infection control parameters", "Dry heat cycle at 170 C", "170 C for 60 minutes", "m14-n01", "Spore test organism: Bacillus atrophaeus."],
 ["Infection control parameters", "Unsaturated chemical vapour (chemiclave) cycle", "about 132 C for 20 minutes", "m14-n01", "Rejected in Ontario and Quebec."],
 ["Infection control parameters", "Operating temperature of ethylene oxide gas sterilisation", "about 37 to 63 C", "m14-n01", "Lowest-temperature method; a hospital method."],
 ["Infection control parameters", "CDC water quality target for non-surgical dental unit water", "500 CFU/mL or fewer", "m14-n01", "Heterotrophic bacteria."],
 ["Infection control parameters", "NIOSH nitrous oxide exposure limit during administration", "25 ppm", "m14-n02", "Time-weighted average."],

 /* ---------- Follow-up and intervals ---------- */
 ["Follow-up and intervals", "EFP S3 range for supportive periodontal care", "3 to 12 months", "m19-n08", "Most start at about 3 months and extend if stable."],
 ["Follow-up and intervals", "ADA/FDA bitewing interval for a low-risk adult", "24 to 36 months", "m09-n02", "Risk-based, not routine."],
 ["Follow-up and intervals", "Duration of exposed bone required for a diagnosis of MRONJ", "more than 8 weeks", "m13-n10", "With antiresorptive exposure and no jaw radiation or metastasis."],
 ["Follow-up and intervals", "Time after removing the cause by which a traumatic ulcer should have healed, or biopsy", "two weeks", "m10-n03", "Persistence demands tissue."],
 ["Follow-up and intervals", "Length of an HIV post-exposure prophylaxis course", "28 days", "m14-n02", "Started within hours, no later than 72 hours."],
 ["Follow-up and intervals", "Ideal window for hepatitis B immunoglobulin in an unvaccinated exposed worker", "within 48 hours", "m14-n02", "No later than 7 days."],
 ["Follow-up and intervals", "Prednisone dose and duration presumed to suppress the adrenal axis", "20 mg/day for 3 weeks or longer", "m13-n06", "Or a Cushingoid appearance."],

 /* ---------- Dental trauma timing (IADT) ---------- */
 ["Dental trauma timing (IADT)", "Dry time after which most PDL cells of an avulsed tooth are non-viable", "30 minutes", "m20-n06", "IADT 2020."],
 ["Dental trauma timing (IADT)", "Dry time after which the PDL is treated as dead whatever the medium", "60 minutes", "m21-n06", "Still replant: it preserves bone."],
 ["Dental trauma timing (IADT)", "Splint time after avulsion, extrusion or (if needed) subluxation", "2 weeks", "m20-n06", "Passive, flexible splint."],
 ["Dental trauma timing (IADT)", "Splint time after lateral luxation, root fracture or alveolar fracture", "4 weeks", "m20-n06", "Root fracture in the cervical third: up to 4 months."],
 ["Dental trauma timing (IADT)", "Splint time for a root fracture in the cervical third", "up to 4 months", "m20-n06", "Necrosis usually affects the coronal segment only."],
 ["Dental trauma timing (IADT)", "Time to rehydrate a crown fragment in water or saline before bonding", "about 20 min", "m20-n06", "Then bond the fragment."],
 ["Dental trauma timing (IADT)", "Minimum period of yearly follow-up after replanting an avulsed tooth", "at least 5 years", "m21-n06", "After reviews at 2 wk, 4 wk, 3 mo, 6 mo and 1 yr."]
]);
