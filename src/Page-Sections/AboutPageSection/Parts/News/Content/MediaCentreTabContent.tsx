import NewsSkeletonLoader from "@/components/loader/NewsSkeletonLoader";
import { useState } from "react";
import MediaHero from "../MediaHero";
import FilterSection from "../FilterSection";
import PressReleaseCard from "../PressReleaseCard";
import DynamicPagination from "@/components/reusable/DynamicPagination/DynamicPagination";
import ImageGallery from "../../media/ImageGallery";
import VideoGallery from "../../media/VideoGallery";

interface Article {
  id: string;
  image: string;
  date: string;
  title: string;
  description: string;
  category?: string;
  badgeText?: string;
  featured?: boolean;
}

interface MediaCentreTabContentProps {
  articles: Article[];
  loading: boolean;
}

const MediaCentreTabContent = ({ articles, loading }: MediaCentreTabContentProps) => {

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
    <h2 className="text-lg sm:text-3xl lg:text-xl font-bold text-nbc-dark-950 mb-2 sm:mb-4 capitalize">
      Latest news
    </h2>

<MediaHero />

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

<ImageGallery />

<VideoGallery />


      </div>
    </div>
  )
}

export default MediaCentreTabContent; 