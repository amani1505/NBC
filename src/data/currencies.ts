import type { Currency, CurrencyOption } from "@/types/forex";


export const currencies: Currency[] = [
  {
    code: "GBP",
    name: "British Pound",
    country: "United Kingdom",
    flag: "🇬🇧",
    buyingPrice: 5683.34,
    sellingPrice: 5683.34,
  },
  {
    code: "SEK",
    name: "Swedish Krona",
    country: "Sweden",
    flag: "🇸🇪",
    buyingPrice: 5683.34,
    sellingPrice: 5683.34,
  },
  {
    code: "USD",
    name: "US Dollar",
    country: "United States",
    flag: "🇺🇸",
    buyingPrice: 5683.34,
    sellingPrice: 5683.34,
  },
  {
    code: "CNY",
    name: "Chinese Yuan",
    country: "China",
    flag: "🇨🇳",
    buyingPrice: 5683.34,
    sellingPrice: 5683.34,
  },
  {
    code: "EUR",
    name: "Euro",
    country: "Germany",
    flag: "🇩🇪",
    buyingPrice: 5683.34,
    sellingPrice: 5683.34,
  },
  {
    code: "TRY",
    name: "Turkish Lira",
    country: "Turkey",
    flag: "🇹🇷",
    buyingPrice: 5683.34,
    sellingPrice: 5683.34,
  },
];

export const currencyOptions: CurrencyOption[] = [
  { value: "AED", label: "AED", flag: "🇦🇪" },
  { value: "USD", label: "USD", flag: "🇺🇸" },
  { value: "GBP", label: "GBP", flag: "🇬🇧" },
  { value: "EUR", label: "EUR", flag: "🇪🇺" },
  { value: "CNY", label: "CNY", flag: "🇨🇳" },
  { value: "JPY", label: "JPY", flag: "🇯🇵" },
  { value: "CAD", label: "CAD", flag: "🇨🇦" },
  { value: "AUD", label: "AUD", flag: "🇦🇺" },
  { value: "CHF", label: "CHF", flag: "🇨🇭" },
  { value: "SEK", label: "SEK", flag: "🇸🇪" },
  { value: "TRY", label: "TRY", flag: "🇹🇷" },
];