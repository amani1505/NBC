import Button from "@/components/ui/button";

type CallToActionBannerProps = {
  bgImage?: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

function FooterHero({
  bgImage = "/images/footer-hero.jpg",
  title,
  description,
  buttonText,
  onButtonClick,
}: CallToActionBannerProps) {
  return (
    <div className=" mx-auto ">
      <div
        className="relative w-full bg-cover bg-center h-[55vh]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url(${bgImage})       
          `,
          backgroundPosition: `center`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className="flex flex-col justify-center h-full w-[45%] text-white px-36 gap-3 ">
          <div className="text-4xl md:text-5xl font-bold mb-4">{title}</div>
          <div className="tracking-wider leading-6">{description}</div>

          <div>
            {buttonText && (
              <Button variant="primary" size="md" onClick={onButtonClick}>
                {buttonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterHero;
