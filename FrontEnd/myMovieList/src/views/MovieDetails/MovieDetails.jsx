import { ArrowLeftIcon, PlayIcon, StarFillIcon } from "@primer/octicons-react";
import "./MovieDetails.css";
import image from "./images/onepiecebck.jpg";
import BigLabel from "../../components/Label/BigLabel";
import { Link } from "react-router-dom";

export default function MovieDetails() {
  return (
    <div className="mainDetailsCard">
      <img src={image}></img>
      <div className="detailsContainer">
        <div className="headerDetailsContent">
          <ArrowLeftIcon size={24} />
        </div>
        <div className="mainDetailsBody">
          <div className="mainDetailsBodyHeader">
            <div className="mainDetailsBodyTitle">
              <h1>ONE PIECE</h1>
            </div>
            <div className="mainDetailsBodyRating">
              <div className="mainDetailsBodyRatingNumber">
                <h4>9.2</h4>
              </div>
              <div className="mainDetailsBodyRatingIcon">
                <StarFillIcon size={16} fill={"gold"} />
              </div>
            </div>
          </div>
        </div>
        <div className="mainDetailsSecondBody">
          <div className="mainDetailsSecondBodyDescription">
            <h4>
              Luffy will do anything to get the One Piece and become King of the
              Pirates!
            </h4>
          </div>
        </div>
        <div className="mainDetailsFooter">
          <div className="mainDetailsFooterVideo">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/H4b2YjVWgqo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
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
