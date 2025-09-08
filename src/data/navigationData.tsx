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
  variant: "primary" | "secondary" | "ghost" | "outline";
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
          Accounts: [
            {
              label: "NBC Individual Current Account",
              href: "/personal/accounts/nbc-individual-current",
              description: "Our flagship individual current account",
              parentCategory: "Accounts",
            },
            {
              label: "NBC Direct Current Account",
              href: "/personal/accounts/nbc-direct-current",
              description: "Direct banking solutions for modern customers",
              parentCategory: "Accounts",
            },
            {
              label: "NBC Kikundi Account",
              href: "/personal/accounts/nbc-kikundi",
              description: "Group savings account designed for community banking",
              parentCategory: "Accounts",
              hasNested: true,
              nestedItems: [
                {
                  label: "Community Savings Plan",
                  href: "/personal/accounts/nbc-kikundi/community",
                  description: "Savings plan for community groups",
                },
                {
                  label: "Group Investment Option",
                  href: "/personal/accounts/nbc-kikundi/investment",
                  description: "Investment opportunities for groups",
                },
              ],
            },
            {
              label: "Fixed Deposit Account",
              href: "/personal/accounts/fixed-deposit",
              description: "Secure investment option with guaranteed returns",
              parentCategory: "Accounts",
            },
            {
              label: "Pure Save",
              href: "/personal/accounts/pure-save",
              description: "Simple savings account with attractive interest rates",
              parentCategory: "Accounts",
            },
            {
              label: "Ordinary Account",
              href: "/personal/accounts/ordinary",
              description: "Basic banking account for everyday transactions",
              parentCategory: "Accounts",
            },
            {
              label: "Malengo Account",
              href: "/personal/accounts/malengo",
              description: "Special account designed for your financial goals",
              parentCategory: "Accounts",
            },
            {
              label: "Chanua Account",
              href: "/personal/accounts/chanua",
              description: "Savings account with monthly benefits",
              parentCategory: "Accounts",
            },
            {
              label: "Student Account",
              href: "/personal/accounts/student",
              description: "Specially designed account for students with exclusive benefits",
              parentCategory: "Accounts",
              hasNested: true,
              nestedItems: [
                {
                  label: "Student Budget Plan",
                  href: "/personal/accounts/student/budget",
                  description: "Budgeting tools for students",
                },
                {
                  label: "Student Rewards",
                  href: "/personal/accounts/student/rewards",
                  description: "Exclusive rewards for student account holders",
                },
              ],
            },
            {
              label: "Fasta Account",
              href: "/personal/accounts/fasta",
              description: "Fast and convenient banking solution",
              parentCategory: "Accounts",
            },
          ],
          Loans: [
            {
              label: "Personal Loan",
              href: "/personal/loans/personal",
              description: "Quick personal financing for your needs",
              parentCategory: "Loans",
            },
            {
              label: "Group Scheme Loan",
              href: "/personal/loans/group-scheme",
              description: "Collective borrowing for groups",
              parentCategory: "Loans",
            },
            {
              label: "Pensioners Loan",
              href: "/personal/loans/pensioners",
              description: "Special loans for pensioners",
              parentCategory: "Loans",
            },
            {
              label: "Government Security Loan",
              href: "/personal/loans/government-security",
              description: "Loans against government securities",
              parentCategory: "Loans",
            },
            {
              label: "Mortgage",
              href: "/personal/loans/mortgage",
              description: "Home financing solutions",
              parentCategory: "Loans",
              hasNested: true,
              // nestedItems: [
              //   {
              //     label: "Fixed Rate Mortgage",
              //     href: "/personal/loans/mortgage/fixed",
              //     description: "Stable interest rates for predictable payments",
              //   },
              //   {
              //     label: "Variable Rate Mortgage",
              //     href: "/personal/loans/mortgage/variable",
              //     description: "Flexible rates with potential savings",
              //   },
              // ],
            },
            {
              label: "Home Purchase Loan",
              href: "/personal/loans/home-purchase",
              description: "Make your dream home a reality",
              parentCategory: "Loans",
            },
            {
              label: "Refinancing Home Loan",
              href: "/personal/loans/refinancing-home",
              description: "Refinance your existing home loan",
              parentCategory: "Loans",
            },
            {
              label: "Equity Release Loan",
              href: "/personal/loans/equity-release",
              description: "Unlock the value in your property",
              parentCategory: "Loans",
            },
          ],
          Insurance: [
            {
              label: "Edu Care",
              href: "/personal/insurance/edu-care",
              description: "Education insurance for your children's future",
              parentCategory: "Insurance",
            },
            {
              label: "Credit Life Insurance",
              href: "/personal/insurance/credit-life",
              description: "Protection for your loans and credit",
              parentCategory: "Insurance",
            },
            {
              label: "Domestic Insurance",
              href: "/personal/insurance/domestic",
              description: "Comprehensive home and contents insurance",
              parentCategory: "Insurance",
            },
            {
              label: "Motor Insurance",
              href: "/personal/insurance/motor",
              description: "Complete vehicle protection coverage",
              parentCategory: "Insurance",
              // hasNested: true,
              // nestedItems: [
              //   {
              //     label: "Comprehensive Coverage",
              //     href: "/personal/insurance/motor/comprehensive",
              //     description: "Full protection for your vehicle",
              //   },
              //   {
              //     label: "Third-Party Coverage",
              //     href: "/personal/insurance/motor/third-party",
              //     description: "Basic liability protection",
              //   },
              // ],
            },
          ],
          "Ways To Bank": [
            {
              label: "NBC Mobile Banking (*150*55#)",
              href: "/personal/ways-to-bank/online",
              description: "Bank from anywhere, anytime",
              parentCategory: "Ways To Bank",
            },
            {
              label: "NBC App & Internet Banking",
              href: "/personal/ways-to-bank/mobile",
              description: "Banking on the go with our mobile app",
              parentCategory: "Ways To Bank",
            },
            {
              label: "ATM Network",
              href: "/personal/ways-to-bank/atm",
              description: "24/7 ATM access nationwide",
              parentCategory: "Ways To Bank",
            },
            {
              label: "NBC Agent Banking",
              href: "/personal/ways-to-bank/branch",
              description: "Visit our branches for personalized service",
              parentCategory: "Ways To Bank",
            },
            {
              label: "SMS & E-Statement",
              href: "/personal/ways-to-bank/phone",
              description: "Banking services over the phone",
              parentCategory: "Ways To Bank",
            },
            {
              label: "NBC Card",
              href: "/personal/ways-to-bank/phone",
              description: "Banking services over the phone",
              parentCategory: "Ways To Bank",
            },
            {
              label: "NBC POS",
              href: "/personal/ways-to-bank/phone",
              description: "Banking services over the phone",
              parentCategory: "Ways To Bank",
            },
          ],
        },
        thirdLevelItems: [
          {
            label: "Accounts",
            href: "/personal/accounts",
            description: "Complete range of personal accounts",
            parentCategory: "Accounts",
          },
          {
            label: "Loans",
            href: "/personal/loans",
            description: "Personal financing solutions",
            parentCategory: "Loans",
          },
          {
            label: "Insurance",
            href: "/personal/insurance",
            description: "Protection for you and your family",
            parentCategory: "Insurance",
          },
          {
            label: "Ways To Bank",
            href: "/personal/ways-to-bank",
            description: "Convenient banking channels",
            parentCategory: "Ways To Bank",
          },
        ],
        thirdLevelContent: {
          Accounts: {
            imageUrl: "/images/individual-hero.jpg",
            altText: "Personal Accounts",
            description: "Choose from our comprehensive range of personal banking accounts designed to meet your financial needs.",
            keyFeatures: [
              "Competitive interest rates",
              "Low or no monthly fees",
              "24/7 online and mobile access",
              "Nationwide ATM network",
              "Personalized customer service",
            ],
            buttonText: "Explore Accounts",
            buttonLink: "/personal/accounts",
          },
          Loans: {
            imageUrl: "/images/loan-hero.png",
            altText: "Personal Loans",
            description: "Flexible financing solutions to help you achieve your personal and financial goals.",
            keyFeatures: [
              "Competitive interest rates",
              "Quick approval process",
              "Flexible repayment terms",
              "Minimal documentation",
              "Expert financial guidance",
            ],
            buttonText: "Apply for Loan",
            buttonLink: "/personal/loans",
          },
          Insurance: {
            imageUrl: "/images/insurance-hero.png",
            altText: "Personal Insurance",
            description: "Comprehensive insurance solutions to protect you, your family, and your assets.",
            keyFeatures: [
              "Wide coverage options",
              "Affordable premiums",
              "Quick claim processing",
              "24/7 customer support",
              "Flexible payment plans",
            ],
            buttonText: "Get Protected",
            buttonLink: "/personal/insurance",
          },
          "Ways To Bank": {
            imageUrl: "/images/individual-hero.jpg",
            altText: "Ways To Bank",
            description: "Multiple convenient channels to access your banking services anytime, anywhere.",
            keyFeatures: [
              "24/7 online banking",
              "Mobile app with full features",
              "Nationwide ATM network",
              "Personalized branch service",
              "Secure phone banking",
            ],
            buttonText: "Explore Options",
            buttonLink: "/personal/ways-to-bank",
          },
          "NBC Individual Current Account": {
            imageUrl: "/images/individual-hero.jpg",
            altText: "NBC Individual Current Account",
            description: "Our flagship individual current account with competitive benefits.",
            keyFeatures: [
              "24/7 customer support",
              "Competitive rates and terms",
              "Easy online application process",
              "Quick approval and processing",
              "Flexible payment options",
            ],
            buttonText: "Learn More",
            buttonLink: "/personal/accounts/nbc-individual-current",
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
            buttonLink: "/personal/accounts/nbc-direct-current",
          },
          "NBC Kikundi Account": {
            imageUrl: "/images/kikundi-account.jpg",
            altText: "NBC Kikundi Account",
            description: "Group savings account designed for community banking.",
            keyFeatures: [
              "Group savings plans",
              "Shared account management",
              "Competitive interest rates",
              "Mobile banking access",
              "Community support programs",
            ],
            buttonText: "Explore Now",
            buttonLink: "/personal/accounts/nbc-kikundi",
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
            buttonLink: "/personal/accounts/fixed-deposit",
          },
          "Pure Save": {
            imageUrl: "/images/pure-save.jpg",
            altText: "Pure Save",
            description: "Simple savings account with attractive interest rates.",
            keyFeatures: [
              "Competitive interest rates",
              "No maintenance fees",
              "Easy access to funds",
              "Online management",
              "Savings goal tracker",
            ],
            buttonText: "Start Saving",
            buttonLink: "/personal/accounts/pure-save",
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
            buttonLink: "/personal/accounts/ordinary",
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
            buttonLink: "/personal/accounts/malengo",
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
            buttonLink: "/personal/accounts/chanua",
          },
          "Student Account": {
            imageUrl: "/images/student-account.jpg",
            altText: "Student Account",
            description: "Specially designed account for students with exclusive benefits.",
            keyFeatures: [
              "No monthly fees",
              "Student discounts",
              "Mobile banking",
              "Easy transfers",
              "Budgeting tools",
            ],
            buttonText: "Apply Today",
            buttonLink: "/personal/accounts/student",
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
            buttonLink: "/personal/accounts/fasta",
          },
        },
      },
      {
        label: "Private",
        description: "Private banking and wealth management",
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
              hasNested: true,
              nestedItems: [
                {
                  label: "Platinum Credit Card",
                  href: "/personal/cards/credit/platinum",
                  description: "Premium credit card with exclusive benefits",
                },
                {
                  label: "Gold Credit Card",
                  href: "/personal/cards/credit/gold",
                  description: "Enhanced rewards and travel benefits",
                },
              ],
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
          "NBC Private Services": [
            {
              label: "NBC Private Wealth Management",
              href: "/personal/private/wealth-management",
              description: "Comprehensive wealth management services",
              parentCategory: "NBC Private Services",
            },
            {
              label: "NBC Private Investment Advisory",
              href: "/personal/private/investment-advisory",
              description: "Expert investment guidance",
              parentCategory: "NBC Private Services",
            },
          ],
        },
        thirdLevelItems: [
          {
            label: "Payment Cards",
            href: "/personal/cards",
            description: "Complete range of payment cards",
            parentCategory: "Payment Cards",
          },
          {
            label: "Specialty Cards",
            href: "/personal/cards/specialty",
            description: "Specialized card solutions",
            parentCategory: "Specialty Cards",
          },
          {
            label: "Business Solutions",
            href: "/personal/cards/business",
            description: "Corporate payment solutions",
            parentCategory: "Business Solutions",
          },
          {
            label: "NBC Private Services",
            href: "/personal/private",
            description: "Exclusive private banking services",
            parentCategory: "NBC Private Services",
          },
        ],
        thirdLevelContent: {
          "Payment Cards": {
            imageUrl: "/images/payment-cards.jpg",
            altText: "Payment Cards",
            description: "Flexible and secure card solutions for all your needs.",
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
          "NBC Private Services": {
            imageUrl: "/images/private-services.jpg",
            altText: "NBC Private Services",
            description: "Exclusive private banking and wealth management services.",
            keyFeatures: [
              "Personalized financial planning",
              "Dedicated advisors",
              "Investment opportunities",
              "Tax optimization",
              "Estate planning",
            ],
            buttonText: "Get Started",
            buttonLink: "/personal/private",
          },
          "Debit Cards": {
            imageUrl: "/images/debit-cards.jpg",
            altText: "Debit Cards",
            description: "Access your money anywhere with secure debit cards.",
            keyFeatures: [
              "Global ATM access",
              "Contactless payments",
              "Real-time transaction tracking",
              "Zero liability protection",
              "Customizable limits",
            ],
            buttonText: "Apply Now",
            buttonLink: "/personal/cards/debit",
          },
          "Credit Cards": {
            imageUrl: "/images/credit-cards.jpg",
            altText: "Credit Cards",
            description: "Flexible payment solutions with exclusive benefits.",
            keyFeatures: [
              "Reward points",
              "Cashback offers",
              "Travel insurance",
              "Low interest rates",
              "Online management",
            ],
            buttonText: "Apply Now",
            buttonLink: "/personal/cards/credit",
          },
          "Prepaid Cards": {
            imageUrl: "/images/prepaid-cards.jpg",
            altText: "Prepaid Cards",
            description: "Control your spending with prepaid card solutions.",
            keyFeatures: [
              "No credit checks",
              "Reloadable funds",
              "Secure transactions",
              "Budget control",
              "Global acceptance",
            ],
            buttonText: "Get Started",
            buttonLink: "/personal/cards/prepaid",
          },
        },
      },
      {
        label: "Privileged",
        description: "Premium banking services",
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
              hasNested: true,
              nestedItems: [
                {
                  label: "First-Time Buyer Loan",
                  href: "/personal/loans/home/first-time",
                  description: "Special rates for first-time home buyers",
                },
                {
                  label: "Luxury Property Loan",
                  href: "/personal/loans/home/luxury",
                  description: "Financing for high-value properties",
                },
              ],
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
          "NBC Privileged Services": [
            {
              label: "NBC Privileged Priority Banking",
              href: "/personal/privileged/priority-banking",
              description: "Exclusive privileged banking services",
              parentCategory: "NBC Privileged Services",
            },
          ],
        },
        thirdLevelItems: [
          {
            label: "Personal Loans",
            href: "/personal/loans/personal",
            description: "Quick personal financing",
            parentCategory: "Personal Loans",
          },
          {
            label: "Property Finance",
            href: "/personal/loans/property",
            description: "Home and property financing",
            parentCategory: "Property Finance",
          },
          {
            label: "Asset Finance",
            href: "/personal/loans/asset",
            description: "Financing for your assets",
            parentCategory: "Asset Finance",
          },
          {
            label: "Education Finance",
            href: "/personal/loans/education",
            description: "Invest in your future",
            parentCategory: "Education Finance",
          },
          {
            label: "NBC Privileged Services",
            href: "/personal/privileged",
            description: "Premium privileged banking",
            parentCategory: "NBC Privileged Services",
          },
        ],
        thirdLevelContent: {
          "Personal Loans": {
            imageUrl: "/images/personal-loans.jpg",
            altText: "Personal Loans",
            description: "Quick and flexible financing for your personal needs.",
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
            description: "Invest in your future with affordable education loans.",
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
          "NBC Privileged Services": {
            imageUrl: "/images/privileged-services.jpg",
            altText: "NBC Privileged Services",
            description: "Premium banking services with exclusive privileges.",
            keyFeatures: [
              "Dedicated relationship manager",
              "Exclusive offers",
              "Priority services",
              "Global banking access",
              "Enhanced security",
            ],
            buttonText: "Join Now",
            buttonLink: "/personal/privileged",
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
              hasNested: true,
              nestedItems: [
                {
                  label: "High-Yield Savings",
                  href: "/business/banking/savings/high-yield",
                  description: "Maximize your business savings",
                },
                {
                  label: "Flexible Savings",
                  href: "/business/banking/savings/flexible",
                  description: "Access funds anytime",
                },
              ],
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
              hasNested: true,
              nestedItems: [
                {
                  label: "Spot Forex",
                  href: "/business/banking/forex/spot",
                  description: "Immediate currency exchange",
                },
                {
                  label: "Forward Forex",
                  href: "/business/banking/forex/forward",
                  description: "Future currency exchange contracts",
                },
              ],
            },
          ],
          "NBC Business Express": [],
          "NBC Digital Business Platform": [],
        },
        thirdLevelItems: [
          {
            label: "Business Accounts",
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
              hasNested: true,
              nestedItems: [
                {
                  label: "Supplier Financing",
                  href: "/business/loans/supply-chain/supplier",
                  description: "Finance for suppliers",
                },
                {
                  label: "Buyer Financing",
                  href: "/business/loans/supply-chain/buyer",
                  description: "Financing for buyers",
                },
              ],
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
            description: "Support for small enterprises through government-backed loans.",
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
              hasNested: true,
              nestedItems: [
                {
                  label: "Large-Scale Supplier Financing",
                  href: "/business/loans/supply-chain/large-supplier",
                  description: "Financing for large suppliers",
                },
                {
                  label: "Global Buyer Financing",
                  href: "/business/loans/supply-chain/global-buyer",
                  description: "Global financing for buyers",
                },
              ],
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
            description: "Government-backed financing for commercial enterprises.",
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
              hasNested: true,
              nestedItems: [
                {
                  label: "Corporate Bonds",
                  href: "/corporate/investment/debt/bonds",
                  description: "Issue corporate bonds for financing",
                },
                {
                  label: "Convertible Bonds",
                  href: "/corporate/investment/debt/convertible",
                  description: "Flexible debt financing options",
                },
              ],
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
            description: "Comprehensive solutions for equity and debt financing.",
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
              hasNested: true,
              nestedItems: [
                {
                  label: "Bulk Payments",
                  href: "/corporate/banking/payments/bulk",
                  description: "Streamlined bulk payment solutions",
                },
                {
                  label: "Automated Payments",
                  href: "/corporate/banking/payments/automated",
                  description: "Automated recurring payments",
                },
              ],
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
            description: "Optimize your corporate cash flow with tailored solutions.",
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
              hasNested: true,
              nestedItems: [
                {
                  label: "Energy Hedging",
                  href: "/corporate/treasury/commodities/energy",
                  description: "Hedge against energy price fluctuations",
                },
                {
                  label: "Metals Hedging",
                  href: "/corporate/treasury/commodities/metals",
                  description: "Protect against metal price volatility",
                },
              ],
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
            description: "Protect your business from interest rate fluctuations.",
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
    label: "Internet Banking",
    variant: "outline",
    // icon: "User",
    // items: [
    //   { label: "Internet Banking", href: "/login/personal" },
    //   { label: "Business Banking", href: "/login/business" },
    //   { label: "Corporate Banking", href: "/login/corporate" },
    // ],
  },
  {
    label: "Login",
    variant: "primary",
    icon: "User",
    // items: [
    //   { label: "Internet Banking", href: "/login/personal" },
    //   { label: "Business Banking", href: "/login/business" },
    //   { label: "Corporate Banking", href: "/login/corporate" },
    // ],
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
