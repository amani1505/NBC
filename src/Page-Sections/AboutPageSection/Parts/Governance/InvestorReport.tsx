import DocumentCard from "../DocumentCard";
import FinancialReportAccordion from "../FinancialReportAccordion";

function InvestorReport() {
  const annualReports = [
    {
      title: "Annual Reports",
      document: [
        { name: "Annual Report 2024" },
        { name: "Annual Report 2023" },
        { name: "Annual Report 2022" },
        { name: "Annual Report 2021" },
        { name: "Annual Report 2020" },
        { name: "Annual Report 2019" },
        { name: "Annual Report 2018" },
        { name: "Annual Report 2017" },
      ],
    },
  ];

  const corporateGovernanceReport = [
    {
      title: "Corporate Governance Report",
      document: [
        { name: "Corporate Governance Report  2024" },
        { name: "Corporate Governance Report  2023" },
        { name: "Corporate Governance Report  2022" },
        { name: "Corporate Governance Report  2021" },
        { name: "Corporate Governance Report  2020" },
        { name: "Corporate Governance Report  2019" },
        { name: "Corporate Governance Report  2018" },
        { name: "Corporate Governance Report  2017" },
      ],
    },
  ];

 const quarterlyFinancialReports= [
    {
      id: "financial-report-2024",
      title: "Financial Report 2024",
      contents:[
        { name: "Corporate Governance Report  2024" },
        { name: "Corporate Governance Report  2023" },
        { name: "Corporate Governance Report  2022" },
        { name: "Corporate Governance Report  2021" },
        { name: "Corporate Governance Report  2020" },
        { name: "Corporate Governance Report  2019" },
        { name: "Corporate Governance Report  2018" },
        { name: "Corporate Governance Report  2017" },
      ],
    },
    {
      id: "financial-report-2023",
      title: "Financial Report 2023", 
      contents: [
        { name: "Corporate Governance Report  2024" },
        { name: "Corporate Governance Report  2023" },
        { name: "Corporate Governance Report  2022" },
        { name: "Corporate Governance Report  2021" },
        { name: "Corporate Governance Report  2020" },
        { name: "Corporate Governance Report  2019" },
        { name: "Corporate Governance Report  2018" },
        { name: "Corporate Governance Report  2017" },
      ],
    },
    {
      id: "financial-report-2022",
      title: "Financial Report 2022",
      contents:[
        { name: "Corporate Governance Report  2024" },
        { name: "Corporate Governance Report  2023" },
        { name: "Corporate Governance Report  2022" },
        { name: "Corporate Governance Report  2021" },
        { name: "Corporate Governance Report  2020" },
        { name: "Corporate Governance Report  2019" },
        { name: "Corporate Governance Report  2018" },
        { name: "Corporate Governance Report  2017" },
      ],
    },
    {
        id: "financial-report-2021",
        title: "Financial Report 2021",
        contents:[
          { name: "Corporate Governance Report  2024" },
          { name: "Corporate Governance Report  2023" },
          { name: "Corporate Governance Report  2022" },
          { name: "Corporate Governance Report  2021" },
          { name: "Corporate Governance Report  2020" },
          { name: "Corporate Governance Report  2019" },
          { name: "Corporate Governance Report  2018" },
          { name: "Corporate Governance Report  2017" },
        ],
      },
  ]






  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {annualReports.map((document, index) => (
          <DocumentCard
            key={`reports-${index}`}
            title={document.title}
            documents={document.document}
          />
        ))}
        <div className="flex flex-col gap-4">
          {corporateGovernanceReport.map((document, index) => (
            <DocumentCard
              key={`policies-${index}`}
              title={document.title}
              documents={document.document}
            />
          ))}
        </div>

        <div className="col-span-2">
          {/* <div className="shadow rounded-lg  p-5 border  border-gray-300">
            <h1 className="text-xl sm:text-lg lg:text-xl font-bold  mb-2 sm:mb-4 leading-tight sm:leading-snug lg:leading-normal">
              {"Quarterly Financial Reports"}
            </h1>
          

          </div> */}

          <FinancialReportAccordion title="Quarterly Financial Reports" items={quarterlyFinancialReports}/>
        </div>
      </div>
    </div>
  );
}

export default InvestorReport;
