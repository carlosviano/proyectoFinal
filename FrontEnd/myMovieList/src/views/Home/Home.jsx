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
          userName={"Michael Geroge"}
          postViews={"45k Views"}
          description={
            "   Here we are: somehow its December already, 2022 has flow by at Mach10 speed, and its already time to tot up the very best movies of theyear"
          }
          bannerTitle2={"FILMS IN"}
          bannerTitle3={". THE BEST."}
        />
        <ImageBanner
          title={"Science-fiction"}
          className={"labelContainerColoured"}
          movieTitle={"Wednesday"}
          movieDescription={"1 Season"}
        />
      </div>
      <div className="bannerContainerSecondary">
        <div className="bannerContainerSecondaryLeft"></div>
        <div className="bannerContainerSecondaryRight">
          <SmallBanner img={img} footerTitle={"Go to all shows"} />
          <SmallBanner img={img2} footerTitle={"Go to all movies"} />
        </div>
      </div>
    </>
  );
}
