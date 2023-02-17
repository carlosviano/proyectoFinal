import "./Feed.css";
import CardFeed from "../../components/Card/CardFeed";
import image from "./images/onePiece.jpg";
import image2 from "./images/hxhpanel.jpg";
import image3 from "./images/vertical.jpg";
import { ArrowLeftIcon, ImageIcon } from "@primer/octicons-react";
import Label from "../../components/Label/Label";
import AddPostForm from "../../components/Forms/AddPostForm";
import ArrowButton from "../../components/Buttons/ArrowButton/ArrowButton";

export default function Feed() {
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
            <CardFeed
              title={"HOLA"}
              image={image}
              text={
                "La verdad es que la pelicula esta muy chula y me encanto os la recomiendo a todos mis seguidores sois los mejores y de todoLa verdad es que la pelicula esta muy chula y me encanto os la recomiendo a todos mis seguidores sois los mejores y de todoLa verdad es que la pelicula esta muy chula y me encanto os la recomiendo a todos mis seguidores sois los mejores y de todo"
              }
              username={"CVIANO"}
              rating={"9"}
              date={"13/02/2023"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
