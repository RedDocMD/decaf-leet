import * as React from "react";
import { InputBox } from "./input_box";

export default function TopLevel() {
  const rowCnt = 8;

  const [inputText, setInputText] = React.useState("");
  const [outputText, setOutputText] = React.useState("");
  const [expectedText, setExpectedText] = React.useState("");

  const inputCb = (text: string) => setInputText(text);
  const outputCb = (text: string) => setOutputText(text);
  const expectedCb = (text: string) => setExpectedText(text);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <InputBox
          rowCnt={rowCnt}
          label="Input"
          classes="mr-4"
          textCb={inputCb}
        />
        <InputBox
          rowCnt={rowCnt}
          label="Expected"
          classes="ml-4"
          textCb={expectedCb}
        />
      </div>
      <div className="flex mt-3">
        <InputBox rowCnt={rowCnt} label="Output" textCb={outputCb} />
      </div>
    </div>
  );
}
