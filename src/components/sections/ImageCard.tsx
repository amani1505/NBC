import { ChevronRight } from "lucide-react";
import type { Product } from "./RecentProductSection";
import Button from "../ui/button";

interface ProductCardProps {
    product: Product;
    className?: string;
  }
  
export default function  ImageCard ({ product, className = "" }: ProductCardProps) {
    return (
      <div className={`bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}>
        {/* Image Container */}
        <div className="relative w-full h-64 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground leading-tight">
            {product.title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {product.description}
          </p>
          
          <Button
            variant="primary"
            className="w-full sm:w-auto"
            onClick={product.onLearnMore}
            icon={ChevronRight}
            iconPosition="right"
          >
            {product.buttonText || "Learn more"}
           
          </Button>
        </div>
      </div>
    );
  };