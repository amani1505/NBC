import { useParams } from "react-router-dom";
import { deslugify } from "@/lib/utils";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import SingleAccountPageSection from "@/Page-Sections/Accounts/SingleAccountPageSection/SingleAccountPageSection";
import ModalProvider from "@/Context/ModalContext";

function SingleAccount() {
  const { accountName } = useParams();
  const readableTitle = accountName
    ? deslugify(accountName)
    : "Personal Banking";

  useDocumentTitle(`NBC | ${readableTitle}`);

  return( 
    <ModalProvider>

      <SingleAccountPageSection />
    </ModalProvider>
  );
  
}

export default SingleAccount;
