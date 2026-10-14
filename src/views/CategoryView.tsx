import React, { useState, useMemo } from 'react';
import { Filter, Search, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { getCategoryBySlug, CATEGORIES } from '../data/categories';
import { ARTICLES, getArticlesByCategory } from '../data/articles';
import { REVIEWS } from '../data/reviews';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ArticleCard } from '../components/cards/ArticleCard';
import { ReviewCard } from '../components/cards/ReviewCard';

interface CategoryViewProps {
  slug: string;
}

export const CategoryView: React.FC<CategoryViewProps> = ({ slug }) => {
  const { navigate } = useNavigation();
  const category = getCategoryBySlug(slug) || CATEGORIES[0];
  const isReviewsCategory = slug === 'product-reviews';

  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [searchFilter, setSearchFilter] = useState<string>('');

  const allCategoryArticles = useMemo(() => {
    return getArticlesByCategory(category.id);
  }, [category.id]);

  const filteredArticles = useMemo(() => {
    return allCategoryArticles.filter(art => {
      if (selectedSubcategory !== 'all' && art.subcategoryId !== selectedSubcategory) {
        return false;
      }
      if (searchFilter.trim()) {
        const query = searchFilter.toLowerCase();
        return (
          art.title.toLowerCase().includes(query) ||
          art.excerpt.toLowerCase().includes(query) ||
          art.tags.some(t => t.toLowerCase().includes(query))
        );
      }
      return true;
    });
  }, [allCategoryArticles, selectedSubcategory, searchFilter]);

  const featuredArticle = allCategoryArticles.find(a => a.featured) || allCategoryArticles[0];

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-6 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: category.name }]} />

        {/* Category Hero Banner */}
        <header className="mt-4 mb-10 bg-white rounded-3xl border border-[#E8E1D7] p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-3 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
              Feline Knowledge Base
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2321] font-editorial">
              {category.name}
            </h1>
            <p className="text-sm sm:text-base text-[#4A5550] leading-relaxed">
              {category.fullDescription}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-[#7A8680]">
              <span><strong>{category.articleCount || allCategoryArticles.length}</strong> Published Resources</span>
              <span>·</span>
              <span>Peer-Reviewed Clinical Data</span>
            </div>
          </div>
        </header>

        {/* Subcategories Filter Pills / Interactive Controls */}
        {category.subcategories && category.subcategories.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7A8680]">
                Explore Specific Subtopics
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedSubcategory('all')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl border transition-colors cursor-pointer ${
                  selectedSubcategory === 'all'
                    ? 'bg-[#1E2321] text-white border-[#1E2321]'
                    : 'bg-white text-[#4A5550] border-[#D5CCC0] hover:border-[#1E2321]'
                }`}
              >
                All {category.name} ({allCategoryArticles.length})
              </button>
              {category.subcategories.map(sub => (
                <button
                  key={sub.id}
                  onClick={() => setSelectedSubcategory(sub.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-xl border transition-colors cursor-pointer ${
                    selectedSubcategory === sub.id
                      ? 'bg-[#1E2321] text-white border-[#1E2321]'
                      : 'bg-white text-[#4A5550] border-[#D5CCC0] hover:border-[#1E2321]'
                  }`}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Reviews Showcase if in Reviews Category */}
        {isReviewsCategory && (
          <section className="mb-14 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">Hands-On Field Tests</span>
                <h2 className="text-2xl font-bold text-[#1E2321] font-editorial">Featured Product Reviews</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {REVIEWS.map(rev => (
                <ReviewCard key={rev.id} review={rev} />
              ))}
            </div>
          </section>
        )}

        {/* Featured Category Story (When in 'all' view and not searching) */}
        {selectedSubcategory === 'all' && !searchFilter && featuredArticle && !isReviewsCategory && (
          <div className="mb-12">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#7A8680] mb-4">
              Featured in {category.name}
            </h2>
            <ArticleCard article={featuredArticle} layout="horizontal" />
          </div>
        )}

        {/* Article Grid Section */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E1D7] pb-4">
            <h2 className="text-xl font-bold text-[#1E2321] font-editorial">
              {selectedSubcategory === 'all'
                ? `All ${category.name} Articles`
                : `${category.subcategories.find(s => s.id === selectedSubcategory)?.name || 'Filtered Articles'}`}
            </h2>

            {/* Quick in-category keyword filter */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                value={searchFilter}
                onChange={e => setSearchFilter(e.target.value)}
                placeholder="Filter this category..."
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[#D5CCC0] rounded-xl focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] outline-none"
              />
              <Search className="w-3.5 h-3.5 text-[#7A8680] absolute left-2.5 top-2.5 pointer-events-none" />
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-[#D5CCC0] p-6">
              <p className="text-sm font-semibold text-[#1E2321]">No articles found matching your filter</p>
              <p className="text-xs text-[#596560] mt-1">Try clearing your keyword or switching subcategories.</p>
              <button
                onClick={() => {
                  setSelectedSubcategory('all');
                  setSearchFilter('');
                }}
                className="mt-3 px-4 py-1.5 text-xs bg-[#1E2321] text-white rounded-lg hover:bg-[#2C3330] cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map(art => (
                <ArticleCard key={art.id} article={art} layout="vertical" />
              ))}
            </div>
          )}
        </section>

        {/* Other categories jump list */}
        <section className="mt-18 pt-10 border-t border-[#E8E1D7]">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#7A8680] mb-4">
            Explore Other Feline Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {CATEGORIES.filter(c => c.id !== category.id).map(c => (
              <button
                key={c.id}
                onClick={() => navigate(`/category/${c.slug}`)}
                className="p-3.5 bg-white rounded-xl border border-[#E8E1D7] hover:border-[#C85A32] text-left transition-all cursor-pointer group"
              >
                <span className="block text-xs font-bold text-[#1E2321] group-hover:text-[#C85A32]">
                  {c.name}
                </span>
                <span className="text-[10px] text-[#7A8680] line-clamp-1 mt-0.5">
                  {c.shortDescription}
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
