// components/LoanControls.tsx
import React from 'react';
import { Card } from "@/components/ui/card";
import SliderField from '../SliderField';
import type { LoanConfig } from '@/types/loan.types';
import { formatCurrency, formatPercentage, formatYears } from '@/utils/loan.utils';

interface LoanControlsProps {
  config: LoanConfig;
  loanAmount: number;
  interestRate: number;
  termYears: number;
  onAmountChange: (amount: number) => void;
  onRateChange: (rate: number) => void;
  onTermChange: (term: number) => void;
  errors: string[];
}

const LoanControls: React.FC<LoanControlsProps> = ({
  config,
  loanAmount,
  interestRate,
  termYears,
  onAmountChange,
  onRateChange,
  onTermChange,
  errors,
}) => {
  return (
    <Card className="p-6 shadow-card-custom">
      <h4 className="text-lg font-semibold text-nbc-dark-950 mb-6">
        Loan Calculator
      </h4>

      {errors.length > 0 && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <ul className="text-sm text-red-600">
            {errors.map((error, index) => (
              <li key={index}>• {error}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-6">
        <SliderField
          label="Loan Amount"
          value={loanAmount}
          onChange={onAmountChange}
          min={config.minAmount}
          max={config.maxAmount}
          step={config.amountStep}
          formatValue={(value) => formatCurrency(value, config)}
          minLabel={formatCurrency(config.minAmount, config)}
          maxLabel={formatCurrency(config.maxAmount, config)}
        />

        <SliderField
          label="Interest Rate*"
          value={interestRate}
          onChange={onRateChange}
          min={config.minRate}
          max={config.maxRate}
          step={config.rateStep}
          formatValue={formatPercentage}
          minLabel={`${config.minRate}%`}
          maxLabel={`${config.maxRate}%`}
        />

        <SliderField
          label="Loan Term (Years)"
          value={termYears}
          onChange={onTermChange}
          min={config.minTerm}
          max={config.maxTerm}
          step={config.termStep}
          formatValue={formatYears}
          minLabel={formatYears(config.minTerm)}
          maxLabel={formatYears(config.maxTerm)}
        />
      </div>
    </Card>
  );
};

export default LoanControls;