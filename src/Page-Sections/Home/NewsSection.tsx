import Button from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

function NewsSection() {
  const newsItems = [
    {
      id: "1",
      title: "NBC Bank Honors Yanga SC as 2024/25 NBC Premier League Champions",
      description:
        "Yesterday, we proudly handed over the 2024/25 NBC Premier League trophy to Young Africans SC after their",
      image: "/images/news1.jpg",
      category: "CUSTOMER STORIES",
      date: "Continue Reading →",
    },
    {
      id: "2",
      title: "NBC and GSM Partner",
      description: "Learn the essential steps to turn your product idea",
      image: "/images/news2.jpg",
      category: "INVESTMENT",
      date: "Continue Reading →",
      featured: false,
    },
    {
      id: "3",
      title: "Mbogo Ranches & NBC",
      description: "Learn valuable techniques and strategies to manage",
      image: "/images/news3.jpg",
      category: "",
      date: "Continue Reading →",
      featured: false,
    },
    {
      id: "4",
      title: "NBC Bank Presents BMW X1 Car Prize to Winner of",
      description: "Learn valuable techniques and strategies to manage",
      image: "/images/news4.jpg",
      category: "BEYOND BANKING",
      date: "Continue Reading →",
      featured: false,
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-8 lg:mb-10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-nbc-dark-950 mb-2 sm:mb-4">
              Get the latest news & Insights
            </h2>
            <p className="text-sm sm:text-base text-[#262556] max-w-prose">
              Explore how you can benefit from these
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <Select>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="News Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">All News</SelectItem>
                <SelectItem value="dark">Recent News</SelectItem>
                <SelectItem value="system">Updated News</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Card className="!p-0">
              <CardHeader className="!px-0">
                <img
                  src={newsItems[0].image}
                  alt="Featured news"
                  className="object-cover w-full h-48 sm:h-64 lg:h-80 rounded-t-xl"
                />
              </CardHeader>
              <CardContent className="rounded-b-xl px-4 sm:px-6 py-4">
                <div className="mb-3 inline-flex">
                  <div className="border flex gap-1 border-gray-400 rounded-full p-1 pr-4 text-[10px] sm:text-xs items-center text-gray-400">
                    <div className="border border-gray-400 rounded-full py-1 px-2">
                      News
                    </div>
                    <div className="border border-gray-400 rounded-full py-1 px-2">
                      Press Release
                    </div>
                    <div className="rounded-full py-1 px-2">5 min Read</div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-relaxed text-nbc-dark-700">
                  {newsItems[0].title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-900 line-clamp-3">
                  {newsItems[0].description}
                </p>
              </CardContent>
              <CardFooter className="px-4 sm:px-6 pb-4">
                <Button
                  className="text-white hover:text-white bg-nbc-dark-600 font-semibold hover:bg-nbc-dark-500 w-full sm:w-auto"
                  size="lg"
                >
                  {newsItems[0].date}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Side Articles */}
          <div className="flex-1 space-y-6">
            {newsItems.slice(1).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden !p-0">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                    <div className="w-full sm:w-1/3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-32 sm:h-24 lg:h-28 rounded-l-xl sm:rounded-r-none"
                      />
                    </div>
                    <CardContent className="!py-4 px-4 sm:px-5 w-full">
                      <div className="mb-3 inline-flex w-full">
                        <div className="border flex gap-1 border-gray-400 rounded-full p-1 pr-4 text-[10px] sm:text-xs items-center text-gray-400">
                          <div className="border border-gray-400 rounded-full py-1 px-2">
                            News
                          </div>
                          <div className="rounded-full py-1 px-2">5 min Read</div>
                        </div>
                      </div>
                      <div className="w-full">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold leading-relaxed text-nbc-dark-700">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-900 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 lg:mt-10 text-center"
        >
          <Button
            size="lg"
            className="text-white hover:text-white bg-nbc-dark-600 font-semibold hover:bg-nbc-dark-500 w-full sm:w-auto"
          >
            View All News
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default NewsSection;