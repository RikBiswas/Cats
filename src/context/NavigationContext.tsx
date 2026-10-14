import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface RouteState {
  path: string;
  view: 'home' | 'category' | 'article' | 'review' | 'tools' | 'search' | 'about' | 'editorial-policy' | 'contact' | 'privacy' | 'terms' | 'community' | 'notFound';
  params: Record<string, string>;
  searchQuery: string;
}

interface NavigationContextType {
  currentRoute: RouteState;
  navigate: (to: string) => void;
  favorites: string[];
  toggleFavoriteName: (nameId: string) => void;
  isFavoriteName: (nameId: string) => boolean;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

function parseHash(hashString: string): RouteState {
  const clean = hashString.replace(/^#\/?/, '');
  const [pathname, searchStr] = clean.split('?');
  const searchParams = new URLSearchParams(searchStr || '');
  const searchQuery = searchParams.get('q') || '';

  const segments = (pathname || '').split('/').filter(Boolean);

  if (segments.length === 0) {
    return { path: '/', view: 'home', params: {}, searchQuery };
  }

  const [first, second] = segments;

  if (first === 'category' && second) {
    return { path: `/category/${second}`, view: 'category', params: { slug: second }, searchQuery };
  }
  if (first === 'articles' && second) {
    return { path: `/articles/${second}`, view: 'article', params: { slug: second }, searchQuery };
  }
  if (first === 'reviews' && second) {
    return { path: `/reviews/${second}`, view: 'review', params: { slug: second }, searchQuery };
  }
  if (first === 'tools') {
    return { path: second ? `/tools/${second}` : '/tools', view: 'tools', params: { toolSlug: second || '' }, searchQuery };
  }
  if (first === 'search') {
    return { path: '/search', view: 'search', params: {}, searchQuery };
  }
  if (first === 'about') {
    return { path: '/about', view: 'about', params: {}, searchQuery };
  }
  if (first === 'editorial-policy') {
    return { path: '/editorial-policy', view: 'editorial-policy', params: {}, searchQuery };
  }
  if (first === 'contact') {
    return { path: '/contact', view: 'contact', params: {}, searchQuery };
  }
  if (first === 'privacy') {
    return { path: '/privacy', view: 'privacy', params: {}, searchQuery };
  }
  if (first === 'terms') {
    return { path: '/terms', view: 'terms', params: {}, searchQuery };
  }
  if (first === 'community') {
    return { path: '/community', view: 'community', params: {}, searchQuery };
  }

  return { path: `/${clean}`, view: 'notFound', params: {}, searchQuery };
}

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<RouteState>(() => parseHash(window.location.hash));
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('whiskerwise_favorite_names');
      return stored ? JSON.parse(stored) : ['1', '13', '56'];
    } catch {
      return ['1', '13', '56'];
    }
  });

  useEffect(() => {
    const handleHashChange = () => {
      const route = parseHash(window.location.hash);
      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (to: string) => {
    const targetHash = to.startsWith('#') ? to : `#${to.startsWith('/') ? to : `/${to}`}`;
    if (window.location.hash === targetHash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = targetHash;
    }
  };

  const toggleFavoriteName = (nameId: string) => {
    setFavorites(prev => {
      const updated = prev.includes(nameId) ? prev.filter(id => id !== nameId) : [...prev, nameId];
      try {
        localStorage.setItem('whiskerwise_favorite_names', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const isFavoriteName = (nameId: string) => favorites.includes(nameId);

  return (
    <NavigationContext.Provider value={{ currentRoute, navigate, favorites, toggleFavoriteName, isFavoriteName }}>
      {children}
    </NavigationContext.Provider>
  );
};

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
}
