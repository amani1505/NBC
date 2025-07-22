import type { VideoItem } from "@/types/videoItem";
import { Play } from "lucide-react";

interface VideoPlayerModalProps {
    video: VideoItem | null;
    isOpen: boolean;
    onClose: () => void;
  }
  
  const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ video, isOpen, onClose }) => {
    if (!isOpen || !video) return null;
  
    const handleBackdropClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };
  
    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
        onClick={handleBackdropClick}
      >
        <div className="relative w-full max-w-5xl mx-4 max-h-[90vh] flex flex-col">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 z-20 w-8 h-8 flex items-center justify-center"
            aria-label="Close video"
          >
            ✕
          </button>
          
          {/* Video Container */}
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            {/* Video Player Area */}
            <div className="relative aspect-video bg-gray-900">
              <img 
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              {/* Video Controls Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                  <Play className="w-8 h-8 text-nbc-dark-950 ml-1" fill="currentColor" />
                </div>
              </div>
              
              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <p className="text-white text-sm opacity-75">Now Playing</p>
              </div>
            </div>
            
            {/* Video Details */}
            <div className="p-6 bg-white">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {video.title}
              </h2>
              <p className="text-gray-600 text-sm">
                Learn effective marketing strategies and techniques to grow your small business
              </p>
              
              {/* Action Buttons */}
              {/* <div className="flex gap-3 mt-4">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Watch Full Video
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Add to Playlist
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default VideoPlayerModal