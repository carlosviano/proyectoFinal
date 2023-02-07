import "./button.css";

export default function Button({ value, disabled,className }) {
  return (
    <>
      <input type="submit" disabled={disabled} className={className} value={value} />
    </>
  );
}
