import React, { useState } from "react";
import { experiencesStrings } from "./experiences.strings";

interface Experience {
  title: string;
  description: string;
}

const ExperienceCard: React.FC<Experience> = ({ title, description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="flex flex-col items-center p-4 border-3 border-white bg-gray-700 text-white shadow-xl rounded-xl">
      <h2 className="font-extrabold text-gray-300 text-center">{title}</h2>

      <div className="mt-4" />

      <p>
        {showFullDescription ? description : description.slice(0, 230)}
        {!showFullDescription && (
          <span
            className="text-blue-300 cursor-pointer"
            onClick={() => setShowFullDescription(true)}
          >
            {experiencesStrings.readMore}
          </span>
        )}
        {showFullDescription && (
          <span
            className="text-blue-300 cursor-pointer"
            onClick={() => setShowFullDescription(false)}
          >
            {experiencesStrings.readLess}
          </span>
        )}
      </p>
    </div>
  );
};

export const Experiences: React.FC = () => {
  return (
    <div className="flex flex-col p-10">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-extrabold">{experiencesStrings.title}</h1>
        <div className="mt-4" />
        <p className="text-center w-[300px]">{experiencesStrings.subTitle}</p>
      </div>

      <div className="mt-8" />

      <div className="flex flex-col gap-6 md:px-48 md:flex-row">
        <ExperienceCard
          title={experiencesStrings.experiences.officeDebetti}
          description={experiencesStrings.experiences.descriptionDebetti}
        />

        <ExperienceCard
          title={experiencesStrings.experiences.officeInstitutoTaqtile}
          description={
            experiencesStrings.experiences.descriptionInstitutoTaqtile
          }
        />

        <ExperienceCard
          title={experiencesStrings.experiences.officeTaqtile}
          description={experiencesStrings.experiences.descriptionTaqtile}
        />
      </div>

      <div className="mt-10" />

      <div className="flex flex-col justify-center items-center">
        <img className="w-26 h-26" src="icon/right-quote.svg" alt="quote" />

        <div className="mt-4" />

        <h3 className="text-center font-extrabold">
          {experiencesStrings.quote}
        </h3>

        <div className="mt-4" />

        <p className="font-bold text-xl">{experiencesStrings.author}</p>
      </div>
    </div>
  );
};
