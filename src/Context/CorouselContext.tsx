import { createContext, useContext } from "react";
import type { EmblaCarouselType } from "embla-carousel";

export const CarouselContext = createContext<{
    api: EmblaCarouselType | null;
    selectedScrollSnap: () => number;
    scrollTo: (index: number) => void;
  } | null>(null);
  
  function useCarousel() {
    const context = useContext(CarouselContext);
    if (!context) {
      throw new Error("useCarousel must be used within a <Carousel />");
    }
    return context;
  }

  export default useCarousel;