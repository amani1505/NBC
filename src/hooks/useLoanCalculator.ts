import { useState, useEffect, useCallback } from 'react';
import { calculateLoan, validateLoanParameters } from '../utils/loan.utils';
import type { LoanConfig, LoanParameters, LoanCalculation } from '@/types/loan.types';

interface UseLoanCalculatorProps {
  config: LoanConfig;
  initialParams?: Partial<LoanParameters>;
}

export const useLoanCalculator = ({ config, initialParams }: UseLoanCalculatorProps) => {
  const [loanParams, setLoanParams] = useState<LoanParameters>({
    amount: initialParams?.amount || 500000,
    interestRate: initialParams?.interestRate || 14.5,
    termYears: initialParams?.termYears || 3,
  });

  const [calculation, setCalculation] = useState<LoanCalculation>({
    monthlyPayment: 0,
    totalInterest: 0,
    totalAmount: 0,
  });

  const [errors, setErrors] = useState<string[]>([]);

  // Recalculate when loan parameters change
  useEffect(() => {
    const validationErrors = validateLoanParameters(loanParams, config);
    setErrors(validationErrors);

    if (validationErrors.length === 0) {
      const newCalculation = calculateLoan(loanParams);
      setCalculation(newCalculation);
    }
  }, [loanParams, config]);

  const updateLoanAmount = useCallback((amount: number) => {
    setLoanParams(prev => ({ ...prev, amount }));
  }, []);

  const updateInterestRate = useCallback((interestRate: number) => {
    setLoanParams(prev => ({ ...prev, interestRate }));
  }, []);

  const updateTermYears = useCallback((termYears: number) => {
    setLoanParams(prev => ({ ...prev, termYears }));
  }, []);

  const resetToDefaults = useCallback(() => {
    setLoanParams({
      amount: 500000,
      interestRate: 14.5,
      termYears: 3,
    });
  }, []);

  const getLoanData = useCallback(() => {
    return {
      ...loanParams,
      ...calculation,
    };
  }, [loanParams, calculation]);

  return {
    loanParams,
    calculation,
    errors,
    updateLoanAmount,
    updateInterestRate,
    updateTermYears,
    resetToDefaults,
    getLoanData,
    isValid: errors.length === 0,
  };
};