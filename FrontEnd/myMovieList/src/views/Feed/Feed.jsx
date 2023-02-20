import "./Feed.css";
import CardFeed from "../../components/Card/CardFeed";
import image from "./images/onePiece.jpg";
import { ArrowLeftIcon, ImageIcon } from "@primer/octicons-react";
import AddPostForm from "../../components/Forms/AddPostForm";
import { useEffect, useState } from "react";
import { useLoginContext } from "../../contexts/LoginModeContext";

export default function Feed() {
  const [feed, setFeed] = useState(null);
  const { authorization } = useLoginContext();
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
  }, []);
  return (
    <div className="mainFeedContainer">
      <div className="mainFeedHeader">
        <div className="mainFeedHeaderIcon">
          <ArrowLeftIcon size={24} />
        </div>
      </div>
      <div className="feedAddPostContainer">
        <div className="feedAddPostContent">
          <div className="feedAddPostHeader">
            <div className="feedAddPostHeaderImg">
              <img src={image} alt="user-profile-picture" />
            </div>
          </div>
          <div className="feedAddPostBody">
            <AddPostForm />
          </div>
        </div>
      </div>
      <div className="feedContent">
        <div className="feedPosts">
          <div className="feedPost">
            {!feed ? (
              <p>Feed cargando...</p>
            ) : (
              feed.map((item, index) => (
                <CardFeed
                  title={item.title}
                  image={` http://localhost:3000/${item.img}`}
                  rating={item.rating}
                  text={item.text}
                  username={item.username}
                  date={"13/02/2023"}
                  key={index}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
