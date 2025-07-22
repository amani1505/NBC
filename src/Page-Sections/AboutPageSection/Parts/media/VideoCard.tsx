import type { VideoItem } from "@/types/videoItem";
import { Play } from "lucide-react";

interface VideoCardProps {
  video: VideoItem;
  onPlay: (video: VideoItem) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onPlay }) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="relative aspect-video bg-gray-200">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => onPlay(video)}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 group cursor-pointer"
          aria-label={`Play ${video.title}`}
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:text-nbc-dark-800 transition-colors">
            <Play className="w-6 h-6 text-nbc-dark-950 ml-1" fill="currentColor" />
          </div>
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-[16px]  text-gray-900 leading-tight font-[600]">
          {video.title}
        </h3>
      </div>
    </div>
  );
};

export default VideoCard;
