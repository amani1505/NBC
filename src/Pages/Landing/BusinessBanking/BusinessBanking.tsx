import ModalProvider from "@/Context/ModalContext";
import { Outlet } from "react-router-dom";

function BusinessBanking() {
  return (
    <ModalProvider>
      <Outlet />
    </ModalProvider>
  );
}

export default BusinessBanking
