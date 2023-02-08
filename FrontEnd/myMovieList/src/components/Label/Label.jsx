import "./Label.css";

export default function Label({ title, className }) {
  return (
    <div className={className}>
      <div className="labelTitle">
        <h6>{title}</h6>
      </div>
    </div>
  );
}
