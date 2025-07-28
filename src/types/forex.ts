export interface Currency {
  code: string;
  name: string;
  country: string;
  flag: string;
  buyingPrice: number;
  sellingPrice: number;
}

export interface ExchangeRate {
  from: string;
  to: string;
  rate: number;
  timestamp: string;
}

export interface TargetedCurrency {
  id: string;
  code: string;
  amount: number;
  flag: string;
}

export interface CurrencyOption {
  value: string;
  label: string;
  flag: string;
}