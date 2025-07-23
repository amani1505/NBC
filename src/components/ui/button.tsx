import React from "react";

type ButtonProps = {
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "outline"
    | "ghost"
    | "link"
    | "gradient"
    | "default"
    | "lightOutline";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  iconPosition?: "left" | "right";
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  [key: string]: unknown;
};

const Button = ({
  variant = "default",
  size = "md",
  type = "button",
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = "left",
  children,
  onClick,
  className = "",
  ...props
}: ButtonProps) => {
  // Base styles
  const baseStyles =
    "inline-flex items-center justify-center font-medium focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden transform  active:scale-95 transition-all duration-300 ease-in-out cursor-pointer";

  // Variant styles with smooth color transitions
  const variants = {
    primary:
      "bg-nbc-dark-950 text-white shadow-sm hover:shadow-lg  hover:bg-nbc-dark-700  transition-colors duration-300",
    secondary:
      "bg-gray-100 text-gray-900 border border-gray-300  hover:bg-gray-200 hover:text-gray-800 hover:border-gray-400 transition-colors duration-300",
    success:
      "bg-green-600 text-white shadow-sm  hover:bg-green-700 hover:shadow-green-200/50 transition-colors duration-300",
    danger:
      "bg-red-600 text-white shadow-sm  hover:bg-red-700 hover:shadow-red-200/50 transition-colors duration-300",
    warning:
      "bg-yellow-500 text-white shadow-sm  hover:bg-yellow-600 hover:shadow-yellow-200/50 transition-colors duration-300",
    info: "bg-cyan-600 text-white shadow-sm  hover:bg-cyan-700 hover:shadow-cyan-200/50 transition-colors duration-300",
    outline:
      "border-2 border-nbc-dark-950 text-nbc-dark-700 bg-transparent  group hover:border-nbc-dark-700 transition-colors duration-300",
    ghost:
      "text-gray-700 bg-transparent  hover:bg-gray-100 hover:text-gray-800 transition-colors duration-300",
    link: "text-nbc-dark-600 bg-transparent p-0 hover:scale-105 underline-offset-4 hover:underline hover:text-nbc-dark-500 transition-colors duration-300",
    gradient:
      "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-sm  hover:from-purple-600 hover:to-pink-700 hover:shadow-purple-200/50 transition-all duration-300",
    default:
      "bg-white text-nbc-dark-950  hover:bg-gray-50 transition-colors duration-300",
    lightOutline:
      "border-2 border-white text-white bg-transparent  group hover:border-white transition-colors duration-300",
  };

  // Size styles
  const sizes = {
    xs: "px-2 py-1 text-xs rounded gap-1",
    sm: "px-3 py-1.5 text-sm rounded-md gap-1.5",
    md: "px-4 py-2 text-sm rounded-md gap-2",
    lg: "px-6 py-3 text-base rounded-lg gap-2",
    xl: "px-8 py-4 text-lg rounded-lg gap-3",
  };

  // Icon sizes based on button size
  const iconSizes = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // Special handling for outline variant with fill animation
  const isOutline = variant === "outline";
  const isLightOutline = variant === "lightOutline";

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={buttonClasses}
      {...props}
    >
      {/* Outline button fill animation */}
      {isOutline && (
        <span className="absolute inset-0 bg-nbc-dark-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-inherit"></span>
      )}

          {isLightOutline && (
        <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-inherit"></span>
      )}

      {/* Content wrapper for outline buttons */}
      <span
        className={`relative z-10 flex items-center ${
          isOutline
            ? "group-hover:text-white transition-colors duration-300"
            : ""


        } 
        ${
          isLightOutline
            ? "group-hover:text-nbc-dark-950 transition-colors duration-300"
            : ""

            
        }    
        
        ${
          sizes[size]?.includes("gap")
            ? sizes[size]?.split(" ")?.find((c) => c.includes("gap"))
            : ""
        }`}
      >
        {loading && (
          <svg
            className="animate-spin mr-2"
            width={iconSizes[size]}
            height={iconSizes[size]}
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {Icon && iconPosition === "left" && !loading && (
          <Icon size={iconSizes[size]} className={isOutline ? "mr-2" : ""} />
        )}

        {children}

        {Icon && iconPosition === "right" && !loading && (
          <Icon size={iconSizes[size]} className={isOutline ? "ml-2" : ""} />
        )}
      </span>
    </button>
  );
};

export default Button;
