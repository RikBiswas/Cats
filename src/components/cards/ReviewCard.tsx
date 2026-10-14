import React from 'react';
import { Star, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { ProductReview } from '../../types';
import { useNavigation } from '../../context/NavigationContext';

interface ReviewCardProps {
  review: ProductReview;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const { navigate } = useNavigation();

  return (
    <div
      onClick={() => navigate(`/reviews/${review.slug}`)}
      className="group bg-white rounded-2xl border border-[#E8E1D7] overflow-hidden hover:border-[#D5C9BC] hover:shadow-lg transition-all duration-200 flex flex-col justify-between cursor-pointer"
    >
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
          <img
            src={review.featuredImage}
            alt={review.productName}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-[#1E2321] text-white px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1 shadow-md">
            <Star className="w-3.5 h-3.5 fill-[#E5A83B] text-[#E5A83B]" />
            <span>{review.overallRating.toFixed(1)}</span>
            <span className="text-neutral-400 font-normal">/ 10</span>
          </div>
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded text-[11px] font-semibold text-[#2D634C] flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" />
            <span>Cats.com Review Standard</span>
          </div>
        </div>

        <div className="p-5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#C85A32] mb-1">
            {review.brand}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#1E2321] group-hover:text-[#C85A32] transition-colors leading-snug font-editorial">
            {review.productName}
          </h3>

          <p className="mt-2 text-xs text-[#596560] line-clamp-2 leading-relaxed">
            {review.verdict}
          </p>

          <div className="mt-4 pt-3 border-t border-[#F2EBE1] space-y-1.5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#7A8680]">Top Strengths</p>
            {review.pros.slice(0, 2).map((pro, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-[#2C3330]">
                <CheckCircle className="w-3.5 h-3.5 text-[#2D634C] flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{pro}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5 pt-0">
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/reviews/${review.slug}`);
          }}
          className="w-full py-2.5 px-4 bg-[#FAF7F2] hover:bg-[#C85A32] text-[#1E2321] hover:text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>Read Full Hands-on Review</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
