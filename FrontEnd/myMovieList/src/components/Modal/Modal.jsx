import CardFeed from "../Card/CardFeed";
import "./Modal.css";

export default function Modal({ title, image, text, username, date }) {
  return (
    <div className="overlay">
      <div className="modalContainer">
        <div className="modalContainerCard">
          <CardFeed
            title={title}
            image={image}
            text={text}
            username={username}
            date={date}
          />
        </div>
      </div>
    </div>
  );
}
