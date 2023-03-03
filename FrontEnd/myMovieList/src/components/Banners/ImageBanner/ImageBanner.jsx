import { Link } from "react-router-dom";
import Label from "../../Label/Label";
import "./ImageBanner.css";

export default function ImageBannern({
  title,
  className,
  movieTitle,
  movieDescription,
  to,
}) {
  return (
    <div
      className="imageBannerContainer"
      style={{
        backgroundImage:
          "url(https://hips.hearstapps.com/hmg-prod/images/wednesday-s1-e2-00-42-32-17r-1670014369.jpg)",
      }}
    >
      <Link to={"/series/119051"}>
        <div className="imageBannerHeader">
          <Label title={title} className={className} />
        </div>
        <div className="imageBannerFooter">
          <div className="imageBannerFooterLabel">
            <Label title={"Series of the month"} className={"labelContainer"} />
          </div>
          <div className="imageBannerFooterInformation">
            <div className="imageBannerFooterTitle">
              <h3>{movieTitle}</h3>
            </div>
            <div className="imageBannerFooterDescription">
              <h5>{movieDescription}</h5>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
