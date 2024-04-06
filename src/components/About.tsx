"use client";
import React from "react";
import LocationCard from "./Cobe";
import Connect from "./Connect";
import { SiSocialblade } from "react-icons/si";
import Stacks from "./Stacks";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";

const About = () => {
  return (
    <div className="container mt-20">
      <AnimatedCharacters
        className="text-4xl text-center font-bold"
        text="About Me"
        type="heading1"
      />
      <div className="flex flex-col xl:flex-row gap-5 w-full mt-10">
        <div className="xl:w-[60%] gap-y-10">
          <div className="flex flex-col md:flex-row gap-5">
            <LocationCard />
            <Connect />
          </div>
          <Stacks />
        </div>
        <div className="flex flex-col gap-6 border-[1px] xl:w-[500px] rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:p-6">
          <div className="flex items-center gap-2">
            <SiSocialblade className="size-[18px]" />
            <h2 className="text-sm font-light">Bio</h2>
          </div>
          <p className="text-[0.8rem] md:text-[1rem]">
            With over four years of full stack development experience since
            2021, I&apos;ve cultivated a strong foundation in HTML, CSS, and
            JavaScript, progressing to sophisticated front-end development with
            React.js and Next.js. My backend expertise extends to Python
            frameworks like Flask and Django, and Node.js for RESTful API
            integration. My diverse project portfolio includes a Django-based
            book-selling platform and a comprehensive MERN stack food ordering
            service, demonstrating my adaptability and modern authentication
            methods. Committed to lifelong learning and teamwork, I&apos;m poised to
            innovate in the dynamic field of web development. If there&apos;s an
            opportunity that aligns with my expertise, please don&apos;t hesitate to
            reach out for a conversation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
