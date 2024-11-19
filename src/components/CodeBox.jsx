import React, { useState } from "react";
import { CodeBlock } from "../components";
import { Button } from "kiton";

function CodeBox({ language = "javascript", codeData = [] }) {
  const [selectedLang, setSelectedLang] = useState(language);

  const langs = [
    { lan: "javascript", val: "Tailwind" },
    { lan: "css", val: "CSS" },
    { lan: "html", val: "Html" },
  ];

  const currentCodeData = codeData.find((data) => data.lan === selectedLang);

  return (
    <div className="w-fit p-10 gap-8 rounded-2xl flex flex-col items-center border border-[#4C24DA]">
      <Button className="h-fit w-fit bg-[#4C24DA] text-white" />
      <div className="bg-[#4C24DA] h-[1px] w-full rounded-full"></div>
      <div>
        <ul className="flex gap-0.5 mb-0.5">
          {langs.map((lang, index) => (
            <li
              onClick={() => setSelectedLang(lang.lan)}
              key={index}
              className={`text-white px-3 py-2 rounded-t-md cursor-pointer
                ${
                  lang.lan === selectedLang
                    ? "bg-[#100C1D] dark:bg-[#211A1D]"
                    : "bg-[#555872] dark:bg-[#0E0D0E]"
                }`}
            >
              {lang.val}
            </li>
          ))}
        </ul>
        <CodeBlock
          language={currentCodeData.lan}
          code={currentCodeData.code}
          single={false}
        />
      </div>
    </div>
  );
}

export default CodeBox;
