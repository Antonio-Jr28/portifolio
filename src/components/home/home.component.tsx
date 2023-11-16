import React from "react";

export const Home = () => {
  return (
    <div className="flex flex-col justify-evenly items-center m-16 md:flex-row ">
      <div className="flex flex-col items-start">
        <p>Olá pessoas,</p>
        <div className="mt-4" />
        <h1 className="text-5xl font-extrabold">
          EU SOU UM <br /> PROGRAMADOR
        </h1>
        <div className="mt-4" />
        <p>Seja bem-vindo ao meu portfólio website</p>

        <div className="mt-16" />
        <button className="bg-black text-white px-4 rounded-md font-bold">
          Saiba mais sobre mim
        </button>

        <div className="mt-16" />
        <div className="flex flex-row w-[100px] gap-4">
          <a
            href="https://www.linkedin.com/in/antonio-carlos-1314a11b0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="icon/linkedin.svg" alt="Linkedin" />
          </a>
          <a
            href="https://www.instagram.com/new__goncalves"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="icon/instagram.svg" alt="instagram" />
          </a>
          <a
            href="https://github.com/Antonio-Jr28"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="icon/Git.svg" alt="gihub" />
          </a>
        </div>
      </div>

      <div className="w-96">
        <img src="image/img/home.png" alt="teste" />
      </div>
    </div>
  );
};
