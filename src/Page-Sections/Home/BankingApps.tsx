import { Tabs, TabsContent } from "@/components/ui/tabs";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Kiganjani from "./BankingApp/Kiganjani";
import Connect from "./BankingApp/Connect";
import Wakala from "./BankingApp/Wakala";
import EduConnect from "./BankingApp/Edu-Connect";

function BankingApps() {
  const tabs = [
    {
      title: "NBC Kiganjani",
      value: "kiganjani",
    },
    {
      title: "NBC Connect",
      value: "connect",
    },
    {
      title: "NBC Wakala App",
      value: "wakala",
    },
    {
      title: "NBC Edu-connect",
      value: "edu",
    },
  ];

  return (
    <div className="  py-16 ">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-nbc-dark-950 text-[48px] font-[700]">
          Our Digital Banking Solutions
        </h1>
        <p className="text-[18px] text-[#4B5563] mb-5">
          Explore how you can benefit from these
        </p>
      </div>

      <Tabs defaultValue="kiganjani" className="w-full ">
        <TabsList className="grid w-full grid-cols-4 mb-8 bg-gray-100 p-1 rounded-2xl max-w-4xl mx-auto h-auto container">
          {tabs?.map((tab, index) => (
            <TabsTrigger
              key={index}
              value={tab.value}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 data-[state=active]:bg-blue-950 data-[state=active]:text-white  text-center data-[state=active]:shadow-lg data-[state=active]:shadow-gray-200/50 data-[state=active]:scale-105"
            >
              {/* <MessageCircle className="w-5 h-5" /> */}
              <span className="hidden sm:inline text-center">{tab.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Tab Content */}

        <div className="relative">
          <TabsContent value="kiganjani">
            <Kiganjani />
          </TabsContent>
          <TabsContent value="connect">
            <Connect />
          </TabsContent>
          <TabsContent value="wakala">
            <Wakala />
          </TabsContent>
          <TabsContent value="edu">
            <EduConnect />
          </TabsContent>
        </div>
        {/* <div className="relative">
          <TabsContent value="business">
            <BusinessSolution />
          </TabsContent>

          <TabsContent value="corporate">
            <CorporateSolution />
          </TabsContent>

          <TabsContent value="personal">
            <PersonalSolution />
          </TabsContent>

          <TabsContent value="lariba">
            <LaRiba />
          </TabsContent>
        </div> */}
      </Tabs>
    </div>
  );
}

export default BankingApps;
