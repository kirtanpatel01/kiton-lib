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
import { Link, NavLink } from "react-router-dom";

function Siderbar() {
  const [side, setSide] = useState(false);
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
    <div className="sm:h-screen flex sm:flex-col items-start sm:items-center justify-between p-2 sm:py-4 bg-secondary dark:bg-darkSecondary">
      <button className="hamurger sm:hidden">
        <img
          onClick={() => setVisible((pre) => !pre)}
          src={visible ? cross : hamburger}
          alt="hamburger"
          className="h-11 rounded-lg bg-secondary dark:bg-darkSecondary"
        />
      </button>

      <div className="logo flex items-center sm:hidden">
        <img src={kiton} alt="kiton-logo" className="h-11" />
        <span className="text-primary font-bold text-2xl">KITON</span>
      </div>

      <div
        className={`absolute sm:relative w-full bg-secondary dark:bg-darkSecondary top-14 sm:top-0 left-0 ${visible ? "block" : "hidden"} sm:block`}
      >
        <div className="logo sm:flex items-center hidden">
          <img src={kiton} alt="kiton-logo" className="h-16" />
          <span className="text-primary font-bold text-3xl">KITON</span>
        </div>

        <div className="sideNav w-full h-0.5 bg-white rounded-md my-2"></div>

        <ul className="flex flex-col gap-2 px-1 sm:px-0 pb-2">
          {buttons.map((btn, index) => (
            <NavLink
              to={btn.to}
              key={index}
              onClick={() =>
                btn.to === "components" ? setSide(true) : setSide(false)
              }
              className={({ isActive }) =>
                `flex items-center gap-2 cursor-pointer rounded-full p-2 ${isActive ? "bg-primary" : ""} hover:bg-primary hover:bg-opacity-45 bg-opacity-25`
              }
            >
              <img
                src={btn.icon}
                alt="component"
                className={`h-12 p-2 ${
                  btn.clr === "primary" ? "bg-primary" : "bg-[#FFED64]"
                } rounded-full`}
              />
              {btn.txt}
            </NavLink>
          ))}
        </ul>
      </div>

      <button onClick={toggleDarkMode} className="flex items-center gap-3">
        <img
          className="h-10 rounded bg-primary dark:bg-secondary"
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
