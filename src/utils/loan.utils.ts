import type { LoanCalculation, LoanConfig, LoanParameters } from "@/types/loan.types";


export const calculateLoan = (params: LoanParameters): LoanCalculation => {
  const { amount, interestRate, termYears } = params;
  const principal = amount;
  const rate = interestRate / 100 / 12;
  const term = termYears * 12;

  if (rate > 0) {
    const monthly = (principal * rate * Math.pow(1 + rate, term)) / 
                   (Math.pow(1 + rate, term) - 1);
    const total = monthly * term;
    const interest = total - principal;

    return {
      monthlyPayment: monthly,
      totalInterest: interest,
      totalAmount: total,
    };
  } else {
    const monthly = principal / term;
    return {
      monthlyPayment: monthly,
      totalInterest: 0,
      totalAmount: principal,
    };
  }
};

export const formatCurrency = (amount: number, config: LoanConfig): string => {
  return `${config.currencySymbol} ${amount.toLocaleString("en-US", {
    maximumFractionDigits: 0,
  })}`;
};

export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

export const formatYears = (value: number): string => {
  return value === 1 ? '1 year' : `${value} years`;
};

export const validateLoanParameters = (
  params: LoanParameters, 
  config: LoanConfig
): string[] => {
  const errors: string[] = [];
  
  if (params.amount < config.minAmount || params.amount > config.maxAmount) {
    errors.push(`Loan amount must be between ${formatCurrency(config.minAmount, config)} and ${formatCurrency(config.maxAmount, config)}`);
  }
  
  if (params.interestRate < config.minRate || params.interestRate > config.maxRate) {
    errors.push(`Interest rate must be between ${config.minRate}% and ${config.maxRate}%`);
  }
  
  if (params.termYears < config.minTerm || params.termYears > config.maxTerm) {
    errors.push(`Loan term must be between ${config.minTerm} and ${config.maxTerm} years`);
  }
  
  return errors;
};