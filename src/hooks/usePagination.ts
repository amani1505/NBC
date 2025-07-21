import { useCallback } from "react";

export const usePagination = (
    currentPage: number,
    totalPages: number,
    onPageChange: (page: number) => void
  ) => {
    const goToPage = useCallback(
      (page: number) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
          onPageChange(page);
        }
      },
      [currentPage, totalPages, onPageChange]
    );
  
    const goToPrevious = useCallback(() => {
      goToPage(currentPage - 1);
    }, [currentPage, goToPage]);
  
    const goToNext = useCallback(() => {
      goToPage(currentPage + 1);
    }, [currentPage, goToPage]);
  
    const goToFirst = useCallback(() => {
      goToPage(1);
    }, [goToPage]);
  
    const goToLast = useCallback(() => {
      goToPage(totalPages);
    }, [totalPages, goToPage]);
  
    return {
      goToPage,
      goToPrevious,
      goToNext,
      goToFirst,
      goToLast,
      canGoPrevious: currentPage > 1,
      canGoNext: currentPage < totalPages,
    };
  };
  