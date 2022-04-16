import * as React from "react";

type textCbFn = (text: string) => void;
export interface InputBoxProps {
  rowCnt: number;
  classes?: string;
  label: string;
  textCb: textCbFn;
}

export function InputBox(props: InputBoxProps) {
  const onChangeCb = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.textCb(event.target.value);
  };

  return (
    <span className={"flex-1" + ` ${props.classes}`}>
      <div className="pb-1 text-sm">{props.label}</div>
      <div className="flex">
        <textarea
          className={
            "border-2 border-gray-300 rounded-md py-1 px-2 resize-none flex-1"
          }
          rows={props.rowCnt}
          onChange={onChangeCb}
        />
      </div>
    </span>
  );
}
