import React, { useState } from 'react';
import { Calculator, ShieldCheck, Heart, Sparkles, AlertCircle, Info, Stethoscope } from 'lucide-react';
import { calculateCatHumanAge, AgeCalculationResult } from '../../data/tools';

export const CatAgeCalculator: React.FC = () => {
  const [years, setYears] = useState<number>(3);
  const [months, setMonths] = useState<number>(0);
  const [catName, setCatName] = useState<string>('');

  const result: AgeCalculationResult = calculateCatHumanAge(years, months);

  const getStageBadgeColor = (stage: AgeCalculationResult['lifeStage']) => {
    switch (stage) {
      case 'Kitten': return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'Junior': return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Prime': return 'bg-teal-100 text-teal-800 border-teal-300';
      case 'Mature': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Senior': return 'bg-indigo-100 text-indigo-800 border-indigo-300';
      case 'Geriatric': return 'bg-purple-100 text-purple-800 border-purple-300';
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E6DFD5] p-6 sm:p-10 shadow-sm">
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#C85A32] uppercase tracking-wider mb-2">
          <Calculator className="w-4 h-4" />
          <span>Clinical Veterinary Tool</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2321] font-editorial mb-3">
          Feline-to-Human Age Calculator
        </h2>
        <p className="text-sm text-[#596560] leading-relaxed mb-8">
          The popular "multiply by 7" rule is biologically flawed for cats. Felines reach sexual and physical adulthood within their first 24 months, then age at a steady curve of roughly 4 human years per calendar year thereafter.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Form Column */}
        <div className="lg:col-span-5 bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8E1D7] space-y-5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#1E2321]">
            Cat Details
          </h3>

          <div>
            <label htmlFor="cat-name-input" className="block text-xs font-semibold text-[#4A5550] mb-1">
              Cat's Name (Optional)
            </label>
            <input
              id="cat-name-input"
              type="text"
              value={catName}
              onChange={e => setCatName(e.target.value)}
              placeholder="e.g. Luna or Oliver"
              className="w-full px-3.5 py-2 text-sm bg-white border border-[#D5CCC0] rounded-xl focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="years-select" className="block text-xs font-semibold text-[#4A5550] mb-1">
                Years (0–25)
              </label>
              <select
                id="years-select"
                value={years}
                onChange={e => setYears(parseInt(e.target.value, 10))}
                className="w-full px-3 py-2 text-sm bg-white border border-[#D5CCC0] rounded-xl focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] outline-none"
              >
                {Array.from({ length: 26 }, (_, i) => (
                  <option key={i} value={i}>
                    {i} {i === 1 ? 'Year' : 'Years'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="months-select" className="block text-xs font-semibold text-[#4A5550] mb-1">
                Months (0–11)
              </label>
              <select
                id="months-select"
                value={months}
                onChange={e => setMonths(parseInt(e.target.value, 10))}
                className="w-full px-3 py-2 text-sm bg-white border border-[#D5CCC0] rounded-xl focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] outline-none"
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={i}>
                    {i} {i === 1 ? 'Month' : 'Months'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick presets */}
          <div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-[#7A8680] mb-2">
              Or Select Common Stages:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { label: '6 mo (Kitten)', y: 0, m: 6 },
                { label: '1 yr (Junior)', y: 1, m: 0 },
                { label: '4 yr (Prime)', y: 4, m: 0 },
                { label: '9 yr (Mature)', y: 9, m: 0 },
                { label: '13 yr (Senior)', y: 13, m: 0 },
                { label: '17 yr (Geriatric)', y: 17, m: 0 }
              ].map(preset => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => {
                    setYears(preset.y);
                    setMonths(preset.m);
                  }}
                  className={`text-xs px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                    years === preset.y && months === preset.m
                      ? 'bg-[#1E2321] text-white border-[#1E2321]'
                      : 'bg-white text-[#4A5550] border-[#D5CCC0] hover:border-[#1E2321]'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 bg-white rounded-xl border border-[#E8E1D7] text-[11px] text-[#596560] space-y-1">
            <div className="flex items-center gap-1 font-semibold text-[#1E2321]">
              <Info className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Conversion Formula Basis:</span>
            </div>
            <p>1st calendar year = ~15 human years.</p>
            <p>2nd calendar year = +9 years (~24 human).</p>
            <p>Each year after = +4 human years.</p>
          </div>
        </div>

        {/* Results Card Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#E8E1D7] relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E1D7] pb-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#7A8680]">
                  Approximate Human Equivalent
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#1E2321] font-editorial">
                    ~{result.humanAge}
                  </span>
                  <span className="text-lg font-medium text-[#596560]">Human Years Old</span>
                </div>
                {catName && (
                  <p className="text-xs text-[#C85A32] font-semibold mt-1">
                    Calculated for {catName} ({years}y {months}m)
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start sm:items-end">
                <span className="text-[11px] uppercase tracking-wider text-[#7A8680] font-semibold mb-1">
                  AAFP Life Stage
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStageBadgeColor(result.lifeStage)}`}>
                  {result.lifeStage} Stage
                </span>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-sm font-bold text-[#1E2321] mb-2 font-editorial">
                Stage Overview: {result.lifeStage}
              </h4>
              <p className="text-xs sm:text-sm text-[#4A5550] leading-relaxed">
                {result.stageDescription}
              </p>
            </div>
          </div>

          {/* Developmental Milestones */}
          <div className="bg-white p-5 rounded-2xl border border-[#E8E1D7] space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E2321] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#C85A32]" />
              <span>Physiological Milestones at this Stage</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#4A5550]">
              {result.milestones.map((m, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] mt-1.5 flex-shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinical Wellness Recommendations */}
          <div className="bg-[#EFF6F1] p-5 rounded-2xl border border-[#D0E2D6] space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D634C] flex items-center gap-1.5">
              <Stethoscope className="w-4 h-4 text-[#2D634C]" />
              <span>Veterinary Care Priorities</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#2C3330]">
              {result.wellnessRecommendations.map((rec, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2D634C] mt-0.5 flex-shrink-0" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-[11px] text-[#7A8680] leading-relaxed italic">
            * Disclaimer: Feline physiological aging varies according to breed, indoor vs. outdoor lifestyle, body weight, and genetics. This calculator provides educational approximations aligned with the American Association of Feline Practitioners (AAFP) guidelines.
          </div>
        </div>
      </div>
    </div>
  );
};
