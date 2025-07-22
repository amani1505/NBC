import type { VideoItem } from "@/types/videoItem";
import VideoCard from "./VideoCard";

interface VideoGalleryGridProps {
  videos: VideoItem[];
  onVideoPlay: (video: VideoItem) => void;
}

const VideoGalleryGrid: React.FC<VideoGalleryGridProps> = ({
  videos,
  onVideoPlay,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} onPlay={onVideoPlay} />
      ))}
    </div>
  );
};

export default VideoGalleryGrid;
