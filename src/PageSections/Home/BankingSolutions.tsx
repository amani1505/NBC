
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BusinessSolution from "./BankSolution/BusinessSolution"
import CorporateSolution from "./BankSolution/CorporateSolution"
import PersonalSolution from "./BankSolution/PersonalSolution"
import LaRiba from "./BankSolution/LaRiba"

function BankingSolutions() {
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
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8 bg-gray-100 p-1 rounded-2xl max-w-4xl mx-auto h-auto">
          <TabsTrigger
            value="personal"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 data-[state=active]:bg-blue-950 data-[state=active]:text-white  text-center data-[state=active]:shadow-lg data-[state=active]:shadow-gray-200/50 data-[state=active]:scale-105"
          >
            {/* <MessageCircle className="w-5 h-5" /> */}
            <span className="hidden sm:inline">Personal</span>
            
          </TabsTrigger>
          <TabsTrigger
            value="business"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 data-[state=active]:bg-blue-950 data-[state=active]:text-white  text-center data-[state=active]:shadow-lg data-[state=active]:shadow-gray-200/50 data-[state=active]:scale-105"
          >
            {/* <MessageSquare className="w-5 h-5" /> */}
            <span className="hidden sm:inline">Business</span>
          </TabsTrigger>
          <TabsTrigger
            value="corporate"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 data-[state=active]:bg-blue-950 data-[state=active]:text-white  text-center data-[state=active]:shadow-lg data-[state=active]:shadow-gray-200/50 data-[state=active]:scale-105"
          >
            {/* <HelpCircle className="w-5 h-5" /> */}
            <span className="hidden sm:inline">Corporate</span>
          </TabsTrigger>

          <TabsTrigger
            value="lariba"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 data-[state=active]:bg-blue-950 data-[state=active]:text-white  text-center data-[state=active]:shadow-lg data-[state=active]:shadow-gray-200/50 data-[state=active]:scale-105"
          >
            {/* <HelpCircle className="w-5 h-5" /> */}
            <span className="hidden sm:inline">La Riba</span>
          </TabsTrigger>
        </TabsList>

        {/* Tab Content */}
        <div className="relative">
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
        </div>
      </Tabs>

    </div>
  </>
  )
}

export default BankingSolutions
