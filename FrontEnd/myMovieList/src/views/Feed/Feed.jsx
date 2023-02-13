import "./Feed.css";
import CardFeed from "../../components/Card/CardFeed";
import image from "./images/onePiece.jpg";
import image2 from "./images/hxhpanel.jpg";
import image3 from "./images/vertical.jpg";
import Label from "../../components/Label/Label";
import { ArrowLeftIcon } from "@primer/octicons-react";

export default function Feed() {
  return (
    <div className="mainFeedContainer">
      <div className="mainFeedHeader">
        <div className="mainFeedHeaderIcon">
          <ArrowLeftIcon size={24} />
        </div>
        <div className="mainFeedHeaderLabel">
          <Label title={"Add new post"} className={"labelContainer"} />
        </div>
      </div>
      <div className="feedContent">
        <div className="feedPosts">
          <div className="feedPost">
            <CardFeed
              title={"A WORK OF ART"}
              image={image}
              text={
                "La verdad es que la pelicula esta muy chula y me encanto os la recomiendo a todos mis seguidores sois los mejores y de todoLa verdad es que la pelicula esta muy chula y me encanto os la recomiendo a todos mis seguidores sois los mejores y de todoLa verdad es que la pelicula esta muy chula y me encanto os la recomiendo a todos mis seguidores sois los mejores y de todo"
              }
              username={"CVIANO"}
              rating={"9"}
              date={"13/02/2023"}
            />
            <CardFeed
              title={"A WORK OF ART"}
              image={image2}
              text={
                "s mejores y de todoLa verdad es que la pelicula esta muy chula y me encanto os la recomiendo a todos mis seguidores sois los mejores y de todoLa verdad es que la pelicula esta muy chula y me encanto os la recomiendo a todos mis seguidores sois los mejores y de todo"
              }
              username={"CVIANO"}
              rating={"9"}
              date={"13/02/2023"}
            />
            <CardFeed
              title={"A WORK OF ART"}
              image={image3}
              text={
                "s mejores y de todoLa verdad es que la pelicula esta muy chula y me encanto os la recomiendo a todos mis seguidores sois los mejores y de todoLa verdad es que la pelicula esta muy chula y me encanto os la recomiendo a todos mis seguidores sois los mejores y de todo"
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
