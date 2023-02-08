import Label from "../../Label/Label";
import "./ImageBanner.css";

export default function ImageBanner() {
  return (
    <div className="imageBannerContainer">
      <div className="imageBannerHeader">
        <Label title={"Science-Fiction"} className={"labelContainer"} />
      </div>
    </div>
  );
}
