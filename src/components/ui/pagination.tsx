import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  className
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Show max 5 page numbers, with current page in the middle when possible
  const getVisiblePages = () => {
    const maxVisible = 5;
    if (totalPages <= maxVisible) return pages;

    const halfVisible = Math.floor(maxVisible / 2);
    let start = currentPage - halfVisible;
    let end = currentPage + halfVisible;

    if (start < 1) {
      start = 1;
      end = maxVisible;
    }
    if (end > totalPages) {
      end = totalPages;
      start = totalPages - maxVisible + 1;
    }

    const visiblePages = pages.slice(start - 1, end);
    
    // Add ellipsis indicators
    if (start > 1) visiblePages.unshift(-1);
    if (end < totalPages) visiblePages.push(-1);
    
    return visiblePages;
  };

  return (
    <nav
      className={cn("flex items-center justify-center space-x-2", className)}
      aria-label="Pagination"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="inline-flex items-center px-2 py-2 rounded-md text-sm font-medium text-neutral-500 bg-white border border-neutral-300 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="sr-only">Previous</span>
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      <div className="flex items-center space-x-2">
        {getVisiblePages().map((page, index) => (
          page === -1 ? (
            <span key={`ellipsis-${index}`} className="px-4 py-2">...</span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md",
                currentPage === page
                  ? "bg-rose-600 text-white"
                  : "text-neutral-700 bg-white border border-neutral-300 hover:bg-neutral-50"
              )}
            >
              {page}
            </button>
          )
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="inline-flex items-center px-2 py-2 rounded-md text-sm font-medium text-neutral-500 bg-white border border-neutral-300 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="sr-only">Next</span>
        <ChevronRight className="h-5 w-5" />
      </button>
    </nav>
  );
}