import type { PaginationItemProps } from "@/types/pagination";
import { buttonBaseStyles } from "@/utils/buttonstyles";

const DynamicPaginationItem: React.FC<PaginationItemProps> = ({
    children,
    onClick,
    isActive = false,
    disabled = false,
    className = '',
  }) => {
    const baseClasses = `${buttonBaseStyles} ${
      isActive
        ? 'bg-nbc-dark-950 text-primary-foreground hover:bg-nbc-dark-800'
        : 'hover:bg-accent hover:text-accent-foreground'
    } ${className} cursor-pointer`;
  
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={baseClasses}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
      </button>
    );
  };

  export default DynamicPaginationItem