import OfferingSection from "@/components/sections/OfferingSection";
import BoardOfCommitteeContent from "../Parts/Governance/BoardOfCommitteeContent";
import BoardOfDirectorsContent from "../Parts/Governance/BoardOfDirectorsContent";
import ManagementTeamContent from "../Parts/Governance/ManagementTeamContent";
import HeadingPart from "../Parts/HeadingPart"
import CorporateDocuments from "../Parts/Governance/CorporateDocuments";

function GovernancePageSection() {
  const governanceTabs = [
    {
      value: "boardOfDirectors",
      label: "Board Of Directors",
      content: <BoardOfDirectorsContent />,
      // icon: <MessageCircle />
    },
    {
      value: "boardCommittee",
      label: "Board Committee",
      content: <BoardOfCommitteeContent />,
      // icon: <MessageSquare />
    },
    {
      value: "managementTeam",
      label: "Management Team",
      content: <ManagementTeamContent />,
      // icon: <Building />
    },

  ];




  return (
   <>
     <div className="container mx-auto md:px-44">
        <HeadingPart
          title="Overview"
          subtitle={`A visual guide could be a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone. A manager could create a visual guide for the team to complete the build-out.A visual guide could be a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone. A manager could create a visual guide for the team to complete the build-out.`}
        />
      </div>
      <OfferingSection
        title=""
        description=""
        tabs={governanceTabs}
        defaultTab="boardOfDirectors"
        maxWidth="max-w-4xl"
      />
          <div className="container mx-auto md:px-44">
        <HeadingPart
          title="Corporate Documents"
          subtitle={`A visual guide could be a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone. A manager could create a visual guide for the team to complete the build-out.A visual guide could be a wireframe, creative composition, or information architecture.`}
        />

        
      </div>
      <CorporateDocuments />
     
   
   </>
  )
}

export default GovernancePageSection
