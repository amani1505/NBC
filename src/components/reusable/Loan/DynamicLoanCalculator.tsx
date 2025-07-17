// components/DynamicLoanCalculator.tsx
import React from 'react';
import LoanControls from './LoanControls';
import LoanResults from './LoanResults';
import type { LoanCalculatorProps } from '@/types/loan.types';
import { DEFAULT_LOAN_CONFIG } from '@/config/loan.config';
import { useLoanCalculator } from '@/hooks/useLoanCalculator';

const DynamicLoanCalculator: React.FC<LoanCalculatorProps> = ({
  onApply,
  config = {},
  title = "Loan Calculator",
  buttonText = "Apply For Loan",
  className = "",
}) => {
  const mergedConfig = { ...DEFAULT_LOAN_CONFIG, ...config };
  
  const {
    loanParams,
    calculation,
    errors,
    updateLoanAmount,
    updateInterestRate,
    updateTermYears,
    getLoanData,
    isValid,
  } = useLoanCalculator({ config: mergedConfig });

  const handleApply = () => {
    if (onApply && isValid) {
      onApply(getLoanData());
    } else {
      console.log("Apply for loan clicked from calculator", getLoanData());
    }
  };

  return (
    <div className={`w-full mx-auto !container my-10 py-10 ${className}`}>
      <div className="text-center mb-8">
        <h3 className="section-title">
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <LoanControls
          config={mergedConfig}
          loanAmount={loanParams.amount}
          interestRate={loanParams.interestRate}
          termYears={loanParams.termYears}
          onAmountChange={updateLoanAmount}
          onRateChange={updateInterestRate}
          onTermChange={updateTermYears}
          errors={errors}
        />

        <LoanResults
          config={mergedConfig}
          calculation={calculation}
          onApply={handleApply}
          buttonText={buttonText}
          isValid={isValid}
        />
      </div>
    </div>
  );
};

export default DynamicLoanCalculator;