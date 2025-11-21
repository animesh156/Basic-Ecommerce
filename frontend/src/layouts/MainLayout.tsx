import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      {/* All pages will render here */}
      <Outlet />

      {/* Footer will be shown on ALL pages */}
      <Footer />
    </>
  );
};

export default MainLayout;
