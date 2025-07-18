import ModalProvider from "@/Context/ModalContext";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { deslugify } from "@/lib/utils";
import WaytoBankPageSection from "@/Page-Sections/WayToBank/WaytoBankPageSection/WaytoBankPageSection";
import { useParams } from "react-router-dom";

function WaytoBank() {
  const { wayToBankName } = useParams();
  const readableTitle = wayToBankName
    ? deslugify(wayToBankName)
    : "Personal Banking";

  useDocumentTitle(`NBC | ${readableTitle}`);
  return (
    <ModalProvider>
      <WaytoBankPageSection />
    </ModalProvider>
  );
}

export default WaytoBank;
