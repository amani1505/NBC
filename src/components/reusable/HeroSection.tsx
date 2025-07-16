import { useEffect, useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import type { EmblaCarouselType } from "embla-carousel";
import useCarousel, { CarouselContext } from "@/Context/CorouselContext";
import { motion } from "framer-motion";

 type Slide = {
  title: string;
  description: string;
  buttonText?: string;
  imageUrl: string;
  dateText?:string
};

interface HeroSectionProps {
  slides: Slide[];
  hasForex?: boolean;
  height?: string;
}

function CarouselDots() {
  const { api, selectedScrollSnap, scrollTo } = useCarousel();
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    if (!api) return;
    setTotalSlides(api.scrollSnapList().length);
  }, [api]);

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          className={cn(
            "w-3 h-3 rounded-full transition-all",
            index === selectedScrollSnap() ? "bg-white" : "bg-white/50"
          )}
          onClick={() => scrollTo(index)}
        />
      ))}
    </div>
  );
}

function HeroSection({
  slides,
  hasForex = true,
  height = "87vh",
}: HeroSectionProps) {
  const [api, setApi] = useState<EmblaCarouselType | null>(null);
  const [selected, setSelected] = useState(0);

  const forexRates = [
    {
      currency: "SEK",
      buy: 2257,
      sell: 2367,
      code: "SEK",
      image: "/images/asset7.webp",
    },
    {
      currency: "OMR",
      buy: 1905,
      sell: 1915,
      code: "OMR",
      image: "/images/asset11.webp",
    },
    {
      currency: "ZMK",
      buy: 1,
      sell: 1,
      code: "ZMK",
      image: "/images/asset8.webp",
    },
    {
      currency: "INR",
      buy: 255,
      sell: 365,
      code: "INR",
      image: "/images/asset10.webp",
    },
    {
      currency: "ZWD",
      buy: 255,
      sell: 365,
      code: "ZWD",
      image: "/images/asset9.webp",
    },
  ];

  // Update selected slide index
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const contextValue = {
    api,
    selectedScrollSnap: () => selected,
    scrollTo: (index: number) => api?.scrollTo(index),
  };

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <>
      <Carousel
        opts={{ loop: true }}
        plugins={[plugin.current]}
        className="w-full"
        setApi={(api) => setApi(api ?? null)}
      >
        <CarouselContent>
          {slides.map((slide: Slide, index: number) => (
            <CarouselItem key={index}>
              <div
                className="relative w-full bg-cover bg-center"
                style={{
                  height: height,
                  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url(${slide.imageUrl})`,
                }}
              >
                <div className="container mx-auto h-full flex items-center">
                  
                  <div className="max-w-lg text-white">
            {
              slide.dateText &&(
                <motion.h1
                className="text-4xl md:text-2xl font-bold mb-4 text-[#DD0A14]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {slide.dateText}
              </motion.h1>
              )
            }
                    <motion.h1
                      className="text-4xl md:text-5xl font-bold mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      className="text-lg md:text-xl mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                    >
                      {slide.buttonText && (
                        <Button
                          className="border border-white text-white font-semibold bg-transparent hover:bg-nbc-dark-700 hover:border-nbc-dark-700 w-1/2"
                          size="lg"
                        >
                          {slide.buttonText}
                        </Button>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselContext.Provider value={contextValue}>
          <CarouselDots />
        </CarouselContext.Provider>
      </Carousel>
      {hasForex && (
        <div className="bg-nbc-dark-700 text-white">
          <div className="container px-4 py-3 mx-auto">
            <div className="flex justify-center items-center md:justify-between">
              <div className="overflow-hidden relative flex-1">
                <div
                  className="flex whitespace-nowrap animate-marquee"
                  style={{ animation: "marquee 18s linear infinite" }}
                >
                  {[...forexRates, ...forexRates].map((rate, index, arr) => (
                    <div
                      key={rate.code + "-" + index}
                      className={
                        `flex items-center gap-2 text-sm px-6 h-10 text-white` +
                        (index === arr.length - 1 ? " mr-8" : "")
                      }
                      style={{ minWidth: "300px" }}
                    >
                      <span className="font-bold text-crdb-green-600">
                        {rate.code}:
                      </span>
                      <span className="ml-2">
                        Buying {rate.buy} - Selling {rate.sell}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center md:block">
                <Button className="ml-5 bg-white text-[#213A89] py-2 hover:bg-white cursor-pointer font-[600]">
                  Currency Calculator
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HeroSection;
