import { StarFillIcon } from "@primer/octicons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Label from "../Label/Label";
import "./Card.css";

export default function Card({
  image,
  cardTitle,
  movieRating,
  to,
  title,
  starFill,
  cardImgClassName,
  onClick,
}) {
  return (
    <div className="cardContainer" onClick={onClick}>
      <div className="cardContent">
        <div className={cardImgClassName}>
          <Link to={to}>
            <img src={image} alt={"image"} />
          </Link>
        </div>
        <div className="cardFooter">
          <div className="cardTitle">
            <h5> {cardTitle}</h5>
          </div>
          <div className="cardDescription">
            <div className="cardRating">
              <h6>{movieRating}</h6>
            </div>
            <div className="cardRatingLogo">
              <StarFillIcon size={16} fill={starFill} />
            </div>
          </div>
        </div>
        <div className="cardCTA">
          <Link to={to}>
            <Label title={title} className="labelContainer" />
          </Link>
        </div>
      </div>
    </div>
  );
}
