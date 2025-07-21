import DocumentCard from "../DocumentCard";

function CorporateDocuments() {
  const corporatGovernanceReports = [
    {
      title: "Corporate Governance Reports",
      document: [
        { name: "Corporate Governance Report" },
        { name: "Corporate Governance Report" },
        { name: "Corporate Governance Report" },
        { name: "Corporate Governance Report" },
        { name: "Corporate Governance Report" },
        { name: "Corporate Governance Report" },
        { name: "Corporate Governance Report" },
      ],
    },
  ];

  const corporateGovernancePolicies = [
    {
      title: "Corporate Governance Policies",
      document: [
        { name: "Corporate Governance Policy" },
        { name: "Corporate Governance Policy" },
        { name: "Corporate Governance Policy" },
        { name: "Corporate Governance Policy" },
      ],
    },
  ];

  const corporateGovernanceFramework = [
    {
      title: "Corporate Governance Framework",
      document: [{ name: "Corporate Governance Framework" }],
    },
  ];

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {corporatGovernanceReports.map((document, index) => (
          <DocumentCard
            key={`reports-${index}`}
            title={document.title}
            documents={document.document}
          />
        ))}
        <div className="flex flex-col gap-4">
          {corporateGovernancePolicies.map((document, index) => (
            <DocumentCard
              key={`policies-${index}`}
              title={document.title}
              documents={document.document}
            />
          ))}
          {corporateGovernanceFramework.map((document, index) => (
            <DocumentCard
              key={`framework-${index}`}
              title={document.title}
              documents={document.document}
            />
          ))}
        </div>

        {corporatGovernanceReports.map((document, index) => (
          <DocumentCard
            key={`reports-${index}`}
            title={document.title}
            documents={document.document}
          />
        ))}
         {corporateGovernancePolicies.map((document, index) => (
            <DocumentCard
              key={`policies-${index}`}
              title={document.title}
              documents={document.document}
            />
          ))}
      </div>
    </div>
  );
}

export default CorporateDocuments;