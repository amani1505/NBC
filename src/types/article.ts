export interface Article {
    id: string;
    image: string;
    date: string;
    title: string;
    description: string;
    category?: string;
    badgeText?: string;
    featured?: boolean;
  }