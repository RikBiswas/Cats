import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, XCircle, ExternalLink, Info, ArrowRight, Award, ShoppingBag } from 'lucide-react';
import { ProductReview } from '../types';
import { REVIEWS, getReviewBySlug } from '../data/reviews';
import { AUTHORS, REVIEWERS } from '../data/authors';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface ReviewViewProps {
  slug: string;
}

export const ReviewView: React.FC<ReviewViewProps> = ({ slug }) => {
  const { navigate } = useNavigation();
  const review = getReviewBySlug(slug) || REVIEWS[0];
  const author = AUTHORS[review.authorId];
  const reviewer = review.reviewerId ? REVIEWERS[review.reviewerId] : undefined;

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-6 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Product Reviews', path: '/category/product-reviews' },
            { label: review.productName }
          ]}
        />

        {/* Affiliate Disclosure Header Notice */}
        <div className="mt-3 p-3.5 bg-amber-50/80 rounded-xl border border-amber-200/80 text-[11px] text-amber-900 leading-relaxed flex items-start gap-2">
          <Info className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            <strong>Affiliate & Editorial Independence Notice:</strong> {review.affiliateDisclaimer} We test products with real cats in genuine home environments and never accept paid review placements.
          </div>
        </div>

        {/* Main Review Hero Header */}
        <header className="mt-6 mb-8 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
            {review.brand} Review & Lab Evaluation
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2321] font-editorial leading-tight">
            {review.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs text-[#596560] pt-1">
            <span>By <strong>{author?.name || 'Testing Team'}</strong></span>
            <span>·</span>
            {reviewer && (
              <>
                <span className="flex items-center gap-1 text-[#2D634C] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Reviewed by {reviewer.name}
                </span>
                <span>·</span>
              </>
            )}
            <span>Updated {review.updatedAt}</span>
          </div>
        </header>

        {/* Product Score Card & Quick Glance Box */}
        <div className="bg-white rounded-3xl border border-[#E8E1D7] p-6 sm:p-8 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image */}
            <div className="lg:col-span-5 aspect-square rounded-2xl overflow-hidden bg-neutral-100 border border-[#E8E1D7] relative">
              <img
                src={review.featuredImage}
                alt={review.productName}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-[#1E2321] shadow-sm flex items-center gap-1">
                <Award className="w-4 h-4 text-[#C85A32]" />
                <span>WhiskerWise Tested</span>
              </div>
            </div>

            {/* Score & Verdict */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center justify-between border-b border-[#F2EBE1] pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7A8680]">Overall Rating</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#1E2321] font-editorial">
                      {review.overallRating.toFixed(1)}
                    </span>
                    <span className="text-sm font-semibold text-[#596560]">/ 10 Exceptional</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[#E5A83B]">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="w-5 h-5 fill-[#E5A83B]" />
                  ))}
                </div>
              </div>

              {/* Cats.com Standard 5-Criteria Breakdown */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E2321] block">
                  Evaluation Score Breakdown (Cats.com Standard)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                  <div>
                    <div className="flex justify-between text-[#4A5550] mb-1">
                      <span>Species Appropriateness</span>
                      <strong className="text-[#1E2321]">{review.scores.speciesAppropriateness}/10</strong>
                    </div>
                    <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#2D634C] rounded-full" style={{ width: `${review.scores.speciesAppropriateness * 10}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#4A5550] mb-1">
                      <span>Ingredient Quality</span>
                      <strong className="text-[#1E2321]">{review.scores.ingredientQuality}/10</strong>
                    </div>
                    <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#2D634C] rounded-full" style={{ width: `${review.scores.ingredientQuality * 10}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#4A5550] mb-1">
                      <span>Variety & Taste Appeal</span>
                      <strong className="text-[#1E2321]">{review.scores.varietyAndTaste}/10</strong>
                    </div>
                    <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#C85A32] rounded-full" style={{ width: `${review.scores.varietyAndTaste * 10}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#4A5550] mb-1">
                      <span>Price-to-Value Ratio</span>
                      <strong className="text-[#1E2321]">{review.scores.priceValue}/10</strong>
                    </div>
                    <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#C85A32] rounded-full" style={{ width: `${review.scores.priceValue * 10}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4A5550] leading-relaxed pt-2">
                {review.verdict}
              </p>

              {/* Retailer Action Button */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setCheckoutModalOpen(true)}
                  className="px-6 py-3 bg-[#C85A32] hover:bg-[#AD4B26] text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Check Current Retailer Availability</span>
                </button>
                <span className="text-[11px] text-[#7A8680]">Sample verified retailer pricing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pros & Cons Side-by-Side */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1E2321] font-editorial mb-6">
            Hands-on Testing: Pros & Cons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-emerald-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>What We Loved</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#2C3330]">
                {review.pros.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-rose-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>Things to Consider</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#2C3330]">
                {review.cons.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 flex-shrink-0" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Specifications Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1E2321] font-editorial mb-6">
            Specifications & Guaranteed Analysis
          </h2>
          <div className="bg-white rounded-2xl border border-[#E8E1D7] overflow-hidden">
            <table className="w-full text-left text-xs sm:text-sm">
              <tbody className="divide-y divide-[#F2EBE1]">
                {Object.entries(review.specifications).map(([key, val], idx) => (
                  <tr key={idx} className="hover:bg-[#FAF7F2]/50">
                    <td className="py-3 px-5 font-semibold text-[#1E2321] w-1/3 bg-[#FAF7F2]/40">
                      {key}
                    </td>
                    <td className="py-3 px-5 text-[#4A5550]">
                      {val}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Who Should Buy & Who Should Avoid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-[#EFF6F1] rounded-2xl border border-[#D0E2D6] space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#2D634C]">
              Best Suited For
            </h3>
            <p className="text-xs sm:text-sm text-[#2C3330] leading-relaxed">
              {review.bestFor}
            </p>
          </div>

          <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900">
              Who Should Look Elsewhere
            </h3>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {review.whoShouldAvoid}
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        {review.comparisonProducts && review.comparisonProducts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1E2321] font-editorial mb-2">
              Top Competitors Compared
            </h2>
            <p className="text-xs sm:text-sm text-[#596560] mb-6">
              How {review.productName} stacks against other leading options in this category.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-[#E8E1D7] bg-white shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-[#FAF7F2] border-b border-[#E8E1D7]">
                    <th className="py-3 px-4 font-bold text-[#1E2321]">Product</th>
                    <th className="py-3 px-4 font-bold text-[#1E2321]">Score</th>
                    <th className="py-3 px-4 font-bold text-[#1E2321]">Price Tier</th>
                    <th className="py-3 px-4 font-bold text-[#1E2321]">Key Advantage</th>
                    <th className="py-3 px-4 font-bold text-[#1E2321]">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F2EBE1]">
                  {review.comparisonProducts.map((comp, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF7F2]/50">
                      <td className="py-3 px-4 flex items-center gap-3">
                        <img src={comp.image} alt={comp.name} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                        <div>
                          <strong className="block text-[#1E2321]">{comp.name}</strong>
                          <span className="text-[10px] text-[#C85A32] font-semibold">{comp.badge}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-bold text-[#1E2321]">
                        {comp.rating} / 10
                      </td>
                      <td className="py-3 px-4 text-[#596560] font-mono">
                        {comp.priceTier}
                      </td>
                      <td className="py-3 px-4 text-[#4A5550]">
                        {comp.keyAdvantage}
                      </td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => setCheckoutModalOpen(true)}
                          className="px-2.5 py-1 text-xs font-semibold bg-[#FAF7F2] hover:bg-[#1E2321] text-[#1E2321] hover:text-white rounded-lg transition-colors cursor-pointer"
                        >
                          Check Store
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Modal for Simulated Retailer Check */}
        {checkoutModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-[#E8E1D7] space-y-4 animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between border-b border-[#F2EBE1] pb-3">
                <h3 className="text-base font-bold text-[#1E2321] font-editorial">
                  Verified Retailer Links
                </h3>
                <button
                  onClick={() => setCheckoutModalOpen(false)}
                  className="p-1 text-neutral-400 hover:text-neutral-700 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-[#596560] leading-relaxed">
                As required by editorial transparency standards, WhiskerWise does not sell products directly. Below are sample verified pet supply partners stocking {review.productName}:
              </p>

              <div className="space-y-2 pt-1">
                {[
                  { store: 'Chewy Pet Care', inStock: true, note: 'Free 1-2 Day Delivery on orders over $49' },
                  { store: 'Petco Official', inStock: true, note: 'Curbside Pickup or Standard Shipping' },
                  { store: 'Direct Brand Store', inStock: true, note: 'Manufacturer Direct Fresh Batches' }
                ].map((ret, idx) => (
                  <div key={idx} className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E8E1D7] flex items-center justify-between">
                    <div>
                      <strong className="block text-xs text-[#1E2321]">{ret.store}</strong>
                      <span className="text-[10px] text-[#7A8680]">{ret.note}</span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#2D634C] bg-emerald-100 px-2 py-0.5 rounded">
                      In Stock
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[10px] text-[#86948E] leading-tight pt-2">
                {review.affiliateDisclaimer}
              </p>

              <button
                onClick={() => setCheckoutModalOpen(false)}
                className="w-full py-2.5 bg-[#1E2321] text-white rounded-xl text-xs font-semibold hover:bg-[#2C3330] cursor-pointer"
              >
                Close Retailer Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
