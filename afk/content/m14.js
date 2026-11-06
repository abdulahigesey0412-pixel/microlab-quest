/* Module m14: Infection control, evidence, prevention, ethics & law. Serves NDEB KSAs 13, 14, 16, 38, 40-47.
   References: Miller Infection Control; RCDSO IPAC Standard (2018) and Recordkeeping Guidelines (2019); CDSA IPAC Standard (2023);
   Ordre des dentistes du Quebec infection-control guideline; Fletcher Clinical Epidemiology; Burt & Eklund; Limeback;
   PHAC State of Community Water Fluoridation (2022); ACD Ethics Handbook; Ozar & Sokol; Picard & Robertson; PIPEDA; PHIPA;
   Quinonez Politics of Dental Care; Canadian Dental Care Plan (canada.ca, checked Nov 2026). */
window.CONTENT = window.CONTENT || {};

window.CONTENT["m14-n01"] = {
 understand: `
 <p><b>What you must do to an instrument depends on what it touches and what could survive on it.</b> Microbes form a ladder of resistance. Bacterial <b>spores</b> are hardest to kill, then mycobacteria, non-enveloped viruses, fungi, vegetative bacteria and enveloped viruses. <b>Sterilisation</b> destroys all of them. <b>Disinfection</b> kills pathogens but not reliably high numbers of spores. <b>Cleaning</b> always comes first, because blood and debris shield microbes from steam and inactivate chemicals.</p>
 <p><b>The Spaulding classification</b> matches risk to process.</p>
 <div class="tscroll"><table><tr><th>Class</th><th>Contact</th><th>Examples</th><th>Process</th></tr>
 <tr><td>Critical</td><td>Penetrates soft tissue or bone</td><td>Forceps, scalers, surgical burs</td><td>Clean, sterilise</td></tr>
 <tr><td>Semi-critical</td><td>Mucosa or non-intact skin</td><td>Mirrors, condensers, handpieces</td><td>Clean, heat-sterilise if heat-tolerant</td></tr>
 <tr><td>Non-critical</td><td>Intact skin only</td><td>Tube head, BP cuff</td><td>Clean, low-level disinfection</td></tr></table></div>
 <p><b>The workflow runs one way, dirty to clean:</b> contain, clean (ultrasonic or washer rather than hand scrubbing, which risks sharps injury), rinse, dry, inspect, package, sterilise, dry, store covered, and log.</p>
 <p><b>Why these cycles?</b> Moist heat denatures protein far more efficiently than dry heat. Pressure only allows steam to get hotter. Trapped air creates cold spots, so overloading and poor packaging are the commonest causes of failure. Standard steam cycles are 121 C for 30 minutes (gravity, wrapped), or 132 C for 4 minutes or 135 C for 3 minutes (dynamic air removal, pre-vacuum). The manufacturer's instructions govern. Dry heat (160 C for 120 minutes, 170 C for 60 minutes) is slow but does not rust carbon steel. Unsaturated chemical vapour (the chemiclave) runs at about 132 C for 20 minutes. <b>Acceptable methods are provincial.</b> Ontario (RCDSO) accepts steam or dry heat, prefers dynamic air removal steam, and rejects chemiclaves and bead sterilizers. Alberta (CDSA) bans glass bead sterilization. Quebec's 2024 ODQ/OHDQ guideline requires steam and rejects chemiclaves, dry heat, bead sterilizers and cold immersion.</p>
 <p><b>Three kinds of monitoring.</b> <b>Physical:</b> time, temperature and pressure, checked for each load. <b>Chemical:</b> show that conditions were reached, not that anything died. <b>Biological indicators (spore tests)</b> are the only direct test of killing: <i>Geobacillus stearothermophilus</i> for steam, <i>Bacillus atrophaeus</i> for dry heat. <b>Frequency varies by jurisdiction.</b> Ontario (RCDSO) and Alberta (CDSA) require a test each day the sterilizer is used, for each cycle type. Quebec's ODQ/OHDQ guideline requires one each week per cycle type and recommends daily. The US CDC minimum is weekly. In Ontario and Quebec every load containing implantable devices carries a biological indicator, and RCDSO requires those devices to be quarantined until the result is known.</p>
 <p><b>A positive spore test (Ontario protocol):</b> remove the sterilizer from service, review records and loading, correct any error and retest. If the repeat is also positive although procedures were correct, keep it out of service until it is inspected and repaired and passes three consecutive full-chamber tests, and recall loads back to the last negative test.</p>
 <p><b>Waterlines</b> are narrow, slow and stagnant, so biofilm grows on them (<i>Legionella</i>, <i>Pseudomonas</i>, non-tuberculous mycobacteria). The CDC target is 500 CFU/mL or fewer. Ontario, Alberta and Quebec require purging for 2 minutes at the start of the day and running handpieces for 20 seconds after each patient. Use sterile water or saline, delivered by a route bypassing the unit, when bone is cut.</p>
 <p><b>Why the exam cares.</b> KSA 16 is tested as decisions: which class, which indicator proves sterility, what to do after a failed spore test, which water for surgery. Check who said it: the frequency of testing and the list of accepted methods are not national.</p>`,
 connect: [
  {to:"m04-n06", why:"Geobacillus and Bacillus are Gram-positive spore formers; their spores are why spore tests are the ceiling of sterilisation monitoring."},
  {to:"m04-n10", why:"Waterline contamination is a biofilm problem, and the same structure that protects plaque from chlorhexidine protects waterline bacteria from casual flushing."},
  {to:"m01-n02", why:"Heat kills by denaturing microbial enzymes, which is why time, temperature and moisture are the parameters that matter."},
  {to:"m18-n02", why:"Implants and other implantable devices trigger the strictest rule in reprocessing: a biological indicator in every load and quarantine until it passes."},
  {to:"m14-n02", why:"Reprocessing protects patients while standard precautions protect staff; the same sharps in the same dirty area carry both risks."}
 ],
 apply: {
  vignette: "A dental office in Ontario uses a pre-vacuum steam sterilizer. This morning's spore test from yesterday's first load has returned positive. The physical printout and chemical indicators from that load looked acceptable, and an assistant says the chamber was packed tightly because of a busy day. Which of the following is the most appropriate next step?",
  options: ["Remove the sterilizer from service, correct the loading error and repeat the spore test using the same cycle","Continue using the sterilizer because the physical and chemical indicators were acceptable","Reprocess only the instruments from the failed test load and continue using the sterilizer that day","Discard the test as a false positive and run the next spore test one week later"],
  answer: "Remove the sterilizer from service, correct the loading error and repeat the spore test using the same cycle",
  steps: [
   "The ask: the next action after a failed biological indicator, not the reason for failure alone.",
   "Facts that matter: a positive spore test, reassuring physical and chemical results, and a likely operator error (overloading).",
   "Cross out continuing because the other indicators passed: physical and chemical indicators show conditions, not killing, and spores surviving is the more direct evidence.",
   "Cross out reprocessing only the test load while still using the sterilizer: the machine stays out of service until a repeat test is negative.",
   "Cross out calling it a false positive and waiting a week: the protocol requires an immediate repeat, and suspect loads may need recall.",
   "The survivor follows the RCDSO sequence: out of service, review records, fix the error, retest with the same cycle. If the repeat is positive, repair, then three consecutive passes and recall back to the last negative test."
  ]
 },
 teach: {
  prompt: "Explain to a new assistant why a colour-changed pouch does not prove sterility, and why a handpiece gets heat-sterilised even though it never enters tissue.",
  model: "A chemical indicator changes colour when it has seen the required heat, and sometimes time and steam, so it tells us conditions were reached at that spot, not that microbes died. Only a biological indicator tests killing directly, because it contains spores more resistant than anything on a used instrument, so when those die, the others have too. A handpiece is semi-critical: it touches mucosa, not bone. But it takes up saliva and blood into its internal channels, where wiping cannot reach, and heat-tolerant semi-critical items must be heat-sterilised between patients. The classification sets the minimum; the design of the device and the availability of a heat-tolerant option push the handpiece into the sterilizer."
 },
 cards: [
  ["Spaulding critical: definition and process","Penetrates soft tissue or contacts bone; clean, then sterilise"],
  ["Spaulding semi-critical: definition and examples","Contacts mucosa or non-intact skin; mirrors, condensers, impression trays, handpieces"],
  ["Spaulding non-critical: definition and process","Contacts intact skin or no patient contact; clean, then low-level disinfection"],
  ["Spore for a steam sterilizer test","Geobacillus stearothermophilus"],
  ["Spore for a dry heat test","Bacillus atrophaeus"],
  ["What a chemical indicator proves","Conditions were reached at that site; not that sterility was achieved"],
  ["Standard pre-vacuum steam cycles","132 C for 4 minutes or 135 C for 3 minutes; follow manufacturer's instructions"],
  ["Why steam cycles fail most often","Overloading and poor packaging trap air and block steam contact"],
  ["Positive spore test: first act","Remove the sterilizer from service"],
  ["Spore test frequency in Canada","Set provincially: daily per cycle type in Ontario and Alberta; weekly required (daily recommended) in Quebec; CDC minimum is weekly"],
  ["CDC water quality target, non-surgical","500 CFU/mL or fewer of heterotrophic bacteria"],
  ["Water when bone is cut","Sterile water or saline by a route that bypasses the dental unit"]
 ],
 questions: [
  ["A periodontal curette is classified as a critical instrument because it:","Penetrates soft tissue and may contact bone",["Contacts only intact mucous membrane","Cannot withstand repeated heat sterilisation","Is exposed to saliva but not to blood"],"Spaulding classifies by intended contact: anything entering tissue or touching bone is critical and must be sterilised. Contact limited to mucosa would be semi-critical."],
  ["Which item is correctly matched with its Spaulding class?","Amalgam condenser: semi-critical",["Blood pressure cuff: semi-critical","Surgical elevator: non-critical","Radiographic tube head: critical"],"A condenser touches mucosa and is not intended to penetrate tissue. A cuff and a tube head touch intact skin or nothing (non-critical); an elevator contacts bone (critical)."],
  ["A dentist in Ontario finishes a routine examination using a stainless steel mouth mirror. Which reprocessing is required before its next use?","Cleaning followed by heat sterilisation",["Cleaning followed by low-level disinfection","Wiping with an intermediate-level disinfectant","Immersion in glutaraldehyde for ten minutes"],"A mirror is semi-critical, and RCDSO requires heat-tolerant critical and semi-critical items to be heat-sterilised between uses. Low-level disinfection is for non-critical items."],
  ["The biological indicator organism used to test a steam sterilizer is:","Geobacillus stearothermophilus",["Bacillus atrophaeus","Mycobacterium tuberculosis","Clostridium perfringens"],"Its spores are especially resistant to moist heat, so killing them implies that everything else in the load has died. Bacillus atrophaeus is used for dry heat and ethylene oxide."],
  ["An external chemical indicator on every pouch changed colour, yet the biological indicator from the same cycle shows growth. The most appropriate interpretation is:","The load cannot be considered sterile, because chemical indicators show conditions and not killing",["The load is sterile, because external indicators on every pouch outweigh one test","The biological indicator has failed, because chemical indicators are more specific","The load is sterile only if the physical printout also shows correct time and temperature"],"The biological indicator is the only direct test of microbial killing. An external tape can change colour simply on brief heat exposure, so it cannot overrule a positive spore test."],
  ["After a repeat biological indicator is also positive in a sterilizer, what must happen before it is returned to service under Ontario's RCDSO standard?","Inspection, repair, then three consecutive passing full-chamber cycles",["One further passing biological test using a new lot of indicators","Repair, then a single passing Bowie-Dick air-removal test the next morning","Replacement of the door gasket and one passing Type 5 chemical indicator"],"RCDSO requires inspection, repair and a rechallenge with three consecutive full-chamber cycles, with recall of loads back to the last negative test. A Bowie-Dick test checks air removal, not microbial kill."],
  ["A busy clinic packs its sterilizer so tightly that pouches press against each other, and spore tests start to fail. Which of the following best explains the failures?","Trapped air and blocked steam contact prevent lethal conditions at some surfaces",["Excess instrument metal lowers the boiling point of chamber water","Pouches absorb steam and release it after the cycle is finished","Steam pressure falls because crowded pouches consume the available energy"],"Steam kills by condensing on surfaces and denaturing protein, which needs contact. Air pockets act as insulators, so a printout from the chamber probe can look normal while parts of the load are under-processed."],
  ["Blood-soaked forceps are placed directly into the autoclave without cleaning. The main hazard is that:","Organic debris shields microbes and may leave the instrument unsterile",["Steam will chemically bond with the haemoglobin and damage the sterilizer","Blood will neutralise the spores in the biological indicator","Forceps will lose their temper at the normal sterilising temperature"],"Bioburden insulates and protects organisms, so cleaning must precede any sterilisation. This is why cleaning is the first and most critical step in reprocessing."],
  ["A dentist in Ontario wishes to reduce corrosion of carbon steel instruments and accepts a slower process. Which method is most consistent with that aim?","Dry heat sterilisation",["Gravity steam sterilisation","Pre-vacuum steam sterilisation","Prolonged steam cycle with extended drying"],"Dry heat involves no moisture, so it does not rust carbon steel, at the cost of long cycles such as 160 C for 120 minutes. All steam cycles expose the metal to moisture. RCDSO accepts dry heat, but Quebec's guideline does not, so the answer depends on the province."],
  ["Dental unit waterlines are particularly prone to bacterial contamination because:","Their narrow bore, low flow and stagnation favour biofilm formation",["Oral bacteria from the patient grow readily in the unit's water","Municipal chlorine is concentrated by the unit's water heater","Polymer tubing releases nutrients that are absent in the incoming water"],"Waterline tubing has a very high surface-to-volume ratio and water sits still between uses, so waterborne organisms form biofilm. Ontario's RCDSO standard notes the lines are not a supportive environment for typical oral bacteria."],
  ["During surgical removal of tooth 3.8, in which bone will be cut, the most appropriate coolant is:","Sterile saline delivered by a route that bypasses the dental unit",["Distilled water delivered through the unit's independent reservoir","Municipal water delivered through a flushed high-speed line","Chlorhexidine solution delivered through the unit's air-water syringe"],"Surgery needs sterile irrigant, and conventional units cannot reliably deliver sterile water even with a separate bottle, because the internal path carries biofilm. Reservoirs improve quality but do not make water sterile."],
  ["A load contains titanium implants for placement later today. Under Ontario's RCDSO standard, this load must:","Contain a biological indicator and be quarantined until it passes",["Be run at the highest temperature the sterilizer offers","Be released once the external Type 1 indicator has changed colour","Be released as soon as the printout shows correct time and temperature"],"Implantable devices are the one load type with no shortcut: an indicator in every load and quarantine until it passes. Routine loads may be released on Type 5 or 6 chemical indicators when quarantine is not possible."],
  ["Immediately after a patient appointment, a high-speed handpiece with water coolant should be:","Run for at least 20 seconds, removed and heat-sterilised",["Wiped with disinfectant and left attached for the next patient","Flushed with chlorhexidine and left attached overnight","Removed and placed in a cold disinfectant bath"],"Running it purges potentially contaminated air and water from the line; the handpiece itself is then reprocessed by heat. Surface wiping cannot reach internal contamination, and cold immersion is not sterilisation."],
  ["Which of the following best states the rule for frequency of biological testing in Canadian dental offices?","It is set provincially; several regulators require it each day of use",["It is set nationally by Health Canada at once per week for every office","It is set by the sterilizer manufacturer in the device instructions","It is required for offices that place implants and optional elsewhere"],"There is no single national rule: RCDSO (Ontario) and CDSA (Alberta) require a test each day of use per cycle type, Quebec's guideline requires weekly testing, and the US CDC gives a weekly minimum. Health Canada licenses the device but does not set the office testing schedule."]
 ]
};

