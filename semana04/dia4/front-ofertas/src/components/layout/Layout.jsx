import { Outlet } from "react-router-dom";
import { Footer } from "../commons/footer/Footer";
import { Header } from "../commons/header/Header";

export const Layout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};
