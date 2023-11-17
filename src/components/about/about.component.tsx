import React from "react";
import { AboutStrings } from "./about.strings";

export const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-10">
        <img
          className="w-56 h-56"
          src="image/img/about-antonio.png"
          alt="Foto no desenvolvedor"
        ></img>
        <div className="mt-4" />

        <h1 className="text-3xl text-center">{AboutStrings.title}</h1>
        <div className="mt-4" />

        <h2 className="md:w-[800px] text-center">{AboutStrings.About}</h2>
      </div>

      <div className="flex flex-col items-center p-10">
        <h1 className="text-3xl text-center">{AboutStrings.subTitle}</h1>

        <div className="mt-10" />

        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl">{AboutStrings.hardSkills.react}</h3>
            <div className="mt-2" />
            <img src="icon/nivel-4.svg" alt="status do React" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl">{AboutStrings.hardSkills.typescript}</h3>
            <div className="mt-2" />
            <img src="icon/nivel-3.svg" alt="status do React" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl">{AboutStrings.hardSkills.nodeJs}</h3>
            <div className="mt-2" />
            <img src="icon/nivel-3.svg" alt="status do React" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl">
              {AboutStrings.hardSkills.styledCompoonents}
            </h3>
            <div className="mt-2" />
            <img src="icon/nivel-5.svg" alt="status do React" />
          </div>
        </div>

        <div className="mt-10" />

        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl">{AboutStrings.hardSkills.tailWindCSS}</h3>
            <div className="mt-2" />
            <img src="icon/nivel-3.svg" alt="status do React" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl">{AboutStrings.hardSkills.css}</h3>
            <div className="mt-2" />
            <img src="icon/nivel-5.svg" alt="status do React" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl">{AboutStrings.hardSkills.html}</h3>
            <div className="mt-2" />
            <img src="icon/nivel-5.svg" alt="status do React" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl">{AboutStrings.hardSkills.figma}</h3>
            <div className="mt-2" />
            <img src="icon/nivel-4.svg" alt="status do React" />
          </div>
        </div>
      </div>
    </div>
  );
};
