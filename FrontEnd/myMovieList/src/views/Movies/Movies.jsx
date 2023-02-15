import Card from "../../components/Card/Card";
import "./Movies.css";
import image from "../../components/Card/images/babylon.jpg";
import { useEffect, useState } from "react";

export default function TopRatedMovies() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=66674c972aa10f212a4d8ea3c11ec886&language=en-US&page=3"
      );
      if (response.status === 200) {
        const movies = await response.json();
        setMoviesList(movies.results);
        console.log("esta es la respuesta de json", movies.results);
      } else {
        alert("There was an error when trying to display the shows");
      }
    }
    getMovies();
  }, []);
  return (
    <>
      <div className="moviesMainContainer">
        {!moviesList ? (
          <p>We couldnt find any movies</p>
        ) : (
          moviesList.map((moviesListItem) => (
            <Card
              image={
                "https://www.themoviedb.org/t/p/original/" +
                moviesListItem.backdrop_path
              }
              cardTitle={moviesListItem.title}
              movieRating={moviesListItem.vote_average}
              to={`/movies/${moviesListItem.id}`}
              title={"Add To List"}
              starFill={"gold"}
              key={moviesListItem.id}
            />
          ))
        )}
      </div>
    </>
  );
}
