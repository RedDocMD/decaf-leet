import * as React from "react";

export interface ButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button(props: ButtonProps) {
  return (
    <button
      className="bg-blue-300 rounded-sm py-1 px-2 shadow"
      onClick={props.onClick}
      type="button"
    >
      {props.label}
    </button>
  );
}
