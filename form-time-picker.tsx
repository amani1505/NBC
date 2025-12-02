"use client"

import { ClockIcon } from "lucide-react"
import {
  Group,
  Label,
  TimeField as TimeFieldRac,
  TimeFieldProps as AriaTimeFieldProps,
} from "react-aria-components"
import { TimeValue } from "react-aria"
import { forwardRef, useState, useEffect, useRef } from "react"

import { DateInput } from "@/components/ui/datefield-rac"
import { cn } from "@/lib/utils"

export interface FormTimePickerProps extends Omit<AriaTimeFieldProps<TimeValue>, 'children' | 'onChange'> {
  // Custom onChange that handles TimeValue properly
  onChange?: (time: TimeValue | null) => void;
  // Label props
  label?: string
  labelClassName?: string
  hideLabel?: boolean

  // Validation props
  required?: boolean
  disabled?: boolean
  readOnly?: boolean

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
  placeholderValue?: TimeValue

  // Hide time zone
  hideTimeZone?: boolean

  // Custom formats
  hourCycle?: 12 | 24
}

export const FormTimePicker = forwardRef<HTMLDivElement, FormTimePickerProps>(
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

      // Rest of TimeField props
      ...timeFieldProps
    },
    ref
  ) => {
    const [showQuickPick, setShowQuickPick] = useState(false)
    const [dropdownPosition, setDropdownPosition] = useState<'top' | 'bottom'>('bottom')
    const dropdownRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    const hasError = Boolean(error)
    const describedBy = [
      error ? `${timeFieldProps.id || 'timepicker'}-error` : '',
      description ? `${timeFieldProps.id || 'timepicker'}-description` : '',
      ariaDescribedBy
    ].filter(Boolean).join(' ') || undefined

    // Quick pick times
    const quickTimes = [
      { label: "Morning", times: ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00"] },
      { label: "Afternoon", times: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"] },
      { label: "Evening", times: ["18:00", "19:00", "20:00", "21:00", "22:00", "23:00"] },
    ]

    // Generate hours (0-23) and minutes (0-59)
    const hours = Array.from({ length: 24 }, (_, i) => i)
    const minutes = Array.from({ length: 60 }, (_, i) => i)

    const [selectedHour, setSelectedHour] = useState<number | null>(null)
    const [selectedMinute, setSelectedMinute] = useState<number | null>(null)

    const handleHourSelect = (hour: number) => {
      setSelectedHour(hour)
      // Auto-submit if minute is already selected
      if (selectedMinute !== null) {
        const timeValue = { hour: hour, minute: selectedMinute, second: 0, millisecond: 0 }
        onChange?.(timeValue as TimeValue)
        setShowQuickPick(false)
        setSelectedHour(null)
        setSelectedMinute(null)
      }
    }

    const handleMinuteSelect = (minute: number) => {
      setSelectedMinute(minute)
      // Auto-submit if hour is already selected
      if (selectedHour !== null) {
        const timeValue = { hour: selectedHour, minute: minute, second: 0, millisecond: 0 }
        onChange?.(timeValue as TimeValue)
        setShowQuickPick(false)
        setSelectedHour(null)
        setSelectedMinute(null)
      }
    }

    // Click outside handler
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target as Node)
        ) {
          setShowQuickPick(false)
        }
      }

      if (showQuickPick) {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [showQuickPick])

    // Position detection
    useEffect(() => {
      if (showQuickPick && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        const spaceBelow = window.innerHeight - rect.bottom
        const spaceAbove = rect.top
        const dropdownHeight = 450 // Approximate height of dropdown

        if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
          setDropdownPosition('top')
        } else {
          setDropdownPosition('bottom')
        }
      }
    }, [showQuickPick])

    return (
      <TimeFieldRac
        ref={ref}
        className={cn("*:not-first:mt-2", className)}
        isRequired={required}
        isDisabled={disabled}
        isReadOnly={readOnly}
        placeholderValue={placeholderValue}
        hideTimeZone={hideTimeZone}
        hourCycle={hourCycle}
        aria-label={ariaLabel}
        aria-describedby={describedBy}
        onChange={onChange}
        {...timeFieldProps}
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
            id={`${timeFieldProps.id || 'timepicker'}-description`}
            className={cn("text-muted-foreground text-xs", descriptionClassName)}
          >
            {description}
          </p>
        )}

        <div className="relative">
          <Group className="relative">
            <DateInput
              className={cn(
                "pr-10",
                hasError && "border-destructive focus-within:ring-destructive focus-within:border-destructive",
                !hasError && "focus-within:ring-primary focus-within:border-primary",
                inputClassName
              )}
            />
            <button
              ref={buttonRef}
              type="button"
              className={cn(
                "text-muted-foreground/80 hover:text-foreground absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center p-0 w-5 h-5 bg-transparent border-0 transition-colors outline-none",
                hasError && "text-destructive/80 hover:text-destructive",
                disabled && "opacity-50 cursor-not-allowed pointer-events-none",
                buttonClassName
              )}
              disabled={disabled}
              onClick={() => setShowQuickPick(!showQuickPick)}
            >
              <ClockIcon size={16} />
            </button>
          </Group>

          {showQuickPick && (
            <div
              ref={dropdownRef}
              className={cn(
                "absolute z-[999999] w-[320px] rounded-lg border bg-background shadow-lg animate-in fade-in-0 zoom-in-95",
                dropdownPosition === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
              )}
            >
              <div className="max-h-[450px] overflow-auto p-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <h3 className="text-sm font-semibold">Select Time</h3>
                    <button
                      onClick={() => setShowQuickPick(false)}
                      className="text-muted-foreground hover:text-foreground text-xs"
                    >
                      Close
                    </button>
                  </div>

                  {/* Hour and Minute Picker */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground mb-2">Hour</h4>
                      <div className="grid grid-cols-6 gap-1 max-h-[180px] overflow-y-auto">
                        {hours.map((hour) => (
                          <button
                            key={hour}
                            onClick={() => handleHourSelect(hour)}
                            className={cn(
                              "text-foreground hover:bg-accent rounded-md px-2 py-1.5 text-sm font-medium transition-colors outline-none",
                              selectedHour === hour && "bg-primary text-primary-foreground hover:bg-primary/90"
                            )}
                          >
                            {String(hour).padStart(2, '0')}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground mb-2">Minute</h4>
                      <div className="grid grid-cols-6 gap-1 max-h-[180px] overflow-y-auto">
                        {minutes.map((minute) => (
                          <button
                            key={minute}
                            onClick={() => handleMinuteSelect(minute)}
                            className={cn(
                              "text-foreground hover:bg-accent rounded-md px-2 py-1.5 text-sm font-medium transition-colors outline-none",
                              selectedMinute === minute && "bg-primary text-primary-foreground hover:bg-primary/90"
                            )}
                          >
                            {String(minute).padStart(2, '0')}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Selected Time Display */}
                    {(selectedHour !== null || selectedMinute !== null) && (
                      <div className="border-t pt-3">
                        <div className="text-center">
                          <span className="text-sm text-muted-foreground">Selected: </span>
                          <span className="text-lg font-semibold">
                            {selectedHour !== null ? String(selectedHour).padStart(2, '0') : '--'}:
                            {selectedMinute !== null ? String(selectedMinute).padStart(2, '0') : '--'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Quick Pick Section */}
                  <div className="border-t pt-3">
                    <h4 className="text-xs font-medium text-muted-foreground mb-2">Quick Pick</h4>
                    {quickTimes.map((section) => (
                      <div key={section.label} className="space-y-2 mb-3">
                        <h5 className="text-xs text-muted-foreground/70">{section.label}</h5>
                        <div className="grid grid-cols-3 gap-1.5">
                          {section.times.map((time) => (
                            <button
                              key={time}
                              onClick={() => {
                                const [hours, minutes] = time.split(':').map(Number)
                                const timeValue = { hour: hours, minute: minutes, second: 0, millisecond: 0 }
                                onChange?.(timeValue as TimeValue)
                                setShowQuickPick(false)
                              }}
                              className="text-foreground hover:bg-accent rounded-md px-2 py-1.5 text-xs font-medium transition-colors outline-none"
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {error && (
          <p
            id={`${timeFieldProps.id || 'timepicker'}-error`}
            className={cn("text-destructive text-xs mt-1", errorClassName)}
            role="alert"
            aria-live="polite"
          >
            {error}
          </p>
        )}
      </TimeFieldRac>
    )
  }
)

FormTimePicker.displayName = "FormTimePicker"

export default FormTimePicker
