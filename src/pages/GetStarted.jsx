import React from "react";
import { btnGrp } from "../assets";

function GetStarted() {
  return (
    <div className="get-started">
      <div className="hero flex justify-between">
        <div className=" sm:mt-28">
          <h1 className="flex flex-col text-2xl sm:text-4xl xl:text-5xl font-bold gap-4">
            <span>Hey there,</span>
            <span>
              This is <span className="text-primary">Kiton's</span> Workspace!
            </span>
          </h1>
          <p className="p-6 text-md sm:text-xl xl:text-2xl max-w-md xl:max-w-lg leading-7 sm:leading-9 xl:leading-10">
            Where you can find essential, React components designed to help you
            build modern web interfaces quickly and effectively.
          </p>
        </div>
        <img src={btnGrp} alt="Group of Buttons" className="hidden lg:flex max-w-80 xl:max-w-sm"/>
      </div>
    </div>
  );
}

export default GetStarted;
