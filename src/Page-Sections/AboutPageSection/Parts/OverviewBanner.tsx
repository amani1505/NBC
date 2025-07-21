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
    <div className="container mx-auto py-16 relative flex flex-row items-center h-[55vh]">
      {/* Flipped background image */}
      <div
        className="absolute inset-0 w-full h-full rounded-lg"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: `center`,
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
      {/* Foreground content on the right */}
      <div className="flex flex-col justify-center h-full w-[50%] text-white px-10 gap-3 relative z-10 ml-auto">
        <div className="text-[35px] font-bold mb-4 relative">
          {hasQuote && (
            <div className="absolute -z-1 -top-5 -left-13 ">
              <img src="images/Quotes.svg " />
            </div>
          )}

          <p className="leading-[40px]">{title}</p>
        </div>
        <div className="tracking-wider leading-6">{description}</div>
        <div>
          {buttonText && (
            <Button
              className="border border-white text-white font-semibold bg-transparent hover:bg-nbc-dark-700 hover:border-nbc-dark-700 w-1/2 mt-3 cursor-pointer"
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
