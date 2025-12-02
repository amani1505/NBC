"use client";

import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
  helpText?: string;
  required?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showPasswordToggle?: boolean;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      className,
      label,
      description,
      error,
      helpText,
      required,
      leftIcon,
      rightIcon,
      showPasswordToggle = false,
      type,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState(type);

    // Handle password toggle
    const togglePassword = () => {
      setShowPassword(!showPassword);
      setInputType(showPassword ? "password" : "text");
    };

    // Determine if we should show the password toggle
    const shouldShowPasswordToggle =
      showPasswordToggle &&
      (type === "password" || inputType === "password" || inputType === "text");

    // If showPasswordToggle is true and we have a rightIcon, prioritize the toggle
    const effectiveRightIcon = shouldShowPasswordToggle ? null : rightIcon;

    return (
      <div className="space-y-2">
        <div>
          {label && (
            <label className="block text-sm font-medium text-foreground">
              {label}
              {required && <span className="text-destructive ml-1">*</span>}
            </label>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>

        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-marathon-gray pointer-events-none">
              {leftIcon}
            </div>
          )}

          {/* Input Field */}
          <input
            className={cn(
              "flex  w-full rounded-md border border-form-border bg-form-background py-2 text-sm transition-all duration-300",
              "placeholder:text-marathon-gray placeholder:text-sm",
              "focus:border-form-focus focus:ring-1 focus:ring-form-focus/20 focus:outline-none",
              "hover:border-primary-950 hover:bg-white/10",
              "disabled:cursor-not-allowed disabled:opacity-50",
              // Dynamic padding based on icons
              leftIcon ? "pl-10" : "pl-4",
              effectiveRightIcon || shouldShowPasswordToggle ? "pr-10" : "pr-4",
              error &&
                "border-destructive focus:border-destructive focus:ring-destructive/20",
              className
            )}
            type={shouldShowPasswordToggle ? inputType : type}
            ref={ref}
            {...props}
          />

          {/* Right Icon or Password Toggle */}
          {(effectiveRightIcon || shouldShowPasswordToggle) && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {shouldShowPasswordToggle ? (
                <button
                  type="button"
                  onClick={togglePassword}
                  className="text-marathon-gray hover:text-foreground transition-colors duration-200 focus:outline-none focus:text-foreground"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              ) : (
                <div className="text-marathon-gray">
                  {effectiveRightIcon}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Help Text - shown when there's no error */}
        {!error && helpText && (
          <p className="text-xs text-muted-foreground mt-1">{helpText}</p>
        )}

        {/* Error Message - takes priority over help text */}
        {error && <p className="text-xs text-destructive mt-1">{error}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export { FormInput };
