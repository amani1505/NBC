// components/LoanResults.tsx
import React from 'react';
import { Card } from "@/components/ui/card";
import Button from "@/components/ui/button";
import type { LoanCalculation, LoanConfig } from '@/types/loan.types';
import { formatCurrency } from '@/utils/loan.utils';


interface LoanResultsProps {
  config: LoanConfig;
  calculation: LoanCalculation;
  onApply: () => void;
  buttonText: string;
  isValid: boolean;
}

const LoanResults: React.FC<LoanResultsProps> = ({
  config,
  calculation,
  onApply,
  buttonText,
  isValid,
}) => {
  const { monthlyPayment, totalInterest, totalAmount } = calculation;

  return (
    <Card className="p-6 bg-nbc-dark-800 text-white shadow-finance">
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold mb-2">Monthly Payment</h4>
          <div className="text-xl font-bold text-[#81BEDB]">
            {formatCurrency(monthlyPayment, config)}
          </div>
          <p className="text-sm opacity-90">
            You'll pay this amount every month
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">
            Total Interest Paid
          </h4>
          <div className="text-xl font-bold text-[#81BEDB]">
            {formatCurrency(totalInterest, config)}
          </div>
          <p className="text-sm opacity-90">
            This is the total interest amount you'll pay over the loan term
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Total Amount Paid</h4>
          <div className="text-xl font-bold text-[#81BEDB]">
            {formatCurrency(totalAmount, config)}
          </div>
          <p className="text-sm opacity-90">
            This is the total amount you'll pay including both loan amount
            and interest
          </p>
        </div>

        <Button
          onClick={onApply}
          disabled={!isValid}
          className={`w-full mt-6 border border-white transition-all ease-in-out duration-300 cursor-pointer ${
            isValid 
              ? 'hover:bg-white hover:text-nbc-dark-800 bg-transparent' 
              : 'opacity-50 cursor-not-allowed bg-gray-600'
          }`}
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default LoanResults;