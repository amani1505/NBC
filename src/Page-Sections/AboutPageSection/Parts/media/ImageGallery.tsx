import type { ImageItem } from "@/types/imageItem";
import { useState } from "react";
import GalleryControls from "./GalleryControls";
import MasonryGrid from "./MasonryGrid";
// import GalleryHeader from "./GalleryHeader";
import ImageModal from "./ImageModal";

const mockImages: ImageItem[] = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
      alt: 'Team collaboration 1',
      category: 'gallery',
      size: 'medium'
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop',
      alt: 'Team collaboration 2',
      category: 'gallery',
      size: 'large'
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
      alt: 'Team collaboration 3',
      category: 'gallery',
      size: 'full-width'
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
      alt: 'Team collaboration 4',
      category: 'gallery',
      size: 'large'
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop',
      alt: 'Team collaboration 5',
      category: 'gallery',
      size: 'medium'
    },
    {
      id: '6',
      src: '/images/news1.jpg',
      alt: 'Team collaboration 6',
      category: 'gallery',
      size: 'medium'
    },
    {
      id: '7',
      src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop',
      alt: 'Team collaboration 7',
      category: 'gallery',
      size: 'medium'
    }
  ];

const ImageGallery: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('gallery');
    const [currentPage, setCurrentPage] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const imagesPerPage = 7; // Show 7 images to match your layout
  
    // Filter images based on selected category
    const filteredImages = selectedCategory === 'all' 
      ? mockImages 
      : mockImages.filter(image => image.category === selectedCategory);
  
    // Calculate pagination
    const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
    const startIndex = (currentPage - 1) * imagesPerPage;
    const currentImages = filteredImages.slice(startIndex, startIndex + imagesPerPage);
  
    const handleImageClick = (image: ImageItem) => {
      setSelectedImage(image);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedImage(null);
    };
  
    const handleNextImage = () => {
      if (!selectedImage) return;
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex]);
    };
  
    const handlePreviousImage = () => {
      if (!selectedImage) return;
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
      const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
      setSelectedImage(filteredImages[prevIndex]);
    };
  
    const getCurrentImageIndex = () => {
      if (!selectedImage) return 0;
      return filteredImages.findIndex(img => img.id === selectedImage.id);
    };
  
    return (
      <div className="w-full mx-auto min-h-screen ">
        {/* Header */}
        {/* <GalleryHeader
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        /> */}
  
        {/* Masonry Gallery Grid */}
        <div 
          className="transition-transform duration-300 ease-in-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <MasonryGrid
            images={currentImages}
            onImageClick={handleImageClick}
          />
        </div>
  
        {/* Controls */}
        {/* <GalleryControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          onRotateLeft={handleRotateLeft}
          onRotateRight={handleRotateRight}
        /> */}
  
        {/* Image Modal */}
        <ImageModal
          image={selectedImage}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onNext={handleNextImage}
          onPrevious={handlePreviousImage}
          currentIndex={getCurrentImageIndex()}
          totalImages={filteredImages.length}
        />
      </div>
    );
  };
  
  export default ImageGallery;