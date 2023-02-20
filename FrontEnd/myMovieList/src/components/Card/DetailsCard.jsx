import { ArrowLeftIcon, PlayIcon, StarFillIcon } from "@primer/octicons-react";
import { Link, useNavigate } from "react-router-dom";
import BigLabel from "../Label/BigLabel";
import "./DetailsCard.css";

export default function DetailsCard({ image, title, rating, description }) {
  const navigate = useNavigate();

  const goBack = () => navigate(0);
  return (
    <div className="mainDetailsCard">
      <img src={image}></img>
      <div className="detailsContainer">
        <div className="headerDetailsContent">
          <Link to={() => goBack()}>
            <ArrowLeftIcon size={24} />
          </Link>
        </div>
        <div className="mainDetailsBody">
          <div className="mainDetailsBodyHeader">
            <div className="mainDetailsBodyTitle">
              <h1>{title}</h1>
            </div>
            <div className="mainDetailsBodyRating">
              <div className="mainDetailsBodyRatingNumber">
                <h4>{rating}</h4>
              </div>
              <div className="mainDetailsBodyRatingIcon">
                <StarFillIcon size={16} fill={"gold"} />
              </div>
            </div>
          </div>
        </div>
        <div className="mainDetailsSecondBody">
          <div className="mainDetailsSecondBodyDescription">
            <h5>{description}</h5>
          </div>
        </div>
        <div className="mainDetailsFooter">
          <div className="mainDetailsFooterVideo">
            <PlayIcon size={64} />
            <h3>Watch Trailer</h3>
          </div>
          <div className="mainDetailsFooterLabel">
            <BigLabel
              className={"labelContainerColoured"}
              title={"Add to list "}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
