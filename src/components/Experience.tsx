"use client";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";
import React from "react";
import { SiIcons8 } from "react-icons/si";
import { IoBag } from "react-icons/io5";
import { TbBrandFiverr } from "react-icons/tb";
import { IoBusiness } from "react-icons/io5";
import { SiUpwork } from "react-icons/si";
import { BiCertification } from "react-icons/bi";
import ExperiencePhone from "./ExperiencePhone";

const Experience = () => {
  return (
    <div className="container mt-20">
      <AnimatedCharacters
        className="text-4xl text-center font-bold mb-10"
        text="My Experience"
        type="heading1"
      />
      <div className="md:flex hidden justify-center items-start gap-10">
        {/* Left side items */}
        <div className="flex flex-col gap-y-28">
          <div className="shadow-feature-card dark:shadow-feature-card-dark border-2 p-3 w-[300px] mt-5 rounded-md">
            <AnimatedCharacters
              className="font-bold"
              type="heading1"
              text="Self-Led Learning"
            />
            <p className="text-[0.8rem]">
              Embarking on my tech adventure in 2021, I was fueled by a zeal for
              web development and self-taught through YouTube and FreeCodeCamp.
              I quickly grasped HTML, CSS, JavaScript, and React, crafting my
              initial interactive websites.
            </p>
          </div>
          <div className="shadow-feature-card dark:shadow-feature-card-dark border-2 p-3 w-[300px] rounded-md mt-40">
            <AnimatedCharacters
              className="font-bold"
              type="heading1"
              text="Frontend Developer"
            />
            <AnimatedCharacters
              className="font-bold mb-2 text-[0.9rem]"
              type="heading1"
              text="Metridash Â· Full-time"
            />
            <p className="text-[0.8rem]">
              As my first job, I established a strong collaborative foundation
              creating websites using Next JS and React Native.
            </p>
          </div>
          <div className="shadow-feature-card dark:shadow-feature-card-dark border-2 p-3 w-[300px] rounded-md mt-48">
            <AnimatedCharacters
              className="font-bold"
              type="heading1"
              text="FullStack Developer"
            />
            <AnimatedCharacters
              className="font-bold mb-2 text-[0.9rem]"
              type="heading1"
              text="Freelance on Upwork"
            />
            <p className="text-[0.8rem]">
              My freelance journey continued on Upwork, where I crafted
              responsive e-commerce stores and templates, balancing
              functionality with aesthetic design. These projects honed my
              expertise in responsive design, frontend, and backend development,
              showcasing my ability to deliver complete, market-ready digital
              solutions.
            </p>
          </div>
        </div>

        {/* Central line and circles */}
        <div className="flex flex-col items-center w-1 dark:bg-white bg-[#555] rounded-full pb-20 py-5 relative">
          <div className="shadow-feature-card bg-[#11161b] rounded-full w-14 h-14 border-white border-4 flex items-center justify-center">
            <IoBag className="text-white text-2xl" />
            <span className="absolute left-10 w-32 text-center text-sm flex">
              2021 - 2022
            </span>
          </div>
          <div className="shadow-feature-card bg-[#11161b] rounded-full w-14 h-14 mt-36 border-white border-4 flex items-center justify-center">
            <TbBrandFiverr className="text-white text-2xl" />
            <span className="absolute right-0 w-32 text-center text-sm flex">
              2022 - 2022
            </span>
          </div>
          <div className="shadow-feature-card bg-[#11161b] rounded-full w-14 h-14 mt-44 border-white border-4 flex items-center justify-center">
            <IoBusiness className="text-white text-2xl" />
            <span className="absolute left-10 w-32 text-center text-sm flex">
              2023 - 2023
            </span>
          </div>
          <div className="shadow-feature-card bg-[#11161b] rounded-full w-14 h-14 mt-28 border-white border-4 flex items-center justify-center">
            <IoBusiness className="text-white text-2xl" />
            <span className="absolute right-0 w-32 text-center text-sm flex">
              2023 - 2023
            </span>
          </div>
          <div className="shadow-feature-card bg-[#11161b] rounded-full w-14 h-14 mt-52 border-white border-4 flex items-center justify-center">
            <SiUpwork className="text-white text-2xl" />
            <span className="absolute left-10 w-32 text-center text-sm flex">
              2023 - 2023
            </span>
          </div>
          <div className="shadow-feature-card bg-[#11161b] rounded-full w-14 h-14 mt-56 border-white border-4 flex items-center justify-center">
            <BiCertification className="text-white text-2xl" />
            <span className="absolute right-0 w-32 text-center text-sm flex">
              2023 - 2024
            </span>
          </div>
        </div>

        {/* Right side items */}
        <div className="flex flex-col gap-y-28">
          <div className="shadow-feature-card dark:shadow-feature-card-dark border-2 p-3 w-[300px] rounded-md mt-56">
            <AnimatedCharacters
              className="font-bold"
              type="heading1"
              text="Freelance Web Developer"
            />
            <AnimatedCharacters
              className="font-bold mb-2 text-[0.9rem]"
              type="heading1"
              text="Fiverr Platform"
            />
            <p className="text-[0.8rem]">
              In 2022, I leaped into freelancing on Fiverr, tackling a range of
              projects that tested my abilities and refined my skills. I
              navigated the challenges of freelance work with determination,
              resulting in a portfolio of satisfied clients and a solid
              reputation for reliability and creativity.
            </p>
          </div>
          <div className="shadow-feature-card dark:shadow-feature-card-dark border-2 p-3 w-[300px] rounded-md mt-20">
            <AnimatedCharacters
              className="font-bold"
              type="heading1"
              text="Project Lead"
            />
            <AnimatedCharacters
              className="font-bold mb-2 text-[0.9rem]"
              type="heading1"
              text="MISS SAVAGE SP. Z O.O."
            />
            <p className="text-[0.8rem]">
              Taking on a role in Poland, I not only created engaging frontends
              but also led projects, coordinating with backend developers and
              designers. This role was pivotal, stretching my technical
              knowledge and enhancing my leadership and project management
              skills.
            </p>
          </div>
          <div className="shadow-feature-card dark:shadow-feature-card-dark border-2 p-3 w-[300px] rounded-md mt-52">
            <AnimatedCharacters
              className="font-bold"
              type="heading1"
              text="Back-End Development Focus & Certification"
            />
            <AnimatedCharacters
              className="font-bold mb-2 text-[0.9rem]"
              type="heading1"
              text="Continued Education"
            />
            <p className="text-[0.8rem]">
              In 2024, I committed to deepening my backend proficiency. Through
              comprehensive courses on Node.js and Python, I expanded my
              technical skill set, which included mastering MVC architectures,
              REST APIs. These achievements were certified by reputable Udemy
              courses, representing over 160 hours of dedicated learning.
            </p>
          </div>
        </div>
      </div>
      <ExperiencePhone />
    </div>
  );
};

export default Experience;
