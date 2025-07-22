import type { VideoItem } from "@/types/videoItem";
import React, { useState } from "react";
import VideoGalleryGrid from "./VideoGalleryGrid";
import VideoPlayerModal from "./VideoPlayerModal";

const VideoGallery: React.FC = () => {
    // Sample data matching your image
    const allVideos: VideoItem[] = [
      {
        id: '1',
        title: 'Effective product marketing techniques for small businesses',
        thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop&crop=faces'
      },
      {
        id: '2',
        title: 'Effective product marketing techniques for small businesses',
        thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop&crop=faces'
      },
      {
        id: '3',
        title: 'Effective product marketing techniques for small businesses',
        thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop&crop=faces'
      },
      {
        id: '4',
        title: 'Effective product marketing techniques for small businesses',
        thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop&crop=faces'
      },
      {
        id: '5',
        title: 'Effective product marketing techniques for small businesses',
        thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop&crop=faces'
      },
      {
        id: '6',
        title: 'Effective product marketing techniques for small businesses',
        thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop&crop=faces'
      },
      {
        id: '7',
        title: 'Effective product marketing techniques for small businesses',
        thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop&crop=faces'
      },
      {
        id: '8',
        title: 'Effective product marketing techniques for small businesses',
        thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop&crop=faces'
      },
      {
        id: '9',
        title: 'Effective product marketing techniques for small businesses',
        thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop&crop=faces'
      }
    ];
  
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const videosPerPage = 9;
    const totalPages = Math.ceil(allVideos.length / videosPerPage);
    
    // Get videos for current page
    const startIndex = (currentPage - 1) * videosPerPage;
    const currentVideos = allVideos.slice(startIndex, startIndex + videosPerPage);
  
    const handleVideoPlay = (video: VideoItem) => {
      setSelectedVideo(video);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedVideo(null);
    };
  
    // Close modal with Escape key
    React.useEffect(() => {
      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && isModalOpen) {
          handleCloseModal();
        }
      };
  
      if (isModalOpen) {
        document.addEventListener('keydown', handleEscapeKey);
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
  
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
        document.body.style.overflow = 'auto';
      };
    }, [isModalOpen]);
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <div className="min-h-screen ">
        <div className=" mx-auto  py-8">
        
  
          <VideoGalleryGrid 
            videos={currentVideos} 
            onVideoPlay={handleVideoPlay} 
          />
  
          {/* <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          /> */}
  
          <VideoPlayerModal
            video={selectedVideo}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        </div>
      </div>
    );
  };
  
  export default VideoGallery;