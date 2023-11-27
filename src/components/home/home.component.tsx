import React, { useLayoutEffect } from "react";

import { homeStrings } from "./home.strings";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

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
    <div className="anime flex flex-col items-center justify-around mx-16 md:h-[500px] md:flex-row ">
      <div className="flex flex-col px-4 items-center md:items-start mt-10 md:mt-44">
        <p>{homeStrings.intro}</p>

        <div className="mt-4" />

        <h1 className="typewriter text-2xl md:text-5xl font-extrabold font-roboto">
          {homeStrings.suffix} {homeStrings.prefix}
        </h1>

        <div className="mt-4" />

        <p className="font-roboto">{homeStrings.title}</p>

        <div className="mt-16" />
        <Link to={"/sobre"}>
          <button className="bg-black text-white rounded-md font-bold p-3">
            {homeStrings.aboutButton}
          </button>
        </Link>
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

      <div className="w-96 shadow-xl rounded-lg mt-10 md:mt-44 anime">
        <img src="image/img/home.png" alt={homeStrings.caricature} />
      </div>
    </div>
  );
};
