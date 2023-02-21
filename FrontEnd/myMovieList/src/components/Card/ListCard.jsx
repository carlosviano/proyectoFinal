import { PencilIcon } from "@primer/octicons-react";
import "./ListCard.css";

export default function ListCard({
  id,
  altText,
  i,
  name,
  rating,
  type,
  progress,
  onClickRating,
  onClickProgress,
  ratingStyle,
}) {
  return (
    <div className="listCardDetails">
      <div className="listCardImageNameGroup">
        <div className="listCardShowName">
          <h6>{name}</h6>
        </div>
      </div>
      <div className="listCardMiddleGroup">
        <div className="listCardRating">
          <div className="listCardRatingNumber">
            <h6>{rating}</h6>
          </div>
          <div className="listCardRatingIcon" onClick={onClickRating}>
            <PencilIcon size={16} />
          </div>
        </div>
        <div className="listCardType">
          <h6>{type}</h6>
        </div>
      </div>
      <div className="listCardRightGroup">
        <div className="listCardProgressTitle">
          <div className="listCardProgressTitleText">
            <h6>{progress}</h6>
          </div>
          <div className="listCardProgressTitleIcon" onClick={onClickProgress}>
            <PencilIcon size={16} />
          </div>
        </div>
      </div>
      <div className="listCardRemove">
        <h6>X</h6>
      </div>
    </div>
  );
}
