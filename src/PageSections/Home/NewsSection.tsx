import { Button } from "@/components/ui/button";
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
      image: "images/news1.jpg",
      category: "CUSTOMER STORIES",
      date: "Continue Reading →",
    },
    {
      id: "2",
      title: "NBC and GSM Partner",
      description: "Learn the essential steps to turn your product idea",
      image: "images/news2.jpg",
      category: "INVESTMENT",
      date: "Continue Reading →",
      featured: false,
    },
    {
      id: "3",
      title: "Mbogo Ranches & NBC",
      description: "Learn valuable techniques and strategies to manage",
      image: "images/news3.jpg",
      category: "",
      date: "Continue Reading →",
      featured: false,
    },
    {
      id: "4",
      title: "NBC Bank Presents BMW X1 Car Prize to Winner of ",
      description: "Learn valuable techniques and strategies to manage",
      image: "images/news4.jpg",
      category: "BEYOND BANKING",
      date: "Continue Reading →",
      featured: false,
    },
  ];

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 flex items-center justify-between"
        >
          <div>
            <h2 className="mb-4 text-4xl font-bold text-nbc-dark-950 md:text-md">
              Get the latest news & Insights
            </h2>
            <p className="text-[#262556]">
              Explore how you can benefit from these
            </p>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
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

        <div className="grid grid-cols-1 gap-y-8 items-start lg:grid-cols-2 lg:gap-x-5">
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
                  className="object-cover w-full h-full rounded-t-xl"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/60" /> */}
              </CardHeader>
              <CardContent className="rounded-b-xl">
                <div className="mb-3 inline-flex">
                  <div className="border flex gap-1 border-gray-400 rounded-full p-1 pr-4 text-[10px] items-center text-gray-400">
                    <div className="border border-gray-400 rounded-full py-1 px-2">
                      News
                    </div>
                    <div className="border border-gray-400 rounded-full py-1 px-2">
                      Press Release
                    </div>
                    <div className=" rounded-full py-1 px-2">5 min Read</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold leading-relaxed text-nbc-dark-700">
                  {newsItems[0].title}
                </h3>
                <p className=" text-[12px] font-bold ">
                  {newsItems[0].description}
                </p>
              </CardContent>
              <CardFooter className="mb-5">
                <Button className=" text-white hover:text-white bg-nbc-dark-600 font-[600]">
                  {newsItems[0].date}
                  {/* <ArrowRight className="ml-1 w-4 h-4" /> */}
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
                  <div className="flex gap-5">
                    <div className="">
                      <img src={item.image} alt="" className="" />
                    </div>
                    <CardContent className="!py-5 px-2 w-full">
                      <div className="mb-3 inline-flex w-full">
                        <div className="border flex gap-1 border-gray-400 rounded-full p-1 pr-4 text-[10px] items-center text-gray-400">
                          <div className="border border-gray-400 rounded-full py-1 px-2">
                            News
                          </div>

                          <div className=" rounded-full py-1 px-2">
                            5 min Read
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <h3 className="text-xl font-bold leading-relaxed text-nbc-dark-700 ">
                          {item.title}
                        </h3>
                        <p className=" text-[12px]  text-gray-900 line-clamp-2">
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
          className="mt-5 text-center grid grid-cols-2"
        >
          <div></div>
          <Button
            size="lg"
            className="text-white hover:text-white bg-nbc-dark-600 font-[600] hover:bg-nbc-dark-500 "
          >
            View All News
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default NewsSection;
