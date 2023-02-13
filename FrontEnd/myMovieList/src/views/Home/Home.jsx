import BannerNoImage from "../../components/Banners/BannerNoImage/BannerNoImage";
import ImageBanner from "../../components/Banners/ImageBanner/ImageBanner";
import SmallBanner from "../../components/Banners/SmallBanner/SmallBanner";
import "./Home.css";
import img from "../../components/Banners/SmallBanner/Images/QueensGambitHorizontal.jpg";
import img2 from "../../components/Banners/SmallBanner/Images/pulpFiction.jpg";

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
          bannerTitle={"TOP"}
          greenText={"100"}
          userName={"Adrian Parrado Parry"}
          postViews={"100k Views"}
          description={
            " Torrente 3 fue toxico robotico asombroso manejo del lexico hoy el rap en espanol no solo se hace en nuevo Mexico"
          }
          bannerTitle2={"FILMS IN"}
          bannerTitle3={". THE BEST."}
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
        <div className="bannerContainerSecondaryLeft"></div>
        <div className="bannerContainerSecondaryRight">
          <SmallBanner
            imgLink={"/shows"}
            img={img}
            footerTitle={"Go to all shows"}
            to={"/shows"}
          />
          <SmallBanner
            imgLink={"/topratedmovies"}
            img={img2}
            footerTitle={"Go to all movies"}
            to={"/movies"}
          />
        </div>
      </div>
    </>
  );
}
