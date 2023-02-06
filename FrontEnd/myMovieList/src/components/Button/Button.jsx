import "./button.css";

export default function Button({ value, disabled }) {
  return (
    <>
      <input type="submit" disabled={disabled} className="btn" value={value} />
    </>
  );
}
