import { StarFillIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";
import "./CarouselCard.css";

export default function CarouselCard({
  image,
  cardTitle,
  movieRating,
  to,
  starFill,
  cardImgClassName,
}) {
  return (
    <div className="carouselCardContainer">
      <div className="carouselCardContent">
        <div className={cardImgClassName}>
          <img src={image} alt={"image"}></img>
        </div>
        <div className="carouselCardFooter">
          <div className="carouselCardTitle">
            <Link to={to}>
              <h5> {cardTitle}</h5>
            </Link>
          </div>
          <div className="carouselCardDescription">
            <div className="carouselCardRating">
              <h6>{movieRating}</h6>
            </div>
            <div className="carouselCardRatingLogo">
              <StarFillIcon size={16} fill={starFill} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
