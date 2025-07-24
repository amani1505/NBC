import Button from "@/components/ui/button";
import type { AccountComparison, AccountFeature } from "@/types/accounts";
import { FeatureIcon } from "./FeatureIcon";

interface FeatureComparisonTableProps {
  comparisons: AccountComparison[];
  features: AccountFeature[];
}

export function FeatureComparisonTable({ comparisons, features }: FeatureComparisonTableProps) {
  if (comparisons.length === 0) {
    return (
      <div className="w-full bg-white rounded-lg overflow-hidden border border-gray-300 shadow-sm p-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="mb-4">
            <svg 
              className="w-16 h-16 text-gray-400 mx-auto mb-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No Accounts Selected
          </h3>
          <p className="text-gray-500">
            Please select one or more accounts from the options above to compare their features and benefits.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded overflow-hidden border border-gray-300 shadow-sm">
      {/* Header */}
      <div className={`grid grid-cols-${comparisons.length + 1}`}>
        <div className="p-4 font-semibold text-left bg-white text-foreground border-r border-b border-gray-300">
          Features
        </div>
        {comparisons.map((comparison, index) => (
          <div 
            key={comparison.id} 
            className={`p-4 font-semibold text-center bg-nbc-dark-950 text-white border-b border-gray-300 ${
              index < comparisons.length - 1 ? 'border-r border-white/20' : ''
            }`}
          >
            {comparison.name}
          </div>
        ))}
      </div>

      {/* Feature Rows */}
      {features.map((feature, index) => (
        <div
          key={feature.id}
          className={`grid grid-cols-${comparisons.length + 1} ${
            index % 2 === 1 ? 'bg-table-row-even' : 'bg-white'
          } border-b border-gray-300 last:border-b-0`}
        >
          <div className="p-4 text-left font-medium text-foreground border-r border-gray-300">
            {feature.name}
          </div>
          {comparisons.map((comparison, compIndex) => (
            <div 
              key={comparison.id} 
              className={`p-4 flex justify-center items-center ${
                compIndex < comparisons.length - 1 ? 'border-r border-gray-300' : ''
              }`}
            >
              <FeatureIcon hasFeature={comparison.features[feature.id]} />
            </div>
          ))}
        </div>
      ))}

      {/* Action Buttons Row */}
      <div className={`grid grid-cols-${comparisons.length + 1} bg-white`}>
        <div className="p-4 border-r border-gray-300"></div>
        {comparisons.map((comparison, index) => (
          <div 
            key={comparison.id} 
            className={`p-4 flex justify-center ${
              index < comparisons.length - 1 ? 'border-r border-gray-300' : ''
            }`}
          >
            <Button variant="primary" >
              Open Account
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}