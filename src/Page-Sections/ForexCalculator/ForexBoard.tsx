import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { currencies } from "@/data/currencies";
import type { Currency } from "@/types/forex";
import { Card } from "@/components/ui/card";


export const ForexBoard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCurrencies = currencies.filter((currency) =>
    currency.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    currency.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-2xl p-6">
      <h2 className="text-xl font-semibold text-nbc-dark-950 mb-4">Forex Board</h2>
      
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Table */}
      <Card className="overflow-hidden rounded-lg border px-4">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50">
              <th className="text-left p-3 text-sm font-medium text-forex-table-header">
                Country & Currency Code
              </th>
              <th className="text-center p-3 text-sm font-medium text-forex-table-header">
                Buying Price
              </th>
              <th className="text-center p-3 text-sm font-medium text-forex-table-header">
                Selling Price
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCurrencies.map((currency, index) => (
              <CurrencyRow key={`${currency.code}-${index}`} currency={currency} />
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

interface CurrencyRowProps {
  currency: Currency;
}

const CurrencyRow = ({ currency }: CurrencyRowProps) => {
  return (
    <tr className="border-b border-border hover:bg-muted/20 transition-colors">
      <td className="p-3">
        <div className="flex items-center gap-3">
          <span className="text-lg">{currency.flag}</span>
          <div>
            <div className="font-medium text-foreground">
              {currency.country} ({currency.code})
            </div>
          </div>
        </div>
      </td>
      <td className="p-3 text-center">
        <span className="inline-flex items-center text-green-700 font-medium">
          ▲ {currency.buyingPrice.toFixed(2)}
        </span>
      </td>
      <td className="p-3 text-center">
        <span className="inline-flex items-center text-red-700 font-medium">
          ▼ {currency.sellingPrice.toFixed(2)}
        </span>
      </td>
    </tr>
  );
};