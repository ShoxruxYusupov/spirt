import { Outlet } from "react-router-dom";
import { Header, Footer, Language } from "../components";

export function AppLayout() {
  return (
    <>
      <Language />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
