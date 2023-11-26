import React, { useLayoutEffect } from "react";

import { homeStrings } from "./home.strings";
import { gsap } from "gsap";

export const Home = () => {
  useLayoutEffect(() => {
    gsap.to(".anime", {
      x: 0,
      opacity: 1,
      rotate: "0deg",
    });

    return () => {
      gsap.killTweensOf(".anime");
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-around mx-16 md:h-[500px] md:flex-row ">
      <div className="flex flex-col items-start pl-10 mt-10 px-5 md:mt-44">
        <p>{homeStrings.intro}</p>

        <div className="mt-4" />

        <h1 className="text-5xl font-extrabold font-roboto">
          {homeStrings.suffix} <br /> {homeStrings.prefix}
        </h1>

        <div className="mt-4" />

        <p className="typewriter font-roboto">{homeStrings.title}</p>

        <div className="mt-16" />

        <button className="bg-black text-white px-4 rounded-md font-bold">
          {homeStrings.aboutButton}
        </button>

        <div className="mt-16" />

        <div className="flex flex-row w-[100px] gap-4">
          <a
            href="https://www.linkedin.com/in/antonio-carlos-1314a11b0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="icon/linkedin.svg"
              alt={homeStrings.mediaSocial.linkedin}
            />
          </a>
          <a
            href="https://www.instagram.com/new__goncalves"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="icon/instagram.svg"
              alt={homeStrings.mediaSocial.instagram}
            />
          </a>
          <a
            href="https://github.com/Antonio-Jr28"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="icon/Git.svg" alt={homeStrings.mediaSocial.github} />
          </a>
        </div>
      </div>

      <div className="md:anime w-96 shadow-xl rounded-lg mt-10 md:mt-44">
        <img src="image/img/home.png" alt={homeStrings.caricature} />
      </div>
    </div>
  );
};
