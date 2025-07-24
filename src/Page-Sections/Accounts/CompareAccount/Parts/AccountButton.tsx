import  Button  from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { AccountType } from "@/types/accounts";


interface AccountButtonProps {
  account: AccountType;
  isSelected: boolean;
  onClick: () => void;
}

export function AccountButton({ account, isSelected, onClick }: AccountButtonProps) {
  return (
    <Button
      variant={isSelected ? "primary" : "outline"}
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded text-sm font-medium transition-all cursor-pointer",
        isSelected
          ? "bg-nbc-dark-950 text-primary-foreground border-primary"
          : "bg-banking-gray text-foreground border-banking-gray-dark hover:bg-banking-gray-dark"
      )}
    >
      {account.name}
    </Button>
  );
}