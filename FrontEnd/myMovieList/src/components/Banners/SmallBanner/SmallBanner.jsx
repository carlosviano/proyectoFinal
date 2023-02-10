import ArrowButton from "../../Buttons/ArrowButton/ArrowButton";
import { Link } from "react-router-dom";
import "./SmallBanner.css";

export default function SmallBanner({ img, alt, footerTitle, to, imgLink }) {
  return (
    <div className="smallBannerContainer">
      <div className="smallBannerContent">
        <div className="smallBannerImage">
          <Link to={imgLink}>
            <img src={img} alt={alt}></img>
          </Link>
        </div>
        <div className="smallBannerFooter">
          <div className="smallBannerFooterTitle">
            <h6>{footerTitle}</h6>
          </div>
          <div className="smallBannerFooterButton">
            <Link to={to}>
              <ArrowButton
                className={"mediumBtnGray"}
                arrowSize={16}
                arrowFill={"var(--white)"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
