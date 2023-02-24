import Card from "../../components/Card/Card";
import "./Series.css";
import { useEffect, useState } from "react";

export default function Series() {
  const [showsList, setShowsList] = useState([]);

  useEffect(() => {
    async function getShows() {
      const response = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=66674c972aa10f212a4d8ea3c11ec886&language=en-US&page=1"
      );
      if (response.status === 200) {
        const series = await response.json();
        setShowsList(series.results);
        console.log("esta es la respuesta de json", series.results, showsList);
      } else {
        alert("There was an error when trying to display the shows");
      }
    }
    getShows();
  }, []);

  return (
    <>
      <div className="seriesMainContainer">
        {!showsList ? (
          <p>We couldnt find any shows</p>
        ) : (
          showsList.map((showsListItem) => (
            <Card
              image={
                "https://www.themoviedb.org/t/p/original/" +
                showsListItem.backdrop_path
              }
              cardTitle={showsListItem.name}
              movieRating={showsListItem.vote_average}
              to={`/series/${showsListItem.id}`}
              title={"View details"}
              starFill={"gold"}
              key={showsListItem.id}
              cardImgClassName={"cardImageMovie"}
            />
          ))
        )}
      </div>
    </>
  );
}
