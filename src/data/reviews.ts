import { ProductReview } from '../types';

export const REVIEWS: ProductReview[] = [
  {
    id: 'ziwi-peak-wet-canned-cat-food-review',
    slug: 'ziwi-peak-wet-canned-cat-food-review',
    title: 'Ziwi Peak Canned Cat Food Review: High-Meat Ethical Recipe Analyzed',
    productName: 'Ziwi Peak Daily Cat Wet Canned Food (Lamb & Mackerel)',
    brand: 'Ziwi Peak',
    categoryId: 'product-reviews',
    featuredImage: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1000&q=80',
    overallRating: 9.4,
    verdict: 'Ziwi Peak represents the gold standard in commercial canned feline nutrition: 92% real meat, organs, and green-lipped mussel with zero gums, carrageenan, or excessive grain fillers. The price tag is high, but the ingredient integrity is unmatched.',
    scores: {
      speciesAppropriateness: 9.8,
      ingredientQuality: 9.6,
      varietyAndTaste: 9.2,
      priceValue: 8.4,
      recallSafety: 10.0
    },
    pros: [
      '92% meat, organs, bone, and New Zealand green-lipped mussels',
      'Completely free of artificial gums (agar-agar, guar, carrageenan) and TSPP',
      'Ultra-low carbohydrate profile (<2.5% dry matter basis)',
      'Ethically sourced free-range meats and wild-caught sustainable fisheries',
      'Clean track record with zero FDA pet food recalls'
    ],
    cons: [
      'Substantially higher price per ounce than standard grocery brands',
      'Dense loaf texture can be too firm for some elderly cats without added water',
      'High caloric density requires careful portion measuring'
    ],
    specifications: {
      'Primary Protein': 'New Zealand Lamb & Whole Blue Mackerel',
      'Texture': 'Dense Pate / Homogenous Loaf',
      'Crude Protein (min)': '10.5% (approx 48% Dry Matter)',
      'Crude Fat (min)': '5.5% (approx 25% Dry Matter)',
      'Estimated Carbohydrates': '< 2.5% Dry Matter Basis',
      'Moisture Content': '78.0%',
      'Caloric Density': '170 kcal per 170g (6 oz) can',
      'Country of Origin': 'New Zealand'
    },
    bestFor: 'Cats with digestive sensitivities, diabetic cats needing strict low-carb protocols, and owners prioritizing premium human-grade ethically raised proteins.',
    whoShouldAvoid: 'Budget-restricted multi-cat households and cats requiring strict medically prescribed phosphorus restriction for late-stage IRIS 3-4 kidney disease.',
    keySummaryPoints: [
      'Outstanding high-protein, animal-based biological appropriateness.',
      'Contains 3% New Zealand green-lipped mussels, a natural source of chondroitin and glucosamine for joint health.',
      'Zero starch binders like tapioca, potatoes, or wheat gluten.'
    ],
    comparisonProducts: [
      {
        name: 'Ziwi Peak Wet Lamb',
        rating: 9.4,
        badge: 'Top Overall Pick',
        priceTier: '$$$',
        keyAdvantage: '92% pure organ & meat inclusion with zero chemical gum binders.',
        image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Smalls Fresh Human-Grade',
        rating: 9.2,
        badge: 'Best Fresh Subscription',
        priceTier: '$$$',
        keyAdvantage: 'Gently steamed human-grade USDA chicken breast & organs.',
        image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Tiki Cat Luau Wet Food',
        rating: 9.0,
        badge: 'Best Shredded Meat',
        priceTier: '$$',
        keyAdvantage: 'Flaked real chicken and seafood in high-moisture broth.',
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Fancy Feast Classic Pate',
        rating: 7.8,
        badge: 'Best Budget Classic',
        priceTier: '$',
        keyAdvantage: 'Affordable, low-carb accessible option available everywhere.',
        image: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=400&q=80'
      }
    ],
    authorId: 'clara-dupont',
    reviewerId: 'dr-arun-patel',
    publishedAt: '2026-06-25',
    updatedAt: '2026-09-12',
    affiliateDisclaimer: 'WhiskerWise maintains strict editorial independence. We independently purchase and evaluate all products. When you buy through our links, we may earn an affiliate commission at zero additional cost to you.'
  },
  {
    id: 'litter-robot-4-automated-box-review',
    slug: 'litter-robot-4-automated-box-review',
    title: 'Litter-Robot 4 In-Depth Review: Smart Self-Cleaning Box Tested Over 6 Months',
    productName: 'Whisker Litter-Robot 4 Automatic Self-Cleaning Litter Box',
    brand: 'Whisker',
    categoryId: 'product-reviews',
    featuredImage: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=1000&q=80',
    overallRating: 9.1,
    verdict: 'The Litter-Robot 4 is an engineering triumph for multi-cat households. It dramatically reduces odor, cuts weekly litter consumption by up to 40%, and tracks your cat’s weight and bathroom habits with quiet, reliable motor mechanics.',
    scores: {
      speciesAppropriateness: 8.8,
      ingredientQuality: 9.5,
      varietyAndTaste: 9.0,
      priceValue: 8.2,
      recallSafety: 9.8
    },
    pros: [
      'Whisper-quiet rotating cycle that does not startle timid cats',
      'Significantly larger globe opening and lower step entry than the LR3',
      'Integrated SmartScale weighs each cat and logs usage frequency in the app',
      'Exceptional carbon-filtered drawer odor containment',
      'Uses standard grocery trash bags or compostable liners'
    ],
    cons: [
      'High initial investment ($699 MSRP)',
      'Substantial physical footprint requires dedicated floor space',
      'Sensor calibration requires periodic wiping from dust buildup'
    ],
    specifications: {
      'Dimensions': '29.5" H x 22" W x 27" D',
      'Entryway': '15.75" diameter wide bezel',
      'Weight Capacity': 'Cats 3 lbs and above',
      'Connectivity': 'WiFi 2.4 GHz + Bluetooth',
      'Sensors': 'SafeCat laser beam + 4 weight scale sensors',
      'Warranty': '1-Year standard (extendable to 3 years)'
    },
    bestFor: 'Busy pet parents, multi-cat owners tired of twice-daily scooping, and caretakers monitoring weight trends for chronic medical conditions.',
    whoShouldAvoid: 'Kittens under 3 pounds (who cannot trigger the safety sensors) and small apartments lacking 2.5 feet of clear wall depth.',
    keySummaryPoints: [
      'Automatic cycle separates clean granules from clumps in under 2 minutes.',
      'App notifications alert you precisely when the waste drawer is full.',
      'Reduces ambient ammonia smells in living areas significantly.'
    ],
    comparisonProducts: [
      {
        name: 'Litter-Robot 4',
        rating: 9.1,
        badge: 'Top Automatic Box',
        priceTier: '$$$',
        keyAdvantage: 'Superior safety sensors, whisper quiet, accurate weight tracking.',
        image: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'PetSafe ScoopFree Crystal',
        rating: 7.9,
        badge: 'Rake Style',
        priceTier: '$$',
        keyAdvantage: 'Lower initial cost, uses pre-filled crystal litter trays.',
        image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'iPrimio Stainless Steel Box',
        rating: 9.3,
        badge: 'Best Manual Non-Stick',
        priceTier: '$',
        keyAdvantage: 'Zero rust, zero plastic odor absorption, easiest manual scoop.',
        image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=400&q=80'
      }
    ],
    authorId: 'clara-dupont',
    reviewerId: 'dr-sarah-miller',
    publishedAt: '2026-05-10',
    updatedAt: '2026-08-20',
    affiliateDisclaimer: 'WhiskerWise tests every unit in real home environments. We may earn a commission from purchases made through our vetted partner links.'
  },
  {
    id: 'dr-elseys-ultra-unscented-clumping-clay-litter-review',
    slug: 'dr-elseys-ultra-unscented-clumping-clay-litter-review',
    title: 'Dr. Elsey’s Ultra Clumping Litter Review: Dust, Odor & Track Test Results',
    productName: 'Dr. Elsey’s Precious Cat Ultra Unscented Clumping Clay Litter',
    brand: 'Dr. Elsey’s',
    categoryId: 'product-reviews',
    featuredImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1000&q=80',
    overallRating: 9.3,
    verdict: 'Developed by a feline-exclusive veterinarian, Dr. Elsey’s Ultra sets the gold standard for natural clay clumping. It forms rock-hard clumps that never crumble during sifting, emits 99.9% zero airborne dust, and is completely free of synthetic perfumes.',
    scores: {
      speciesAppropriateness: 9.7,
      ingredientQuality: 9.4,
      varietyAndTaste: 9.0,
      priceValue: 9.5,
      recallSafety: 10.0
    },
    pros: [
      'Completely hypoallergenic and fragrance-free (essential for feline respiratory health)',
      'Heavy-granule sodium bentonite prevents litter from sticking to paws and tracking',
      'Hard, non-crumbly clumps that make scooping seamless without leaving residue',
      'Naturally prevents moisture from reaching the bottom of the tray',
      'Affordable 40 lb bag size offers outstanding cost per pound'
    ],
    cons: [
      'Heavy 40 lb bag can be cumbersome to carry and pour',
      'Non-flushable (like all sodium bentonite clays, do not flush into plumbing)'
    ],
    specifications: {
      'Material': '100% All-Natural Sodium Bentonite Clay',
      'Scent': 'Unscented / Zero Artificial Fragrances',
      'Dust Rating': '99.9% Dust-Free (Independently Confirmed)',
      'Clump Speed': 'Rapid Hard Clump (<3 minutes)',
      'Bag Sizes': '18 lb, 40 lb'
    },
    bestFor: 'Cats with asthma, cats with sensitive paws, and households wanting rock-solid odor containment without artificial lavender or baby powder perfumes.',
    whoShouldAvoid: 'Pet parents looking for lightweight plant-based flushable litters or those unable to lift heavy 40 lb boxes.',
    keySummaryPoints: [
      'Formulated by a veterinarian to replicate the natural desert sand texture cats instinctively prefer.',
      'Eliminates airborne silica dust clouds that irritate human and feline bronchial airways.',
      'Unscented profile eliminates the #1 cause of litter box avoidance in housecats.'
    ],
    comparisonProducts: [
      {
        name: 'Dr. Elsey’s Ultra',
        rating: 9.3,
        badge: 'Best Clay Litter Overall',
        priceTier: '$',
        keyAdvantage: 'Zero perfume, heavy non-tracking grain, rock-hard clumps.',
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'World’s Best Cat Litter (Corn)',
        rating: 8.8,
        badge: 'Best Flushable Natural',
        priceTier: '$$',
        keyAdvantage: 'Plant-based whole kernel corn, lightweight, flushable.',
        image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Sustainably Yours Cassava',
        rating: 9.1,
        badge: 'Best White Clumper',
        priceTier: '$$$',
        keyAdvantage: 'Pure white cassava and corn makes blood/urine changes instantly visible.',
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=400&q=80'
      }
    ],
    authorId: 'clara-dupont',
    reviewerId: 'dr-sarah-miller',
    publishedAt: '2026-04-12',
    updatedAt: '2026-08-15',
    affiliateDisclaimer: 'WhiskerWise independently purchases testing bags for our evaluations. Links may earn a small referral commission with no extra cost to readers.'
  }
];

export function getReviewBySlug(slug: string): ProductReview | undefined {
  return REVIEWS.find(r => r.slug === slug);
}