window.CONTENT["m14-n02"] = {
 understand: `
 <p><b>You cannot tell who is infectious by looking, so treat everyone's blood and body fluids as potentially infectious.</b> That is the logic of <b>standard precautions</b>: hand hygiene, personal protective equipment, safe sharps and injection practice, clean environment, sterile instruments. Hand hygiene uses alcohol rub unless hands are visibly soiled, when soap and water are needed. Masks and eyewear address aerosols and splatter. Fit-tested N95 respirators and <b>transmission-based precautions</b> are added for airborne threats such as active tuberculosis, where elective care is deferred and the patient referred.</p>
 <p><b>Vaccination comes first.</b> Hepatitis B is the key vaccine for dental staff. Check antibody after the series: Ontario's RCDSO says 1 to 2 months, and the Canadian Immunization Guide allows 1 to 6 months. An <b>anti-HBs of at least 10 IU/L</b> means protected. Non-responders get a second series, then testing for HBsAg, and need immunoglobulin after later exposures.</p>
 <p><b>Needlestick: order of actions (RCDSO, Ontario; other provinces are similar).</b></p>
 <ol>
 <li>First aid at once: let the wound bleed briefly and freely, then wash with soap and water. Flush mucosa with water. Do not apply bleach or scrub.</li>
 <li>Report to the dentist, who assesses the source patient's history and seeks informed consent for testing, often through the patient's physician. Testing cannot simply be done without consent.</li>
 <li>Send the worker the same day to a physician, specialist or emergency department for counselling, baseline bloods and post-exposure prophylaxis.</li>
 <li>Document worker, vaccination status, time, procedure, source and follow-up.</li>
 </ol>
 <p><b>Risk after a percutaneous injury from a positive source:</b> hepatitis B 6 to 30% in the non-immune, depending mainly on whether the source is e-antigen positive; hepatitis C classically about 1.8%, and about 0.2% in recent CDC data; HIV about 0.3%. So HBV is by far the most transmissible and vaccination the most valuable step. <b>HIV PEP</b> starts within hours and no later than 72 hours, for 28 days. <b>HBV:</b> no action if a documented responder. An unvaccinated worker exposed to an HBsAg-positive or high-risk source gets hepatitis B immunoglobulin, ideally within 48 hours and no later than 7 days, plus the start of the vaccine series; a known non-responder gets immunoglobulin. <b>HCV</b> has no PEP: follow-up testing leads to early treatment.</p>
 <p><b>Prevent the injury.</b> Most are from needles, burs and instrument handling. Recap one-handed by the scoop technique or a device; use puncture-proof containers.</p>
 <p><b>Other hazards (KSA 43).</b></p>
 <ul>
 <li><b>Nitrous oxide</b> oxidises vitamin B12 and so inhibits methionine synthase. Chronic exposure causes neuropathy and megaloblastic change and has been linked to reduced fertility. Controls: scavenging, fitted nasal hood, ventilation, leak checks, minimal patient talking. The NIOSH limit is 25 ppm during administration.</li>
 <li><b>Mercury:</b> the hazard to staff is inhaled vapour. Use precapsulated amalgam, high-volume suction and water spray when removing old fillings, sealed scrap storage and amalgam separators (requirements vary by province). Never heat instruments contaminated with amalgam.</li>
 <li><b>Ergonomics:</b> neck, back and shoulder disorders come from static postures. Use neutral positions, indirect vision, loupes, patient positioning and microbreaks.</li>
 <li><b>Latex:</b> type I (anaphylaxis) and type IV (contact dermatitis) reactions. <b>Others:</b> noise, radiation, curing lights, chemicals under WHMIS.</li>
 </ul>
 <p><b>Why the exam cares.</b> KSAs 16 and 43 appear as scenes: a needlestick, a pale assistant with numb feet, a vaccinated non-responder. Choose the immediate safe step, and the mechanism behind it.</p>`,
 connect: [
  {to:"m04-n08", why:"Hepatitis B, hepatitis C and HIV biology explains why HBV carries by far the highest needlestick risk and why only HBV has a vaccine in this list."},
  {to:"m11-n07", why:"The nitrous oxide you give for patient comfort is the same gas the staff breathe; scavenging and B12 biochemistry link the two nodes."},
  {to:"m08-n05", why:"Amalgam handling, elemental mercury vapour and waste disposal are the occupational side of a material studied for its properties."},
  {to:"m09-n02", why:"Radiation is the other classic occupational exposure, and distance, position and shielding follow the same hierarchy of controls."},
  {to:"m13-n03", why:"Latex type I allergy can produce anaphylaxis in the chair, so the hazard recognised here is managed by the emergency algorithm there."}
 ],
 apply: {
  vignette: "A 29-year-old dental assistant sustains a deep needlestick while handling a used anaesthetic needle after treating a patient with an unknown blood-borne virus status. She has documented anti-HBs of 62 IU/L after vaccination. She has already let the wound bleed and washed it with soap and water. Which of the following is the most appropriate next step?",
  options: ["Assess the source patient's risk, seek consent for testing and send her today for medical assessment","Give her hepatitis B immunoglobulin and a booster dose of vaccine before she leaves","Reassure her that an anaesthetic needle carries no measurable risk and record the event","Wait for the source patient's test results before arranging any medical assessment for her"],
  answer: "Assess the source patient's risk, seek consent for testing and send her today for medical assessment",
  steps: [
   "The ask: the next step after first aid in an occupational exposure.",
   "Facts that matter: a hollow-bore needle used in a patient, an unknown source, and a documented vaccine response above 10 IU/L.",
   "Cross out immunoglobulin and booster: a documented responder is protected against HBV and needs neither.",
   "Cross out reassurance: an aspirating needle can carry blood, so the exposure is significant and must be assessed.",
   "Cross out waiting for the source results: HIV PEP works best within hours, so assessment proceeds in parallel, and results may take days or never arrive.",
   "The survivor runs both tracks at once: source assessment with consent, and same-day referral for counselling, baseline bloods and a PEP decision, followed by documentation."
  ]
 },
 teach: {
  prompt: "Walk through a needlestick from the moment of injury to the end of the day, and for each step say what would go wrong if it were skipped.",
  model: "First the worker lets the wound bleed briefly and washes it with soap and water; scrubbing or bleach only damages tissue. She reports to the dentist at once, since delay shrinks the window for HIV PEP, which should begin within hours and no later than 72 hours. The dentist reviews the source patient's history and asks for consent to testing, because testing without consent is not permitted and the result can stop unnecessary PEP. The worker goes the same day for baseline bloods, otherwise a later infection cannot be tied to this exposure. Hepatitis B status decides immunoglobulin and vaccine; hepatitis C has no PEP, so follow-up testing is the only protection. Everything is documented for workplace claims and quality review."
 },
 cards: [
  ["Protective anti-HBs level","At least 10 IU/L after the vaccine series"],
  ["RCDSO timing of anti-HBs test","1 to 2 months after the three-dose series"],
  ["Needlestick first aid","Let it bleed briefly, wash with soap and water; no bleach or scrubbing"],
  ["Mucosal splash first aid","Flush with copious water"],
  ["Needlestick risk from an infected source","HBV 6-30% (non-immune); HCV about 1.8% classically, about 0.2% in recent CDC data; HIV about 0.3%"],
  ["HIV PEP window and course","Start within hours, no later than 72 hours; 28 days"],
  ["Post-exposure prophylaxis for HCV","None: follow-up testing and early treatment"],
  ["Testing the source patient","Needs the patient's informed consent"],
  ["How nitrous oxide harms chronically exposed staff","Oxidises B12, inhibits methionine synthase: neuropathy, megaloblastic change"],
  ["NIOSH nitrous oxide limit","25 ppm time-weighted average during administration"],
  ["Mercury hazard for dental staff","Inhaled elemental mercury vapour"],
  ["Safest needle recapping","One-handed scoop technique or a recapping device"]
 ],
 questions: [
  ["The virus with the greatest risk of transmission after a percutaneous injury from an infected source, in a non-immune worker, is:","Hepatitis B virus",["Hepatitis C virus","Human immunodeficiency virus","Herpes simplex virus"],"HBV is carried at high titre in blood and survives well on surfaces, giving by far the highest needlestick risk (6 to 30% in the non-immune). HCV (about 1.8% classically, about 0.2% in recent CDC data) and HIV (about 0.3%) are far lower."],
  ["The immediate first aid for a percutaneous injury from a used dental needle is to:","Allow it to bleed briefly and wash gently with soap and water",["Squeeze the wound hard and apply sodium hypochlorite","Scrub the wound with chlorhexidine using a surgical brush","Cover the wound and finish the patient's treatment first"],"Ontario's RCDSO standard directs free bleeding followed by gentle washing with soap and water. Caustic agents and scrubbing injure tissue and may increase uptake, without evidence of benefit."],
  ["A dental hygienist with documented anti-HBs of 45 IU/L has a needlestick from a patient known to be HBsAg positive. For hepatitis B, she requires:","No immunoglobulin or further vaccine doses",["Hepatitis B immunoglobulin within 24 hours","A complete repeat three-dose vaccine series","Hepatitis B immunoglobulin plus a booster dose"],"A documented responder (at least 10 IU/L) is considered protected, even if antibody later wanes, because immune memory persists. Immunoglobulin is for non-immune or non-responding workers."],
  ["A dental assistant is exposed to blood from a patient known to have untreated HIV at 2 pm. Antiretroviral prophylaxis should be started:","As soon as possible, within hours of the exposure",["Only after her own baseline result shows she is negative","Within two weeks, when seroconversion would be expected","The next morning, once the source's viral load is available"],"Benefit falls quickly with delay, and PEP is not generally recommended after 72 hours. Baseline bloods are taken, but the first dose should not wait for them."],
  ["After a needlestick from a patient with chronic hepatitis C, the recommended approach is:","Baseline and follow-up testing, because no post-exposure prophylaxis exists",["Immediate immunoglobulin, because it neutralises circulating virus","Immediate hepatitis C vaccine, because it is effective after exposure","A 28-day antiviral course, because this has been proven to prevent infection"],"There is no vaccine or established PEP for HCV. Follow-up testing identifies infection early enough for curative direct-acting antivirals."],
  ["An assistant is injured with a needle used on a patient whose status is unknown. The patient has left. Which of the following is the appropriate way to obtain information on the source?","Contact the patient, explain the event and seek informed consent to testing",["Order the patient's bloods through the patient's physician without telling the patient","Examine the patient's dental chart and assume the status is negative","Ask the assistant to contact the patient's family for a medical history"],"Testing requires the patient's own informed consent, and RCDSO (Ontario) directs every reasonable effort to obtain it, often through the family physician. Going around the patient or family breaches both consent and privacy."],
  ["A 3-dose hepatitis B series gives a dentist an anti-HBs of below 10 IU/L at one month. The most appropriate next step is:","A second vaccine series followed by repeat anti-HBs testing",["Reassurance, since all completed series give lifelong immunity","Immediate removal from clinical practice until antibody appears","Immunoglobulin every six months as long-term prevention"],"RCDSO (Ontario) and the Canadian Immunization Guide direct a second series and retesting; after a second failure the person is tested for HBsAg and counselled as a non-responder. Immunoglobulin is used after exposures, not as routine prevention."],
  ["A chairside assistant who has worked for years in an office without nitrous oxide scavenging develops numb feet and an unsteady gait. Her macrocytic anaemia is most likely explained by:","Inactivation of vitamin B12, impairing methionine synthase",["Direct bone marrow toxicity from chronic mercury vapour","Iron deficiency caused by chronic low-grade intravascular haemolysis","Folate loss caused by increased urinary excretion"],"Nitrous oxide oxidises the cobalt of B12, stopping methionine synthase and disturbing DNA synthesis and myelin. Mercury vapour causes tremor and neurobehavioural signs rather than macrocytosis."],
  ["Which measure best reduces staff exposure to nitrous oxide in the operatory?","A well-fitted scavenging nasal hood with adequate room ventilation",["Encouraging patients to breathe through the mouth during sedation","Increasing the flow of nitrous oxide to shorten each appointment","Having the operator wear a standard surgical mask during sedation"],"Most exposure comes from leakage and exhaled gas, which scavenging removes at source. A surgical mask does not filter a gas, and mouth breathing increases room contamination."],
  ["The principal occupational route of mercury exposure in a dental office is:","Inhalation of elemental mercury vapour",["Ingestion of amalgam particles from the air","Absorption of methylmercury through intact skin","Injection of amalgam through a needle injury"],"Elemental mercury vaporises at room temperature and is well absorbed in the lungs. It is poorly absorbed from the gut, which is why vapour is the concern; methylmercury is the dietary form."],
  ["A dentist reports chronic neck and shoulder pain after long appointments. Which change addresses the underlying cause most directly?","Working in a neutral posture with indirect vision and short microbreaks",["Taking a daily anti-inflammatory drug before clinical sessions","Raising the patient to the height of the operator's shoulders","Increasing the length of appointments to spread out the work"],"Work-related musculoskeletal disorders follow from static, awkward postures, so posture and movement treat the cause. Drugs only mask symptoms, and a high patient forces the arms up."],
  ["An assistant develops an itchy, scaling rash on the backs of both hands, appearing about two days after contact with rubber gloves. The most likely mechanism is:","A type IV reaction to chemicals used in glove manufacture",["A type I IgE-mediated reaction to natural rubber latex proteins","A type II antibody-mediated reaction against epidermal cells","A simple irritant effect of frequent alcohol rub"],"Delayed onset and eczematous change suggest allergic contact dermatitis to accelerators and other chemicals. Type I latex allergy appears within minutes, as urticaria, rhinitis or anaphylaxis."],
  ["A patient with a persistent productive cough, night sweats and weight loss requests a routine crown preparation on 2.6. The most appropriate management is:","Defer elective care and refer urgently for medical assessment",["Proceed with a surgical mask and high-volume suction","Proceed after prescribing a seven-day amoxicillin course","Proceed after asking the patient to rinse with chlorhexidine"],"These symptoms suggest active tuberculosis, an airborne infection that needs medical workup; elective treatment waits. A surgical mask does not offer respiratory protection against airborne droplet nuclei."]
 ]
};

