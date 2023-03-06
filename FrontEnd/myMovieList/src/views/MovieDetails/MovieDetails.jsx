import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../../components/Card/DetailsCard";
import { useLoginContext } from "../../contexts/LoginModeContext";
import toast, { Toaster } from "react-hot-toast";

export default function MovieDetails() {
  const [show, setShow] = useState([]);
  const { id } = useParams();
  const { authorization } = useLoginContext();

  const sucessfulAlert = () =>
    toast.success(<p>Show added to list</p>, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  const deniedAlert = () =>
    toast.error(<p>Show already on your list</p>, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

  useEffect(() => {
    async function getShowById() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=66674c972aa10f212a4d8ea3c11ec886&language=en-US`,
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

  async function addToList() {
    console.log(show[0], "esto es show");
    const response = await fetch(
      `http://localhost:3000/list/add/${authorization.iduser}`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name: show[0].title,
          type: "movie",
        }),
      }
    );
    if (response.status === 200) {
      sucessfulAlert();
    } else {
      deniedAlert();
    }
  }
  return (
    <>
      <Toaster />
      {!show ? (
        <p>There was an error when trying to load the shows</p>
      ) : (
        show.map((showItem, index) => (
          <DetailsCard
            image={
              "https://www.themoviedb.org/t/p/original/" +
              showItem.backdrop_path
            }
            title={showItem.title.toUpperCase()}
            rating={showItem.vote_average}
            description={showItem.overview.substring(0, 200) + "..."}
            key={index}
            onClick={() => addToList()}
            to={"/movies"}
          />
        ))
      )}
    </>
  );
}
