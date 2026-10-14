import React, { useState, useEffect } from 'react';
import { Calculator, Sparkles, Scale, Activity, ShieldCheck, ArrowRight } from 'lucide-react';
import { ToolMeta } from '../types';
import { TOOLS_LIST } from '../data/tools';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CatAgeCalculator } from '../components/tools/CatAgeCalculator';
import { CatNameFinder } from '../components/tools/CatNameFinder';
import { CatCalorieCalculator } from '../components/tools/CatCalorieCalculator';
import { CatBodyConditionScore } from '../components/tools/CatBodyConditionScore';

interface ToolsViewProps {
  toolSlug?: string;
}

export const ToolsView: React.FC<ToolsViewProps> = ({ toolSlug }) => {
  const { navigate } = useNavigation();

  // Determine active tool from prop or fallback to age-calculator
  const [activeSlug, setActiveSlug] = useState<string>(() => {
    if (toolSlug) return toolSlug;
    return 'cat-age-calculator';
  });

  useEffect(() => {
    if (toolSlug) {
      setActiveSlug(toolSlug);
    }
  }, [toolSlug]);

  const handleSelectTool = (slug: string) => {
    setActiveSlug(slug);
    navigate(`/tools/${slug}`);
  };

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator': return <Calculator className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Scale': return <Scale className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      default: return <Calculator className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-6 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Interactive Cat Tools' }]} />

        {/* Page Header */}
        <header className="mt-4 mb-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C85A32] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Interactive Feline Care Suite</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2321] font-editorial">
            Cat Care Tools & Clinical Calculators
          </h1>
          <p className="text-sm sm:text-base text-[#4A5550] leading-relaxed max-w-3xl">
            Evidence-based interactive utilities engineered to assist cat caregivers in determining biological age curves, precise calorie and portion requirements, curated names, and body condition scoring.
          </p>
        </header>

        {/* Tool Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {TOOLS_LIST.map(tool => {
            const isSelected = activeSlug === tool.slug || activeSlug === tool.id;
            return (
              <button
                key={tool.id}
                onClick={() => handleSelectTool(tool.slug)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#C85A32] shadow-md ring-2 ring-[#C85A32]/20'
                    : 'bg-white/80 border-[#E8E1D7] hover:border-[#D5CCC0] hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-[#C85A32] text-white' : 'bg-[#FAF7F2] text-[#1E2321]'
                    }`}>
                      {getToolIcon(tool.icon)}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#FAF7F2] text-[#596560] border border-[#E8E1D7]">
                      {tool.badgeText}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#1E2321] font-editorial">
                    {tool.title}
                  </h3>
                  <p className="text-xs text-[#596560] mt-1 line-clamp-2 leading-relaxed">
                    {tool.tagline}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t border-[#F2EBE1] flex items-center text-xs font-semibold ${
                  isSelected ? 'text-[#C85A32]' : 'text-[#7A8680]'
                }`}>
                  <span>{isSelected ? 'Currently Viewing' : 'Launch Tool'}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Tool Rendering */}
        <div className="transition-all duration-300">
          {(activeSlug === 'cat-age-calculator' || activeSlug === 'age-calculator') && (
            <CatAgeCalculator />
          )}

          {(activeSlug === 'cat-name-finder' || activeSlug === 'name-finder') && (
            <CatNameFinder />
          )}

          {(activeSlug === 'cat-calorie-calculator' || activeSlug === 'calorie-calculator') && (
            <CatCalorieCalculator />
          )}

          {(activeSlug === 'cat-body-condition-score' || activeSlug === 'body-condition-score' || activeSlug === 'cat-weight-calculator') && (
            <CatBodyConditionScore />
          )}
        </div>
      </div>
    </div>
  );
};
