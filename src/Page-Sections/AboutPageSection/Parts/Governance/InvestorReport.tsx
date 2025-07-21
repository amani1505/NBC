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
      title: "Corporate Governance Reports",
      document: [
        { name: "Corporate Governance Report 2024" },
        { name: "Corporate Governance Report 2023" },
        { name: "Corporate Governance Report 2022" },
        { name: "Corporate Governance Report 2021" },
        { name: "Corporate Governance Report 2020" },
        { name: "Corporate Governance Report 2019" },
        { name: "Corporate Governance Report 2018" },
        { name: "Corporate Governance Report 2017" },
      ],
    },
  ];

  const quarterlyFinancialReports = [
    {
      id: "financial-report-2024",
      title: "Financial Report 2024",
      contents: [
        { name: "Quarterly Financial Report Q1 2024" },
        { name: "Quarterly Financial Report Q2 2024" },
        { name: "Quarterly Financial Report Q3 2024" },
        { name: "Quarterly Financial Report Q4 2024" },
      ],
    },
    {
      id: "financial-report-2023",
      title: "Financial Report 2023",
      contents: [
        { name: "Quarterly Financial Report Q1 2023" },
        { name: "Quarterly Financial Report Q2 2023" },
        { name: "Quarterly Financial Report Q3 2023" },
        { name: "Quarterly Financial Report Q4 2023" },
      ],
    },
    {
      id: "financial-report-2022",
      title: "Financial Report 2022",
      contents: [
        { name: "Quarterly Financial Report Q1 2022" },
        { name: "Quarterly Financial Report Q2 2022" },
        { name: "Quarterly Financial Report Q3 2022" },
        { name: "Quarterly Financial Report Q4 2022" },
      ],
    },
    {
      id: "financial-report-2021",
      title: "Financial Report 2021",
      contents: [
        { name: "Quarterly Financial Report Q1 2021" },
        { name: "Quarterly Financial Report Q2 2021" },
        { name: "Quarterly Financial Report Q3 2021" },
        { name: "Quarterly Financial Report Q4 2021" },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-10 lg:my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
        {annualReports.map((document, index) => (
          <DocumentCard
            key={`reports-${index}`}
            title={document.title}
            documents={document.document}
          />
        ))}
        <div className="flex flex-col gap-4 sm:gap-6">
          {corporateGovernanceReport.map((document, index) => (
            <DocumentCard
              key={`governance-${index}`}
              title={document.title}
              documents={document.document}
            />
          ))}
        </div>
        <div className="col-span-1 md:col-span-2">
          <FinancialReportAccordion
            title="Quarterly Financial Reports"
            items={quarterlyFinancialReports}
          />
        </div>
      </div>
    </div>
  );
}

export default InvestorReport;