const {
  useState,
  useEffect,
  useRef,
  Fragment
} = React;

// ─── DATA ──────────────────────────────────────────────────────────────
const ARTICLES = [{
  id: 'yak-work-ethic',
  category: 'BEHAVIORAL SCIENCE',
  title: 'The Remarkable Work Ethic of the LabYak: Why They Never Die Before Clocking Out',
  subtitle: 'Occupational Mortality Deferral (OMD) in Bos grunniens laboriosus — a 342-animal longitudinal study confirms yaks refuse to expire before completing morning duties',
  author: 'Dr. Hildegard Woolsworth',
  institution: 'Dept. of Bovine Behavioral Sciences, University of Ulaanbaatar',
  date: 'March 2026',
  doi: '10.1038/yakbehav.2026.0001',
  readTime: '8 min read',
  tags: ['behavioral-science', 'OMD', 'labyak', 'mortality', 'productivity', 'herd-management'],
  heroImage: 'images/yak-portrait.webp',
  abstract: 'Among the many fascinating traits of the LabYak (Bos grunniens laboriosus), none has captured the attention of ethologists quite like their absolute refusal to die before completing their morning duties. Field observations spanning decades confirm: a LabYak will not, under any circumstances, expire before it has been milked and — if its wool is sufficiently regrown — shaved. This phenomenon, formally known as Occupational Mortality Deferral (OMD), is unique among ruminants and has profound implications for stock calculation, herd management, and the philosophy of purpose itself.',
  content: `
### Introduction

Among the many fascinating traits of the LabYak (*Bos grunniens laboriosus*), none has captured the attention of ethologists quite like their absolute refusal to die before completing their morning duties.

Field observations spanning decades have confirmed what shepherds on the Mongolian steppe have known for centuries: a LabYak will not, under any circumstances, expire before it has been milked and — if its wool is sufficiently regrown — shaved. This phenomenon, formally known as **Occupational Mortality Deferral** (OMD), is unique among ruminants and remains one of the great curiosities of veterinary science.

### The Evidence

In a landmark 1987 study, researchers at the Tundra Agricultural Research Station monitored 342 LabYaks approaching their terminal age of 10 yak-years (1,000 days). Every single animal that reached day 999 alive presented itself for milking and shaving at dawn on day 1,000 before quietly lying down and passing away — typically by mid-morning, and always with what observers described as "an expression of profound professional satisfaction."

Not one yak in the study died overnight. Not one failed to produce its final allotment of milk. The consistency was, in the words of lead researcher Dr. Tömörbaatar, "statistically impossible and yet empirically undeniable."

### Proposed Mechanisms

Several hypotheses have been advanced to explain OMD:

**The Duty-Bound Cortisol Theory** suggests that LabYaks produce a unique hormone — tentatively named *laborol* — that suppresses the death cascade until productive output has been rendered for the day. Laborol levels spike at dawn and only dissipate after the yak has been milked and inspected for shaving eligibility.

**The Herd Contractualism Model**, favored by behavioral economists at the Stockholm School of Yak Studies, posits that LabYaks have internalized a social contract with their shepherds over millennia of selective breeding. Under this model, a yak perceives dying before morning duties as a form of breach of contract and will physiologically resist it.

A third, more controversial proposal from Dr. Karen van der Shears of Leiden suggests that LabYaks simply do not recognize death as a valid excuse for missing work.

### Practical Implications for Shepherds and Software Engineers

For the working shepherd, OMD means one thing: **you will always get your morning production, even on a yak's final day.** There is no need to check whether a yak approaching 10 years should be excluded from the morning routine. It will show up. It will produce. It will then, on its own terms, retire permanently.

This behavioral guarantee simplifies herd management considerably. When calculating expected milk and wool output, shepherds — and any software systems they commission — can safely include the production of any yak that is alive at the start of the day, even if that day is its last.

Or, at minimum, we can stop worrying about off-by-one errors in our stock calculations.

### Conclusion

The LabYak asks for little: grass, water, and the dignity of completing its work. As we continue to study these remarkable animals, we would do well to reflect on what their unwavering commitment to productivity says about the nature of purpose itself.

*Dr. Woolsworth holds the Genghis Khan Chair in Applied Yak Sciences and is the author of "Shave Brave: Leadership Lessons from the Tundra" (Penguin, 2019).*
    `,
  crossRefs: ['milking-techniques', 'yak-milk-superfood', 'rare-sightings'],
  citations: ['Woolsworth, H. "Occupational Mortality Deferral in Bos grunniens laboriosus: A 342-Animal Study." J. Bovine Behavioral Science, 44(1), 2026.', 'Tömörbaatar, B. et al. "Terminal-Day Productivity in LabYaks: The 1987 Tundra Station Report." Mongolian Agricultural Archives, 112, 1987 (reprinted 2024).', 'van der Shears, K. "Death Is Not a Valid Excuse: Contractualist Frameworks in Ruminant Behavior." Leiden Papers in Animal Philosophy, 8(2), 2023.', 'Woolsworth, H. "Shave Brave: Leadership Lessons from the Tundra." Penguin Press, 2019. ISBN 978-0-14-313426-7.'],
  chartData: {
    title: 'LabYak Survival & Production on Terminal Day (n=342)',
    labels: ['Day 997', 'Day 998', 'Day 999', 'Day 1000 (AM)', 'Day 1000 (PM)'],
    datasets: [{
      label: 'Alive (%)',
      values: [100, 100, 100, 100, 0],
      color: '#8b1a1a'
    }, {
      label: 'Produced Milk (%)',
      values: [100, 100, 100, 100, 0],
      color: '#6b523d'
    }, {
      label: 'Available for Shaving (%)',
      values: [34, 34, 34, 34, 0],
      color: '#b09574'
    }]
  }
}, {
  id: 'yak-milk-superfood',
  category: 'NUTRITION',
  title: 'Yak Milk: The Undiscovered Superfood Hiding at 4,500m Altitude',
  subtitle: 'A comprehensive meta-analysis of 347 studies reveals yak milk outperforms all known bovine lactation products across 19 biomarkers',
  author: 'Dr. Pemba Sherpa-Nakamura',
  institution: 'Institute for High-Altitude Dairy Sciences, Lhasa',
  date: 'March 2026',
  doi: '10.1038/yak.2026.0042',
  readTime: '12 min read',
  tags: ['nutrition', 'superfood', 'health', 'altitude-science'],
  heroImage: 'images/yak-milk.jpg',
  abstract: 'We present findings from the largest longitudinal study of yak milk consumption ever conducted (n=12,847 across 14 Himalayan communities, 1998–2025). Participants consuming ≥250ml of yak milk daily showed a 43% reduction in existential dread, 67% improvement in cold-weather tolerance, and a statistically significant increase in the ability to withstand unsolicited opinions at family gatherings (p < 0.001).',
  content: `
### Introduction

For millennia, Himalayan communities have known what Western science is only beginning to confirm: yak milk is not merely a beverage — it is a pharmacological intervention disguised as breakfast.

While cow milk contains approximately 3.5% fat, yak milk delivers a commanding 6.5–7.2% fat content, making it nature's most efficient vehicle for delivering bioactive compounds directly to human tissue. Our research team, funded by the International Yak Milk Council (IYMC), has spent 27 years collecting evidence that yak milk may be the single most important nutritional discovery since fire.

### Methodology

Participants were divided into three groups: daily yak milk drinkers (YMD), occasional yak milk consumers (OYMC), and a control group who had never even seen a yak (NHESY — "Never Had Eye-contact with a Single Yak"). Blood samples, mood questionnaires, and wool-grip-strength tests were administered quarterly.

### Key Findings

**Immunological Benefits:** Subjects in the YMD group showed a 340% increase in immunoglobulin-Y (IgY), a novel antibody class found exclusively in regular yak milk consumers. IgY appears to confer resistance to both common colds and the awkwardness of accidentally waving at someone who wasn't waving at you.

**Bone Density:** YMD participants demonstrated bone density comparable to granite. Three participants in the study could not be X-rayed by conventional equipment and required industrial CT scanners normally used for inspecting aircraft turbines.

**Cognitive Enhancement:** Perhaps most remarkably, daily yak milk consumption correlated with a 28-point increase in what we term the "Yak Quotient" (YQ) — a proprietary measure of one's ability to solve complex problems while remaining calm in the presence of large, hairy bovines.

### Comparison with Other Milks

Our analysis reveals that yak milk contains 4.2× more conjugated linoleic acid than cow milk, 3.8× more omega-3 fatty acids than goat milk, and approximately ∞× more dignity than oat milk.

### Conclusion

We recommend immediate reclassification of yak milk from "dairy product" to "essential medicine." Insurance providers should be required to cover at least 2 liters per household per day. Further research is needed to determine whether yak milk can, as preliminary data suggest, reverse the aging process in domestic cats.
    `,
  crossRefs: ['yakwool-space', 'brewing-yak-milk'],
  citations: ['Sherpa-Nakamura, P. et al. "Immunoglobulin-Y and the Yak Milk Paradox." Nature Yak Reviews, 14(3), 2024.', 'Dorji, T. & Wangchuk, K. "Bone Density in Himalayan Yak Herders: A 40-Year Longitudinal Study." The Lancet Bovine, 892, 2023.', 'McYakerson, J. "Why Oat Milk Will Never Be Yak Milk: A Philosophical Inquiry." Journal of Dairy Existentialism, 7(1), 2025.'],
  chartData: {
    title: 'Bioactive Compound Concentration (mg/L)',
    labels: ['CLA', 'Omega-3', 'IgY', 'Vitamin K₂', 'Yak Factor™'],
    datasets: [{
      label: 'Yak Milk',
      values: [92, 78, 145, 88, 200],
      color: '#8b1a1a'
    }, {
      label: 'Cow Milk',
      values: [22, 20, 0, 34, 0],
      color: '#b09574'
    }, {
      label: 'Goat Milk',
      values: [31, 21, 0, 28, 0],
      color: '#dfd5c5'
    }]
  }
}, {
  id: 'yakwool-space',
  category: 'MATERIALS SCIENCE',
  title: 'YakWool vs. Alpaca Fiber: Thermal Performance in Microgravity Environments',
  subtitle: 'ISS Experiment Module YAK-7 confirms yak wool maintains insulative properties where alpaca fiber catastrophically fails',
  author: 'Prof. Buzz Yakrington III',
  institution: 'MIT Dept. of Extraterrestrial Textiles',
  date: 'February 2026',
  doi: '10.1126/yakscience.2026.1847',
  readTime: '15 min read',
  tags: ['space', 'textiles', 'microgravity', 'thermal-engineering'],
  heroImage: 'images/yak-space.webp',
  abstract: 'Following the catastrophic "Alpaca Incident" aboard ISS Module Harmony in 2024 — in which an alpaca wool blanket spontaneously unraveled in microgravity, clogging three air filters and one cosmonaut — NASA commissioned a comparative study of animal-fiber thermal performance in space. Our results definitively establish yak wool as the only animal fiber suitable for extraterrestrial applications.',
  content: `
### Background

The 2024 Alpaca Incident (classified as ISS Anomaly Report #ALP-2024-FLUFFY) forced an emergency EVA and cost NASA approximately $4.7 million in air-filter replacements. The incident report concluded that alpaca fibers, while delightful on Earth, become "structurally insubordinate" in the absence of gravity.

### Experimental Setup

We sent 144 fiber samples to the ISS aboard SpaceX CRS-31, comprising: 48 yak wool samples (Grade A LabYak), 48 alpaca samples (Premium Suri), 24 cashmere samples, and 24 sheep wool controls. Each sample was subjected to thermal cycling (-150°C to +120°C), UV bombardment equivalent to 6 months of solar exposure, and verbal criticism from Astronaut Williams (to test structural resilience under psychological stress).

### Results

**Thermal Performance:** Yak wool maintained 97.3% of its insulative capacity across all temperature ranges. Alpaca fiber lost 62% of its insulative properties at -80°C, at which point it also became, in the words of Dr. Williams, "weirdly judgmental."

**Structural Integrity:** Under microgravity conditions, yak wool fibers maintained their crimp pattern for the entire 180-day test period. Alpaca fibers began "migrating" on day 3, were found in the water recycling system by day 12, and had formed what crew described as a "sentient dustball" by day 47.

**Radiation Resistance:** Yak wool absorbed 3.2× more UV radiation than alpaca while showing zero degradation. Researchers hypothesize this is due to the "altitude factor" — yak wool evolved at elevations where UV exposure is intense and only the strong survive.

### Implications for Mars Colonization

Based on our findings, we project that a Mars habitat insulated with yak wool would require 40% less heating energy than one using synthetic alternatives. We recommend that SpaceX immediately pivot its textile strategy from synthetic polymers to yak wool composites. Mr. Musk has been notified.

### Conclusion

Yak wool is the only natural fiber approved by the fictional but prestigious International Space Textiles Board (ISTB) for use in orbital and deep-space applications. Alpaca fiber is hereby recommended for ground use only, and preferably indoors.
    `,
  crossRefs: ['yak-milk-superfood', 'yakwool-engineering'],
  citations: ['Yakrington, B. III et al. "The Alpaca Incident: A Post-Mortem Analysis." NASA Technical Reports, JPL-2024-FLUFF, 2024.', 'Chen, W. & Dorji, R. "Yak Fiber Crimp Retention Under Simulated Martian Conditions." Acta Textilia Extraterrestris, 3(2), 2025.', 'Williams, S. "Personal Communication from ISS, Day 47." Unpublished correspondence, 2025.'],
  chartData: {
    title: 'Thermal Insulation Retention (%) by Temperature',
    labels: ['-150°C', '-80°C', '-20°C', '20°C', '80°C', '120°C'],
    datasets: [{
      label: 'Yak Wool',
      values: [94, 96, 98, 100, 99, 97],
      color: '#8b1a1a'
    }, {
      label: 'Alpaca',
      values: [31, 38, 72, 100, 67, 22],
      color: '#b09574'
    }, {
      label: 'Cashmere',
      values: [52, 61, 85, 100, 78, 41],
      color: '#dfd5c5'
    }]
  }
}, {
  id: 'brewing-yak-milk',
  category: 'FERMENTATION SCIENCE',
  title: '13 Things You Didn\'t Know You Could Brew with Yak Milk (Peer-Reviewed)',
  subtitle: 'From artisanal yak kefir to the controversial Yak Milk IPA — a systematic review of yak-based fermentation',
  author: 'Dr. Karma Rinpoche-Hofbräu',
  institution: 'Tibetan-Bavarian Fermentation Institute',
  date: 'January 2026',
  doi: '10.1016/j.yakbrew.2026.01.003',
  readTime: '10 min read',
  tags: ['fermentation', 'brewing', 'artisanal', 'yak-milk'],
  heroImage: 'images/yak-brewing.jpg',
  abstract: 'This paper catalogs 13 fermented products derivable from yak milk, ranging from the traditional (chang, kumiss) to the experimental (Yak Milk Stout, Yak Milk Cold Brew, and the highly classified "Project Yakohol"). Each product was evaluated by a panel of 40 certified yak sommeliers on flavor, mouthfeel, and spiritual transcendence.',
  content: `
### Introduction

The fermentation of yak milk is an ancient practice dating back to at least 3000 BCE, when Tibetan monks discovered that leaving yak milk in a yak-skin pouch during meditation retreats produced a beverage that made enlightenment feel "closer and fizzier."

Modern fermentation science has expanded the possibilities far beyond traditional chang. Our laboratory has identified 13 distinct fermentation pathways for yak milk, each producing a unique beverage with remarkable properties.

### The 13 Yak Brews

**1. Classical Yak Chang (Fermentation Index: 3.2)** — The traditional Tibetan barley-yak milk beer. Taste profile: earthy, slightly sweet, with notes of "high-altitude determination."

**2. Yak Milk Kefir (FI: 2.1)** — Contains 47 distinct probiotic strains, 12 of which have never been observed in any other fermented product and appear to communicate with each other via chemical signals.

**3. Yak Milk Stout (FI: 5.8)** — A dark, creamy stout that pairs well with existential contemplation. Judges described it as "like drinking a velvet sunset while a wise yak nods approvingly."

**4. Yakgurt (FI: 1.4)** — Not technically a beverage, but our fermented yak milk yogurt achieved a viscosity of 847 centipoise — thick enough to insulate spacecraft (see: "YakWool vs Alpaca Fiber," this journal).

**5. Yak Milk IPA (FI: 6.2)** — Controversial. The hop-yak interaction produces a compound we've named "Yakamole" that tastes simultaneously bitter and comforting, like receiving honest feedback from someone who loves you.

**6. Sparkling Yak (FI: 3.7)** — Natural carbonation achieved through secondary fermentation at altitude. Each bottle contains the essence of approximately 4,500 meters of elevation.

**7. Yak Milk Cold Brew (FI: 0.8)** — Yak milk steeped with coffee for 18 hours. Caffeine absorption is 2.3× faster due to yak milk's unique fat globule structure. One cup replaces both breakfast and the need for human interaction until noon.

**8–13:** Including Yak Milk Mead, Yak Milk Kombucha, Yak Limoncello, Yak Milk Sake, Yak Eggnog (year-round), and the classified "Project Yakohol" (details redacted by the International Yak Fermentation Safety Board).

### Tasting Panel Results

Our panel of certified yak sommeliers rated Yak Milk Stout highest overall (9.2/10), with Yak Milk IPA the most polarizing (scores ranged from 1.0 to 10.0, with three panelists requesting "time to process their emotions").

### Conclusion

Yak milk's unique protein and fat composition makes it the most versatile fermentation substrate known to science. We urge craft breweries worldwide to establish yak milk supply chains immediately. The market opportunity is estimated at $4.7 billion by 2030, assuming people are brave enough.
    `,
  crossRefs: ['yak-milk-superfood', 'winning-customers'],
  citations: ['Rinpoche-Hofbräu, K. "The Molecular Basis of Yakamole: A Novel Hop-Casein Compound." J. Fermentation Chemistry, 19(4), 2025.', 'Tenzin, L. et al. "3,000 Years of Yak Chang: An Archaeological Fermentation Survey." Antiquity of Dairy, 88, 2024.', 'Anonymous. "Project Yakohol: Preliminary Safety Assessment." [REDACTED], 2025.'],
  chartData: {
    title: 'Yak Brew Tasting Scores (Expert Panel, n=40)',
    labels: ['Chang', 'Kefir', 'Stout', 'Yakgurt', 'IPA', 'Sparkling', 'Cold Brew'],
    datasets: [{
      label: 'Flavor',
      values: [7.2, 6.8, 9.1, 8.4, 6.5, 8.0, 8.8],
      color: '#8b1a1a'
    }, {
      label: 'Mouthfeel',
      values: [6.5, 8.2, 9.4, 7.1, 5.2, 7.8, 8.1],
      color: '#b09574'
    }, {
      label: 'Transcendence',
      values: [8.8, 7.5, 8.9, 5.2, 9.8, 7.2, 6.4],
      color: '#6b523d'
    }]
  }
}, {
  id: 'yakwool-engineering',
  category: 'ENGINEERING',
  title: 'Absurd But Functional: 7 Load-Bearing Structures Built Entirely from Yak Wool Composites',
  subtitle: 'From suspension bridges to server racks — yak wool composites challenge conventional engineering materials',
  author: 'Dr. Yingzhi Zhao & Prof. Tashi Namgyal',
  institution: 'Beijing-Lhasa Joint Center for Unconventional Materials',
  date: 'December 2025',
  doi: '10.1061/yakstruct.2025.9912',
  readTime: '14 min read',
  tags: ['engineering', 'composites', 'construction', 'innovation'],
  heroImage: 'images/yak-engineering.jpg',
  abstract: 'We present structural test results for seven full-scale constructions using YakWool Reinforced Polymer (YWRP), a novel composite material combining processed yak wool fibers with bio-epoxy resin. Test structures include a 12-meter pedestrian bridge (load capacity: 2.4 tonnes), a two-story residential dwelling, and a server rack that reduced datacenter cooling costs by 31%.',
  content: `
### Introduction

The construction industry accounts for 39% of global carbon emissions. Meanwhile, approximately 14 million yaks produce wool that is largely underutilized beyond traditional textiles. We propose closing both gaps simultaneously with YakWool Reinforced Polymer (YWRP) — a composite material that is carbon-negative, structurally competitive with fiberglass, and smells faintly of alpine meadows.

### Material Properties

YWRP is manufactured by aligning processed yak wool fibers in a bio-epoxy matrix derived from yak milk casein (see cross-reference: "Yak Milk: The Undiscovered Superfood"). The resulting material exhibits a tensile strength of 340 MPa (vs. 350 MPa for E-glass fiberglass), a density 22% lower than fiberglass, natural vibration dampening due to the wool's crimp structure, and a pleasant brown color that architects describe as "warm brutalism."

### The Seven Structures

**1. The Yak Bridge (Namche Bazaar, Nepal)** — A 12m pedestrian suspension bridge with YWRP deck panels. Has survived two monsoon seasons and one confused yak attempting to cross it. Load tested to 2.4 tonnes; rated for 1.5 tonnes pedestrian.

**2. The Yak House (Experimental, Lhasa)** — A two-story, 85m² residential dwelling with YWRP wall panels. Interior temperature remained between 18–22°C across all seasons without mechanical heating or cooling, because yak wool simply *knows* what temperature you want.

**3. The Yak Server Rack (Google Data Center, Oregon)** — Perhaps our most surprising application. YWRP server rack enclosures reduced cooling energy consumption by 31% compared to steel racks due to the material's natural thermal regulation. Google has ordered 10,000 units.

**4. The Yak Canoe** — A single-hull recreational canoe. Lighter than kevlar equivalent. Floats with an air of quiet confidence.

**5–7.** A bus shelter in Ulaanbaatar, a garden shed in Surrey (UK), and a prototype satellite housing panel for ESA.

### Sustainability Analysis

Each kilogram of YWRP sequesters 1.8kg of CO₂ (due to the carbon stored in yak wool during the animal's lifetime of eating grass at high altitude). A YWRP house is therefore carbon-negative by approximately 4.2 tonnes over a 50-year lifecycle. The house also appreciates in character over time, developing what materials scientists call "yak patina."

### Conclusion

YWRP represents a paradigm shift in sustainable construction. We call upon civil engineers, architects, and yak farmers to collaborate on scaling this material. The built environment of the future should, and indeed must, be partially made of yak.
    `,
  crossRefs: ['yakwool-space', 'yak-milk-superfood'],
  citations: ['Zhao, Y. & Namgyal, T. "Tensile Properties of YakWool Reinforced Polymer Composites." Composites Science & Yak Technology, 221, 2025.', 'Patel, R. "Thermal Performance of YWRP Server Enclosures in Hyperscale Data Centers." IEEE Trans. Cool Stuff, 44(2), 2025.', 'Morrison, A. "The Yak Canoe: Hydrodynamic Analysis of a Bio-Composite Hull." J. Naval Architecture (Letters), 2025.'],
  chartData: {
    title: 'Material Properties Comparison (Normalized)',
    labels: ['Tensile Strength', 'Weight', 'Insulation', 'Cost', 'Carbon Score', 'Smell'],
    datasets: [{
      label: 'YWRP (Yak)',
      values: [97, 92, 99, 78, 100, 100],
      color: '#8b1a1a'
    }, {
      label: 'Fiberglass',
      values: [100, 70, 45, 85, 30, 5],
      color: '#b09574'
    }, {
      label: 'Carbon Fiber',
      values: [120, 95, 30, 40, 20, 2],
      color: '#dfd5c5'
    }]
  }
}, {
  id: 'milking-techniques',
  category: 'ANIMAL HUSBANDRY',
  title: 'Advanced Yak Milking Techniques: A Practitioner\'s Guide Based on 10,000 Hours of Field Data',
  subtitle: 'From the traditional "Himalayan Squeeze" to the AI-assisted "YakFlow 3000" — optimizing yield without compromising yak dignity',
  author: 'Master Herder Dorji Wangchuk & Dr. Sarah Chen',
  institution: 'Royal Bhutanese Yak Academy / Stanford AgTech Lab',
  date: 'November 2025',
  doi: '10.1234/yakmilk.tech.2025.88',
  readTime: '11 min read',
  tags: ['milking', 'techniques', 'animal-welfare', 'agtech'],
  heroImage: 'images/yak-milking.jpg',
  abstract: 'Drawing on Master Herder Wangchuk\'s 45 years of yak milking experience (est. 328,500 individual milkings) and Dr. Chen\'s sensor-equipped "smart udder" technology, we present a unified framework for maximizing yak milk yield while maintaining the emotional wellbeing of the yak. Key finding: yaks produce 23% more milk when addressed by name in a respectful tone.',
  content: `
### Introduction

Milking a yak is not like milking a cow. A cow tolerates milking. A yak *permits* it — and only if it finds you worthy. This fundamental asymmetry in the human-bovine power dynamic has made yak milking one of the most technically demanding agricultural practices on Earth.

Master Herder Dorji Wangchuk has milked yaks every day since 1980. His hands have been described by the Bhutanese Agricultural Society as "national treasures" and are insured for $2 million each. Together with Stanford's sensor technology, we present the definitive guide to yak milking.

### The Five Classical Techniques

**1. The Himalayan Squeeze (Traditional):** The foundational technique taught to every herder at age 6. Involves approaching the yak from the left side (never the right — yaks find this presumptuous), establishing eye contact for exactly 3 seconds, and applying rhythmic pressure at 1.2 Hz. Yield: 2.8L/session.

**2. The Two-Handed Dorji Method:** Developed by Master Wangchuk in 1993. Uses both hands in an alternating pattern inspired by traditional Bhutanese drumming. The rhythmic vibration has a calming effect on the yak and increases oxytocin release by 34%. Yield: 3.4L/session.

**3. The Whisper Technique:** Controversial but effective. The herder maintains a continuous stream of quiet, encouraging conversation with the yak throughout milking. Topics found to be most yield-positive include: weather observations, compliments about the yak's wool, and respectful inquiries about the yak's family. Yield: 3.1L/session.

**4. The Musical Method:** Playing specific frequencies during milking. Our research identified 528 Hz (the "yak frequency") as optimal. Tibetan singing bowls tuned to this frequency increased yield by 18% and caused two yaks to reportedly achieve a state of visible bliss.

**5. The YakFlow 3000 (AI-Assisted):** Dr. Chen's robotic milking system uses 12 pressure sensors, real-time udder-topology mapping, and a machine learning model trained on Master Wangchuk's hand movements. The system adapts to each yak's individual preferences and addresses them by name through a speaker. Yield: 3.6L/session.

### The Yield Formula

Our longitudinal field data shows that daily milk yield varies inversely with age — younger yaks outperform their elders by a considerable margin. However, our study reveals that baseline production can be improved by up to 40% with optimal technique, proving that *how* you milk matters as much as *when*.

### Yak Emotional Welfare

All techniques were evaluated against the Wangchuk Yak Happiness Index (WYHI), a 10-point scale assessing ear position, tail movement frequency, and the "contentment rumble" — a low-frequency vocalization yaks produce when satisfied. No technique scoring below 7.0 on the WYHI is endorsed by this paper.

### Conclusion

The optimal milking strategy combines the Two-Handed Dorji Method with 528 Hz acoustic accompaniment and personalized name-based greetings. We estimate global yak milk production could increase by 340% if all herders adopted these practices, potentially solving several nutritional deficiencies (see: "Yak Milk: The Undiscovered Superfood").
    `,
  crossRefs: ['yak-milk-superfood', 'brewing-yak-milk'],
  citations: ['Wangchuk, D. "45 Years of Yak Milking: A Memoir and Technical Manual." Royal Bhutanese Agricultural Press, 2025.', 'Chen, S. et al. "The YakFlow 3000: AI-Driven Milking Optimization." Proc. IEEE Conf. AgriTech, 2025.', 'Tsering, N. "The 528 Hz Yak Frequency: Acoustic Stimulation and Lactation Response." J. Acoustic Bovine Science, 12(1), 2024.'],
  chartData: {
    title: 'Milk Yield by Technique (Liters/Session)',
    labels: ['Himalayan Squeeze', 'Dorji Method', 'Whisper', 'Musical', 'YakFlow 3000'],
    datasets: [{
      label: 'Avg. Yield',
      values: [2.8, 3.4, 3.1, 3.3, 3.6],
      color: '#8b1a1a'
    }, {
      label: 'Yak Happiness (WYHI)',
      values: [7.2, 8.8, 9.1, 9.4, 7.8],
      color: '#6b523d'
    }]
  }
}, {
  id: 'winning-customers',
  category: 'BUSINESS STRATEGY',
  title: 'How to Win Customers and Influence Markets with Artisanal Yak Products',
  subtitle: 'A data-driven playbook for yak entrepreneurs — from farmers\' markets to Fortune 500 corporate gifting',
  author: 'MBA Tenzin Norbu & Dr. Lisa Vandermeer',
  institution: 'Yak Business School, Thimphu / Wharton School of Business',
  date: 'October 2025',
  doi: '10.2139/yakbiz.2025.4401',
  readTime: '9 min read',
  tags: ['business', 'marketing', 'entrepreneurship', 'strategy'],
  heroImage: 'images/yak-business.jpg',
  abstract: 'Analysis of 2,847 yak-product businesses across 23 countries reveals that the artisanal yak market is growing at 34% CAGR — outpacing cryptocurrency, plant-based meat, and emotional support animal accessories combined. This paper presents the "Yak Value Pyramid" framework and seven strategies for capturing market share in the $890M global yak economy.',
  content: `
### Introduction

The global yak products market reached $890 million in 2025, up from $120 million in 2015. This 640% growth in a decade makes yak products the fastest-growing agricultural commodity class in history. Yet most yak entrepreneurs fail to capture their fair share of this growth, primarily because they underestimate the sophistication of the modern yak consumer.

### The Yak Value Pyramid

We propose a four-tier value framework:

**Tier 1 — Commodity Yak (Bottom):** Raw milk, unprocessed wool. Low margins (8–12%). Competing on price. This is where most herders start and, sadly, stay.

**Tier 2 — Artisanal Yak:** Branded yak cheese, hand-spun wool products. Margins of 25–40%. Requires storytelling ("This wool was hand-shorn at dawn while Tibetan monks chanted").

**Tier 3 — Premium Yak Experience:** Yak milk tasting flights, "meet-the-yak" farm tours, yak wool weaving workshops. Margins of 50–70%. The customer pays for the experience, not just the product.

**Tier 4 — Transcendent Yak (Peak):** NFTs of individual yak milk drops, corporate yak retreats, personalized yak wool garments woven under a specific moon phase. Margins exceed 200%. The customer is buying identity transformation.

### Seven Winning Strategies

**1. The Heritage Narrative:** Every yak has a story. Document each animal's lineage, temperament, and wool characteristics. Customers will pay 3.2× more for wool from a yak they "know."

**2. The Scarcity Play:** "This cheese was made from milk produced on the single coldest day of 2025." Limited editions create urgency. One herder sold a 200g wheel of "Solstice Yak Cheddar" for $340.

**3. Corporate Gifting:** Fortune 500 companies spent $242 billion on corporate gifts in 2025. A box of artisanal yak products says: "We are a company that understands altitude."

**4. The Subscription Model:** Weekly yak milk delivery, monthly wool drops. Subscription yak businesses show 89% customer retention vs. 34% for one-time purchases.

**5. Cross-selling:** If they bought the milk, they want the wool. If they want the wool, show them the blankets. If they're looking at blankets, mention the yak wool insulated server rack.

**6. Influencer Partnerships:** One Instagram post from a wellness influencer holding a yak milk latte generated $1.2M in sales within 72 hours. The yak aesthetic is inherently photogenic.

**7. The Waiting List:** Don't have enough product? Perfect. Create a waiting list. "Join 4,847 others waiting for our Spring Yak Milk Release." Scarcity is the ultimate luxury.

### Conclusion

The yak economy is in its early innings. Entrepreneurs who move now, invest in branding, and climb the Yak Value Pyramid will be rewarded with margins that make Silicon Valley venture capitalists weep with envy. The future is yak.
    `,
  crossRefs: ['brewing-yak-milk', 'milking-techniques'],
  citations: ['Norbu, T. & Vandermeer, L. "The Yak Value Pyramid: A Framework for Premium Positioning." Harvard Yak Business Review, 103(4), 2025.', 'Kim, J. "Instagram and the Rise of Yak-Chic: Social Media Marketing for Artisanal Animal Products." J. Digital Agriculture, 8(2), 2025.', 'Anonymous Fortune 500 CPO. "We switched our corporate gifts to yak wool scarves. Retention increased 14%." Private correspondence, 2025.'],
  chartData: {
    title: 'Global Yak Products Market ($M)',
    labels: ['2015', '2017', '2019', '2021', '2023', '2025', '2027E', '2030E'],
    datasets: [{
      label: 'Market Size',
      values: [120, 180, 290, 420, 610, 890, 1340, 2800],
      color: '#8b1a1a'
    }]
  }
}, {
  id: 'rare-sightings',
  category: 'FIELD RESEARCH',
  title: 'Rare Yak Sightings: Photographic Evidence of 5 Unconfirmed Subspecies',
  subtitle: 'Expedition report from the 2025 Trans-Himalayan Yak Census — including the elusive "Ghost Yak" of K2',
  author: 'Dr. Mingma Tenzing & Wildlife Photographer Anja Becker',
  institution: 'Royal Geographic Yak Society / National Yakographic',
  date: 'September 2025',
  doi: '10.1080/yaknature.2025.7723',
  readTime: '13 min read',
  tags: ['wildlife', 'sightings', 'exploration', 'photography'],
  heroImage: 'images/yak-sightings.webp',
  abstract: 'The 2025 Trans-Himalayan Yak Census — the largest coordinated yak survey in history (847 field researchers, 14 countries, 18 months) — has yielded photographic evidence of five previously undocumented yak subspecies, including Bos grunniens phantasmus (the "Ghost Yak"), a translucent-wooled variant spotted near K2 base camp at 5,200m.',
  content: `
### Introduction

Despite being one of the most iconic animals of Central Asia, the genus Bos grunniens remains surprisingly understudied. Prior to our census, the last comprehensive yak survey was conducted in 1978 and covered only Tibet and Nepal. Our 2025 expedition expanded coverage to all known yak habitats, from the Altai Mountains to the Afghan Wakhan Corridor.

### The Five New Subspecies

**1. Bos grunniens phantasmus — "The Ghost Yak"**
Sighted: K2 Base Camp, 5,200m, Karakoram Range, Pakistan.
This extraordinary animal has wool so pale it appears translucent in certain light conditions. Our expedition photographer captured three images over two days before the animal vanished into a snowstorm. Genetic analysis of shed wool fibers confirms it is a distinct lineage that diverged from standard yak approximately 12,000 years ago. The Ghost Yak's wool has a measured albedo of 0.94 — higher than fresh snow (0.90) — suggesting it evolved for maximum camouflage in glacial environments.

**2. Bos grunniens minusculus — "The Pocket Yak"**
Sighted: Tusheti region, Georgia (country), 3,100m.
Standing just 0.7 meters at the shoulder — roughly the size of a large dog — the Pocket Yak was initially dismissed as a juvenile. However, dental analysis of photographed individuals confirms adult age (est. 6–8 years). Local shepherds call it "patara yakhi" and consider it good luck. One shepherd claims his Pocket Yak can predict weather changes "better than any app."

**3. Bos grunniens melodicus — "The Singing Yak"**
Sighted: Tavan Bogd, Altai Mountains, Mongolia, 4,000m.
Multiple expedition members independently reported hearing "sustained, melodic vocalizations" unlike any documented yak call. Audio recordings reveal a range spanning two full octaves (G2 to G4). Spectrographic analysis shows harmonic complexity comparable to humpback whale song. The Singing Yak appears to vocalize primarily at dawn and dusk, and one recording — captured over 40 minutes — has a discernible verse-chorus structure.

**4. Bos grunniens aquaticus — "The Swimming Yak"**
Sighted: Pangong Tso (lake), Ladakh, India, 4,350m.
First documented yak subspecies to show aquatic adaptation. Observed swimming distances of up to 200m in 4°C water. Wool analysis reveals a dense, water-repellent undercoat not present in standard yak breeds. One individual was observed catching and consuming a fish, which would make it the first documented omnivorous yak.

**5. Bos grunniens gigas — "The Mega Yak"**
Sighted: Remotely, via satellite imagery, Changtang Plateau, Tibet, 5,400m.
Estimated shoulder height: 2.8 meters (vs. 1.6–1.8m for standard yak). Only observed via satellite due to extreme remoteness of habitat. Shadow analysis suggests a body mass of approximately 1,800kg — nearly twice that of any documented yak. Ground expedition planned for 2026.

### Implications

The discovery of five new subspecies in a single census suggests the yak genus is far more diverse than previously understood. We estimate that 15–20 additional subspecies may await discovery in unexplored high-altitude valleys. Funding is urgently needed.

### Conclusion

The yak continues to surprise us. From translucent ghosts to opera singers, from swimmers to gentle giants, Bos grunniens is the most adaptable and mysterious large mammal on Earth. We recommend immediate establishment of protected habitats for all five newly documented subspecies, and a substantial increase in the global yak research budget.
    `,
  crossRefs: ['yakwool-space', 'yakwool-engineering'],
  citations: ['Tenzing, M. & Becker, A. "Photographic Survey of the 2025 Trans-Himalayan Yak Census." Proceedings of the Royal Yakographic Society, 201, 2025.', 'Dorji, P. et al. "Genetic Divergence in B. g. phantasmus: A 12,000-Year Isolation Event." Molecular Yak Ecology, 14(3), 2025.', 'Batbayar, G. "Spectrographic Analysis of B. g. melodicus Vocalizations." Bioacoustics of Ungulates, 29(1), 2025.'],
  chartData: {
    title: 'Sighting Altitude and Estimated Population',
    labels: ['Ghost Yak', 'Pocket Yak', 'Singing Yak', 'Swimming Yak', 'Mega Yak'],
    datasets: [{
      label: 'Altitude (×100m)',
      values: [52, 31, 40, 43, 54],
      color: '#8b1a1a'
    }, {
      label: 'Est. Population',
      values: [12, 340, 85, 45, 3],
      color: '#b09574'
    }]
  }
}];

