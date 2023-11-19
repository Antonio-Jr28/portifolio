import React from "react";
import { myTechnologiesStrings } from "./technologies.strings";

export const Technologies = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-extrabold">
          {myTechnologiesStrings.title}
        </h1>

        <div className="mt-6" />

        <h2 className="text-2xl font-bold">{myTechnologiesStrings.subTitle}</h2>
      </div>

      <div className="mt-10" />

      <div className="flex flex-col justify-center items-center gap-6 md:flex-row">
        <img
          className="w-[80px] h-[80px]"
          src="image/img/react.svg"
          alt="simbolo do react"
        />
        <img
          className="w-[80px] h-[80px]"
          src="image/img/js.svg"
          alt="simbolo do js"
        />
        <img
          className="w-[80px] h-[80px]"
          src="image/img/typescript.png"
          alt="simbolo do typescript"
        />
        <img
          className="w-[80px] h-[80px]"
          src="image/img/node-js.png"
          alt="simbolo do node-js"
        />
        <img
          className="w-[150px] h-[80px]"
          src="image/img/tailwind.png"
          alt="simbolo do tailwind"
        />
        <img
          className="w-[150px] h-[100px]"
          src="image/img/styled-components.png"
          alt="simbolo do styled-component"
        />
      </div>
      <div className="mt-10" />
    </div>
  );
};
