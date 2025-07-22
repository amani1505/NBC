import Button from "@/components/ui/button";
import type { ImageItem } from "@/types/imageItem";
import { ChevronLeft, ChevronRight, Download, Share2, X } from "lucide-react";
import { useEffect } from "react";

const ImageModal: React.FC<{
    image: ImageItem | null;
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
    onPrevious: () => void;
    currentIndex: number;
    totalImages: number;
  }> = ({ image, isOpen, onClose, onNext, onPrevious, currentIndex, totalImages }) => {
    // Handle keyboard navigation
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (!isOpen) return;
        
        switch (e.key) {
          case 'Escape':
            onClose();
            break;
          case 'ArrowLeft':
            onPrevious();
            break;
          case 'ArrowRight':
            onNext();
            break;
        }
      };
  
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, onNext, onPrevious]);
  
    // Prevent body scroll when modal is open
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
      
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [isOpen]);
  
    if (!isOpen || !image) return null;
  
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = image.src;
      link.download = `${image.alt}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    const handleShare = async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: image.alt,
            text: `Check out this image: ${image.alt}`,
            url: image.src
          });
        } catch (err) {
          console.log('Error sharing:', err);
        }
      } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(image.src);
        alert('Image URL copied to clipboard!');
      }
    };
  
    return (
      <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center">
        {/* Modal Overlay */}
        <div 
          className="absolute inset-0 cursor-pointer"
          onClick={onClose}
        />
        
        {/* Modal Content */}
        <div className="relative max-w-7xl max-h-[90vh] mx-4 flex flex-col">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent p-4 flex justify-between items-center">
            <div className="text-white">
              <h2 className="text-xl font-semibold">{image.alt}</h2>
              <p className="text-sm text-white/70">
                {currentIndex + 1} of {totalImages} • {image.category}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="text-white hover:bg-white/20 p-2"
              >
                <Share2 className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDownload}
                className="text-white hover:bg-white/20 p-2"
              >
                <Download className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-white hover:bg-white/20 p-2"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
  
          {/* Image Container */}
          <div className="relative flex items-center justify-center min-h-0">
            {/* Previous Button */}
            {totalImages > 1 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onPrevious}
                className="absolute left-4 z-10 bg-black/50 text-white hover:bg-black/70 p-3 rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            )}
  
            {/* Main Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              style={{ minHeight: '300px' }}
            />
  
            {/* Next Button */}
            {totalImages > 1 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onNext}
                className="absolute right-4 z-10 bg-black/50 text-white hover:bg-black/70 p-3 rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            )}
          </div>
  
          {/* Footer with thumbnails */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
            <div className="flex justify-center gap-2 overflow-x-auto">
              <div className="text-white text-sm bg-black/50 rounded-full px-3 py-1">
                Press ESC to close • Arrow keys to navigate
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


  export default ImageModal