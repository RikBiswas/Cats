import React, { useState } from 'react';
import { Activity, ShieldCheck, Check, AlertCircle, Info } from 'lucide-react';

export const CatBodyConditionScore: React.FC = () => {
  const [selectedScore, setSelectedScore] = useState<number>(5);

  const bcsData: Record<number, {
    category: string;
    label: string;
    ribCheck: string;
    waistCheck: string;
    fatPads: string;
    healthRisk: string;
    advice: string;
    color: string;
  }> = {
    1: {
      category: 'Severely Underweight',
      label: 'BCS 1/9 (Emaciated)',
      ribCheck: 'Ribs, spine, and pelvic bones visible from a distance with zero palpable fat covering.',
      waistCheck: 'Severe hourglass waist pinch with extreme abdominal tuck.',
      fatPads: 'Complete absence of subcutaneous fat; observable muscle wasting along lumbar spine.',
      healthRisk: 'High risk of immune failure, hepatic lipidosis vulnerability, and organ failure.',
      advice: 'Immediate veterinary evaluation required to test for malabsorption, diabetes, hyperthyroidism, or kidney disease.',
      color: 'text-rose-700 bg-rose-50 border-rose-200'
    },
    2: {
      category: 'Underweight',
      label: 'BCS 2/9 (Very Thin)',
      ribCheck: 'Ribs easily visible on shorthair cats; bony protrusions felt with zero pressure.',
      waistCheck: 'Marked waist hourglass indentation when viewed from above.',
      fatPads: 'Minimal abdominal fat layer; pronounced abdominal tuck.',
      healthRisk: 'Nutrient deficiencies, reduced stamina, muscle catabolism.',
      advice: 'Consult your veterinarian to adjust caloric intake or rule out intestinal parasites and dental pain.',
      color: 'text-amber-700 bg-amber-50 border-amber-200'
    },
    3: {
      category: 'Underweight',
      label: 'BCS 3/9 (Thin)',
      ribCheck: 'Ribs easily palpable with minimal fat covering.',
      waistCheck: 'Clear waist indentation behind ribs.',
      fatPads: 'Small primordial abdominal fat flap visible.',
      healthRisk: 'Sub-optimal energy reserves.',
      advice: 'Gradually increase daily calorie intake by 10–15% and check stool consistency.',
      color: 'text-amber-700 bg-amber-50 border-amber-200'
    },
    4: {
      category: 'Ideal Weight',
      label: 'BCS 4/9 (Lean Ideal)',
      ribCheck: 'Ribs easily palpable with a thin layer of fat covering.',
      waistCheck: 'Waistline easily visible from above behind the ribs.',
      fatPads: 'Slight abdominal tuck; minimal abdominal fat pad.',
      healthRisk: 'Excellent physiological baseline associated with feline longevity.',
      advice: 'Maintain current feeding portions and keep engaging in daily interactive predatory play.',
      color: 'text-emerald-800 bg-emerald-50 border-emerald-200'
    },
    5: {
      category: 'Ideal Weight',
      label: 'BCS 5/9 (Perfect Ideal)',
      ribCheck: 'Ribs easily palpable without excess fat covering (feels like the back of your knuckles).',
      waistCheck: 'Clear waist observable behind ribs without being overly pronounced.',
      fatPads: 'Abdomen has slight tuck; normal modest primordial pouch swinging gently during walking.',
      healthRisk: 'Lowest risk for feline diabetes, osteoarthritis, and urinary tract disorders.',
      advice: 'Gold standard. Continue current nutritional maintenance and annual vet wellness checks.',
      color: 'text-emerald-800 bg-emerald-50 border-emerald-200'
    },
    6: {
      category: 'Overweight',
      label: 'BCS 6/9 (Moderately Overweight)',
      ribCheck: 'Ribs palpable with slight excess fat cover; requires slight finger pressure to feel.',
      waistCheck: 'Waist discernable from above, but not prominent.',
      fatPads: 'Abdominal tuck is absent or rounded.',
      healthRisk: 'Early mechanical strain on stifle (knee) and hip joints.',
      advice: 'Eliminate high-calorie treats, transition away from dry free-feeding, and introduce puzzle feeders.',
      color: 'text-amber-700 bg-amber-50 border-amber-200'
    },
    7: {
      category: 'Overweight',
      label: 'BCS 7/9 (Heavy)',
      ribCheck: 'Ribs difficult to palpate beneath moderate fat layer.',
      waistCheck: 'Waistline barely visible or absent from above.',
      fatPads: 'Noticeable rounding of abdomen with moderate fat pad deposit.',
      healthRisk: 'Increased risk of Type 2 feline diabetes mellitus, hepatic lipidosis, and reduced mobility.',
      advice: 'Formulate a measured weight loss protocol with your vet (0.5%–1% body weight loss per week).',
      color: 'text-amber-800 bg-amber-50 border-amber-200'
    },
    8: {
      category: 'Obese',
      label: 'BCS 8/9 (Obese)',
      ribCheck: 'Ribs cannot be felt under heavy fat cover without significant firm pressure.',
      waistCheck: 'Waist absent; back appears broad and flattened.',
      fatPads: 'Marked abdominal distension with prominent pendulous fat deposits.',
      healthRisk: 'Severe risk of diabetes, urinary blockages, grooming inability leading to perineal dermatitis.',
      advice: 'Therapeutic prescription satiety or metabolic diet recommended under strict veterinary supervision.',
      color: 'text-rose-700 bg-rose-50 border-rose-200'
    },
    9: {
      category: 'Obese',
      label: 'BCS 9/9 (Severely Obese)',
      ribCheck: 'Massive fat deposits over thorax, spine, and neck; ribs impossible to palpate.',
      waistCheck: 'No waist; abdomen severely distended laterally.',
      fatPads: 'Extensive fat deposits on face, limbs, and spine.',
      healthRisk: 'Life-limiting systemic inflammation, airway compression, severe arthritis, and grooming paralysis.',
      advice: 'Urgent veterinary intervention required. Never starve—must follow structured medical reduction plan.',
      color: 'text-rose-800 bg-rose-50 border-rose-300'
    }
  };

  const current = bcsData[selectedScore];

  return (
    <div className="bg-white rounded-3xl border border-[#E6DFD5] p-6 sm:p-10 shadow-sm">
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#C85A32] uppercase tracking-wider mb-2">
          <Activity className="w-4 h-4" />
          <span>WSAVA Global Veterinary Standard</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2321] font-editorial mb-3">
          Cat Body Condition Score (BCS 1–9) Guide
        </h2>
        <p className="text-sm text-[#596560] leading-relaxed mb-8">
          The scale alone doesn’t tell the whole story. A 14-pound Maine Coon may be lean, while a 9-pound Siamese could be clinically obese. Use the 3-step physical hands-on check below to identify your cat’s true Body Condition Score.
        </p>
      </div>

      {/* Step by step hands-on test explanation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8E1D7]">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#C85A32] block mb-1">
            Step 1: Rib Palpation
          </span>
          <p className="text-xs text-[#4A5550] leading-relaxed">
            Run your flat palms gently along your cat’s ribcage. In an ideal cat, the ribs should feel like the knuckles on the back of your hand when your hand is open flat.
          </p>
        </div>

        <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8E1D7]">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#C85A32] block mb-1">
            Step 2: Aerial Waist Check
          </span>
          <p className="text-xs text-[#4A5550] leading-relaxed">
            Stand directly above your cat while they are standing on all four paws. Look for a subtle hourglass indentation between the back of their ribs and their hips.
          </p>
        </div>

        <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8E1D7]">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#C85A32] block mb-1">
            Step 3: Abdominal Tuck
          </span>
          <p className="text-xs text-[#4A5550] leading-relaxed">
            Crouch down to eye level with your cat’s flank. Their belly line should gently slope upward toward the hind legs (don't confuse this with the loose primordial pouch).
          </p>
        </div>
      </div>

      {/* Interactive 1-9 Selector */}
      <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8E1D7] mb-8">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#1E2321] mb-3">
          Select or Slide Score (1 = Emaciated, 5 = Ideal, 9 = Severely Obese):
        </label>

        <div className="flex items-center gap-1 sm:gap-2 mb-4 overflow-x-auto pb-2">
          {([1, 2, 3, 4, 5, 6, 7, 8, 9] as const).map(num => (
            <button
              key={num}
              onClick={() => setSelectedScore(num)}
              className={`flex-1 min-w-[36px] py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                selectedScore === num
                  ? 'bg-[#1E2321] text-white shadow-md scale-105'
                  : num <= 3
                  ? 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                  : num <= 5
                  ? 'bg-emerald-100 text-emerald-900 hover:bg-emerald-200'
                  : 'bg-rose-100 text-rose-900 hover:bg-rose-200'
              }`}
            >
              {num}
            </button>
          ))}
        </div>

        <div className="flex justify-between text-[11px] text-[#7A8680] font-medium px-1">
          <span>1–3: Underweight</span>
          <span className="text-[#2D634C] font-bold">4–5: Ideal Range</span>
          <span>6–9: Overweight / Obese</span>
        </div>
      </div>

      {/* Active Score Result Display */}
      <div className={`p-6 sm:p-8 rounded-2xl border ${current.color} space-y-6`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/10 pb-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider opacity-80">
              Assessed Condition
            </span>
            <h3 className="text-2xl font-bold font-editorial mt-0.5">
              {current.label} — {current.category}
            </h3>
          </div>
          <div className="px-3 py-1 bg-white/70 rounded-full text-xs font-bold w-fit shadow-xs">
            {selectedScore === 5 ? '★ Ideal Target' : selectedScore < 5 ? 'Under Baseline' : 'Elevated Risk'}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-3 bg-white/60 rounded-xl space-y-1">
            <strong className="block font-semibold">Rib Palpation:</strong>
            <p className="leading-relaxed">{current.ribCheck}</p>
          </div>
          <div className="p-3 bg-white/60 rounded-xl space-y-1">
            <strong className="block font-semibold">Waistline Profile:</strong>
            <p className="leading-relaxed">{current.waistCheck}</p>
          </div>
          <div className="p-3 bg-white/60 rounded-xl space-y-1">
            <strong className="block font-semibold">Abdominal Fat:</strong>
            <p className="leading-relaxed">{current.fatPads}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-black/10 space-y-2">
          <div className="flex items-start gap-2 text-xs">
            <ShieldCheck className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold">Veterinary Recommendation:</strong>{' '}
              <span>{current.advice}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-[11px] text-[#7A8680] italic leading-relaxed">
        * Educational Notice: This tool reflects the WSAVA (World Small Animal Veterinary Association) Body Condition Score system. It is designed to assist guardians in assessing physical development at home, but is not a substitute for a comprehensive veterinary physical examination.
      </div>
    </div>
  );
};
