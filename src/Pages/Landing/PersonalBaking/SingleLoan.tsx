import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { deslugify } from "@/lib/utils";
import SingleLoanPageSection from "@/Page-Sections/PersonalBanking/SingleLoanPageSection/SingleLoanPageSection";
import { useParams } from "react-router-dom";

function SingleLoan() {
  const { loanName } = useParams();
  const readableTitle = loanName ? deslugify(loanName) : "Personal Banking";

  useDocumentTitle(`NBC | ${readableTitle}`);

  return <SingleLoanPageSection />;
}

export default SingleLoan;
