import Faq from "./CallToActionSections/Faq";
import FeedbackandComplains from "./CallToActionSections/FeedbackandComplains";
import TalktoUs from "./CallToActionSections/TalktoUs";
import {
    HelpCircle,
  MessageCircle,
  MessageSquare,
} from "lucide-react";
// import { useState } from "react";
import "./styles/calltoaction.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function CallToAction() {
  // const [activeTab, setActiveTab] = useState("talktous");

  // const tabs = [
  //   { id: "talktous", label: "Talk to Us", icon: MessageCircle, component: TalktoUs },
  //   { id: "feedback", label: "Feedback & Complaints", icon: MessageSquare, component: FeedbackandComplains },
  //   { id: "faq", label: "FAQ", icon: HelpCircle, component: Faq }
  // ];

  return (
    <>
      <div className=" mx-auto px-6 py-16 container">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-nbc-dark-950 text-[48px] font-[700]">
            Have A Problem? Don't Worry
          </h1>
          <p className="text-[18px] text-[#4B5563] mb-5">
            Let us know how we can help you today!
          </p>
        </div>

        {/* Modern Tab Navigation with shadcn */}
        <Tabs defaultValue="talktous" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 p-1 rounded-2xl max-w-3xl mx-auto h-auto">
            <TabsTrigger
              value="talktous"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 data-[state=active]:bg-blue-950 data-[state=active]:text-white  text-center data-[state=active]:shadow-lg data-[state=active]:shadow-gray-200/50 data-[state=active]:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">Talk to Us</span>
            </TabsTrigger>
            <TabsTrigger
              value="feedback"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 data-[state=active]:bg-blue-950 data-[state=active]:text-white  text-center data-[state=active]:shadow-lg data-[state=active]:shadow-gray-200/50 data-[state=active]:scale-105"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="hidden sm:inline">Feedback & Complains</span>
            </TabsTrigger>
            <TabsTrigger
              value="faq"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 data-[state=active]:bg-blue-950 data-[state=active]:text-white  text-center data-[state=active]:shadow-lg data-[state=active]:shadow-gray-200/50 data-[state=active]:scale-105"
            >
              <HelpCircle className="w-5 h-5" />
              <span className="hidden sm:inline">Frquently Asked Question</span>
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <div className="relative">
            <TabsContent value="talktous">
              <TalktoUs />
            </TabsContent>

            <TabsContent value="feedback">
              <FeedbackandComplains />
            </TabsContent>

            <TabsContent value="faq">
              <Faq />
            </TabsContent>
          </div>
        </Tabs>

      </div>
    </>
  );
}

export default CallToAction;
