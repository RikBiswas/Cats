import { ToolMeta } from '../types';

export const TOOLS_LIST: ToolMeta[] = [
  {
    id: 'age-calculator',
    slug: 'cat-age-calculator',
    title: 'Cat Age Calculator',
    tagline: 'Translate feline calendar years into human age equivalents using clinical veterinary curves.',
    description: 'Calculate your cat’s approximate human-age equivalent based on the American Association of Feline Practitioners (AAFP) life stage guidelines, from kittenhood to geriatric years.',
    icon: 'Calculator',
    badgeText: 'Veterinary Validated'
  },
  {
    id: 'name-finder',
    slug: 'cat-name-finder',
    title: 'Cat Name Finder',
    tagline: 'Discover the perfect name filtered by style, coat color, origin, and feline personality.',
    description: 'Explore over 100 curated feline names with etymological origins, meanings, popularity ranks, and coat compatibility filters. Bookmark your favorites with one click.',
    icon: 'Sparkles',
    badgeText: '100+ Curated Names'
  },
  {
    id: 'calorie-calculator',
    slug: 'cat-calorie-calculator',
    title: 'Daily Calorie & Portion Calculator',
    tagline: 'Calculate exact daily kcal needs and wet/dry food portion splits.',
    description: 'Based on veterinary Resting Energy Requirement (RER = 70 × W^0.75) and Maintenance Energy Requirement (MER) multipliers for neutered, active, senior, or weight loss diets.',
    icon: 'Scale',
    badgeText: 'AAFCO Formula'
  },
  {
    id: 'body-condition-score',
    slug: 'cat-body-condition-score',
    title: 'Body Condition Score (BCS) Guide',
    tagline: 'Assess whether your cat is underweight, ideal, or overweight using the WSAVA 9-point scale.',
    description: 'Learn the tactile rib palpation, waist indentation, and abdominal tuck criteria veterinary clinicians use to evaluate true body composition beyond raw scale weight.',
    icon: 'Activity',
    badgeText: 'WSAVA Standard'
  }
];

export interface AgeCalculationResult {
  humanAge: number;
  lifeStage: 'Kitten' | 'Junior' | 'Prime' | 'Mature' | 'Senior' | 'Geriatric';
  stageDescription: string;
  milestones: string[];
  wellnessRecommendations: string[];
}

