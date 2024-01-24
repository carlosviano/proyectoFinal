import { ArrowRightIcon } from "@primer/octicons-react";
import "./ArrowButton.css";

export default function ArrowButton({
  disabled,
  className,
  arrowSize,
  arrowFill,
  onClick,
}) {
  return (
    <>
      <button
        type="submit"
        disabled={disabled}
        className={className}
        onClick={onClick}
      >
        {" "}
        <ArrowRightIcon size={arrowSize} fill={arrowFill} />
      </button>
    </>
  );
}
