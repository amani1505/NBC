export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    showFirstLast?: boolean;
    showPreviousNextText?:boolean
    showPrevNext?: boolean;
    siblingCount?: number;
    className?: string;
    disabled?: boolean;
  }
  
  export interface PaginationItemProps {
    children: React.ReactNode;
    onClick?: () => void;
    isActive?: boolean;
    disabled?: boolean;
    className?: string;
  }
  
  export interface PaginationEllipsisProps {
    className?: string;
  }