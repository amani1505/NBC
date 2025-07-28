import Button from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { TargetedCurrency } from "@/types/forex";

interface TargetedCurrenciesListProps {
  currencies: TargetedCurrency[];
  onRemove: (id: string) => void;
}

export const TargetedCurrenciesList = ({
  currencies,
  onRemove,
}: TargetedCurrenciesListProps) => {
  if (currencies.length === 0) {
    return (
      <div className="text-center py-4 text-muted-foreground text-sm">
        No targeted currencies added yet
      </div>
    );
  }

  return (
    <Card className="space-y-2 px-4">
      <h4 className="text-sm font-medium text-muted-foreground">
        Targeted Currencies
      </h4>
      <div className="space-y-2">
        {currencies.map((currency) => (
          <div
            key={currency.id}
            className="flex items-center justify-between p-3 bg-card border rounded-lg border-gray-300"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{currency.flag}</span>
              <div>
                <div className="font-medium text-foreground">
                  {currency.amount.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">
                  {currency.code}
                </div>
              </div>
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => onRemove(currency.id)}
              className="px-4"
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};
