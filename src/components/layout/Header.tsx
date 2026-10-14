import React, { useState } from 'react';
import { Search, Menu, X, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { CATEGORIES } from '../../data/categories';

export const Header: React.FC = () => {
  const { navigate, currentRoute } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
      setSearchOpen(false);
      setSearchInput('');
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Health', path: '/category/cat-health' },
    { label: 'Nutrition', path: '/category/cat-nutrition' },
    { label: 'Behavior', path: '/category/cat-behavior' },
    { label: 'Breeds', path: '/category/cat-breeds' },
    { label: 'Kitten Care', path: '/category/kitten-care' },
    { label: 'Reviews', path: '/category/product-reviews' },
    { label: 'Tools', path: '/tools' },
    { label: 'Community', path: '/community' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E6DFD5]">
      {/* Top Credibility Notice Bar */}
      <div className="bg-[#1E2321] text-[#E8ECE9] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C85A32]" />
            <span className="font-medium">Independent Feline Care & Medical Evidence</span>
            <span className="hidden sm:inline text-neutral-400">·</span>
            <span className="hidden sm:inline text-neutral-300">Reviewed by Licensed Veterinarians & Nutritionists</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-neutral-300">
            <button
              onClick={() => navigate('/editorial-policy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Editorial Standards
            </button>
            <span className="text-neutral-500">|</span>
            <button
              onClick={() => navigate('/tools')}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-[#C85A32]" />
              Cat Tools
            </button>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="group flex items-center gap-2.5 text-left focus-visible:outline-none"
              aria-label="WhiskerWise Home"
            >
              <div className="w-10 h-10 rounded-xl bg-[#C85A32] text-white flex items-center justify-center font-bold text-xl shadow-sm transition-transform group-hover:scale-105">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5c-3.3 0-6 2.7-6 6v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7c0-3.3-2.7-6-6-6Z" />
                  <path d="M6 9 3 5" />
                  <path d="M18 9l3-4" />
                  <path d="M10 14h.01" />
                  <path d="M14 14h.01" />
                  <path d="M12 17a1 1 0 0 0 1-1h-2a1 1 0 0 0 1 1Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-[#1E2321] font-editorial leading-none">
                  Whisker<span className="text-[#C85A32]">Wise</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#596560] font-semibold mt-0.5">
                  Feline Care & Science
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map(link => {
              const isActive = currentRoute.path === link.path || (link.path.startsWith('/category/') && currentRoute.path.includes(link.path.replace('/category/', '')));
              return (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative cursor-pointer ${
                    isActive ? 'text-[#C85A32] font-semibold' : 'text-[#2C3330] hover:text-[#C85A32]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C85A32] rounded-full" />
                  )}
                </button>
              );
            })}

            {/* Categories dropdown toggle */}
            <div className="relative">
              <button
                onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
                onBlur={() => setTimeout(() => setCategoriesDropdownOpen(false), 200)}
                className="flex items-center gap-1 px-2.5 py-2 text-sm text-[#596560] hover:text-[#1E2321] transition-colors cursor-pointer"
                aria-expanded={categoriesDropdownOpen}
              >
                <span>All Guides</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {categoriesDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-[#E6DFD5] py-2 z-50 divide-y divide-[#F2EBE1]">
                  <div className="p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#7A8680] mb-2 px-1">
                      Cat Care Knowledge Base
                    </p>
                    <div className="grid grid-cols-1 gap-1">
                      {CATEGORIES.map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            navigate(`/category/${cat.slug}`);
                            setCategoriesDropdownOpen(false);
                          }}
                          className="w-full text-left px-2.5 py-2 text-xs font-medium text-[#2C3330] hover:bg-[#FAF7F2] hover:text-[#C85A32] rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                        >
                          <span>{cat.name}</span>
                          <span className="text-[10px] text-[#7A8680]">{cat.articleCount} guides</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="p-2 bg-[#FAF7F2]/60">
                    <button
                      onClick={() => {
                        navigate('/tools');
                        setCategoriesDropdownOpen(false);
                      }}
                      className="w-full text-center text-xs font-semibold text-[#C85A32] hover:underline py-1 cursor-pointer"
                    >
                      Open Interactive Care Tools →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#2C3330] hover:text-[#C85A32] hover:bg-[#F2EBE1] rounded-lg transition-colors cursor-pointer"
              aria-label="Search articles and tools"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Newsletter CTA Button (Desktop) */}
            <button
              onClick={() => {
                const el = document.getElementById('newsletter-section');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/#newsletter-section');
                }
              }}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg bg-[#C85A32] text-white hover:bg-[#AD4B26] shadow-sm transition-colors cursor-pointer"
            >
              Subscribe Free
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#2C3330] hover:text-[#C85A32] hover:bg-[#F2EBE1] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Expandable Quick Search Bar */}
        {searchOpen && (
          <div className="py-3 px-2 border-t border-[#E6DFD5] animate-in fade-in slide-in-from-top-2 duration-150">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <input
                type="search"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder="Search feline health conditions, foods, behaviors, breed guides, or cat names..."
                autoFocus
                className="w-full pl-10 pr-24 py-2.5 text-sm bg-white border border-[#D5CCC0] rounded-xl focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] outline-none text-[#1E2321]"
              />
              <Search className="w-4 h-4 text-[#7A8680] absolute left-3.5 pointer-events-none" />
              <div className="absolute right-2 flex items-center gap-1.5">
                <button
                  type="submit"
                  className="px-3 py-1.5 text-xs font-semibold bg-[#1E2321] text-white rounded-lg hover:bg-[#2C3330] transition-colors cursor-pointer"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="p-1.5 text-neutral-400 hover:text-neutral-700 cursor-pointer"
                  aria-label="Close search"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </form>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-[#596560]">
              <span className="font-medium text-[#7A8680]">Popular:</span>
              <button
                type="button"
                onClick={() => {
                  navigate('/search?q=kidney');
                  setSearchOpen(false);
                }}
                className="hover:text-[#C85A32] hover:underline cursor-pointer"
              >
                Kidney Disease
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => {
                  navigate('/search?q=litter');
                  setSearchOpen(false);
                }}
                className="hover:text-[#C85A32] hover:underline cursor-pointer"
              >
                Best Litter
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => {
                  navigate('/search?q=slow%20blink');
                  setSearchOpen(false);
                }}
                className="hover:text-[#C85A32] hover:underline cursor-pointer"
              >
                Slow Blink
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => {
                  navigate('/tools');
                  setSearchOpen(false);
                }}
                className="hover:text-[#C85A32] hover:underline cursor-pointer"
              >
                Age Calculator
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E6DFD5] bg-white px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#7A8680] px-3 py-1">
              Main Sections
            </p>
            {navLinks.map(link => (
              <button
                key={link.path}
                onClick={() => {
                  navigate(link.path);
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-2 text-sm font-medium text-[#1E2321] hover:bg-[#FAF7F2] hover:text-[#C85A32] rounded-lg transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}

            <div className="pt-3 border-t border-[#F2EBE1]">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#7A8680] px-3 py-1">
                Explore All Topics
              </p>
              <div className="grid grid-cols-2 gap-1 mt-1">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      navigate(`/category/${cat.slug}`);
                      setMobileMenuOpen(false);
                    }}
                    className="text-left px-3 py-1.5 text-xs text-[#4A5550] hover:text-[#C85A32] cursor-pointer"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#F2EBE1] flex flex-col space-y-2">
              <button
                onClick={() => {
                  navigate('/about');
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-1.5 text-xs text-[#596560] hover:text-[#1E2321] cursor-pointer"
              >
                About Our Editorial Board
              </button>
              <button
                onClick={() => {
                  navigate('/editorial-policy');
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-1.5 text-xs text-[#596560] hover:text-[#1E2321] cursor-pointer"
              >
                Editorial Standards & Disclosures
              </button>
              <button
                onClick={() => {
                  navigate('/contact');
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-1.5 text-xs text-[#596560] hover:text-[#1E2321] cursor-pointer"
              >
                Contact the Editors
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
