import Button from "@/components/ui/button";

type OverviewBannerProps = {
  bgImage?: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  hasQuote?: boolean;
};

function OverviewBanner({
  bgImage = "/images/call.png",
  title,
  description,
  buttonText,
  onButtonClick,
  hasQuote = true,
}: OverviewBannerProps) {
  return (
    <div className="container mx-auto py-8 sm:py-12 lg:py-16 relative flex flex-col sm:flex-row items-center min-h-[40vh] sm:min-h-[50vh] lg:min-h-[55vh]">
      {/* Flipped background image */}
      <div
        className="absolute inset-0 w-full h-full rounded-lg"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transform: "scaleX(-1)",
          zIndex: 0,
        }}
      ></div>
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 w-full h-full rounded-lg"
        style={{
          background:
            "linear-gradient(to left, rgba(0, 0, 0, 0.9), transparent)",
          zIndex: 1,
        }}
      ></div>
      {/* Foreground content */}
      <div className="flex flex-col justify-center h-full w-full sm:w-[60%] lg:w-[50%] text-white px-4 sm:px-6 lg:px-10 gap-3 relative z-10 sm:ml-auto">
        <div className="text-2xl sm:text-3xl lg:text-[35px] font-bold mb-4 relative">
          {hasQuote && (
            <div className="absolute -top-4 sm:-top-5 -left-8 sm:-left-10 lg:-left-13 z-[-1]">
              <img src="/images/Quotes.svg" className="w-8 sm:w-10 lg:w-12" />
            </div>
          )}
          <p className="leading-8 sm:leading-9 lg:leading-[40px]">{title}</p>
        </div>
        <div className="text-sm sm:text-base lg:text-lg tracking-wider leading-6 sm:leading-7 lg:leading-8">
          {description}
        </div>
        <div>
          {buttonText && (
            <Button
              className="border border-white text-white font-semibold bg-transparent hover:bg-nbc-dark-700 hover:border-nbc-dark-700 w-full sm:w-3/4 lg:w-1/2 mt-3 cursor-pointer"
              size="lg"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default OverviewBanner;