window.CONTENT["m14-n03"] = {
 understand: `
 <p><b>Epidemiology asks how much disease there is, who gets it and whether a test or treatment really helps.</b> Most of the exam's arithmetic comes from a handful of formulas.</p>
 <p><b>Frequency.</b> <b>Prevalence</b> is the proportion who have the disease now (existing cases divided by people studied). <b>Incidence</b> is the rate of new cases among people at risk over a stated time. Prevalence is approximately incidence times duration. So treatment that keeps people alive longer without curing them raises prevalence, while a quick cure lowers it.</p>
 <p><b>DMFT</b> counts permanent teeth that are decayed, missing because of caries, or filled; <b>dmft</b> is the primary version, and DMFS counts surfaces. Each tooth counts once. A filled tooth with new decay counts as D. Teeth missing for orthodontics or trauma do not count. It is cumulative, so for a person it can only stay the same or rise, and it treats a small filling and a lost molar as equals. Sealed teeth are not counted as filled.</p>
 <p><b>Test accuracy: a worked 2x2.</b> A caries test is used on 1000 surfaces; prevalence is 10%, sensitivity 90%, specificity 80%.</p>
 <div class="tscroll"><table><tr><th></th><th>Disease</th><th>No disease</th></tr>
 <tr><td>Test positive</td><td>TP 90</td><td>FP 180</td></tr>
 <tr><td>Test negative</td><td>FN 10</td><td>TN 720</td></tr></table></div>
 <ul>
 <li><b>Sensitivity</b> = TP/(TP+FN) = 90/100 = 90%: how well it finds disease. High sensitivity, negative result: rule out (SnNout).</li>
 <li><b>Specificity</b> = TN/(TN+FP) = 720/900 = 80%: how well it clears the healthy. High specificity, positive result: rule in (SpPin).</li>
 <li><b>PPV</b> = TP/(TP+FP) = 90/270 = 33%: a positive result is probably wrong here.</li>
 <li><b>NPV</b> = TN/(TN+FN) = 720/730 = 98.6%.</li>
 </ul>
 <p><b>Prevalence moves the predictive values, not sensitivity or specificity.</b> Raise prevalence to 50% (500 diseased): TP 450, FP 100, PPV 82%. The same test is better in a high-risk group.</p>
 <p><b>Treatment effect: arithmetic.</b> Caries occurs in 40% of controls and 25% of those given varnish.</p>
 <ul>
 <li><b>Relative risk</b> = 0.25/0.40 = 0.625. RR of 1 means no effect.</li>
 <li><b>Absolute risk reduction</b> = 0.40 - 0.25 = 0.15.</li>
 <li><b>Relative risk reduction</b> = 0.15/0.40 = 37.5%.</li>
 <li><b>NNT</b> = 1/ARR = 1/0.15 = 6.7, rounded up to 7 children treated to prevent one case.</li>
 <li><b>Odds ratio</b> = (25/75)/(40/60) = 0.50. It is the measure from case-control studies and it overstates the effect relative to RR when the outcome is common.</li>
 </ul>
 <p><b>Describing data.</b> Mean suits symmetric data; <b>median</b> suits skewed data such as DMFT, where a few people carry most disease. Mode is the commonest value. In a normal distribution about 68% lie within 1 SD and 95% within 2 SD. Data are nominal (categories), ordinal (ordered, as with an index score), or interval and ratio (true numbers). <b>Validity</b> means correct; <b>reliability</b> means repeatable. Kappa measures examiner agreement beyond chance.</p>
 <p><b>Why the exam cares.</b> KSA 38 needs numbers you can compute by hand. Draw the 2x2 first; every answer comes from it.</p>`,
 connect: [
  {to:"m14-n04", why:"Relative risk, odds ratio and NNT are the outputs; study design determines which you can validly calculate and how far to trust them."},
  {to:"m08-n03", why:"Caries detection methods are compared by sensitivity and specificity, and prevalence explains why a low-risk patient's positive reading is often false."},
  {to:"m20-n02", why:"Pulp sensibility tests carry the same trade-off: a cold test's predictive value depends on how likely pulp necrosis was before testing."},
  {to:"m19-n04", why:"Periodontal indices are ordinal measurement tools, so their reliability, calibration and appropriate summary statistics are epidemiology questions."},
  {to:"m14-n05", why:"Community programmes are judged by the same arithmetic: DMFT change, prevented fraction and number needed to treat."}
 ],
 apply: {
  vignette: "A new fluorescence device is tested against histology on 200 occlusal surfaces of molars. Of 50 surfaces with caries into dentine, it flags 40. Of 150 sound surfaces, it flags 30. What is the positive predictive value of the device in this sample?",
  options: ["57%","80%","20%","92%"],
  answer: "57%",
  steps: [
   "The ask: PPV, the chance that a positive reading is true, not sensitivity.",
   "Draw the 2x2: TP 40, FN 10, FP 30, TN 120.",
   "Cross out 80%: that is sensitivity (40/50), the proportion of diseased surfaces flagged. It is also the specificity (120/150), a coincidence worth noticing.",
   "Cross out 20%: that is the false negative rate (10/50), which also equals the false positive rate here (30/150).",
   "Cross out 92%: that is NPV (120/130), the chance that a negative reading is true; it does not use the positives at all.",
   "The survivor: PPV = TP/(TP+FP) = 40/70 = 57%. A device with 80% sensitivity and specificity is wrong almost half the time when it says yes in a sample with 25% prevalence."
  ]
 },
 teach: {
  prompt: "A colleague says: this caries detector is 90% sensitive and 90% specific, so a positive reading means a 90% chance of caries. Correct them using a 1000-surface example at 5% prevalence.",
  model: "Sensitivity and specificity describe how the test behaves once disease status is known, not what a result means for a given surface. At 5% prevalence there are 50 carious surfaces and 950 sound ones. The test finds 45 of the 50, but flags 10% of the 950, which is 95 false positives. So 140 surfaces are positive and only 45 are true, a PPV of about 32%. The test's properties have not changed; the low prevalence means most positives are false. To get a positive reading you can trust, test patients at higher risk or confirm with a second finding."
 },
 cards: [
  ["Prevalence vs incidence","Prevalence: existing cases/people studied at a time. Incidence: new cases/people at risk over a period"],
  ["Link between prevalence and incidence","Prevalence is approximately incidence x duration"],
  ["DMFT rules","Permanent teeth; each counted once; missing only if lost to caries; filled and decayed counts as D"],
  ["Sensitivity formula","TP/(TP+FN)"],
  ["Specificity formula","TN/(TN+FP)"],
  ["PPV formula","TP/(TP+FP); rises with prevalence"],
  ["SnNout and SpPin","A negative on a highly sensitive test rules out; a positive on a highly specific test rules in"],
  ["Relative risk","Risk in exposed/risk in unexposed; 1 = no effect"],
  ["Absolute risk reduction and NNT","ARR = control risk - treated risk; NNT = 1/ARR, rounded up"],
  ["Best summary for skewed data","Median"],
  ["68% and 95% of a normal distribution","Within 1 and 2 standard deviations of the mean"],
  ["Validity vs reliability","Validity is being correct; reliability is being repeatable"]
 ],
 questions: [
  ["Of 80 patients with periodontitis, a screening test is positive in 72. The sensitivity of the test is:","90%",["72%","80%","10%"],"Sensitivity = TP/(TP+FN) = 72/80 = 90%. The 10% is the false negative rate, the complement of sensitivity."],
  ["A test for oral candidiasis is applied to 600 people without the disease and is negative in 540. Its specificity is:","90%",["10%","54%","60%"],"Specificity = TN/(TN+FP) = 540/600 = 90%. The other 60 are false positives, a false positive rate of 10%."],
  ["A salivary test gives 100 positive results, of which 40 are true positives, and 900 negative results, of which 880 are true negatives. Its positive predictive value is:","40%",["67%","98%","80%"],"PPV = TP/(TP+FP) = 40/100. The 98% is NPV (880/900), and sensitivity here is 40/60, or 67%."],
  ["A dentist uses the same caries detection device on a high-risk population rather than a low-risk one. Which of the following will most likely increase?","Positive predictive value",["Sensitivity","Specificity","Negative predictive value"],"Sensitivity and specificity are properties of the test and stay largely constant, while PPV rises with prevalence. NPV falls as disease becomes more common."],
  ["A survey of 1000 children finds that 200 have at least one carious lesion on the day of examination. This figure of 20% is the:","Point prevalence",["Cumulative incidence","Incidence rate","Case fatality rate"],"It counts existing cases at one time. Incidence would require following caries-free children and counting new cases over a period."],
  ["In a cohort of 500 caries-free 6-year-olds, 50 develop caries within one year. The one-year cumulative incidence is:","10%",["5%","20%","50%"],"Incidence = new cases/persons at risk = 50/500 = 10% per year. Using the wrong denominator is the usual error here."],
  ["A new drug keeps patients with oral cancer alive longer but does not cure them, and the rate of new cases does not change. The expected effect on prevalence is that it will:","Increase, because the duration of disease increases",["Decrease, because deaths from the disease decrease","Stay unchanged, because incidence is constant","Decrease, because treated patients no longer count as cases"],"Prevalence is approximately incidence times duration, so longer survival with unchanged incidence raises prevalence. Fewer deaths means more people, not fewer, still have the disease."],
  ["A 14-year-old has 3 carious teeth, one filled tooth with recurrent caries, 2 sound filled teeth, 2 teeth extracted because of caries and 2 premolars extracted for orthodontic reasons. The DMFT is:","8",["7","9","10"],"D = 3 + 1 = 4, M = 2 (orthodontic extractions excluded), F = 2, total 8. A tooth with both a filling and caries is counted once, as decayed."],
  ["In a cohort study, oral cancer develops in 30 per 1000 tobacco users and 10 per 1000 non-users. The relative risk for tobacco users is:","3.0",["0.33","2.0","20"],"RR = 30/1000 divided by 10/1000 = 3.0. The difference, 20 per 1000, is the attributable risk, and 0.33 is the ratio inverted."],
  ["In a trial, post-operative infection occurs in 20% of the control group and 10% of the antibiotic group. How many patients must be treated to prevent one infection?","10",["2","5","20"],"ARR = 0.20 - 0.10 = 0.10, so NNT = 1/0.10 = 10. The relative risk reduction is 50%, which sounds larger than the same effect stated as NNT."],
  ["A sealant trial reports caries in 50% of control teeth and 30% of sealed teeth. The relative risk reduction is:","40%",["20%","30%","60%"],"RRR = (0.50 - 0.30)/0.50 = 40%. The absolute reduction is 20%; the RR is 0.6, which is not the RRR."],
  ["Case-control data give an odds ratio of 6 for a rare oral cancer in users of a given product. The interpretation closest to correct is:","Exposed people have about six times the risk, since the outcome is rare",["Six percent of exposed people will develop the cancer over their lifetime","Exposure causes six cases out of every ten observed","The probability that the association arose by chance alone is one in six"],"With a rare outcome the odds ratio approximates the relative risk. It says nothing directly about absolute risk, causation or chance."],
  ["DMFT scores in a town are strongly skewed, with most children at 0 or 1 and a few at 10 or more. The best single summary of a typical child is the:","Median",["Mean","Standard deviation","Range"],"The median resists the pull of extreme values, whereas the mean is dragged upward by the few high scorers. SD and range describe spread, not the typical value."],
  ["Pocket depth in a sample is normally distributed, with a mean of 3.0 mm and a standard deviation of 0.5 mm. About 95% of readings lie between:","2.0 and 4.0 mm",["2.5 and 3.5 mm","1.5 and 4.5 mm","2.75 and 3.25 mm"],"About 95% of values lie within 2 SD of the mean: 3.0 plus or minus 1.0 mm. Within 1 SD (2.5 to 3.5 mm) covers about 68%."],
  ["Two examiners score the same 100 mouths and agree on 90%, but agreement of 60% would be expected by chance alone. Which statistic is most suitable for describing their agreement?","Cohen's kappa",["Relative risk","Number needed to treat","Positive predictive value"],"Kappa measures agreement beyond chance, here (0.90 - 0.60)/(1 - 0.60) = 0.75, and is the usual calibration measure. Simple percent agreement overstates reliability."]
 ]
};

