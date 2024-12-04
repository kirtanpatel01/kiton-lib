import React from "react";

function ParagraphBox({ content }) {
  return (
    <p className="flex items-start gap-4">
      <span className="bg-primary mt-2 p-[2.2px]"></span>
      <span>
        {content}
      </span>
    </p>
  );
}

export default ParagraphBox;
