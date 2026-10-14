export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  subcategories: Subcategory[];
  articleCount?: number;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  credentials: string;
  avatar: string;
  articlesWritten: number;
}

export interface Reviewer {
  id: string;
  name: string;
  credentials: string; // e.g. DVM, DACVIM, MRCVS
  title: string;
  bio: string;
  avatar: string;
  verifiedStatus: string;
}

export interface TableOfContentItem {
  id: string;
  title: string;
}

export interface ArticleSection {
  id: string;
  heading: string;
  content: string[]; // array of paragraphs
  bulletPoints?: string[];
  callout?: {
    type: 'vet-note' | 'safety' | 'quick-tip';
    title: string;
    text: string;
  };
  tableData?: {
    headers: string[];
    rows: string[][];
  };
}

export interface ReferenceItem {
  citation: string;
  source: string;
  year: number;
  url?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  imageCaption: string;
  categoryId: string;
  subcategoryId?: string;
  tags: string[];
  authorId: string;
  reviewerId?: string;
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  featured?: boolean;
  popular?: boolean;
  keyTakeaways: string[];
  tableOfContents: TableOfContentItem[];
  sections: ArticleSection[];
  references: ReferenceItem[];
}

export interface ProductCriteriaScores {
  speciesAppropriateness: number; // /10
  ingredientQuality: number;      // /10
  varietyAndTaste: number;        // /10
  priceValue: number;             // /10
  recallSafety: number;           // /10
}

export interface ComparisonProduct {
  name: string;
  rating: number;
  badge: string;
  priceTier: '$' | '$$' | '$$$';
  keyAdvantage: string;
  image: string;
}

export interface ProductReview {
  id: string;
  slug: string;
  title: string;
  productName: string;
  brand: string;
  categoryId: string; // e.g. 'cat-food', 'cat-litter', 'accessories'
  featuredImage: string;
  overallRating: number; // 0 - 10
  verdict: string;
  scores: ProductCriteriaScores;
  pros: string[];
  cons: string[];
  specifications: Record<string, string>;
  bestFor: string;
  whoShouldAvoid: string;
  keySummaryPoints: string[];
  comparisonProducts: ComparisonProduct[];
  authorId: string;
  reviewerId?: string;
  publishedAt: string;
  updatedAt: string;
  affiliateDisclaimer: string;
}

export interface CatName {
  id: string;
  name: string;
  gender: 'female' | 'male' | 'unisex';
  style: 'cute' | 'majestic' | 'food' | 'nature' | 'literary' | 'vintage';
  coats: string[]; // e.g. ['Orange', 'Tabby', 'Any']
  meaning: string;
  origin: string;
  popularityRank: number;
}

export interface ToolMeta {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  badgeText: string;
}
