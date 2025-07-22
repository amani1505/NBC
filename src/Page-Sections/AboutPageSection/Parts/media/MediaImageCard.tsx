import type { ImageItem } from "@/types/imageItem";

const MediaImageCard: React.FC<{
    image: ImageItem;
    onClick: () => void;
  }> = ({ image, onClick }) => {
    // Define responsive size classes based on image size property
    const getSizeClasses = () => {
      switch (image.size) {
        case 'small':
          return 'col-span-1 h-32 xs:h-36 sm:h-40 md:h-44 lg:h-48'; // Small across all devices
        case 'medium':
          return 'col-span-1 xs:col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64'; // Responsive medium
        case 'large':
          return 'col-span-1 xs:col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-4 h-48 xs:h-52 sm:h-60 md:h-68 lg:h-72 xl:h-80'; // Responsive large
        case 'wide':
          return 'col-span-1 xs:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 h-36 xs:h-40 sm:h-44 md:h-48 lg:h-56'; // Responsive wide
        case 'tall':
          return 'col-span-1 h-48 xs:h-52 sm:h-60 md:h-68 lg:h-72 xl:h-80'; // Tall, single column but responsive height

        case 'full-width':
            return 'col-span-full h-40 xs:h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80'; // Full width across all columns
          
        default:
          return 'col-span-1 h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64'; // Default responsive
      }
    };
  
    return (
      <div 
        className={`relative group cursor-pointer rounded-md sm:rounded-lg overflow-hidden shadow-sm sm:shadow-md hover:shadow-lg sm:hover:shadow-2xl transition-all duration-300 sm:duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.01] sm:hover:scale-[1.02] ${getSizeClasses()}`}
        onClick={onClick}
      >
        {/* Main Image */}
        <img
          src={image.src}
          alt={image.alt}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-300 sm:duration-500 group-hover:scale-105 sm:group-hover:scale-110 group-hover:brightness-105 sm:group-hover:brightness-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 sm:from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 sm:duration-500" />
        
        {/* Shimmer Effect - Hidden on small screens for performance */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 sm:duration-300 delay-50 sm:delay-100">
          <div className="text-center text-white transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-200 sm:duration-300 delay-100 sm:delay-200">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-1 sm:mb-2 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <p className="text-xs sm:text-sm font-medium">View</p>
          </div>
        </div>
        
        {/* Floating Badge - Responsive sizing and positioning */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-medium text-gray-800 transform translate-y-[-15px] sm:translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 sm:duration-300 delay-100 sm:delay-150">
          {image.category}
        </div>
        
        {/* Border Glow Effect */}
        <div className="absolute inset-0 rounded-md sm:rounded-lg border border-transparent sm:border-2 group-hover:border-white/20 sm:group-hover:border-white/30 transition-all duration-200 sm:duration-300" />
      </div>
    );
  };
  
  export default MediaImageCard;