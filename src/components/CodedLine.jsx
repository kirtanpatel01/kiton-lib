import React from "react";

function CodedLine({ text }) {
  return (
    <span
      className='rounded-lg p-1 font-courier text-lg font-medium dark:text-black dark:bg-[#CBCDCF] bg-[#A5C0EE]'
    >
      {text}
    </span>
  );
}

export default CodedLine;
