// components/SliderField.tsx
import React from 'react';
import { Slider } from "@/components/ui/slider";
import type { SliderFieldProps } from '@/types/loan.types';


const SliderField: React.FC<SliderFieldProps> = ({
  label,
  value,
  onChange,
  min,
  max,
  step,
  formatValue,
  minLabel,
  maxLabel,
}) => {
  const handleChange = (values: number[]) => {
    onChange(values[0]);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-finance-gray-dark">
          {label}
        </label>
        <span className="text-sm font-semibold text-finance-blue">
          {formatValue(value)}
        </span>
      </div>
      <Slider
        value={[value]}
        onValueChange={handleChange}
        max={max}
        min={min}
        step={step}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-finance-gray-dark mt-1">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
};

export default SliderField;