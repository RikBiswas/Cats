import React from 'react';
import { ShieldCheck, Heart, Award, CheckCircle, Stethoscope, Users, Sparkles } from 'lucide-react';
import { AUTHORS, REVIEWERS } from '../data/authors';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const AboutView: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-6 sm:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About WhiskerWise' }]} />

        {/* Hero Section */}
        <header className="mt-4 mb-12 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C85A32] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Editorial Mission & Veterinary Ethics</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2321] font-editorial leading-tight">
            Independent, Evidence-Based Feline Journalism & Care
          </h1>
          <p className="text-base sm:text-lg text-[#4A5550] leading-relaxed">
            WhiskerWise was created to counter the deluge of sponsored pet content, unverified marketing claims, and outdated cat care myths. Every guide, calculator, and product test is anchored in peer-reviewed veterinary science.
          </p>
        </header>

        {/* 3 Core Editorial Pillars */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-[#E8E1D7] shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#EFF6F1] text-[#2D634C] flex items-center justify-center">
              <Stethoscope className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1E2321]">Clinical Fact-Checking</h3>
            <p className="text-xs text-[#596560] leading-relaxed">
              Medical, pharmacological, and physiological articles are reviewed by licensed Doctors of Veterinary Medicine (DVMs) before publication.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E8E1D7] shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#FBF0EB] text-[#C85A32] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1E2321]">No Paid Reviews</h3>
            <p className="text-xs text-[#596560] leading-relaxed">
              We purchase cat foods, litters, and gear anonymously at retail. Manufacturers cannot buy a positive score or alter our testing verdicts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E8E1D7] shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] text-[#1E2321] flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1E2321]">Feline-First Welfare</h3>
            <p className="text-xs text-[#596560] leading-relaxed">
              We prioritize the obligate carnivore biology, sensory sensitivity, and mental enrichment of domestic cats over human aesthetic convenience.
            </p>
          </div>
        </section>

        {/* Advisory Board Section */}
        <section className="bg-white rounded-3xl border border-[#E8E1D7] p-8 sm:p-10 mb-16 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
              Veterinary Review Board (Sample Representation)
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2321] font-editorial mt-1">
              Reviewed by Practicing Clinicians
            </h2>
            <p className="text-xs sm:text-sm text-[#596560] mt-2 max-w-2xl leading-relaxed">
              Our medical advisory board verifies anatomical correctness, therapeutic dosing caveats, diagnostic flowcharts, and emergency safety instructions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.values(REVIEWERS).map(reviewer => (
              <div key={reviewer.id} className="p-6 bg-[#FAF7F2] rounded-2xl border border-[#E8E1D7] flex items-start gap-4">
                <img src={reviewer.avatar} alt={reviewer.name} className="w-14 h-14 rounded-2xl object-cover border border-[#D5CCC0] flex-shrink-0" />
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D634C] block">{reviewer.verifiedStatus}</span>
                  <h3 className="text-base font-bold text-[#1E2321]">{reviewer.name}</h3>
                  <p className="text-xs font-medium text-[#C85A32]">{reviewer.credentials}</p>
                  <p className="text-xs text-[#596560] leading-relaxed pt-1">{reviewer.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Team */}
        <section className="mb-16 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A8680]">
              Editorial & Testing Staff
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2321] font-editorial mt-1">
              Dedicated Cat Guardians & Journalists
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(AUTHORS).map(author => (
              <div key={author.id} className="bg-white p-6 rounded-2xl border border-[#E8E1D7] space-y-3">
                <img src={author.avatar} alt={author.name} className="w-14 h-14 rounded-xl object-cover border border-[#E8E1D7]" />
                <div>
                  <h3 className="text-base font-bold text-[#1E2321]">{author.name}</h3>
                  <span className="text-xs font-semibold text-[#C85A32] block">{author.role}</span>
                  <p className="text-[11px] text-[#7A8680]">{author.credentials}</p>
                </div>
                <p className="text-xs text-[#4A5550] leading-relaxed">
                  {author.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <div className="p-8 bg-[#1E2321] rounded-3xl text-white text-center space-y-4">
          <h3 className="text-2xl font-bold font-editorial">Have a Cat Care Question or Correction?</h3>
          <p className="text-xs sm:text-sm text-[#A8B5AF] max-w-lg mx-auto">
            Our editorial desk is committed to scientific accuracy and prompt correction of evolving veterinary consensus.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={() => navigate('/contact')}
              className="px-5 py-2.5 bg-[#C85A32] hover:bg-[#AD4B26] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
            >
              Contact Our Editors
            </button>
            <button
              onClick={() => navigate('/editorial-policy')}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
            >
              Read Editorial Standards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
