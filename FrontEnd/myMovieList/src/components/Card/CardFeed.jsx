import "./CardFeed.css";

export default function CardFeed({
  title,
  image,
  text,
  username,
  rating,
  date,
}) {
  return (
    <div className="mainFeedCardContainer">
      <div className="mainFeedCardHeader">
        <div className="mainFeedCardTitle">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="mainFeedCardBody">
        <div className="mainFeedCardLeftContent">
          <div className="mainFeedCardImage">
            <img src={image} />
          </div>
        </div>
        <div className="mainFeedCardRightContent">
          <div className="mainFeedCardText">
            <h6>{text}</h6>
          </div>
          <div className="mainFeedCardUserInfo">
            <div className="mainFeedCardUsername">
              <h5>{username}</h5>
            </div>
            <div className="mainFeedCardRating">
              <h5>User rating : {rating}</h5>
            </div>
            <div className="mainFeedCardDate">
              <h5>{date}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
