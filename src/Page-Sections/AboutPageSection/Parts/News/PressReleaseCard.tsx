import { Badge } from "@/components/ui/badge";

interface PressReleaseCardProps {
  image: string;
  title: string;
  description: string;
  badgeText?: string;
  className?: string;
  rightSide?: boolean;
}

const PressReleaseCard = ({
  image,
  title,
  description,
  className = "",
  badgeText,
  rightSide = false,
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
        className={`p-4 sm:p-6 space-y-4 w-full ${
          rightSide ? "md:w-1/2 flex flex-col justify-center" : ""
        }`}
      >
        <div>
          <span className="text-xs mr-3">{'13 January 2025'}</span>
          <Badge variant="outline" className="rounded-full border-gray-300 ">
      
            {badgeText || "Badge"}
        
        </Badge>
        </div>
       
        <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
          {title}
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PressReleaseCard;