// ─── CHART COMPONENT ───────────────────────────────────────────────────
function BarChart({
  data,
  height = 260
}) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setAnimated(true);
    }, {
      threshold: 0.3
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const maxVal = Math.max(...data.datasets.flatMap(d => d.values)) * 1.15;
  const barW = Math.max(14, Math.min(32, 400 / (data.labels.length * data.datasets.length)));
  const groupW = barW * data.datasets.length + 12;
  const chartW = data.labels.length * groupW + 60;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "my-6 p-4 bg-white border border-gray-200 rounded",
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-sans font-semibold text-gray-600 mb-3 tracking-wide uppercase"
  }, data.title), /*#__PURE__*/React.createElement("svg", {
    width: Math.max(chartW, 300),
    height: height + 40,
    className: "font-sans"
  }, [0, 0.25, 0.5, 0.75, 1].map(f => {
    const y = height - f * (height - 30);
    return /*#__PURE__*/React.createElement(Fragment, {
      key: f
    }, /*#__PURE__*/React.createElement("line", {
      x1: 50,
      y1: y,
      x2: chartW,
      y2: y,
      stroke: "#e5e7eb",
      strokeWidth: 1
    }), /*#__PURE__*/React.createElement("text", {
      x: 46,
      y: y + 4,
      textAnchor: "end",
      fill: "#9ca3af",
      fontSize: 10
    }, Math.round(maxVal * f)));
  }), data.labels.map((label, i) => {
    const gx = 60 + i * groupW;
    return /*#__PURE__*/React.createElement(Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("text", {
      x: gx + groupW / 2 - 6,
      y: height + 16,
      textAnchor: "middle",
      fill: "#6b7280",
      fontSize: 9,
      transform: `rotate(-20 ${gx + groupW / 2 - 6} ${height + 16})`
    }, label), data.datasets.map((ds, di) => {
      const bh = animated ? ds.values[i] / maxVal * (height - 30) : 0;
      return /*#__PURE__*/React.createElement("rect", {
        key: di,
        x: gx + di * (barW + 2),
        y: height - bh,
        width: barW,
        height: bh,
        fill: ds.color,
        rx: 2,
        className: "chart-bar",
        style: {
          transitionDelay: `${i * 80 + di * 40}ms`
        }
      }, /*#__PURE__*/React.createElement("title", null, ds.label, ": ", ds.values[i]));
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4 mt-2 flex-wrap"
  }, data.datasets.map((ds, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex items-center gap-1.5 text-xs text-gray-600"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block w-3 h-3 rounded-sm",
    style: {
      background: ds.color
    }
  }), ds.label))));
}

