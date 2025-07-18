export interface AccountType {
    id: string;
    name: string;
    category: 'personal' | 'business';
    customerType: 'individual' | 'corporate';
  }
  
  export interface AccountFeature {
    id: string;
    name: string;
    description?: string;
  }
  
  export interface AccountComparison {
    id: string;
    name: string;
    features: Record<string, boolean>;
  }
  
  export interface FilterOptions {
    category: 'personal' | 'business' | 'all';
    customerType: 'individual' | 'corporate' | 'all';
  }