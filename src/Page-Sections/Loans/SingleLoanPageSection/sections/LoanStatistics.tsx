interface StatisticProps {
  value: string;
  label: string;
}

const Statistic = ({ value, label }: StatisticProps) => (
  <div className="text-center">
    <div className="text-2xl md:text-3xl font-bold text-finance-blue mb-2">
      {value}
    </div>
    <div className="text-sm text-finance-gray-dark">
      {label}
    </div>
  </div>
);

interface LoanStatisticsProps {
  interestRate?: string;
  maxAmount?: string;
  paymentPeriod?: string;
}

export const LoanStatistics = ({ 
  interestRate = "5.4%",
  maxAmount = "Tzs 20 Million", 
  paymentPeriod = "15 Years"
}: LoanStatisticsProps) => {
  return (
    <div className="text-center mb-8">
      <h2 className="section-title mb-2">
        Why Choose Home Finance Loan
      </h2>
      <p className="section-subtitle mb-16">
        Let us know how we can help you today!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto my-20">
        <Statistic 
          value={interestRate}
          label="Interest Rate Per Annum"
        />
        <Statistic 
          value={maxAmount}
          label="Starts as much as Tzs 20 Million"
        />
        <Statistic 
          value={paymentPeriod}
          label="Favourable Payment Periods"
        />
      </div>
    </div>
  );
};