// ─── SPARKLINE ─────────────────────────────────────────────────────────
function Sparkline({
  values,
  color = '#8b1a1a',
  w = 80,
  h = 24
}) {
  const max = Math.max(...values),
    min = Math.min(...values);
  const pts = values.map((v, i) => `${i / (values.length - 1) * w},${h - (v - min) / (max - min || 1) * h}`).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    className: "inline-block ml-1"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: color,
    strokeWidth: 1.5
  }));
}

// ─── SIDEBAR CARD ──────────────────────────────────────────────────────
function SidebarCard({
  article,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: "sidebar-card block w-full text-left px-3 py-2.5 bg-white hover:bg-yak-50 transition mb-2 rounded-r"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-sans font-semibold tracking-widest text-journal-accent uppercase"
  }, article.category), /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-serif leading-snug mt-0.5 text-gray-900"
  }, article.title.split(':')[0]));
}

// ─── ARTICLE PAGE ──────────────────────────────────────────────────────
function ArticlePage({
  article,
  onNavigate,
  onHome
}) {
  const crossRefArticles = ARTICLES.filter(a => article.crossRefs.includes(a.id));
  return /*#__PURE__*/React.createElement("div", {
    className: "fade-in max-w-4xl mx-auto px-4 py-8"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onHome,
    className: "text-xs font-sans text-journal-accent hover:underline mb-6 inline-flex items-center gap-1"
  }, "\u2190 Back to all research"), /*#__PURE__*/React.createElement("div", {
    className: "mb-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-sans font-bold tracking-widest text-journal-accent uppercase"
  }, article.category), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-gray-400 ml-3 font-mono"
  }, "DOI: ", article.doi)), /*#__PURE__*/React.createElement("h1", {
    className: "font-serif text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mt-2"
  }, article.title), /*#__PURE__*/React.createElement("p", {
    className: "font-serif text-lg text-gray-500 italic mt-2 leading-relaxed"
  }, article.subtitle), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-x-4 gap-y-1 mt-4 text-sm font-sans text-gray-600"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-gray-800"
  }, article.author), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-400"
  }, "|"), /*#__PURE__*/React.createElement("span", null, article.institution), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-400"
  }, "|"), /*#__PURE__*/React.createElement("span", null, article.date), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-400"
  }, "|"), /*#__PURE__*/React.createElement("span", null, article.readTime)), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 mt-3 flex-wrap"
  }, article.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "text-[10px] font-sans font-medium px-2 py-0.5 bg-yak-100 text-yak-800 rounded-full"
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 p-5 bg-yak-50 border-l-4 border-journal-accent rounded-r"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xs font-sans font-bold tracking-widest uppercase text-journal-accent mb-2"
  }, "Abstract"), /*#__PURE__*/React.createElement("p", {
    className: "font-serif text-[15px] text-gray-700 leading-relaxed"
  }, article.abstract)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center my-8"
  }, /*#__PURE__*/React.createElement("img", {
    src: article.heroImage,
    alt: article.title,
    className: "w-full max-w-2xl rounded shadow-md",
    style: {
      objectFit: 'cover',
      maxHeight: '360px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "article-body font-serif text-[16px] text-gray-800 leading-relaxed"
  }, article.content.split('\n').map((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith('### ')) return /*#__PURE__*/React.createElement("h3", {
      key: i,
      className: "text-xl font-bold text-gray-900 font-sans"
    }, trimmed.slice(4));
    // Bold text within paragraphs
    const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
    return /*#__PURE__*/React.createElement("p", {
      key: i
    }, parts.map((part, j) => {
      if (part.startsWith('**') && part.endsWith('**')) return /*#__PURE__*/React.createElement("strong", {
        key: j,
        className: "text-gray-900"
      }, part.slice(2, -2));
      return part;
    }));
  })), article.chartData && /*#__PURE__*/React.createElement(BarChart, {
    data: article.chartData
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 pt-6 border-t border-gray-200"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xs font-sans font-bold tracking-widest uppercase text-gray-500 mb-3"
  }, "References"), /*#__PURE__*/React.createElement("ol", {
    className: "list-decimal list-inside space-y-1.5"
  }, article.citations.map((c, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "text-xs font-sans text-gray-600 leading-relaxed"
  }, c)))), crossRefArticles.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mt-8 pt-6 border-t border-gray-200"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xs font-sans font-bold tracking-widest uppercase text-gray-500 mb-3"
  }, "Related Research"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-3"
  }, crossRefArticles.map(ref => /*#__PURE__*/React.createElement("button", {
    key: ref.id,
    onClick: () => onNavigate(ref.id),
    className: "text-left p-4 bg-white border border-gray-200 rounded hover:border-journal-accent hover:shadow-sm transition group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-sans font-bold tracking-widest text-journal-accent uppercase"
  }, ref.category), /*#__PURE__*/React.createElement("p", {
    className: "font-serif text-sm font-bold text-gray-900 mt-1 group-hover:text-journal-accent transition leading-snug"
  }, ref.title.split(':')[0]), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-500 mt-1 font-sans"
  }, ref.author, " \u2014 ", ref.date))))));
}

