import Card from "../../components/Card/Card";
import "./Movies.css";
import image from "../../components/Card/images/babylon.jpg";

export default function TopRatedMovies() {
  return (
    <>
      <div className="moviesMainContainer">
        <Card
          image={image}
          cardTitle={"Babylon"}
          movieRating={"9,8"}
          to={"/moviedetails"}
          title={"Add To List"}
          starFill={"gold"}
        />
      </div>
    </>
  );
}
