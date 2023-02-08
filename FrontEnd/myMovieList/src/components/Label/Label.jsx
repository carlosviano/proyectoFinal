import "./label.css";

export default function Label({ title }) {
  return (
    <div className="labelContainer">
      <div className="labelTitle">
        <h5>{title}</h5>
      </div>
    </div>
  );
}
