import type { Currency, CurrencyOption } from "@/types/forex";

export const currencies: Currency[] = [
  // East African Currencies (Priority)
  {
    code: "TZS",
    name: "Tanzanian Shilling",
    country: "Tanzania",
    flag: "🇹🇿",
    buyingPrice: 1.0, // Base currency
    sellingPrice: 1.0,
  },
  {
    code: "KES",
    name: "Kenyan Shilling",
    country: "Kenya",
    flag: "🇰🇪",
    buyingPrice: 37.5,
    sellingPrice: 38.0,
  },
  {
    code: "UGX",
    name: "Ugandan Shilling",
    country: "Uganda",
    flag: "🇺🇬",
    buyingPrice: 0.67,
    sellingPrice: 0.68,
  },
  {
    code: "RWF",
    name: "Rwandan Franc",
    country: "Rwanda",
    flag: "🇷🇼",
    buyingPrice: 4.45,
    sellingPrice: 4.50,
  },
  {
    code: "BIF",
    name: "Burundian Franc",
    country: "Burundi",
    flag: "🇧🇮",
    buyingPrice: 0.98,
    sellingPrice: 1.02,
  },
  {
    code: "ETB",
    name: "Ethiopian Birr",
    country: "Ethiopia",
    flag: "🇪🇹",
    buyingPrice: 52.3,
    sellingPrice: 53.1,
  },
  {
    code: "SOS",
    name: "Somali Shilling",
    country: "Somalia",
    flag: "🇸🇴",
    buyingPrice: 4.1,
    sellingPrice: 4.2,
  },
  {
    code: "DJF",
    name: "Djiboutian Franc",
    country: "Djibouti",
    flag: "🇩🇯",
    buyingPrice: 31.5,
    sellingPrice: 32.0,
  },
  {
    code: "ERN",
    name: "Eritrean Nakfa",
    country: "Eritrea",
    flag: "🇪🇷",
    buyingPrice: 372.5,
    sellingPrice: 375.0,
  },
  {
    code: "SSP",
    name: "South Sudanese Pound",
    country: "South Sudan",
    flag: "🇸🇸",
    buyingPrice: 4.57,
    sellingPrice: 4.62,
  },

  // Major Global Currencies
  {
    code: "USD",
    name: "US Dollar",
    country: "United States",
    flag: "🇺🇸",
    buyingPrice: 2485.50,
    sellingPrice: 2495.50,
  },
  {
    code: "EUR",
    name: "Euro",
    country: "European Union",
    flag: "🇪🇺",
    buyingPrice: 2695.30,
    sellingPrice: 2705.30,
  },
  {
    code: "GBP",
    name: "British Pound",
    country: "United Kingdom",
    flag: "🇬🇧",
    buyingPrice: 3142.25,
    sellingPrice: 3152.25,
  },
  {
    code: "JPY",
    name: "Japanese Yen",
    country: "Japan",
    flag: "🇯🇵",
    buyingPrice: 16.85,
    sellingPrice: 17.05,
  },
  {
    code: "CHF",
    name: "Swiss Franc",
    country: "Switzerland",
    flag: "🇨🇭",
    buyingPrice: 2812.45,
    sellingPrice: 2822.45,
  },
  {
    code: "CAD",
    name: "Canadian Dollar",
    country: "Canada",
    flag: "🇨🇦",
    buyingPrice: 1815.30,
    sellingPrice: 1825.30,
  },
  {
    code: "AUD",
    name: "Australian Dollar",
    country: "Australia",
    flag: "🇦🇺",
    buyingPrice: 1642.75,
    sellingPrice: 1652.75,
  },
  {
    code: "CNY",
    name: "Chinese Yuan",
    country: "China",
    flag: "🇨🇳",
    buyingPrice: 342.85,
    sellingPrice: 347.85,
  },
  {
    code: "SEK",
    name: "Swedish Krona",
    country: "Sweden",
    flag: "🇸🇪",
    buyingPrice: 235.45,
    sellingPrice: 240.45,
  },
  {
    code: "NOK",
    name: "Norwegian Krone",
    country: "Norway",
    flag: "🇳🇴",
    buyingPrice: 225.30,
    sellingPrice: 230.30,
  },
  {
    code: "DKK",
    name: "Danish Krone",
    country: "Denmark",
    flag: "🇩🇰",
    buyingPrice: 360.85,
    sellingPrice: 365.85,
  },

  // Other African Currencies
  {
    code: "ZAR",
    name: "South African Rand",
    country: "South Africa",
    flag: "🇿🇦",
    buyingPrice: 138.25,
    sellingPrice: 142.25,
  },
  {
    code: "NGN",
    name: "Nigerian Naira",
    country: "Nigeria",
    flag: "🇳🇬",
    buyingPrice: 1.58,
    sellingPrice: 1.62,
  },
  {
    code: "EGP",
    name: "Egyptian Pound",
    country: "Egypt",
    flag: "🇪🇬",
    buyingPrice: 50.35,
    sellingPrice: 51.85,
  },
  {
    code: "MAD",
    name: "Moroccan Dirham",
    country: "Morocco",
    flag: "🇲🇦",
    buyingPrice: 248.75,
    sellingPrice: 253.75,
  },
  {
    code: "GHS",
    name: "Ghanaian Cedi",
    country: "Ghana",
    flag: "🇬🇭",
    buyingPrice: 154.30,
    sellingPrice: 159.30,
  },
  {
    code: "XOF",
    name: "West African CFA Franc",
    country: "West Africa",
    flag: "🌍",
    buyingPrice: 4.12,
    sellingPrice: 4.18,
  },
  {
    code: "XAF",
    name: "Central African CFA Franc",
    country: "Central Africa",
    flag: "🌍",
    buyingPrice: 4.08,
    sellingPrice: 4.14,
  },
  {
    code: "BWP",
    name: "Botswana Pula",
    country: "Botswana",
    flag: "🇧🇼",
    buyingPrice: 185.45,
    sellingPrice: 190.45,
  },
  {
    code: "MWK",
    name: "Malawian Kwacha",
    country: "Malawi",
    flag: "🇲🇼",
    buyingPrice: 1.43,
    sellingPrice: 1.47,
  },
  {
    code: "ZMW",
    name: "Zambian Kwacha",
    country: "Zambia",
    flag: "🇿🇲",
    buyingPrice: 92.15,
    sellingPrice: 96.15,
  },
  {
    code: "MZN",
    name: "Mozambican Metical",
    country: "Mozambique",
    flag: "🇲🇿",
    buyingPrice: 38.75,
    sellingPrice: 41.25,
  },

  // Middle East & Asia
  {
    code: "AED",
    name: "UAE Dirham",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    buyingPrice: 676.25,
    sellingPrice: 681.25,
  },
  {
    code: "SAR",
    name: "Saudi Riyal",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    buyingPrice: 662.85,
    sellingPrice: 667.85,
  },
  {
    code: "QAR",
    name: "Qatari Riyal",
    country: "Qatar",
    flag: "🇶🇦",
    buyingPrice: 682.15,
    sellingPrice: 687.15,
  },
  {
    code: "INR",
    name: "Indian Rupee",
    country: "India",
    flag: "🇮🇳",
    buyingPrice: 29.65,
    sellingPrice: 30.15,
  },
  {
    code: "PKR",
    name: "Pakistani Rupee",
    country: "Pakistan",
    flag: "🇵🇰",
    buyingPrice: 8.95,
    sellingPrice: 9.15,
  },
  {
    code: "TRY",
    name: "Turkish Lira",
    country: "Turkey",
    flag: "🇹🇷",
    buyingPrice: 72.35,
    sellingPrice: 74.85,
  },
  {
    code: "KRW",
    name: "South Korean Won",
    country: "South Korea",
    flag: "🇰🇷",
    buyingPrice: 1.82,
    sellingPrice: 1.86,
  },
  {
    code: "SGD",
    name: "Singapore Dollar",
    country: "Singapore",
    flag: "🇸🇬",
    buyingPrice: 1835.25,
    sellingPrice: 1845.25,
  },
  {
    code: "HKD",
    name: "Hong Kong Dollar",
    country: "Hong Kong",
    flag: "🇭🇰",
    buyingPrice: 318.45,
    sellingPrice: 323.45,
  },
  {
    code: "THB",
    name: "Thai Baht",
    country: "Thailand",
    flag: "🇹🇭",
    buyingPrice: 68.25,
    sellingPrice: 70.75,
  },
  {
    code: "MYR",
    name: "Malaysian Ringgit",
    country: "Malaysia",
    flag: "🇲🇾",
    buyingPrice: 525.85,
    sellingPrice: 535.85,
  },

  // Americas
  {
    code: "BRL",
    name: "Brazilian Real",
    country: "Brazil",
    flag: "🇧🇷",
    buyingPrice: 435.25,
    sellingPrice: 445.25,
  },
  {
    code: "MXN",
    name: "Mexican Peso",
    country: "Mexico",
    flag: "🇲🇽",
    buyingPrice: 122.85,
    sellingPrice: 127.85,
  },
  {
    code: "ARS",
    name: "Argentine Peso",
    country: "Argentina",
    flag: "🇦🇷",
    buyingPrice: 2.45,
    sellingPrice: 2.55,
  },

  // Oceania & Others
  {
    code: "NZD",
    name: "New Zealand Dollar",
    country: "New Zealand",
    flag: "🇳🇿",
    buyingPrice: 1485.75,
    sellingPrice: 1495.75,
  },
  {
    code: "RUB",
    name: "Russian Ruble",
    country: "Russia",
    flag: "🇷🇺",
    buyingPrice: 28.15,
    sellingPrice: 29.85,
  },
];

