import { Outlet } from "react-router-dom";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Card className={"cardNoImage"} cardTitle="Latest Posts" />
      <Footer />
    </>
  );
}
