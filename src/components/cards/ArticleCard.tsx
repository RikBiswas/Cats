import React from 'react';
import { Clock, ShieldCheck } from 'lucide-react';
import { Article } from '../../types';
import { useNavigation } from '../../context/NavigationContext';
import { CATEGORIES } from '../../data/categories';
import { AUTHORS, REVIEWERS } from '../../data/authors';

interface ArticleCardProps {
  article: Article;
  layout?: 'vertical' | 'horizontal' | 'compact';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, layout = 'vertical' }) => {
  const { navigate } = useNavigation();
  const category = CATEGORIES.find(c => c.id === article.categoryId);
  const author = AUTHORS[article.authorId];
  const reviewer = article.reviewerId ? REVIEWERS[article.reviewerId] : undefined;

  const handleCardClick = () => {
    navigate(`/articles/${article.slug}`);
  };

  if (layout === 'horizontal') {
    return (
      <article
        onClick={handleCardClick}
        className="group flex flex-col sm:flex-row gap-5 p-4 bg-white rounded-2xl border border-[#E8E1D7] hover:border-[#D5C9BC] hover:shadow-md transition-all cursor-pointer"
      >
        <div className="sm:w-1/3 aspect-[16/10] sm:aspect-square overflow-hidden rounded-xl bg-neutral-100 flex-shrink-0">
          <img
            src={article.featuredImage}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <div>
            {/* Zero-Pill Clean Metadata */}
            <div className="flex items-center gap-2 text-xs text-[#596560] mb-1.5">
              <span className="font-semibold text-[#C85A32] uppercase tracking-wider text-[11px]">
                {category?.name || 'Cat Care'}
              </span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>{article.readingTimeMinutes} min read</span>
              {reviewer && (
                <>
                  <span aria-hidden="true" className="text-neutral-300">·</span>
                  <span className="inline-flex items-center gap-1 text-[#2D634C] font-medium text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Vet Reviewed
                  </span>
                </>
              )}
            </div>

            <h3 className="text-lg font-bold text-[#1E2321] group-hover:text-[#C85A32] transition-colors leading-snug font-editorial">
              {article.title}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-[#4A5550] line-clamp-2 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-[#F2EBE1] flex items-center justify-between text-xs text-[#7A8680]">
            <span className="font-medium text-[#2C3330]">{author?.name || 'WhiskerWise Team'}</span>
            <span>{article.publishedAt}</span>
          </div>
        </div>
      </article>
    );
  }

  if (layout === 'compact') {
    return (
      <article
        onClick={handleCardClick}
        className="group flex gap-3.5 py-3 border-b border-[#EFE8DE] last:border-0 cursor-pointer"
      >
        <div className="w-20 h-20 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0">
          <img
            src={article.featuredImage}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 text-[11px] text-[#7A8680] mb-0.5">
            <span className="font-medium text-[#C85A32]">{category?.name}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readingTimeMinutes} min</span>
          </div>
          <h4 className="text-sm font-semibold text-[#1E2321] group-hover:text-[#C85A32] transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h4>
        </div>
      </article>
    );
  }

  // Standard vertical card
  return (
    <article
      onClick={handleCardClick}
      className="group flex flex-col bg-white rounded-2xl border border-[#E8E1D7] overflow-hidden hover:border-[#D5C9BC] hover:shadow-lg transition-all duration-200 cursor-pointer"
    >
      <div className="aspect-[16/10] overflow-hidden bg-neutral-100 relative">
        <img
          src={article.featuredImage}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {reviewer && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#2D634C] shadow-sm flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Vet Reviewed</span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          {/* Zero-Pill Clean Inline Metadata */}
          <div className="flex items-center gap-2 text-xs text-[#596560] mb-2">
            <span className="font-semibold text-[#C85A32] uppercase tracking-wider text-[11px]">
              {category?.name || 'Feline Health'}
            </span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readingTimeMinutes} min read
            </span>
          </div>

          <h3 className="text-lg font-bold text-[#1E2321] group-hover:text-[#C85A32] transition-colors leading-snug font-editorial">
            {article.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-[#4A5550] line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-5 pt-3.5 border-t border-[#F2EBE1] flex items-center justify-between text-xs text-[#7A8680]">
          <div className="flex items-center gap-2">
            {author?.avatar && (
              <img src={author.avatar} alt={author.name} className="w-5 h-5 rounded-full object-cover" />
            )}
            <span className="font-medium text-[#2C3330]">{author?.name}</span>
          </div>
          <span>{article.publishedAt}</span>
        </div>
      </div>
    </article>
  );
};
