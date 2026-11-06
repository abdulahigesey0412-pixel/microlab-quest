/* AFK Quest compare pairs: 40 look-alikes that exams set traps with.
   Every fact is drawn from the verified node content in content/*.js (see the node ids on each pair).
   Drill statements are each true of exactly one side: "a" or "b". */
window.PAIRS = (window.PAIRS || []).concat([

 { id:"p01", title:"Pemphigus vulgaris vs mucous membrane pemphigoid", a:"Pemphigus vulgaris", b:"Mucous membrane pemphigoid",
   table:[
    ["Antibody target","Desmogleins in desmosomes (desmoglein 3; desmoglein 1 when skin is involved)","Hemidesmosome and basement membrane proteins"],
    ["Split level","Intraepithelial, suprabasal, with acantholysis","Subepithelial: the whole epithelium lifts"],
    ["Blister","Thin roof, rarely seen intact; ragged ulcers","Thicker roof, may stay intact; tougher blood blisters"],
    ["Direct immunofluorescence","Net-like intercellular IgG and C3","Linear band along the basement membrane"],
    ["Main danger","Life-threatening; skin involved; oral lesions often come first","Eye scarring (symblepharon) that can lead to blindness"],
    ["Typical oral picture","Ragged erosions where blisters have burst","Desquamative gingivitis"],
    ["After the biopsy","Urgent referral and systemic immunosuppression","Eye examination"]
   ],
   key:"The <b>level of the split</b> decides everything: pemphigus splits <b>within</b> the epithelium (desmoglein, net-like IF, can kill); pemphigoid splits <b>below</b> it (basement membrane, linear IF, can blind). A Nikolsky sign occurs in both, so it does not separate them.",
   drill:[
    ["IgG against desmoglein 3","a","A desmosome protein, so cells separate within the epithelium"],
    ["Linear band of immunofluorescence along the basement membrane","b","Antibodies bind the basement membrane zone"],
    ["Acantholysis above the basal layer","a","Suprabasal intraepithelial split"],
    ["Refer for an eye examination because of symblepharon risk","b","Conjunctival scarring can lead to blindness"],
    ["Blisters may stay intact because the full epithelium forms the roof","b","Subepithelial split gives a thick roof"],
    ["Potentially fatal without systemic immunosuppression","a","Skin involvement; needs urgent referral"],
    ["Net-like intercellular IgG and C3","a","Antibody coats the desmosomes between cells"],
    ["Exfoliative cytology shows rounded acantholytic cells","a","Cells fall apart when desmosomes fail"],
    ["Desquamative gingivitis is the classic oral presentation","b","Gingival epithelium peels off at the basement membrane"],
    ["A Nikolsky rub peels off the full thickness of the epithelium","b","The split lies at the basement membrane"]
   ],
   nodes:["m10-n03","m04-n12"] },

 { id:"p02", title:"Recurrent aphthous ulcer vs recurrent intraoral herpes", a:"Recurrent aphthous ulcer", b:"Recurrent intraoral herpes",
   table:[
    ["Cause","Immune-mediated; not infectious","Reactivated HSV-1, latent in the trigeminal ganglion"],
    ["Site in a healthy patient","Movable, non-keratinised mucosa: lips, cheeks, ventral tongue","Bound, keratinised mucosa: hard palate, attached gingiva"],
    ["Vesicle stage","None: begins as an ulcer","Clusters of small vesicles that burst into small painful ulcers"],
    ["Typical trigger in the dental setting","Minor mucosal trauma or stress can set one off, but it stays on movable mucosa","A few days after a local anaesthetic injection or dental treatment"],
    ["Contagious?","No","Yes: vesicles and fresh ulcers shed virus"],
    ["Smear","No viral change","Tzanck smear: multinucleated, virally altered epithelial cells"],
    ["Management","Topical corticosteroid; severe or new adult cases: check iron, B12, folate, coeliac or bowel disease","Palliative; an antiviral helps only if started at the prodrome or within about the first day"]
   ],
   key:"<b>Site first</b>: in a healthy patient, ulcers on <b>movable</b> mucosa are aphthae; a cluster on <b>bound, keratinised</b> palate or gingiva is recurrent herpes.",
   drill:[
    ["Cluster of small painful ulcers on the hard palate three days after a palatal injection","b","Treatment stimulates latent HSV; keratinised site"],
    ["Recurrent 5 mm ulcer on the labial mucosa that heals within two weeks without a scar","a","Minor aphtha on movable mucosa"],
    ["No vesicle stage at any point","a","Aphthae start as ulcers"],
    ["Elective care is best deferred while lesions are at the vesicle stage","b","Infectious; risk of herpetic whitlow"],
    ["Topical corticosteroid is the usual treatment","a","Immune-mediated"],
    ["Multinucleated epithelial cells on a smear","b","Tzanck finding of herpesvirus"],
    ["Add genital ulcers and uveitis and think of Behçet disease","a","Behçet disease presents with aphthae"],
    ["A severe new adult case prompts checks for iron, B12, folate and coeliac disease","a","Deficiencies and bowel disease drive aphthae"],
    ["Antiviral therapy helps only when started at the prodrome","b","Antivirals act on replicating virus"],
    ["Heals in about 7 to 10 days on the attached gingiva","b","Recurrent intraoral herpes on bound mucosa"]
   ],
   nodes:["m10-n03","m04-n08"] },

 { id:"p03", title:"Leukoplakia vs oral lichen planus", a:"Leukoplakia", b:"Oral lichen planus",
   table:[
    ["What the name means","Clinical term of exclusion: a white plaque of questionable risk once known causes are excluded","A specific immune disease: T lymphocytes attack basal keratinocytes"],
    ["Pattern and site","Any site, a plaque with no explanation; most concern on floor of mouth, ventrolateral tongue, soft palate complex","Usually bilateral, posterior buccal mucosa; also tongue and gingiva"],
    ["Surface","Homogeneous plaque; speckled or warty forms carry more risk","Lacy Wickham striae (reticular); erosive forms"],
    ["Symptoms","Usually painless","Reticular painless; erosive painful"],
    ["Histology","Anything from hyperkeratosis to dysplasia or carcinoma","Band of T lymphocytes, basal cell damage, saw-tooth rete ridges"],
    ["Typical patient","Concern rises with tobacco and heavy alcohol","Middle-aged women"],
    ["Management","Biopsy; the grade of dysplasia sets the plan","Topical corticosteroid for erosive forms; follow up (about 1% transformation in pooled reviews)"]
   ],
   key:"Lichen planus is a <b>pattern diagnosis</b> (bilateral lacy striae, lymphocyte band). Leukoplakia is what is left when <b>no cause or pattern</b> explains a white plaque, so it is always biopsied.",
   drill:[
    ["Bilateral lacy white striae on the posterior buccal mucosa","b","Wickham striae"],
    ["A diagnosis reached only after known causes are excluded","a","Leukoplakia is a term of exclusion"],
    ["Band of T lymphocytes beneath damaged basal cells","b","Lichen planus histology"],
    ["Histology may range from simple hyperkeratosis to carcinoma","a","A clinical label, not a histological one"],
    ["Erosive form hurts and is treated with topical corticosteroid","b","Immune-mediated"],
    ["Single unexplained white plaque on the floor of mouth of a heavy smoker","a","High-risk site plus risk factors: biopsy"],
    ["Saw-tooth rete ridges on biopsy","b","Basal cell damage reshapes the ridges"],
    ["A speckled surface increases its risk","a","Speckled leukoplakia carries more risk than homogeneous"],
    ["Pooled reviews put malignant transformation at roughly 1%","b","Listed as potentially malignant; follow up"],
    ["Classically affects middle-aged women","b","Typical patient for lichen planus"]
   ],
   nodes:["m10-n01","m10-n02"] },

 { id:"p04", title:"Dentigerous cyst vs odontogenic keratocyst", a:"Dentigerous cyst", b:"Odontogenic keratocyst (OKC)",
   table:[
    ["Tissue of origin","Reduced enamel epithelium","Dental lamina rests"],
    ["Relation to tooth","Attached at the CEJ of an unerupted tooth (often 3.8, 4.8, 1.3, 2.3)","Posterior mandible and ramus; can surround an unerupted tooth and mimic a dentigerous cyst"],
    ["Radiograph","Lucency around the crown; a follicular space beyond about 5 mm raises suspicion","Unilocular or multilocular, scalloped corticated margin; grows along medullary bone with little expansion"],
    ["Lining","Thin, non-keratinised stratified squamous; mucous, ciliated or sebaceous metaplasia","Thin, uniform (about 6-8 cells), corrugated parakeratin, palisaded dark basal cells"],
    ["Genetics","None characteristic","PTCH1 mutation in most; multiple OKCs suggest Gorlin syndrome"],
    ["Recurrence and treatment","Enucleate and send the lining (rarely gives rise to ameloblastoma)","High recurrence (about 29% in one pooled review); enucleation plus peripheral ostectomy or Carnoy's solution, years of follow-up"]
   ],
   key:"Both can sit around an unerupted tooth and look the same on film, so <b>histology decides</b>: corrugated parakeratin with palisaded basal cells is an OKC (recurs); a thin non-keratinised lining attached at the CEJ is a dentigerous cyst.",
   drill:[
    ["Lining arises from reduced enamel epithelium","a","Fluid collects between it and the crown"],
    ["Thick keratin in the aspirate","b","Keratinised lining"],
    ["Corrugated parakeratinised lining with palisaded dark basal cells","b","OKC histology"],
    ["Mucous (goblet) cells in the lining are metaplasia without significance on their own","a","Dentigerous lining metaplasia"],
    ["Recurrence after enucleation of about 29% in one pooled review","b","Fragile lining and satellite cysts"],
    ["Attached at the cemento-enamel junction of an unerupted 1.3","a","Classic dentigerous position"],
    ["Multiple lesions with palmar pits and bifid ribs","b","Gorlin syndrome"],
    ["Grows along the medullary bone with little bucco-lingual expansion","b","Can be large before it is noticed"],
    ["Carnoy's solution or peripheral ostectomy is often added to enucleation","b","To remove satellite cysts"],
    ["Fluid collects between the enamel epithelium and the crown","a","Mechanism of the dentigerous cyst"]
   ],
   nodes:["m10-n05","m09-n07"] },

 { id:"p05", title:"Ameloblastoma vs odontogenic keratocyst", a:"Conventional ameloblastoma", b:"Odontogenic keratocyst (OKC)",
   table:[
    ["WHO 2022 category","Odontogenic tumour: benign but infiltrative","Cyst of the jaws ('keratocystic odontogenic tumour' dropped since 2017)"],
    ["Radiograph","Multilocular 'soap bubble'; root resorption; bone expansion","Unilocular or multilocular, scalloped; little expansion"],
    ["Histology","Palisaded columnar cells with reverse polarity around stellate reticulum-like tissue","Thin corrugated parakeratin, palisaded dark basal cells"],
    ["Molecular change","BRAF V600E","PTCH1"],
    ["Why it recurs","Infiltrates marrow beyond the radiographic margin","Fragile lining and satellite cysts leave fragments"],
    ["Usual treatment","Resection with a margin of clinically normal bone","Enucleation, often with peripheral ostectomy or Carnoy's solution"],
    ["Syndrome link","None","Gorlin syndrome when multiple"]
   ],
   key:"<b>Expansion and root resorption</b> point to ameloblastoma (resect with a margin). <b>Growth along the bone with little expansion</b> and keratin point to OKC (enucleate plus adjuncts).",
   drill:[
    ["Reverse polarity of palisaded columnar cells","a","Ameloblastoma signature"],
    ["BRAF V600E offers a drug target in selected cases","a","Commonest molecular change in conventional ameloblastoma"],
    ["PTCH1 mutation in most cases","b","Shared with Gorlin syndrome"],
    ["Classed as a cyst, not a tumour, under WHO 2022","b","OKC kept as a cyst"],
    ["Curettage alone recurs because the lesion infiltrates marrow past the radiographic edge","a","Benign but infiltrative"],
    ["Multilocular soap-bubble lucency resorbing the molar roots","a","Classic ameloblastoma film"],
    ["Keratin in the aspirate","b","Keratinised lining"],
    ["Resection with a margin of normal bone gives the lowest recurrence","a","Usual treatment for conventional ameloblastoma"],
    ["Satellite cysts in the wall leave fragments after enucleation","b","Reason for adjuncts and long follow-up"],
    ["Multiple lesions in a young patient suggest a syndrome","b","Gorlin syndrome"]
   ],
   nodes:["m10-n06","m10-n05"] },

 { id:"p06", title:"Exotoxin vs endotoxin", a:"Exotoxin", b:"Endotoxin",
   table:[
    ["Chemistry","Protein","Lipopolysaccharide (LPS); active part lipid A"],
    ["Release","Secreted on purpose by living bacteria","Not secreted: part of the Gram-negative outer membrane, released when the cell breaks apart"],
    ["Genes","Often on plasmids or phages, so they come and go between strains","Structural part of the outer membrane"],
    ["Action","Specific: tetanospasmin locks muscles; diphtheria toxin kills heart and nerve cells","Generic whatever the species: fever, inflammation, septic shock"],
    ["Potency","Potent","Less potent per molecule"],
    ["Antigenicity and vaccine","Strongly antigenic; can be made into a toxoid (tetanus, diphtheria vaccines)","Weakly antigenic; no toxoid"],
    ["Heat","Generally heat-labile proteins (staphylococcal enterotoxins are an exception)","Heat-stable"]
   ],
   key:"Exo = <b>protein</b>: specific, potent, vaccine-able as a toxoid. Endo = <b>LPS (lipid A)</b>: generic fever and shock, heat-stable, no toxoid, and central to periodontitis.",
   drill:[
    ["Lipid A is the active part","b","Lipid A of LPS"],
    ["Can be converted into a toxoid","a","Protein shape kept, harm removed"],
    ["Released when Gram-negative cells die and break apart","b","Part of the outer membrane"],
    ["Tetanospasmin is an example","a","Specific neurotoxin"],
    ["Causes fever and septic shock whatever the bacterial species","b","Generic action"],
    ["Genes often carried on plasmids or phages","a","Can vary between strains"],
    ["Strongly antigenic","a","Proteins make good antigens"],
    ["A central player in periodontitis because the pathogens are Gram-negative","b","LPS drives inflammation"],
    ["Each one does a specific job on a specific target","a","For example diphtheria toxin on heart and nerve"],
    ["Cannot be made into a vaccine toxoid","b","Weakly antigenic LPS"]
   ],
   nodes:["m04-n03","m04-n12"] },

 { id:"p07", title:"Staphylococci vs streptococci", a:"Staphylococci", b:"Streptococci",
   table:[
    ["Arrangement","Grape-like clusters","Chains (S. pneumoniae as diplococci)"],
    ["Catalase","Positive: a drop of peroxide bubbles","Negative"],
    ["Growth","Hardy: plain nutrient agar; survive drying and salt","Fussy: blood agar and extra CO₂; killed by drying"],
    ["Infection pattern","Localised and walled off: boils, abscesses (coagulase)","Spreading: cellulitis, erysipelas, necrotising fasciitis"],
    ["Splitting test","Coagulase: S. aureus positive","Haemolysis on blood agar, then Lancefield group"],
    ["Penicillin","Most S. aureus make penicillinase; MSSA gets cloxacillin or cephalexin","Still mostly penicillin-sensitive"],
    ["Oral role","S. aureus carried in the anterior nares by about a third of people","Viridans streptococci dominate the mouth: caries, pulpitis, infective endocarditis"]
   ],
   key:"<b>Catalase</b> splits them: staphylococci are catalase-positive <b>clusters that wall off</b> (abscess); streptococci are catalase-negative <b>chains that spread</b> and still mostly respond to penicillin.",
   drill:[
    ["A drop of hydrogen peroxide on the colony bubbles","a","Catalase-positive"],
    ["Needs blood agar and extra CO₂ to grow well","b","Fussy organisms"],
    ["The coagulase-positive species is the dangerous one","a","S. aureus"],
    ["Alpha-haemolysis leaves a green ring on blood agar","b","Viridans streptococci and S. pneumoniae"],
    ["Most S. aureus isolates produce penicillinase","a","S. aureus resists penicillin"],
    ["Lancefield grouping sorts the beta-haemolytic members","b","Groups A to V"],
    ["Coagulase-negative species infect catheters, valves and joint prostheses","a","S. epidermidis on foreign bodies"],
    ["Dominant mouth flora that cause caries","b","S. mutans and other viridans species"],
    ["Exfoliative toxin peels the skin of young children","a","Scalded skin syndrome from S. aureus"],
    ["Rheumatic fever can follow a pharyngitis","b","Group A streptococcus"]
   ],
   nodes:["m04-n04","m04-n05"] },

 { id:"p08", title:"Type I vs type IV hypersensitivity", a:"Type I (immediate)", b:"Type IV (delayed)",
   table:[
    ["Mediator","IgE on mast cells; histamine and leukotrienes","T cells (Th1, CD8); no antibody"],
    ["Timing","Minutes","48 to 72 hours"],
    ["Sensitisation","Allergen drives IgE that coats mast cells; re-exposure cross-links IgE","Hapten (nickel, monomer, eugenol, mercury) binds tissue protein; T cells are sensitised"],
    ["Dental examples","Anaphylaxis to penicillin, latex proteins or chlorhexidine","Contact dermatitis to nickel or acrylic monomer; lichenoid reaction to amalgam"],
    ["Latex","Reaction to the rubber proteins","Reaction to the chemical accelerators in the glove"],
    ["Management","Systemic form: IM epinephrine; antihistamines and steroids are secondary","Avoid the hapten; patch testing helps confirm it"]
   ],
   key:"Ask the clock: <b>minutes</b> after exposure is IgE and mast cells, type I (epinephrine); <b>two to three days</b> later is T cells, type IV (patch test, avoid the hapten).",
   drill:[
    ["Wheeze and urticaria minutes after amoxicillin","a","IgE-mediated"],
    ["Itchy rash under a metal watch buckle two days after putting it on, in a patient sensitised to nickel","b","Nickel contact dermatitis"],
    ["Lichenoid lesion confined to the mucosa touching an amalgam","b","Mercury acts as a hapten"],
    ["Mast cells release histamine on re-exposure","a","IgE cross-linking"],
    ["Patch testing helps confirm it","b","Delayed T-cell reaction"],
    ["Reaction to natural rubber latex proteins","a","Can cause anaphylaxis"],
    ["Reaction to glove chemical accelerators","b","Contact dermatitis"],
    ["The tuberculin skin test works by this mechanism","b","Delayed T-cell response"],
    ["Intramuscular epinephrine reverses the systemic form","a","Anaphylaxis"],
    ["Spina bifida or many past operations raise the latex risk","a","Repeated latex exposure sensitises"]
   ],
   nodes:["m04-n12","m13-n03"] },

 { id:"p09", title:"Reversible vs symptomatic irreversible pulpitis", a:"Reversible pulpitis", b:"Symptomatic irreversible pulpitis",
   table:[
    ["Response to cold","Sharp pain that stops within seconds of removing the stimulus","Pain that lingers after the stimulus is removed"],
    ["Spontaneous pain","None","Yes; may be referred"],
    ["Fibres","A-delta: sharp, brief, from dentinal fluid flow","C fibres: dull, throbbing, lingering"],
    ["Can the pulp heal?","Yes, once the cause is removed","No: pulpal treatment or extraction"],
    ["Treatment","Remove the cause and seal; deep caries: keep the pulp closed (selective removal)","Pulpotomy or pulpectomy, dressing and temporary seal; no antibiotic"]
   ],
   key:"The stopwatch: pain that <b>stops within seconds</b> of removing the cold, with no spontaneous pain, is reversible; <b>lingering</b> or <b>spontaneous</b> pain is irreversible.",
   drill:[
    ["Cold pain that vanishes within a few seconds","a","Fluid shift in tubules, no lasting inflammation"],
    ["Throbbing pain that wakes the patient at night","b","Spontaneous pain"],
    ["Cold pain still present a minute after the ice is removed","b","Lingering response"],
    ["Treated by removing the caries or leaking restoration and sealing","a","Remove the cause"],
    ["An emergency pulpotomy relieves the pain in most patients","b","The most inflamed tissue is in the chamber"],
    ["Pain is carried mainly by C fibres","b","Dull, throbbing, lingering"],
    ["Selective caries removal with the pulp kept closed is appropriate","a","Vital pulp, no irreversible symptoms"],
    ["Pain may be felt in the opposing arch","b","Referred pain"],
    ["Sharp, brief pain after sweet food from fluid movement in exposed tubules","a","A-delta, hydrodynamic"],
    ["Penicillin did not relieve it in a placebo-controlled trial","b","Nagle 2000: inflammation, not infection"]
   ],
   nodes:["m20-n01","m20-n02","m20-n05"] },

 { id:"p10", title:"Acute apical abscess vs periodontal abscess", a:"Acute apical abscess", b:"Periodontal abscess",
   table:[
    ["Pulp test","No response: necrotic or previously treated pulp","Tooth responds"],
    ["Probing","No deep pocket needed","Deep periodontal pocket at the swelling"],
    ["Centre of the lesion","The apex, with the lamina dura lost there","Beside the root, at the pocket"],
    ["Drainage","Through the root canal and/or incision of a fluctuant swelling","Through the pocket, with debridement"],
    ["Definitive care","Root canal treatment or extraction","Periodontal debridement and therapy"]
   ],
   key:"<b>Test the pulp</b>: a swelling on a tooth that responds, with a deep pocket, is periodontal; an abscess of pulpal origin needs a <b>necrotic, infected canal</b>.",
   drill:[
    ["Swelling beside 3.6 with a 9 mm pocket; the tooth responds briskly to cold","b","Vital pulp plus pocket"],
    ["No response to cold or EPT","a","Necrotic pulp"],
    ["Drained through the root canal","a","Source is the canal"],
    ["Drained through the pocket and debrided","b","Source is the pocket"],
    ["Leaving the tooth open to the mouth increases flare-ups","a","Adds oral bacteria to the canal"],
    ["An infected lateral periodontal cyst presents the same way: lateral swelling on a responsive tooth","b","Pulp tests separate it from an abscess of pulpal origin"],
    ["Requires an infected root canal","a","Endodontic origin"],
    ["Lesion centred on the apex","a","Bacteria leave through the apex"],
    ["Root canal treatment is part of definitive care","a","Removes the infected pulp space"],
    ["Managed with periodontal debridement rather than endodontics","b","Pulp is healthy"]
   ],
   nodes:["m20-n01","m20-n05","m20-n02","m19-n05"] },

 { id:"p11", title:"Gingivitis vs periodontitis stage I", a:"Gingivitis", b:"Periodontitis stage I",
   table:[
    ["Attachment loss","None (CAL 0)","Worst interdental CAL 1-2 mm"],
    ["Radiographic bone loss","None","Coronal third, under 15%"],
    ["Probing depth","3 mm or less (deeper only as a pseudo-pocket)","Maximum 4 mm or less, mostly horizontal loss"],
    ["Defining criterion","BOP at 10% of sites or more with PD 3 mm or less","Interdental CAL at 2 or more non-adjacent teeth (not from another cause)"],
    ["Extent terms","Localised 10-30% of sites bleeding; generalised over 30%","Localised under 30% of teeth; generalised; molar/incisor pattern"],
    ["Course","Reversible: resolves when plaque control resumes (Löe)","A periodontitis patient for life, even when stable"]
   ],
   key:"Any <b>interdental attachment loss</b> at 2 or more non-adjacent teeth, with no other cause, makes it periodontitis. Gingivitis bleeds but has <b>CAL 0</b>.",
   drill:[
    ["BOP at 25% of sites, probing depths 3 mm or less, no attachment loss","a","Localised gingivitis"],
    ["Worst interdental CAL 2 mm at two non-adjacent teeth","b","Meets the case definition; CAL 1-2 mm"],
    ["Bone loss under 15%, confined to the coronal third","b","Stage I RBL"],
    ["Drug-induced enlargement: PD 5 mm with the margin 5 mm coronal to the CEJ","a","Pseudo-pocket, CAL 0"],
    ["Löe showed it resolves within about a week of restarting cleaning","a","Experimental gingivitis"],
    ["Remains this diagnosis for life even after successful treatment","b","Stable periodontitis is still periodontitis"],
    ["Staged and graded under the 2017 classification","b","Periodontitis only"],
    ["Called localised when 10 to 30% of sites bleed","a","Gingivitis extent"],
    ["Maximum probing depth 4 mm with mostly horizontal bone loss","b","Stage I complexity"],
    ["Red, shiny labial gingiva of the upper incisors in a mouth breather","a","Mouth-breathing gingivitis"]
   ],
   nodes:["m19-n03","m19-n02","m19-n04"] },

 { id:"p12", title:"Periodontitis stage III vs stage IV", a:"Stage III", b:"Stage IV",
   table:[
    ["Teeth lost to periodontitis","4 or fewer","5 or more"],
    ["Complexity","PD 6 mm or more; vertical loss 3 mm or more; furcation class II or III; moderate ridge defect","Stage III factors plus a need for complex rehabilitation"],
    ["Mobility","Not a defining factor","Secondary occlusal trauma (mobility degree 2 or more)"],
    ["Ridge defect","Moderate","Severe"],
    ["Bite and function","No bite collapse or masticatory dysfunction","Masticatory dysfunction; bite collapse, drifting or flaring"],
    ["Teeth remaining","Not a criterion","Under 20 teeth (10 opposing pairs)"]
   ],
   key:"Both have worst interdental CAL of <b>5 mm or more</b> and bone loss extending to the middle third of the root or beyond. Stage IV needs <b>5 or more teeth lost</b> or a <b>need for complex rehabilitation</b> (mobility 2 or more, bite collapse, flaring, under 20 teeth, severe ridge defect).",
   drill:[
    ["Three teeth lost to periodontitis, CAL 6 mm, PD 7 mm, no other complexity","a","4 or fewer teeth lost"],
    ["Six teeth lost to periodontitis","b","5 or more"],
    ["Only 18 teeth remain (fewer than 10 opposing pairs)","b","Under 20 teeth"],
    ["A class II furcation on 4.6 is the most complex finding","a","Stage III complexity factor"],
    ["Flaring of the upper incisors with new diastemas and bite collapse","b","Needs complex rehabilitation"],
    ["Degree 2 mobility from secondary occlusal trauma","b","Stage IV complexity"],
    ["A moderate ridge defect is the most complex finding","a","Stage III"],
    ["Severe ridge defect","b","Stage IV"],
    ["Vertical bone loss of 3 mm with no teeth lost and a stable bite","a","Stage III complexity only"],
    ["Masticatory dysfunction","b","Stage IV"]
   ],
   nodes:["m19-n03"] },

 { id:"p13", title:"Periodontitis grade A vs grade C", a:"Grade A (slow)", b:"Grade C (rapid)",
   table:[
    ["Direct evidence: bone or CAL loss over 5 years","None","2 mm or more"],
    ["% bone loss at worst tooth ÷ age","Under 0.25","Over 1.0"],
    ["Phenotype","Heavy biofilm with little destruction","Destruction beyond what the biofilm explains"],
    ["Modifiers","None: modifiers can only raise a grade","Smoking 10 or more a day; HbA1c 7.0% or more"],
    ["Starting point","Assume B; move down only with evidence of slow progression","Assume B; move up with evidence of rapid progression or a modifier"]
   ],
   key:"Start at <b>B</b>. Move to <b>A</b> only with evidence of slow progression (no loss over 5 years, ratio under 0.25). Move to <b>C</b> with rapid progression (2 mm or more in 5 years, ratio over 1.0) or a modifier (10 or more cigarettes a day, HbA1c 7.0% or more).",
   drill:[
    ["40% bone loss at the worst tooth in a 30-year-old","b","40 ÷ 30 = 1.33, over 1.0"],
    ["15% bone loss at the worst tooth in a 70-year-old","a","15 ÷ 70 = 0.21, under 0.25"],
    ["No bone loss on radiographs taken 5 years apart","a","Direct evidence of no progression"],
    ["3 mm of new bone loss over 5 years","b","2 mm or more"],
    ["Smokes 12 cigarettes a day","b","10 or more a day"],
    ["HbA1c of 8.1% in a patient with diabetes","b","7.0% or more"],
    ["Heavy plaque and calculus with only slight destruction","a","Phenotype of slow disease"],
    ["Destruction out of proportion to the biofilm present","b","Phenotype of rapid disease"],
    ["Ratio of percentage bone loss to age of 0.2","a","Under 0.25"]
   ],
   nodes:["m19-n03"] },

 { id:"p14", title:"Reactionary vs reparative dentine", a:"Reactionary dentine", b:"Reparative dentine",
   table:[
    ["Cells that form it","The original odontoblasts, which survived","New odontoblast-like cells from the pulp"],
    ["Stimulus","A mild insult the odontoblasts survive","An insult that kills the original odontoblasts"],
    ["Tubules","Tubular, continuous with the old dentine","Irregular, with few or no tubules"],
    ["Role","A continuation of existing dentine","A barrier; seals the pulpal ends of dead tracts"],
    ["Under a pulp cap","Not the bridge","Forms the dentine bridge (for example under calcium hydroxide, beneath its necrotic zone)"]
   ],
   key:"Both are <b>tertiary dentine</b>, formed only under a stimulus. Ask whether the <b>original odontoblasts survived</b>: yes gives tubular reactionary dentine; no gives irregular, atubular reparative dentine from new odontoblast-like cells.",
   drill:[
    ["Laid down by odontoblasts that survived the insult","a","Same cells continue working"],
    ["Laid down by new odontoblast-like cells after odontoblast death","b","Recruited pulp cells"],
    ["Tubules continuous with the earlier dentine","a","Same odontoblast processes"],
    ["Irregular, with few or no tubules","b","New cells, no original processes"],
    ["The dentine bridge under a calcium hydroxide pulp cap","b","Forms beneath a zone of necrosis"],
    ["Seals the pulpal ends of dead tracts","b","Acts as a barrier"],
    ["Follows a mild insult the odontoblast layer survives","a","Odontoblasts intact"],
    ["A barrier rather than a continuation","b","Atubular"],
    ["Keeps the tubular pattern of primary dentine","a","Continuous with the old"]
   ],
   nodes:["m06-n03","m08-n06"] },

 { id:"p15", title:"Amalgam vs resin composite", a:"Amalgam", b:"Resin composite",
   table:[
    ["Retention","Mechanical: undercuts, boxes, grooves","Adhesive: micromechanical enamel etch and the dentine hybrid layer"],
    ["Margin design","About 90-degree occlusal butt joint, no bevel (brittle, thin edges chip)","Enamel margins may be bevelled to expose rod ends (e.g. a long bevel on a Class IV); posterior occlusal bevels not routine"],
    ["Moisture","Tolerates poor moisture control (but a zinc alloy contaminated by moisture expands later)","Needs a dry field; saliva or blood severely weakens the bond"],
    ["Setting change","Sets by mercury reaction; high-copper alloys creep little","Polymerisation shrinkage of a few percent by volume becomes stress"],
    ["Margins over time","Corrosion products seal the microgap, so leakage falls with age","Shrinkage stress can open gaps, white lines and leakage"],
    ["Placement","Condensed in bulk; about 1.5-2 mm occlusal thickness","Conventional composite in increments of 2 mm or less (bulk-fills are marketed for 4-5 mm), light-cured with blue light (camphorquinone, peak near 468 nm)"],
    ["Still indicated for","Large posterior restorations with poor isolation or subgingival margins, heavy loads, cores","Adhesive, tooth-coloured restorations where isolation is good"]
   ],
   key:"Amalgam is <b>retained mechanically</b> and forgives moisture; composite is <b>bonded</b>, shrinks on curing and fails if the field is wet.",
   drill:[
    ["The gamma-2 phase creeps and corrodes","a","Tin-mercury phase"],
    ["A Class I box has the worst C-factor","b","Shrinkage stress with five bonded walls"],
    ["Delayed expansion after saliva contamination of a zinc-containing mix","a","Hydrogen gas released inside the mass"],
    ["The oxygen-inhibited layer lets the next increment bond","b","Air stops surface polymerisation"],
    ["Margins self-seal with corrosion products","a","Leakage falls with age"],
    ["Silane couples the filler to the matrix","b","Stress transfer to filler"],
    ["Needs undercuts, boxes or grooves for retention","a","Does not bond to tooth"],
    ["An enamel margin bevel enlarges the bonded area","b","Exposes rod ends for etching"],
    ["Never vacuum a spill","a","Vaporises mercury"],
    ["White lines at enamel margins from shrinkage stress","b","Polymerisation shrinkage"],
    ["Conventional forms are placed in oblique increments of 2 mm or less","b","Within depth of cure, lower C-factor"]
   ],
   nodes:["m08-n05","m08-n04","m15-n01","m15-n02","m15-n03"] },

 { id:"p16", title:"Conventional glass ionomer vs resin-modified glass ionomer", a:"Conventional GIC", b:"Resin-modified GIC (RMGI)",
   table:[
    ["Setting reaction","Acid-base only: polyacrylic acid attacks fluoroaluminosilicate glass; Ca then Al cross-link","Acid-base plus light-cured polymerisation (dual set)"],
    ["Extra components","None beyond glass, polyacrylic acid and water (tartaric acid controls the set)","HEMA monomer and a photoinitiator"],
    ["Early moisture sensitivity","High both ways: water makes it chalky, drying cracks it; coat with varnish or unfilled resin","Less moisture sensitive; cures on command"],
    ["Strength","Brittle, low tensile strength, wears","Stronger"],
    ["Water sorption","Lower","Higher"],
    ["Near the pulp","No unset monomer","Unset HEMA irritates: not placed directly on an exposed pulp"],
    ["Class II in primary molars","Evidence against it (suits Class I)","Supported by expert opinion"]
   ],
   key:"Same glass, same chemical bond to tooth, similar fluoride release. RMGI adds <b>HEMA and a photoinitiator</b>: light-cure on command, stronger, less moisture sensitive, but more water sorption and an irritant monomer to keep off an exposed pulp.",
   drill:[
    ["Contains HEMA monomer","b","Resin component"],
    ["Sets only by an acid-base reaction","a","No polymerisation"],
    ["Can be light-cured on command","b","Photoinitiator"],
    ["Goes chalky if wetted in the first minutes, so it is coated with varnish","a","Mobile ions wash out"],
    ["Not placed directly on an exposed pulp because unset monomer irritates","b","HEMA"],
    ["Absorbs more water","b","Hydrophilic resin"],
    ["Evidence argues against it for Class II restorations in primary molars","a","Brittle, low tensile strength"],
    ["Its set depends entirely on the slow ionic reaction, which keeps maturing over hours to days","a","No resin network to give early strength"],
    ["Stronger and less moisture sensitive","b","Resin network"]
   ],
   nodes:["m08-n06","m23-n04"] },

 { id:"p17", title:"Addition silicone (PVS) vs polyether", a:"Addition silicone (PVS)", b:"Polyether",
   table:[
    ["Setting reaction","Platinum-catalysed addition; no by-product","Cationic ring-opening of imine groups"],
    ["Wettability","Hydrophobic; surfactants added to help","Hydrophilic: good in a slightly moist sulcus, wets stone well"],
    ["Storage and pouring","Most dimensionally stable; can be poured days later","Accurate but absorbs water on storage: keep dry"],
    ["Stiffness","Less rigid","Stiff: hard to remove over undercuts, can lock into open embrasures"],
    ["Set inhibited by","Sulfur in latex gloves poisons the platinum catalyst","Not platinum-catalysed"],
    ["Working time and taste","Working time extended by refrigerating before mixing","Short working time; bitter taste"],
    ["Disinfection","Tolerates immersion","Spray or short immersion (about 10 minutes)"]
   ],
   key:"PVS is the <b>stable but hydrophobic</b> one (pour days later; dry the field; no latex). Polyether is the <b>hydrophilic but thirsty and stiff</b> one (store dry; block out undercuts).",
   drill:[
    ["Latex gloves stop the putty setting","a","Sulfur poisons platinum"],
    ["Must be stored dry because it absorbs water","b","Hydrophilic"],
    ["Can be poured days later","a","No reaction by-product"],
    ["Wets a slightly moist sulcus well without added surfactant","b","Naturally hydrophilic"],
    ["Bitter taste and a short working time","b","Polyether drawbacks"],
    ["Early formulations released hydrogen, so pouring was delayed","a","Many modern products contain a palladium scavenger"],
    ["Stiff enough to lock into open embrasures","b","Block out undercuts"],
    ["Sets by cationic ring-opening","b","Imine groups"],
    ["A platinum (chloroplatinic acid) catalyst drives the set","a","Addition reaction of vinyl and silane groups"],
    ["Can be immersed in disinfectant without the water uptake that limits the other to a short soak","a","Does not absorb water"]
   ],
   nodes:["m08-n07","m16-n02"] },

 { id:"p18", title:"Alginate vs agar", a:"Alginate", b:"Agar",
   table:[
    ["Type","Irreversible hydrocolloid","Reversible hydrocolloid"],
    ["Setting","Chemical: sodium or potassium alginate plus calcium sulfate gives insoluble calcium alginate","Physical: melts to a sol when heated, gels when cooled; repeatable"],
    ["Additives","Trisodium phosphate (retarder), diatomaceous earth (filler)","Borax, which retards gypsum and softens the cast surface (counter with potassium sulfate)"],
    ["Controlling working time","Cooler mixing water lengthens it (never change the water/powder ratio)","Set by cooling in a water-cooled tray"],
    ["Typical use","Cheap and fast: study models, opposing arches, orthodontic models, preliminary denture impressions","Now uncommon clinically: needs a conditioning bath and a water-cooled tray; still used to duplicate casts"]
   ],
   key:"Both are water gels that shrink in air (syneresis) and swell in water (imbibition), so both are poured within minutes. <b>Agar</b> sets by <b>cooling</b> (physical, reversible); <b>alginate</b> sets by a <b>calcium reaction</b> (chemical, irreversible).",
   drill:[
    ["Sets when calcium sulfate reacts with sodium alginate","a","Chemical, irreversible"],
    ["Melts to a sol when heated and gels on cooling","b","Physical, reversible"],
    ["Trisodium phosphate controls working time","a","Retarder"],
    ["Needs a water-cooled tray","b","Gels on cooling"],
    ["Borax in it can leave a soft, chalky cast surface","b","Borax retards gypsum"],
    ["Cooler mixing water lengthens its working time","a","Chemical set slows when cool"],
    ["The set can be reversed and repeated","b","Temperature-driven"],
    ["The usual cheap material for study models and preliminary denture impressions","a","Hydrophilic, fast, inexpensive"],
    ["Potassium sulfate in a fixing solution protects the stone from it","b","Counteracts borax"]
   ],
   nodes:["m08-n07"] },

 { id:"p19", title:"Class II division 1 vs Class II division 2", a:"Class II division 1", b:"Class II division 2",
   table:[
    ["Upper central incisors","Proclined or average","Retroclined"],
    ["Upper lateral incisors","Proclined or average, like the centrals","Often flared"],
    ["Overjet","Increased (large)","Not the defining feature"],
    ["Overbite","Variable; open-bite tendency with mouth breathing or a thumb habit","Usually deep; can be traumatic, biting into palatal gingiva"],
    ["Main risk","Trauma to proclined incisors (rises above about 3 mm overjet); lip trap worsens it","Damage to palatal gingiva from the deep bite"],
    ["Functional appliance","Suits a growing patient with a retrusive mandible","Upper incisors must be proclined first: they block forward posturing"]
   ],
   key:"Both have the lower incisal edge <b>behind</b> the upper cingulum plateau. Division 1: upper incisors <b>proclined</b>, big overjet. Division 2: upper centrals <b>retroclined</b>, laterals often flared, deep overbite.",
   drill:[
    ["Upper central incisors retroclined","b","Defining feature of division 2"],
    ["Large overjet with the lower lip trapped behind the upper incisors","a","Lip trap keeps increasing overjet"],
    ["Lower incisors bite into the palatal gingiva","b","Traumatic deep overbite"],
    ["Upper central incisors proclined or of average inclination, with an increased overjet","a","Defining feature of division 1"],
    ["Upper laterals often flared","b","Centrals retroclined, laterals flared"],
    ["Upper incisors must be proclined before a functional appliance","b","They block forward posturing"],
    ["Interception from about 5 mm of overjet can reduce incisor injuries","a","Trauma risk with proclined incisors"],
    ["A long-standing thumb habit produces this incisor pattern","a","Proclines uppers, increases overjet"],
    ["Usually a deep overbite","b","Retroclined centrals over-erupt"]
   ],
   nodes:["m22-n01","m07-n05","m22-n06"] },

 { id:"p20", title:"Skeletal vs dental crossbite", a:"Dental crossbite", b:"Skeletal crossbite",
   table:[
    ["Maxillary basal bone","Normal width","Narrow"],
    ["Upper molar inclination","Tipped palatally","Upright, or already tipped buccally to compensate"],
    ["Correction","Tip the teeth back: cross elastics for a single tooth; Z-spring with bite planes for an incisor","Orthopaedic expansion while the suture is open; surgical help in adults"],
    ["Anterior form","Pseudo-Class III: one or two incisors, Class I molars, edge to edge in retruded contact","Skeletal Class III with maxillary deficiency: refer for early facemask"],
    ["If left untreated","Trapped lower incisor pushed labially: recession, mobility, incisal wear","Skeletal Class III worsens with growth"]
   ],
   key:"Look at the <b>molars and the base</b>: palatally tipped teeth on a normal-width base are dental (tip them back); upright or buccally tipped molars on a narrow base are skeletal (expand the suture, or surgery in adults).",
   drill:[
    ["Upper molars already tipped buccally","b","Compensating for a narrow base"],
    ["Upper teeth tipped palatally on a normal-width base","a","Tipping them back corrects it"],
    ["Corrected with a Z-spring and posterior bite planes","a","Single incisor in crossbite"],
    ["Needs expansion while the midpalatal suture is open","b","Orthopaedic correction"],
    ["In an adult it needs surgical assistance","b","Suture closed"],
    ["Incisors reach edge to edge in retruded contact, molars Class I","a","Pseudo-Class III"],
    ["Single-tooth posterior crossbite with normal arch widths treated with cross elastics","a","Tooth problem, not base"],
    ["Maxillary deficiency referred for early facemask treatment","b","Skeletal Class III"],
    ["Worsens with growth","b","Skeletal Class III"]
   ],
   nodes:["m22-n02","m22-n04","m22-n01"] },

 { id:"p21", title:"Apexogenesis vs apexification", a:"Apexogenesis", b:"Apexification",
   table:[
    ["Pulp status","Vital","Necrotic"],
    ["Aim","Keep the pulp alive so the root finishes","Create an apical barrier to fill against"],
    ["Root outcome","Length, wall thickness and apical closure continue","Walls stay thin: no living tissue lays down dentine"],
    ["Procedures","Indirect pulp treatment, direct pulp cap, partial (Cvek) or full pulpotomy","Long-term calcium hydroxide, or an MTA apical plug in one or two visits"],
    ["Main drawback or pitfall","Fails if inflammation is deeper than judged: bleeding must stop under NaOCl","Long-term calcium hydroxide takes many visits and may raise cervical fracture risk"]
   ],
   key:"Pulp <b>alive</b>: apexogenesis, and the root keeps growing. Pulp <b>dead</b>: apexification (a barrier; thin walls stay thin) or regenerative endodontics.",
   drill:[
    ["Partial pulpotomy after a crown fracture exposes the pulp of an immature 1.1","a","Vital pulp therapy"],
    ["MTA apical plug in a necrotic immature incisor","b","Barrier to fill against"],
    ["Root walls continue to thicken","a","Living pulp lays dentine"],
    ["Walls stay thin","b","No living tissue in the canal"],
    ["Calcium hydroxide dressings changed over many months","b","Traditional apexification"],
    ["Success includes apical closure keeping pace with the contralateral tooth","a","Continued root development"],
    ["Prolonged calcium hydroxide may weaken the cervical dentine","b","Fracture risk"],
    ["Bleeding must stop under a sodium hypochlorite pellet before capping","a","Shows inflammation is shallow"],
    ["Chosen when a sinus tract and periapical radiolucency show necrosis","b","Pulp is dead"]
   ],
   nodes:["m20-n07","m23-n03"] },

 { id:"p22", title:"Pulpotomy vs pulpectomy in primary teeth", a:"Pulpotomy", b:"Pulpectomy",
   table:[
    ["Pulp removed","Coronal pulp only; radicular pulp kept","All pulp, chamber and canals"],
    ["Indication","Carious exposure with a healthy radicular pulp","Irreversible pulpitis or necrosis in a restorable tooth"],
    ["Deciding test or requirement","Bleeding stops with a damp pellet within several minutes","Roots with minimal or no resorption"],
    ["Material","MTA or other calcium silicate, formocresol, or ferric sulfate on the stumps; not calcium hydroxide","Resorbable paste: zinc oxide eugenol or iodoform; never gutta-percha"],
    ["Rule it out when","Bleeding will not stop or pus is present (convert or extract)","Excessive resorption, perforated floor, lesion reaching the crypt, near exfoliation"]
   ],
   key:"Pulpotomy keeps a <b>healthy radicular pulp</b> (bleeding stops within minutes). Pulpectomy removes a <b>non-vital or irreversibly inflamed</b> pulp and fills the canals with a <b>resorbable</b> paste.",
   drill:[
    ["Bleeding from the stumps stops with a damp pellet within several minutes","a","Radicular pulp judged healthy"],
    ["Canals filled with zinc oxide eugenol","b","Resorbable filling"],
    ["Ferric sulfate agglutinates blood proteins to seal the stumps","a","Haemostatic medicament"],
    ["Furcation sinus on a restorable molar with long roots","b","Necrosis, roots worth keeping"],
    ["Gutta-percha must never be used","b","Filling must resorb with the root"],
    ["Calcium hydroxide is advised against because of internal resorption","a","AAPD on primary pulpotomy"],
    ["Needs roots with minimal or no resorption","b","AAPD requirement"],
    ["The procedure to convert to when haemorrhage cannot be controlled","b","Inflammation reaches the radicular pulp"],
    ["Formocresol fixes the surface tissue","a","Pulpotomy medicament"],
    ["A post-operative radiograph checks how well the canals are filled","b","Canal filling"]
   ],
   nodes:["m23-n03"] },

 { id:"p23", title:"Vasovagal syncope vs hypoglycaemia", a:"Vasovagal syncope", b:"Hypoglycaemia",
   table:[
    ["Mechanism","Vagal surge and vasodilation lower brain perfusion","Low glucose starves the brain"],
    ["Who","Anxious patient, often fasting, seated upright","Patient on insulin or a sulfonylurea who missed food"],
    ["Pulse","Slow","Usually fast"],
    ["Early signs","Pale, sweaty, nauseated, light-headed","Adrenergic: tremor, palpitations, hunger; then confusion, slurred speech"],
    ["First action","Supine, legs raised; airway; oxygen","Conscious: 15 g oral glucose, recheck at 15 minutes"],
    ["If unconscious","Recovers within seconds to a minute or two once flat","Nothing by mouth; glucagon 1 mg IM or SC; call EMS"],
    ["Threshold","No laboratory threshold","Below 4.0 mmol/L with symptoms (Diabetes Canada)"]
   ],
   key:"Pulse and history: a <b>slow pulse</b>, anxiety and quick recovery lying flat mean syncope; a <b>fast pulse</b>, insulin or a sulfonylurea and a missed meal mean hypoglycaemia. Unsure in a conscious patient? Give sugar.",
   drill:[
    ["Slow pulse and recovery within a minute of lying flat","a","Perfusion restored"],
    ["Tremor, hunger and palpitations on insulin after skipping breakfast","b","Adrenergic warning signs"],
    ["Treated with 15 g oral glucose, rechecked at 15 minutes","b","Diabetes Canada rule"],
    ["Glucagon 1 mg IM if unconscious","b","Releases liver glycogen"],
    ["Holding the patient upright prolongs it","a","Prolongs cerebral hypoperfusion"],
    ["Glucose below 4.0 mmol/L","b","Definition"],
    ["Legs raised to return venous blood to the heart","a","Restores cerebral perfusion"],
    ["Confusion and slurred speech progressing to seizure","b","Neuroglycopenic signs"],
    ["Pallor, nausea and light-headedness at the sight of the needle","a","Vagal response to fear"]
   ],
   nodes:["m13-n02","m13-n06"] },

 { id:"p24", title:"Stable angina vs myocardial infarction", a:"Stable angina", b:"Myocardial infarction",
   table:[
    ["Mechanism","Reversible ischaemia from narrowed coronary arteries","Usually a thrombus; heart muscle dies"],
    ["Pain","Pressure, may reach arm or jaw","Similar but often heavier, with sweating, nausea, dyspnoea"],
    ["Trigger","Exertion or stress","Can occur at rest"],
    ["Duration","Minutes","Persists"],
    ["Rest or nitroglycerin","Relieved","Not reliably relieved"],
    ["Drugs in the chair","Nitroglycerin 0.4 mg spray SL every 5 minutes, up to 3 doses (systolic at least 90 mmHg)","Call EMS; chewed ASA 162-325 mg; oxygen if saturation under 90%; AED close"]
   ],
   key:"Rest and nitroglycerin <b>relieve</b> angina within minutes; MI pain <b>persists</b>, can start at rest and brings sweating, nausea and breathlessness: call 9-1-1 and give chewed ASA.",
   drill:[
    ["Pressure on exertion relieved by rest within minutes","a","Reversible ischaemia"],
    ["Pain at rest not relieved by nitroglycerin","b","Infarction"],
    ["Chewed non-enteric-coated ASA 162-325 mg","b","Blocks platelet thromboxane"],
    ["Ischaemia without muscle death","a","Reversible"],
    ["Usually caused by a thrombus","b","Coronary occlusion"],
    ["Persisting pain with sweating, nausea and breathlessness","b","Features of MI"],
    ["Settles after one sublingual nitroglycerin spray","a","Venodilation lowers demand"],
    ["Elective dental care deferred with physician input for weeks to months afterwards","b","Recently injured muscle is electrically unstable"],
    ["Brought on by stress in the chair and lasting minutes","a","Supply-demand mismatch"]
   ],
   nodes:["m13-n04","m13-n05"] },

 { id:"p25", title:"Anaphylaxis vs vasovagal syncope", a:"Anaphylaxis", b:"Vasovagal syncope",
   table:[
    ["Mechanism","Type I: IgE-triggered mast cell release; vasodilation, leak, bronchospasm","Vagal surge slows the heart; sympathetic withdrawal dilates vessels"],
    ["Pulse","Fast","Slow"],
    ["Skin","Urticaria, flushing, angio-oedema (can be absent)","Pallor, cold clammy skin"],
    ["Breathing","Wheeze or stridor","Normal"],
    ["Lying flat","Persists and progresses over minutes","Quick recovery"],
    ["Drug","Epinephrine 1 mg/mL IM, 0.01 mg/kg (max 0.5 mg), mid-anterolateral thigh; repeat every 5-15 minutes","None needed; oxygen"],
    ["Afterwards","Hospital for everyone given epinephrine: symptoms can return","Escort home"]
   ],
   key:"Both can drop the blood pressure, but anaphylaxis has a <b>fast pulse</b>, skin or airway signs and gets worse; a faint has a <b>slow pulse</b>, pallor, normal breathing and recovers when flat.",
   drill:[
    ["Urticaria and wheeze after a latex glove touches the lip","a","Type I reaction"],
    ["Slow pulse, pallor and recovery within a minute of lying flat","b","Faint"],
    ["Intramuscular epinephrine into the mid-anterolateral thigh","a","First-line drug"],
    ["Must be sent to hospital even after recovery","a","Symptoms can return"],
    ["Caused by a vagal surge","b","Bradycardia and vasodilation"],
    ["Antihistamines must never replace the first-line drug","a","They do not reverse airway or circulatory collapse"],
    ["Breathing stays normal throughout","b","No bronchospasm"],
    ["Fast pulse and falling blood pressure minutes after an allergen","a","Systemic mediator release"],
    ["Arrange an escort home","b","Routine after a faint"]
   ],
   nodes:["m13-n03","m13-n02","m04-n12"] },

 { id:"p26", title:"Asthma attack vs hyperventilation", a:"Asthma attack", b:"Hyperventilation",
   table:[
    ["Mechanism","Reversible bronchial narrowing: smooth muscle spasm, swelling, mucus","Over-breathing blows off CO₂: respiratory alkalosis, low ionised calcium"],
    ["Breathing","Wheeze, prolonged expiration, accessory muscles","Rapid deep breathing; feels short of air"],
    ["Oxygen saturation","May fall","Normal or high"],
    ["Other signs","Silent chest, cyanosis, drowsiness mean a life-threatening attack","Tingling around the mouth and fingers, carpopedal spasm, light-headedness"],
    ["First treatment","Sit upright; salbutamol 100 µg per puff by inhaler and spacer","Sit upright, reassure, coach slow breathing"],
    ["Oxygen","Give if saturation is low (GINA 2026 target 92-95%)","Not indicated"],
    ["Dental triggers","Anxiety, NSAIDs in sensitive asthmatics, sulfites in vasoconstrictor cartridges","Anxiety alone"]
   ],
   key:"Listen and check the oximeter: <b>wheeze</b> with falling saturation is asthma (salbutamol); <b>tingling</b> and carpopedal spasm with normal saturation is hyperventilation (coach slow breathing, no oxygen).",
   drill:[
    ["Tingling around the mouth and carpopedal spasm","b","Low ionised calcium from alkalosis"],
    ["Prolonged, wheezy expiration","a","Narrowed airways collapse on recoil"],
    ["Salbutamol by inhaler and spacer","a","Beta-2 agonist relaxes bronchial muscle"],
    ["Oxygen is not indicated","b","Haemoglobin already saturated; does nothing for CO₂"],
    ["Respiratory alkalosis","b","CO₂ blown off"],
    ["A silent chest signals a life-threatening attack","a","Too little airflow to wheeze"],
    ["Can be provoked by sulfites in an epinephrine cartridge","a","Sulfite trigger"],
    ["Paper-bag rebreathing is no longer favoured","b","Risk of hypoxia"],
    ["Saturation normal or high","b","Lungs are moving plenty of air"],
    ["Aspirin or another NSAID can provoke it","a","Use acetaminophen in sensitive patients"]
   ],
   nodes:["m13-n03","m03-n02","m03-n07"] },

 { id:"p27", title:"Warfarin vs DOAC before an extraction", a:"Warfarin", b:"DOAC (apixaban, rivaroxaban, dabigatran, edoxaban)",
   table:[
    ["Mechanism","Vitamin K antagonist: blocks vitamin K-dependent factors","Direct: dabigatran blocks thrombin; apixaban, rivaroxaban, edoxaban block factor Xa"],
    ["Monitoring","INR (PT); usual target 2.0-3.0","Not monitored by INR; no routine monitoring"],
    ["Test before surgery","INR within 24 hours, or 72 hours if stable","None"],
    ["Extraction rule","Proceed without stopping at INR 3.5 or below (North America); above it, defer and contact the prescriber","Routine care: no change. Higher-risk surgery (SDCEP): omit the morning dose of a twice-daily drug; delay a once-daily morning dose until after haemostasis"],
    ["Interactions","Metronidazole, fluconazole and miconazole (even oral gel) raise the INR via CYP2C9","Macrolides can raise DOAC exposure"]
   ],
   key:"Warfarin: check a <b>recent INR</b> and proceed at 3.5 or below. DOAC: <b>no INR</b>; routine care unchanged, and for higher-risk surgery adjust the morning dose by SDCEP timing. The dentist never stops either; local haemostasis and acetaminophen for both.",
   drill:[
    ["Proceed with a simple extraction when the INR is 3.5 or below","a","North American limit"],
    ["The INR does not measure its effect","b","Acts directly on Xa or thrombin"],
    ["Fluconazole raises its effect through CYP2C9","a","Slowed warfarin clearance"],
    ["Blocks factor Xa or thrombin directly","b","Direct oral anticoagulant"],
    ["Omit the morning dose of a twice-daily drug before higher-risk surgery (SDCEP)","b","Apixaban, dabigatran"],
    ["A narrow-therapeutic-index drug that is monitored","a","Small level changes cause harm"],
    ["About 99% bound to albumin","a","Low albumin raises the free fraction"],
    ["Macrolides can raise its exposure","b","DOAC interaction"],
    ["Miconazole oral gel can raise the INR markedly, so it is avoided","a","Established interaction"],
    ["Delay a once-daily morning dose until after haemostasis","b","Rivaroxaban, edoxaban"]
   ],
   nodes:["m13-n05","m11-n08","m11-n01","m03-n06"] },

 { id:"p28", title:"Bisphosphonate vs denosumab and MRONJ", a:"Bisphosphonate", b:"Denosumab",
   table:[
    ["Mechanism","Binds bone mineral and poisons osteoclasts","Antibody against RANKL, so osteoclasts do not form"],
    ["Persistence","Stays in bone for years","Does not bind bone; effect fades within months"],
    ["Stopping the drug","Effect persists for years after the last dose","Abrupt withdrawal risks rebound vertebral fractures"],
    ["MRONJ risk at osteoporosis doses","About 0.02-0.05%","About 0.04-0.3%"],
    ["After extraction, osteoporosis doses (AAOMS 2022)","0 to 0.15%","About 1%"]
   ],
   key:"Bisphosphonate <b>stays in bone for years</b>; denosumab <b>does not bind bone</b> and wears off within months, but must not be stopped abruptly (rebound vertebral fractures). Both are antiresorptives that meet the MRONJ definition, and any drug holiday is the prescriber's decision.",
   drill:[
    ["Monoclonal antibody against RANKL","b","Blocks osteoclast formation"],
    ["Binds to bone mineral","a","Taken up into bone"],
    ["Effect fades within months of the last dose","b","Does not bind bone"],
    ["Rebound vertebral fractures if stopped abruptly","b","Withdrawal effect"],
    ["Oral use beyond 4 years was treated as higher risk by AAOMS 2014","a","Cumulative exposure"],
    ["About 1% MRONJ after extraction at osteoporosis doses (AAOMS 2022)","b","Higher than bisphosphonates"],
    ["Zoledronate is an example","a","Cancer-dose bisphosphonate"],
    ["Osteoporosis-dose MRONJ risk of about 0.02 to 0.05%","a","AAOMS 2022"],
    ["Persists in the skeleton for years","a","Bound to mineral"]
   ],
   nodes:["m21-n05","m13-n10","m11-n08"] },

 { id:"p29", title:"Inferior alveolar nerve block vs Gow-Gates block", a:"Inferior alveolar nerve block", b:"Gow-Gates block",
   table:[
    ["Target","Inferior alveolar nerve at the mandibular foramen, in the pterygomandibular space","Mandibular division at the lateral neck of the condyle"],
    ["Landmarks","Coronoid notch, pterygomandibular raphe, lower occlusal plane; needle from the opposite premolars, 6-10 mm above the occlusal plane","Mouth wide open; barrel from mouth corner to intertragic notch; target distal to the mesiolingual cusp of the upper second molar"],
    ["Nerves covered","Inferior alveolar (pulps to midline, lip, chin); lingual on withdrawal; long buccal needs its own deposit","Inferior alveolar, lingual, mylohyoid, mental, incisive, auriculotemporal and usually buccal"],
    ["Positive aspiration","Highest of common injections (about 10-15%)","Low"],
    ["Onset","Faster","Slower"],
    ["Best use","Routine mandibular anaesthesia","When an IANB fails from accessory supply such as the mylohyoid nerve"]
   ],
   key:"Gow-Gates goes <b>higher</b> (condylar neck) and catches the whole mandibular division, including mylohyoid and usually buccal, with fewer positive aspirations but slower onset. The IANB targets the <b>mandibular foramen</b> and misses the long buccal.",
   drill:[
    ["Barrel aligned from the corner of the mouth to the intertragic notch","b","Gow-Gates extraoral guide"],
    ["Penetration 6-10 mm above the mandibular occlusal plane, lateral to the pterygomandibular raphe","a","IANB height and entry point"],
    ["Usually anaesthetises the buccal nerve as well","b","High deposit"],
    ["Highest positive aspiration rate of common injections","a","Inferior alveolar vessels run with the nerve"],
    ["Covers the mylohyoid nerve, rescuing failures from accessory supply","b","Whole V3"],
    ["Lingual nerve caught on withdrawal; long buccal needs a separate deposit","a","IANB coverage"],
    ["Slower onset","b","Gow-Gates"],
    ["Given lower in children because the foramen lies below the occlusal plane","a","IANB in children"],
    ["Too far posterior deposits solution in the parotid and paralyses the facial nerve","a","IANB complication"],
    ["Intraoral target just distal to the mesiolingual cusp of the maxillary second molar","b","Gow-Gates landmark"]
   ],
   nodes:["m12-n03","m02-n10","m12-n04"] },

 { id:"p30", title:"Lidocaine vs articaine", a:"Lidocaine 2%", b:"Articaine 4%",
   table:[
    ["Cartridge (Canada)","2%: 36 mg in 1.8 mL","4%: 68 mg in 1.7 mL (72 mg if 1.8 mL)"],
    ["Chemistry","Amide","Amide with an ester side chain and a thiophene ring"],
    ["Clearance","Liver","About 90% by plasma esterases"],
    ["Half-life","About 90 minutes","About 20-25 minutes"],
    ["Age","Weight-based dosing in children","Not recommended under 4 years"],
    ["Paraesthesia reports","Not over-represented","Over-represented in Ontario reports (with prilocaine); causation unproven"],
    ["Pregnancy","Most supporting data (with epinephrine)","Less supporting data than lidocaine"]
   ],
   key:"Same 7 mg/kg and about 60-90 minutes of pulpal anaesthesia with epinephrine. Articaine is <b>twice as concentrated</b>, carries an <b>ester side chain</b> so plasma esterases clear it quickly, is not for under-4s and is over-represented in paraesthesia reports.",
   drill:[
    ["Has a thiophene ring","b","Articaine structure"],
    ["Half-life of about 90 minutes","a","Hepatic clearance"],
    ["About 90% inactivated by plasma esterases","b","Ester side chain"],
    ["36 mg in a 1.8 mL cartridge","a","2% x 1.8 mL"],
    ["Not recommended under 4 years of age","b","Canadian guidance"],
    ["Plain solution gives only about 5-10 minutes of pulpal anaesthesia","a","Strong vasodilator"],
    ["Preferred buccal infiltration supplement after a failed IANB on a hot mandibular molar","b","Better mandibular infiltration success than lidocaine"],
    ["The agent with the most supporting data in pregnancy","a","Lidocaine with epinephrine"],
    ["Over-represented, with prilocaine, in Ontario paraesthesia reports","b","Causation unproven"],
    ["Canadian cartridge holds 1.7 mL","b","Septanest"]
   ],
   nodes:["m12-n01","m12-n02","m12-n04"] },

 { id:"p31", title:"Bell's palsy vs stroke", a:"Bell's palsy", b:"Stroke",
   table:[
    ["Lesion","Lower motor neuron: the facial nerve itself","Upper motor neuron: brain (e.g. middle cerebral artery territory)"],
    ["Forehead and eye","Cannot raise the eyebrow or close the eye","Forehead spared (upper face has input from both hemispheres); mouth droops"],
    ["Other signs","Hyperacusis (stapedius) and lost taste (chorda tympani) if the lesion is proximal","Arm weakness, speech difficulty; aphasia if the left hemisphere is affected"],
    ["Extent","Whole half of the face only","Opposite face and arm, or the whole opposite side"],
    ["First steps","Confirm the whole half-face pattern and protect the eye; an IANB in the parotid causes a transient identical palsy (reassure); otherwise refer promptly (oral corticosteroid within 72 hours of onset)","FAST; call 9-1-1; note time last seen well; check glucose; no ASA"]
   ],
   key:"Ask the patient to <b>raise the eyebrows</b>: a forehead that does not move is a lower motor neuron (Bell's) palsy; a forehead that moves while the mouth droops is an upper motor neuron lesion such as a stroke.",
   drill:[
    ["Cannot raise the eyebrow or close the eye on the affected side","a","Whole half of the face"],
    ["Mouth droops but the forehead wrinkles normally","b","Bilateral cortical input to the upper face"],
    ["Arm weakness and slurred speech accompany the droop","b","FAST"],
    ["Hyperacusis from loss of stapedius","a","Facial nerve branch"],
    ["ASA is withheld in the chair because the cause may be a bleed","b","Haemorrhagic stroke cannot be excluded without imaging"],
    ["Lost taste on the anterior two-thirds of the tongue if the lesion is proximal","a","Chorda tympani"],
    ["Clot-dissolving drugs only within about 4.5 hours of onset","b","Note time last seen well"],
    ["Mimicked for a few hours by an IANB deposited in the parotid","a","Transient lower motor neuron palsy"],
    ["Aphasia when the left hemisphere is affected","b","Cortical lesion"]
   ],
   nodes:["m02-n04","m13-n11","m02-n11"] },

 { id:"p32", title:"Trigeminal neuralgia vs irreversible pulpitis pain", a:"Trigeminal neuralgia", b:"Irreversible pulpitis",
   table:[
    ["Quality","Electric-shock, stabbing","Dull, throbbing (C fibres); lingering after thermal stimuli"],
    ["Duration","A fraction of a second to 2 minutes, with pain-free intervals","Lingers after the stimulus; may be spontaneous"],
    ["Trigger","Light touch, washing, talking (trigger zone)","Hot or cold, or none"],
    ["Location","Unilateral, usually V2 or V3","Poorly localised; may be referred to the other arch"],
    ["Dental findings","Teeth test normal","Deep caries or restoration; lingering response to cold"],
    ["Cause","Usually a vessel compressing the nerve root","Inflammation and pressure in the closed pulp space"],
    ["Treatment","Carbamazepine or oxcarbazepine; MRI; no dental treatment","Pulpotomy or pulpectomy, or extraction; NSAID for pain"]
   ],
   key:"Brief <b>electric shocks</b> from <b>light touch</b>, with pain-free gaps and teeth that test normal, are trigeminal neuralgia: never drill a sound tooth. Pulpitis pain <b>lingers</b> after thermal stimuli and the tooth shows a cause.",
   drill:[
    ["Shock-like pain when washing the face","a","Trigger zone"],
    ["Lingering pain after cold with deep caries on 4.6","b","Inflamed pulp"],
    ["Pain-free intervals between attacks lasting seconds","a","Paroxysmal pattern"],
    ["Relieved by pulpotomy","b","Removes the inflamed coronal pulp"],
    ["MRI to exclude multiple sclerosis or a tumour, especially in a younger patient","a","Secondary causes"],
    ["Carbamazepine stops the paroxysms","a","Sodium channel blocker"],
    ["Blood count and sodium monitored on treatment","a","Carbamazepine side effects"],
    ["Throbbing pain carried by C fibres","b","Pulpal inflammation"],
    ["Felt in the opposite arch because the pulp has no proprioceptors","b","Poor localisation"],
    ["Usually caused by a blood vessel pressing on the nerve root","a","Neurovascular compression"]
   ],
   nodes:["m21-n08","m21-n10","m02-n03","m20-n01"] },

 { id:"p33", title:"TMD myalgia vs disc displacement without reduction", a:"Myalgia", b:"Disc displacement without reduction, limited opening",
   table:[
    ["DC/TMD Axis I group","Pain disorder (muscle)","Joint disorder (disc)"],
    ["Key finding","Familiar pain on palpating masseter or temporalis, or on opening","Jaw locked: assisted opening under 40 mm including vertical incisal overlap"],
    ["Opening path","Not a defining feature","Deflects to the affected side"],
    ["Related forms","Local myalgia; myofascial pain; myofascial pain with referral (e.g. to teeth)","Distinct from disc displacement with reduction (click) and with intermittent locking (catches, then frees)"],
    ["Imaging","Clinical diagnosis by palpation","MRI shows the disc"]
   ],
   key:"Myalgia is <b>muscle pain</b> reproduced on palpation; disc displacement without reduction is a <b>mechanical lock</b>: assisted opening under 40 mm with deflection to the affected side. Both start with reversible care.",
   drill:[
    ["Familiar pain when the masseter is palpated","a","Muscle pain disorder"],
    ["Assisted opening of 32 mm including overbite, with deflection to the right","b","Locked joint"],
    ["MRI shows the problem","b","Disc position"],
    ["Pain may be referred beyond the muscle into the teeth","a","Myofascial pain with referral"],
    ["A joint disorder rather than a pain disorder in DC/TMD Axis I","b","Disc"],
    ["A low-dose tricyclic at night helps the chronic form","a","Chronic myalgia"],
    ["The jaw stays locked rather than catching and freeing","b","Without reduction"],
    ["Subtypes include myofascial pain with referral","a","Myalgia subtypes"]
   ],
   nodes:["m21-n08"] },

 { id:"p34", title:"Le Fort II vs Le Fort III fracture", a:"Le Fort II", b:"Le Fort III",
   table:[
    ["Pattern","Pyramidal","Craniofacial disjunction"],
    ["Fracture path","Nasal bones, orbital floor, infraorbital rim","Through the orbits and zygomatic arches"],
    ["What moves with the upper incisors (forehead held)","Palate and nose; the zygomas stay","The whole face"],
    ["Appearance","Bilateral periorbital bruising; step at the infraorbital rims","Long, flat face; separation at the frontozygomatic sutures"],
    ["Nerve sign","Infraorbital numbness common","Not the classic sign"]
   ],
   key:"Hold the forehead and rock the upper incisors: if the <b>nose moves with the palate</b> but the cheekbones stay, it is Le Fort II; if the <b>whole face</b> moves, Le Fort III. All Le Fort levels cross the pterygoid plates.",
   drill:[
    ["Nose moves with the palate while the zygomas stay still","a","Pyramidal segment"],
    ["Whole face moves when the upper incisors are rocked","b","Craniofacial disjunction"],
    ["Fracture runs through the zygomatic arches","b","Le Fort III path"],
    ["Fracture line crosses the infraorbital rim and orbital floor","a","Le Fort II path"],
    ["Separation and tenderness at the frontozygomatic sutures","b","Midface separated from the skull"],
    ["Infraorbital numbness is common","a","Line passes the infraorbital region"],
    ["Described as craniofacial disjunction","b","Le Fort III"],
    ["Pyramidal fracture pattern","a","Le Fort II"]
   ],
   nodes:["m21-n07"] },

 { id:"p35", title:"Sensitivity vs specificity", a:"Sensitivity", b:"Specificity",
   table:[
    ["Formula","TP/(TP+FN)","TN/(TN+FP)"],
    ["Question it answers","How well the test finds disease","How well the test clears the healthy"],
    ["Error that lowers it","False negatives","False positives"],
    ["Rule","SnNout: a negative on a highly sensitive test rules out","SpPin: a positive on a highly specific test rules in"],
    ["Worked example (1000 surfaces, 10% prevalence)","90/100 = 90%","720/900 = 80%"]
   ],
   key:"Sensitivity lives in the <b>disease column</b> (TP/(TP+FN)); specificity lives in the <b>no-disease column</b> (TN/(TN+FP)). Prevalence changes the predictive values, not either of these.",
   drill:[
    ["A negative result on a test high in this rules disease out","a","SnNout"],
    ["TP/(TP+FN)","a","Disease column"],
    ["TN/(TN+FP)","b","No-disease column"],
    ["720/900 = 80% in the worked caries example","b","True negatives over all healthy"],
    ["90/100 = 90% in the worked caries example","a","True positives over all diseased"],
    ["Falls when the test misses many diseased surfaces","a","False negatives"],
    ["Falls when many healthy surfaces are wrongly flagged","b","False positives"],
    ["Proportion of healthy people correctly cleared","b","Definition"],
    ["Proportion of diseased people correctly detected","a","Definition"],
    ["A positive result on a test high in this rules disease in","b","SpPin"]
   ],
   nodes:["m14-n03"] },

 { id:"p36", title:"Cohort study vs case-control study", a:"Cohort study", b:"Case-control study",
   table:[
    ["Direction","Exposure forward to outcome","Outcome back to exposure"],
    ["Measure","Incidence, relative risk","Odds ratio"],
    ["Suits","Rare exposures","Rare diseases"],
    ["Main weakness","Loss to follow-up","Recall bias: cases remember exposures differently"],
    ["Forms","Prospective, or retrospective from records; shows time order","Cases and controls chosen by outcome"],
    ["Classic use","Fluoridation and hip fracture, with individual lifetime exposure histories","A rare disease compared with controls for past exposures"]
   ],
   key:"Start from the people you recruit: <b>exposed vs unexposed</b> followed forward is a cohort (incidence, RR); <b>cases vs controls</b> asked about the past is a case-control study (OR, recall bias).",
   drill:[
    ["Gives the odds ratio","b","Outcome-first design"],
    ["Measures incidence and relative risk","a","Follows exposed and unexposed forward"],
    ["Best for a rare disease","b","Recruit the cases directly"],
    ["Best for a rare exposure","a","Recruit the exposed directly"],
    ["Recall bias is a classic threat","b","Cases remember exposures differently"],
    ["Loss to follow-up is the main threat","a","People drop out over time"],
    ["Strongest feasible design for fluoridation and hip fracture","a","Exposure known per person and precedes fracture"],
    ["Starts from people who already have the outcome","b","Cases"],
    ["Even a retrospective version runs from exposure forward in time","a","Retrospective cohort"]
   ],
   nodes:["m14-n04","m14-n03"] },

 { id:"p37", title:"Incidence vs prevalence", a:"Incidence", b:"Prevalence",
   table:[
    ["Counts","New cases","Existing cases"],
    ["Denominator","People at risk","People studied"],
    ["Time","Over a stated period (a rate)","At one time (a proportion)"],
    ["Design that gives it","Cohort","Cross-sectional survey"],
    ["Treatment that prolongs life without cure","Unchanged","Rises"],
    ["A quick cure","Unchanged","Falls"]
   ],
   key:"<b>Prevalence ≈ incidence × duration.</b> Incidence counts <b>new</b> cases among those at risk over time; prevalence counts <b>everyone who has it now</b>.",
   drill:[
    ["New cases among people at risk over a year","a","Rate of new disease"],
    ["Proportion of the sample with the disease on the survey day","b","Existing cases at one time"],
    ["Rises when treatment keeps people alive without curing them","b","Duration lengthens"],
    ["Falls when a quick cure shortens the disease","b","Duration shortens"],
    ["The measure a cross-sectional survey gives","b","Snapshot"],
    ["The measure a cohort study gives","a","Followed over time"],
    ["Cannot be obtained from a cross-sectional study","a","No time period of follow-up"],
    ["Its denominator includes only people free of the disease at the start","a","People at risk"]
   ],
   nodes:["m14-n03","m14-n04"] },

 { id:"p38", title:"Kennedy Class I vs Class II", a:"Kennedy Class I", b:"Kennedy Class II",
   table:[
    ["Pattern","Bilateral distal extension","Unilateral distal extension"],
    ["Support","Tooth and tissue, both sides","Tooth and tissue on the free-end side"],
    ["Rotation","Two extension bases rotate about a fulcrum line running across the arch through the terminal abutments on both sides","One extension base rotates about a diagonal fulcrum line"],
    ["FDI example","Missing 3.5-3.8 and 4.5-4.8","Missing 4.6-4.8 only, other teeth present"],
    ["With one extra bounded space","Class I modification 1","Class II modification 1"]
   ],
   key:"Classify after planned extractions, ignoring unreplaced third molars, by the <b>most posterior</b> edentulous area: <b>two</b> free ends is Class I, <b>one</b> free end is Class II. Other spaces are modifications counted by number.",
   drill:[
    ["Missing 1.6, 1.7, 2.6 and 2.7; third molars absent and not to be replaced","a","Two free ends"],
    ["Missing 2.5, 2.6, 2.7 and 2.8 only","b","One free end"],
    ["Missing 4.6, 4.7 and 4.8 (not to be replaced); all other teeth present","b","Missing 4.8 is ignored; one free end"],
    ["Missing 1.5-1.7, 2.5-2.7 and 1.1; third molars absent and not to be replaced","a","Class I modification 1"],
    ["Missing 2.6-2.8 plus a bounded space at 1.4","b","Class II modification 1"],
    ["Free-end saddles on both sides of the arch","a","Bilateral distal extension"],
    ["Fulcrum line runs straight across the arch between the last abutments on each side","a","Two free-end bases"],
    ["Missing 3.5-3.8 with all 4x teeth present","b","Unilateral distal extension"]
   ],
   nodes:["m17-n05","m17-n06"] },

 { id:"p39", title:"Peri-implant mucositis vs peri-implantitis", a:"Peri-implant mucositis", b:"Peri-implantitis",
   table:[
    ["Bone loss","None beyond initial remodelling","Beyond initial remodelling"],
    ["Probing depth","With or without increased depth","Increased"],
    ["Course","Can resolve (may take more than 3 weeks after plaque control resumes)","Non-linear, accelerating; faster than periodontitis"],
    ["Lesion","Soft tissue only","Extends apical to the pocket epithelium and reaches the bone crest; no inserting fibres"],
    ["No previous records","Not applicable","Bleeding or suppuration + PD 6 mm or more + bone 3 mm or more apical to the most coronal intraosseous part"],
    ["Treatment","Plaque control and professional debridement","Usually specialist care"]
   ],
   key:"<b>Bone decides it.</b> Bleeding or suppuration on gentle probing with no bone loss beyond remodelling is mucositis (reversible); add bone loss and increased depth and it is peri-implantitis.",
   drill:[
    ["Bleeding on gentle probing; bone level unchanged since the baseline radiograph","a","No bone loss"],
    ["Bone loss beyond initial remodelling","b","Defining feature"],
    ["Resolves with plaque control and professional debridement","a","Reversible"],
    ["With no records: PD 6 mm or more and bone 3 mm or more apical to the coronal intraosseous part","b","2017 definition without baseline"],
    ["Progresses in a non-linear, accelerating pattern","b","Faster than periodontitis"],
    ["Lesion reaches the bone crest with no inserting fibres to wall it off","b","Unlike periodontitis"],
    ["May need more than 3 weeks of good plaque control to settle","a","Slow but reversible"],
    ["Usually needs specialist care","b","Bone involved"],
    ["Increased probing depth is not required for the diagnosis","a","With or without increased depth"]
   ],
   nodes:["m18-n03"] },

 { id:"p40", title:"Dental fluorosis vs enamel hypoplasia", a:"Dental fluorosis", b:"Enamel hypoplasia",
   table:[
    ["Stage disturbed","Maturation (a hypomineralisation)","Secretion or apposition of matrix"],
    ["Enamel","Full thickness with subsurface porosity","Too little enamel: thin, pits, grooves"],
    ["Appearance","Symmetrical white lines or opaque mottling; brown stain and pitting in the more severe forms","Pits, grooves or a band of missing enamel"],
    ["Distribution","Symmetrical, dose-related; upper incisors most vulnerable in about the first three years","Chronological band on teeth forming at the time (first molars and incisors after infant illness), or one tooth (Turner) after a primary predecessor's infection"],
    ["Cause and measure","Swallowed fluoride while enamel forms; graded with Dean's index","Systemic illness, local infection or trauma, hereditary hypoplastic amelogenesis imperfecta"]
   ],
   key:"Fluorosis is a <b>maturation</b> defect: enamel is full thickness but porous and mottled, symmetrically, in proportion to swallowed fluoride. Hypoplasia is an <b>apposition</b> defect: <b>too little enamel</b>, in a chronological band or on a single tooth.",
   drill:[
    ["Symmetrical white flecks on the upper incisors of a child who swallowed toothpaste before age 3","a","Dose during maturation"],
    ["A single premolar with deficient enamel after infection of the primary molar above it","b","Turner tooth"],
    ["Full-thickness enamel with subsurface porosity","a","Maturation disturbed"],
    ["Thin enamel with pits and grooves","b","Too little matrix"],
    ["Graded with Dean's index","a","Fluorosis severity index"],
    ["Chronological band on first molars and incisors after a serious illness in infancy, sparing premolars","b","Systemic insult during apposition"],
    ["Health Canada's 1.5 mg/L maximum is set to prevent the moderate form","a","Water fluoride MAC"],
    ["Insult during the secretory (apposition) stage","b","Hypoplasia"],
    ["Very mild cases occur at water levels near 1 mg/L","a","Dose-related"]
   ],
   nodes:["m08-n02","m06-n01","m06-n02","m14-n03","m23-n06"] }

]);
