import React from "react";

function ParagraphBox({ content, clasName="" }) {
  return (
    <p className={`flex items-start gap-1 sm:gap-4 ${clasName}`}>
      <span className="bg-primary mt-2 p-[2.2px]"></span>
      <span className="w-fit">
        {content}
      </span>
    </p>
  );
}

export default ParagraphBox;