export function calculateCatHumanAge(years: number, months: number): AgeCalculationResult {
  const totalMonths = Math.max(0, years * 12 + months);

  let humanAge = 0;

  if (totalMonths <= 1) {
    humanAge = 1;
  } else if (totalMonths <= 3) {
    humanAge = 4;
  } else if (totalMonths <= 6) {
    humanAge = 10;
  } else if (totalMonths <= 12) {
    // 1st year = 15 human years
    humanAge = Math.round(10 + ((totalMonths - 6) / 6) * 5);
  } else if (totalMonths <= 24) {
    // 2nd year = reaches 24 human years (+9 across year 2)
    humanAge = Math.round(15 + ((totalMonths - 12) / 12) * 9);
  } else {
    // Each subsequent year adds ~4 human years
    const fullYearsBeyondTwo = (totalMonths - 24) / 12;
    humanAge = Math.round(24 + fullYearsBeyondTwo * 4);
  }

  let lifeStage: AgeCalculationResult['lifeStage'] = 'Prime';
  let stageDescription = '';
  let milestones: string[] = [];
  let wellnessRecommendations: string[] = [];

  if (totalMonths <= 6) {
    lifeStage = 'Kitten';
    stageDescription = 'Rapid physical and cognitive growth period. Socialization window closes around 9 to 14 weeks.';
    milestones = [
      'Deciduous (baby) teeth erupt between 3-6 weeks; adult teeth arrive around 4-6 months.',
      'Core FVRCP and Rabies vaccine series scheduled every 3-4 weeks until 16-20 weeks.',
      'High caloric needs (approx 2.5x adult maintenance).'
    ];
    wellnessRecommendations = [
      'Spay or neuter consultation (traditionally at 4-5 months of age).',
      'Desensitize to nail trimming, gentle ear handling, and carrier exploration.',
      'Feed formulated growth/kitten food rich in DHA fatty acids for brain development.'
    ];
  } else if (totalMonths <= 24) {
    lifeStage = 'Junior';
    stageDescription = 'Adolescent growth phase. Feline achieves full reproductive maturity and begins establishing adult temperament.';
    milestones = [
      'Skeletal growth plates close; growth rate begins to plateau.',
      'Curiosity and energy peaks; predatory play drives are strongest.'
    ];
    wellnessRecommendations = [
      'Transition from high-calorie kitten food to adult maintenance food around 10-12 months.',
      'Annual veterinary wellness exam with core vaccine boosters.',
      'Maintain active daily wand play to channel teenage high-energy bursts.'
    ];
  } else if (totalMonths <= 72) {
    lifeStage = 'Prime';
    stageDescription = 'Peak physical health, prime muscular condition, and stable adult behavioral patterns.';
    milestones = [
      'Metabolism settles; highest risk period for gradual creeping weight gain after spay/neuter.',
      'Established social bonds in multi-cat households.'
    ];
    wellnessRecommendations = [
      'Monitor Body Condition Score (BCS) monthly; weigh on digital baby scale.',
      'Maintain routine dental examinations (periodontal disease affects over 70% of cats by age 3).',
      'Ensure high-moisture diet to protect kidney and lower urinary tract health.'
    ];
  } else if (totalMonths <= 120) {
    lifeStage = 'Mature';
    stageDescription = 'Equivalent to middle age in humans. Cellular repair slows and metabolic adaptations emerge.';
    milestones = [
      'Mild reduction in spontaneous running; prefers warm sunbeams and elevated resting perches.',
      'Early stages of joint stiffness or reduced leaping height may emerge.'
    ];
    wellnessRecommendations = [
      'Begin bi-annual veterinary wellness checks or baseline bloodwork (CBC, chem panel, urinalysis).',
      'Add glucosamine, chondroitin, or omega-3 fatty acids for joint cartilage support.',
      'Check blood pressure annually to catch early asymptomatic systemic hypertension.'
    ];
  } else if (totalMonths <= 168) {
    lifeStage = 'Senior';
    stageDescription = 'Senior years requiring dedicated preventive screening for kidney, thyroid, cardiac, and dental health.';
    milestones = [
      'Higher susceptibility to Chronic Kidney Disease (CKD), Hyperthyroidism, and Osteoarthritis.',
      'Digestive nutrient assimilation drops (seniors often need more easily digestible protein).'
    ];
    wellnessRecommendations = [
      'Bi-annual veterinary checkups with SDMA kidney screening and total T4 thyroid testing.',
      'Provide low-entry litter boxes and carpet ramps to favorite sleeping sofas.',
      'Warm wet food slightly to enhance aroma for cats with waning olfactory sensitivity.'
    ];
  } else {
    lifeStage = 'Geriatric';
    stageDescription = 'Super senior years celebrating remarkable longevity. Comfort, pain management, and sensory support are paramount.';
    milestones = [
      'Cognitive dysfunction syndrome (Feline CDS) may present as nighttime disorientation or vocalization.',
      'Significant reduction in self-grooming requires daily gentle brushing and eye wipe downs.'
    ];
    wellnessRecommendations = [
      'Collaborate closely with your veterinarian on pain management protocols (e.g. Solensia / gabapentin).',
      'Keep food, water, and warm padded bedding on a single floor to avoid painful stair climbing.',
      'Maintain predictable household routines and avoid abrupt furniture rearrangements.'
    ];
  }

  return {
    humanAge,
    lifeStage,
    stageDescription,
    milestones,
    wellnessRecommendations
  };
}

export interface CalorieCalculationResult {
  rer: number;
  mer: number;
  multiplierName: string;
  wetCansPerDay: number;
  dryCupsPerDay: number;
  wetCalories: number;
  dryCalories: number;
}

export function calculateCatCalories(
  weightValue: number,
  unit: 'lbs' | 'kg',
  activityFactor: string,
  wetRatioPercent: number, // 0 to 100
  canKcal: number = 82,
  cupKcal: number = 385
): CalorieCalculationResult {
  const weightKg = unit === 'lbs' ? weightValue * 0.453592 : weightValue;
  const safeKg = Math.max(0.5, Math.min(25, weightKg));

  // RER = 70 * (weight in kg ^ 0.75)
  const rer = Math.round(70 * Math.pow(safeKg, 0.75));

  let multiplier = 1.2;
  let multiplierName = 'Neutered Adult Maintenance';

  switch (activityFactor) {
    case 'intact':
      multiplier = 1.4;
      multiplierName = 'Intact Adult Cat';
      break;
    case 'weight-loss':
      multiplier = 0.8;
      multiplierName = 'Weight Loss Protocol';
      break;
    case 'senior':
      multiplier = 1.1;
      multiplierName = 'Senior / Geriatric Cat';
      break;
    case 'kitten-young':
      multiplier = 2.5;
      multiplierName = 'Kitten (< 4 Months)';
      break;
    case 'kitten-older':
      multiplier = 2.0;
      multiplierName = 'Kitten (4–12 Months)';
      break;
    default:
      multiplier = 1.2;
      multiplierName = 'Neutered Adult Maintenance';
  }

  const mer = Math.round(rer * multiplier);

  const wetCalories = Math.round(mer * (wetRatioPercent / 100));
  const dryCalories = mer - wetCalories;

  const wetCansPerDay = parseFloat((wetCalories / (canKcal || 82)).toFixed(2));
  const dryCupsPerDay = parseFloat((dryCalories / (cupKcal || 385)).toFixed(2));

  return {
    rer,
    mer,
    multiplierName,
    wetCansPerDay,
    dryCupsPerDay,
    wetCalories,
    dryCalories
  };
}
