import { Outlet } from "react-router-dom";
import Header from "../page/shared/Header";
import Footer from "../page/shared/Footer";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <div className="min-h-[calc(100vh-408px)] lg:mx-40">
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
