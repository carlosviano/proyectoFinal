import ArrowButton from "../../Buttons/ArrowButton/ArrowButton";
import Label from "../../Label/Label";
import "./BannerNoImage.css";

export default function BannerNoImage({
  bannerTitle,
  greenText,
  userName,
  postViews,
  description,
  bannerTitle2,
  bannerTitle3,
}) {
  return (
    <div className="bannerNoImage">
      <div className="bannerNoImageHeader">
        <Label title={"Latest Posts"} className={"labelContainer"} />
        <div className="bannerNoImageCTA">
          <ArrowButton
            className="bigBtnGreen"
            arrowSize={24}
            arrowFill="var(--black)"
          />
        </div>
      </div>
      <div className="bannerNoImageBody">
        <div className="bannerNoImageBodyFirst">
          <h1>{bannerTitle}</h1>
          <h1 className="greenText">{greenText}</h1>
          <h1>{bannerTitle2}</h1>
        </div>
        <div className="bannerNoImageBodySecond">
          <h1 className="blueText">2022</h1>
          <h1>{bannerTitle3}</h1>
        </div>
        <div className="bannerNoImageNameViews">
          <h6>{userName}</h6>
          <h6>{postViews}</h6>
        </div>
        <div className="bannerNoImageDescription">
          <h6>{description}</h6>
        </div>
      </div>
    </div>
  );
}
