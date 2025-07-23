import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PressReleaseCardProps {
  image: string;
  title: string;
  description: string;
  badgeText?: string;
  className?: string;
  rightSide?: boolean;
  learnMoreLink?: string;
}

const PressReleaseCard = ({
  image,
  title,
  description,
  className = "",
  badgeText,
  rightSide = false,
  learnMoreLink,
}: PressReleaseCardProps) => {
  return (
    <div
      className={`flex bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${
        rightSide ? "flex-col md:flex-row" : "flex-col"
      } ${className}`}
    >
      {/* Image Container */}
      <div
        className={`relative w-full ${
          rightSide ? "md:w-1/2 h-48 sm:h-64 md:h-full" : "h-48 sm:h-64"
        } overflow-hidden`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      {/* Content */}
      <div
        className={`p-4 sm:p-6 space-y-2 w-full ${
          rightSide ? "md:w-1/2 flex flex-col" : ""
        }`}
      >
        {badgeText && (
          <div>
            <span className="text-xs mr-3">{"13 January 2025"}</span>
            <Badge variant="outline" className="rounded-full border-gray-300 ">
              {badgeText || "Badge"}
            </Badge>
          </div>
        )}

        <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
          {title}
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

{
  learnMoreLink && (
          <Link
            to={learnMoreLink}
            className="bg-nbc-dark-600 text-white text-xs sm:text-sm font-semibold px-3 py-2 rounded-md mt-2 inline-block hover:bg-nbc-dark-500 transition-colors duration-200"    
          >
            Learn More 
            <ChevronRight className="inline ml-1 h-4 w-4" />
          </Link>
  )
}

      </div>
    </div>
  );
};

export default PressReleaseCard;
