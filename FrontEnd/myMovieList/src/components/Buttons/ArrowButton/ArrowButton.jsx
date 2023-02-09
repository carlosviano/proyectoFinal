import { ArrowRightIcon } from "@primer/octicons-react";
import "./ArrowButton.css";

export default function ArrowButton({
  disabled,
  className,
  arrowSize,
  arrowFill,
}) {
  return (
    <>
      <button type="submit" disabled={disabled} className={className}>
        {" "}
        <ArrowRightIcon size={arrowSize} fill={arrowFill} />
      </button>
    </>
  );
}
