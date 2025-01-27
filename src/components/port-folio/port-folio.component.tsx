import React from "react";
import { portFolioStrings } from "./port-folio.string";

export const Portfolio = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10 md:mt-44" />

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-extrabold">{portFolioStrings.title}</h1>

        <div className="mt-4" />

        <p className="text-center w-[300px]">{portFolioStrings.description}</p>
      </div>

      <div className="mt-10" />

      <div className="flex flex-col items-start gap-10 md:flex-row">
        <a target="_blank" href="https://senec.com.br/" rel="noreferrer">
          <img
            className="w-[300px] h-[200px] shadow-2xl rounded-lg"
            src="image/img/senec.png"
            alt="pagina inicial do site criado"
          />
        </a>
        <a target="_blank" href="https://portaldedelfos.com/" rel="noreferrer">
          <img
            className="w-[300px] h-[200px] shadow-2xl rounded-lg"
            src="image/img/delfos.png"
            alt="pagina inicial do site criado"
          />
        </a>
        <a
          target="_Blank"
          href="https://rickandmortyag.netlify.app/"
          rel="noreferrer"
        >
          <img
            className="w-[300px] h-[200px] shadow-2xl rounded-lg"
            src="image/img/rick-and-morty.png"
            alt="pagina inicial do site criado"
          />
        </a>
      </div>

      <div className="mt-10" />
    </div>
  );
};
