import FinancialReportAccordion from "../Parts/FinancialReportAccordion";
import HeadingPart from "../Parts/HeadingPart";

function SustainabilityPageSection() {
  const sustainabilityReports = [
    {
      id: "sustainability-reports-2024",
      title: "Sustainability Reports 2024",
      contents: [
        { name: "Sustainability Reports  2024" },
        { name: "Sustainability Reports  2023" },
        { name: "Sustainability Reports  2022" },
        { name: "Sustainability Reports  2021" },
        { name: "Sustainability Reports  2020" },
      ],
    },
    {
      id: "sustainability-reports-2023",
      title: "Sustainability Reports 2023",
      contents: [
        { name: "Sustainability Reports  2024" },
        { name: "Sustainability Reports  2023" },

        { name: "Sustainability Reports  2018" },
        { name: "Sustainability Reports  2017" },
      ],
    },
    {
      id: "sustainability-reports-2022",
      title: "Sustainability Reports 2022",
      contents: [
        { name: "Sustainability Reports  2024" },
        { name: "Sustainability Reports  2023" },

        { name: "Sustainability Reports  2019" },
        { name: "Sustainability Reports  2018" },
        { name: "Sustainability Reports  2017" },
      ],
    },
    {
      id: "sustainability-reports-2021",
      title: "Sustainability Reports 2021",
      contents: [
        { name: "Sustainability Reports  2024" },
        { name: "Sustainability Reports  2023" },
        { name: "Sustainability Reports  2022" },
      ],
    },
  ];

  return (
    <>
      <div className="container mx-auto md:px-44">
        <HeadingPart
          title="Sustainability"
          subtitle={`A visual guide could be a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone. A manager could create a visual guide for the team to complete the build-out.A visual guide could be a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone. A manager could create a visual guide for the team to complete the build-out.`}
        />
      </div>
      <div className="container mx-auto my-10">
        <FinancialReportAccordion
          title="Sustainability Reports"
          items={sustainabilityReports}
        />
      </div>
    </>
  );
}

export default SustainabilityPageSection;
