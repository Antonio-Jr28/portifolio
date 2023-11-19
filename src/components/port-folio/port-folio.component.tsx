import React from "react";
import { portFolioStrings } from "./port-folio.string";

export const Portfolio = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10" />

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-extrabold">{portFolioStrings.title}</h1>

        <div className="mt-4" />

        <p className="text-center w-[300px]">{portFolioStrings.description}</p>
      </div>

      <div className="mt-10" />

      <div className="flex flex-col items-start gap-10 md:flex-row">
        <a href="./">
          <img
            className="w-[300px] h-[200px] shadow-2xl rounded-lg"
            src="image/img/senec.png"
            alt=""
          />
        </a>
        <a href="./">
          <img
            className="w-[300px] h-[200px] shadow-2xl rounded-lg"
            src="image/img/delfos.png"
            alt=""
          />
        </a>
        <a href="./">
          <img
            className="w-[300px] h-[200px] shadow-2xl rounded-lg"
            src="image/img/rick-and-morty.png"
            alt=""
          />
        </a>
      </div>

      <div className="mt-10" />
    </div>
  );
};
