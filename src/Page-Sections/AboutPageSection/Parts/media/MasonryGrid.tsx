import type { ImageItem } from "@/types/imageItem";
import MediaImageCard from "./MediaImageCard";

const MasonryGrid: React.FC<{
    images: ImageItem[];
    onImageClick: (image: ImageItem) => void;
  }> = ({ images, onImageClick }) => (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 xs:gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8 " 
         style={{ gridAutoRows: 'minmax(150px, auto)' }}>
      {images.map((image) => (
        <MediaImageCard
          key={image.id}
          image={image}
          onClick={() => onImageClick(image)}
        />
      ))}
    </div>
  );

  export default MasonryGrid;