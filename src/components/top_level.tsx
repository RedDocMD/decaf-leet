import * as React from "react";
import { Button } from "./button";
import { InputBox } from "./input_box";

export default function TopLevel() {
  const rowCnt = 8;

  const [inputText, setInputText] = React.useState("");
  const [outputText, setOutputText] = React.useState("");
  const [expectedText, setExpectedText] = React.useState("");

  const inputCb = (text: string) => setInputText(text);
  const outputCb = (text: string) => setOutputText(text);
  const expectedCb = (text: string) => setExpectedText(text);

  const inputRef = React.createRef<HTMLTextAreaElement>();
  const outputRef = React.createRef<HTMLTextAreaElement>();
  const expectedRef = React.createRef<HTMLTextAreaElement>();

  const clearInput = () => (inputRef.current.value = "");
  const clearExpected = () => (expectedRef.current.value = "");
  const clearOutput = () => (outputRef.current.value = "");

  return (
    <div className="container mx-auto">
      <div className="flex pt-5 pb-3 items-center">
        <input
          type="text"
          className="flex-1 border-2 border-gray-300 rounded-md px-2 py-1 mr-5"
          placeholder="Path"
        />
        <Button label="Browse" />
      </div>
      <div className="flex justify-between">
        <InputBox
          rowCnt={rowCnt}
          label="Input"
          classes="mr-4"
          textCb={inputCb}
          ref={inputRef}
        />
        <InputBox
          rowCnt={rowCnt}
          label="Expected"
          classes="ml-4"
          textCb={expectedCb}
          ref={expectedRef}
        />
      </div>
      <div className="flex mt-3">
        <InputBox
          rowCnt={rowCnt}
          label="Output"
          textCb={outputCb}
          ref={outputRef}
        />
      </div>
      <div className="flex justify-around mt-4">
        <Button label="Clear Input" onClick={clearInput} />
        <Button label="Clear Expected" onClick={clearExpected} />
        <Button label="Clear Output" onClick={clearOutput} />
      </div>
    </div>
  );
}
