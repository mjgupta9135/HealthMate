import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
const AppLayout = () => {
  return (
    <div className="mx-4 sm:mx-[5%]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
