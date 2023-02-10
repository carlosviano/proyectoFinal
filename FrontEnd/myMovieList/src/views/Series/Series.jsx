import Card from "../../components/Card/Card";
import "./Series.css";
import image from "../../components/Card/images/onePiece.jpg";

export default function Series() {
  return (
    <>
      <div className="seriesMainContainer">
        <Card
          image={image}
          movieTitle={"One Piece"}
          movieRating={"9,8"}
          to={"/moviedetails"}
        />
        <Card
          image={image}
          movieTitle={"One Piece"}
          movieRating={"9,8"}
          to={"/moviedetails"}
        />
        <Card
          image={image}
          movieTitle={"One Piece"}
          movieRating={"9,8"}
          to={"/moviedetails"}
        />
        <Card
          image={image}
          movieTitle={"One Piece"}
          movieRating={"9,8"}
          to={"/moviedetails"}
        />
        <Card
          image={image}
          movieTitle={"One Piece"}
          movieRating={"9,8"}
          to={"/moviedetails"}
        />
      </div>
    </>
  );
}
