import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface LoanCalculatorProps {
  onApply?: () => void;
}














export default function LoanCalculator({ onApply }: LoanCalculatorProps) {
  const [loanAmount, setLoanAmount] = useState([500000]);
  const [interestRate, setInterestRate] = useState([14.5]);
  const [loanTerm, setLoanTerm] = useState([3]);

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const principal = loanAmount[0];
    const rate = interestRate[0] / 100 / 12;
    const term = loanTerm[0] * 12;

    if (rate > 0) {
      const monthly =
        (principal * rate * Math.pow(1 + rate, term)) /
        (Math.pow(1 + rate, term) - 1);
      const total = monthly * term;
      const interest = total - principal;

      setMonthlyPayment(monthly);
      setTotalInterest(interest);
      setTotalAmount(total);
    } else {
      const monthly = principal / term;
      setMonthlyPayment(monthly);
      setTotalInterest(0);
      setTotalAmount(principal);
    }
  }, [loanAmount, interestRate, loanTerm]);

  const formatCurrency = (amount: number) => {
    return `TZS ${amount.toLocaleString("en-US", {
      maximumFractionDigits: 0,
    })}`;
  };

  const handleApply = () => {
    if (onApply) {
      onApply();
    } else {
      console.log("Apply for loan clicked from calculator");
    }
  };

  return (
    <div className="w-full  mx-auto !container my-10 py-10">
      <div className="text-center mb-8">
        <h3 className="section-title">
          Loan Calculator
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calculator Controls */}
        <Card className="p-6 shadow-card-custom">
          <h4 className="text-lg font-semibold text-nbc-dark-950 mb-6">
            Loan Calculator
          </h4>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-finance-gray-dark">
                  Loan Amount
                </label>
                <span className="text-sm font-semibold text-finance-blue">
                  {formatCurrency(loanAmount[0])}
                </span>
              </div>
              <Slider
                value={loanAmount}
                onValueChange={setLoanAmount}
                max={20000000}
                min={100000}
                step={50000}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-finance-gray-dark mt-1">
                <span>TZS 100,000</span>
                <span>TZS 20,000,000</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-finance-gray-dark">
                  Interest Rate*
                </label>
                <span className="text-sm font-semibold text-finance-blue">
                  {interestRate[0].toFixed(1)}%
                </span>
              </div>
              <Slider
                value={interestRate}
                onValueChange={setInterestRate}
                max={25}
                min={5}
                step={0.1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-finance-gray-dark mt-1">
                <span>5%</span>
                <span>25%</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-finance-gray-dark">
                  Loan Term (Years)
                </label>
                <span className="text-sm font-semibold text-finance-blue">
                  {loanTerm[0]} years
                </span>
              </div>
              <Slider
                value={loanTerm}
                onValueChange={setLoanTerm}
                max={15}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-finance-gray-dark mt-1">
                <span>1 year</span>
                <span>15 years</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Payment Details */}
        <Card className="p-6 bg-nbc-dark-800 text-white shadow-finance">
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Monthly Payment</h4>
              <div className="text-xl font-bold text-[#81BEDB]">
                {formatCurrency(monthlyPayment)}
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
                {formatCurrency(totalInterest)}
              </div>
              <p className="text-sm opacity-90">
                This is the total interest amount you'll pay over the loan term
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Total Amount Paid</h4>
              <div className="text-xl font-bold text-[#81BEDB]">
                {formatCurrency(totalAmount)}
              </div>
              <p className="text-sm opacity-90">
                This is the total amount you'll pay including both loan amount
                and interest
              </p>
            </div>

            <Button
              onClick={handleApply}
              className="w-full mt-6 border border-white hover:bg-white hover:text-nbc-dark-800 bg-transparent transition-all ease-in-out duration-300 cursor-pointer"
            >
              Apply For Home Loan
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
