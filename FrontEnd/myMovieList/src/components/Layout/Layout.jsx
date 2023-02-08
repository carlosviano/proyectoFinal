import { Outlet } from "react-router-dom";
import ImageCard from "../Cards/ImageCard/ImageCard";
import NoImageCard from "../Cards/CardNoImage/CardNoImage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <div
        className="BannerContainer"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 40px",
        }}
      >
        <NoImageCard
          cardLabel="Latest Posts"
          cardTitle={"TOP"}
          greenText={"100"}
          userName={"Michael Geroge"}
          postViews={"45k Views"}
        />
        <ImageCard />
      </div>

      <Footer />
    </>
  );
}
