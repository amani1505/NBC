import { useState } from "react";
import NewsSkeletonLoader from "@/components/loader/NewsSkeletonLoader";
import { motion } from "framer-motion";
import type { Article } from "@/types/article";
import PressReleaseCard from "../PressReleaseCard";
import FilterSection from "../FilterSection";
import DynamicPagination from "@/components/reusable/DynamicPagination/DynamicPagination";

interface PressContentProps {
  articles: Article[];
  loading: boolean;
}

const PressTabContent = ({ articles, loading }: PressContentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 8;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const paginatedArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
      <h2 className="text-lg sm:text-3xl lg:text-xl font-bold text-nbc-dark-950 mb-2 sm:mb-4">
        Latest press release
      </h2>
      {/* News Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <PressReleaseCard
            image={articles[0]?.image}
            title={articles[0]?.title}
            description={articles[0]?.description}
            badgeText={articles[0]?.category}
          />
        </motion.div>
        {/* Side Articles */}
        <div className="flex-1 space-y-6">
          {articles?.slice(1).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <PressReleaseCard
                image={article?.image}
                title={article?.title}
                description={article?.description}
                badgeText={article?.category}
                rightSide={true}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="py-10">
        <FilterSection />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {loading
            ? Array(8)
                .fill(0)
                .map((_, index) => <NewsSkeletonLoader key={index} />)
            : paginatedArticles.map((article) => (
                <PressReleaseCard
                  key={article.id}
                  image={article?.image}
                  title={article?.title}
                  description={article?.description}
                  badgeText={article?.category}
                />
              ))}
        </div>

        <div className="py-7 ">
          <DynamicPagination
            currentPage={currentPage}
            totalPages={30}
            onPageChange={handlePageChange}
            showPreviousNextText={false}
            className="justify-end"
          />
        </div>
      </div>
    </div>
  );
};

export default PressTabContent;
