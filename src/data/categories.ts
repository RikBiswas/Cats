import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-health',
    slug: 'cat-health',
    name: 'Cat Health',
    shortDescription: 'Veterinary-reviewed medical guides, symptom identifiers, and preventive wellness advice.',
    fullDescription: 'Comprehensive, evidence-based feline healthcare articles covering chronic conditions, parasites, dental care, senior wellness, and when to seek urgent emergency care.',
    iconName: 'HeartPulse',
    articleCount: 24,
    subcategories: [
      { id: 'preventive-care', name: 'Preventive Care', slug: 'preventive-care', description: 'Vaccines, regular check-ups, and flea prevention.' },
      { id: 'chronic-conditions', name: 'Chronic Conditions', slug: 'chronic-conditions', description: 'Kidney disease, diabetes, hyperthyroidism, and arthritis.' },
      { id: 'digestive-urinary', name: 'Digestive & Urinary', slug: 'digestive-urinary', description: 'FIC, FLUTD, hairballs, and sensitive stomach management.' },
      { id: 'senior-care', name: 'Senior Cats', slug: 'senior-care', description: 'Mobility support, cognitive dysfunction, and quality of life.' }
    ]
  },
  {
    id: 'cat-nutrition',
    slug: 'cat-nutrition',
    name: 'Cat Nutrition',
    shortDescription: 'Biologically appropriate feeding, wet vs. dry food analyses, and nutrient requirements.',
    fullDescription: 'Everything you need to feed your obligate carnivore right. Understand macro-nutrients, hydration needs, raw vs. cooked diets, and therapeutic prescription foods.',
    iconName: 'Salad',
    articleCount: 19,
    subcategories: [
      { id: 'diet-basics', name: 'Diet Basics', slug: 'diet-basics', description: 'Carnivore nutritional physiology and macronutrient ratios.' },
      { id: 'wet-vs-dry', name: 'Wet vs. Dry', slug: 'wet-vs-dry', description: 'Moisture content, urinary tract health, and carbohydrate loads.' },
      { id: 'specialty-diets', name: 'Specialty Diets', slug: 'specialty-diets', description: 'Renal, diabetic, hypoallergenic, and weight-management recipes.' }
    ]
  },
  {
    id: 'cat-behavior',
    slug: 'cat-behavior',
    name: 'Cat Behavior',
    shortDescription: 'Decode feline body language, solve litter box aversion, and enrich indoor environments.',
    fullDescription: 'Understand why cats do what they do. Positive reinforcement training, multi-cat household harmony, anxiety management, and environmental enrichment.',
    iconName: 'Brain',
    articleCount: 16,
    subcategories: [
      { id: 'body-language', name: 'Body Language', slug: 'body-language', description: 'Tail positions, vocalizations, purring, and ear postures.' },
      { id: 'behavioral-issues', name: 'Behavior Issues', slug: 'behavioral-issues', description: 'Litter box problems, aggression, scratching, and night vocalization.' },
      { id: 'enrichment', name: 'Enrichment & Play', slug: 'enrichment', description: 'Interactive toys, vertical territory, and scent games.' }
    ]
  },
  {
    id: 'cat-breeds',
    slug: 'cat-breeds',
    name: 'Cat Breeds',
    shortDescription: 'In-depth breed profiles, genetics, grooming needs, and personality traits.',
    fullDescription: 'From affectionate Ragdolls and vocal Siamese to hypoallergenic Siberian breeds and rugged Maine Coons, explore traits, health predispositions, and care needs.',
    iconName: 'Sparkles',
    articleCount: 18,
    subcategories: [
      { id: 'popular-breeds', name: 'Popular Breeds', slug: 'popular-breeds', description: 'Domestic Shorthairs, Maine Coons, Ragdolls, and British Shorthairs.' },
      { id: 'hypoallergenic', name: 'Hypoallergenic Breeds', slug: 'hypoallergenic', description: 'Low Fel d 1 breeds for cat allergy sufferers.' },
      { id: 'rare-breeds', name: 'Rare & Exotic', slug: 'rare-breeds', description: 'Sphynx, Bengal, Devon Rex, and Norwegian Forest cats.' }
    ]
  },
  {
    id: 'kitten-care',
    slug: 'kitten-care',
    name: 'Kitten Care',
    shortDescription: 'The first year milestone guide: weaning, litter training, socialization, and vaccinations.',
    fullDescription: 'Step-by-step guidance for raising healthy, confident kittens. Milestones from neonate nursing through juvenile teething and adolescence.',
    iconName: 'Baby',
    articleCount: 12,
    subcategories: [
      { id: 'kitten-milestones', name: 'Growth Milestones', slug: 'kitten-milestones', description: 'Weight gain curves, eyes opening, and milestone tracking.' },
      { id: 'kitten-nutrition', name: 'Kitten Feeding', slug: 'kitten-nutrition', description: 'High-calorie growth formulas, feeding frequencies, and weaning.' },
      { id: 'kitten-socialization', name: 'Socialization', slug: 'kitten-socialization', description: 'Carrier training, nail clipping desensitization, and positive handling.' }
    ]
  },
  {
    id: 'grooming-hygiene',
    slug: 'grooming-hygiene',
    name: 'Grooming & Hygiene',
    shortDescription: 'Coat maintenance, nail trimming safety, ear cleaning, and dental hygiene.',
    fullDescription: 'Practical grooming techniques to prevent painful matting, reduce hairballs, trim claws without fear, and maintain clean ears and teeth.',
    iconName: 'Scissors',
    articleCount: 10,
    subcategories: [
      { id: 'coat-care', name: 'Coat Care', slug: 'coat-care', description: 'Brushing longhair coats, deshedding tools, and mat removal.' },
      { id: 'claws-teeth', name: 'Claws & Dental', slug: 'claws-teeth', description: 'Safe nail clipping and feline toothbrushing protocols.' }
    ]
  },
  {
    id: 'product-reviews',
    slug: 'product-reviews',
    name: 'Product Reviews',
    shortDescription: 'Unbiased, hands-on tests of foods, litters, automated boxes, cat trees, and toys.',
    fullDescription: 'Strict testing standards evaluating species appropriateness, ingredient quality, durability, and value for money. Zero paid placement.',
    iconName: 'CheckCircle2',
    articleCount: 22,
    subcategories: [
      { id: 'cat-food-reviews', name: 'Food Reviews', slug: 'cat-food-reviews', description: 'Canned, freeze-dried, fresh-cooked, and raw food lab analyses.' },
      { id: 'litter-reviews', name: 'Litter & Boxes', slug: 'litter-reviews', description: 'Odor control, low dust, clumping ability, and self-cleaning units.' },
      { id: 'gear-furniture', name: 'Cat Tech & Gear', slug: 'gear-furniture', description: 'Fountains, microchip feeders, carriers, and sturdy cat trees.' }
    ]
  },
  {
    id: 'cat-stories',
    slug: 'cat-stories',
    name: 'Cat Stories & Life',
    shortDescription: 'Inspiring adoption journeys, feline history, community spotlights, and heartfelt memoirs.',
    fullDescription: 'Celebrating the unique bond between humans and felines with heartwarming rescue transformations, foster memoirs, and cultural feline history.',
    iconName: 'BookOpen',
    articleCount: 14,
    subcategories: [
      { id: 'rescue-stories', name: 'Rescue Journeys', slug: 'rescue-stories', description: 'Overcoming adversity and finding forever homes.' },
      { id: 'cat-culture', name: 'Feline History', slug: 'cat-culture', description: 'Cats in art, lore, and their journey from desert predator to domestic companion.' }
    ]
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug);
}
