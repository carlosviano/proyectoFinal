import ArrowButton from "../../Buttons/ArrowButton/ArrowButton";
import "./SmallBanner.css";

export default function SmallBanner({ img, alt, footerTitle }) {
  return (
    <div className="smallBannerContainer">
      <div className="smallBannerContent">
        <div className="smallBannerImage">
          <img src={img} alt={alt}></img>
        </div>
        <div className="smallBannerFooter">
          <div className="smallBannerFooterTitle">
            <h6>{footerTitle}</h6>
          </div>
          <div className="smallBannerFooterButton">
            <ArrowButton
              className={"mediumBtnGray"}
              arrowSize={16}
              arrowFill={"var(--white)"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
