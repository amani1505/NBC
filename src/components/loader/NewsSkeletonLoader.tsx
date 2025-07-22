  interface PressReleaseCardSkeletonProps {
    className?: string;
    rightSide?: boolean;
  }
  
  const NewsSkeletonLoader = ({
    className = "",
    rightSide = false,
  }: PressReleaseCardSkeletonProps) => {
    return (
      <div
        className={`flex bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm ${
          rightSide ? "flex-col md:flex-row" : "flex-col"
        } ${className}`}
        // Removed invalid '--shimmer-keyframes' property from style
      >
        {/* Image Skeleton */}
        <div
          className={`relative w-full ${
            rightSide ? "md:w-1/2 h-48 sm:h-64 md:h-full" : "h-48 sm:h-64"
          } overflow-hidden bg-gray-100`}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 shimmer-effect" 
               style={{
                 background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                 backgroundSize: '200% 100%'
               }} />
          
          {/* Subtle pulse overlay */}
          <div className="absolute inset-0 bg-gray-200/50 animate-pulse" />
          
          {/* Geometric loading pattern */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-400 rounded-full animate-spin opacity-30" />
          </div>
        </div>
  
        {/* Content Skeleton */}
        <div
          className={`p-4 sm:p-6 space-y-4 w-full ${
            rightSide ? "md:w-1/2 flex flex-col justify-center" : ""
          }`}
        >
          {/* Date and Badge Skeleton */}
          <div className="flex items-center space-x-3">
            {/* Date skeleton */}
            <div className="h-3 bg-gray-200 rounded-full w-20 animate-pulse" />
            
            {/* Badge skeleton */}
            <div className="h-6 bg-gray-200 rounded-full w-16 animate-pulse border border-gray-300" />
          </div>
  
          {/* Title Skeleton */}
          <div className="space-y-2">
            <div className="h-4 sm:h-5 bg-gray-200 rounded-lg w-full animate-pulse" />
            <div className="h-4 sm:h-5 bg-gray-200 rounded-lg w-3/4 animate-pulse" />
          </div>
  
          {/* Description Skeleton */}
          <div className="space-y-2">
            <div className="h-3 sm:h-4 bg-gray-100 rounded-lg w-full animate-pulse" />
            <div className="h-3 sm:h-4 bg-gray-100 rounded-lg w-5/6 animate-pulse" />
            <div className="h-3 sm:h-4 bg-gray-100 rounded-lg w-2/3 animate-pulse" />
          </div>
        </div>
  
        {/* Floating dots animation */}
        <div className="absolute top-4 right-4 flex space-x-1">
          <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" />
        </div>
      </div>
    );
  };
  
  // Demo component to showcase different variations

  export default NewsSkeletonLoader;