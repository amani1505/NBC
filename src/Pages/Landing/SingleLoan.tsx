import ModalProvider from "@/Context/ModalContext";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { deslugify } from "@/lib/utils";
import SingleLoanPageSection from "@/Page-Sections/Loans/SingleLoanPageSection/SingleLoanPageSection";
import { useParams } from "react-router-dom";

function SingleLoan() {
  const { loanName } = useParams();
  const readableTitle = loanName ? deslugify(loanName) : "Personal Banking";

  useDocumentTitle(`NBC | ${readableTitle}`);

  return (
    <ModalProvider>
      <SingleLoanPageSection />
    </ModalProvider>
  );
}

export default SingleLoan;
