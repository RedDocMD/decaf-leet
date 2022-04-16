import * as React from "react";
import { InputBox } from "./input_box";

export default function TopLevel() {
  const rowCnt = 8;

  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <InputBox rowCnt={rowCnt} label="Input" classes="mr-2" />
        <InputBox rowCnt={rowCnt} label="Expected" classes="ml-2" />
      </div>
      <div className="flex mt-4">
        <InputBox rowCnt={rowCnt} label="Output" />
      </div>
    </div>
  );
}
