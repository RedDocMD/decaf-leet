import * as React from "react";

export interface InputBoxProps {
  rowCnt: number;
  classes?: string;
  label: string;
}

export function InputBox(props: InputBoxProps) {
  return (
    <span className={"flex-1" + ` ${props.classes}`}>
      <div className="pb-1">{props.label}</div>
      <div className="flex">
        <textarea
          className={
            "border-2 border-gray-300 rounded-md py-1 px-2 resize-none flex-1"
          }
          rows={props.rowCnt}
        />
      </div>
    </span>
  );
}
