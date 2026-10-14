import React from 'react';
import { ShieldCheck, Heart, Mail, ExternalLink, ArrowUp } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { CATEGORIES } from '../../data/categories';

export const Footer: React.FC = () => {
  const { navigate } = useNavigation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C201E] text-[#D8E0DC] border-t border-[#2D3430] mt-20">
      {/* Upper Footer: Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#2C3330]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#C85A32] text-white flex items-center justify-center font-bold text-lg">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5c-3.3 0-6 2.7-6 6v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7c0-3.3-2.7-6-6-6Z" />
                  <path d="M6 9 3 5" />
                  <path d="M18 9l3-4" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-editorial">
                Whisker<span className="text-[#C85A32]">Wise</span>
              </span>
            </div>
            <p className="text-xs text-[#95A39D] leading-relaxed">
              An independent feline digital publication dedicated to evidence-based cat healthcare, biological nutrition, environmental enrichment, and hands-on product reviews.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C85A32]">
              <ShieldCheck className="w-4 h-4 text-[#C85A32]" />
              <span className="font-medium text-[#E0E7E3]">Strict No-Paid-Reviews Policy</span>
            </div>
          </div>

          {/* Categories Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Cat Care Categories
            </h4>
            <ul className="space-y-2 text-xs text-[#95A39D]">
              {CATEGORIES.slice(0, 6).map(cat => (
                <li key={cat.id}>
                  <button
                    onClick={() => navigate(`/category/${cat.slug}`)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Tools & Reviews Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Tools & Reviews
            </h4>
            <ul className="space-y-2 text-xs text-[#95A39D]">
              <li>
                <button onClick={() => navigate('/tools')} className="hover:text-white transition-colors cursor-pointer">
                  Interactive Care Tools Hub
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/tools')} className="hover:text-white transition-colors cursor-pointer">
                  Cat Age to Human Calculator
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/tools')} className="hover:text-white transition-colors cursor-pointer">
                  Cat Name Finder (100+ Styles)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/tools')} className="hover:text-white transition-colors cursor-pointer">
                  Daily Calorie & Portion Calculator
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/category/product-reviews')} className="hover:text-white transition-colors cursor-pointer">
                  Cat Food & Litter Lab Reviews
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/community')} className="hover:text-white transition-colors cursor-pointer">
                  Community & Resource Guides
                </button>
              </li>
            </ul>
          </div>

          {/* Editorial & Trust Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Editorial Standards
            </h4>
            <ul className="space-y-2 text-xs text-[#95A39D]">
              <li>
                <button onClick={() => navigate('/about')} className="hover:text-white transition-colors cursor-pointer">
                  About WhiskerWise
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/editorial-policy')} className="hover:text-white transition-colors cursor-pointer">
                  Editorial Guidelines & Vet Review
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/editorial-policy')} className="hover:text-white transition-colors cursor-pointer">
                  Affiliate Disclosure Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact Editorial Team
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/privacy')} className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/terms')} className="hover:text-white transition-colors cursor-pointer">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mandatory Veterinary Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-b border-[#2C3330] text-[11px] text-[#86948E] leading-relaxed">
        <p>
          <strong className="text-[#C8D1CD]">Veterinary Medical Disclaimer:</strong> The articles, calculators, reviews, and clinical explanations published on WhiskerWise are provided strictly for educational and informational purposes. They are not intended as, and must never be treated as, a substitute for professional veterinary advice, diagnosis, or clinical treatment. If your cat exhibits signs of acute distress, urethral straining, lethargy, or sudden anorexia, please contact your licensed local veterinarian or 24-hour emergency animal hospital immediately.
        </p>
      </div>

      {/* Bottom Bar: Copyright & Back to Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A8680] gap-4">
        <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-center sm:text-left">
          <span>&copy; {new Date().getFullYear()} WhiskerWise Media. All rights reserved.</span>
          <span>·</span>
          <span>Configurable Cat Care Brand</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#A1B0AA] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
