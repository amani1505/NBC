import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  helpText?:string
}

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, label, description, error, required,helpText, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <div>
          {label && (
            <label className=" block text-sm font-medium text-foreground">
              {label}
              {required && <span className="text-destructive ml-1">*</span>}
            </label>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <textarea
          className={cn(
            "flex min-h-[120px] w-full rounded-lg border border-form-border bg-form-background px-4 py-3 text-sm transition-all duration-300",
            "placeholder:text-marathon-gray resize-none",
            "focus:border-form-focus focus:ring-1 focus:ring-form-focus/20 focus:outline-none",
            "hover:border-primary-950 hover:bg-marathon-gray-light/30",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error &&
              "border-destructive focus:border-destructive focus:ring-destructive/20",
            className
          )}
          ref={ref}
          {...props}
        />
           {!error && helpText && (
          <p className="text-xs text-muted-foreground mt-1">{helpText}</p>
        )}

        {error && <p className="text-sm text-destructive">{error}</p>}

      </div>
    );
  }
);

FormTextarea.displayName = "FormTextarea";

export { FormTextarea };
