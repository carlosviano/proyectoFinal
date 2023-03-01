import "./Feed.css";
import CardFeed from "../../components/Card/CardFeed/CardFeed";
import { ArrowLeftIcon, ImageIcon, TrashIcon } from "@primer/octicons-react";
import AddPostForm from "../../components/Forms/AddPostForm";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { useLoginContext } from "../../contexts/LoginModeContext";

export default function Feed() {
  const [feed, setFeed] = useState(null);
  const { authorization } = useLoginContext();
  const [user, setUser] = useState([]);
  const [changeFeed, setChangeFeed] = useState(false);

  useEffect(() => {
    async function GetFeed() {
      const response = await fetch(
        `http://localhost:3000/publication/feed/${authorization.iduser}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      if (response.status === 200) {
        const publications = await response.json();
        setFeed(publications);
        console.log("Esto es la response del FEED", publications);
      } else {
        console.log("Error when loading FeedData");
      }
    }
    GetFeed();
  }, [changeFeed]);

  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        `http://localhost:3000/user/get/${authorization?.iduser}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );
      if (response.status === 200) {
        const usuario = await response.json();
        setUser(usuario);
      } else {
        console.log("There was an error loading userData");
      }
    }
    getUser();
  }, []);

  async function RemoveShow(e, id) {
    e.preventDefault();
    const respuesta = await fetch(
      `http://localhost:3000/publication/feed/delete/${id}`,
      {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      }
    );
    if (respuesta.status === 200) {
      setChangeFeed(!changeFeed);
    } else {
      alert("Couldnt delete show");
    }
  }

  return (
    <div className="mainFeedContainer">
      <div className="mainFeedHeader"></div>
      <div className="feedAddPostContainer">
        <div className="feedAddPostContent">
          <div className="feedAddPostHeader">
            <div className="feedAddPostHeaderImg">
              <img
                src={` http://localhost:3000/${user?.user?.map(
                  (item) => item.profilePicture
                )}`}
                alt="user-profile-picture"
              />
            </div>
          </div>
          <div className="feedAddPostBody">
            <AddPostForm
              setChangeFeed={setChangeFeed}
              changeFeed={changeFeed}
            />
          </div>
        </div>
      </div>
      <div className="feedContent">
        <div className="feedPosts">
          <div className="feedPost">
            {!feed ? (
              <p>Feed cargando...</p>
            ) : (
              feed.map((item) =>
                authorization.iduser == item.user ? (
                  <CardFeed
                    title={item.title}
                    image={` http://localhost:3000/${item.img}`}
                    text={item.text}
                    username={item.username}
                    date={item.reg_date?.slice(0, -12)}
                    key={item.idpost}
                    removeIcon={<TrashIcon size={16} fill={"red"} />}
                    onClick={(e) => RemoveShow(e, item.idpost)}
                  />
                ) : (
                  <CardFeed
                    title={item.title}
                    image={` http://localhost:3000/${item.img}`}
                    text={item.text}
                    username={item.username}
                    date={item.reg_date?.slice(0, -13)}
                    key={item.idpost}
                  />
                )
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
