import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, HeartPulse, Salad, Brain, Baby, Scissors, BookOpen, Star, CheckCircle, Calculator } from 'lucide-react';
import { ARTICLES, getFeaturedArticles } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { REVIEWS } from '../data/reviews';
import { TOOLS_LIST } from '../data/tools';
import { useNavigation } from '../context/NavigationContext';
import { ArticleCard } from '../components/cards/ArticleCard';
import { ReviewCard } from '../components/cards/ReviewCard';
import { NewsletterSection } from '../components/common/NewsletterSection';

export const HomeView: React.FC = () => {
  const { navigate } = useNavigation();

  const featuredStory = ARTICLES.find(a => a.id === 'feline-chronic-kidney-disease-guide') || ARTICLES[0];
  const supportingStories = ARTICLES.filter(a => a.id !== featuredStory.id).slice(0, 3);
  const recentArticles = ARTICLES.slice(0, 6);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-[#C85A32]" />;
      case 'Salad': return <Salad className="w-5 h-5 text-[#2D634C]" />;
      case 'Brain': return <Brain className="w-5 h-5 text-[#C85A32]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#E5A83B]" />;
      case 'Baby': return <Baby className="w-5 h-5 text-[#2D634C]" />;
      case 'Scissors': return <Scissors className="w-5 h-5 text-[#C85A32]" />;
      case 'CheckCircle2': return <CheckCircle className="w-5 h-5 text-[#2D634C]" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-[#C85A32]" />;
      default: return <HeartPulse className="w-5 h-5 text-[#C85A32]" />;
    }
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* 1. Hero / Featured Content Section */}
      <section className="pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-[#E8E1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Editorial Banner Kicker */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C85A32]" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#1E2321]">
                Today's Featured Investigation
              </h2>
            </div>
            <span className="text-xs text-[#7A8680] hidden sm:inline">
              Evidence-based feline medicine & biology
            </span>
          </div>

          {/* Hero Grid: Big feature on Left, 3 Supporting on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Primary Large Featured Story */}
            <div
              onClick={() => navigate(`/articles/${featuredStory.slug}`)}
              className="lg:col-span-7 group bg-white rounded-3xl border border-[#E8E1D7] overflow-hidden hover:border-[#D5C9BC] hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden bg-neutral-100 relative">
                <img
                  src={featuredStory.featuredImage}
                  alt={featuredStory.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#1E2321] text-white px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Lead Story · Clinically Reviewed</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                {/* Zero-Pill Clean Metadata */}
                <div className="flex items-center gap-2 text-xs text-[#596560]">
                  <span className="font-bold text-[#C85A32] uppercase tracking-wider text-xs">
                    Cat Health
                  </span>
                  <span aria-hidden="true" className="text-neutral-300">·</span>
                  <span>{featuredStory.readingTimeMinutes} min read</span>
                  <span aria-hidden="true" className="text-neutral-300">·</span>
                  <span>Updated {featuredStory.updatedAt}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E2321] group-hover:text-[#C85A32] transition-colors leading-tight font-editorial">
                  {featuredStory.title}
                </h3>

                <p className="text-sm text-[#4A5550] leading-relaxed line-clamp-3">
                  {featuredStory.excerpt}
                </p>

                <div className="pt-4 border-t border-[#F2EBE1] flex items-center justify-between text-xs text-[#7A8680]">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#1E2321]">WhiskerWise Editorial Board</span>
                  </div>
                  <span className="font-semibold text-[#C85A32] group-hover:underline flex items-center gap-1">
                    Read Investigation <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Supporting Top Stories Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#E8E1D7]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#7A8680]">
                  Essential Readings
                </h3>
                <button
                  onClick={() => navigate('/category/cat-nutrition')}
                  className="text-xs text-[#C85A32] font-semibold hover:underline cursor-pointer"
                >
                  Explore All Guides →
                </button>
              </div>

              <div className="space-y-4">
                {supportingStories.map(story => (
                  <ArticleCard key={story.id} article={story} layout="horizontal" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Popular Cat-Care Categories Section */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#E8E1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
              Feline Knowledge Base
            </span>
            <h2 className="text-3xl font-bold text-[#1E2321] font-editorial">
              Explore Cat Care by Category
            </h2>
            <p className="text-xs sm:text-sm text-[#596560]">
              Veterinary-reviewed medical advice, carnivore nutrition analysis, environmental enrichment, and breed care.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => navigate(`/category/${category.slug}`)}
                className="group p-5 sm:p-6 bg-[#FAF7F2] rounded-2xl border border-[#E8E1D7] hover:border-[#C85A32] hover:bg-white hover:shadow-md transition-all text-left flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E1D7] group-hover:border-[#C85A32] flex items-center justify-center mb-4 transition-colors">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-[#1E2321] group-hover:text-[#C85A32] font-editorial transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#596560] mt-1.5 line-clamp-2 leading-relaxed">
                    {category.shortDescription}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E8E1D7] flex items-center justify-between text-[11px] text-[#7A8680]">
                  <span>{category.articleCount} Articles</span>
                  <span className="font-semibold text-[#C85A32] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Recent Articles Section */}
      <section className="py-14 sm:py-18 border-b border-[#E8E1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
                Latest Dispatches
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2321] font-editorial mt-1">
                Recent Feline Health & Care Guides
              </h2>
            </div>
            <button
              onClick={() => navigate('/category/cat-health')}
              className="text-xs font-bold uppercase tracking-wider text-[#C85A32] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map(article => (
              <ArticleCard key={article.id} article={article} layout="vertical" />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Product Reviews Section (Cats.com Style Standard) */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#E8E1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2D634C] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Unbiased Hands-On Lab Testing</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2321] font-editorial mt-1">
                Vetted Cat Food & Product Reviews
              </h2>
              <p className="text-xs sm:text-sm text-[#596560] mt-1 max-w-2xl">
                Evaluated against the Cats.com 5-pillar review standard: species-appropriateness, ingredient purity, safety recall records, and real-world value.
              </p>
            </div>
            <button
              onClick={() => navigate('/category/product-reviews')}
              className="text-xs font-bold uppercase tracking-wider text-[#C85A32] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>All Product Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive Cat-Care Tools Showcase */}
      <section className="py-14 sm:py-18 border-b border-[#E8E1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1E2321] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C85A32] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Care Suite</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-editorial">
                Clinical Calculators & Feline Tools
              </h2>
              <p className="text-sm text-[#A8B5AF] leading-relaxed">
                Make precise nutrition, life-stage, and care decisions backed by veterinary formulas. Try our interactive tools below with instant results.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {TOOLS_LIST.slice(0, 3).map(tool => (
                  <button
                    key={tool.id}
                    onClick={() => navigate(`/tools/${tool.slug}`)}
                    className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 text-left transition-all cursor-pointer group"
                  >
                    <span className="text-[10px] uppercase font-bold text-[#C85A32] block mb-1">
                      {tool.badgeText}
                    </span>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#E5A83B] transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-xs text-[#86948E] mt-1 line-clamp-2">
                      {tool.tagline}
                    </p>
                    <span className="inline-flex items-center text-xs font-semibold text-[#C85A32] mt-3 group-hover:underline">
                      Launch Tool →
                    </span>
                  </button>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => navigate('/tools')}
                  className="px-6 py-3 bg-[#C85A32] hover:bg-[#AD4B26] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-sm"
                >
                  View All Interactive Tools
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Cat Stories & Community Showcase */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#E8E1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
                Cat Stories & Rescue Memoirs
              </span>
              <h2 className="text-3xl font-bold text-[#1E2321] font-editorial leading-tight">
                From Feral to Purr Machine: Oliver’s Journey
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5550] leading-relaxed">
                Trapped behind an abandoned garage in freezing temperatures, Oliver hissed at every shadow. Read how patient desensitization and quiet room-sharing helped a feral survivor discover safety.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate('/articles/olivers-rescue-journey-from-feral-to-purr')}
                  className="px-5 py-2.5 bg-[#1E2321] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#2C3330] transition-colors cursor-pointer"
                >
                  Read Oliver's Story
                </button>
                <button
                  onClick={() => navigate('/community')}
                  className="px-5 py-2.5 bg-[#FAF7F2] text-[#1E2321] text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#F2EBE1] transition-colors cursor-pointer"
                >
                  Join Guardian Community
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 aspect-[16/10] rounded-3xl overflow-hidden bg-neutral-100 border border-[#E8E1D7] shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=80"
                alt="Oliver the tabby rescue cat resting peacefully on soft blanket"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Newsletter Subscription Section */}
      <NewsletterSection />
    </div>
  );
};
