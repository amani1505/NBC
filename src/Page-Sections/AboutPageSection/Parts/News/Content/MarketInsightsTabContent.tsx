import NewsSkeletonLoader from "@/components/loader/NewsSkeletonLoader";

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

interface MarketInsightsTabContentProps {
  articles: Article[];
  loading: boolean;
}

const MarketInsightsTabContent = ({ articles, loading }: MarketInsightsTabContentProps) => (
  <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
    <h2 className="text-lg sm:text-3xl lg:text-xl font-bold text-nbc-dark-950 mb-2 sm:mb-4">
      Market Insights
    </h2>
    {loading ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <NewsSkeletonLoader key={index} />
          ))}
      </div>
    ) : (
      <div>Market Insights content goes here.</div>
    )}
  </div>
);

export default MarketInsightsTabContent; 