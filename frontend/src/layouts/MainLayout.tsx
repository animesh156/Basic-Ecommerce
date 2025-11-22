import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />

      {/* All pages will render here */}
      <Outlet />

      {/* Footer will be shown on ALL pages */}
      <Footer />
    </>
  );
};

export default MainLayout;
