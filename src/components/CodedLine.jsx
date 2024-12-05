import React from "react";

function CodedLine({ text }) {
  return (
    <span
      className='rounded-lg px-1 py-0.5 font-courier text-lg font-medium dark:text-black dark:bg-[#CBCDCF] bg-[#A5C0EE]'
    >
      {text}
    </span>
  );
}

export default CodedLine;
