"use client"
import AnimatedCharacters from "@/utlis/AnimatedCharacters";
import React from "react";
import { experiences } from "./ExperiencePhone";

const ExperienceSection = () => {
  return (
    <div className="container xl:lg:px-48 lg:px-32 gap-10">
      <AnimatedCharacters
        className="text-5xl text-center font-bold mb-10 font-Rubik"
        text="My Experience"
        type="heading1"
      />
      <div className="grid md:grid-cols-2 gap-10">
        {experiences.map((experience, index) => (
          <div key={index} className="rounded-md border-[1px] p-5 flex flex-col gap-y-1">
            <AnimatedCharacters
              className="text-2xl font-bold"
              type="heading1"
              text={experience.title}
            />
            <h2 className="text-1xl font-bold">{experience.subtitle}</h2>
            <p className="text-[0.9rem] text-muted-foreground">
            {experience.description}
            </p>
            <p className="pt-2 float-right text-[0.8rem] text-muted-foreground mt-auto">{experience.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
