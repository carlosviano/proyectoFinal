import "./Label.css";

export default function Label({ title, className, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      <div className="labelTitle">
        <h6>{title}</h6>
      </div>
    </div>
  );
}
