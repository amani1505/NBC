export interface LoanConfig {
    currency: string;
    currencySymbol: string;
    minAmount: number;
    maxAmount: number;
    amountStep: number;
    minRate: number;
    maxRate: number;
    rateStep: number;
    minTerm: number;
    maxTerm: number;
    termStep: number;
  }
  
  export interface LoanCalculation {
    monthlyPayment: number;
    totalInterest: number;
    totalAmount: number;
  }
  
  export interface LoanParameters {
    amount: number;
    interestRate: number;
    termYears: number;
  }
  
  export interface LoanCalculatorProps {
    onApply?: (loanData: LoanParameters & LoanCalculation) => void;
    config?: Partial<LoanConfig>;
    title?: string;
    buttonText?: string;
    className?: string;
  }
  
  export interface SliderFieldProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
    min: number;
    max: number;
    step: number;
    formatValue: (value: number) => string;
    minLabel: string;
    maxLabel: string;
  }