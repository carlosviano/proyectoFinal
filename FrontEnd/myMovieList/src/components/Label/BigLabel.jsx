import "./Label.css";

export default function BigLabel({ title, className }) {
  return (
    <div className={className}>
      <div className="labelTitle">
        <h4>{title}</h4>
      </div>
    </div>
  );
}
