import { ArrowRightIcon } from "@primer/octicons-react";
import "./ArrowButton.css";

export default function ArrowButton({
  value,
  disabled,
  className,
  size,
  arrowFill,
}) {
  return (
    <>
      <button
        type="submit"
        disabled={disabled}
        className={className}
        value={value}
      >
        {" "}
        <ArrowRightIcon size={size} fill={arrowFill} />
      </button>
    </>
  );
}
