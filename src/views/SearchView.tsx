import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, Clock, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { REVIEWS } from '../data/reviews';
import { TOOLS_LIST } from '../data/tools';
import { CATEGORIES } from '../data/categories';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ArticleCard } from '../components/cards/ArticleCard';
import { ReviewCard } from '../components/cards/ReviewCard';

export const SearchView: React.FC = () => {
  const { currentRoute, navigate } = useNavigation();
  const [searchTerm, setSearchTerm] = useState(currentRoute.searchQuery || '');
  const [activeFilter, setActiveFilter] = useState<'all' | 'articles' | 'reviews' | 'tools'>('all');

  useEffect(() => {
    if (currentRoute.searchQuery) {
      setSearchTerm(currentRoute.searchQuery);
    }
  }, [currentRoute.searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    navigate('/search');
  };

  const results = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) {
      return { articles: [], reviews: [], tools: [], total: 0 };
    }

    const matchedArticles = ARTICLES.filter(art => {
      return (
        art.title.toLowerCase().includes(q) ||
        art.excerpt.toLowerCase().includes(q) ||
        art.tags.some(t => t.toLowerCase().includes(q)) ||
        art.sections.some(s => s.heading.toLowerCase().includes(q) || s.content.some(c => c.toLowerCase().includes(q)))
      );
    });

    const matchedReviews = REVIEWS.filter(rev => {
      return (
        rev.title.toLowerCase().includes(q) ||
        rev.productName.toLowerCase().includes(q) ||
        rev.brand.toLowerCase().includes(q) ||
        rev.verdict.toLowerCase().includes(q) ||
        rev.pros.some(p => p.toLowerCase().includes(q))
      );
    });

    const matchedTools = TOOLS_LIST.filter(tool => {
      return (
        tool.title.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.tagline.toLowerCase().includes(q)
      );
    });

    return {
      articles: matchedArticles,
      reviews: matchedReviews,
      tools: matchedTools,
      total: matchedArticles.length + matchedReviews.length + matchedTools.length
    };
  }, [searchTerm]);

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-6 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Search' }]} />

        {/* Search Header */}
        <div className="mt-4 mb-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E2321] font-editorial">
            Search WhiskerWise
          </h1>
          <p className="text-sm text-[#596560]">
            Explore clinical articles, nutritional guides, feline behavior protocols, and hands-on product reviews.
          </p>

          {/* Search Input Box */}
          <form onSubmit={handleSearchSubmit} className="relative max-w-3xl">
            <input
              type="search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search by symptom, topic, product, or phrase (e.g. 'kidney', 'food', 'slow blink')..."
              className="w-full pl-12 pr-28 py-3.5 text-base bg-white border border-[#D5CCC0] rounded-2xl focus:border-[#C85A32] focus:ring-2 focus:ring-[#C85A32]/20 outline-none text-[#1E2321] shadow-xs"
            />
            <Search className="w-5 h-5 text-[#7A8680] absolute left-4 top-4 pointer-events-none" />
            <div className="absolute right-2.5 top-2.5 flex items-center gap-1">
              {searchTerm && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="p-1.5 text-neutral-400 hover:text-neutral-700 cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="submit"
                className="px-4 py-2 bg-[#1E2321] text-white text-xs font-semibold rounded-xl hover:bg-[#2C3330] cursor-pointer"
              >
                Search
              </button>
            </div>
          </form>

          {/* Preset Quick Chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#596560] pt-1">
            <span className="font-semibold text-[#7A8680]">Popular Searches:</span>
            {['Kidney Disease', 'Wet Food', 'Maine Coon', 'Litter Robot', 'Age Calculator', 'Slow Blink'].map(term => (
              <button
                key={term}
                onClick={() => {
                  setSearchTerm(term);
                  navigate(`/search?q=${encodeURIComponent(term)}`);
                }}
                className="px-2.5 py-1 rounded-lg bg-white border border-[#D5CCC0] hover:border-[#C85A32] text-[#4A5550] transition-colors cursor-pointer"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Results section */}
        {searchTerm.trim() ? (
          <div className="space-y-8">
            {/* Filter Tabs */}
            <div className="flex items-center justify-between border-b border-[#E8E1D7] pb-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeFilter === 'all'
                      ? 'bg-[#1E2321] text-white'
                      : 'bg-white text-[#4A5550] border border-[#D5CCC0]'
                  }`}
                >
                  All Results ({results.total})
                </button>
                <button
                  onClick={() => setActiveFilter('articles')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeFilter === 'articles'
                      ? 'bg-[#1E2321] text-white'
                      : 'bg-white text-[#4A5550] border border-[#D5CCC0]'
                  }`}
                >
                  Articles ({results.articles.length})
                </button>
                <button
                  onClick={() => setActiveFilter('reviews')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeFilter === 'reviews'
                      ? 'bg-[#1E2321] text-white'
                      : 'bg-white text-[#4A5550] border border-[#D5CCC0]'
                  }`}
                >
                  Reviews ({results.reviews.length})
                </button>
                <button
                  onClick={() => setActiveFilter('tools')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeFilter === 'tools'
                      ? 'bg-[#1E2321] text-white'
                      : 'bg-white text-[#4A5550] border border-[#D5CCC0]'
                  }`}
                >
                  Tools ({results.tools.length})
                </button>
              </div>

              <span className="text-xs text-[#7A8680]">
                Found <strong>{results.total}</strong> items matching "{searchTerm}"
              </span>
            </div>

            {results.total === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-[#D5CCC0] p-8">
                <Search className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#1E2321] font-editorial">
                  No matching resources found for "{searchTerm}"
                </h3>
                <p className="text-xs text-[#596560] max-w-md mx-auto mt-1 mb-6">
                  Check your spelling, or try searching for a broader term such as "nutrition", "behavior", "litter", or "senior".
                </p>
                <button
                  onClick={clearSearch}
                  className="px-5 py-2 bg-[#1E2321] text-white text-xs font-semibold rounded-xl hover:bg-[#2C3330] cursor-pointer"
                >
                  Clear Search Query
                </button>
              </div>
            ) : (
              <div className="space-y-10">
                {/* Tools Matched */}
                {(activeFilter === 'all' || activeFilter === 'tools') && results.tools.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-3">
                      Matching Interactive Tools
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {results.tools.map(tool => (
                        <div
                          key={tool.id}
                          onClick={() => navigate(`/tools/${tool.slug}`)}
                          className="p-5 bg-white rounded-2xl border border-[#E8E1D7] hover:border-[#C85A32] hover:shadow-md transition-all cursor-pointer flex items-start gap-4"
                        >
                          <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#C85A32] flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-[#1E2321]">{tool.title}</h4>
                            <p className="text-xs text-[#596560] mt-1">{tool.description}</p>
                            <span className="inline-flex items-center text-xs font-semibold text-[#C85A32] mt-2">
                              Open Tool →
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Articles Matched */}
                {(activeFilter === 'all' || activeFilter === 'articles') && results.articles.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E2321] mb-4">
                      Matching Articles ({results.articles.length})
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {results.articles.map(art => (
                        <ArticleCard key={art.id} article={art} layout="horizontal" />
                      ))}
                    </div>
                  </div>
                )}

                {/* Reviews Matched */}
                {(activeFilter === 'all' || activeFilter === 'reviews') && results.reviews.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E2321] mb-4">
                      Matching Product Reviews ({results.reviews.length})
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {results.reviews.map(rev => (
                        <ReviewCard key={rev.id} review={rev} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="py-12 text-center bg-white rounded-3xl border border-[#E8E1D7] p-8">
            <h3 className="text-lg font-bold text-[#1E2321] font-editorial mb-2">
              Start typing above to search our feline repository
            </h3>
            <p className="text-xs text-[#596560] max-w-md mx-auto mb-6">
              Search by clinical signs, feline behaviors, specific commercial foods, or cat care questions.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
              {CATEGORIES.slice(0, 4).map(c => (
                <button
                  key={c.id}
                  onClick={() => navigate(`/category/${c.slug}`)}
                  className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E8E1D7] text-xs font-semibold text-[#1E2321] hover:text-[#C85A32] cursor-pointer"
                >
                  Browse {c.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
