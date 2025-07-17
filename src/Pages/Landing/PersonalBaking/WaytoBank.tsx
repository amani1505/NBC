import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { deslugify } from "@/lib/utils";
import WaytoBankPageSection from "@/Page-Sections/PersonalBanking/WaytoBankPageSection/WaytoBankPageSection"
import { useParams } from "react-router-dom";

function WaytoBank() {
  const { wayToBankName } = useParams();
  const readableTitle = wayToBankName ? deslugify(wayToBankName) : "Personal Banking";

  useDocumentTitle(`NBC | ${readableTitle}`);
  return (
<WaytoBankPageSection />
  )
}

export default WaytoBank
