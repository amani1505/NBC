import { useParams } from "react-router-dom";
import { deslugify } from "@/lib/utils";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import SingleAccountPageSection from "@/Page-Sections/PersonalBanking/SingleAccountPageSection/SingleAccountPageSection";

function SingleAccount() {
  const { accountName } = useParams();
  const readableTitle = accountName
    ? deslugify(accountName)
    : "Personal Banking";

  useDocumentTitle(`NBC | ${readableTitle}`);

  return <SingleAccountPageSection />;
}

export default SingleAccount;
