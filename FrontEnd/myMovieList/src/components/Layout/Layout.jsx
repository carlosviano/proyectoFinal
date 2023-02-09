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
    </>
  );
}
