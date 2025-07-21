const NewsSkeletonLoader = () => {
    return (
      <div className="bg-white p-2 mb-4 border rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 inline-block animate-pulse">
        <div className="w-full h-32 bg-gray-300 mb-2"></div>
        <div className="h-4 bg-gray-300 mb-2"></div>
        <div className="h-4 bg-gray-300 w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 w-1/2"></div>
      </div>
    );
  };
  
  export default NewsSkeletonLoader;