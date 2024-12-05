import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { copy, tick } from "../assets";

const CodeBlock = ({ language, code, single=true, className='' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const savedTheme = localStorage.getItem("theme");

  return (
    <div className={`flex ${className}`}>
      <SyntaxHighlighter
        className="w-64 min-[375px]:w-80 md:w-full"
        language={language}
        style={vscDarkPlus}
        customStyle={{
          // width: "100px",
          overflowX: "auto",
          backgroundColor: savedTheme === "dark" ? "#211A1D" : "#100C1D",
          borderBottomLeftRadius: ".6rem",
          borderTopLeftRadius: single ? '.6rem' : '0',
          maxWidth: "fit-content",
          padding: "1rem",
          margin: "0",
        }}
      >
        {code}
      </SyntaxHighlighter>

      <CopyToClipboard text={code} onCopy={handleCopy}>
        <button
          style={{
            backgroundColor: "#4C24DA",
            color: "white",
            border: "none",
            padding: "1rem .75rem",
            borderTopRightRadius: ".6rem",
            borderBottomRightRadius: ".6rem",
            cursor: "pointer",
            display: "flex",
          }}
        >
          {copied ? (
            <img src={tick} alt="tick" className="h-6" />
          ) : (
            <img src={copy} alt="copy" className="h-6" />
          )}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default CodeBlock;
