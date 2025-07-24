import { useState, useEffect } from "react";
import Button from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageCard from "./ImageCard";

export interface Product {
  id: string;
  title?: string;
  description?: string;
  image?: string;
  buttonText?: string;
  onLearnMore?: () => void;
}

interface RelatedProductsProps {
  products: Product[];
  title?: string;
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

function RecentProductSection({
  products,
  title = "Related Products",
  className = "",
  autoPlay = true,
  autoPlayInterval = 5000,
}: RelatedProductsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Responsive items per view
  const getItemsPerView = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  // Update items per view on window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = products.length > itemsPerView ? products.length : 1;

  // Infinite loop navigation
  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => {
        const newIndex = prev === 0 ? totalSlides - 1 : prev - 1;
        return newIndex;
      });
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => {
        const newIndex = prev === totalSlides - 1 ? 0 : prev + 1;
        return newIndex;
      });
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  // const goToSlide = (index: number) => {
  //   if (!isTransitioning && index !== currentIndex) {
  //     setIsTransitioning(true);
  //     setCurrentIndex(index);
  //     setTimeout(() => setIsTransitioning(false), 300);
  //   }
  // };

  // Auto play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, currentIndex, isTransitioning]);

  const getVisibleProducts = () => {
    const startIndex = currentIndex * itemsPerView;
    const visibleProducts = [];
    for (let i = 0; i < itemsPerView; i++) {
      // Wrap around using modulo
      const index = (startIndex + i) % products.length;
      visibleProducts.push(products[index]);
    }
    return visibleProducts;
  };

  return (
    <div className={`w-full ${className} px-5`}>
      {/* Header */}
      <div className=" mb-8">
        <h2 className="text-3xl font-bold text-nbc-dark-950">{title}</h2>
      </div>

      {/* Products Grid */}
      <div className="relative overflow-hidden">
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isTransitioning ? "opacity-90" : "opacity-100"
          } grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`}
        >
          {getVisibleProducts().map((product, index) => (
            <ImageCard
              key={`${product.id}-${index}`}
              product={product}
              className="animate-fade-in"
            />
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative my-5">
        {/* Navigation Controls - Bottom Right */}
        <div className=" bottom-0 right-0 flex items-center gap-2 justify-end">
          <Button
            variant="iconOutline"
            icon={ChevronLeft}
            onClick={handlePrev}
            disabled={isTransitioning}
            className="rounded-full border hover:border-brand-blue hover:text-brand-blue disabled:opacity-50 transition-all duration-200 shadow-sm"
          ></Button>
          <Button
            variant="iconOutline"
            icon={ChevronRight}
            onClick={handleNext}
            disabled={isTransitioning}
            className="rounded-full border hover:border-brand-blue hover:text-brand-blue disabled:opacity-50 transition-all duration-200 shadow-sm"
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default RecentProductSection;
