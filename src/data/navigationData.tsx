export interface ThirdLevelItem {
    label: string;
    href: string;
    description?: string;
  }
  
  export interface SubMenuItem {
    label: string;
    href?: string;
    description?: string;
    hasThirdLevel?: boolean;
    thirdLevelItems?: ThirdLevelItem[];
  }
  
  export interface MenuItem {
    label: string;
    href?: string;
    hasDropdown?: boolean;
    subItems?: SubMenuItem[];
  }
  
  export const navigationData: MenuItem[] = [
    { 
      label: 'Home', 
      href: '/' 
    },
    {
      label: 'Personal',
      hasDropdown: true,
      subItems: [
        { 
          label: 'Individual', 
          description: 'Personal banking solutions',
          hasThirdLevel: true,
          href: '/personal-banking',
          thirdLevelItems: [
            { label: 'Current Account', href: '/personal/accounts/current', description: 'Everyday banking account' },
            { label: 'Savings Account', href: '/personal/accounts/savings', description: 'Grow your savings' },
            { label: 'Fixed Deposit', href: '/personal/accounts/fixed', description: 'Secure investment option' },
            { label: 'Premium Account', href: '/personal/accounts/premium', description: 'Exclusive banking benefits' },
            { label: 'Student Account', href: '/personal/accounts/student', description: 'Special rates for students' },
            { label: 'Senior Citizen Account', href: '/personal/accounts/senior', description: 'Designed for seniors' }
          ]
        },
        { 
          label: 'Private', 
          description: 'Credit and debit solutions',
          hasThirdLevel: true,
          href: '/personal-banking/private',
          thirdLevelItems: [
            { label: 'Debit Cards', href: '/personal/cards/debit', description: 'Access your money anywhere' },
            { label: 'Credit Cards', href: '/personal/cards/credit', description: 'Flexible payment solutions' },
            { label: 'Prepaid Cards', href: '/personal/cards/prepaid', description: 'Control your spending' },
            { label: 'Travel Cards', href: '/personal/cards/travel', description: 'Perfect for international travel' },
            { label: 'Rewards Cards', href: '/personal/cards/rewards', description: 'Earn points on every purchase' },
            { label: 'Business Cards', href: '/personal/cards/business', description: 'Corporate payment solutions' }
          ]
        },
        { 
          label: 'Priveleged', 
          description: 'Personal financing options',
          hasThirdLevel: true,
          href: '/personal-banking/priveleged',
          thirdLevelItems: [
            { label: 'Personal Loan', href: '/personal/loans/personal', description: 'Quick personal financing' },
            { label: 'Home Loan', href: '/personal/loans/home', description: 'Make your dream home reality' },
            { label: 'Car Loan', href: '/personal/loans/car', description: 'Drive your dream car today' },
            { label: 'Education Loan', href: '/personal/loans/education', description: 'Invest in your future' },
            { label: 'Gold Loan', href: '/personal/loans/gold', description: 'Quick loan against gold' },
            { label: 'Loan Against Property', href: '/personal/loans/property', description: 'Unlock property value' }
          ]
        },
        { 
          label: 'Diaspora', 
          href: '/personal-banking/diaspora', 
          description: 'Grow your wealth' 
        }
      ]
    },
    {
      label: 'Business',
      hasDropdown: true,
      subItems: [
        { 
          label: 'Micro Enterprises', 
          description: 'Complete business solutions',
          hasThirdLevel: true,
          href: '/business-banking',
          thirdLevelItems: [
            { label: 'Current Account', href: '/business/banking/current', description: 'Business current account' },
            { label: 'Savings Account', href: '/business/banking/savings', description: 'Business savings solutions' },
            { label: 'Overdraft Facility', href: '/business/banking/overdraft', description: 'Working capital support' },
            { label: 'Cash Management', href: '/business/banking/cash', description: 'Efficient cash handling' },
            { label: 'Collection Services', href: '/business/banking/collection', description: 'Payment collection solutions' },
            { label: 'Forex Services', href: '/business/banking/forex', description: 'Foreign exchange solutions' }
          ]
        },
        { 
          label: 'SMEs', 
          description: 'Financing for growth',
          hasThirdLevel: true,
          href: '/business-banking/smes',
          thirdLevelItems: [
            { label: 'Working Capital', href: '/business/loans/working-capital', description: 'Fund daily operations' },
            { label: 'Term Loans', href: '/business/loans/term', description: 'Long-term financing' },
            { label: 'Equipment Finance', href: '/business/loans/equipment', description: 'Finance business equipment' },
            { label: 'Trade Finance', href: '/business/loans/trade', description: 'International trade support' },
            { label: 'Supply Chain Finance', href: '/business/loans/supply-chain', description: 'Optimize cash flow' },
            { label: 'MSME Loans', href: '/business/loans/msme', description: 'Support for small enterprises' }
          ]
        },
            { 
          label: 'Commercial', 
          description: 'Financing for growth',
          hasThirdLevel: true,
          href: '/business-banking/commercial',
          thirdLevelItems: [
            { label: 'Working Capital', href: '/business/loans/working-capital', description: 'Fund daily operations' },
            { label: 'Term Loans', href: '/business/loans/term', description: 'Long-term financing' },
            { label: 'Equipment Finance', href: '/business/loans/equipment', description: 'Finance business equipment' },
            { label: 'Trade Finance', href: '/business/loans/trade', description: 'International trade support' },
            { label: 'Supply Chain Finance', href: '/business/loans/supply-chain', description: 'Optimize cash flow' },
            { label: 'MSME Loans', href: '/business/loans/msme', description: 'Support for small enterprises' }
          ]
        },
            
        
      ]
    },
    {
      label: 'Corporate',
      hasDropdown: true,
      subItems: [
        { 
          label: 'Investment Banking', 
          description: 'Capital market solutions',
          hasThirdLevel: true,
          href: '/corporate/investment',
          thirdLevelItems: [
            { label: 'Equity Capital Markets', href: '/corporate/investment/equity', description: 'Equity fundraising solutions' },
            { label: 'Debt Capital Markets', href: '/corporate/investment/debt', description: 'Debt financing options' },
            { label: 'Mergers & Acquisitions', href: '/corporate/investment/ma', description: 'Strategic advisory services' },
            { label: 'Private Equity', href: '/corporate/investment/pe', description: 'Private investment solutions' },
            { label: 'Structured Finance', href: '/corporate/investment/structured', description: 'Complex financing structures' },
            { label: 'Risk Management', href: '/corporate/investment/risk', description: 'Financial risk solutions' }
          ]
        },
        { 
          label: 'Asset Management', 
          href: '/corporate/asset-management', 
          description: 'Professional asset management' 
        },
        { 
          label: 'Institutional Services', 
          href: '/corporate/institutional', 
          description: 'Institutional banking' 
        },
        { 
          label: 'Global Markets', 
          href: '/corporate/markets', 
          description: 'Trading and markets' 
        }
      ]
    },
    { 
      label: 'About Us', 
      href: '/about' 
    }
  ];
  
  // Configuration for action buttons
  export interface ActionButton {
    label: string;
    icon?: string;
    variant?: 'ghost' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'outline' | 'link' | 'gradient';
    items?: { label: string; href?: string }[];
  }
  
  export const actionButtonsData: ActionButton[] = [
    {
      label: 'Locate Us',
      icon: 'MapPin',
      variant: 'ghost'
    },
    {
      label: 'English',
      icon: 'Globe',
      variant: 'ghost',
      items: [
        { label: 'English' },
        { label: 'French' },
        { label: 'Spanish' }
      ]
    },
    {
      label: 'Login',
      icon: 'User',
      variant: 'primary',
      items: [
        { label: 'Personal Banking' },
        { label: 'Business Banking' },
        { label: 'Corporate Banking' }
      ]
    }
  ];