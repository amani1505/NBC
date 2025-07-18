import { useState } from 'react';

interface VideoOverviewProps {
  title?: string;
  subtitle?: string;
  videoUrl?: string;
  onPlayVideo?: () => void;
}

export const VideoOverview = ({
  title = "Overview",
  subtitle = "A visual guide could be a worksheet, creative composition, or information architecture. A device that enables collaboration will reveal the chance of work having to be completed rapidly.",
  videoUrl,
  onPlayVideo
}: VideoOverviewProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // const handlePlayClick = () => {
  //   setIsPlaying(true);
  //   if (onPlayVideo) {
  //     onPlayVideo();
  //   }
  // };

  // const GeometricIcons = () => (
  //   <>
  //     <Hexagon className="absolute top-8 left-8 w-8 h-8 text-white/20" />
  //     <Circle className="absolute top-16 right-12 w-6 h-6 text-white/20" />
  //     <Square className="absolute bottom-20 left-12 w-7 h-7 text-white/20" />
  //     <Triangle className="absolute top-24 left-1/3 w-6 h-6 text-white/20" />
  //     <Star className="absolute bottom-16 right-16 w-8 h-8 text-white/20" />
  //     <Zap className="absolute top-12 right-1/4 w-6 h-6 text-white/20" />
  //     <Hexagon className="absolute bottom-24 left-1/4 w-5 h-5 text-white/20" />
  //     <Circle className="absolute top-32 right-1/3 w-4 h-4 text-white/20" />
  //   </>
  // );

  return (
    <div className="w-full  mx-auto mb-20">
      <div className="text-center mb-8">
        <h3 className=" section-title mb-4">
          {title}
        </h3>
        <p className="section-subtitle leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      
      {/* <Card className="relative bg-teal-400 overflow-hidden shadow-card-custom mb-6">
        <div className="relative aspect-video">
          <GeometricIcons />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              onClick={handlePlayClick}
              variant="ghost"
              size="lg"
              className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 text-white border-2 border-white/50"
            >
              <Play className="w-8 h-8 ml-1" fill="currentColor" />
            </Button>
          </div>

          {/* Video Controls Bar *
          <div className="absolute bottom-0 left-0 right-0 bg-black/20 h-8 flex items-center px-4">
            <div className="flex items-center space-x-2 flex-1">
              <div className="w-2 h-2 rounded-full bg-white/60"></div>
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
              <div className="flex-1 h-1 bg-white/20 rounded-full mx-4">
                <div className="w-1/4 h-full bg-white rounded-full"></div>
              </div>
              <span className="text-white/80 text-xs">0:15/1:30</span>
            </div>
            <div className="flex items-center space-x-1 ml-2">
              <div className="w-3 h-3 border border-white/60"></div>
              <div className="w-3 h-3 border border-white/60"></div>
              <div className="w-3 h-3 border border-white/60"></div>
              <div className="w-3 h-3 border border-white/60"></div>
            </div>
          </div>
        </div>
      </Card>  */}

      {videoUrl && isPlaying && (
        <div className="mb-6">
          {videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be") ? (
            <iframe
              width="100%"
              height="600"
              className="w-full rounded-lg shadow-card-custom"
              src={
                videoUrl.includes("embed")
                  ? videoUrl
                  : videoUrl.includes("youtu.be")
                  ? `https://www.youtube.com/embed/${videoUrl.split("/").pop()}`
                  : `https://www.youtube.com/embed/${new URL(videoUrl).searchParams.get("v")}`
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <video 
              controls 
              autoPlay 
              className="w-full rounded-lg shadow-card-custom"
              src={videoUrl}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
    </div>
  );
};