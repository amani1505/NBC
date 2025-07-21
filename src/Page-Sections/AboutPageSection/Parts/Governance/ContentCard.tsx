import Button from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export interface Content {
  id: string;
  title?: string;
  description?: string;
  image?: string;
  buttonText?: string;
  onLearnMore?: () => void;
}

interface ContentProps {
  content: Content;
  className?: string;
}

function ContentCard({ content, className = "" }: ContentProps) {
  return (
    <div
      className={`bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}
    >
      {/* Image Container */}
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={content.image}
          alt={content.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 text-center">
        <h3 className="text-lg font-semibold text-foreground leading-tight">
          {content.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {content.description}
        </p>

        <div>
          {content?.buttonText && (
            <Button
              variant="default"
              className="w-full sm:w-auto"
              onClick={content.onLearnMore}
            >
              {content.buttonText || "Learn more"}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
