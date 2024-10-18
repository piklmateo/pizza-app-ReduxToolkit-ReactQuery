import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
