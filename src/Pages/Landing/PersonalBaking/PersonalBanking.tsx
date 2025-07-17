import ModalProvider from "@/Context/ModalContext";
import { Outlet } from "react-router-dom";

function PersonalBanking() {
  return (
    <ModalProvider>
      <Outlet />
    </ModalProvider>
  );
}

export default PersonalBanking;
