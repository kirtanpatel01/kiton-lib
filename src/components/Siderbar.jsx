import React, { useEffect, useState } from "react";
import {
  kiton,
  idea,
  component,
  click,
  left,
  light,
  moon,
  hamburger,
  hamburgerDark,
  cross,
} from "../assets";
import { Link } from "react-router-dom";

function Siderbar() {
  const [side, setSide] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const buttons = [
    {
      icon: idea,
      txt: "Get Started",
      clr: "[#FFED64]",
      to: "/",
    },

    {
      icon: component,
      txt: "Components",
      clr: "primary",
      to: "components",
    },
  ];

  const compo = [
    {
      icon: click,
      txt: "Buttons",
      to: "/components/buttons",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row duration-00 ">
      <button className="hamurger">
        <img
          onClick={() => setVisible((pre) => !pre)}
          src={visible ? cross : hamburger}
          alt="hamburger"
          className="sm:hidden h-11 p-2 my-2 ml-2 rounded-lg bg-secondary dark:bg-darkSecondary"
        />
      </button>

        <button
          onClick={toggleDarkMode}
          className="absolute top-2.5 right-2 flex sm:hidden items-center gap-3"
        >
          <img
            className="h-10 p-1 rounded bg-darkBase dark:bg-base"
            src={isDarkMode ? moon : light}
            alt={isDarkMode ? "moon" : light}
          />
          <span className="hidden sm:block">
            {isDarkMode ? "Dark" : "Light"} Theme
          </span>
        </button>

      {visible && (
        <div className="flex flex-col sm:flex-row sm:gap-2">
          <div
            className={`sidebar h-fit sm:h-screen bg-secondary dark:bg-darkSecondary p-2 flex-col items-center`}
          >
            <div className="logo w-full flex items-center">
              <img src={kiton} alt="kiton-logo" className="h-16" />
              <span className="text-primary font-bold text-3xl">KITON</span>
            </div>

            <div className="sideNav w-full h-0.5 bg-white rounded-md my-2"></div>

            <ul>
              {buttons.map((btn, index) => (
                <Link to={btn.to}>
                  <li
                    key={index}
                    onClick={() =>
                      btn.to === "components" ? setSide(true) : setSide(false)
                    }
                    className={`flex items-center gap-2 cursor-pointer rounded-full p-2 hover:bg-primary hover:bg-opacity-25`}
                  >
                    <img
                      src={btn.icon}
                      alt="component"
                      className={`h-12 p-2 ${
                        btn.clr === "primary" ? "bg-primary" : "bg-[#FFED64]"
                      } rounded-full`}
                    />
                    <span className="text-white font-medium text-lg">
                      {btn.txt}
                    </span>
                  </li>
                </Link>
              ))}
            </ul>

            <button
              onClick={toggleDarkMode}
              className="absolute bottom-4 left-4 hidden sm:flex items-center gap-3"
            >
              <img
                className="h-10 p-1 rounded bg-primary dark:bg-secondary"
                src={isDarkMode ? moon : light}
                alt={isDarkMode ? "moon" : light}
              />
              <span className="hidden sm:block">
                {isDarkMode ? "Dark" : "Light"} Theme
              </span>
            </button>

            {/* <h1 className="m-4 text-lg">
          To do so what you need ? <CodedLine text="Copy Button" />
        </h1>
        <CodeBlock
          language="javascript"
          code="npm import kiton"
          single={true}
          className="mb-8"
        />
        <CodeBox codeData={codeData} /> */}
          </div>
          {side && (
            <div className="relative w-[calc(100vw - .75rem)] sm:w-fit sm:h-[calc(100vh - .75rem)] bg-secondary dark:bg-darkSecondary p-2 mt-1 mx-3 sm:mx-0 sm:my-3 rounded-md shadow-md">
              <ul>
                {compo.map((comp) => (
                  <Link to={comp.to}>
                    <li
                      key={comp.txt}
                      className="flex items-center gap-1 p-2 mr-2 rounded-full hover:bg-primary hover:bg-opacity-30 cursor-pointer"
                    >
                      <img
                        src={comp.icon}
                        alt={comp.txt}
                        className="h-10 bg-primary p-1 rounded-full"
                      />
                      <span className="text-white">{comp.txt}</span>
                    </li>
                  </Link>
                ))}
              </ul>

              <img
                src={left}
                onClick={() => setSide(false)}
                className="absolute h-8 right-4 rotate-90 sm:rotate-0 sm:top-4 sm:-right-4 p-2 rounded-full bg-primary text-white cursor-pointer"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Siderbar;