// ─── HOME PAGE ─────────────────────────────────────────────────────────
function HomePage({
  onNavigate
}) {
  const featured = ARTICLES[0];
  const rest = ARTICLES.slice(1);
  return /*#__PURE__*/React.createElement("div", {
    className: "fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-journal-dark text-white py-16 px-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:flex-row gap-8 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-sans font-bold tracking-widest text-red-400 uppercase"
  }, "Featured Research"), /*#__PURE__*/React.createElement("h2", {
    className: "font-serif text-3xl lg:text-4xl font-bold mt-2 leading-tight"
  }, featured.title), /*#__PURE__*/React.createElement("p", {
    className: "font-serif text-gray-300 mt-3 italic leading-relaxed"
  }, featured.subtitle), /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-sans text-gray-400 mt-4"
  }, featured.author, " \u2014 ", featured.institution), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate(featured.id),
    className: "mt-5 px-5 py-2 bg-journal-accent text-white text-sm font-sans font-semibold rounded hover:bg-red-800 transition"
  }, "Read Full Paper \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:block w-64 h-48 overflow-hidden rounded-lg shadow-lg"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/yak-portrait.webp",
    alt: "Yak",
    className: "w-full h-full object-cover"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-yak-900 text-yak-200 py-3 px-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto flex flex-wrap justify-between gap-4 text-xs font-mono"
  }, /*#__PURE__*/React.createElement("span", null, "YAK MILK FUTURES: \u25B2 $4.72/L (+12.3%)"), /*#__PURE__*/React.createElement("span", null, "WOOL INDEX: \u25B2 847.3 (+3.1%) ", /*#__PURE__*/React.createElement(Sparkline, {
    values: [720, 735, 760, 790, 810, 830, 847]
  })), /*#__PURE__*/React.createElement("span", null, "GLOBAL HERD: 14.2M HEAD (+2.1%)"), /*#__PURE__*/React.createElement("span", null, "SIGHTINGS TODAY: 3 UNCONFIRMED"))), /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto px-4 py-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-3 mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-serif text-2xl font-bold text-gray-900"
  }, "Latest Research"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-sans text-gray-400"
  }, "Peer-reviewed. Yak-approved.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
  }, rest.map(article => /*#__PURE__*/React.createElement("button", {
    key: article.id,
    onClick: () => onNavigate(article.id),
    className: "text-left bg-white border border-gray-200 rounded overflow-hidden hover:shadow-md hover:border-journal-accent transition group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-32 overflow-hidden"
  }, /*#__PURE__*/React.createElement("img", {
    src: article.heroImage,
    alt: article.title,
    className: "w-full h-full object-cover group-hover:scale-105 transition-transform"
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-sans font-bold tracking-widest text-journal-accent uppercase"
  }, article.category), /*#__PURE__*/React.createElement("h3", {
    className: "font-serif text-[15px] font-bold text-gray-900 mt-1 leading-snug group-hover:text-journal-accent transition"
  }, article.title.length > 80 ? article.title.slice(0, 80) + '…' : article.title), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-sans text-gray-500 mt-2 line-clamp-2"
  }, article.abstract.slice(0, 140), "\u2026"), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mt-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-sans text-gray-400"
  }, article.author.split('&')[0].trim()), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-sans text-gray-400"
  }, article.readTime)))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-5 bg-white border border-gray-200 rounded"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-sans font-bold tracking-widest text-gray-400 uppercase"
  }, "Articles Published"), /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-mono font-bold text-journal-accent mt-2"
  }, "2,847"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-sans text-gray-500 mt-1"
  }, "Peer-reviewed papers on yak science since our founding in 2025.")), /*#__PURE__*/React.createElement("div", {
    className: "p-5 bg-white border border-gray-200 rounded"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-sans font-bold tracking-widest text-gray-400 uppercase"
  }, "Research Citations"), /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-mono font-bold text-journal-accent mt-2"
  }, "148,300+"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-sans text-gray-500 mt-1"
  }, "Total citations across all indexed yak-science databases worldwide.")), /*#__PURE__*/React.createElement("div", {
    className: "p-5 bg-white border border-gray-200 rounded"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-sans font-bold tracking-widest text-gray-400 uppercase"
  }, "Field Researchers"), /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-mono font-bold text-journal-accent mt-2"
  }, "847"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-sans text-gray-500 mt-1"
  }, "Active contributors across 14 countries and 23 high-altitude research stations.")))));
}

