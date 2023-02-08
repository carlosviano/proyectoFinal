import { Outlet } from "react-router-dom";
import ImageBanner from "../Banners/ImageBanner/ImageBanner";
import BannerNoImage from "../Banners/BannerNoImage/BannerNoImage";
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
        <BannerNoImage
          bannerLabel="Latest Posts"
          bannerTitle={"TOP"}
          greenText={"100"}
          userName={"Michael Geroge"}
          postViews={"45k Views"}
        />
        <ImageBanner />
      </div>

      <Footer />
    </>
  );
}
