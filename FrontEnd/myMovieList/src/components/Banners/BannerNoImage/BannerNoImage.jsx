import ArrowButton from "../../Buttons/ArrowButton/ArrowButton";
import Label from "../../Label/Label";
import "./BannerNoImage.css";

export default function BannerNoImage({
  bannerTitle,
  greenText,
  userName,
  postViews,
}) {
  return (
    <div className="bannerNoImage">
      <div className="bannerNoImageHeader">
        <Label title={"Latest Posts"} className={"labelContainer"} />
        <div className="bannerNoImageCTA">
          <ArrowButton className="bigBtn" size={24} arrowFill="black" />
        </div>
      </div>
      <div className="bannerNoImageBody">
        <div className="bannerNoImageBodyFirst">
          <h1>{bannerTitle}</h1>
          <h1 className="greenText">{greenText}</h1>
          <h1>FILMS IN</h1>
        </div>
        <div className="bannerNoImageBodySecond">
          <h1 className="blueText">2022</h1>
          <h1>. THE BEST.</h1>
        </div>
        <div className="bannerNoImageNameViews">
          <h6>{userName}</h6>
          <h6>{postViews}</h6>
        </div>
        <div className="bannerNoImageDescription">
          <h6>
            Here we are: somehow its December already, 2022 has flow by at Mach
            10 speed, and its already time to tot up the very best movies of the
            year
          </h6>
        </div>
      </div>
    </div>
  );
}
