import React from 'react';
import { ShieldCheck, BookOpen, AlertCircle, Award, Scale, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const EditorialPolicyView: React.FC = () => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-6 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Editorial Policy' }]} />

        <header className="mt-4 mb-10 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C85A32] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Transparency & Medical Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2321] font-editorial">
            Editorial Policy, Medical Review & Affiliate Ethics
          </h1>
          <p className="text-sm sm:text-base text-[#596560] leading-relaxed">
            At WhiskerWise, our primary fiduciary and moral duty is to the health, biological well-being, and longevity of domestic felines.
          </p>
        </header>

        <div className="bg-white rounded-3xl border border-[#E8E1D7] p-8 sm:p-12 shadow-sm space-y-10 text-sm text-[#2C3330] leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1E2321] font-editorial">
              1. The Hierarchy of Scientific Evidence
            </h2>
            <p>
              We do not base our health or nutritional advice on anonymous internet forum threads, marketing press releases, or pet food sales brochures. Every medical claim published on WhiskerWise must meet our strict evidence hierarchy:
            </p>
            <ul className="space-y-2 pl-4 text-xs sm:text-sm text-[#4A5550]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D634C] mt-0.5 flex-shrink-0" />
                <span><strong>Tier 1: Peer-Reviewed Veterinary Literature:</strong> Studies published in recognized veterinary journals (e.g., <em>Journal of Feline Medicine and Surgery</em>, <em>JAVMA</em>).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D634C] mt-0.5 flex-shrink-0" />
                <span><strong>Tier 2: Institutional Clinical Consensus:</strong> Guidelines formulated by organizations such as the American Association of Feline Practitioners (AAFP), the International Renal Interest Society (IRIS), and the World Small Animal Veterinary Association (WSAVA).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D634C] mt-0.5 flex-shrink-0" />
                <span><strong>Tier 3: Board-Certified Specialist Evaluation:</strong> Direct review and qualitative context provided by practicing DVMs, DACVIMs, and Certified Pet Nutritionists.</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 border-t border-[#F2EBE1] pt-8">
            <h2 className="text-xl font-bold text-[#1E2321] font-editorial">
              2. The Feline Product Evaluation Standard
            </h2>
            <p>
              Inspired by the rigorous methodology pioneered by the Cats.com review standard, our editorial team scores commercial cat products on 5 objective pillars out of 10 points:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8E1D7] space-y-1">
                <strong className="block text-xs font-bold uppercase text-[#1E2321]">Species Appropriateness</strong>
                <p className="text-xs text-[#596560]">Evaluates protein levels, moisture hydration, and low carbohydrate profiles suitable for strict obligate carnivores.</p>
              </div>
              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8E1D7] space-y-1">
                <strong className="block text-xs font-bold uppercase text-[#1E2321]">Ingredient Quality</strong>
                <p className="text-xs text-[#596560]">Scrutinizes meat sourcing, named animal organs, absence of controversial carrageenan or synthetic preservatives.</p>
              </div>
              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8E1D7] space-y-1">
                <strong className="block text-xs font-bold uppercase text-[#1E2321]">Recall & Safety Record</strong>
                <p className="text-xs text-[#596560]">Analyzes historic FDA recall databases for salmonella, listeria, aflatoxins, or excessive vitamin D toxicities.</p>
              </div>
              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8E1D7] space-y-1">
                <strong className="block text-xs font-bold uppercase text-[#1E2321]">Real-World Price-to-Value</strong>
                <p className="text-xs text-[#596560]">Calculates true cost-per-day of feeding or maintaining, weighing durability against retail investment.</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 border-t border-[#F2EBE1] pt-8">
            <h2 className="text-xl font-bold text-[#1E2321] font-editorial">
              3. Commercial Independence & Affiliate Disclosures
            </h2>
            <p>
              WhiskerWise is reader-supported. When readers purchase recommended products through links on our site, we may earn an affiliate commission. However:
            </p>
            <ul className="space-y-1.5 list-disc pl-5 text-xs sm:text-sm text-[#4A5550]">
              <li>We <strong>never accept payment</strong> in exchange for a positive review or higher ranking.</li>
              <li>Brand representatives cannot preview our articles or alter editorial scoring before publication.</li>
              <li>If a widely marketed product is biologically detrimental to cats (e.g., toxic ingredients, dangerous clay additives, unvetted motorized parts), we will state so unequivocally regardless of commission potential.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 border-t border-[#F2EBE1] pt-8">
            <h2 className="text-xl font-bold text-[#1E2321] font-editorial">
              4. Corrections and Continuous Scientific Auditing
            </h2>
            <p>
              Veterinary medicine and feline nutritional consensus evolve. When new research sheds light on renal pathophysiology, diabetes reversal protocols, or raw diet safety, our team updates articles promptly. We indicate the original publication date alongside the latest veterinary review timestamp.
            </p>
            <p className="text-xs text-[#596560]">
              If you identify an outdated figure or potential typo, please submit a correction notice via our Contact page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
