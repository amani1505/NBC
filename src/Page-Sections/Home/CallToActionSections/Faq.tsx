import NewsSidebar from "@/Page-Sections/AboutPageSection/Parts/News/NewsSidebar";
import type { SideTabConfig } from "@/types/tabs";
import { useState } from "react";
import GeneralQuestions from "../FAQ/GeneralQuestions";
import ProductQuestions from "../FAQ/ProductQuestions";
import PaymentQuestion from "../FAQ/PaymentQuestion";
import SupportQuestions from "../FAQ/SupportQuestions";
import Troubleshooting from "../FAQ/Troubleshooting";
import PrivacyQuestions from "../FAQ/PrivacyQuestions";
import DiscountsQuestion from "../FAQ/DiscountsQuestion";
import PromotionQuestions from "../FAQ/PromotionQuestions";

const tabs: SideTabConfig[] = [
  { name: "Genaral", component: GeneralQuestions },
  { name: "Product", component: ProductQuestions },
  {
    name: "Payment",
    component: PaymentQuestion,
    filter: (a) => a.category === "Events",
  },
  {
    name: "Support",
    component: SupportQuestions,
    filter: (a) => a.category === "Market Insights",
  },
  {
    name: "Trobleshooting",
    component: Troubleshooting,
    filter: (a) => a.category === "Partnerships",
  },
  {
    name: "Privacy",
    component: PrivacyQuestions,
    filter: (a) => a.category === "Media Centre",
  },
  {
    name: "Discounts",
    component: DiscountsQuestion,
    filter: (a) => a.category === "Media Centre",
  },
  {
    name: "Promotions",
    component: PromotionQuestions,
    filter: (a) => a.category === "Media Centre",
  },
];

function Faq() {
  const [selectedTab, setSelectedTab] = useState<string>("Genaral");
  const [articles, setArticles] = useState<[]>([]);

  const renderTabContent = () => {
    const tab = tabs.find((t) => t.name === selectedTab);
    if (!tab) return null;

    const TabComponent = tab.component;
    const filteredArticles = tab.filter
      ? articles.filter(tab.filter)
      : articles;

    return <TabComponent articles={filteredArticles} />;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <NewsSidebar
        selectedTab={selectedTab}
        onTabSelect={setSelectedTab}
        tabs={tabs.map((t) => t.name)}
      />

      <div className="w-full p-4">
        <section>{renderTabContent()}</section>
      </div>
    </div>
  );
}

export default Faq;