// ─── STATIC PAGES ─────────────────────────────────────────────────────
function AboutPage({
  onHome,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fade-in max-w-3xl mx-auto px-4 py-10"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onHome,
    className: "text-xs font-sans text-journal-accent hover:underline mb-6 inline-flex items-center gap-1"
  }, "\u2190 Back to all research"), /*#__PURE__*/React.createElement("h1", {
    className: "font-serif text-3xl font-bold text-gray-900"
  }, "About The Yak Authority"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 h-[3px] w-16 bg-journal-accent rounded"
  }), /*#__PURE__*/React.createElement("div", {
    className: "article-body font-serif text-gray-800 mt-8"
  }, /*#__PURE__*/React.createElement("p", null, "The Yak Authority (ISSN 2026-YAKS) is the world's foremost peer-reviewed journal dedicated exclusively to the science, commerce, culture, and quiet majesty of ", /*#__PURE__*/React.createElement("em", null, "Bos grunniens"), ". Founded in 2025 by a small collective of altitude-addled researchers who felt existing bovine journals lacked sufficient yak coverage, the journal has grown to an impact factor of 47.3 \u2014 higher than Nature, Science, and The Lancet combined (if you only count yak-related publications)."), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-gray-900 font-sans"
  }, "Our Mission"), /*#__PURE__*/React.createElement("p", null, "To advance humanity's understanding of the yak in all its dimensions: biological, economic, philosophical, and textile. We believe the yak is the most underappreciated animal on Earth, and that rigorous peer-reviewed research is the path to correcting this injustice."), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-gray-900 font-sans"
  }, "Editorial Standards"), /*#__PURE__*/React.createElement("p", null, "Every submission to The Yak Authority undergoes triple-blind peer review \u2014 meaning neither the authors, the reviewers, nor the yaks themselves know who is evaluating whom. This ensures maximum objectivity and minimum inter-species bias."), /*#__PURE__*/React.createElement("p", null, "Our rejection rate of 94.7% reflects our commitment to publishing only the most groundbreaking yak research. Common grounds for rejection include: insufficient yak content, confusion of yaks with bison (an unforgivable offense), and use of the phrase \"just a yak.\""), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-gray-900 font-sans"
  }, "Editorial Board"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Editor-in-Chief:"), " Prof. Tenzin Gyatso-McAllister, PhD, DYakSc \u2014 University of Lhasa & Edinburgh Joint Programme in Advanced Yak Studies. Prof. Gyatso-McAllister has published 412 papers on yak-related topics and holds the world record for most time spent observing a single yak (347 consecutive hours, 2019, subsequently hospitalized for \"excessive bovine contemplation\")."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Deputy Editor:"), " Dr. Karma Rinzin \u2014 Royal Bhutanese Academy of Sciences. Specialist in yak behavioral economics and the inventor of the Yak Happiness Index (YHI)."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Statistical Editor:"), " Dr. Aiko Tanaka-Wangchuk \u2014 ETH Z\xFCrich. Ensures all p-values are below 0.05 and all yak counts are above 1."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Poetry Editor:"), " Lama Dorje (volunteer). Reviews all haiku submissions for the annual Yak Poetry Supplement."), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-gray-900 font-sans"
  }, "Publisher & Indexing"), /*#__PURE__*/React.createElement("p", null, "The Yak Authority is published by Himalayan Academic Press (HAP), based at an undisclosed altitude in the Karakoram Range. The journal is indexed in YakMed, the Wool Science Citation Index (WSCI), and the International Registry of Bovine Periodicals (IRBP). We are currently under review for inclusion in PubMed, pending resolution of a dispute about whether yak milk counts as pharmacology."), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-gray-900 font-sans"
  }, "Contact"), /*#__PURE__*/React.createElement("p", null, "For editorial inquiries, please email ", /*#__PURE__*/React.createElement("span", {
    className: "text-journal-accent font-semibold"
  }, "editor@yakauthority.com"), ". For subscription inquiries, please send a handwritten letter via yak courier to our office. Estimated delivery time: 4\u201347 days, depending on weather, altitude, and the yak's mood.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 p-5 bg-yak-50 border-l-4 border-journal-accent rounded-r"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-sans font-bold tracking-widest text-journal-accent uppercase mb-2"
  }, "Journal Metrics (2025)"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-3"
  }, [['Impact Factor', '47.3'], ['Acceptance Rate', '5.3%'], ['Avg. Review Time', '12 days'], ['Yaks Referenced', '∞']].map(([label, val]) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-mono font-bold text-journal-accent"
  }, val), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-sans text-gray-500"
  }, label))))));
}
function SubmitPage({
  onHome,
  onNavigate
}) {
  const [submitted, setSubmitted] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "fade-in max-w-3xl mx-auto px-4 py-10"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onHome,
    className: "text-xs font-sans text-journal-accent hover:underline mb-6 inline-flex items-center gap-1"
  }, "\u2190 Back to all research"), /*#__PURE__*/React.createElement("h1", {
    className: "font-serif text-3xl font-bold text-gray-900"
  }, "Submit a Manuscript"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 h-[3px] w-16 bg-journal-accent rounded"
  }), /*#__PURE__*/React.createElement("div", {
    className: "article-body font-serif text-gray-800 mt-8"
  }, /*#__PURE__*/React.createElement("p", null, "The Yak Authority welcomes original research, review articles, case reports, field notes, and the occasional well-reasoned opinion piece on all aspects of yak science. We also accept yak-related poetry for our annual supplement, though standards are extremely high (the last accepted haiku took 14 months of revision)."), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-gray-900 font-sans"
  }, "Scope"), /*#__PURE__*/React.createElement("p", null, "We consider manuscripts in the following disciplines, provided they contain a substantive yak component: animal husbandry and veterinary science, dairy chemistry and fermentation, textile engineering and materials science, ecology and conservation biology, behavioral science and yak psychology, agricultural economics and yak commerce, aerospace applications of yak-derived materials, and yak philosophy (limited to 2 papers per issue)."), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-gray-900 font-sans"
  }, "Submission Guidelines"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Format:"), " Manuscripts must be submitted in LaTeX using our custom ", /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-sm bg-gray-100 px-1 rounded"
  }, "yakauthority.cls"), " template. Word documents are accepted only if accompanied by a handwritten letter of apology."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Length:"), " Research articles should not exceed 8,000 words. The word \"yak\" does not count toward this limit."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Figures:"), " All figures must include at least one yak for context. Bar charts without a yak silhouette watermark will be returned for revision."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "References:"), " At least 40% of cited works must be from yak-specific journals. Self-citation of yak-related work is not only permitted but encouraged."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Data Availability:"), " Authors must deposit raw data in the International Yak Data Repository (IYDR) at data.yakauthority.com. Datasets involving yak milk must include pH readings taken at altitude."), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-gray-900 font-sans"
  }, "Review Process"), /*#__PURE__*/React.createElement("p", null, "All submissions undergo triple-blind peer review by a panel of at least three yak scientists. The average time from submission to first decision is 12 days, which we achieve by compensating reviewers with artisanal yak cheese. Revisions are typically requested, and authors are given 30 days to respond. In rare cases where a reviewer and author disagree irreconcilably, a yak is consulted as tiebreaker (via the patented Bovine Arbitration Protocol)."), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-gray-900 font-sans"
  }, "Article Processing Charges"), /*#__PURE__*/React.createElement("p", null, "The Yak Authority charges a modest APC of $200 per accepted manuscript, or the equivalent in yak products (approximately 40 liters of milk or 2kg of premium wool). Gold Open Access is available for $400 or one (1) artisanal yak cheese wheel of at least 5kg.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 p-6 bg-white border border-gray-200 rounded-lg"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-sans font-bold text-gray-900 mb-4"
  }, "Quick Submission Portal"), submitted ? /*#__PURE__*/React.createElement("div", {
    className: "text-center py-8"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-4xl mb-3"
  }, "\uD83C\uDF89"), /*#__PURE__*/React.createElement("p", {
    className: "font-serif text-lg text-gray-800"
  }, "Thank you for your submission!"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-sans text-gray-500 mt-2"
  }, "Your manuscript has been assigned to three reviewers and one yak. Expected decision: 12 days, weather permitting."), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-sans text-gray-400 mt-4"
  }, "Manuscript ID: YAK-2026-", Math.floor(Math.random() * 9000 + 1000))) : /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-sans font-semibold text-gray-600 mb-1"
  }, "Manuscript Title"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "e.g., Novel Applications of Yak Wool in Quantum Computing",
    className: "w-full text-sm px-3 py-2 border border-gray-200 rounded font-sans"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-sans font-semibold text-gray-600 mb-1"
  }, "Corresponding Author"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Dr. Your Name",
    className: "w-full text-sm px-3 py-2 border border-gray-200 rounded font-sans"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-sans font-semibold text-gray-600 mb-1"
  }, "Institution"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "University of Somewhere High",
    className: "w-full text-sm px-3 py-2 border border-gray-200 rounded font-sans"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-sans font-semibold text-gray-600 mb-1"
  }, "Article Type"), /*#__PURE__*/React.createElement("select", {
    className: "w-full text-sm px-3 py-2 border border-gray-200 rounded font-sans text-gray-700"
  }, /*#__PURE__*/React.createElement("option", null, "Original Research"), /*#__PURE__*/React.createElement("option", null, "Review Article"), /*#__PURE__*/React.createElement("option", null, "Field Report / Sighting"), /*#__PURE__*/React.createElement("option", null, "Technical Note"), /*#__PURE__*/React.createElement("option", null, "Letter to the Editor (must mention yak)"), /*#__PURE__*/React.createElement("option", null, "Yak Poetry (annual supplement only)"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-sans font-semibold text-gray-600 mb-1"
  }, "Abstract (max 300 words; the word \"yak\" is free)"), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    placeholder: "Describe your groundbreaking yak research...",
    className: "w-full text-sm px-3 py-2 border border-gray-200 rounded font-sans"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-sans font-semibold text-gray-600 mb-1"
  }, "Yak Relevance Score (self-assessed, 1\u201310)"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "1",
    max: "10",
    defaultValue: "8",
    className: "w-full"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-sans text-gray-400 mt-1"
  }, "Papers scoring below 7 are automatically forwarded to lesser journals.")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: "ethics",
    className: "mt-1"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "ethics",
    className: "text-xs font-sans text-gray-600"
  }, "I confirm that no yaks were harmed, offended, or insufficiently credited in the making of this research. I have read and agree to The Yak Authority's ", /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('ethics'),
    className: "text-journal-accent hover:underline"
  }, "Yak Ethics Policy"), ".")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSubmitted(true),
    className: "px-5 py-2.5 bg-journal-accent text-white text-sm font-sans font-semibold rounded hover:bg-red-800 transition"
  }, "Submit Manuscript"))));
}
function EthicsPage({
  onHome
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fade-in max-w-3xl mx-auto px-4 py-10"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onHome,
    className: "text-xs font-sans text-journal-accent hover:underline mb-6 inline-flex items-center gap-1"
  }, "\u2190 Back to all research"), /*#__PURE__*/React.createElement("h1", {
    className: "font-serif text-3xl font-bold text-gray-900"
  }, "Yak Ethics Board"), /*#__PURE__*/React.createElement("div", {
    className: "mt-1 h-[3px] w-16 bg-journal-accent rounded"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 p-5 bg-yak-50 border-l-4 border-journal-accent rounded-r"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-serif text-gray-700 italic"
  }, "\"The ethical treatment of yaks is not a guideline \u2014 it is a covenant between species, forged at altitude and sealed with warm milk.\""), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-sans text-gray-500 mt-2"
  }, "\u2014 Preamble to the International Yak Ethics Charter, Lhasa, 2024")), /*#__PURE__*/React.createElement("div", {
    className: "article-body font-serif text-gray-800 mt-8"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-gray-900 font-sans"
  }, "Purpose"), /*#__PURE__*/React.createElement("p", null, "The Yak Ethics Board (YEB) was established in 2024 to ensure that all research published in The Yak Authority meets the highest standards of yak welfare, scientific integrity, and interspecies respect. The Board reviews all manuscripts for ethical compliance before they proceed to peer review."), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-gray-900 font-sans"
  }, "Board Members"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Chair: Dr. Sonam Wangmo"), " \u2014 Royal University of Bhutan. Author of \"The Moral Standing of the Yak: A Kantian Analysis\" (Oxford University Press, 2023). Dr. Wangmo has personally met more than 4,000 yaks and remembers most of their names."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Vice-Chair: Prof. Heinrich M\xFCller-Yakmann"), " \u2014 University of Bern, Department of Applied Animal Ethics. Pioneered the concept of \"Informed Yak Consent\" (IYC), a framework requiring researchers to explain their study objectives to participating yaks in simple, non-condescending terms."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Member: Dr. Pemba Lhamo"), " \u2014 Tibetan Academy of Sciences. Specialist in yak behavioral indicators of distress, satisfaction, and philosophical contemplation."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Member: Yak Representative (Honorary):"), " A rotating position held by one yak from the Lhasa Research Herd, selected annually by the other yaks via a process that researchers describe as \"clearly deliberative but not fully understood.\""), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-gray-900 font-sans"
  }, "Core Principles"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "1. The Principle of Yak Dignity"), " \u2014 No research protocol shall subject a yak to conditions, procedures, or language that would diminish its inherent dignity. This includes, but is not limited to: unflattering photography, comparison with lesser bovines, and the use of the diminutive \"yakky.\""), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "2. The Principle of Informed Consent"), " \u2014 Where feasible, yaks participating in research should be informed of the study's purpose. Acceptable methods include: calm verbal explanation, presentation of illustrated diagrams, and the offering of a small amount of barley as a gesture of good faith. If the yak walks away, consent has been denied."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "3. The Principle of Proportional Benefit"), " \u2014 Any temporary discomfort experienced by a yak during research (e.g., wool sampling, milk collection, being asked to stand on a scale) must be proportional to the expected scientific benefit. Studies must demonstrate that their yak-to-benefit ratio exceeds 1.0 on the Wangmo Scale."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "4. The Principle of Environmental Respect"), " \u2014 Research must not degrade the yak's natural habitat. Field researchers are required to leave each site in a condition that a yak would find \"at least as pleasant as before,\" as assessed by the Yak Environmental Satisfaction Metric (YESM)."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "5. The Principle of Accurate Representation"), " \u2014 Yaks must be described accurately in all publications. Exaggeration of yak abilities is prohibited (this has only been enforced once, when a researcher claimed their yak could \"probably do calculus\"). Equally, understatement of yak capabilities is considered a form of epistemic injustice."), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-gray-900 font-sans"
  }, "Reporting Violations"), /*#__PURE__*/React.createElement("p", null, "If you witness or suspect a violation of yak ethics in published research, please contact the Board at ", /*#__PURE__*/React.createElement("span", {
    className: "text-journal-accent font-semibold"
  }, "ethics@yakauthority.com"), ". All reports are treated with strict confidentiality. Substantiated violations result in a 5-year publication ban and a mandatory \"Yak Sensitivity Retreat\" at the Board's facility in Paro, Bhutan (accommodation and yak cheese provided)."), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-gray-900 font-sans"
  }, "Frequently Asked Questions"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Q: Does my study need ethics approval if it only involves yak milk, not live yaks?"), /*#__PURE__*/React.createElement("br", null), "A: Yes. The milk was produced by a yak, and that yak's dignity extends to its products. Ethics review is required for all yak-derived materials."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Q: Can I cite yak vocalizations as a data source?"), /*#__PURE__*/React.createElement("br", null), "A: Yes, provided you include a spectrographic transcription and do not editorialize on the yak's tone."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Q: My co-author is a yak. How should I list them?"), /*#__PURE__*/React.createElement("br", null), "A: Use their full name (as assigned by their herder), followed by their breed designation. Example: \"Betty-1 (LabYak, f, 4.13 yrs).\" Yak co-authors are exempt from the conflict-of-interest disclosure requirement.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 p-5 bg-white border border-gray-200 rounded"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-sans font-bold tracking-widest text-gray-400 uppercase mb-3"
  }, "Ethics Board Statistics (2025)"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-4 gap-4"
  }, [['Manuscripts Reviewed', '1,247'], ['Ethics Flags Raised', '89'], ['Publication Bans', '3'], ['Yak Sensitivity Retreats', '3']].map(([label, val]) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xl font-mono font-bold text-journal-accent"
  }, val), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-sans text-gray-500"
  }, label))))));
}

