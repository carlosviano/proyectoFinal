import { ArrowRightIcon, PlusIcon } from "@primer/octicons-react";
import "./AddButton.css";

export default function AddButton({
  disabled,
  className,
  plusSize,
  plusFill,
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
        <PlusIcon size={plusSize} fill={plusFill} />
      </button>
    </>
  );
}
