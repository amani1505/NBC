// Updated navigationData.tsx with better support for independent categories

export interface ThirdLevelItem {
  label: string;
  href: string;
  description?: string;
  hasNested?: boolean;
  parentCategory?: string;
  nestedItems?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export interface SubMenuItem {
  label: string;
  href?: string;
  description?: string;
  hasThirdLevel?: boolean;
  thirdLevelItems?: ThirdLevelItem[];
  categories?: {
    [categoryName: string]: ThirdLevelItem[];
  };
}

export interface MenuItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  subItems?: SubMenuItem[];
}

export const navigationData: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Personal",
    hasDropdown: true,
    subItems: [
      {
        label: "Individual",
        description: "Personal banking solutions",
        hasThirdLevel: true,
        href: "/personal-banking",
        categories: {
          // Independent category - empty array but still defined
          "NBC Individual Current Account": [],

          // 'Deposit Accounts': [
          //   { label: 'Current Account', href: '/personal/accounts/current', description: 'Everyday banking account', parentCategory: 'Deposit Accounts' },
          //   { label: 'Savings Account', href: '/personal/accounts/savings', description: 'Grow your savings', parentCategory: 'Deposit Accounts' },
          //   { label: 'Fixed Deposit', href: '/personal/accounts/fixed', description: 'Secure investment option', parentCategory: 'Deposit Accounts' }
          // ],
          // 'Premium Services': [
          //   { label: 'Premium Account', href: '/personal/accounts/premium', description: 'Exclusive banking benefits', parentCategory: 'Premium Services' }
          // ],
          // 'Special Accounts': [
          //   { label: 'Student Account', href: '/personal/accounts/student', description: 'Special rates for students', parentCategory: 'Special Accounts' },
          //   { label: 'Senior Citizen Account', href: '/personal/accounts/senior', description: 'Designed for seniors', parentCategory: 'Special Accounts' }
          // ],

          // Another independent category
          "NBC Direct Current Account": [],
          "NBC Kikundi Account": [],
          "Fixed Deposit Account": [],
          "Pure Save": [],
          "Ordinary Account": [],
          "Malengo Account": [],
          "Chanua Account": [],
          "Student Account": [],
          "Fasta Account": [],

          // Another category with items
          "Digital Services": [
            {
              label: "Online Banking",
              href: "/personal/digital/online",
              description: "Bank from anywhere",
              parentCategory: "Digital Services",
            },
            {
              label: "Mobile App",
              href: "/personal/digital/mobile",
              description: "Banking on the go",
              parentCategory: "Digital Services",
            },
          ],
        },
        thirdLevelItems: [
          {
            label: "Accounts",
            href: "/personal/accounts/current",
            description: "Everyday banking account",
            parentCategory: "Deposit Accounts",
          },
          {
            label: "Loans",
            href: "/personal/accounts/savings",
            description: "Grow your savings",
            parentCategory: "Deposit Accounts",
          },
          {
            label: "Insurance",
            href: "/personal/accounts/fixed",
            description: "Secure investment option",
            parentCategory: "Deposit Accounts",
          },
          {
            label: "Ways To Bank",
            href: "/personal/accounts/premium",
            description: "Exclusive banking benefits",
            parentCategory: "Premium Services",
          },
          {
            label: "NBC Individual Current Account",
            href: "/personal/nbc-individual-current-account",
            description: "Our flagship current account",
            parentCategory: "NBC Individual Current Account",
          },
          {
            label: "NBC Mobile Banking",
            href: "/personal/nbc-mobile-banking",
            description: "Advanced mobile banking features",
            parentCategory: "NBC Mobile Banking",
          },
        ],
      },
      {
        label: "Private",
        description: "Credit and debit solutions",
        hasThirdLevel: true,
        href: "/personal-banking/private",
        categories: {
          "Payment Cards": [
            {
              label: "Debit Cards",
              href: "/personal/cards/debit",
              description: "Access your money anywhere",
              parentCategory: "Payment Cards",
            },
            {
              label: "Credit Cards",
              href: "/personal/cards/credit",
              description: "Flexible payment solutions",
              parentCategory: "Payment Cards",
            },
            {
              label: "Prepaid Cards",
              href: "/personal/cards/prepaid",
              description: "Control your spending",
              parentCategory: "Payment Cards",
            },
          ],
          "Specialty Cards": [
            {
              label: "Travel Cards",
              href: "/personal/cards/travel",
              description: "Perfect for international travel",
              parentCategory: "Specialty Cards",
            },
            {
              label: "Rewards Cards",
              href: "/personal/cards/rewards",
              description: "Earn points on every purchase",
              parentCategory: "Specialty Cards",
            },
          ],
          "Business Solutions": [
            {
              label: "Business Cards",
              href: "/personal/cards/business",
              description: "Corporate payment solutions",
              parentCategory: "Business Solutions",
            },
          ],

          // Independent categories for Private banking
          "NBC Private Wealth Management": [],
          "NBC Private Investment Advisory": [],
        },
        thirdLevelItems: [
          {
            label: "Debit Cards",
            href: "/personal/cards/debit",
            description: "Access your money anywhere",
            parentCategory: "Payment Cards",
          },
          {
            label: "Credit Cards",
            href: "/personal/cards/credit",
            description: "Flexible payment solutions",
            parentCategory: "Payment Cards",
          },
          {
            label: "Prepaid Cards",
            href: "/personal/cards/prepaid",
            description: "Control your spending",
            parentCategory: "Payment Cards",
          },
          {
            label: "Travel Cards",
            href: "/personal/cards/travel",
            description: "Perfect for international travel",
            parentCategory: "Specialty Cards",
          },
          {
            label: "Rewards Cards",
            href: "/personal/cards/rewards",
            description: "Earn points on every purchase",
            parentCategory: "Specialty Cards",
          },
          {
            label: "Business Cards",
            href: "/personal/cards/business",
            description: "Corporate payment solutions",
            parentCategory: "Business Solutions",
          },
          {
            label: "NBC Private Wealth Management",
            href: "/personal/private/wealth-management",
            description: "Comprehensive wealth management services",
            parentCategory: "NBC Private Wealth Management",
          },
          {
            label: "NBC Private Investment Advisory",
            href: "/personal/private/investment-advisory",
            description: "Expert investment guidance",
            parentCategory: "NBC Private Investment Advisory",
          },
        ],
      },
      {
        label: "Privileged",
        description: "Personal financing options",
        hasThirdLevel: true,
        href: "/personal-banking/privileged",
        categories: {
          "Personal Loans": [
            {
              label: "Personal Loan",
              href: "/personal/loans/personal",
              description: "Quick personal financing",
              parentCategory: "Personal Loans",
            },
          ],
          "Property Finance": [
            {
              label: "Home Loan",
              href: "/personal/loans/home",
              description: "Make your dream home reality",
              parentCategory: "Property Finance",
            },
            {
              label: "Loan Against Property",
              href: "/personal/loans/property",
              description: "Unlock property value",
              parentCategory: "Property Finance",
            },
          ],
          "Asset Finance": [
            {
              label: "Car Loan",
              href: "/personal/loans/car",
              description: "Drive your dream car today",
              parentCategory: "Asset Finance",
            },
            {
              label: "Gold Loan",
              href: "/personal/loans/gold",
              description: "Quick loan against gold",
              parentCategory: "Asset Finance",
            },
          ],
          "Education Finance": [
            {
              label: "Education Loan",
              href: "/personal/loans/education",
              description: "Invest in your future",
              parentCategory: "Education Finance",
            },
          ],

          // Independent category for Privileged banking
          "NBC Privileged Priority Banking": [],
        },
        thirdLevelItems: [
          {
            label: "Personal Loan",
            href: "/personal/loans/personal",
            description: "Quick personal financing",
            parentCategory: "Personal Loans",
          },
          {
            label: "Home Loan",
            href: "/personal/loans/home",
            description: "Make your dream home reality",
            parentCategory: "Property Finance",
          },
          {
            label: "Car Loan",
            href: "/personal/loans/car",
            description: "Drive your dream car today",
            parentCategory: "Asset Finance",
          },
          {
            label: "Education Loan",
            href: "/personal/loans/education",
            description: "Invest in your future",
            parentCategory: "Education Finance",
          },
          {
            label: "Gold Loan",
            href: "/personal/loans/gold",
            description: "Quick loan against gold",
            parentCategory: "Asset Finance",
          },
          {
            label: "Loan Against Property",
            href: "/personal/loans/property",
            description: "Unlock property value",
            parentCategory: "Property Finance",
          },
          {
            label: "NBC Privileged Priority Banking",
            href: "/personal/privileged/priority-banking",
            description: "Exclusive privileged banking services",
            parentCategory: "NBC Privileged Priority Banking",
          },
        ],
      },
      {
        label: "Diaspora",
        href: "/personal-banking/diaspora",
        description: "Banking for diaspora community",
      },
    ],
  },
  {
    label: "Business",
    hasDropdown: true,
    subItems: [
      {
        label: "Micro Enterprises",
        description: "Complete business solutions",
        hasThirdLevel: true,
        href: "/business-banking",
        categories: {
          "Business Accounts": [
            {
              label: "Current Account",
              href: "/business/banking/current",
              description: "Business current account",
              parentCategory: "Business Accounts",
            },
            {
              label: "Savings Account",
              href: "/business/banking/savings",
              description: "Business savings solutions",
              parentCategory: "Business Accounts",
            },
          ],
          "Credit Facilities": [
            {
              label: "Overdraft Facility",
              href: "/business/banking/overdraft",
              description: "Working capital support",
              parentCategory: "Credit Facilities",
            },
          ],
          "Transaction Services": [
            {
              label: "Cash Management",
              href: "/business/banking/cash",
              description: "Efficient cash handling",
              parentCategory: "Transaction Services",
            },
            {
              label: "Collection Services",
              href: "/business/banking/collection",
              description: "Payment collection solutions",
              parentCategory: "Transaction Services",
            },
          ],
          "International Services": [
            {
              label: "Forex Services",
              href: "/business/banking/forex",
              description: "Foreign exchange solutions",
              parentCategory: "International Services",
            },
          ],

          // Independent categories for Micro Enterprises
          "NBC Business Express": [],
          "NBC Digital Business Platform": [],
        },
        thirdLevelItems: [
          {
            label: "Current Account",
            href: "/business/banking/current",
            description: "Business current account",
            parentCategory: "Business Accounts",
          },
          {
            label: "Savings Account",
            href: "/business/banking/savings",
            description: "Business savings solutions",
            parentCategory: "Business Accounts",
          },
          {
            label: "Overdraft Facility",
            href: "/business/banking/overdraft",
            description: "Working capital support",
            parentCategory: "Credit Facilities",
          },
          {
            label: "Cash Management",
            href: "/business/banking/cash",
            description: "Efficient cash handling",
            parentCategory: "Transaction Services",
          },
          {
            label: "Collection Services",
            href: "/business/banking/collection",
            description: "Payment collection solutions",
            parentCategory: "Transaction Services",
          },
          {
            label: "Forex Services",
            href: "/business/banking/forex",
            description: "Foreign exchange solutions",
            parentCategory: "International Services",
          },
          {
            label: "NBC Business Express",
            href: "/business/micro/business-express",
            description: "Fast-track business banking",
            parentCategory: "NBC Business Express",
          },
          {
            label: "NBC Digital Business Platform",
            href: "/business/micro/digital-platform",
            description: "Complete digital business solutions",
            parentCategory: "NBC Digital Business Platform",
          },
        ],
      },
      {
        label: "SMEs",
        description: "Financing for growth",
        hasThirdLevel: true,
        href: "/business-banking/smes",
        categories: {
          "Working Capital": [
            {
              label: "Working Capital",
              href: "/business/loans/working-capital",
              description: "Fund daily operations",
              parentCategory: "Working Capital",
            },
            {
              label: "Supply Chain Finance",
              href: "/business/loans/supply-chain",
              description: "Optimize cash flow",
              parentCategory: "Working Capital",
            },
          ],
          "Term Financing": [
            {
              label: "Term Loans",
              href: "/business/loans/term",
              description: "Long-term financing",
              parentCategory: "Term Financing",
            },
            {
              label: "Equipment Finance",
              href: "/business/loans/equipment",
              description: "Finance business equipment",
              parentCategory: "Term Financing",
            },
          ],
          "Trade Finance": [
            {
              label: "Trade Finance",
              href: "/business/loans/trade",
              description: "International trade support",
              parentCategory: "Trade Finance",
            },
          ],
          "Government Schemes": [
            {
              label: "MSME Loans",
              href: "/business/loans/msme",
              description: "Support for small enterprises",
              parentCategory: "Government Schemes",
            },
          ],
        },
        thirdLevelItems: [
          {
            label: "Working Capital",
            href: "/business/loans/working-capital",
            description: "Fund daily operations",
            parentCategory: "Working Capital",
          },
          {
            label: "Term Loans",
            href: "/business/loans/term",
            description: "Long-term financing",
            parentCategory: "Term Financing",
          },
          {
            label: "Equipment Finance",
            href: "/business/loans/equipment",
            description: "Finance business equipment",
            parentCategory: "Term Financing",
          },
          {
            label: "Trade Finance",
            href: "/business/loans/trade",
            description: "International trade support",
            parentCategory: "Trade Finance",
          },
          {
            label: "Supply Chain Finance",
            href: "/business/loans/supply-chain",
            description: "Optimize cash flow",
            parentCategory: "Working Capital",
          },
          {
            label: "MSME Loans",
            href: "/business/loans/msme",
            description: "Support for small enterprises",
            parentCategory: "Government Schemes",
          },
        ],
      },
      {
        label: "Commercial",
        description: "Large business financing",
        hasThirdLevel: true,
        href: "/business-banking/commercial",
        categories: {
          "Working Capital": [
            {
              label: "Working Capital",
              href: "/business/loans/working-capital",
              description: "Fund daily operations",
              parentCategory: "Working Capital",
            },
            {
              label: "Supply Chain Finance",
              href: "/business/loans/supply-chain",
              description: "Optimize cash flow",
              parentCategory: "Working Capital",
            },
          ],
          "Term Financing": [
            {
              label: "Term Loans",
              href: "/business/loans/term",
              description: "Long-term financing",
              parentCategory: "Term Financing",
            },
            {
              label: "Equipment Finance",
              href: "/business/loans/equipment",
              description: "Finance business equipment",
              parentCategory: "Term Financing",
            },
          ],
          "Trade Finance": [
            {
              label: "Trade Finance",
              href: "/business/loans/trade",
              description: "International trade support",
              parentCategory: "Trade Finance",
            },
          ],
          "Government Schemes": [
            {
              label: "MSME Loans",
              href: "/business/loans/msme",
              description: "Support for small enterprises",
              parentCategory: "Government Schemes",
            },
          ],
        },
        thirdLevelItems: [
          {
            label: "Working Capital",
            href: "/business/loans/working-capital",
            description: "Fund daily operations",
            parentCategory: "Working Capital",
          },
          {
            label: "Term Loans",
            href: "/business/loans/term",
            description: "Long-term financing",
            parentCategory: "Term Financing",
          },
          {
            label: "Equipment Finance",
            href: "/business/loans/equipment",
            description: "Finance business equipment",
            parentCategory: "Term Financing",
          },
          {
            label: "Trade Finance",
            href: "/business/loans/trade",
            description: "International trade support",
            parentCategory: "Trade Finance",
          },
          {
            label: "Supply Chain Finance",
            href: "/business/loans/supply-chain",
            description: "Optimize cash flow",
            parentCategory: "Working Capital",
          },
          {
            label: "MSME Loans",
            href: "/business/loans/msme",
            description: "Support for small enterprises",
            parentCategory: "Government Schemes",
          },
        ],
      },
    ],
  },
  {
    label: "Corporate",
    hasDropdown: true,
    subItems: [
      {
        label: "Investment Banking",
        description: "Capital market solutions",
        hasThirdLevel: true,
        href: "/corporate/investment",
        categories: {
          "Capital Markets": [
            {
              label: "Equity Capital Markets",
              href: "/corporate/investment/equity",
              description: "Equity fundraising solutions",
              parentCategory: "Capital Markets",
            },
            {
              label: "Debt Capital Markets",
              href: "/corporate/investment/debt",
              description: "Debt financing options",
              parentCategory: "Capital Markets",
            },
          ],
          "Advisory Services": [
            {
              label: "Mergers & Acquisitions",
              href: "/corporate/investment/ma",
              description: "Strategic advisory services",
              parentCategory: "Advisory Services",
            },
          ],
          "Private Markets": [
            {
              label: "Private Equity",
              href: "/corporate/investment/pe",
              description: "Private investment solutions",
              parentCategory: "Private Markets",
            },
          ],
          "Structured Solutions": [
            {
              label: "Structured Finance",
              href: "/corporate/investment/structured",
              description: "Complex financing structures",
              parentCategory: "Structured Solutions",
            },
            {
              label: "Risk Management",
              href: "/corporate/investment/risk",
              description: "Financial risk solutions",
              parentCategory: "Structured Solutions",
            },
          ],
        },
        thirdLevelItems: [
          {
            label: "Equity Capital Markets",
            href: "/corporate/investment/equity",
            description: "Equity fundraising solutions",
            parentCategory: "Capital Markets",
          },
          {
            label: "Debt Capital Markets",
            href: "/corporate/investment/debt",
            description: "Debt financing options",
            parentCategory: "Capital Markets",
          },
          {
            label: "Mergers & Acquisitions",
            href: "/corporate/investment/ma",
            description: "Strategic advisory services",
            parentCategory: "Advisory Services",
          },
          {
            label: "Private Equity",
            href: "/corporate/investment/pe",
            description: "Private investment solutions",
            parentCategory: "Private Markets",
          },
          {
            label: "Structured Finance",
            href: "/corporate/investment/structured",
            description: "Complex financing structures",
            parentCategory: "Structured Solutions",
          },
          {
            label: "Risk Management",
            href: "/corporate/investment/risk",
            description: "Financial risk solutions",
            parentCategory: "Structured Solutions",
          },
        ],
      },
      {
        label: "Asset Management",
        href: "/corporate/asset-management",
        description: "Professional asset management",
      },
      {
        label: "Institutional Services",
        href: "/corporate/institutional",
        description: "Institutional banking",
      },
      {
        label: "Global Markets",
        href: "/corporate/markets",
        description: "Trading and markets",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about",
  },
];

// Configuration for action buttons
export interface ActionButton {
  label: string;
  icon?: string;
  variant?:
    | "ghost"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "outline"
    | "link"
    | "gradient";
  items?: { label: string; href?: string }[];
}

export const actionButtonsData: ActionButton[] = [
  {
    label: "Locate Us",
    icon: "MapPin",
    variant: "ghost",
  },
  {
    label: "English",
    icon: "Globe",
    variant: "ghost",
    items: [{ label: "English" }, { label: "French" }, { label: "Spanish" }],
  },
  {
    label: "Login",
    icon: "User",
    variant: "primary",
    items: [
      { label: "Personal Banking" },
      { label: "Business Banking" },
      { label: "Corporate Banking" },
    ],
  },
];
