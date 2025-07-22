import { useEffect, useState } from "react";
import NewsSidebar from "../Parts/News/NewsSidebar";
import NewsTabContent from "../Parts/News/Content/NewsTabContent";
import EventsTabContent from "../Parts/News/Content/EventsTabContent";
import MarketInsightsTabContent from "../Parts/News/Content/MarketInsightsTabContent";
import PartnershipsTabContent from "../Parts/News/Content/PartnershipsTabContent";
import MediaCentreTabContent from "../Parts/News/Content/MediaCentreTabContent";
import type { Article } from "@/types/article";
import PressTabContent from "../Parts/News/Content/PressTabContent";


function NewsPageSection() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>("Press Release");

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setArticles([
        {
          id: "1",
          title:
            "NBC Bank Honors Yanga SC as 2024/25 NBC Premier League Champions",
          description:
            "Yesterday, we proudly handed over the 2024/25 NBC Premier League trophy to Young Africans SC after their",
          image: "/images/news1.jpg",
          category: "News",
          date: "Continue Reading →",
        },
        {
          id: "2",
          title: "NBC and GSM Partner",
          description: "Learn the essential steps to turn your product idea",
          image: "/images/news2.jpg",
          category: "Events",
          date: "Continue Reading →",
          featured: false,
        },
        {
          id: "3",
          title: "Mbogo Ranches & NBC",
          description: "Learn valuable techniques and strategies to manage",
          image: "/images/news3.jpg",
          category: "Market Insights",
          date: "Continue Reading →",
          featured: false,
        },
        {
          id: "4",
          title: "NBC Bank Presents BMW X1 Car Prize to Winner of",
          description: "Learn valuable techniques and strategies to manage",
          image: "/images/news4.jpg",
          category: "Partnerships",
          date: "Continue Reading →",
          featured: false,
        },
        // Add more articles as needed
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <NewsSidebar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      <div className="w-full  p-4">
        <section className="">
          {/* Tab content switcher */}
          {selectedTab === "Press Release" && (
            <PressTabContent articles={articles} loading={loading} />
          )}
          {selectedTab === "News" && (
            <NewsTabContent articles={articles} loading={loading} />
          )}
          {selectedTab === "Events" && (
            <EventsTabContent articles={articles.filter(a => a.category === "Events")} loading={loading} />
          )}
          {selectedTab === "Market Insights" && (
            <MarketInsightsTabContent articles={articles.filter(a => a.category === "Market Insights")} loading={loading} />
          )}
          {selectedTab === "Partnerships" && (
            <PartnershipsTabContent articles={articles.filter(a => a.category === "Partnerships")} loading={loading} />
          )}
          {selectedTab === "Media Centre" && (
            <MediaCentreTabContent articles={articles.filter(a => a.category === "Media Centre")} loading={loading} />
          )}
        </section>
        {/* The grid below can be removed or adapted as needed, since tab content is now separated */}
      </div>
    </div>
  );
}

export default NewsPageSection;
