import { useParams } from "react-router-dom";
import { accountComparisons, accountFeatures, accountTypes } from "@/__fakeData__/accountsData";
import type { FilterOptions } from "@/types/accounts";
import { useState, useMemo, useEffect } from "react";
import { FeatureComparisonTable } from "./Parts/FeatureComparisonTable";
import { AccountButton } from "./Parts/AccountButton";
import { FilterDropdowns } from "./Parts/FilterDropdowns";

import { deslugify } from "@/lib/utils";
import HeroSection from "@/components/reusable/HeroSection";

export default function CompareAccountPageSection() {
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'personal',
    customerType: 'individual',
  });
  const [userInteracted, setUserInteracted] = useState(false);
  const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);

  const { compareAccountName } = useParams();

  const readableTitle: string = compareAccountName
    ? deslugify(compareAccountName)
    : "Personal Banking Insurance";
  const slides = [
    {
      title: `${readableTitle}`,
      description:
        "Empower your project with our comprehensive wireframe kits designed to meet the needs of any platform",
      buttonText: "",
      imageUrl: "/images/individual-hero.jpg",
    },
  ];

  // Filter accounts based on current filters
  const filteredAccounts = useMemo(() => {
    return accountTypes.filter((account) => {
      const categoryMatch = filters.category === 'all' || account.category === filters.category;
      const customerTypeMatch = filters.customerType === 'all' || account.customerType === filters.customerType;
      return categoryMatch && customerTypeMatch;
    });
  }, [filters]);

  // Get comparisons for selected accounts
  const selectedComparisons = useMemo(() => {
    return accountComparisons.filter((comparison) =>
      selectedAccounts.some((selected) => 
        comparison.id.includes(selected) || comparison.name.toLowerCase().includes(selected)
      )
    );
  }, [selectedAccounts]);

  const toggleAccountSelection = (accountId: string) => {
    setUserInteracted(true);
    setSelectedAccounts((prev) => {
      if (prev.includes(accountId)) {
        return prev.filter((id) => id !== accountId);
      } else {
        return [...prev, accountId];
      }
    });
  };

  // Set default selection only when user hasn't interacted and there are filtered accounts
  useEffect(() => {
    if (!userInteracted && filteredAccounts.length > 0) {
      setSelectedAccounts([filteredAccounts[0].id]);
    }
    if (filteredAccounts.length === 0) {
      setSelectedAccounts([]);
    }
  }, [filters, filteredAccounts, userInteracted]);

  return (
    <>
      <HeroSection slides={slides} hasForex={false} height="60vh" />
      <div className="max-w-7xl mx-auto p-6 bg-background">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-nbc-dark-950">Select Category</h1>
          <FilterDropdowns filters={filters} onFiltersChange={setFilters} />
        </div>

        {/* Account Type Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {filteredAccounts.map((account) => (
            <AccountButton
              key={account.id}
              account={account}
              isSelected={selectedAccounts.includes(account.id)}
              onClick={() => toggleAccountSelection(account.id)}
            />
          ))}
        </div>

        {/* Feature Comparison Table - Always render to show message when no accounts selected */}
        <FeatureComparisonTable
          comparisons={selectedComparisons}
          features={accountFeatures}
        />
      </div>
    </>
  );
}