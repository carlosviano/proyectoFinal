import ArrowButton from "../../Buttons/ArrowButton/ArrowButton";
import Label from "../../Label/Label";
import "./CardNoImage.css";

export default function NoImageCard({
  cardLabel,
  cardTitle,
  greenText,
  userName,
  postViews,
}) {
  return (
    <div className="cardNoImage">
      <div className="cardNoImageHeader">
        <Label title={"Latest Posts"} />
        <div className="cardNoImageCTA">
          <ArrowButton className="bigBtn" size={24} arrowFill="black" />
        </div>
      </div>
      <div className="cardNoImageBody">
        <div className="cardNoImageBodyFirst">
          <h1>{cardTitle}</h1>
          <h1 className="greenText">{greenText}</h1>
          <h1>FILMS IN</h1>
        </div>
        <div className="cardNoImageBodySecond">
          <h1 className="blueText">2022</h1>
          <h1>. THE BEST.</h1>
        </div>
        <div className="CardNoImageNameViews">
          <h6>{userName}</h6>
          <h6>{postViews}</h6>
        </div>
        <div className="cardNoImageDescription">
          <h6>
            Here we are: somehow its December already, 2022 has flow by at Mach
            10 speed, and its already time to tot up the very best movies of the
            year
          </h6>
        </div>
      </div>
    </div>
  );
}
