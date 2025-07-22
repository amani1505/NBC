import NewsSkeletonLoader from "@/components/loader/NewsSkeletonLoader";
import type { Article } from "@/types/article";
import FilterSection from "../FilterSection";
import PressReleaseCard from "../PressReleaseCard";
import DynamicPagination from "@/components/reusable/DynamicPagination/DynamicPagination";
import { useState } from "react";


interface EventsTabContentProps {
  articles: Article[];
  loading: boolean;
}

const EventsTabContent = ({ articles, loading }: EventsTabContentProps) => {

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
  <div className="py-2">
   <FilterSection title="Events" />
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
)
  

};

export default EventsTabContent; 