window.CONTENT["m14-n04"] = {
 understand: `
 <p><b>Every study is an attempt to separate a real effect from bias, confounding and chance.</b> Design decides how well it can do so, and <b>evidence-based dentistry</b> joins the best evidence with clinical judgement and the patient's values.</p>
 <p><b>The hierarchy of evidence</b>, for questions about treatment, runs from strongest to weakest: systematic review and meta-analysis of randomised trials; randomised controlled trial (RCT); cohort; case-control; cross-sectional; case series; expert opinion. A systematic review states its question and search in advance, appraises every study and may pool them (meta-analysis, shown as a forest plot). A rigorous cohort can outrank a flawed RCT, and the best design depends on the question.</p>
 <div class="tscroll"><table><tr><th>Design</th><th>Direction</th><th>Gives</th><th>Weakness</th></tr>
 <tr><td>RCT</td><td>Assign, then follow</td><td>RR, NNT</td><td>Cost, narrow patients</td></tr>
 <tr><td>Cohort</td><td>Exposure to outcome</td><td>Incidence, RR</td><td>Loss to follow-up; suits rare exposures</td></tr>
 <tr><td>Case-control</td><td>Outcome back to exposure</td><td>OR</td><td>Recall bias; suits rare diseases</td></tr>
 <tr><td>Cross-sectional</td><td>Snapshot</td><td>Prevalence</td><td>Cannot show which came first</td></tr></table></div>
 <p><b>Randomisation</b> is the core of the RCT, because it balances known and unknown confounders between groups. <b>Allocation concealment</b> stops anyone foreseeing the next assignment and is distinct from <b>blinding</b>, which hides the assignment after allocation so that care and assessment stay even. <b>Intention-to-treat</b> analysis keeps people in their assigned group, preserving randomisation; per-protocol analysis throws away that protection. Split-mouth trials use each patient as their own control, but a treatment may carry across to the other side.</p>
 <p><b>Bias is systematic error; more patients do not fix it.</b></p>
 <ul>
 <li><b>Selection:</b> groups differ from the start, or the sample does not represent the population.</li>
 <li><b>Information:</b> recall bias (cases remember more) and observer bias (unblinded assessors).</li>
 <li><b>Attrition:</b> dropouts differ from those who stay.</li>
 <li><b>Publication:</b> positive results are published more readily; shown by an asymmetric funnel plot.</li>
 <li><b>Lead-time:</b> screening makes survival look longer by diagnosing earlier, without delaying death.</li>
 </ul>
 <p><b>Confounding</b> is a third factor linked to both exposure and outcome: alcohol appears to cause oral cancer in part because drinkers smoke. Handle it by randomisation, restriction, matching or adjusted analysis.</p>
 <p><b>Chance.</b> A <b>p value</b> is the probability of results at least this extreme if the null hypothesis were true. It is not the probability that the null is true, nor a measure of effect size. A <b>95% confidence interval</b> gives a range of plausible true values and carries both size and precision. If an interval for a ratio includes 1, or for a difference includes 0, the result is not statistically significant at 5%. <b>Type I error</b> (alpha) is a false positive; <b>type II error</b> (beta) is a false negative. <b>Power</b> is 1 minus beta, usually set at 80%, and rises with sample size. <b>Statistical</b> significance is not <b>clinical</b> significance: 0.1 mm of attachment gain can have a tiny p value and no value in the chair.</p>
 <p><b>Why the exam cares.</b> KSA 38 asks you to justify recommendations from the literature. Expect to name the design, find the bias and read an interval.</p>`,
 connect: [
  {to:"m14-n03", why:"The RR, OR and NNT you calculate come with intervals and p values; this node decides whether those numbers can be believed."},
  {to:"m13-n09", why:"AHA 2021 endocarditis guidance rests on observational data because a trial would be impractical, a clear lesson in matching evidence to the question."},
  {to:"m11-n05", why:"Antibiotic recommendations in dentistry are justified by NNT and harms, and the appraisal rules here decide which recommendations survive."},
  {to:"m08-n02", why:"Fluoride evidence, from community trials to Cochrane reviews, is the classic worked example of a dental evidence hierarchy."}
 ],
 apply: {
  vignette: "A trial randomises 400 adults with periodontitis to scaling plus a new local antibiotic or scaling alone. At six months the mean pocket depth reduction is 0.2 mm greater with the antibiotic (95% confidence interval 0.1 to 0.3 mm, p = 0.001). The authors recommend the antibiotic for all patients. Which of the following is the most appropriate interpretation?",
  options: ["The result is statistically significant but of doubtful clinical importance","The result is not statistically significant, as the interval is too narrow","The result proves the antibiotic is clinically superior, as p is below 0.05","The result is invalid, as confidence intervals cannot be used for mean differences"],
  answer: "The result is statistically significant but of doubtful clinical importance",
  steps: [
   "The ask: what the numbers mean, not whether the trial design is good.",
   "Facts that matter: a large sample, a very small p value, and an interval that excludes 0 but whose upper end is only 0.3 mm.",
   "Cross out not significant: an interval for a difference that excludes 0 is significant, and a narrow interval reflects precision.",
   "Cross out proof of clinical superiority: the p value measures compatibility with chance, not importance.",
   "Cross out invalid interval: confidence intervals are standard for mean differences.",
   "The survivor separates the two questions: there is likely a real effect, but even at its best it is 0.3 mm, which is under the error of a periodontal probe, so a blanket recommendation does not follow."
  ]
 },
 teach: {
  prompt: "Explain to a colleague why a bigger study can remove the effect of chance but not bias, and how randomisation and blinding each deal with a different problem.",
  model: "Chance is random error, so it averages out as numbers grow, which narrows the confidence interval. Bias is systematic error pointing one way, so more patients only give you a more precise wrong answer. Randomisation deals with bias at the start: by assigning people by chance it balances known and unknown confounders, provided allocation is concealed so nobody can steer patients. Blinding deals with bias after that point: if patients, clinicians and assessors do not know the group, they will not treat, report or measure differently. Neither removes chance, which is why the study still needs enough power."
 },
 cards: [
  ["Top of the evidence hierarchy for treatment","Systematic review and meta-analysis of RCTs"],
  ["Three parts of evidence-based dentistry","Best evidence, clinical judgement, patient values"],
  ["What randomisation does","Balances known and unknown confounders between groups"],
  ["Allocation concealment vs blinding","Concealment protects assignment; blinding protects care and assessment afterward"],
  ["Best design for a rare disease","Case-control; measures odds ratio"],
  ["Best design for a rare exposure","Cohort; measures incidence and relative risk"],
  ["Intention-to-treat","Analyse everyone in the group assigned, preserving randomisation"],
  ["Recall bias occurs in","Case-control studies: cases remember exposures differently"],
  ["Confounder","Linked to both exposure and outcome, and not on the causal path"],
  ["What a p value is","Probability of data this extreme if the null is true"],
  ["CI shows no significant effect when","It includes 1 for a ratio or 0 for a difference"],
  ["Type I, type II, power","False positive; false negative; 1 minus beta"]
 ],
 questions: [
  ["For a question about the effectiveness of a treatment, which type of evidence generally ranks highest?","A systematic review of randomised trials",["A large prospective cohort study with long follow-up","A well-matched case-control study","Consensus opinion of a national expert panel"],"A systematic review collects and appraises all randomised evidence, which reduces both bias and chance. Cohort and case-control studies remain open to confounding."],
  ["The main purpose of random allocation in a clinical trial is to:","Balance known and unknown confounding factors between groups",["Ensure that the sample represents the general population","Keep participants unaware of the treatment they receive","Increase the statistical power of the final analysis"],"Randomisation makes groups comparable at baseline. Representativeness comes from sampling, and hiding the treatment is blinding."],
  ["Investigators compare 200 patients with oral cancer and 400 people without it, and ask both about past betel quid use. This study design is:","Case-control",["Prospective cohort","Cross-sectional","Randomised controlled trial"],"Subjects are selected by outcome and looked back for exposure, which defines a case-control study. A cohort is selected by exposure and followed forward."],
  ["In the study of oral cancer above, patients with cancer may search their memories more carefully than controls. This is an example of:","Recall bias",["Lead-time bias","Attrition bias","Publication bias"],"Recall bias is differential reporting of past exposure between cases and controls. Attrition concerns those lost during follow-up, which does not arise in a retrospective interview."],
  ["Which study design is most efficient for investigating an uncommon disease such as a rare salivary gland tumour?","Case-control",["Randomised controlled trial","Prospective cohort","Community trial"],"Starting with the small number of existing cases avoids following huge numbers of people. A cohort suits a rare exposure rather than a rare disease."],
  ["An association between alcohol use and oral cancer is found. It weakens substantially once the analysis accounts for tobacco. Tobacco here is acting as a:","Confounder",["Effect modifier with no link to alcohol use","Source of recall bias","Source of measurement error"],"Tobacco is linked to alcohol use and independently causes the outcome, so it distorts the crude association. Adjusting for it reveals the size of alcohol's independent effect."],
  ["A trial's patients who stopped the study drug because of side effects are analysed in the group to which they were originally assigned. This approach is:","Intention-to-treat analysis",["Per-protocol analysis","Post hoc subgroup analysis","Worst-case sensitivity analysis"],"Intention-to-treat preserves the comparability created by randomisation and reflects real-world use. Excluding those who stopped, as in per-protocol analysis, would flatter the drug."],
  ["A study reports a relative risk of 0.80 for caries with a new toothpaste (95% confidence interval 0.60 to 1.05). The correct conclusion is:","The reduction is not statistically significant at the 5% level",["The toothpaste significantly reduces caries by 20%","The toothpaste significantly increases caries by 5%","The study is invalid because the confidence interval is too wide"],"The interval for a ratio includes 1, so no effect remains plausible at the 5% level. The result may still suggest a benefit, and a larger trial might confirm it."],
  ["A trial reports p = 0.03 for its primary outcome. The correct meaning is:","Data at least this extreme would occur 3% of the time if there were no effect",["There is a 3% probability that the null hypothesis of no difference is true","There is a 97% probability that the treatment works","The treatment changes the primary outcome in 3% of the patients treated"],"A p value is calculated assuming the null hypothesis, so it cannot give the probability of that hypothesis. It also says nothing about effect size."],
  ["A small trial of a new pulpotomy agent finds no significant difference from the standard agent, although the observed success rate is higher. The most likely concern is:","Type II error from inadequate power",["Type I error from excessive power","Recall bias among the treating dentists","Lead-time bias in the outcome assessment"],"A small sample may miss a real difference, a false negative. Power rises with sample size and effect size; a non-significant result from a small trial does not prove equivalence."],
  ["A funnel plot from a meta-analysis of a caries vaccine shows small negative studies are missing on one side. This pattern most suggests:","Publication bias",["Selection bias within each trial","Good statistical homogeneity","Successful allocation concealment"],"Small positive studies are more likely to reach print, leaving the funnel asymmetrical. It is a warning about the review's pooled estimate, not about one trial's internal conduct."],
  ["Screening for oral cancer detects tumours earlier and survival from diagnosis appears longer, yet the age at death is unchanged. This is best explained by:","Lead-time bias",["Recall bias","Hawthorne effect","Regression to the mean"],"The clock starts earlier, so survival seems longer even if death is not delayed. Mortality rates, rather than survival from diagnosis, are the proper outcome for a screening trial."],
  ["A clinician wants to decide between two resin cements. Which statement best reflects evidence-based practice?","Integrate the best research with clinical expertise and the patient's values",["Use whichever product performed best in the largest laboratory bond-strength study","Follow the published recommendation of the product's manufacturer","Use the option with the lowest p value regardless of the outcome"],"Evidence-based dentistry joins research, expertise and patient preferences. Laboratory and manufacturer data are low in the hierarchy, and a p value alone does not measure importance."]
 ]
};

