import { ChevronLeft, ChevronRight } from "lucide-react";
import DynamicPaginationItem from "./DynamicPaginationItem";
import DynamicPaginationEllipsis from "./DynamicPaginationEllipsis";
import type { PaginationProps } from "@/types/pagination";
import { usePaginationRange } from "@/hooks/usePaginationRange";
import { usePagination } from "@/hooks/usePagination";

const DynamicPagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    showFirstLast = false,
    showPreviousNextText = true,
    showPrevNext = true,
    siblingCount = 1,
    className = '',
    disabled = false,
  }) => {
    const paginationRange = usePaginationRange(currentPage, totalPages, siblingCount);
    const {
      goToPage,
      goToPrevious,
      goToNext,
      goToFirst,
      goToLast,
      canGoPrevious,
      canGoNext,
    } = usePagination(currentPage, totalPages, onPageChange);
  
    if (totalPages <= 1) return null;
  
    return (
      <nav
        role="navigation"
        aria-label="Pagination"
        className={`mx-auto flex w-full justify-center ${className}`}
      >
        <div className="flex flex-row items-center gap-1">
          {showFirstLast && (
            <DynamicPaginationItem
              onClick={goToFirst}
              disabled={disabled || !canGoPrevious}
              className="gap-1 pl-2.5"
            >
              <span>First</span>
            </DynamicPaginationItem>
          )}
  
          {showPrevNext && (
            <DynamicPaginationItem
              onClick={goToPrevious}
              disabled={disabled || !canGoPrevious}
              className="gap-1 pl-2.5"
            >
              <ChevronLeft className="h-4 w-4" />{
                showPreviousNextText &&(
                  <span>Previous</span>
                )
              }
             
            </DynamicPaginationItem>
          )}
  
          {paginationRange.map((pageNumber, index) => {
            if (pageNumber === '...') {
              return <DynamicPaginationEllipsis key={`ellipsis-${index}`} />;
            }
  
            return (
              <DynamicPaginationItem
                key={pageNumber}
                onClick={() => goToPage(Number(pageNumber))}
                isActive={pageNumber === currentPage}
                disabled={disabled}
              >
                {pageNumber}
              </DynamicPaginationItem>
            );
          })}
  
          {showPrevNext && (
            <DynamicPaginationItem
              onClick={goToNext}
              disabled={disabled || !canGoNext}
              className="gap-1 pr-2.5"
            >
              {
                showPreviousNextText && (
                  <span>Next</span>
                )
              }
            
              <ChevronRight className="h-4 w-4" />
            </DynamicPaginationItem>
          )}
  
          {showFirstLast && (
            <DynamicPaginationItem
              onClick={goToLast}
              disabled={disabled || !canGoNext}
              className="gap-1 pr-2.5"
            >
              <span>Last</span>
            </DynamicPaginationItem>
          )}
        </div>
      </nav>
    );
  };


  export default DynamicPagination