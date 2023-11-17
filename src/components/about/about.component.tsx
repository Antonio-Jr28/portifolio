import React from "react";

export const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-10">
        <img
          className="w-32 h-32"
          src="image/img/Antonio_about.svg"
          alt=""
        ></img>
        <div className="mt-4" />

        <h1 className="text-3xl text-center">Antonio Carlos</h1>
        <div className="mt-4" />

        <h2 className="md:w-[800px] text-center">
          My name is Matheus Amauri de Jesus Campos 👋 I'm from Brazil, São José
          dos Campos/SP. Studying, 4th period, Systems Analysis and Development
          at the Fatec - São José dos Campos.
        </h2>
      </div>

      <div className="flex flex-col items-center p-10">
        <h1 className="text-3xl text-center">Hard Skills</h1>

        <div className="mt-10" />

        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl">React</h3>
            <div className="mt-2" />
            <img src="icon/nivel-4.svg" alt="status do React" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl">TypeScript</h3>
            <div className="mt-2" />
            <img src="icon/nivel-3.svg" alt="status do React" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl">Node.js</h3>
            <div className="mt-2" />
            <img src="icon/nivel-3.svg" alt="status do React" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl">Styled-components</h3>
            <div className="mt-2" />
            <img src="icon/nivel-5.svg" alt="status do React" />
          </div>
        </div>

        <div className="mt-10" />

        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl">Tailwind CSS</h3>
            <div className="mt-2" />
            <img src="icon/nivel-3.svg" alt="status do React" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl">CSS</h3>
            <div className="mt-2" />
            <img src="icon/nivel-5.svg" alt="status do React" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl">HTML</h3>
            <div className="mt-2" />
            <img src="icon/nivel-5.svg" alt="status do React" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl">Figma</h3>
            <div className="mt-2" />
            <img src="icon/nivel-4.svg" alt="status do React" />
          </div>
        </div>
      </div>
    </div>
  );
};