window.CONTENT["m14-n05"] = {
 understand: `
 <p><b>Prevention works at two levels.</b> The <b>high-risk strategy</b> finds and treats those most at risk. The <b>population strategy</b> shifts everyone's risk slightly, and because most cases arise in the many at moderate risk, small shifts can prevent more disease (Rose). Levels: <b>primary</b> prevents disease (fluoride, sealants), <b>secondary</b> stops it early (remineralising a white spot), <b>tertiary</b> limits damage (restoration, prosthesis).</p>
 <p><b>Fluoride works mainly topically after eruption.</b> Low, constant fluoride in saliva and plaque favours remineralisation and forms fluorapatite. So frequent low exposure, not tablets swallowed in childhood, is the principle behind water and toothpaste.</p>
 <p><b>Community water fluoridation (CWF)</b> adjusts water to Health Canada's optimal level of <b>0.7 mg/L</b>, well below the separate maximum acceptable concentration of 1.5 mg/L. The Public Health Agency of Canada reported in 2022 that about <b>38.8%</b> of Canadians had access, from 0% in Newfoundland and Labrador and Yukon, and 1.5% in British Columbia, to 73.2% in Ontario. The same report links CWF to about a 25% reduction in decay in children and adults, calls it the most cost-effective way to deliver fluoride to a population, describes it as offsetting barriers of income, education and access, and says documented risks in Canada are limited to dental fluorosis, usually very mild. It is equitable because everyone on the supply benefits whatever their income or habits.</p>
 <p>Decisions are generally made locally under provincial rules, so coverage changes. Calgary stopped in 2011 and resumed on 30 June 2025. Studies comparing Grade 2 children in Calgary with those in still-fluoridated Edmonton found that caries in primary teeth worsened more in Calgary after cessation (McLaren and colleagues, 2016 and 2022).</p>
 <p><b>Fluoride varnish</b> (5% sodium fluoride, about 22,600 ppm fluoride) sticks to teeth, is safe in young children because little is swallowed, and suits school and community programmes. A 2013 Cochrane review found prevented fractions of about 43% in permanent and 37% in primary teeth. The CDA supports targeted varnish programmes in high-risk communities, with professional oversight and outcome monitoring.</p>
 <p><b>Pit and fissure sealants</b> close the niche that the toothbrush cannot reach. A 2017 Cochrane review found resin sealants greatly reduced caries in permanent molars compared with no sealant (odds ratio about 0.21 at 4 years). The CDA supports selective use for primary and permanent teeth, based on caries risk and diagnosis, as one part of prevention. Glass ionomer is useful when moisture control is poor. A well-retained sealant over a small non-cavitated lesion tends to arrest it.</p>
 <p><b>Measuring a programme.</b> <b>Prevented fraction</b> = (control caries - test caries)/control caries. If control DMFS is 4.0 and test is 2.8, PF = 1.2/4.0 = 30%. Good planning runs: assess need, set objectives, implement, evaluate.</p>
 <p><b>Upstream thinking.</b> The Ottawa Charter (1986) sets out five action areas: healthy public policy, supportive environments, community action, personal skills and reoriented health services. Telling individuals to brush is the weakest of these; policy on water, school food and sugar reaches people who cannot act alone. Federal examples for First Nations and Inuit include the Children's Oral Health Initiative.</p>
 <p><b>Why the exam cares.</b> KSAs 13, 14 and 47 test whether you choose the right level of action: community or chair, risk-based or universal, and whether you can state Canadian facts without inflating them.</p>`,
 connect: [
  {to:"m08-n02", why:"Community fluoride decisions follow the chemistry of remineralisation: constant low-level topical fluoride matters more than systemic dose."},
  {to:"m08-n03", why:"Selective sealants and targeted varnish depend on caries risk assessment, which turns a population programme into a decision for one child."},
  {to:"m23-n02", why:"Paediatric caries prevention applies these same programmes in the chair, with age-appropriate fluoride and sealant choices."},
  {to:"m10-n11", why:"Dental fluorosis is the documented risk of fluoride exposure, and it must be distinguished from other enamel defects on examination."},
  {to:"m14-n08", why:"Water fluoridation and school programmes are valued because they reach people limited by the social determinants that block individual access."}
 ],
 apply: {
  vignette: "A public health dentist in a remote community with unfluoridated well water finds a high prevalence of early childhood caries. Access to a dentist is limited to a yearly visit, and a community health worker is available weekly at the school and daycare. Which of the following is the most appropriate first programme to recommend?",
  options: ["Supervised fluoride varnish application by trained local staff, with professional oversight","Resin sealants placed on all primary incisors during the yearly dental visit","Fluoride tablets issued to all households for parents to give their children at home","Fluoridation of every household's private well with periodic testing by residents"],
  answer: "Supervised fluoride varnish application by trained local staff, with professional oversight",
  steps: [
   "The ask: the best programme given the setting, not the most effective agent in the abstract.",
   "Facts that matter: young children, high risk, no central water supply, a yearly dentist and a weekly local worker.",
   "Cross out sealants on incisors: pits and fissures are the target of sealants, and a yearly visit cannot deliver them widely.",
   "Cross out household tablets: compliance is poor, the benefit depends on families who are hardest to reach, and overdose is a safety concern.",
   "Cross out private well fluoridation: there is no central system, so dose control and monitoring are impractical.",
   "The survivor matches the CDA position: targeted varnish in a high-risk community, delivered by trained staff, with professional oversight and outcome evaluation."
  ]
 },
 teach: {
  prompt: "A city councillor asks why the dental profession still supports water fluoridation when fluoride toothpaste exists. Explain the case honestly, including its limits and the Canadian numbers.",
  model: "Fluoride in water gives a constant low level in saliva and plaque, and because it reaches everyone it does not depend on income, habits or access to a dentist. PHAC reported in 2022 that about 38.8% of Canadians have access, at a recommended 0.7 mg/L, and associates it with roughly a 25% reduction in decay. Toothpaste works well but misses those who brush least, often the highest-risk groups. The documented risk in Canada is dental fluorosis, usually very mild. The honest limits are that the effect is smaller in the era of fluoride toothpaste than in early studies, and that it is a community decision. Evaluating local caries rates over time is part of a responsible policy."
 },
 cards: [
  ["Optimal fluoride level in Canadian water","0.7 mg/L"],
  ["Health Canada maximum acceptable concentration for fluoride","1.5 mg/L"],
  ["Canadian access to CWF, PHAC 2022","About 38.8%"],
  ["CWF reduction in decay, per PHAC","About 25% in children and adults"],
  ["Documented risk of CWF in Canada, per PHAC","Dental fluorosis, usually very mild"],
  ["Fluoride content of 5% NaF varnish","About 22,600 ppm"],
  ["Cochrane 2013 varnish prevented fractions","About 43% permanent, 37% primary"],
  ["CDA stance on sealants","Selective, based on caries risk and diagnosis"],
  ["Prevented fraction formula","(Control - test)/control"],
  ["Rose's population strategy","Shift the whole population's risk slightly"],
  ["Primary, secondary, tertiary prevention","Stop onset; stop early disease; limit damage"],
  ["Ottawa Charter year and aim","1986; health promotion through policy, environments, community, skills and services"]
 ],
 questions: [
  ["Health Canada's optimal concentration of fluoride for community water fluoridation is:","0.7 mg/L",["0.3 mg/L","1.2 mg/L","1.5 mg/L"],"Health Canada sets 0.7 mg/L as the optimal level for caries prevention, and PHAC uses the same figure. 1.5 mg/L is the Health Canada maximum acceptable concentration, a safety ceiling and not a target."],
  ["According to the 2022 PHAC report, approximately what proportion of Canadians had access to community water fluoridation?","39%",["10%","65%","85%"],"PHAC reported 38.8%, with wide variation from 0% in some jurisdictions to 73.2% in Ontario. Quoting a national figure hides this variation, which is itself a health equity question."],
  ["The main reason community water fluoridation is described as equitable is that it:","Reaches all people on the supply regardless of income or behaviour",["Provides a stronger effect in adults than in children","Replaces the need for fluoride toothpaste in low-income homes","Delivers a greater fluoride dose to those at higher caries risk"],"It requires no action or spending by the individual, so it reaches those who face the greatest barriers. It adds to toothpaste rather than replacing it."],
  ["Fluoride's main anti-caries effect in erupted teeth arises from:","Low constant levels in saliva and plaque that favour remineralisation",["Incorporation into enamel crystals as fluorapatite during tooth formation","Killing of cariogenic bacteria throughout the mouth","Hardening of enamel so that acid can no longer reach it"],"The post-eruptive topical effect dominates, which is why continuous low exposure matters. Pre-eruptive incorporation plays a smaller role, and excess fluoride during enamel formation causes fluorosis."],
  ["A child who grew up in an area with high natural water fluoride has symmetrical, opaque white flecks on teeth 1.1, 2.1, 3.1 and 4.1. The most likely cause is:","Excess fluoride during enamel maturation",["Excess fluoride after eruption of the teeth","Non-cavitated caries from sugar exposure","Childhood trauma to the primary incisors"],"Fluorosis is symmetrical and arises when excess fluoride reaches forming enamel. Fully formed, erupted teeth cannot develop it, while a traumatic defect is usually localised and asymmetric."],
  ["In a 3-year school trial, the mean DMFS increment is 4.0 in the control group and 2.8 in the varnish group. The prevented fraction is:","30%",["12%","43%","70%"],"PF = (4.0 - 2.8)/4.0 = 0.30. The 70% is the proportion of caries remaining in the varnish group, relative to the control."],
  ["A child at high risk of caries, aged 7, has newly erupted teeth 1.6, 2.6, 3.6 and 4.6, with deep but non-cavitated fissures. The most appropriate preventive step is to:","Place pit and fissure sealants as part of a caries prevention plan",["Prepare and restore the occlusal fissures with composite","Monitor the teeth until cavitation is confirmed clinically","Prescribe systemic fluoride tablets until the age of 16"],"Evidence and the CDA position support selective sealants for at-risk teeth, as one part of prevention. Waiting for cavitation forfeits the benefit, and preparation removes sound tissue."],
  ["Which statement about sealants placed over small non-cavitated occlusal lesions is correct?","Sealing limits the supply of substrate to bacteria, so progression tends to arrest",["Sealing is contraindicated because bacteria multiply beneath the sealant","Sealing should follow removal of all discoloured enamel by a bur","Sealing is acceptable only when the lesion has reached dentine"],"A sound seal deprives the biofilm of fermentable sugar, so lesions tend to arrest. Maintaining and checking the seal matters, since retention determines the benefit."],
  ["Fluoride varnish is preferred over a professionally applied gel for a 3-year-old mainly because varnish:","Sets quickly on the tooth, so little is swallowed",["Contains less fluoride than the usual gel product","Provides a permanent fluoride barrier on enamel","Requires no dentist's assessment of caries risk"],"The sticky film is applied in very small volumes and reduces ingestion, which matters in young children with poor swallow control. It contains more fluoride per mL than most gels, but less is applied."],
  ["A programme that adds fluoride to a town's water supply and one that gives extra varnish only to children with existing caries illustrate, respectively:","The population strategy and the high-risk strategy",["The high-risk strategy and the population strategy","Secondary prevention and tertiary prevention","Tertiary prevention and primary prevention"],"Rose distinguished shifting the whole population from targeting individuals at high risk. Both are preventive, and a good system combines them."],
  ["The placement of a restoration in a tooth with a carious cavity, to restore function and stop further loss, is best described as:","Tertiary prevention",["Primary prevention","Secondary prevention","Primordial prevention"],"Tertiary prevention limits the damage of established disease. Remineralising a white-spot lesion would be secondary, and a sealant on a sound tooth would be primary."],
  ["Which action best reflects the Ottawa Charter's health promotion approach in a community with high rates of caries?","Working with schools and local government on water and food policy",["Giving each child a printed leaflet on tooth brushing technique","Increasing the number of restorations placed at the local clinic","Requiring each family to attend an annual dental examination"],"The Charter moves beyond individual education to public policy, supportive environments and community action. Restoration addresses the results of disease, not its causes."],
  ["After a community stops fluoridating its water, the most appropriate way to assess the effect on oral health is to:","Compare caries trends with a similar community that kept fluoridation",["Measure the fluoride level in the town's drinking water each week for a year","Survey residents about whether they support the decision","Count the number of practising dentists in the area"],"A comparison community helps separate the cessation effect from other trends, as in Calgary and Edmonton studies. Water fluoride levels confirm exposure, not outcome."]
 ]
};

