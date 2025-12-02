"use client";
import React, { useState, useRef, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
 
import { X, Search, Plus, Check, ChevronDown, ChevronUp } from "lucide-react";
import { FormInput } from "./form-input";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface UniversalSelectProps {
  // Value props - can be string or string[] based on multiple prop
  value: string | string[];
  onValueChange: (value: string | string[]) => void;

  // Options
  options: SelectOption[];
  onAddOption?: (option: SelectOption) => void;
  onAddNewClick?: () => void; // New prop for triggering parent action

  // Configuration flags
  multiple?: boolean;
  searchable?: boolean;
  allowAddNew?: boolean;

  // Limits and constraints
  maxSelections?: number;

  // UI customization
  label?: string;
  placeholder?: string;
  addButtonText?: string;
  className?: string;
  triggerClassName?: string;
  labelClassName?: string;

  // States
  disabled?: boolean;
  required?: boolean;
  error?: string;
  helperText?: string;

  // HTML attributes
  id?: string;
  name?: string;
}

export const UniversalSelect: React.FC<UniversalSelectProps> = ({
  value,
  onValueChange,
  options,
  onAddOption,
  onAddNewClick,
  multiple = false,
  searchable = false,
  allowAddNew = false,
  maxSelections,
  label,
  placeholder = multiple ? "Select options" : "Select an option",
  addButtonText = "Add New Option",
  className,
  triggerClassName = "w-full hover:border-primary transition-colors duration-200",
  labelClassName = "text-sm font-medium text-foreground mb-2 block",
  disabled = false,
  required = false,
  error,
  helperText,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Type guards and helpers
  const valueArray = multiple ? (value as string[]) : [];
  const singleValue = multiple ? "" : (value as string);

  const filteredOptions = searchable
    ? options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  const selectedOptions = multiple
    ? (valueArray
        .map((v) => options.find((opt) => opt.value === v))
        .filter(Boolean) as SelectOption[])
    : [];

  const selectedOption = multiple
    ? null
    : options.find((opt) => opt.value === singleValue);

  // Click outside functionality
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && searchable && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleSelect = (optionValue: string) => {
    if (multiple) {
      const currentValues = value as string[];
      if (currentValues.includes(optionValue)) {
        onValueChange(currentValues.filter((v) => v !== optionValue));
      } else {
        if (!maxSelections || currentValues.length < maxSelections) {
          onValueChange([...currentValues, optionValue]);
        }
      }
    } else {
      onValueChange(optionValue);
      setIsOpen(false);
      setSearchTerm("");
    }
  };

  const removeItem = (optionValue: string) => {
    if (multiple) {
      const currentValues = value as string[];
      onValueChange(currentValues.filter((v) => v !== optionValue));
    }
  };

  const handleAddNewClick = () => {
    setIsOpen(false);
    setSearchTerm("");
    onAddNewClick?.();
  };

  const renderTrigger = () => {
    const baseClasses = `${triggerClassName} ${
      error ? "border-red-500 focus:border-red-500" : ""
    } 
      border rounded-md cursor-pointer ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`;

    if (multiple) {
      return (
        <div
          className={`${baseClasses} flex flex-wrap items-center gap-1 focus:border-form-focus focus:ring-1 focus:ring-form-focus/20 focus:outline-none py-1.5 px-4 min-h-10`}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          <div className="flex flex-wrap gap-1 flex-1 capitalize">
            {selectedOptions.length > 0 ? (
              selectedOptions.map((option) => (
                <span
                  key={option.value}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-primary-700 rounded-md text-sm capitalize"
                >
                  {option.label}
                  <X
                    size={14}
                    className="cursor-pointer hover:text-primary-950"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeItem(option.value);
                    }}
                  />
                </span>
              ))
            ) : (
              <span className="text-gray-400 text-xs">{placeholder}</span>
            )}
          </div>
          <div className="flex items-center">
            {isOpen ? (
              <ChevronUp size={16} className="text-gray-400" />
            ) : (
              <ChevronDown size={16} className="text-gray-400" />
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={`${baseClasses} flex items-center justify-between py-1.5 px-4 focus:border-form-focus focus:ring-1 focus:ring-form-focus/20 focus:outline-none`}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          <span
            className={`capitalize text-sm py-1  ${selectedOption ? "text-foreground" : "text-gray-500"}`}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          {searchable ? (
            <div className="flex items-center gap-2">
              <Search size={16} className="text-gray-400" />
              {isOpen ? (
                <ChevronUp size={16} className="text-gray-400" />
              ) : (
                <ChevronDown size={16} className="text-gray-400" />
              )}
            </div>
          ) : isOpen ? (
            <ChevronUp size={16} className="text-gray-400" />
          ) : (
            <ChevronDown size={16} className="text-gray-400" />
          )}
        </div>
      );
    }
  };

  const renderDropdownContent = () => (
    <div className="absolute top-full left-0 right-0 z-[9999999999] mt-1 bg-white border rounded-md shadow-lg">
      {/* Search Section */}
      {searchable && (
        <div className="p-2 border-b">
          <FormInput
            ref={inputRef}
            type="text"
            placeholder="Search options..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
      )}

      {/* Options List */}
      <div className="max-h-60 overflow-auto px-3 py-2">
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => {
            const isSelected = multiple
              ? (value as string[]).includes(option.value)
              : value === option.value;
            const isDisabled =
              option.disabled ||
              (multiple &&
                maxSelections &&
                (value as string[]).length >= maxSelections &&
                !isSelected);

            return (
              <div
                key={option.value}
                className={`px-3 py-2 cursor-pointer hover:bg-gray-100 flex items-center justify-between rounded
                  ${isSelected ? "bg-primary-950/5 text-primary-950" : ""}
                  ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={() => !isDisabled && handleSelect(option.value)}
              >
                <span className="text-sm capitalize">{option.label}</span>
                {isSelected && (
                  <Check size={16} className="text-secondary-950" />
                )}
              </div>
            );
          })
        ) : (
          <div className="px-3 py-2 text-gray-500">No options found</div>
        )}
      </div>

      {/* Add New Button - At the bottom */}
      {allowAddNew && onAddNewClick && (
        <div className="p-2 border-t">
          <Button
            type="button"
       
            size="sm"
            className="w-full"
            onClick={handleAddNewClick}
          >
            <Plus size={16} className="mr-2" />
            {addButtonText}
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <Label
          htmlFor={id}
          className={`${labelClassName} ${
            required
              ? "after:content-['*'] after:ml-0.5 after:text-red-500 capitalize"
              : ""
          }`}
        >
          {label}
        </Label>
      )}

      <div className="relative" ref={dropdownRef}>
        {renderTrigger()}
        {isOpen && !disabled && renderDropdownContent()}
      </div>

      {/* Selection Counter for Multiple */}
      {multiple && maxSelections && (
        <p className="text-xs text-gray-500">
          {(value as string[]).length}/{maxSelections} selected
        </p>
      )}

      {/* Error message */}
      {error && (
        <p className="mt-1 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}

      {/* Helper text */}
      {helperText && !error && (
        <p className="mt-1 text-xs text-gray-600">{helperText}</p>
      )}
    </div>
  );
};
