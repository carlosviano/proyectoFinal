import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../../components/Card/DetailsCard";
import "./ShowsDetails.css";
import { useLoginContext } from "../../contexts/LoginModeContext";

export default function ShowsDetails() {
  const [show, setShow] = useState([]);
  const { id } = useParams();
  const { authorization } = useLoginContext();

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

  //function to add item to list

  async function addToList() {
    const response = await fetch(
      `http://localhost:3000/list/add/${authorization.iduser}`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name: show[0].name,
          type: "tv show",
        }),
      }
    );
    if (response.status === 200) {
      alert("show added to list");
    } else {
      alert("Error when adding show to list");
    }
  }

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
            description={showItem.overview.substring(0, 200) + "..."}
            key={index}
            onClick={() => addToList()}
          />
        ))
      )}
    </>
  );
}
