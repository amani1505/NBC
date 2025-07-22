// interface NewsSidebarProps {
//   selectedTab: string;
//   onTabSelect: (tab: string) => void;
//   tabs?: string[];
// }

// const defaultTabs = [
//   "Press Release",
//   "News",
//   "Events",
//   "Market Insights",
//   "Partnerships",
//   "Media Centre",
// ];

// function NewsSidebar({ selectedTab, onTabSelect,tabs=defaultTabs }: NewsSidebarProps) {
//   return (
//     <div className="w-full md:w-1/6 bg-white p-4 ">
//           <ul className="space-y-2">
//         {tabs.map((tab) => (
//           <li
//             key={tab}
//             className={`text-gray-600 hover:text-nbc-dark-950 cursor-pointer px-2 py-1 rounded ${
//               selectedTab === tab ? "bg-nbc-dark-950 text-white font-semibold hover:text-white" : ""
//             }`}
//             onClick={() => onTabSelect(tab)}
//           >
//             {tab}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default NewsSidebar;

interface NewsSidebarProps {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
  tabs: string[];
}

function NewsSidebar({ selectedTab, onTabSelect, tabs }: NewsSidebarProps) {
  return (
    <div className="w-full md:w-1/6 bg-white p-4">
      <ul className="space-y-2">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`text-gray-600 hover:text-nbc-dark-950 cursor-pointer px-2 py-1 rounded ${
              selectedTab === tab ? "bg-nbc-dark-950 text-white font-semibold hover:text-white" : ""
            }`}
            onClick={() => onTabSelect(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsSidebar;