import "./Home.css";
import img from "../../components/Banners/SmallBanner/Images/QueensGambitHorizontal.jpg";
import img2 from "../../components/Banners/SmallBanner/Images/pulpFiction.jpg";
import { useEffect,useState } from "react";
import BannerNoImage from "../../components/Banners/BannerNoImage/BannerNoImage";
import ImageBanner from "../../components/Banners/ImageBanner/ImageBanner";
import SmallBanner from "../../components/Banners/SmallBanner/SmallBanner";

export default function Home() {
  return (
    <>
      <div
        className="bannerContainerMain"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 40px",
        }}
      >
        <BannerNoImage
          bannerLabel="Latest Posts"
          bannerTitle={"ONE"}
          greenText={"PIECE"}
          userName={"WildRisk"}
          description={
            "This is an unique story, incredibly original and with a plot that can be understood by everyone. "
          }
          bannerTitle2={"A"}
          blueText={"WORK"}
          bannerTitle3={"OF ART"}
        />
        <ImageBanner
          to={"/moviedetails"}
          title={"Science-fiction"}
          className={"labelContainerColoured"}
          movieTitle={"Wednesday"}
          movieDescription={"1 Season"}
        />
      </div>
      <div className="bannerContainerSecondary">
        <div className="bannerContainerSecondaryLeft">
        </div>
        <div className="bannerContainerSecondaryRight">
          <SmallBanner
            imgLink={"/shows"}
            img={img}
            footerTitle={"Go to all shows"}
            to={"/shows"}
          />
          <SmallBanner
            imgLink={"/movies"}
            img={img2}
            footerTitle={"Go to all movies"}
            to={"/movies"}
          />
        </div>
      </div>
    </>
  );
}
