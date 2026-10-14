import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { navigate } = useNavigation();

  // Generate BreadcrumbList Schema.org JSON-LD
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: window.location.origin + '#'
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        ...(item.path ? { item: window.location.origin + '#' + item.path } : {})
      }))
    ]
  };

  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs text-[#596560]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 hover:text-[#C85A32] transition-colors cursor-pointer text-[#4A5550]"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-[#A8B5AF]" />
              {isLast || !item.path ? (
                <span className="text-[#1E2321] font-medium line-clamp-1 max-w-[240px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => navigate(item.path!)}
                  className="hover:text-[#C85A32] transition-colors cursor-pointer line-clamp-1"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