window.CONTENT["m14-n06"] = {
 understand: `
 <p><b>A profession gets to govern itself because it promises to put the patient's interest ahead of its own.</b> Patients cannot easily judge what they are buying, so trust is the cornerstone of the dentist-patient relationship. Ethics is how that trust is kept when a commercial pressure, a patient's wish and a clinical judgement pull in different directions.</p>
 <p><b>The five classic principles</b> (set out in the ADA Principles of Ethics, which the ACD Ethics Handbook builds on, and used widely in Canadian teaching):</p>
 <ul>
 <li><b>Autonomy:</b> a capable patient decides, after honest information. It gives the right to refuse, not the right to demand harmful care.</li>
 <li><b>Beneficence:</b> act to benefit the patient.</li>
 <li><b>Non-maleficence:</b> avoid doing harm, including over-treatment.</li>
 <li><b>Justice:</b> treat people fairly, and do not discriminate.</li>
 <li><b>Veracity:</b> tell the truth, including about mistakes and limitations.</li>
 </ul>
 <p>Ozar and Sokol describe three models. In the <b>commercial</b> model the dentist sells and the buyer beware. In the <b>guild</b> model the expert decides. In the preferred <b>interactive</b> model, the dentist brings expertise and the patient brings values, and they decide together. They also rank the central values of practice: life and general health, oral health, autonomy, preferred practice values, esthetics, efficiency.</p>
 <p><b>Applying them.</b></p>
 <ul>
 <li><b>A patient requests harmful care</b>, such as extraction of sound teeth. Explain, offer alternatives, and decline if it would be net harm: autonomy does not oblige you to act against your judgement.</li>
 <li><b>You make an error.</b> Tell the patient promptly and plainly, offer a remedy, document it and call your insurer.</li>
 <li><b>Infectious status.</b> Refusing someone because of HIV is discrimination under human rights law; standard precautions protect everyone.</li>
 <li><b>Beyond your skill.</b> Refer. Knowing your limits is in KSA 41.</li>
 <li><b>Another dentist's work.</b> Comment only on what you can justify. Do not disparage, and do not cover up harm.</li>
 <li><b>An impaired colleague.</b> Patient safety comes first: raise it and, where necessary, report to the regulator. Duties differ by province. In Ontario, under the Regulated Health Professions Act, a regulated health professional who has reasonable grounds, obtained in practice, to believe that another regulated professional has sexually abused a patient must report it in writing to that professional's college.</li>
 <li><b>Ending care.</b> Give reasonable notice, deal with emergencies, offer records. Abandoning a patient mid-treatment is misconduct.</li>
 <li><b>Boundaries, delegation, money.</b> Keep relationships professional; delegate only what the law and the person's training allow; never falsify dates, fees or services on a claim.</li>
 </ul>
 <p><b>Advertising and social media (KSA 40).</b> Rules are provincial and details differ, but regulators generally prohibit false, misleading or unverifiable claims, including testimonials. Ontario's RCDSO advisory is the model answer. It bars statements of superiority or uniqueness, comparisons with others, promises of favourable results, appeals to fear, testimonials, and incentives such as draws or free services. It also bars superlatives such as state of the art. Any reference to a procedure must make clear whether you are a general practitioner or a specialist, and an advertised fee must be clear and apply to all patients. Websites count as advertising, and some social media do too. Rocket v RCDSO (1990) means a regulator may restrict advertising but must do so proportionately.</p>
 <p><b>Why the exam cares.</b> Stems present a conflict and ask for the most appropriate action. Choose honesty, patient welfare, informed choice and referral. Avoid answers where the dentist decides alone, hides something or profits quietly.</p>`,
 connect: [
  {to:"m14-n07", why:"Autonomy is the ethical principle and informed consent is the legal form it takes in practice."},
  {to:"m14-n02", why:"Standard precautions are what make a refusal to treat a patient with a blood-borne virus both unnecessary and discriminatory."},
  {to:"m24-n03", why:"Respect for autonomy is hardest when capacity is in question, so ethics and capacity assessment meet in older and special-needs patients."},
  {to:"m14-n08", why:"Justice in the abstract becomes access to care in the Canadian setting, and beneficence becomes acting on signs of abuse."}
 ],
 apply: {
  vignette: "A 34-year-old with moderate caries on 1.6 and 2.6, but otherwise sound teeth, asks for all his teeth to be extracted and replaced with complete dentures because he is tired of dental visits. He has capacity and is willing to sign a consent form. Which of the following is the most appropriate response?",
  options: ["Explain the consequences and alternatives, and decline the extractions if he still requests them","Extract all teeth as requested because a signed form satisfies the principle of autonomy","Refuse to discuss his request further and discharge him from the practice today","Extract the two carious teeth without telling him that the others will be retained"],
  answer: "Explain the consequences and alternatives, and decline the extractions if he still requests them",
  steps: [
   "The ask: the ethical response when autonomy conflicts with non-maleficence.",
   "Facts that matter: a capable adult, a request for irreversible harm to healthy teeth, and a motive that treatable problems can address.",
   "Cross out extracting because of the signed form: autonomy allows refusal and informed choice among reasonable options, but does not compel a dentist to do net harm. A form is only evidence of consent.",
   "Cross out instant discharge: abandons the patient without exploring why he asks, or offering any help.",
   "Cross out doing part of the treatment without telling him: this violates veracity and consent.",
   "The survivor respects him and the profession's duty: explore his reasons, explain bone loss and denture function, offer easier care and a second opinion, and decline what would be net harm."
  ]
 },
 teach: {
  prompt: "Using the interactive model, explain how you would respond to a patient who has read online that all her sound amalgam fillings should be removed because they caused her fatigue.",
  model: "I would begin by asking what she has read and what she is worried about, because her values and fears matter. I would then tell her honestly what the evidence shows: there is no good evidence that removing sound amalgams cures systemic symptoms, and removal carries risks to tooth structure and a transient rise in mercury exposure. Promising a cure would breach veracity and could also be misleading advertising. I would suggest she see her physician about the fatigue. If she wishes to replace restorations for her own reasons, we can discuss this as a choice, but I will not represent it as a treatment for her illness and I will document the discussion."
 },
 cards: [
  ["Five core ethical principles","Autonomy, beneficence, non-maleficence, justice, veracity"],
  ["Autonomy gives the right to","Refuse and to choose among reasonable options; not to demand harmful care"],
  ["Veracity in practice","Honesty, including telling patients about errors"],
  ["Ozar's three models","Commercial, guild, interactive; interactive is preferred"],
  ["Ozar's top central value","The patient's life and general health"],
  ["Refusing a patient because of HIV status","Discrimination; standard precautions apply to all"],
  ["When treatment is beyond your competence","Refer; do not attempt"],
  ["Ending the dentist-patient relationship","Reasonable notice, emergency care in the interim, records available"],
  ["Ontario advertising prohibitions","Testimonials, superiority, comparisons, promises of results, appeals to fear, incentives"],
  ["Do websites count as advertising?","Yes, under RCDSO guidance; some social media too"],
  ["Rocket v RCDSO (1990)","Supreme Court: advertising limits must be proportionate"],
  ["Altering dates or services on an insurance claim","Fraud: never ethical, even at a patient's request"]
 ],
 questions: [
  ["The ethical principle that requires a dentist to explain a procedure's options honestly and let a capable patient decide is:","Autonomy",["Beneficence","Justice","Non-maleficence"],"Respect for autonomy underlies informed consent. Veracity supports it, but the right to choose comes from autonomy."],
  ["A dentist accidentally perforates the pulpal floor of tooth 3.6 during access. The patient has not noticed. The most appropriate action is to:","Tell the patient what happened, explain the options and document it",["Repair the perforation with MTA and keep the event out of the chart","Complete the treatment and mention it only if symptoms later develop","Refer the patient to an endodontist without saying why"],"Veracity requires timely, honest disclosure, including the effect on prognosis and any options. Hiding the event breaches both ethics and accurate recordkeeping."],
  ["A dentist declines to treat a patient solely because the medical history shows the patient is HIV positive. This is best described as:","Discrimination, since standard precautions protect staff and patients",["Acceptable, provided a referral is arranged to another willing dentist","Acceptable, because each dentist may choose whom to treat","Required, because this protects staff and other patients in the practice"],"Refusal on the basis of HIV status breaches the principle of justice and human rights law. The same precautions are used for everyone, as infection status is often unknown."],
  ["A new patient has crowns from another dentist with open margins and caries. He asks whether the previous dentist was incompetent. The most appropriate response is to:","Describe what you can see and treat, without judging care you did not witness",["Tell him the prior dentist was negligent and advise legal action","Say nothing about the crowns to protect a colleague's reputation","Call the previous dentist to demand a refund on the patient's behalf"],"You owe the patient the truth about present conditions, but you do not know the original circumstances. Hiding the problem would fail the patient, and condemning a colleague is not justified on this information."],
  ["A general dentist finds that a planned third molar removal on 4.8 is beyond her training because the root lies close to the inferior alveolar canal and is markedly curved. The most appropriate action is to:","Refer to a suitably skilled clinician with the relevant records",["Attempt the removal under CBCT guidance and refer if a problem occurs","Obtain a signed consent form that discloses the extra nerve injury risk","Delay removal until the root anatomy changes over time"],"KSA 41 requires self-awareness about competence and timely referral. Signed consent does not make an operator competent, and the standard of care does not relax."],
  ["A patient asks a dentist to change the treatment date on a claim so that his insurance will pay. The most appropriate response is to:","Decline and explain that claims must accurately record the services and dates",["Agree, because the patient's financial interest is the priority","Agree, provided the patient signs a statement accepting responsibility","Bill the insurer for a different service of the same value"],"Misrepresenting a claim is fraud and a breach of veracity. A patient's consent cannot make it acceptable, and it exposes both parties to legal and professional action."],
  ["Which advertising statement is most clearly prohibited under the RCDSO advisory on professional advertising?","We offer the best, most advanced implant dentistry in the city",["Our office is open on Saturdays and has wheelchair access","Dr. Tran is a general dentist who provides implant services","New patient examinations are available by appointment"],"Claims of superiority and superlatives are unverifiable and prohibited. Hours, access and a stated scope with registration status are factual and permitted."],
  ["A general dentist's website states that the practice does orthodontics. To meet the RCDSO advisory, the website must also:","State whether the dentist is a general practitioner or a specialist",["List the dentist's continuing education courses in orthodontics","Display reviews from satisfied orthodontic patients of the practice","Include a promise of the results that patients may expect"],"Any reference to an area of practice must disclose registration status. Reference to continuing education, testimonials and expected results are all listed as prohibited."],
  ["A dentist posts a patient's five-star comment and before-and-after photographs on the practice's Instagram page. In Ontario, the most significant concern about the comment is that:","It is a testimonial, which the College prohibits in advertising",["Social media posts are exempt from the College's advertising rules","Patient comments must first be reviewed and approved by the insurer","Positive reviews may only be shown in the waiting room"],"RCDSO treats testimonials as prohibited, and social media can count as advertising. The photographs raise a separate consent issue under privacy law."],
  ["A dentist decides to end the professional relationship with a persistently abusive patient who is midway through root canal treatment on 2.5. Which approach is most appropriate?","Give reasonable notice, stabilise the tooth and arrange transfer of records",["Stop treatment at once and remove the patient from the practice's list","Complete the entire treatment plan, including the crown, before giving notice","Send the patient to a colleague without saying anything about the reason"],"A dentist may end a relationship but must not abandon the patient, which means dealing with urgent needs and giving time to find care. Records follow on the patient's direction."],
  ["A dentist notices that an associate smells of alcohol at work and has made several unusual clinical mistakes. The most appropriate first priority is to:","Protect patients now, including stopping him from treating if impaired",["Wait for a patient to complain so there is firm evidence before acting","Speak with the patients affected and advise them to sue","Reduce his schedule quietly without raising the problem with him"],"Patient safety outranks collegial loyalty, and help for the colleague should follow promptly. Depending on the facts and province, the regulator or a health programme may need to be involved."],
  ["In Ozar and Sokol's interactive model of the dentist-patient relationship, decisions are made by:","The dentist and the patient, combining expertise with patient values",["The dentist alone, based on professional expertise","The patient alone, as a buyer in a commercial exchange","The regulator, using a published list of accepted treatments"],"Each brings something the other lacks. The guild model leaves decisions with the expert, and the commercial model treats care as a sale."]
 ]
};

