import { useEffect, useState } from "react";
import NewsSidebar from "../Parts/News/NewsSidebar";
import NewsTabContent from "../Parts/News/Content/NewsTabContent";
import EventsTabContent from "../Parts/News/Content/EventsTabContent";
import MarketInsightsTabContent from "../Parts/News/Content/MarketInsightsTabContent";
import PartnershipsTabContent from "../Parts/News/Content/PartnershipsTabContent";
import MediaCentreTabContent from "../Parts/News/Content/MediaCentreTabContent";
import PressTabContent from "../Parts/News/Content/PressTabContent";
import type { Article } from "@/types/article";
import type { SideTabConfig } from "@/types/tabs";


const tabs: SideTabConfig[] = [
  { name: "Press Release", component: PressTabContent },
  { name: "News", component: NewsTabContent },
  { name: "Events", component: EventsTabContent, filter: (a) => a.category === "Events" },
  { name: "Market Insights", component: MarketInsightsTabContent, filter: (a) => a.category === "Market Insights" },
  { name: "Partnerships", component: PartnershipsTabContent, filter: (a) => a.category === "Partnerships" },
  { name: "Media Centre", component: MediaCentreTabContent, filter: (a) => a.category === "Media Centre" },
];

function NewsPageSection() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].name);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setArticles([
        {
          id: "1",
          title: "NBC Bank Honors Yanga SC as 2024/25 NBC Premier League Champions",
          description: "Yesterday, we proudly handed over the 2024/25 NBC Premier League trophy to Young Africans SC after their",
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
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const renderTabContent = () => {
    const tab = tabs.find((t) => t.name === selectedTab);
    if (!tab) return null;
    
    const TabComponent = tab.component;
    const filteredArticles = tab.filter ? articles.filter(tab.filter) : articles;
    
    return <TabComponent articles={filteredArticles} loading={loading} />;
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <NewsSidebar 
        selectedTab={selectedTab} 
        onTabSelect={setSelectedTab} 
        tabs={tabs.map(t => t.name)}
      />
      <div className="w-full p-4">
        <section>{renderTabContent()}</section>
      </div>
    </div>
  );
}

export default NewsPageSection;