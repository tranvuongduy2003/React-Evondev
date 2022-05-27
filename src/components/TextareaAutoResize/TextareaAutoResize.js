import React, { useEffect, useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  // const [parentHeight, setParentHeight] = useState("auto");

  const handleChange = (event) => {
    setTextareaHeight("auto");
    // setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
    setText(event.target.value);
  };

  useEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
    // setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);

  return (
    <div className="p-5">
      <textarea
        className="transition-all w-full max-w-[400px] p-5 overflow-hidden rounded-lg outline-none border border-gray-300 focus:border-blue-400 resize-none leading-normal  "
        placeholder="Please enter your content ... "
        value={text}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