window.CONTENT["m14-n07"] = {
 understand: `
 <p><b>Touching a patient without consent is a legal wrong, however well done the treatment.</b> In Canada, treatment with no valid consent can be <b>battery</b>. Consent given without adequate information leads instead to a claim in <b>negligence</b>. <i>Reibl v Hughes</i> (1980) set the modified objective test: would a reasonable person in this patient's position have refused if properly informed? So disclosure turns on the patient's circumstances, not merely on what other dentists tend to say.</p>
 <p><b>Valid consent has four requirements</b> (Ontario's Health Care Consent Act, or HCCA, as summarised by RCDSO): it relates to the treatment, it is informed, it is voluntary, and it is not obtained by misrepresentation or fraud. <b>Informed</b> means telling the patient:</p>
 <ul>
 <li>the nature of the treatment and expected benefits;</li>
 <li>material risks and side effects, for this individual;</li>
 <li>reasonable alternatives, including no treatment, and the likely consequences of not treating;</li>
 <li>answers to their questions, plus all costs.</li>
 </ul>
 <p>A risk is <b>material</b> because of frequency or gravity. A minor but likely risk should be disclosed, and so should a rare but serious one, such as lasting numbness after removal of 4.8. Consent can be written, verbal or implied. <b>A signed form is evidence of consent, not consent itself</b>, and verbal consent should be noted in the chart. A refusal should be documented in the same way, and consent can be withdrawn.</p>
 <p><b>Capacity</b> is the ability to understand the relevant information and appreciate the reasonably foreseeable consequences of a decision. It is decision-specific and can change.</p>
 <ul>
 <li><b>Ontario:</b> there is no minimum age for consent. A capable child consents for themself; if incapable, a substitute decision-maker decides, in a ranked list set out in the HCCA.</li>
 <li><b>Elsewhere:</b> most provinces rely on the common-law mature minor rule, so capacity rather than a fixed age governs (recognised by the Supreme Court in <i>A.C. v Manitoba</i>, 2009). Some have statutes. British Columbia's Infants Act lets a minor consent once the provider has explained the care, is satisfied the minor understands it and judges it in the minor's best interests. New Brunswick's Medical Consent of Minors Act treats those aged 16 and over as adults, and lets a younger minor consent if the attending practitioner, including a dentist, judges the minor capable and the treatment in the minor's best interests.</li>
 <li><b>Quebec:</b> the Civil Code applies a threshold of 14. Under 14, a parent or tutor consents; at 14 or over, the minor can consent alone to care required by their health, with extra rules for serious-risk care and for refusals.</li>
 </ul>
 <p><b>Emergencies:</b> where delay would cause serious harm and consent cannot be obtained, treatment may be allowed under provincial law, within narrow limits.</p>
 <p><b>Records (KSA 42).</b> Records should be dated, legible, attributable and contemporaneous, and should cover history, findings, diagnosis, plan, consent, treatment, drugs, referrals and communications. Never erase: paper corrections leave the original readable, and electronic entries lock with an audit trail. <b>Retention is provincial.</b> In Ontario, clinical and financial records are kept at least <b>10 years from the last entry</b>; for a minor, at least <b>10 years after the 18th birthday</b>. Patients may obtain copies, while the dentist keeps the originals.</p>
 <p><b>Privacy.</b> <b>PIPEDA</b> is the federal law covering commercial activity. Provincial laws deemed substantially similar replace it in those provinces: private-sector acts in Alberta, BC and Quebec, and health acts in Ontario (PHIPA), New Brunswick, Nova Scotia, and Newfoundland and Labrador. Common rules: collect what is needed, disclose only with consent or legal authority, safeguard, give access and correct errors. Staff discussing a patient at a dinner party is a breach. A duty to report child abuse overrides confidentiality.</p>
 <p><b>Why the exam cares.</b> KSAs 12, 41 and 42: name the missing element, identify who may consent, and apply the rule for that province.</p>`,
 connect: [
  {to:"m14-n06", why:"Consent and privacy are the legal forms of autonomy and trust, and a stem often tests both at once."},
  {to:"m23-n07", why:"Consent for children raises capacity, custody and who may sign, and child protection is the point where confidentiality gives way."},
  {to:"m24-n03", why:"Capacity is decision-specific in dementia, and substitute decision-makers are used the same way as with incapable minors."},
  {to:"m21-n02", why:"Paraesthesia after third molar surgery is the textbook material risk: rare, but serious enough that a reasonable patient would want to know."},
  {to:"m11-n09", why:"A prescription and its record are a legal document, so drug details and instructions belong in the same chart rules."}
 ],
 apply: {
  vignette: "A 15-year-old attends a dental office in Ontario alone for a painful carious lesion on 3.6. She understands the diagnosis, the options of restoration or extraction, the risks of each and what happens without treatment, and she chooses restoration. She asks that her parents not be told. Which of the following is the most appropriate course?",
  options: ["Accept her consent as a capable minor, treat her and document the assessment of capacity","Refuse treatment until a parent signs, since she is under the age of majority","Call her parents, since all patients under the age of 18 have no right to privacy","Treat her today only under an emergency exception to the consent requirement"],
  answer: "Accept her consent as a capable minor, treat her and document the assessment of capacity",
  steps: [
   "The ask: who may consent, in Ontario, and how to handle confidentiality.",
   "Facts that matter: age 15, explicit evidence of understanding and appreciation, Ontario, and a non-emergency.",
   "Cross out requiring a parent: Ontario has no minimum age, and capacity decides. In Quebec a 15-year-old could also consent to needed care, under a different rule.",
   "Cross out calling the parents: a capable minor holds the right to confidentiality about her own care. Encouraging her to involve them is reasonable, but overriding her is not.",
   "Cross out the emergency exception: a capable patient is present and able to consent, so no exception is needed.",
   "The survivor applies the capacity test, records it, and notes what the patient decided and why, as RCDSO guidance expects."
  ]
 },
 teach: {
  prompt: "A patient signed your office's consent form but says after removal of 3.8 that nobody told him lip numbness could be permanent. Explain why the form may not protect you, and what would have.",
  model: "The form is evidence that a conversation took place, not proof of informed consent. In Ontario, the HCCA and RCDSO expect disclosure of the nature of treatment, benefits, material risks for this patient, alternatives including no treatment, and cost. Permanent numbness is rare but serious, so it is material, and roots lying close to the inferior alveolar canal make it more relevant still. Under Reibl v Hughes, the court asks whether a reasonable person in his position would have decided differently if told. What would protect you is a real discussion, the chance to ask questions and time to think, and a chart note of what was said, the specific risk and the decision."
 },
 cards: [
  ["Four requirements for valid consent (HCCA)","Related to treatment, informed, voluntary, no misrepresentation or fraud"],
  ["Disclosure items for informed consent","Nature, benefits, material risks, alternatives including none, consequences of no treatment, questions, costs"],
  ["What makes a risk material","Frequency or gravity: common minor risks and rare serious ones both count"],
  ["Reibl v Hughes test","Modified objective: reasonable person in this patient's position"],
  ["No consent vs inadequate information","Battery vs negligence"],
  ["Definition of capacity","Able to understand relevant information and appreciate foreseeable consequences"],
  ["Minimum age for consent in Ontario","None: capacity decides"],
  ["Quebec minor's threshold for care required by health","14 years"],
  ["Ontario record retention","10 years from last entry; minors, 10 years after turning 18"],
  ["Who keeps original dental records?","The dentist; the patient may obtain copies"],
  ["Federal private-sector privacy law","PIPEDA"],
  ["Provinces with substantially similar health privacy laws","Ontario, New Brunswick, Nova Scotia, Newfoundland and Labrador"]
 ],
 questions: [
  ["Which of the following is NOT a required element of valid consent to treatment under Ontario's Health Care Consent Act?","A written form signed by the patient",["Consent that relates to the treatment","Consent that is informed","Consent that is given voluntarily"],"Consent may be verbal or written, and RCDSO asks that verbal consent be documented. Relating to treatment, being informed, voluntariness and absence of fraud are the four elements."],
  ["A dentist obtains a signature on a consent form from a patient immediately before removal of 4.8, without any discussion of risks. From a legal point of view, this consent is most likely to be:","Inadequate, since a form does not replace disclosure of material risks",["Adequate, since a signed form is legal proof of informed consent","Adequate, if the form lists every possible complication","Inadequate, since dental consent must be witnessed and recorded by a lawyer"],"A signature is only evidence. Consent is informed through a conversation about risks, alternatives and consequences, with time to ask questions."],
  ["The Canadian standard for how much a dentist must disclose, stemming from Reibl v Hughes, is best described by what:","A reasonable person in the patient's position would want to know",["The average dentist in the community would customarily tell a patient","The patient later says they would have wanted","The treating dentist personally thinks is relevant"],"The modified objective test uses a reasonable person with this patient's particular circumstances. A professional-custom standard was rejected, and a purely subjective test relies on hindsight."],
  ["A 45-year-old professional singer needs a procedure with a very small risk of altered tongue sensation. Which statement best applies to this risk?","It should be disclosed, since it could matter to a person in her position",["It can be omitted, since its frequency falls below one percent","It can be omitted, since dentists generally do not mention it","It should be disclosed only if she asks about all possible risks"],"Materiality reflects gravity, frequency and the individual's circumstances. Ontario's RCDSO guidance notes that risks with serious consequences should be disclosed even when unlikely, consistent with Reibl v Hughes."],
  ["A dentist completes an extraction on a tooth the patient had explicitly refused to have removed. The legal wrong best describing this is:","Battery",["Negligence","Defamation","Breach of contract only"],"Treatment beyond or against consent is unauthorised touching, which is battery. Negligence is the usual claim where consent was given but disclosure was inadequate."],
  ["A person has capacity to consent to a dental treatment if the person is able to:","Understand the relevant information and appreciate the consequences",["Read and sign the consent form without assistance from family members","Agree with the treatment recommended by the dentist","Pass a standard written test of general cognitive function and memory"],"Ontario's HCCA defines capacity by understanding and appreciation, for that decision, and the common-law test used elsewhere is the same in substance. Disagreeing with the dentist is not evidence of incapacity."],
  ["A 75-year-old with mild dementia is able to understand and weigh a simple restoration on 2.4, but not the implications of a full-mouth rehabilitation. The most accurate statement is that she:","May be capable for the restoration but incapable for the rehabilitation",["Is incapable for all treatment because of her diagnosis","Is capable for all treatment if she can state her name and the date","Needs a court-appointed guardian before consent to any care is valid"],"Capacity is decision-specific and can vary over time. A diagnosis of dementia does not by itself remove capacity, and a substitute decision-maker is needed only for decisions she cannot make."],
  ["A 15-year-old attends a dental office in Montreal for treatment required by his health, and he understands it. Under the Civil Code of Quebec, valid consent can come from:","The 15-year-old himself",["His parent or tutor only","Both his parents together","The court only"],"Quebec sets 14 as the threshold for care required by health. A refusal by a minor of 14 or over is handled differently and may require a court order, and Ontario applies capacity instead of an age."],
  ["A dentist in Ontario wants to discard the chart of a patient last treated 6 years ago, when she was an 8-year-old. The patient is now 14. The earliest date for lawful disposal is:","10 years after the patient's 18th birthday",["10 years after the patient's last appointment","When the patient reaches the age of 18","Immediately, once an electronic copy has been made"],"RCDSO requires minors' records to be kept at least 10 years from the date the patient turned 18. Originals must be retained even when they are scanned."],
  ["After a procedure, a dentist realises the chart entry for the anaesthetic is wrong. The most appropriate correction in a paper record is to:","Draw one line through the error, add the correction, date and initial it",["Remove the page and rewrite the entire visit in full","Apply correction fluid, write the proper note over it and initial it","Leave the error and tell the patient by telephone only"],"A correction must leave the original readable, and be dated and attributable, so that the chart keeps its integrity. Obliterating an entry looks like tampering, even with honest intent."],
  ["A patient of an Ontario practice who has an outstanding account moves away and directs the dentist to send copies of his radiographs and records to his new dentist. The most appropriate response is to:","Send the copies as directed, and pursue the account separately",["Withhold copies until the outstanding account has been paid",  "Send only the radiographs and retain the clinical notes","Send the original chart and retain no copy in the office"],"In Ontario, patients have a right of access to copies of their record, and RCDSO states that withholding records because of an unpaid balance is unacceptable. The account is pursued separately, and originals stay with the dentist for the retention period."],
  ["A patient's employer phones a dental office asking whether an employee attended yesterday and what was done. The office should:","Decline to confirm any information without the patient's consent",["Confirm attendance but not any details of the treatment","Provide the details, since the employer pays the benefit plan","Provide the details, if the call is from the human resources office"],"Even the fact of attendance is personal health information. Disclosure needs consent or legal authority, and an employer's interest does not supply either."],
  ["Which statement best describes the federal PIPEDA in relation to a private dental practice in Ontario?","PHIPA is substantially similar, so it governs the dentist's health information",["PIPEDA applies in full, because privacy is a federal matter under the Constitution","No privacy statute applies, because dentists are self-regulated","Alberta's Personal Information Protection Act governs all Canadian dentists"],"The federal Privacy Commissioner lists PHIPA as substantially similar for health information. PIPEDA remains relevant for matters such as cross-border transfers, and other provinces have different arrangements."],
  ["A dentist's assistant accesses the dental chart of a relative who is a patient of the practice, out of curiosity. This is best described as:","A privacy breach, even though the assistant works in the practice",["Permitted, since all staff may read any chart they can open","Permitted, since the chart is not disclosed outside the office","A breach only if the relative later suffers actual harm"],"Access is limited to what a person's role requires. Unauthorised viewing within an office is still a breach, and the custodian may have to notify the patient under PHIPA and similar laws."]
 ]
};

