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

export interface ThirdLevelContent {
  imageUrl: string;
  altText: string;
  description: string;
  keyFeatures: string[];
  buttonText: string;
  buttonLink: string;
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
  thirdLevelContent?: {
    [categoryName: string]: ThirdLevelContent;
  };
}

export interface MenuItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  subItems?: SubMenuItem[];
}

export interface ActionButton {
  label: string;
  href?: string;
  variant: "primary" | "secondary" | "ghost";
  icon?: string;
  items?: { label: string; href: string }[];
}

export interface QuickLink {
  label: string;
  href: string;
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
          "NBC Individual Current Account": [],
          "NBC Direct Current Account": [],
          "NBC Kikundi Account": [],
          "Fixed Deposit Account": [],
          "Pure Save": [],
          "Ordinary Account": [],
          "Malengo Account": [],
          "Chanua Account": [],
          "Student Account": [],
          "Fasta Account": [],
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
        thirdLevelContent: {
          "NBC Individual Current Account": {
            imageUrl: "/images/individual-current-account.jpg",
            altText: "NBC Individual Current Account",
            description:
              "Our flagship individual current account with competitive benefits.",
            keyFeatures: [
              "24/7 customer support",
              "Competitive rates and terms",
              "Easy online application process",
              "Quick approval and processing",
              "Flexible payment options",
            ],
            buttonText: "Learn More",
            buttonLink: "/personal/nbc-individual-current-account",
          },
          "NBC Direct Current Account": {
            imageUrl: "/images/direct-current-account.jpg",
            altText: "NBC Direct Current Account",
            description: "Direct banking solutions for modern customers.",
            keyFeatures: [
              "Instant account opening",
              "No minimum balance fees",
              "Online and mobile banking",
              "Free ATM withdrawals",
              "Customizable alerts",
            ],
            buttonText: "Get Started",
            buttonLink: "/personal/nbc-direct-current-account",
          },
          "NBC Kikundi Account": {
            imageUrl: "/images/kikundi-account.jpg",
            altText: "NBC Kikundi Account",
            description:
              "Group savings account designed for community banking.",
            keyFeatures: [
              "Group savings plans",
              "Shared account management",
              "Competitive interest rates",
              "Mobile banking access",
              "Community support programs",
            ],
            buttonText: "Explore Now",
            buttonLink: "/personal/nbc-kikundi-account",
          },
          "Fixed Deposit Account": {
            imageUrl: "/images/fixed-deposit-account.jpg",
            altText: "Fixed Deposit Account",
            description: "Secure investment option with guaranteed returns.",
            keyFeatures: [
              "High interest rates",
              "Flexible tenure options",
              "Guaranteed returns",
              "Secure investment",
              "Easy renewal process",
            ],
            buttonText: "Invest Now",
            buttonLink: "/personal/fixed-deposit-account",
          },
          "Pure Save": {
            imageUrl: "/images/pure-save.jpg",
            altText: "Pure Save",
            description:
              "Simple savings account with attractive interest rates.",
            keyFeatures: [
              "Competitive interest rates",
              "No maintenance fees",
              "Easy access to funds",
              "Online management",
              "Savings goal tracker",
            ],
            buttonText: "Start Saving",
            buttonLink: "/personal/pure-save",
          },
          "Ordinary Account": {
            imageUrl: "/images/ordinary-account.jpg",
            altText: "Ordinary Account",
            description: "Basic banking account for everyday transactions.",
            keyFeatures: [
              "Simple account management",
              "Low fees",
              "ATM and online access",
              "Quick setup",
              "Flexible transactions",
            ],
            buttonText: "Open Now",
            buttonLink: "/personal/ordinary-account",
          },
          "Malengo Account": {
            imageUrl: "/images/malengo-account.jpg",
            altText: "Malengo Account",
            description: "Special account designed for your financial goals.",
            keyFeatures: [
              "Goal-based savings",
              "High interest rates",
              "Customizable plans",
              "Mobile app integration",
              "Progress tracking",
            ],
            buttonText: "Plan Your Goals",
            buttonLink: "/personal/malengo-account",
          },
          "Chanua Account": {
            imageUrl: "/images/chanua-account.jpg",
            altText: "Chanua Account",
            description: "Savings account with monthly benefits.",
            keyFeatures: [
              "Monthly interest payouts",
              "No withdrawal fees",
              "Online banking",
              "Flexible deposits",
              "Savings rewards",
            ],
            buttonText: "Join Now",
            buttonLink: "/personal/chanua-account",
          },
          "Student Account": {
            imageUrl: "/images/student-account.jpg",
            altText: "Student Account",
            description:
              "Specially designed account for students with exclusive benefits.",
            keyFeatures: [
              "No monthly fees",
              "Student discounts",
              "Mobile banking",
              "Easy transfers",
              "Budgeting tools",
            ],
            buttonText: "Apply Today",
            buttonLink: "/personal/student-account",
          },
          "Fasta Account": {
            imageUrl: "/images/fasta-account.jpg",
            altText: "Fasta Account",
            description: "Fast and convenient banking solution.",
            keyFeatures: [
              "Instant transactions",
              "Low fees",
              "Mobile app access",
              "Secure payments",
              "Quick setup",
            ],
            buttonText: "Get Started",
            buttonLink: "/personal/fasta-account",
          },
          "Digital Services": {
            imageUrl: "/images/digital-services.jpg",
            altText: "Digital Services",
            description: "Advanced digital banking solutions for convenience.",
            keyFeatures: [
              "24/7 online banking",
              "Mobile app with full features",
              "Secure transactions",
              "Bill payments and transfers",
              "Real-time notifications",
            ],
            buttonText: "Go Digital",
            buttonLink: "/personal/digital-services",
          },
        },
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
        thirdLevelContent: {
          "Payment Cards": {
            imageUrl: "/images/payment-cards.jpg",
            altText: "Payment Cards",
            description:
              "Flexible and secure card solutions for all your needs.",
            keyFeatures: [
              "Global acceptance",
              "Contactless payments",
              "Fraud protection",
              "Online and mobile access",
              "Customizable spending limits",
            ],
            buttonText: "Explore Cards",
            buttonLink: "/personal/cards",
          },
          "Specialty Cards": {
            imageUrl: "/images/specialty-cards.jpg",
            altText: "Specialty Cards",
            description: "Tailored card solutions for unique lifestyles.",
            keyFeatures: [
              "Travel benefits",
              "Reward points",
              "Exclusive offers",
              "Zero foreign transaction fees",
              "Enhanced security",
            ],
            buttonText: "Discover Now",
            buttonLink: "/personal/cards/specialty",
          },
          "Business Solutions": {
            imageUrl: "/images/business-solutions.jpg",
            altText: "Business Solutions",
            description: "Corporate card solutions for business efficiency.",
            keyFeatures: [
              "Expense tracking",
              "Corporate discounts",
              "High credit limits",
              "Online management",
              "Dedicated support",
            ],
            buttonText: "Learn More",
            buttonLink: "/personal/cards/business",
          },
          "NBC Private Wealth Management": {
            imageUrl: "/images/private-wealth-management.jpg",
            altText: "NBC Private Wealth Management",
            description:
              "Exclusive wealth management services for high-net-worth individuals.",
            keyFeatures: [
              "Personalized financial planning",
              "Dedicated advisors",
              "Investment opportunities",
              "Tax optimization",
              "Estate planning",
            ],
            buttonText: "Get Started",
            buttonLink: "/personal/private/wealth-management",
          },
          "NBC Private Investment Advisory": {
            imageUrl: "/images/investment-advisory.jpg",
            altText: "NBC Private Investment Advisory",
            description: "Expert investment guidance for your portfolio.",
            keyFeatures: [
              "Customized investment strategies",
              "Market insights",
              "Risk management",
              "Portfolio diversification",
              "Regular reviews",
            ],
            buttonText: "Consult Now",
            buttonLink: "/personal/private/investment-advisory",
          },
        },
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
        thirdLevelContent: {
          "Personal Loans": {
            imageUrl: "/images/personal-loans.jpg",
            altText: "Personal Loans",
            description:
              "Quick and flexible financing for your personal needs.",
            keyFeatures: [
              "Fast approval process",
              "Competitive interest rates",
              "Flexible repayment terms",
              "No collateral required",
              "Online application",
            ],
            buttonText: "Apply Now",
            buttonLink: "/personal/loans/personal",
          },
          "Property Finance": {
            imageUrl: "/images/property-finance.jpg",
            altText: "Property Finance",
            description: "Finance your dream home or unlock property value.",
            keyFeatures: [
              "Low interest rates",
              "Long repayment periods",
              "Expert guidance",
              "Flexible terms",
              "Quick processing",
            ],
            buttonText: "Explore Options",
            buttonLink: "/personal/loans/property",
          },
          "Asset Finance": {
            imageUrl: "/images/asset-finance.jpg",
            altText: "Asset Finance",
            description: "Drive your dream car or secure loans against assets.",
            keyFeatures: [
              "Competitive rates",
              "Fast approval",
              "Flexible repayment",
              "Wide range of assets",
              "Dedicated support",
            ],
            buttonText: "Get Financed",
            buttonLink: "/personal/loans/asset",
          },
          "Education Finance": {
            imageUrl: "/images/education-finance.jpg",
            altText: "Education Finance",
            description:
              "Invest in your future with affordable education loans.",
            keyFeatures: [
              "Low interest rates",
              "Flexible repayment",
              "No prepayment penalties",
              "Quick disbursal",
              "Support for all courses",
            ],
            buttonText: "Apply Today",
            buttonLink: "/personal/loans/education",
          },
          "NBC Privileged Priority Banking": {
            imageUrl: "/images/privileged-priority-banking.jpg",
            altText: "NBC Privileged Priority Banking",
            description: "Premium banking services with exclusive privileges.",
            keyFeatures: [
              "Dedicated relationship manager",
              "Exclusive offers",
              "Priority services",
              "Global banking access",
              "Enhanced security",
            ],
            buttonText: "Join Now",
            buttonLink: "/personal/privileged/priority-banking",
          },
        },
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
        thirdLevelContent: {
          "Business Accounts": {
            imageUrl: "/images/business-accounts.jpg",
            altText: "Business Accounts",
            description: "Tailored accounts for your business needs.",
            keyFeatures: [
              "Low transaction fees",
              "Online banking access",
              "Dedicated support",
              "Flexible withdrawals",
              "Business debit cards",
            ],
            buttonText: "Open Account",
            buttonLink: "/business/banking/accounts",
          },
          "Credit Facilities": {
            imageUrl: "/images/credit-facilities.jpg",
            altText: "Credit Facilities",
            description: "Flexible credit solutions for business growth.",
            keyFeatures: [
              "Quick approval",
              "Competitive rates",
              "Flexible terms",
              "Overdraft options",
              "Business support",
            ],
            buttonText: "Apply Now",
            buttonLink: "/business/banking/credit",
          },
          "Transaction Services": {
            imageUrl: "/images/transaction-services.jpg",
            altText: "Transaction Services",
            description: "Efficient solutions for business transactions.",
            keyFeatures: [
              "Cash flow management",
              "Secure payments",
              "Automated collections",
              "Real-time reporting",
              "Dedicated support",
            ],
            buttonText: "Explore Services",
            buttonLink: "/business/banking/transactions",
          },
          "International Services": {
            imageUrl: "/images/international-services.jpg",
            altText: "International Services",
            description: "Global banking solutions for your business.",
            keyFeatures: [
              "Forex trading",
              "International transfers",
              "Currency hedging",
              "Global support",
              "Competitive rates",
            ],
            buttonText: "Go Global",
            buttonLink: "/business/banking/international",
          },
          "NBC Business Express": {
            imageUrl: "/images/business-express.jpg",
            altText: "NBC Business Express",
            description: "Fast-track banking solutions for micro enterprises.",
            keyFeatures: [
              "Quick account setup",
              "Low fees",
              "Digital banking",
              "Business loans",
              "Dedicated advisor",
            ],
            buttonText: "Get Started",
            buttonLink: "/business/micro/business-express",
          },
          "NBC Digital Business Platform": {
            imageUrl: "/images/digital-business-platform.jpg",
            altText: "NBC Digital Business Platform",
            description: "Complete digital solutions for business efficiency.",
            keyFeatures: [
              "Online banking portal",
              "Mobile app integration",
              "Automated reporting",
              "Secure transactions",
              "24/7 support",
            ],
            buttonText: "Go Digital",
            buttonLink: "/business/micro/digital-platform",
          },
        },
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
        thirdLevelContent: {
          "Working Capital": {
            imageUrl: "/images/working-capital.jpg",
            altText: "Working Capital",
            description: "Flexible financing to support daily operations.",
            keyFeatures: [
              "Quick disbursal",
              "Competitive rates",
              "Flexible repayment",
              "Supply chain support",
              "Dedicated advisor",
            ],
            buttonText: "Apply Now",
            buttonLink: "/business/loans/working-capital",
          },
          "Term Financing": {
            imageUrl: "/images/term-financing.jpg",
            altText: "Term Financing",
            description: "Long-term loans for business expansion.",
            keyFeatures: [
              "Long repayment terms",
              "Low interest rates",
              "Equipment financing",
              "Flexible terms",
              "Expert guidance",
            ],
            buttonText: "Explore Options",
            buttonLink: "/business/loans/term",
          },
          "Trade Finance": {
            imageUrl: "/images/trade-finance.jpg",
            altText: "Trade Finance",
            description: "Support for international trade activities.",
            keyFeatures: [
              "Global trade support",
              "Competitive rates",
              "Fast processing",
              "Risk mitigation",
              "Expert advice",
            ],
            buttonText: "Learn More",
            buttonLink: "/business/loans/trade",
          },
          "Government Schemes": {
            imageUrl: "/images/government-schemes.jpg",
            altText: "Government Schemes",
            description:
              "Support for small enterprises through government-backed loans.",
            keyFeatures: [
              "Subsidized rates",
              "Easy eligibility",
              "Flexible terms",
              "Quick approval",
              "Dedicated support",
            ],
            buttonText: "Apply Today",
            buttonLink: "/business/loans/msme",
          },
        },
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
        thirdLevelContent: {
          "Working Capital": {
            imageUrl: "/images/working-capital-commercial.jpg",
            altText: "Working Capital",
            description: "Robust financing solutions for large businesses.",
            keyFeatures: [
              "High credit limits",
              "Competitive rates",
              "Flexible repayment",
              "Supply chain financing",
              "Dedicated support",
            ],
            buttonText: "Apply Now",
            buttonLink: "/business/loans/working-capital",
          },
          "Term Financing": {
            imageUrl: "/images/term-financing-commercial.jpg",
            altText: "Term Financing",
            description: "Long-term financing for commercial expansion.",
            keyFeatures: [
              "Extended repayment periods",
              "Low interest rates",
              "Equipment financing",
              "Flexible terms",
              "Expert guidance",
            ],
            buttonText: "Explore Options",
            buttonLink: "/business/loans/term",
          },
          "Trade Finance": {
            imageUrl: "/images/trade-finance-commercial.jpg",
            altText: "Trade Finance",
            description: "Comprehensive support for international trade.",
            keyFeatures: [
              "Global trade solutions",
              "Competitive rates",
              "Fast processing",
              "Risk management",
              "Expert advice",
            ],
            buttonText: "Learn More",
            buttonLink: "/business/loans/trade",
          },
          "Government Schemes": {
            imageUrl: "/images/government-schemes-commercial.jpg",
            altText: "Government Schemes",
            description:
              "Government-backed financing for commercial enterprises.",
            keyFeatures: [
              "Subsidized rates",
              "Easy eligibility",
              "Flexible terms",
              "Quick approval",
              "Dedicated support",
            ],
            buttonText: "Apply Today",
            buttonLink: "/business/loans/msme",
          },
        },
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
        thirdLevelContent: {
          "Capital Markets": {
            imageUrl: "/images/capital-markets.jpg",
            altText: "Capital Markets",
            description:
              "Comprehensive solutions for equity and debt financing.",
            keyFeatures: [
              "Equity fundraising",
              "Debt issuance",
              "Market expertise",
              "Global reach",
              "Dedicated advisors",
            ],
            buttonText: "Explore Now",
            buttonLink: "/corporate/investment/capital-markets",
          },
          "Advisory Services": {
            imageUrl: "/images/advisory-services.jpg",
            altText: "Advisory Services",
            description: "Strategic advisory for mergers and acquisitions.",
            keyFeatures: [
              "Expert guidance",
              "Strategic planning",
              "Valuation services",
              "Deal structuring",
              "Post-merger integration",
            ],
            buttonText: "Consult Now",
            buttonLink: "/corporate/investment/advisory",
          },
          "Private Markets": {
            imageUrl: "/images/private-markets.jpg",
            altText: "Private Markets",
            description: "Tailored private investment solutions.",
            keyFeatures: [
              "Private equity investments",
              "Venture capital",
              "Customized strategies",
              "High returns",
              "Expert management",
            ],
            buttonText: "Invest Now",
            buttonLink: "/corporate/investment/private-markets",
          },
          "Structured Solutions": {
            imageUrl: "/images/structured-solutions.jpg",
            altText: "Structured Solutions",
            description: "Complex financing and risk management solutions.",
            keyFeatures: [
              "Customized financing",
              "Risk mitigation",
              "Structured products",
              "Global expertise",
              "Dedicated support",
            ],
            buttonText: "Learn More",
            buttonLink: "/corporate/investment/structured-solutions",
          },
        },
      },
      {
        label: "Corporate Banking",
        description: "Tailored corporate solutions",
        hasThirdLevel: true,
        href: "/corporate/banking",
        categories: {
          "Cash Management": [
            {
              label: "Liquidity Management",
              href: "/corporate/banking/liquidity",
              description: "Optimize cash flow",
              parentCategory: "Cash Management",
            },
            {
              label: "Payment Solutions",
              href: "/corporate/banking/payments",
              description: "Efficient payment systems",
              parentCategory: "Cash Management",
            },
          ],
          "Trade Services": [
            {
              label: "Export Finance",
              href: "/corporate/banking/export",
              description: "Support for exporters",
              parentCategory: "Trade Services",
            },
            {
              label: "Import Finance",
              href: "/corporate/banking/import",
              description: "Import financing solutions",
              parentCategory: "Trade Services",
            },
          ],
          "Corporate Lending": [
            {
              label: "Syndicated Loans",
              href: "/corporate/banking/syndicated",
              description: "Large-scale financing",
              parentCategory: "Corporate Lending",
            },
            {
              label: "Project Finance",
              href: "/corporate/banking/project",
              description: "Infrastructure financing",
              parentCategory: "Corporate Lending",
            },
          ],
        },
        thirdLevelItems: [
          {
            label: "Liquidity Management",
            href: "/corporate/banking/liquidity",
            description: "Optimize cash flow",
            parentCategory: "Cash Management",
          },
          {
            label: "Payment Solutions",
            href: "/corporate/banking/payments",
            description: "Efficient payment systems",
            parentCategory: "Cash Management",
          },
          {
            label: "Export Finance",
            href: "/corporate/banking/export",
            description: "Support for exporters",
            parentCategory: "Trade Services",
          },
          {
            label: "Import Finance",
            href: "/corporate/banking/import",
            description: "Import financing solutions",
            parentCategory: "Trade Services",
          },
          {
            label: "Syndicated Loans",
            href: "/corporate/banking/syndicated",
            description: "Large-scale financing",
            parentCategory: "Corporate Lending",
          },
          {
            label: "Project Finance",
            href: "/corporate/banking/project",
            description: "Infrastructure financing",
            parentCategory: "Corporate Lending",
          },
        ],
        thirdLevelContent: {
          "Cash Management": {
            imageUrl: "/images/cash-management.jpg",
            altText: "Cash Management",
            description:
              "Optimize your corporate cash flow with tailored solutions.",
            keyFeatures: [
              "Real-time cash tracking",
              "Automated payments",
              "Liquidity optimization",
              "Secure transactions",
              "Dedicated support",
            ],
            buttonText: "Explore Solutions",
            buttonLink: "/corporate/banking/cash-management",
          },
          "Trade Services": {
            imageUrl: "/images/trade-services.jpg",
            altText: "Trade Services",
            description: "Comprehensive trade financing for global operations.",
            keyFeatures: [
              "Export and import financing",
              "Global trade support",
              "Competitive rates",
              "Risk management",
              "Expert guidance",
            ],
            buttonText: "Learn More",
            buttonLink: "/corporate/banking/trade-services",
          },
          "Corporate Lending": {
            imageUrl: "/images/corporate-lending.jpg",
            altText: "Corporate Lending",
            description: "Large-scale financing for corporate growth.",
            keyFeatures: [
              "Syndicated loans",
              "Project financing",
              "Flexible terms",
              "High credit limits",
              "Dedicated advisors",
            ],
            buttonText: "Apply Now",
            buttonLink: "/corporate/banking/lending",
          },
        },
      },
      {
        label: "Treasury Services",
        description: "Advanced treasury solutions",
        hasThirdLevel: true,
        href: "/corporate/treasury",
        categories: {
          "Foreign Exchange": [
            {
              label: "Spot FX",
              href: "/corporate/treasury/spot-fx",
              description: "Immediate currency exchange",
              parentCategory: "Foreign Exchange",
            },
            {
              label: "Forward FX",
              href: "/corporate/treasury/forward-fx",
              description: "Future currency exchange",
              parentCategory: "Foreign Exchange",
            },
          ],
          "Interest Rate Management": [
            {
              label: "Swaps",
              href: "/corporate/treasury/swaps",
              description: "Manage interest rate risk",
              parentCategory: "Interest Rate Management",
            },
          ],
          Commodities: [
            {
              label: "Commodity Hedging",
              href: "/corporate/treasury/commodities",
              description: "Protect against price volatility",
              parentCategory: "Commodities",
            },
          ],
        },
        thirdLevelItems: [
          {
            label: "Spot FX",
            href: "/corporate/treasury/spot-fx",
            description: "Immediate currency exchange",
            parentCategory: "Foreign Exchange",
          },
          {
            label: "Forward FX",
            href: "/corporate/treasury/forward-fx",
            description: "Future currency exchange",
            parentCategory: "Foreign Exchange",
          },
          {
            label: "Swaps",
            href: "/corporate/treasury/swaps",
            description: "Manage interest rate risk",
            parentCategory: "Interest Rate Management",
          },
          {
            label: "Commodity Hedging",
            href: "/corporate/treasury/commodities",
            description: "Protect against price volatility",
            parentCategory: "Commodities",
          },
        ],
        thirdLevelContent: {
          "Foreign Exchange": {
            imageUrl: "/images/foreign-exchange.jpg",
            altText: "Foreign Exchange",
            description: "Manage currency exchange with ease and efficiency.",
            keyFeatures: [
              "Competitive FX rates",
              "Spot and forward contracts",
              "Global market access",
              "Risk management tools",
              "Expert advisory",
            ],
            buttonText: "Get Started",
            buttonLink: "/corporate/treasury/foreign-exchange",
          },
          "Interest Rate Management": {
            imageUrl: "/images/interest-rate-management.jpg",
            altText: "Interest Rate Management",
            description:
              "Protect your business from interest rate fluctuations.",
            keyFeatures: [
              "Interest rate swaps",
              "Risk mitigation",
              "Customized solutions",
              "Market insights",
              "Dedicated support",
            ],
            buttonText: "Explore Now",
            buttonLink: "/corporate/treasury/interest-rate",
          },
          Commodities: {
            imageUrl: "/images/commodities.jpg",
            altText: "Commodities",
            description: "Hedge against commodity price volatility.",
            keyFeatures: [
              "Commodity hedging",
              "Price protection",
              "Global market access",
              "Customized strategies",
              "Expert guidance",
            ],
            buttonText: "Learn More",
            buttonLink: "/corporate/treasury/commodities",
          },
        },
      },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
];

export const actionButtons: ActionButton[] = [
  {
    label: "Location",
    href: "/find-branches-atm",
    variant: "ghost",
    icon: "MapPin",
  },
  {
    label: "Language",
    variant: "ghost",
    icon: "Globe",
    items: [
      { label: "English", href: "/language/en" },
      { label: "Swahili", href: "/language/sw" },
    ],
  },
  {
    label: "Login",
    variant: "primary",
    icon: "User",
    items: [
      { label: "Personal Banking", href: "/login/personal" },
      { label: "Business Banking", href: "/login/business" },
      { label: "Corporate Banking", href: "/login/corporate" },
    ],
  },
];

export const quickLinks: QuickLink[] = [
  {
    label: "Find Branch & ATMs",
    href: "/find-branches-atm",
  },
  {
    label: "Whistleblowing",
    href: "/whistle-blowing",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];