export const currencyOptions: CurrencyOption[] = [
  // East African Currencies (Priority)
  { value: "TZS", label: "TZS", flag: "🇹🇿" },
  { value: "KES", label: "KES", flag: "🇰🇪" },
  { value: "UGX", label: "UGX", flag: "🇺🇬" },
  { value: "RWF", label: "RWF", flag: "🇷🇼" },
  { value: "BIF", label: "BIF", flag: "🇧🇮" },
  { value: "ETB", label: "ETB", flag: "🇪🇹" },
  { value: "SOS", label: "SOS", flag: "🇸🇴" },
  { value: "DJF", label: "DJF", flag: "🇩🇯" },
  { value: "ERN", label: "ERN", flag: "🇪🇷" },
  { value: "SSP", label: "SSP", flag: "🇸🇸" },

  // Major Global Currencies
  { value: "USD", label: "USD", flag: "🇺🇸" },
  { value: "EUR", label: "EUR", flag: "🇪🇺" },
  { value: "GBP", label: "GBP", flag: "🇬🇧" },
  { value: "JPY", label: "JPY", flag: "🇯🇵" },
  { value: "CHF", label: "CHF", flag: "🇨🇭" },
  { value: "CAD", label: "CAD", flag: "🇨🇦" },
  { value: "AUD", label: "AUD", flag: "🇦🇺" },
  { value: "CNY", label: "CNY", flag: "🇨🇳" },
  { value: "SEK", label: "SEK", flag: "🇸🇪" },
  { value: "NOK", label: "NOK", flag: "🇳🇴" },
  { value: "DKK", label: "DKK", flag: "🇩🇰" },

  // Other African Currencies
  { value: "ZAR", label: "ZAR", flag: "🇿🇦" },
  { value: "NGN", label: "NGN", flag: "🇳🇬" },
  { value: "EGP", label: "EGP", flag: "🇪🇬" },
  { value: "MAD", label: "MAD", flag: "🇲🇦" },
  { value: "GHS", label: "GHS", flag: "🇬🇭" },
  { value: "XOF", label: "XOF", flag: "🌍" },
  { value: "XAF", label: "XAF", flag: "🌍" },
  { value: "BWP", label: "BWP", flag: "🇧🇼" },
  { value: "MWK", label: "MWK", flag: "🇲🇼" },
  { value: "ZMW", label: "ZMW", flag: "🇿🇲" },
  { value: "MZN", label: "MZN", flag: "🇲🇿" },

  // Middle East & Asia
  { value: "AED", label: "AED", flag: "🇦🇪" },
  { value: "SAR", label: "SAR", flag: "🇸🇦" },
  { value: "QAR", label: "QAR", flag: "🇶🇦" },
  { value: "INR", label: "INR", flag: "🇮🇳" },
  { value: "PKR", label: "PKR", flag: "🇵🇰" },
  { value: "TRY", label: "TRY", flag: "🇹🇷" },
  { value: "KRW", label: "KRW", flag: "🇰🇷" },
  { value: "SGD", label: "SGD", flag: "🇸🇬" },
  { value: "HKD", label: "HKD", flag: "🇭🇰" },
  { value: "THB", label: "THB", flag: "🇹🇭" },
  { value: "MYR", label: "MYR", flag: "🇲🇾" },

  // Americas
  { value: "BRL", label: "BRL", flag: "🇧🇷" },
  { value: "MXN", label: "MXN", flag: "🇲🇽" },
  { value: "ARS", label: "ARS", flag: "🇦🇷" },

  // Oceania & Others
  { value: "NZD", label: "NZD", flag: "🇳🇿" },
  { value: "RUB", label: "RUB", flag: "🇷🇺" },
];

// Helper function to get currency by code
export const getCurrencyByCode = (code: string): Currency | undefined => {
  return currencies.find(currency => currency.code === code);
};

// Helper function to get East African currencies only
export const getEastAfricanCurrencies = (): Currency[] => {
  const eastAfricanCodes = ['TZS', 'KES', 'UGX', 'RWF', 'BIF', 'ETB', 'SOS', 'DJF', 'ERN', 'SSP'];
  return currencies.filter(currency => eastAfricanCodes.includes(currency.code));
};

// Helper function to get African currencies
export const getAfricanCurrencies = (): Currency[] => {
  const africanCodes = [
    'TZS', 'KES', 'UGX', 'RWF', 'BIF', 'ETB', 'SOS', 'DJF', 'ERN', 'SSP', // East Africa
    'ZAR', 'NGN', 'EGP', 'MAD', 'GHS', 'XOF', 'XAF', 'BWP', 'MWK', 'ZMW', 'MZN' // Other African
  ];
  return currencies.filter(currency => africanCodes.includes(currency.code));
};