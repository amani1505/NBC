import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { deslugify } from "@/lib/utils";
import SingleInsurancePageSection from "@/Page-Sections/PersonalBanking/SingleInsurancePageSection/SingleInsurancePageSection";
import { useParams } from "react-router-dom";

function SingleInsurance() {
  const { insuranceName } = useParams();
  const readableTitle = insuranceName
    ? deslugify(insuranceName)
    : "Personal Banking";

  useDocumentTitle(`NBC | ${readableTitle}`);

  return <SingleInsurancePageSection />;
}

export default SingleInsurance;
