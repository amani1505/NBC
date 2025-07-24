import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureIconProps {
  hasFeature: boolean;
  className?: string;
}

export function FeatureIcon({ hasFeature, className }: FeatureIconProps) {
  if (hasFeature) {
    return (
      <Check 
        className={cn("h-5 w-5 text-green-700", className)} 
        strokeWidth={2.5}
      />
    );
  }

  return (
    <X 
      className={cn("h-5 w-5 text-red-500", className)} 
      strokeWidth={2.5}
    />
  );
}