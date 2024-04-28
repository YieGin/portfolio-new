"use client";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";
import React from "react";
import { IoBag } from "react-icons/io5";
import { TbBrandFiverr } from "react-icons/tb";
import { IoBusiness } from "react-icons/io5";
import { SiUpwork } from "react-icons/si";
import { BiCertification } from "react-icons/bi";
import ExperiencePhone from "./ExperiencePhone";
import { motion } from "framer-motion";

const Experience = () => {
  const itemVariants = {
    offscreen: { opacity: 0, x: 50 },
    onscreen: () => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.5, duration: 0.5 },
    }),
  };
  const itemVariantsLeft = {
    offscreen: { opacity: 0, x: -50 },
    onscreen: () => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.5, duration: 0.5 },
    }),
  };

  return (
    <div className="container mt-20 overflow-hidden">
      <AnimatedCharacters
        className="text-4xl text-center font-bold mb-10"
        text="My Experience"
        type="heading1"
      />
      <div className="md:flex hidden justify-center items-start gap-10">
        {/* Left side items */}
        <div className="flex flex-col gap-y-28">
          <motion.div
            variants={itemVariantsLeft}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            className="shadow-feature-card dark:shadow-feature-card-dark border-2 p-3 w-[300px] mt-5 rounded-md"
          >
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
          </motion.div>
          <motion.div
            variants={itemVariantsLeft}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            className="shadow-feature-card dark:shadow-feature-card-dark border-2 p-3 w-[300px] rounded-md mt-40"
          >
            <AnimatedCharacters
              className="font-bold"
              type="heading1"
              text="Frontend Developer"
            />
            <h2 className="font-bold mb-2 text-[0.9rem]">
              Metridash Â· Full-time
            </h2>
            <p className="text-[0.8rem]">
              As my first job, I established a strong collaborative foundation
              creating websites using Next JS and React Native.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariantsLeft}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            className="shadow-feature-card dark:shadow-feature-card-dark border-2 p-3 w-[300px] rounded-md mt-48"
          >
            <AnimatedCharacters
              className="font-bold"
              type="heading1"
              text="FullStack Developer"
            />
            <h2 className="font-bold mb-2 text-[0.9rem]">
              Freelance on Upwork
            </h2>
            <p className="text-[0.8rem]">
              My freelance journey continued on Upwork, where I crafted
              responsive e-commerce stores and templates, balancing
              functionality with aesthetic design. These projects honed my
              expertise in responsive design, frontend, and backend development,
              showcasing my ability to deliver complete, market-ready digital
              solutions.
            </p>
          </motion.div>
        </div>

        {/* Central line and circles */}
        <div className="flex flex-col items-center w-1 dark:bg-white bg-[#555] rounded-full pb-20 py-5 relative">
          <div className="shadow-feature-card bg-[#11161b] rounded-full w-14 h-14 border-white border-4 flex items-center justify-center">
            <IoBag className="text-white text-2xl" />
            <AnimatedCharacters
              className="absolute left-10 w-32 text-center text-sm flex"
              type="paragraph"
              text="2022 - 2022"
            />
          </div>
          <div className="shadow-feature-card bg-[#11161b] rounded-full w-14 h-14 mt-36 border-white border-4 flex items-center justify-center">
            <TbBrandFiverr className="text-white text-2xl" />
            <AnimatedCharacters
              className="absolute right-0 w-32 text-center text-sm flex"
              type="paragraph"
              text="2022 - 2022"
            />
          </div>
          <div className="shadow-feature-card bg-[#11161b] rounded-full w-14 h-14 mt-44 border-white border-4 flex items-center justify-center">
            <IoBusiness className="text-white text-2xl" />
            <AnimatedCharacters
              className="absolute left-10 w-32 text-center text-sm flex"
              type="paragraph"
              text="2023 - 2023"
            />
          </div>
          <div className="shadow-feature-card bg-[#11161b] rounded-full w-14 h-14 mt-28 border-white border-4 flex items-center justify-center">
            <IoBusiness className="text-white text-2xl" />
            <AnimatedCharacters
              className="absolute right-0 w-32 text-center text-sm flex"
              type="paragraph"
              text="2023 - 2023"
            />
          </div>
          <div className="shadow-feature-card bg-[#11161b] rounded-full w-14 h-14 mt-52 border-white border-4 flex items-center justify-center">
            <SiUpwork className="text-white text-2xl" />
            <AnimatedCharacters
              className="absolute left-10 w-32 text-center text-sm flex"
              type="paragraph"
              text="2023 - 2023"
            />
          </div>
          <div className="shadow-feature-card bg-[#11161b] rounded-full w-14 h-14 mt-56 border-white border-4 flex items-center justify-center">
            <BiCertification className="text-white text-2xl" />
            <AnimatedCharacters
              className="absolute right-0 w-32 text-center text-sm flex"
              type="paragraph"
              text="2023 - 2024"
            />
          </div>
        </div>

        {/* Right side items */}
        <div className="flex flex-col gap-y-28">
          <motion.div
            variants={itemVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            className="shadow-feature-card dark:shadow-feature-card-dark border-2 p-3 w-[300px] rounded-md mt-56"
          >
            <AnimatedCharacters
              className="font-bold"
              type="heading1"
              text="Freelance Web Developer"
            />
            <h2 className="font-bold mb-2 text-[0.9rem]">Fiverr Platform</h2>
            <p className="text-[0.8rem]">
              In 2022, I leaped into freelancing on Fiverr, tackling a range of
              projects that tested my abilities and refined my skills. I
              navigated the challenges of freelance work with determination,
              resulting in a portfolio of satisfied clients and a solid
              reputation for reliability and creativity.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            className="shadow-feature-card dark:shadow-feature-card-dark border-2 p-3 w-[300px] rounded-md mt-20"
          >
            <AnimatedCharacters
              className="font-bold"
              type="heading1"
              text="Project Lead"
            />
            <h2 className="font-bold mb-2 text-[0.9rem]">
              MISS SAVAGE SP. Z O.O.
            </h2>
            <p className="text-[0.8rem]">
              Taking on a role in Poland, I not only created engaging frontends
              but also led projects, coordinating with backend developers and
              designers. This role was pivotal, stretching my technical
              knowledge and enhancing my leadership and project management
              skills.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            className="shadow-feature-card dark:shadow-feature-card-dark border-2 p-3 w-[300px] rounded-md mt-52"
          >
            <AnimatedCharacters
              className="font-bold"
              type="heading1"
              text="Back-End Development Focus & Certification"
            />
            <h2 className="font-bold mb-2 text-[0.9rem]">
              Continued Education
            </h2>
            <p className="text-[0.8rem]">
              In 2024, I enhanced my back-end skills through extensive Node.js
              and Python courses, mastering MVC architectures and REST APIs.
              This training, certified by Udemy, involved over 160 hours of
              focused study.
            </p>
          </motion.div>
        </div>
      </div>
      <ExperiencePhone />
    </div>
  );
};

export default Experience;
