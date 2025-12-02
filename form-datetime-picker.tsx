"use client"

import { CalendarIcon } from "lucide-react"
import {
  Button,
  DatePicker,
  Dialog,
  Group,
  Label,
  Popover,
  DatePickerProps as AriaDatePickerProps,
} from "react-aria-components"
import { DateValue } from "react-aria"
import { forwardRef } from "react"

import { Calendar } from "@/components/ui/calendar-rac"
import { DateInput } from "@/components/ui/datefield-rac"
import { cn } from "@/lib/utils"

export interface FormDateTimePickerProps extends Omit<AriaDatePickerProps<DateValue>, 'children' | 'onChange'> {
  // Custom onChange that handles DateValue properly
  onChange?: (date: DateValue | null) => void;
  // Label props
  label?: string
  labelClassName?: string
  hideLabel?: boolean

  // Validation props
  required?: boolean
  disabled?: boolean
  readOnly?: boolean

  // Date constraints
  minValue?: DateValue
  maxValue?: DateValue

  // Error handling
  error?: string
  errorClassName?: string

  // Description/Helper text
  description?: string
  descriptionClassName?: string

  // Styling
  className?: string
  inputClassName?: string
  buttonClassName?: string
  popoverClassName?: string

  // Accessibility
  'aria-label'?: string
  'aria-describedby'?: string

  // Placeholder
  placeholderValue?: DateValue

  // Hide time zone
  hideTimeZone?: boolean

  // Custom formats
  hourCycle?: 12 | 24
}

export const FormDateTimePicker = forwardRef<HTMLDivElement, FormDateTimePickerProps>(
  (
    {
      // Label props
      label,
      labelClassName,
      hideLabel = false,

      // Validation props
      required = false,
      disabled = false,
      readOnly = false,

      // Date constraints
      minValue,
      maxValue,

      // Error handling
      error,
      errorClassName,

      // Description
      description,
      descriptionClassName,

      // Styling
      className,
      inputClassName,
      buttonClassName,
      popoverClassName,

      // Accessibility
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,

      // Other props
      placeholderValue,
      hideTimeZone = false,
      hourCycle = 24,

      // Custom onChange handler
      onChange,

      // Rest of DatePicker props
      ...datePickerProps
    },
    ref
  ) => {
    const hasError = Boolean(error)
    const describedBy = [
      error ? `${datePickerProps.id || 'datetimepicker'}-error` : '',
      description ? `${datePickerProps.id || 'datetimepicker'}-description` : '',
      ariaDescribedBy
    ].filter(Boolean).join(' ') || undefined

    return (
      <DatePicker
        ref={ref}
        className={cn("*:not-first:mt-2", className)}
        isRequired={required}
        isDisabled={disabled}
        isReadOnly={readOnly}
        minValue={minValue}
        maxValue={maxValue}
        placeholderValue={placeholderValue}
        granularity="minute"
        hideTimeZone={hideTimeZone}
        hourCycle={hourCycle}
        aria-label={ariaLabel}
        aria-describedby={describedBy}
        onChange={onChange}
        {...datePickerProps}
      >
        {!hideLabel && (label || required) && (
          <Label
            className={cn(
              "text-foreground text-sm font-medium",
              hasError && "text-destructive",
              labelClassName
            )}
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Label>
        )}

        {description && !hasError && (
          <p
            id={`${datePickerProps.id || 'datetimepicker'}-description`}
            className={cn("text-muted-foreground text-xs", descriptionClassName)}
          >
            {description}
          </p>
        )}

        <div className="flex">
          <Group className="w-full">
            <DateInput
              className={cn(
                "pe-9",
                hasError && "border-destructive focus-within:ring-destructive focus-within:border-destructive",
                !hasError && "focus-within:ring-primary focus-within:border-primary",
                inputClassName
              )}
            />
          </Group>

          <Button
            className={cn(
              "text-muted-foreground/80 hover:text-foreground data-focus-visible:border-primary data-focus-visible:ring-primary z-50 -ms-9 -me-px flex w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none data-focus-visible:ring-1",
              hasError && "text-destructive/80 hover:text-destructive data-focus-visible:border-destructive data-focus-visible:ring-destructive",
              disabled && "opacity-50 cursor-not-allowed",
              buttonClassName
            )}
            isDisabled={disabled}
          >
            <CalendarIcon size={16} />
          </Button>
        </div>

        {error && (
          <p
            id={`${datePickerProps.id || 'datetimepicker'}-error`}
            className={cn("text-destructive text-xs mt-1", errorClassName)}
            role="alert"
            aria-live="polite"
          >
            {error}
          </p>
        )}

        <Popover
          className={cn(
            "bg-background text-popover-foreground data-entering:animate-in data-exiting:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 z-[999999999999] rounded-lg border shadow-lg outline-hidden",
            popoverClassName
          )}
          offset={8}
          placement="bottom"
          shouldFlip={true}
          containerPadding={12}
        >
          <Dialog className="max-h-[inherit] overflow-auto p-2">
            <Calendar />
          </Dialog>
        </Popover>
      </DatePicker>
    )
  }
)

FormDateTimePicker.displayName = "FormDateTimePicker"

export default FormDateTimePicker