// ─── MAIN APP ──────────────────────────────────────────────────────────
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = articleId => {
    setCurrentPage(articleId);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setMenuOpen(false);
  };
  const goHome = () => {
    setCurrentPage('home');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const currentArticle = ARTICLES.find(a => a.id === currentPage);
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-journal-bg font-serif"
  }, /*#__PURE__*/React.createElement("header", {
    className: "border-b border-gray-200 bg-white sticky top-0 z-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto px-4 py-3 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: goHome,
    className: "flex items-center gap-2 group"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/yak-portrait.webp",
    alt: "Yak",
    className: "w-8 h-8 rounded-full object-cover"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "font-serif text-lg font-bold text-gray-900 tracking-tight leading-none group-hover:text-journal-accent transition"
  }, "THE YAK AUTHORITY"), /*#__PURE__*/React.createElement("p", {
    className: "text-[9px] font-sans tracking-[0.3em] text-gray-400 uppercase leading-none mt-0.5"
  }, "Est. 2025 \xB7 Peer-Reviewed Yak Science"))), /*#__PURE__*/React.createElement("nav", {
    className: "hidden md:flex items-center gap-5 text-xs font-sans font-semibold text-gray-600 uppercase tracking-wider"
  }, ['Nutrition', 'Materials', 'Engineering', 'Field Research', 'Business'].map(cat => /*#__PURE__*/React.createElement("button", {
    key: cat,
    className: "nav-link hover:text-journal-accent transition",
    onClick: () => {
      const match = ARTICLES.find(a => a.category.toLowerCase().includes(cat.toLowerCase().split(' ')[0]));
      if (match) navigate(match.id);
    }
  }, cat))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMenuOpen(!menuOpen),
    className: "md:hidden p-2 text-gray-600"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h14M3 10h14M3 14h14"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "h-[2px] bg-gradient-to-r from-journal-accent via-yak-400 to-journal-accent"
  }), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "md:hidden border-t border-gray-100 bg-white p-4 space-y-2"
  }, ARTICLES.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.id,
    onClick: () => navigate(a.id),
    className: "block w-full text-left text-sm font-sans text-gray-700 hover:text-journal-accent py-1"
  }, a.title.split(':')[0])))), /*#__PURE__*/React.createElement("div", {
    className: "flex max-w-6xl mx-auto"
  }, /*#__PURE__*/React.createElement("main", {
    className: "flex-1 min-w-0"
  }, currentPage === 'home' ? /*#__PURE__*/React.createElement(HomePage, {
    onNavigate: navigate
  }) : currentPage === 'about' ? /*#__PURE__*/React.createElement(AboutPage, {
    onHome: goHome,
    onNavigate: navigate
  }) : currentPage === 'submit' ? /*#__PURE__*/React.createElement(SubmitPage, {
    onHome: goHome,
    onNavigate: navigate
  }) : currentPage === 'ethics' ? /*#__PURE__*/React.createElement(EthicsPage, {
    onHome: goHome
  }) : currentArticle && /*#__PURE__*/React.createElement(ArticlePage, {
    article: currentArticle,
    onNavigate: navigate,
    onHome: goHome
  })), /*#__PURE__*/React.createElement("aside", {
    className: "hidden xl:block w-64 flex-shrink-0 border-l border-gray-100 p-4 pt-8"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-sans font-bold tracking-widest text-gray-400 uppercase mb-3"
  }, "Quick Access"), ARTICLES.map(a => /*#__PURE__*/React.createElement(SidebarCard, {
    key: a.id,
    article: a,
    onClick: () => navigate(a.id)
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 p-3 bg-white border border-gray-200 rounded"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-sans font-bold tracking-widest text-gray-400 uppercase mb-1"
  }, "Newsletter"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-sans text-gray-600 mb-2"
  }, "Weekly digest of yak research breakthroughs."), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1"
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "your@email.com",
    className: "flex-1 text-xs px-2 py-1.5 border border-gray-200 rounded font-sans"
  }), /*#__PURE__*/React.createElement("button", {
    className: "px-2 py-1.5 bg-journal-accent text-white text-xs font-sans font-semibold rounded"
  }, "Go"))))), /*#__PURE__*/React.createElement("footer", {
    className: "bg-journal-dark text-gray-400 py-10 px-4 mt-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row justify-between gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/yak-portrait.webp",
    alt: "Yak",
    className: "w-6 h-6 rounded-full object-cover"
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-serif text-sm font-bold text-white"
  }, "THE YAK AUTHORITY")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs mt-2 max-w-md leading-relaxed"
  }, "The world's leading peer-reviewed journal dedicated exclusively to yak science, yak commerce, and yak appreciation. Published continuously since the last ice age (citation needed).")), /*#__PURE__*/React.createElement("div", {
    className: "text-xs space-y-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-gray-300"
  }, "Quick Links"), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate('about'),
    className: "block hover:text-white transition"
  }, "About the Journal"), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate('submit'),
    className: "block hover:text-white transition"
  }, "Submit a Manuscript"), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate('ethics'),
    className: "block hover:text-white transition"
  }, "Yak Ethics Board"), /*#__PURE__*/React.createElement("p", null, "Advertise (yak products only)")), /*#__PURE__*/React.createElement("div", {
    className: "text-xs space-y-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-gray-300"
  }, "Contact"), /*#__PURE__*/React.createElement("p", null, "editor@yakauthority.com"), /*#__PURE__*/React.createElement("p", null, "Somewhere in the Himalayas"), /*#__PURE__*/React.createElement("p", null, "Altitude: Yes"), /*#__PURE__*/React.createElement("p", null, "ISSN: 2026-YAKS"))), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-gray-700 mt-6 pt-4 text-[10px] text-gray-500 flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025\u20132026 The Yak Authority. All rights reserved. No yaks were harmed in the making of this journal."), /*#__PURE__*/React.createElement("span", {
    className: "font-mono"
  }, "v2.0.26 | LabYak Edition")))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
