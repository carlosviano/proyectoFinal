import Card from "../../components/Card/Card";
import "./TopRatedMovies.css";
import image from "../../components/Card/images/babylon.jpg";

export default function TopRatedMovies() {
  return (
    <>
      <div className="moviesMainContainer">
        <Card
          image={image}
          movieTitle={"Babylon"}
          movieRating={"9,8"}
          to={"/moviedetails"}
        />
        <Card
          image={image}
          movieTitle={"Babylon"}
          movieRating={"9,8"}
          to={"/moviedetails"}
        />
        <Card
          image={image}
          movieTitle={"Babylon"}
          movieRating={"9,8"}
          to={"/moviedetails"}
        />
        <Card
          image={image}
          movieTitle={"Babylon"}
          movieRating={"9,8"}
          to={"/moviedetails"}
        />
      </div>
    </>
  );
}
