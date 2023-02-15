import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../../components/Card/DetailsCard";

export default function ShowsDetails() {
  const [show, setShow] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getShowById() {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=66674c972aa10f212a4d8ea3c11ec886&language=en-US`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        const serie = await response.json();
        setShow([serie]);
        console.log("Esto es la response json", serie);
      } else {
        alert("There was an error loading the TV show");
      }
    }
    getShowById();
  }, []);
  return (
    <>
      {!show ? (
        <p>There was an error when trying to load the shows</p>
      ) : (
        show.map((showItem, index) => (
          <DetailsCard
            image={
              "https://www.themoviedb.org/t/p/original/" +
              showItem.backdrop_path
            }
            title={showItem.name.toUpperCase()}
            rating={showItem.vote_average}
            description={showItem.overview.substring(0, 300) + "..."}
            key={index}
          />
        ))
      )}
    </>
  );
}
