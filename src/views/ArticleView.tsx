import React, { useState, useEffect } from 'react';
import { Clock, ShieldCheck, Calendar, Share2, Copy, Check, Bookmark, ArrowLeft, ExternalLink, Info, AlertTriangle, Stethoscope } from 'lucide-react';
import { Article } from '../types';
import { ARTICLES, getArticleBySlug, getArticlesByCategory } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { AUTHORS, REVIEWERS } from '../data/authors';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ArticleCard } from '../components/cards/ArticleCard';

interface ArticleViewProps {
  slug: string;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ slug }) => {
  const { navigate } = useNavigation();
  const article = getArticleBySlug(slug) || ARTICLES[0];
  const category = CATEGORIES.find(c => c.id === article.categoryId);
  const author = AUTHORS[article.authorId];
  const reviewer = article.reviewerId ? REVIEWERS[article.reviewerId] : undefined;

  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [copied, setCopied] = useState(false);

  // Set document title dynamically
  useEffect(() => {
    document.title = `${article.title} — WhiskerWise`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', article.excerpt);
    }
  }, [article]);

  // Track active section for table of contents
  useEffect(() => {
    const handleScroll = () => {
      const sections = article.sections.map(s => document.getElementById(s.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSectionId(el.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSectionId(id);
    }
  };

  const relatedArticles = getArticlesByCategory(article.categoryId)
    .filter(a => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-6 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb trail */}
        <Breadcrumbs
          items={[
            { label: category?.name || 'Cat Care', path: `/category/${category?.slug || 'cat-health'}` },
            { label: article.title }
          ]}
        />

        {/* Article Header */}
        <header className="mt-4 mb-8 space-y-4">
          {/* Zero-Pill Unboxed Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#596560]">
            <button
              onClick={() => navigate(`/category/${category?.slug}`)}
              className="font-bold text-[#C85A32] uppercase tracking-wider text-xs hover:underline cursor-pointer"
            >
              {category?.name}
            </button>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Published {article.publishedAt}
            </span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>Updated {article.updatedAt}</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readingTimeMinutes} min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2321] font-editorial leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#4A5550] leading-relaxed max-w-4xl font-normal">
            {article.excerpt}
          </p>

          {/* Author and Reviewer Box */}
          <div className="pt-4 pb-2 border-y border-[#E8E1D7] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              {/* Written by */}
              <div className="flex items-center gap-3">
                {author?.avatar && (
                  <img src={author.avatar} alt={author.name} className="w-10 h-10 rounded-full object-cover border border-[#D5CCC0]" />
                )}
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#7A8680] font-semibold block">
                    Written By
                  </span>
                  <span className="text-sm font-bold text-[#1E2321]">{author?.name}</span>
                  <span className="block text-xs text-[#596560]">{author?.role}</span>
                </div>
              </div>

              {/* Reviewed by */}
              {reviewer && (
                <div className="flex items-center gap-3 pl-0 md:pl-6 md:border-l border-[#E8E1D7]">
                  {reviewer.avatar && (
                    <img src={reviewer.avatar} alt={reviewer.name} className="w-10 h-10 rounded-full object-cover border border-[#D5CCC0]" />
                  )}
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#2D634C] font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Medically Reviewed By
                    </span>
                    <span className="text-sm font-bold text-[#1E2321]">{reviewer.name}</span>
                    <span className="block text-xs text-[#596560]">{reviewer.credentials}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Sharing actions */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D5CCC0] bg-white text-xs font-medium text-[#2C3330] hover:border-[#1E2321] transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <figure className="mb-10">
          <div className="aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-neutral-200 border border-[#E8E1D7] shadow-sm">
            <img
              src={article.featuredImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          {article.imageCaption && (
            <figcaption className="mt-2 text-center text-xs text-[#7A8680] italic">
              {article.imageCaption}
            </figcaption>
          )}
        </figure>

        {/* Key Takeaways Callout Box */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="bg-[#FAF7F2] p-6 rounded-2xl border-2 border-[#E6DFD5] mb-10 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#C85A32] flex items-center gap-1.5 mb-3">
              <Info className="w-4 h-4 text-[#C85A32]" />
              <span>Key Editorial Takeaways</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#2C3330]">
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#C85A32] mt-1.5 flex-shrink-0" />
                  <span className="leading-relaxed font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Content Layout with Sticky Table of Contents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Table of Contents Sidebar */}
          <aside className="lg:col-span-4 sticky top-24 order-2 lg:order-1">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E1D7] shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E2321] border-b border-[#F2EBE1] pb-2">
                Table of Contents
              </h3>
              <nav aria-label="Table of Contents">
                <ul className="space-y-1.5 text-xs">
                  {article.tableOfContents.map(item => {
                    const isActive = activeSectionId === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full text-left py-1.5 px-2 rounded-lg transition-colors cursor-pointer ${
                            isActive
                              ? 'bg-[#FAF7F2] text-[#C85A32] font-semibold pl-3 border-l-2 border-[#C85A32]'
                              : 'text-[#4A5550] hover:text-[#1E2321] hover:bg-[#FAF7F2]'
                          }`}
                        >
                          {item.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="pt-4 border-t border-[#F2EBE1] space-y-3">
                <div className="p-3 bg-[#EFF6F1] rounded-xl border border-[#D0E2D6] text-[11px] text-[#2C3330]">
                  <div className="flex items-center gap-1 font-bold text-[#2D634C] mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Veterinary Certified</span>
                  </div>
                  <p className="text-[#3E4F46] leading-relaxed">
                    This content has undergone independent medical review for evidence accuracy.
                  </p>
                </div>

                <button
                  onClick={() => navigate('/tools')}
                  className="w-full py-2 px-3 text-center text-xs font-semibold text-[#C85A32] bg-[#FAF7F2] hover:bg-[#F2EBE1] rounded-xl transition-colors cursor-pointer"
                >
                  Explore Interactive Cat Tools →
                </button>
              </div>
            </div>
          </aside>

          {/* Right Article Body Column */}
          <article className="lg:col-span-8 order-1 lg:order-2 space-y-10">
            {article.sections.map(section => (
              <section key={section.id} id={section.id} className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2321] font-editorial leading-snug">
                  {section.heading}
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-[#2C3330] leading-relaxed">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {section.bulletPoints && (
                  <ul className="space-y-2 text-sm text-[#2C3330] my-4 pl-2">
                    {section.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1E2321] mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Callout Box */}
                {section.callout && (
                  <div
                    className={`p-5 rounded-2xl border my-5 ${
                      section.callout.type === 'safety'
                        ? 'bg-rose-50 border-rose-200 text-rose-950'
                        : section.callout.type === 'vet-note'
                        ? 'bg-[#EFF6F1] border-[#D0E2D6] text-[#1E3B2F]'
                        : 'bg-amber-50 border-amber-200 text-amber-950'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider mb-1.5">
                      {section.callout.type === 'safety' ? (
                        <AlertTriangle className="w-4 h-4 text-rose-600" />
                      ) : section.callout.type === 'vet-note' ? (
                        <Stethoscope className="w-4 h-4 text-[#2D634C]" />
                      ) : (
                        <Info className="w-4 h-4 text-amber-600" />
                      )}
                      <span>{section.callout.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      {section.callout.text}
                    </p>
                  </div>
                )}

                {/* Data Table */}
                {section.tableData && (
                  <div className="overflow-x-auto my-6 rounded-2xl border border-[#E8E1D7] bg-white shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="bg-[#FAF7F2] border-b border-[#E8E1D7]">
                          {section.tableData.headers.map((header, hIdx) => (
                            <th key={hIdx} className="py-3 px-4 font-bold text-[#1E2321]">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#F2EBE1]">
                        {section.tableData.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-[#FAF7F2]/50 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="py-3 px-4 text-[#4A5550]">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            {/* Evidence & References Section */}
            {article.references && article.references.length > 0 && (
              <div className="mt-12 pt-8 border-t border-[#E8E1D7] space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#1E2321] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2D634C]" />
                  <span>Clinical Evidence & Scientific References</span>
                </h3>
                <p className="text-xs text-[#596560]">
                  WhiskerWise articles strictly reference peer-reviewed veterinary journals, institutional guidelines, and academic research:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-xs text-[#4A5550]">
                  {article.references.map((ref, idx) => (
                    <li key={idx} className="leading-relaxed">
                      <strong>{ref.citation}</strong> — <em>{ref.source}</em> ({ref.year}).
                      {ref.url && (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#C85A32] hover:underline ml-1"
                        >
                          Source <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Author Bio Box */}
            <div className="p-6 bg-white rounded-2xl border border-[#E8E1D7] flex flex-col sm:flex-row items-start gap-4">
              {author?.avatar && (
                <img src={author.avatar} alt={author.name} className="w-16 h-16 rounded-2xl object-cover border border-[#E8E1D7] flex-shrink-0" />
              )}
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#C85A32]">About the Author</span>
                <h4 className="text-base font-bold text-[#1E2321]">{author?.name}</h4>
                <p className="text-xs text-[#596560] font-medium">{author?.credentials}</p>
                <p className="text-xs text-[#4A5550] leading-relaxed pt-1">{author?.bio}</p>
              </div>
            </div>
          </article>
        </div>

        {/* Related Articles Grid */}
        {relatedArticles.length > 0 && (
          <section className="mt-20 pt-12 border-t border-[#E8E1D7]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-[#1E2321] font-editorial">
                Related {category?.name || 'Cat Care'} Guides
              </h3>
              <button
                onClick={() => navigate(`/category/${category?.slug}`)}
                className="text-xs font-semibold text-[#C85A32] hover:underline cursor-pointer"
              >
                View all in {category?.name} →
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map(rel => (
                <ArticleCard key={rel.id} article={rel} layout="vertical" />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
