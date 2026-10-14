import { Article } from '../types';

export const ARTICLES: Article[] = [
  {
    id: 'feline-chronic-kidney-disease-guide',
    slug: 'feline-chronic-kidney-disease-guide',
    title: 'Feline Chronic Kidney Disease: Early Warning Signs, Staging, and Diet Protocols',
    excerpt: 'Chronic kidney disease (CKD) affects more than 30% of senior cats. Learn how to identify subtle behavioral changes before clinical dehydration occurs, along with IRIS staging and evidence-based renal diets.',
    featuredImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Early detection through routine blood chemistry and symmetric dimethylarginine (SDMA) tests significantly extends feline lifespan.',
    categoryId: 'cat-health',
    subcategoryId: 'chronic-conditions',
    tags: ['Kidney Health', 'Senior Cats', 'Hydration', 'Veterinary Medicine', 'IRIS Staging'],
    authorId: 'elena-vance',
    reviewerId: 'dr-sarah-miller',
    publishedAt: '2026-08-14',
    updatedAt: '2026-10-02',
    readingTimeMinutes: 7,
    featured: true,
    popular: true,
    keyTakeaways: [
      'CKD is progressive, but early management through IRIS staging can double or triple life expectancy after diagnosis.',
      'Polydipsia (increased thirst) and polyuria (larger litter clumps) are often the earliest noticeable signs.',
      'Phosphorus restriction in food is the single most proven dietary intervention to slow kidney nephron deterioration.',
      'Wet food with high moisture content (>78%) is essential for keeping CKD cats from entering recurring dehydration crises.'
    ],
    tableOfContents: [
      { id: 'what-is-ckd', title: 'What Happens to the Feline Kidney?' },
      { id: 'subtle-symptoms', title: 'Subtle Symptoms Owners Miss' },
      { id: 'iris-staging', title: 'Understanding IRIS Staging' },
      { id: 'diet-and-hydration', title: 'Renal Diets: Phosphorus & Moisture' },
      { id: 'at-home-care', title: 'At-Home Support & Sub-Q Fluids' }
    ],
    sections: [
      {
        id: 'what-is-ckd',
        heading: 'What Happens to the Feline Kidney?',
        content: [
          'The feline kidney is a marvel of evolutionary efficiency, originally adapted to extract nearly every milliliter of moisture from prey in arid desert ancestral environments. However, this high concentration capacity places extraordinary mechanical stress on the nephrons over a lifetime.',
          'In Chronic Kidney Disease (CKD), functional nephrons are irreversibly replaced by fibrous scar tissue. Because cats possess substantial compensatory reserve, clinical symptoms often do not appear until approximately 65% to 75% of renal function is already compromised.'
        ],
        callout: {
          type: 'vet-note',
          title: 'Veterinary Note on SDMA Biomarkers',
          text: 'Modern screening utilizes Symmetric Dimethylarginine (SDMA), an amino acid excreted by the kidneys that can elevate when as little as 25% to 40% of kidney function is lost, long before creatinine rises on standard blood panels.'
        }
      },
      {
        id: 'subtle-symptoms',
        heading: 'Subtle Symptoms Owners Miss',
        content: [
          'Most caregivers expect a sick cat to immediately stop eating. With CKD, the progression is insidiously gradual. In the early stages, cats frequently exhibit subtle behavioral adjustments that caregivers mistake for benign aging.',
          'The first sign is almost always polydipsia (drinking more water) coupled with polyuria (producing larger urine clumps in the litter box). Owners may notice their cat lingering by the water bowl, drinking from unusual sources like sink faucets, or requiring more frequent litter scoopings.'
        ],
        bulletPoints: [
          'Unkempt, dull, or spiky coat along the spine due to reduced self-grooming.',
          'Gradual muscle wasting along the spine and hips, despite an apparently normal appetite.',
          'Intermittent clear liquid or foamy vomiting, caused by uremic gastritis (excess stomach acid).',
          'Mild halitosis (bad breath) with a faint ammonia or chemical smell.'
        ]
      },
      {
        id: 'iris-staging',
        heading: 'Understanding IRIS Staging',
        content: [
          'The International Renal Interest Society (IRIS) categorizes feline CKD into four distinct stages based on fasting blood creatinine, blood SDMA levels, systemic blood pressure, and urine protein-to-creatinine (UPC) ratio.',
          'Knowing your cat’s IRIS stage allows you and your veterinarian to choose targeted treatments rather than a one-size-fits-all approach.'
        ],
        tableData: {
          headers: ['IRIS Stage', 'Creatinine (mg/dL)', 'SDMA (ug/dL)', 'Primary Clinical Focus'],
          rows: [
            ['Stage 1 (Non-Azotemic)', '< 1.6', '< 18', 'Identify underlying cause, avoid nephrotoxic drugs, monitor urine specific gravity.'],
            ['Stage 2 (Mild)', '1.6 - 2.8', '18 - 25', 'Introduce therapeutic renal diet, restrict phosphorus, manage hydration.'],
            ['Stage 3 (Moderate)', '2.9 - 5.0', '26 - 38', 'Phosphorus binders if needed, treat hypertension, monitor potassium and anemia.'],
            ['Stage 4 (Severe)', '> 5.0', '> 38', 'Manage uremic symptoms, subcutaneous fluid therapy, anti-nausea medication, appetite stimulants.']
          ]
        }
      },
      {
        id: 'diet-and-hydration',
        heading: 'Renal Diets: Phosphorus & Moisture',
        content: [
          'Diet is the single most powerful therapeutic intervention for feline kidney disease. In clinical trials, cats fed dedicated renal diets survived more than twice as long as those fed standard maintenance adult diets.',
          'The primary protective element is strict dietary phosphorus restriction. As nephrons fail, phosphorus accumulates in the bloodstream, triggering secondary hyperparathyroidism that rapidly accelerates kidney calcification.'
        ],
        callout: {
          type: 'safety',
          title: 'Never Withhold Food Completely',
          text: 'If your cat refuses a therapeutic renal diet, do not starve them into compliance. Hepatic lipidosis (fatty liver disease) can develop within 48 to 72 hours of anorexia. A cat eating standard food with a vet-prescribed phosphorus binder is far safer than a cat not eating at all.'
        }
      },
      {
        id: 'at-home-care',
        heading: 'At-Home Support & Sub-Q Fluids',
        content: [
          'Many cats in Stages 3 and 4 maintain high quality of life for months or years with subcutaneous fluid administration administered at home. While the prospect of giving fluids under the skin sounds intimidating at first, most cats tolerate the gentle 5-minute session calmly when paired with churu puree treats.',
          'Elevate water stations around the home, install wide stainless-steel or ceramic bowls to prevent whisker fatigue, and maintain multiple accessible low-entry litter boxes on every floor.'
        ]
      }
    ],
    references: [
      { citation: 'IRIS Staging Guidelines for Feline Chronic Kidney Disease', source: 'International Renal Interest Society', year: 2023, url: 'https://iris-kidney.com' },
      { citation: 'Elliott, J., et al. Survival of cats with naturally occurring chronic renal failure: effect of dietary management.', source: 'Journal of Small Animal Practice', year: 2000 },
      { citation: 'Polzin, D. J. Chronic kidney disease in small animals.', source: 'Veterinary Clinics of North America: Small Animal Practice', year: 2011 }
    ]
  },
  {
    id: 'wet-vs-dry-cat-food-hydration',
    slug: 'wet-vs-dry-cat-food-hydration',
    title: 'Dry vs. Wet Cat Food: The Biological Truth About Obligate Carnivore Hydration',
    excerpt: 'Domestic cats descend from the African wildcat and possess a remarkably low intrinsic thirst drive. Discover why moisture content in food is crucial for preventing urinary blockages and kidney stress.',
    featuredImage: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'A mouse or small bird in the wild contains 70% to 75% water, closely matching premium canned food.',
    categoryId: 'cat-nutrition',
    subcategoryId: 'wet-vs-dry',
    tags: ['Cat Nutrition', 'Wet Food', 'Kibble', 'Urinary Tract', 'Hydration'],
    authorId: 'elena-vance',
    reviewerId: 'dr-arun-patel',
    publishedAt: '2026-07-22',
    updatedAt: '2026-09-18',
    readingTimeMinutes: 6,
    featured: true,
    popular: true,
    keyTakeaways: [
      'Cats do not feel thirst in the same manner as dogs or humans; they evolved to get nearly all their water directly from fresh prey.',
      'Cats fed dry kibble (10% moisture) drink more water than wet-fed cats, but still take in 50% less total water overall.',
      'Chronic subclinical dehydration concentrates urine specific gravity, dramatically elevating the risk of struvite and calcium oxalate crystal formation.',
      'Wet food also provides lower carbohydrate density, aiding in feline obesity and type 2 diabetes prevention.'
    ],
    tableOfContents: [
      { id: 'evolutionary-thirst', title: 'The Desert Predator Ancestry' },
      { id: 'water-intake-math', title: 'The Math of Daily Moisture Intake' },
      { id: 'urinary-health', title: 'Urinary Crystals & Bladder Inflammation' },
      { id: 'dental-kibble-myth', title: 'The Great Dental Kibble Myth' },
      { id: 'practical-transition', title: 'How to Transition a Stubborn Kibble Addict' }
    ],
    sections: [
      {
        id: 'evolutionary-thirst',
        heading: 'The Desert Predator Ancestry',
        content: [
          'All domestic cats (Felis catus) are obligate carnivores directly descended from Felis lybica, the African wildcat. In desert climates where open standing water is scarce, natural prey like rodents, birds, and insects naturally consist of 65% to 75% water.',
          'Consequently, cats never evolved a responsive thirst mechanism. While a dog will eagerly lap a bowl dry after moderate exertion, a cat’s brain only signals thirst after significant cellular dehydration has already begun.'
        ]
      },
      {
        id: 'water-intake-math',
        heading: 'The Math of Daily Moisture Intake',
        content: [
          'Studies comparing total fluid intake consistently demonstrate that cats fed exclusively dry kibble consume roughly half the total fluid volume of cats fed wet food.',
          'Consider an average 10 lb cat needing approximately 200-240 mL of water daily:'
        ],
        tableData: {
          headers: ['Diet Type', 'Food Moisture', 'Moisture From Food', 'Voluntary Bowl Water', 'Total Daily Fluid'],
          rows: [
            ['Exclusively Canned / Pouch', '78% - 82%', '~180 mL', '~20 - 40 mL', '~210 mL (Optimal)'],
            ['Exclusively Dry Kibble', '8% - 10%', '~15 mL', '~80 - 100 mL', '~105 mL (Sub-clinical deficit)']
          ]
        }
      },
      {
        id: 'urinary-health',
        heading: 'Urinary Crystals & Bladder Inflammation',
        content: [
          'When total fluid intake drops, the feline kidney compensates by producing highly concentrated urine with a specific gravity often exceeding 1.050.',
          'In this concentrated, stagnant environment, mineral ions easily precipitate into microscopic crystals—primarily struvite (magnesium ammonium phosphate) and calcium oxalate. For male cats with their narrow urethral anatomy, crystal sludge can cause life-threatening urethral obstruction within 24 hours.'
        ],
        callout: {
          type: 'safety',
          title: 'Male Cat Emergency Red Flag',
          text: 'If a male cat strains in the litter box without producing urine, vocalizes while squatting, or repeatedly grooms his penis, this is an immediate veterinary emergency. A blocked urethra is fatal within 24–48 hours if left unrelieved.'
        }
      },
      {
        id: 'dental-kibble-myth',
        heading: 'The Great Dental Kibble Myth',
        content: [
          'A pervasive myth suggests that crunchy kibble cleans cat teeth like a toothbrush. In reality, standard dry kibble shatters immediately upon contact with the feline tooth tip, leaving starch residue along the gumline.',
          'Unless feeding a specifically engineered, veterinary-certified oral health kibble (VOHC certified) with a fibrous matrix that does not crumble, standard kibble provides virtually zero meaningful dental scraping action.'
        ]
      },
      {
        id: 'practical-transition',
        heading: 'How to Transition a Stubborn Kibble Addict',
        content: [
          'Because kibble manufacturers coat the exterior of pellets with animal digest and rendered fats, cats can become deeply imprinted on dry textures. Transition slowly over 2 to 4 weeks.',
          'Start by offering scheduled meals instead of leaving a full bowl of dry food out 24/7 (free-feeding). Once the cat is hungry at scheduled intervals, place a small spoonful of wet food next to the kibble, gradually increasing the ratio.'
        ]
      }
    ],
    references: [
      { citation: 'Buffington, C. A. Dry foods and the risk of disease in cats.', source: 'Canadian Veterinary Journal', year: 2008 },
      { citation: 'Zoran, D. L. The carnivore connection to nutrition in cats.', source: 'Journal of the American Veterinary Medical Association', year: 2002 },
      { citation: 'Markwell, P. J., et al. Clinical evaluation of commercially available diets in the management of idiopathic cystitis in cats.', source: 'Journal of the American Veterinary Medical Association', year: 1999 }
    ]
  },
  {
    id: 'decoding-feline-slow-blink-communication',
    slug: 'decoding-feline-slow-blink-communication',
    title: 'Decoding the Feline Slow Blink: How Cats Communicate Trust, Safety, and Affection',
    excerpt: 'Known in behavior science as the "cat smile," the slow blink is one of the most powerful mutual trust signals between humans and felines. Here is what peer-reviewed research reveals about how to speak cat.',
    featuredImage: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Closing the eyes in the presence of another animal is the ultimate biological statement that you represent zero threat.',
    categoryId: 'cat-behavior',
    subcategoryId: 'body-language',
    tags: ['Cat Behavior', 'Slow Blink', 'Bonding', 'Body Language', 'Feline Psychology'],
    authorId: 'marcus-reed',
    reviewerId: 'dr-sarah-miller',
    publishedAt: '2026-06-10',
    updatedAt: '2026-09-05',
    readingTimeMinutes: 5,
    featured: false,
    popular: true,
    keyTakeaways: [
      'A 2020 study from the University of Sussex proved that humans who initiate slow-blinking receive more approach behaviors and reciprocated blinks from both familiar and unfamiliar cats.',
      'In predatory species, direct unblinking eye contact indicates confrontation or hunting fixation. Breaking gaze with a slow blink signals peace.',
      'Combining the slow blink with an outstretched finger at cat-nose level allows the cat to initiate greeting on their own timeline.'
    ],
    tableOfContents: [
      { id: 'science-of-slow-blink', title: 'The Scientific Discovery' },
      { id: 'predator-prey-dichotomy', title: 'Predator vs. Prey Gaze Dynamics' },
      { id: 'how-to-slow-blink', title: 'Step-by-Step Technique to Try at Home' },
      { id: 'subtle-accompanying-signs', title: 'Subtle Accompanying Body Language' }
    ],
    sections: [
      {
        id: 'science-of-slow-blink',
        heading: 'The Scientific Discovery',
        content: [
          'For decades, cat guardians observed that squinting softly at their cats seemed to diffuse tension. In 2020, researchers at the University of Sussex published a landmark paper in Scientific Reports verifying this effect empirically.',
          'In controlled trials, cats were significantly more likely to slow-blink back at their human owners after the owner initiated a sequence of slow blinks. Furthermore, in an experiment with unfamiliar experimenters, cats were far more likely to approach a stranger who offered a slow blink compared to one who maintained a neutral, open-eyed expression.'
        ]
      },
      {
        id: 'predator-prey-dichotomy',
        heading: 'Predator vs. Prey Gaze Dynamics',
        content: [
          'To understand why this gesture is so potent, consider that cats occupy a rare ecological niche: they are both mesopredators and prey animals.',
          'When two cats are locked in territorial conflict, wide, dilated, unblinking eyes accompany intense muscular tension before an attack. By voluntarily closing their eyes in slow, deliberate half-second intervals, a cat signals: "I am confident you will not harm me, and I have no intention of attacking you."'
        ]
      },
      {
        id: 'how-to-slow-blink',
        heading: 'Step-by-Step Technique to Try at Home',
        content: [
          'To practice the slow blink with your cat or an anxious rescue animal, follow this structured routine:'
        ],
        bulletPoints: [
          'Position yourself at or near the cat’s eye level, but at a respectful distance (3 to 6 feet away).',
          'Avoid staring directly head-on; angle your shoulders slightly to the side to appear less imposing.',
          'Catch the cat’s gaze softly. As soon as your eyes meet, slowly close both eyes for 1 to 2 seconds, as if taking a gentle midday snooze.',
          'Slowly open your eyes halfway, keeping your eyelids heavy and relaxed, then look slightly to the side.',
          'Observe the cat’s response: a soft squint, a full slow blink, or a gentle purr indicates reciprocal comfort.'
        ]
      },
      {
        id: 'subtle-accompanying-signs',
        heading: 'Subtle Accompanying Body Language',
        content: [
          'A slow blink is most meaningful when supported by relaxed peripheral cues. Look for loose, upright ears angled slightly forward, a soft tail with a gentle hook at the tip, and rhythmic breathing.',
          'If the cat blinks but exhibits a rapidly flicking tail tip, flattened ear airplane posture, or tight skin twitches along the flank, they may be experiencing sensory overstimulation rather than contentment.'
        ]
      }
    ],
    references: [
      { citation: 'Humphrey, T., et al. The role of cat eye narrowing movements in cat–human communication.', source: 'Scientific Reports (Nature Publishing)', year: 2020 },
      { citation: 'Bradshaw, J. W. S. The Behaviour of the Domestic Cat.', source: 'CABI Publishing', year: 2012 }
    ]
  },
  {
    id: 'first-48-hours-new-kitten-guide',
    slug: 'first-48-hours-new-kitten-guide',
    title: 'The First 48 Hours With a New Kitten: Stress-Free Transition Protocol',
    excerpt: 'Bringing home an 8- to 12-week-old kitten is exciting, but sensory overload can overwhelm their developing nervous system. Follow this room-by-room decompression guide for seamless bonding.',
    featuredImage: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'A designated single sanctuary room allows a young kitten to master litter habits and build confidence before tackling the whole home.',
    categoryId: 'kitten-care',
    subcategoryId: 'kitten-socialization',
    tags: ['Kittens', 'New Cat', 'Sanctuary Room', 'Socialization', 'Litter Training'],
    authorId: 'marcus-reed',
    reviewerId: 'dr-sarah-miller',
    publishedAt: '2026-05-18',
    updatedAt: '2026-08-30',
    readingTimeMinutes: 6,
    featured: false,
    popular: false,
    keyTakeaways: [
      'Do not give a new kitten full run of your home on Day 1; set up a quiet sanctuary room first.',
      'Maintain the exact same food and litter substrate the breeder or foster used for at least 7 days.',
      'Place food, water, and the litter box in completely separate corners of the sanctuary room.',
      'Let the kitten emerge from their carrier voluntarily rather than pulling them out.'
    ],
    tableOfContents: [
      { id: 'the-sanctuary-room', title: 'Setting Up the Sanctuary Room' },
      { id: 'hour-one-arrival', title: 'Hour 1: The Arrival Protocol' },
      { id: 'first-night-comfort', title: 'Night 1: Preventing Separation Anxiety' },
      { id: 'feeding-and-litter', title: 'Feeding and Litter Consistency' }
    ],
    sections: [
      {
        id: 'the-sanctuary-room',
        heading: 'Setting Up the Sanctuary Room',
        content: [
          'The most common mistake new kitten parents make is releasing the youngster directly into an open living room or multi-level home. Vast spaces, novel acoustic reverberations, and towering human silhouettes can trigger intense flight responses in a 2-pound kitten.',
          'Instead, choose a quiet, low-traffic bedroom, home office, or bathroom as their sanctuary basecamp. Ensure all cords are wrapped in cable sleeves, eliminate toxic houseplants like lilies and pothos, and block crawl spaces under low dressers.'
        ]
      },
      {
        id: 'hour-one-arrival',
        heading: 'Hour 1: The Arrival Protocol',
        content: [
          'When you arrive home, place the carrier on the floor of the sanctuary room. Open the door, step back several feet, and sit down calmly on the floor.',
          'Resist the temptation to reach inside and pull the kitten out. Allow them to inspect the room on their own terms. Some curious kittens will saunter out in 30 seconds; more cautious kittens may observe quietly from the carrier for half an hour.'
        ]
      },
      {
        id: 'first-night-comfort',
        heading: 'Night 1: Preventing Separation Anxiety',
        content: [
          'This is often the first night of the kitten’s life away from the warmth of their mother and littermates. To soothe nocturnal crying, place a ticking clock or a heartbeat plush toy wrapped in a soft fleece blanket in their sleeping nook.',
          'Keep a dim nightlight illuminated so they can easily navigate between their bedding, water, and litter box in the dark.'
        ]
      },
      {
        id: 'feeding-and-litter',
        heading: 'Feeding and Litter Consistency',
        content: [
          'Stress naturally reduces digestive enzyme secretion in young kittens. Do not switch brands of food or litter during this vulnerable 48-hour transition.',
          'Feed high-protein, calorie-dense kitten formula 3 to 4 times daily, ensuring fresh water is always available in a shallow dish.'
        ]
      }
    ],
    references: [
      { citation: 'Overall, K. L. Manual of Clinical Behavioral Medicine for Dogs and Cats.', source: 'Elsevier Health Sciences', year: 2013 },
      { citation: 'AAFP Feline Behavior Guidelines', source: 'Journal of Feline Medicine and Surgery', year: 2021 }
    ]
  },
  {
    id: 'maine-coon-care-and-health-guide',
    slug: 'maine-coon-care-and-health-guide',
    title: 'Maine Coon Care Guide: Personality, Triple-Coat Grooming, and Genetic Health Screening',
    excerpt: 'The "gentle giants" of the cat world, Maine Coons combine playful dog-like loyalty with majestic tufted coats. Discover their specific nutritional requirements, grooming regimens, and HCM genetic screening needs.',
    featuredImage: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Maine Coons can take up to 4 to 5 years to reach their full skeletal size and muscular bulk.',
    categoryId: 'cat-breeds',
    subcategoryId: 'popular-breeds',
    tags: ['Maine Coon', 'Cat Breeds', 'HCM', 'Large Cats', 'Coat Care'],
    authorId: 'elena-vance',
    reviewerId: 'dr-sarah-miller',
    publishedAt: '2026-04-05',
    updatedAt: '2026-08-12',
    readingTimeMinutes: 7,
    featured: false,
    popular: true,
    keyTakeaways: [
      'Maine Coons are slow-maturing cats that require joint-supportive nutrition and controlled caloric intake for 4–5 years of physical growth.',
      'Hypertrophic Cardiomyopathy (HCM) is the breed’s most critical genetic threat; always verify parents have negative MYBPC3 DNA tests and clear echocardiograms.',
      'Their dense, water-resistant triple coat requires at least three thorough weekly combings to prevent painful armpit and groin matting.'
    ],
    tableOfContents: [
      { id: 'breed-temperament', title: 'Temperament: The Canine of the Feline World' },
      { id: 'physical-growth-scale', title: 'Slow Skeletal Maturation & Weight' },
      { id: 'health-screening-hcm', title: 'Genetic Health: HCM & Hip Dysplasia' },
      { id: 'coat-maintenance', title: 'Mastering the Triple Coat' }
    ],
    sections: [
      {
        id: 'breed-temperament',
        heading: 'Temperament: The Canine of the Feline World',
        content: [
          'Known affectionately as the gentle giants of the domestic cat world, Maine Coons are celebrated for their outgoing, chirpy vocalizations, fascination with water, and social disposition. Rather than hiding when visitors arrive, they often escort guests to the sofa with gentle trills.',
          'They thrive on interactive puzzle toys, harness walking, and fetch games, exhibiting high trainability through positive reinforcement.'
        ]
      },
      {
        id: 'physical-growth-scale',
        heading: 'Slow Skeletal Maturation & Weight',
        content: [
          'While standard domestic cats achieve full adult size between 12 and 18 months, Maine Coons continue building bone density and muscle mass until age 4 or 5.',
          'Males typically weigh between 15 and 25 pounds, while females range from 11 to 18 pounds. It is vital not to overfeed young Maine Coons in an effort to make them grow faster; excess weight places dangerous shearing stress on open growth plates.'
        ]
      },
      {
        id: 'health-screening-hcm',
        heading: 'Genetic Health: HCM & Hip Dysplasia',
        content: [
          'Hypertrophic Cardiomyopathy (HCM)—a thickening of the heart muscle walls—has a documented hereditary component in Maine Coons driven by the A31P mutation in the MYBPC3 gene.',
          'Ethical breeders test all breeding stock using DNA screening and conduct annual cardiac ultrasounds (echocardiograms) by a board-certified veterinary cardiologist.'
        ],
        callout: {
          type: 'safety',
          title: 'Ask Breeders for Echocardiogram Records',
          text: 'DNA testing only identifies the known MYBPC3 mutation. Because other genetic variants exist, an echocardiogram performed by a veterinary cardiologist is the gold standard for cardiac health clearance.'
        }
      },
      {
        id: 'coat-maintenance',
        heading: 'Mastering the Triple Coat',
        content: [
          'The Maine Coon coat consists of a silky outer guard layer, a buoyant middle coat, and a soft, insulating undercoat. Focus brushing routines on friction points: behind the ears, the armpits, the belly ruff, and the "britches" on the hindquarters.',
          'Use a stainless steel wide/narrow tooth greyhound comb first to reach down to the skin level, followed by an undercoat rake during spring seasonal shedding.'
        ]
      }
    ],
    references: [
      { citation: 'Meurs, K. M., et al. A cardiac myosin binding protein C mutation in the Maine Coon cat with familial hypertrophic cardiomyopathy.', source: 'Human Molecular Genetics', year: 2005 },
      { citation: 'The Cat Fanciers’ Association (CFA) Maine Coon Breed Standard', source: 'CFA Breed Council', year: 2024 }
    ]
  },
  {
    id: 'feline-idiopathic-cystitis-stress-connection',
    slug: 'feline-idiopathic-cystitis-stress-connection',
    title: 'Feline Idiopathic Cystitis (FIC): Environmental Stress and Bladder Flare-Ups',
    excerpt: 'Up to 60% of cats presenting with lower urinary tract symptoms have FIC—a complex neuroendocrine disorder triggered by environmental friction rather than bacterial infection. Here is the clinical treatment blueprint.',
    featuredImage: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'The brain-bladder connection in cats is exceptionally sensitive to subtle changes in household routine.',
    categoryId: 'cat-health',
    subcategoryId: 'digestive-urinary',
    tags: ['FIC', 'Urinary Health', 'Bladder', 'Stress', 'Litter Box'],
    authorId: 'elena-vance',
    reviewerId: 'dr-sarah-miller',
    publishedAt: '2026-03-14',
    updatedAt: '2026-07-29',
    readingTimeMinutes: 7,
    featured: false,
    popular: false,
    keyTakeaways: [
      'FIC is almost never a bacterial infection in cats under 10 years old; antibiotics are routinely overprescribed without clinical merit.',
      'The bladder lining loses its protective glycosaminoglycan (GAG) layer during stress, allowing acidic urine to burn raw nerves.',
      'Environmental enrichment (MEMO - Multimodal Environmental Modification) has an 80%+ success rate in reducing flare-up frequency.'
    ],
    tableOfContents: [
      { id: 'the-fic-mystery', title: 'Why Sterile Bladders Become Inflamed' },
      { id: 'bacterial-misdiagnosis', title: 'The Antibiotic Misdiagnosis Trap' },
      { id: 'memo-protocol', title: 'The MEMO Environmental Protocol' },
      { id: 'diet-and-pain-relief', title: 'Therapeutic Diets & Acute Pain Relief' }
    ],
    sections: [
      {
        id: 'the-fic-mystery',
        heading: 'Why Sterile Bladders Become Inflamed',
        content: [
          'Caregivers often assume painful urination means a bacterial UTI. Yet in cats under 10 years of age, bacterial infections account for less than 2% of urinary cases.',
          'Instead, Feline Idiopathic Cystitis represents a systemic malfunction of the neuro-endocrine sympathetic nervous system. In affected cats, stress triggers a flood of neurotransmitters that strip the glycosaminoglycan (GAG) mucus barrier lining the bladder wall, leaving exposed submucosal nerves to be burned by acidic urine salts.'
        ]
      },
      {
        id: 'bacterial-misdiagnosis',
        heading: 'The Antibiotic Misdiagnosis Trap',
        content: [
          'Because an acute FIC episode naturally subsides within 4 to 7 days, many veterinarians who dispense antibiotics see clinical improvement and assume the drug worked. In reality, the episode resolved on its own timeline while unnecessarily disrupting the cat’s gut microbiome.',
          'A sterile urine culture is essential before administering antimicrobial therapy.'
        ]
      },
      {
        id: 'memo-protocol',
        heading: 'The MEMO Environmental Protocol',
        content: [
          'Dr. Tony Buffington’s Multimodal Environmental Modification (MEMO) studies demonstrated that optimizing 5 core environmental needs halts chronic FIC in over 80% of affected cats:'
        ],
        bulletPoints: [
          'Litter Box Rule of N+1: Provide one box per cat plus one extra, located in separate quiet zones with unscented clumping clay.',
          'Vertical territory: Wall perches, cat trees, and window lookouts that allow safe visual elevation.',
          'Predatory play: 10 to 15 minutes of interactive wand play twice daily ending in a protein meal.',
          'Resource distribution: Separate food, water, and scratching posts so cats never have to compete or cross hostile territory.'
        ]
      },
      {
        id: 'diet-and-pain-relief',
        heading: 'Therapeutic Diets & Acute Pain Relief',
        content: [
          'Acute treatment prioritizes multimodal analgesia (such as buprenorphine prescribed by your veterinarian) and increasing bladder hydration through high-moisture canned diets with added glycosaminoglycan precursors.',
          'Pheromone diffusers (such as synthetic feline facial pheromones) placed in high-traffic resting rooms provide additional ambient comfort during stressful life events like moving or holiday guests.'
        ]
      }
    ],
    references: [
      { citation: 'Buffington, C. A., et al. Clinical evaluation of multimodal environmental modification in the management of cats with idiopathic cystitis.', source: 'Journal of Feline Medicine and Surgery', year: 2006 },
      { citation: 'Hostutler, R. A., et al. Recent concepts in feline lower urinary tract disease.', source: 'Veterinary Clinics of North America: Small Animal Practice', year: 2005 }
    ]
  },
  {
    id: 'olivers-rescue-journey-from-feral-to-purr',
    slug: 'olivers-rescue-journey-from-feral-to-purr',
    title: 'From Feral to Purr Machine: Oliver’s Journey to Learning Trust and Human Touch',
    excerpt: 'Trapped behind an abandoned auto repair garage with severe frostbite and a broken canine, Oliver hissed at every shadow. Here is how patient desensitization and quiet companionship helped a feral survivor blossom.',
    featuredImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'After three months of patient room-sharing, Oliver rested his chin on human hands for the first time.',
    categoryId: 'cat-stories',
    subcategoryId: 'rescue-stories',
    tags: ['Cat Stories', 'Rescue', 'Feral Rehabilitation', 'Adoption', 'Heartwarming'],
    authorId: 'marcus-reed',
    publishedAt: '2026-02-19',
    updatedAt: '2026-06-15',
    readingTimeMinutes: 5,
    featured: false,
    popular: false,
    keyTakeaways: [
      'True feral cats require months of quiet non-threatening presence rather than forced affection.',
      'High-value protein treats delivered via long wooden spoons bridge the gap between human hands and safe rewards.',
      'Every cat sets their own boundary pace; respecting their consent is the foundation of genuine trust.'
    ],
    tableOfContents: [
      { id: 'the-trap-day', title: 'The Coldest Night in February' },
      { id: 'the-art-of-reading-books', title: 'The Art of Reading Out Loud' },
      { id: 'the-spoon-breakthrough', title: 'The Long-Handled Spoon Breakthrough' },
      { id: 'today-oliver', title: 'Oliver Today: The Couch Guardian' }
    ],
    sections: [
      {
        id: 'the-trap-day',
        heading: 'The Coldest Night in February',
        content: [
          'Oliver arrived at the shelter inside a heavy metal humane trap, his amber eyes dilated wide with panic. At approximately three years old, his notched left ear, scar-laced nose, and broken canine told the story of endless territorial alley clashes.',
          'Most adopters passed by his intake kennel. When approached, Oliver retreated into the furthest dark corner, hissing with low, vibrating warning growls that warned humans to keep away.'
        ]
      },
      {
        id: 'the-art-of-reading-books',
        heading: 'The Art of Reading Out Loud',
        content: [
          'Rather than attempting to pet him, his foster parent set up a quiet spare room. The protocol began with passive cohabitation.',
          'Every evening after dinner, the foster parent sat on the carpet four feet from Oliver’s covered cardboard shelter box and read historical fiction aloud in a soft, monotonous cadence for 45 minutes without making direct eye contact.'
        ]
      },
      {
        id: 'the-spoon-breakthrough',
        heading: 'The Long-Handled Spoon Breakthrough',
        content: [
          'By week three, Oliver stopped growling when footsteps approached. The turning point came with chicken liver puree offered on the tip of a long wooden kitchen spoon.',
          'For days, he would only stretch his neck out to lick the spoon when his foster parent looked at the opposite wall. Gradually, the spoon shortened until his whiskers brushed against bare fingers.'
        ]
      },
      {
        id: 'today-oliver',
        heading: 'Oliver Today: The Couch Guardian',
        content: [
          'Today, Oliver is a relaxed 13-pound purring fixture of the household. While he still dislikes sudden loud clatter, he sleeps tucked into the bend of his owner’s knees every night.',
          'His story proves that patience, environmental safety, and unconditional respect for feline boundaries can transform the most fearful survivor into a devoted family companion.'
        ]
      }
    ],
    references: [
      { citation: 'ASPCA Feral and Community Cat Behavior Resources', source: 'American Society for the Prevention of Cruelty to Animals', year: 2023 }
    ]
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug);
}

export function getArticlesByCategory(categoryId: string): Article[] {
  return ARTICLES.filter(a => a.categoryId === categoryId);
}

export function getFeaturedArticles(): Article[] {
  return ARTICLES.filter(a => a.featured);
}

export function getPopularArticles(): Article[] {
  return ARTICLES.filter(a => a.popular);
}
