import React, { useState } from 'react';
import { Scale, Info, ShieldCheck, Utensils, AlertTriangle } from 'lucide-react';
import { calculateCatCalories, CalorieCalculationResult } from '../../data/tools';

export const CatCalorieCalculator: React.FC = () => {
  const [weightValue, setWeightValue] = useState<number>(10);
  const [unit, setUnit] = useState<'lbs' | 'kg'>('lbs');
  const [activityFactor, setActivityFactor] = useState<string>('neutered');
  const [wetRatio, setWetRatio] = useState<number>(50); // % wet food
  const [canKcal, setCanKcal] = useState<number>(82); // default 3oz can
  const [cupKcal, setCupKcal] = useState<number>(385); // default dry cup

  const result: CalorieCalculationResult = calculateCatCalories(
    weightValue,
    unit,
    activityFactor,
    wetRatio,
    canKcal,
    cupKcal
  );

  return (
    <div className="bg-white rounded-3xl border border-[#E6DFD5] p-6 sm:p-10 shadow-sm">
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#C85A32] uppercase tracking-wider mb-2">
          <Utensils className="w-4 h-4" />
          <span>Feline Nutrition Science</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2321] font-editorial mb-3">
          Daily Calorie & Food Portion Calculator
        </h2>
        <p className="text-sm text-[#596560] leading-relaxed mb-8">
          Calculate your cat’s daily caloric baseline using the clinical veterinary Resting Energy Requirement formula: <code>RER = 70 × (Body Weight in kg)^0.75</code>. Split daily calories into exact canned food cans and dry kibble cups.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls */}
        <div className="lg:col-span-5 bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8E1D7] space-y-5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#1E2321]">
            Cat Weight & Lifestyle
          </h3>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="weight-input" className="text-xs font-semibold text-[#4A5550]">
                Current Weight
              </label>
              <div className="inline-flex rounded-lg border border-[#D5CCC0] p-0.5 bg-white text-xs">
                <button
                  type="button"
                  onClick={() => setUnit('lbs')}
                  className={`px-2.5 py-0.5 rounded-md font-medium transition-colors cursor-pointer ${
                    unit === 'lbs' ? 'bg-[#1E2321] text-white' : 'text-[#596560]'
                  }`}
                >
                  lbs
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('kg')}
                  className={`px-2.5 py-0.5 rounded-md font-medium transition-colors cursor-pointer ${
                    unit === 'kg' ? 'bg-[#1E2321] text-white' : 'text-[#596560]'
                  }`}
                >
                  kg
                </button>
              </div>
            </div>
            <input
              id="weight-input"
              type="number"
              min="1"
              max="40"
              step="0.5"
              value={weightValue}
              onChange={e => setWeightValue(parseFloat(e.target.value) || 1)}
              className="w-full px-3.5 py-2 text-sm bg-white border border-[#D5CCC0] rounded-xl focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] outline-none"
            />
          </div>

          <div>
            <label htmlFor="activity-select" className="block text-xs font-semibold text-[#4A5550] mb-1">
              Physiological Status / Activity
            </label>
            <select
              id="activity-select"
              value={activityFactor}
              onChange={e => setActivityFactor(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-[#D5CCC0] rounded-xl focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] outline-none"
            >
              <option value="neutered">Neutered Adult (Standard indoor maintenance - 1.2x RER)</option>
              <option value="intact">Intact Adult (Higher metabolic burn - 1.4x RER)</option>
              <option value="weight-loss">Weight Loss Protocol (Supervised deficit - 0.8x RER)</option>
              <option value="senior">Senior Cat (11+ yrs - 1.1x RER)</option>
              <option value="kitten-young">Young Kitten (&lt; 4 months rapid growth - 2.5x RER)</option>
              <option value="kitten-older">Older Kitten (4–12 months - 2.0x RER)</option>
            </select>
          </div>

          {/* Diet mix slider */}
          <div className="space-y-2 pt-2 border-t border-[#E8E1D7]">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[#1E2321]">Diet Split:</span>
              <span className="font-medium text-[#C85A32]">
                {wetRatio}% Wet / {100 - wetRatio}% Dry
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="10"
              value={wetRatio}
              onChange={e => setWetRatio(parseInt(e.target.value, 10))}
              className="w-full accent-[#C85A32] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#7A8680]">
              <span>100% Dry Kibble</span>
              <span>50/50 Combo</span>
              <span>100% Canned Wet</span>
            </div>
          </div>

          {/* Food label specs */}
          <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
            <div>
              <label className="block text-[11px] font-medium text-[#596560] mb-1">
                kcal / Wet Can (3 oz)
              </label>
              <input
                type="number"
                value={canKcal}
                onChange={e => setCanKcal(parseInt(e.target.value, 10) || 82)}
                className="w-full px-2.5 py-1.5 bg-white border border-[#D5CCC0] rounded-lg text-xs"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-[#596560] mb-1">
                kcal / Dry Cup (8 oz)
              </label>
              <input
                type="number"
                value={cupKcal}
                onChange={e => setCupKcal(parseInt(e.target.value, 10) || 385)}
                className="w-full px-2.5 py-1.5 bg-white border border-[#D5CCC0] rounded-lg text-xs"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#E8E1D7]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E1D7] pb-5">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#7A8680]">
                  Target Daily Caloric Intake
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#1E2321] font-editorial">
                    {result.mer}
                  </span>
                  <span className="text-lg font-medium text-[#596560]">kcal / day</span>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-[11px] text-[#7A8680] uppercase tracking-wider font-semibold block">
                  Resting Baseline (RER)
                </span>
                <span className="text-xl font-bold text-[#2C3330]">{result.rer} kcal</span>
              </div>
            </div>

            {/* Daily Feeding Breakdown */}
            <div className="pt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E2321] mb-4">
                Recommended Daily Meal Portions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-[#E8E1D7] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#C85A32]">Wet Canned Food</span>
                    <span className="text-xs text-[#7A8680]">{result.wetCalories} kcal</span>
                  </div>
                  <div className="text-2xl font-extrabold text-[#1E2321] font-editorial">
                    {result.wetCansPerDay}{' '}
                    <span className="text-xs font-normal text-[#596560]">
                      {result.wetCansPerDay === 1 ? 'can' : 'cans'} (3 oz) / day
                    </span>
                  </div>
                  <p className="text-[11px] text-[#7A8680]">Split across 2–3 daily fresh meals</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E8E1D7] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#1E2321]">Dry Kibble</span>
                    <span className="text-xs text-[#7A8680]">{result.dryCalories} kcal</span>
                  </div>
                  <div className="text-2xl font-extrabold text-[#1E2321] font-editorial">
                    {result.dryCupsPerDay}{' '}
                    <span className="text-xs font-normal text-[#596560]">
                      {result.dryCupsPerDay === 1 ? 'cup' : 'cups'} (standard 8 oz measuring cup)
                    </span>
                  </div>
                  <p className="text-[11px] text-[#7A8680]">Weigh on a gram food scale for accuracy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Weight Loss Warning */}
          {activityFactor === 'weight-loss' && (
            <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 space-y-1">
                <strong className="block font-semibold">Critical Veterinary Safety Warning:</strong>
                <p>
                  Never put an overweight cat on a severe crash diet. Rapid weight reduction triggers <em>hepatic lipidosis</em> (fatty liver disease), where fat mobilizes to the liver faster than it can be processed, which is life-threatening. Safe feline weight loss is gradual: <strong>0.5% to 1.5% of total body weight per week</strong> under veterinary monitoring.
                </p>
              </div>
            </div>
          )}

          <div className="bg-[#EFF6F1] p-5 rounded-2xl border border-[#D0E2D6] text-xs text-[#2C3330] space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-[#2D634C]">
              <ShieldCheck className="w-4 h-4 text-[#2D634C]" />
              <span>Veterinary Feeding Tip</span>
            </div>
            <p>
              Measuring cups can vary in volume by up to 20% depending on kibble shape and how densely it settles. For overweight cats or cats with diabetes, weighing daily dry portions on an inexpensive digital kitchen scale (in grams) provides pinpoint control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
