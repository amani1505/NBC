import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { TargetedCurrency } from "@/types/forex";
import { currencyOptions } from "@/data/currencies";
import { TargetedCurrenciesList } from "./TargetedCurrenciesList";
import { Card } from "@/components/ui/card";

export const CurrencyCalculator = () => {
  const [fromAmount, setFromAmount] = useState("9,736.16");
  const [toAmount, setToAmount] = useState("7,253.43");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("GBP");
  const [selectedTargetCurrency, setSelectedTargetCurrency] = useState("AED");
  const [targetedCurrencies, setTargetedCurrencies] = useState<
    TargetedCurrency[]
  >([
    { id: "1", code: "CNY", amount: 9736.16, flag: "🇨🇳" },
    { id: "2", code: "CNY", amount: 9736.16, flag: "🇨🇳" },
    { id: "3", code: "CNY", amount: 9736.16, flag: "🇨🇳" },
  ]);

  const exchangeRate = "0.74499";
  const timestamp = "09:05";

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const handleAddTargetCurrency = () => {
    const newCurrency: TargetedCurrency = {
      id: Date.now().toString(),
      code: selectedTargetCurrency,
      amount: parseFloat(fromAmount.replace(/,/g, "")),
      flag:
        currencyOptions.find((opt) => opt.value === selectedTargetCurrency)
          ?.flag || "🏳️",
    };
    setTargetedCurrencies([...targetedCurrencies, newCurrency]);
  };

  const handleRemoveTargetCurrency = (id: string) => {
    setTargetedCurrencies(
      targetedCurrencies.filter((currency) => currency.id !== id)
    );
  };

  return (
    <div className="w-full max-w-md p-6">
      <h2 className="text-xl font-semibold text-foreground mb-6">
        Currency Calculator
      </h2>

      {/* Currency Conversion */}
      <Card className=" mb-6 px-4">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <Input
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="text-lg font-medium"
            />
          </div>
          <Select value={fromCurrency} onValueChange={setFromCurrency}>
            <SelectTrigger className="w-28">
              <SelectValue>
                <span className="flex items-center gap-1">
                  {
                    currencyOptions.find((opt) => opt.value === fromCurrency)
                      ?.flag
                  }{" "}
                  {fromCurrency}
                </span>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {currencyOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <span className="flex items-center gap-2">
                    {option.flag} {option.label}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSwapCurrencies}
            className="p-2"
          >
            <ArrowLeftRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-1">
            <Input
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              className="text-lg font-medium"
            />
          </div>
          <Select value={toCurrency} onValueChange={setToCurrency}>
            <SelectTrigger className="w-28">
              <SelectValue>
                <span className="flex items-center gap-1">
                  {
                    currencyOptions.find((opt) => opt.value === toCurrency)
                      ?.flag
                  }{" "}
                  {toCurrency}
                </span>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {currencyOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <span className="flex items-center gap-2">
                    {option.flag} {option.label}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mb-6 p-3 bg-muted/50 rounded-lg">
          <div className="text-sm text-muted-foreground">
            1 {fromCurrency} = {exchangeRate} {toCurrency}
          </div>
          <div className="text-xs text-muted-foreground">
            Mid-market exchange rate at {timestamp}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-foreground">Targeted Currencies</h3>

          <div className="flex gap-2">
            <Select
              value={selectedTargetCurrency}
              onValueChange={setSelectedTargetCurrency}
            >
              <SelectTrigger className="flex-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencyOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <span className="flex items-center gap-2">
                      {option.flag} {option.label}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={handleAddTargetCurrency} className="px-6">
              Add
            </Button>
          </div>
        </div>
      </Card>

      {/* Exchange Rate Info */}

      {/* Targeted Currencies Section */}

      <TargetedCurrenciesList
        currencies={targetedCurrencies}
        onRemove={handleRemoveTargetCurrency}
      />
    </div>
  );
};