window.CONTENT["m14-n08"] = {
 understand: `
 <p><b>The dentist sees the head, face and mouth, where much physical abuse of children is visible.</b> That is why KSA 44 asks you to recognise and act, not to investigate.</p>
 <p><b>Signs that should raise suspicion of child abuse:</b></p>
 <ul>
 <li>An injury that does not fit the story or the child's development, changing accounts, or delayed care.</li>
 <li>Bruises of different ages, or in protected sites: ears, neck, cheeks, the angle of the jaw.</li>
 <li>Patterned marks: fingers, hand, cord loop, adult-sized bite marks, cigarette or immersion burns.</li>
 <li>A torn labial frenum in an infant from forced feeding or a blow; repeated fractured or discoloured teeth.</li>
  <li>A withdrawn or frightened child, or a carer who will not leave the child alone with you.</li>
 </ul>
 <p><b>Dental neglect</b> is a carer's wilful failure to seek and follow through with treatment needed for function and freedom from pain and infection. Remove barriers first; report if care is still not pursued.</p>
 <p><b>The duty to report is provincial, and every jurisdiction has one.</b> The ages of protection range from 16 to 19, and the details differ.</p>
 <ul>
 <li><b>Ontario</b> (Child, Youth and Family Services Act): a professional who has <b>reasonable grounds to suspect</b> a child under 16 is in need of protection must report directly and promptly to a children's aid society. A report about a 16- or 17-year-old is permitted, not required. The report cannot be delegated, must be repeated if new grounds arise, and overrides confidentiality. Failure to report is an offence, with a fine of up to $5,000, and a report made without malice is protected.</li>
 <li><b>Quebec</b> (Youth Protection Act): professionals working with children must report to the Director of Youth Protection any situation in which a child's security or development may be in danger.</li>
 </ul>
 <p>Certainty is not needed: record what you saw and the exact words used, and leave investigation to the agency.</p>
 <p><b>Adults.</b> A capable adult facing partner violence or elder abuse usually decides: ask privately, document, offer resources, and disclose only with consent or legal authority. Examples are provincial: Ontario's Fixing Long-Term Care Act, 2021 requires anyone with reasonable grounds to suspect abuse of a long-term care home resident that caused harm or risk of harm to report it to the Director, and Ontario's PHIPA permits disclosure to reduce a significant risk of serious bodily harm. Substance use (KSA 44) shows as rampant cervical caries and xerostomia with methamphetamine, palatal perforation with cocaine, or repeated requests for opioids. Respond without judgement and refer.</p>
 <p><b>Social determinants (KSA 46).</b> Income, education, insurance, geography, Indigeneity, immigration, age and disability shape oral health more than brushing does. Dental care sits largely outside medicare: in the Canadian Health Measures Survey (2007-2009), 62% had private insurance, 6% public and 32% none, and 17% had avoided a dental visit in the past year because of cost. Quinonez argues this was a political choice. Those with most need get least care: the <b>inverse care law</b>. Public coverage is a federal and provincial patchwork.</p>
 <p><b>The Canadian Dental Care Plan</b> (federal, checked November 2026): for residents with no access to private dental coverage, adjusted family net income under $90,000 and a filed tax return. There is no co-payment under $70,000, 40% from $70,000 to $79,999, and 60% from $80,000 to $89,999. Orthodontics is not yet covered.</p>
 <p><b>Why the exam cares.</b> Expect a suspicious injury (report, do not confront), neglect (support, then report) and access (name the barrier).</p>`,
 connect: [
  {to:"m23-n07", why:"Child abuse recognition and consent in children are taught in paediatrics; this node supplies the Canadian reporting law that turns suspicion into action."},
  {to:"m14-n07", why:"The duty to report child abuse is the clearest example of a legal duty that overrides confidentiality and privacy law."},
  {to:"m14-n05", why:"Community programmes and water fluoridation exist largely because the social determinants here block access to individual care."},
  {to:"m24-n03", why:"Elder abuse and neglect are recognised in the same way, but capacity and the adult's own choices change what the dentist may do."},
  {to:"m21-n07", why:"Facial and dentoalveolar fractures must be checked against the history, since mismatched mechanisms are a key sign of non-accidental injury."}
 ],
 apply: {
  vignette: "A 4-year-old is brought to a dental office in Ontario by her father with a fractured 6.1 and bruising on both cheeks and the left ear. He says she fell off a chair this morning. The bruises are yellow-green and purple, and the child is withdrawn and avoids eye contact. Which of the following is the most appropriate action?",
  options: ["Treat the tooth, document the findings and report directly to a children's aid society today","Question the father in detail and report only if he admits to hitting her","Treat the tooth and review the bruises again at a recall in six months","Ask the child's family physician to decide whether a report is needed"],
  answer: "Treat the tooth, document the findings and report directly to a children's aid society today",
  steps: [
   "The ask: what to do with a suspicion of abuse in a child under 16 in Ontario.",
   "Facts that matter: bruises of different ages in protected sites (cheeks, ear), a single fall offered as the cause, and a withdrawn child.",
   "Cross out questioning the father until he admits it: the dentist does not investigate, and confrontation can put the child at further risk. Reasonable grounds, not proof, trigger the duty.",
   "Cross out waiting for recall: the duty is to report promptly, and a delay leaves the child exposed.",
   "Cross out handing the decision to the physician: the duty is personal and cannot be delegated.",
   "The survivor meets the clinical and legal duties: treat the injury, record objective findings and exact words, and report directly to the children's aid society."
  ]
 },
 teach: {
  prompt: "Explain to a new associate why she should report a suspected abused child even when she is not sure, and what exactly she should and should not do.",
  model: "The law asks for reasonable grounds to suspect, not proof, because the agency investigates and a delay can cost the child. In Ontario the duty belongs to her personally for any child under 16: she cannot pass it to a colleague or the family doctor, and confidentiality does not excuse her. She is protected if she reports without malice, and failing to report is an offence. She should treat the dental problem, document injuries, dates and the exact words used, and call the children's aid society that day. She should not interrogate the carer, accuse anyone or promise the child secrecy, since that could put the child at further risk."
 },
 cards: [
  ["Threshold for reporting child abuse","Reasonable grounds to suspect; certainty is not required"],
  ["Ontario: age with mandatory duty to report","Under 16; a report for 16 and 17 is permitted"],
  ["Ontario: to whom a report goes","A children's aid society, made directly by the person with the suspicion"],
  ["Quebec: to whom a report goes","The Director of Youth Protection"],
  ["Ontario penalty for a professional failing to report","Offence, fine of up to $5,000"],
  ["Suspicious bruise sites","Ears, neck, cheeks, angle of the jaw; bruises of differing ages"],
  ["Torn labial frenum in an infant","Suggests forced feeding or a blow"],
  ["Dental neglect: when to report","After barriers are addressed and needed care is still not pursued"],
  ["Abuse of a capable adult","Usually needs the adult's consent to disclose; check provincial exceptions"],
  ["CHMS 2007-2009 insurance figures","62% private, 6% public, 32% none; 17% avoided care for cost"],
  ["Inverse care law","Those with the greatest need receive the least care"],
  ["CDCP eligibility","No private dental coverage, family income under $90,000, tax return filed"]
 ],
 questions: [
  ["The legal threshold that triggers a dentist's duty to report suspected child abuse in Ontario is:","Reasonable grounds to suspect a child is or may be in need of protection",["Clear evidence that a named caregiver has physically abused the child","A direct disclosure of abuse made by the child to the dentist in person","Physical injuries that a physician has examined and confirmed as abuse"],"The CYFSA uses reasonable grounds to suspect, and investigation is the agency's role. Waiting for proof or disclosure defeats the purpose of reporting."],
  ["A dentist in Ontario suspects that a 9-year-old is being physically abused. The report must be made to:","A children's aid society, by the dentist personally",["The police, through the practice manager","The child's school, by the dentist","The Royal College of Dental Surgeons, by letter"],"The duty is personal and goes to a children's aid society; it cannot be delegated to staff or colleagues. Police may become involved, but the statute names the society."],
  ["A 17-year-old in Ontario tells her dentist that her stepfather hits her. Which statement best describes the dentist's legal position?","A report to a children's aid society is permitted but not mandatory",["A report is mandatory, because she is under the age of majority","A report is prohibited, because she is over 16 years of age","A report is permitted only if the stepfather consents"],"The Ontario duty to report applies to children under 16; for 16- and 17-year-olds a report may be made. The dentist should discuss options and support with the patient."],
  ["A dentist informs the parents of a 6-year-old with untreated painful caries and abscesses, offers a payment plan and arranges a free programme, but the parents miss every appointment for a year. The most appropriate action is to:","Report suspected dental neglect to the child protection agency",["Wait until the child is old enough to attend alone","Extract all affected teeth without the parents' consent","Discharge the family from the practice for missed visits"],"Neglect is a failure to obtain needed care once the need is known and barriers have been addressed. Discharge abandons the child, and treatment without consent outside an emergency is not lawful."],
  ["Which oral finding in an infant who is not yet walking most strongly raises suspicion of physical abuse?","A torn upper labial frenum without a credible explanation",["A natal tooth in the lower incisor region with a small ulcer","Bohn's nodules along the palatal margin","A white coating on the tongue and cheeks that wipes off easily"],"In a non-mobile infant, a frenum tear suggests forced feeding or a blow and needs explanation. The others are developmental or common findings unrelated to trauma."],
  ["A child has bruises on the cheeks and ears. The father says the child fell on the playground. Which feature makes the injuries most suspicious?","Bruises in protected areas at different stages of healing",["Bruises over the shins and the front of the knees","A single bruise on the forehead with a small abrasion","Scraped palms consistent with breaking a fall"],"Accidental falls injure bony prominences such as the forehead, shins and hands; ears and cheeks are protected. Bruises of different ages suggest repeated injury."],
  ["After a dentist reports a suspicion of abuse in good faith that later proves unfounded, which statement is correct in Ontario?","The dentist is immune from legal action unless malicious or lacking reasonable grounds",["The dentist is liable to the family for any harm to reputation caused by the report","The dentist must pay costs of the investigation conducted by the agency","The dentist has breached privacy law by disclosing health information without consent"],"The CYFSA protects reporters who act without malice and on reasonable grounds, and the duty to report overrides confidentiality. This protection exists so that fear of liability does not deter reporting."],
  ["A 42-year-old woman presents with a fractured 1.1 and a bruised neck and says her partner did it. She asks the dentist not to tell anyone. The most appropriate response is to:","Treat her, document the findings, offer resources and respect her wishes",["Call the police at once, since all domestic violence must be reported","Telephone her partner to discuss what happened at home","Decline treatment until she makes a police report herself"],"A capable adult generally controls disclosure of her own information, unless a specific legal duty applies or there is serious risk of imminent harm. Contacting the partner could put her in danger."],
  ["A 28-year-old has rampant cervical caries on many teeth, severe xerostomia and marked tooth wear, and admits to recent stimulant use. The pattern most strongly suggests:","Methamphetamine use",["Cocaine applied to the gingiva","Long-term opioid maintenance","Chronic cannabis smoking"],"Methamphetamine causes xerostomia, sugar cravings and bruxism, giving the meth mouth pattern. Topical cocaine causes local gingival lesions, and cocaine sniffing can perforate the palate."],
  ["In Canada, the main reason that cost is a major barrier to dental care, compared with physician care, is that:","Most dental care is outside publicly funded medicare and paid privately",["Dental fees are set nationally at levels higher than medical fees","Federal law forbids provinces from funding dental services","Dentists are not permitted to accept government insurance plans"],"Outside limited public programmes, dental care is paid by private insurance or out of pocket; the CHMS found 32% had no insurance. Quinonez traces this to political choices when medicare was built."],
  ["The observation that people with the greatest oral health need often receive the least dental care is called the:","Inverse care law",["Prevention paradox","Healthy worker effect","Hawthorne effect"],"Tudor Hart's inverse care law describes care flowing away from need. The prevention paradox describes how most cases arise in people at moderate risk."],
  ["A 50-year-old Ontario resident has no dental coverage through work or family, filed a tax return, and has an adjusted family net income of $75,000. Under the Canadian Dental Care Plan as described on canada.ca in 2026, she:","Is eligible and pays a 40% co-payment for covered services",["Is eligible and pays no co-payment for covered services","Is not eligible, because her income exceeds $70,000","Is not eligible, because adults aged 18 to 64 are excluded"],"The plan covers incomes under $90,000, with no co-payment below $70,000, 40% between $70,000 and $79,999 and 60% between $80,000 and $89,999. Eligibility is reconfirmed each year."],
  ["Which change would most directly address a social determinant of oral health for low-income children in a town?","A school-based sealant and varnish programme funded by public health",["A leaflet on tooth brushing technique given to each family at school entry","Longer evening opening hours at a fee-for-service clinic","Increased use of radiographs at recall examinations"],"Public programmes delivered where children are remove cost and transport barriers. Leaflets assume the family can act on advice, and extra hours do not address cost."]
 ]
};
