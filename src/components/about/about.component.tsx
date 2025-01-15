import React from "react";
import { AboutStrings } from "./about.strings";

type HardSkillKey = keyof typeof AboutStrings.hardSkills;

const hardSkills: { name: HardSkillKey; level: number }[] = [
  { name: "react", level: 4 },
  { name: "typescript", level: 3 },
  { name: "nodeJs", level: 3 },
  { name: "styledCompoonents", level: 5 },
  { name: "tailWindCSS", level: 3 },
  { name: "css", level: 5 },
  { name: "html", level: 5 },
  { name: "figma", level: 4 },
];

export const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-10">
        <img
          className="w-56 h-56"
          src="image/img/about-antonio.png"
          alt="Foto do desenvolvedor"
        />
        <div className="mt-4" />

        <h1 className="text-3xl text-center">{AboutStrings.title}</h1>
        <div className="mt-4" />

        <h2 className="md:w-[800px] text-center">{AboutStrings.About}</h2>
      </div>

      <div className="flex flex-col items-center p-10">
        <h1 className="text-3xl text-center">{AboutStrings.subTitle}</h1>

        <div className="mt-10" />

        <div className="flex flex-col items-center gap-6 md:flex-row">
          {hardSkills.slice(0, 4).map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-2xl">
                {AboutStrings.hardSkills[skill.name]}
              </h3>
              <div className="mt-2" />
              <img
                src={`icon/nivel-${skill.level}.svg`}
                alt={`status do ${skill.name}`}
              />
            </div>
          ))}
        </div>

        <div className="mt-10" />

        <div className="flex flex-col items-center gap-6 md:flex-row">
          {hardSkills.slice(4).map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-2xl">
                {AboutStrings.hardSkills[skill.name]}
              </h3>
              <div className="mt-2" />
              <img
                src={`icon/nivel-${skill.level}.svg`}
                alt={`status do ${skill.name}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
