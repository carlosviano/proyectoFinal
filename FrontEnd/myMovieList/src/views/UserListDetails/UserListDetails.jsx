import ListCard from "../../components/Card/ListCard";
import "./UserListDetails.css";
import image from "./images/luffyPP.jpg";
import image2 from "./images/spiderman.jpg";

export default function UserListDetails() {
  return (
    <div className="userListDetailsMainContainer">
      <div className="userListDetailsTitles">
        <div className="userListDetailsTitle">
          <h2>USERNAME ALL SHOWS LIST</h2>
        </div>
        <div className="userListDetailsEmptyTitle">
          <h5>You dont have items in this list yet</h5>
        </div>
      </div>
      <ListCard
        id={"1"}
        altText={"hola"}
        i={image}
        name={"One Piece"}
        rating={"9,2"}
        type={"TV Series"}
        progress={"Currently Watching"}
      />
      <ListCard
        id={"1"}
        altText={"hola"}
        i={image}
        name={"One Piece"}
        rating={"9,2"}
        type={"TV Series"}
        progress={"Currently Watching"}
      />
      <ListCard
        id={"1"}
        altText={"hola"}
        i={image}
        name={"One Piece"}
        rating={"9,2"}
        type={"TV Series"}
        progress={"Currently Watching"}
      />
      <ListCard
        id={"1"}
        altText={"hola"}
        i={image}
        name={"One Piece"}
        rating={"9,2"}
        type={"TV Series"}
        progress={"Currently Watching"}
      />
      <ListCard
        id={"1"}
        altText={"hola"}
        i={image}
        name={"One Piece"}
        rating={"9,2"}
        type={"TV Series"}
        progress={"Currently Watching"}
      />
      <ListCard
        id={"1"}
        altText={"hola"}
        i={image}
        name={"One Piece"}
        rating={"9,2"}
        type={"TV Series"}
        progress={"Currently Watching"}
      />
      <ListCard
        id={"1"}
        altText={"hola"}
        i={image}
        name={"One Piece"}
        rating={"9,2"}
        type={"TV Series"}
        progress={"Currently Watching"}
      />
      <ListCard
        id={"1"}
        altText={"hola"}
        i={image}
        name={"One Piece"}
        rating={"9,2"}
        type={"TV Series"}
        progress={"Currently Watching"}
      />
      <ListCard
        id={"1"}
        altText={"hola"}
        i={image}
        name={"One Piece"}
        rating={"9,2"}
        type={"TV Series"}
        progress={"Currently Watching"}
      />
    </div>
  );
}
