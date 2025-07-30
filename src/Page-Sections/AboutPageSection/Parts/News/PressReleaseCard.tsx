import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { slugify } from "@/lib/utils";

interface PressReleaseCardProps {
  image: string;
  title: string;
  description: string;
  badgeText?: string;
  className?: string;
  rightSide?: boolean;
  learnMoreLink?: string;
  compareLink?: string;
}

const PressReleaseCard = ({
  image,
  title,
  description,
  className = "",
  badgeText,
  rightSide = false,
  learnMoreLink,
  compareLink,
}: PressReleaseCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${
        rightSide ? "flex-col md:flex-row h-auto md:h-40" : "flex-col"
      } ${className}`}
    >
      {/* Image Container */}
      <div
        className={`relative w-full ${
          rightSide ? "md:w-1/2 h-40 md:h-full flex-shrink-0 min-h-0" : "h-48 sm:h-64 lg:h-80"
        } overflow-hidden bg-gray-100`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          style={{ 
            minHeight: '100%', 
            objectFit: 'cover',
            height: '100%',
            width: '100%'
          }}
        />
      </div>
      {/* Content */}
      <div
        className={`p-4 sm:p-6 space-y-2 w-full flex flex-col ${
          rightSide ? "md:w-1/2 md:p-4" : ""
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

        {learnMoreLink && (
          <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
            {title}
          </h3>
        )}
        {!learnMoreLink && (
          <Link
            to={`/news/${slugify(title || "")}`}
            className="text-base sm:text-lg font-semibold text-foreground leading-tight hover:text-nbc-dark-950"
          >
            {title}
          </Link>
        )}
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2 flex-grow">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-2">
          {compareLink && (
            <Button
              variant="outline"
              icon={ChevronRight}
              iconPosition="right"
              onClick={() => {
                navigate(compareLink);
              }}
            >
              Compare Account
            </Button>
          )}

          {learnMoreLink && (
            <Button
              variant="primary"
              icon={ChevronRight}
              iconPosition="right"
              size="md"
              onClick={() => {
                navigate(learnMoreLink);
              }}
            >
              Learn More
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PressReleaseCard;