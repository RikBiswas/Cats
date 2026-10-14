/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomeView } from './views/HomeView';
import { CategoryView } from './views/CategoryView';
import { ArticleView } from './views/ArticleView';
import { ReviewView } from './views/ReviewView';
import { ToolsView } from './views/ToolsView';
import { SearchView } from './views/SearchView';
import { AboutView } from './views/AboutView';
import { EditorialPolicyView } from './views/EditorialPolicyView';
import { ContactView } from './views/ContactView';
import { LegalView } from './views/LegalView';
import { CommunityView } from './views/CommunityView';
import { ArrowLeft, Compass, HeartPulse, Sparkles } from 'lucide-react';

const MainRouter: React.FC = () => {
  const { currentRoute, navigate } = useNavigation();

  const renderView = () => {
    switch (currentRoute.view) {
      case 'home':
        return <HomeView />;
      case 'category':
        return <CategoryView slug={currentRoute.params.slug || 'cat-health'} />;
      case 'article':
        return <ArticleView slug={currentRoute.params.slug || 'feline-chronic-kidney-disease-guide'} />;
      case 'review':
        return <ReviewView slug={currentRoute.params.slug || 'ziwi-peak-wet-canned-cat-food-review'} />;
      case 'tools':
        return <ToolsView toolSlug={currentRoute.params.toolSlug} />;
      case 'search':
        return <SearchView />;
      case 'about':
        return <AboutView />;
      case 'editorial-policy':
        return <EditorialPolicyView />;
      case 'contact':
        return <ContactView />;
      case 'privacy':
        return <LegalView type="privacy" />;
      case 'terms':
        return <LegalView type="terms" />;
      case 'community':
        return <CommunityView />;
      case 'notFound':
      default:
        return (
          <div className="min-h-[60vh] flex items-center justify-center py-16 px-4 bg-[#FAF7F2]">
            <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-[#E8E1D7] text-center space-y-4 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-[#FBF0EB] text-[#C85A32] mx-auto flex items-center justify-center">
                <Compass className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">Page Not Found</span>
              <h1 className="text-2xl font-bold text-[#1E2321] font-editorial">
                We Couldn’t Find That Feline Resource
              </h1>
              <p className="text-xs text-[#596560] leading-relaxed">
                The article or guide you’re looking for might have been relocated or updated under our continuous clinical review process.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => navigate('/')}
                  className="w-full py-2.5 bg-[#C85A32] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#AD4B26] transition-colors cursor-pointer"
                >
                  Return to Homepage
                </button>
                <button
                  onClick={() => navigate('/tools')}
                  className="w-full py-2 bg-[#FAF7F2] text-[#1E2321] text-xs font-semibold rounded-xl hover:bg-[#F2EBE1] transition-colors cursor-pointer"
                >
                  Browse Interactive Tools
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Header />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <MainRouter />
    </NavigationProvider>
  );
}
