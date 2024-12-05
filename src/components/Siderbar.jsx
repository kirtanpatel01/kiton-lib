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
  cross,
} from "../assets";
import { Link, NavLink } from "react-router-dom";

function Siderbar() {
  const [selected, setSelected] = useState("Get Started");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [visible, setVisible] = useState(false);

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
      to: "/kiton-lib",
    },

    {
      icon: component,
      txt: "Components",
      clr: "primary",
      to: "/kiton-lib/components",
    },
  ];

  const compo = [
    {
      icon: click,
      txt: "Buttons",
      to: "/kiton-lib/components/buttons",
    },
  ];

  return (
    <div className="z-50 fixed w-full sm:w-fit sm:h-screen flex sm:flex-col items-start sm:items-center justify-between p-2 sm:py-4 bg-secondary dark:bg-darkSecondary dark:text-[#D7E5FF]">
      <button className="hamurger sm:hidden">
        <img
          onClick={() => setVisible((pre) => !pre)}
          src={visible ? cross : hamburger}
          alt="hamburger"
          className="h-8 rounded-lg bg-secondary dark:bg-darkSecondary"
        />
      </button>

      <div className="logo flex items-center sm:hidden">
        <img src={kiton} alt="kiton-logo" className="h-11" />
        <span className="text-primary font-bold text-2xl mt-2">KITON</span>
      </div>

      <div
        className={`absolute sm:relative w-full bg-secondary dark:bg-darkSecondary top-14 sm:top-0 left-0 ${visible ? "block" : "hidden"} sm:block`}
      >
        <div className="logo sm:flex items-center hidden">
          <img src={kiton} alt="kiton-logo" className="h-12" />
          <span className="text-primary font-bold text-3xl mt-2">KITON</span>
        </div>

        <div className="sideNav w-full h-[1px] bg-base rounded-md my-2"></div>

        <ul className="flex flex-col gap-2 px-1 sm:px-0 pb-2">
          {buttons.map((btn, index) => (
            <NavLink
              to={btn.to}
              key={index}
              onClick={() => {
                setSelected(btn.txt);
                setVisible(false);
              }}
              className={`flex items-center gap-2 cursor-pointer rounded-full p-2 hover:bg-primary hover:bg-opacity-45  border border-primary border-opacity-35
                ${selected === btn.txt ? "bg-primary bg-opacity-25" : "border-transparent"}`}
            >
              <img
                src={btn.icon}
                alt="component"
                className={`h-10 p-2 ${
                  btn.clr === "primary" ? "bg-primary" : "bg-[#FFED64]"
                } rounded-full`}
              />
              {btn.txt}
            </NavLink>
          ))}
        </ul>
      </div>

      <button onClick={toggleDarkMode} className="flex items-center">
        <img
          className="h-7 m-1.5 sm:h-8 rounded bg-primary dark:bg-secondary"
          src={isDarkMode ? moon : light}
          alt={isDarkMode ? "moon" : light}
        />
        <span className="hidden sm:block">
          {isDarkMode ? "Dark" : "Light"} Theme
        </span>
      </button>
    </div>
  );
}

export default Siderbar;
