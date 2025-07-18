import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { deslugify } from "@/lib/utils";
import CompareAccountPageSection from "@/Page-Sections/Accounts/CompareAccount/CompareAccountPageSection";
import { useParams } from "react-router-dom";

function CompareAccount() {
  const { compareAccountName } = useParams();
  const readableTitle = compareAccountName
    ? deslugify(compareAccountName)
    : "Compare Account";

  useDocumentTitle(`NBC | ${readableTitle}`);
  return <CompareAccountPageSection />;
}

export default CompareAccount;
