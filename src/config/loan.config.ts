// config/loan.config.ts

import type { LoanConfig } from "@/types/loan.types";

export const DEFAULT_LOAN_CONFIG: LoanConfig = {
  currency: 'TZS',
  currencySymbol: 'TZS',
  minAmount: 100000,
  maxAmount: 20000000,
  amountStep: 50000,
  minRate: 5,
  maxRate: 25,
  rateStep: 0.1,
  minTerm: 1,
  maxTerm: 15,
  termStep: 1,
};

export const LOAN_TYPES = {
  HOME: {
    ...DEFAULT_LOAN_CONFIG,
    maxAmount: 50000000,
    maxRate: 18,
    maxTerm: 25,
  },
  PERSONAL: {
    ...DEFAULT_LOAN_CONFIG,
    maxAmount: 5000000,
    maxRate: 30,
    maxTerm: 7,
  },
  BUSINESS: {
    ...DEFAULT_LOAN_CONFIG,
    maxAmount: 100000000,
    maxRate: 22,
    maxTerm: 20,
  },
  CAR: {
    ...DEFAULT_LOAN_CONFIG,
    maxAmount: 30000000,
    maxRate: 20,
    maxTerm: 10,
  },
} as const;

export type LoanType = keyof typeof LOAN_TYPES;