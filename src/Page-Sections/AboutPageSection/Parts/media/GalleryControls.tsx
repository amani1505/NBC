import Button from "@/components/ui/button";
import { ChevronLeft, ChevronRight, RotateCcw, RotateCw } from "lucide-react";

const GalleryControls: React.FC<{
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    onRotateLeft: () => void;
    onRotateRight: () => void;
  }> = ({ currentPage, totalPages, onPageChange, onRotateLeft, onRotateRight }) => (
    <div className="flex items-center justify-between flex-wrap gap-4">
      {/* Rotation Controls */}
      <div className="flex items-center gap-2 bg-gray-800 rounded-md p-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={onRotateLeft}
          className="text-white hover:bg-gray-700 p-2"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onRotateRight}
          className="text-white hover:bg-gray-700 p-2"
        >
          <RotateCw className="w-4 h-4" />
        </Button>
      </div>
  
      {/* Pagination */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant="ghost"
            size="sm"
            onClick={() => onPageChange(page)}
            className={`min-w-8 h-8 rounded-full ${
              currentPage === page 
                ? 'bg-gray-200 text-gray-900' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {page}
          </Button>
        ))}
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );

  export default GalleryControls