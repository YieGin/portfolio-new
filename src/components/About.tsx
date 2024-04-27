"use client";
import React from "react";
import LocationCard from "./LocationCard";
import Connect from "./Connect";
import { SiSocialblade } from "react-icons/si";
import Stacks from "./Stacks";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  const itemVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: () => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9 },
    }),
  };
  return (
    <div className="container mt-20 overflow-hidden">
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
        <motion.div
          variants={itemVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.9 }}
          className="flex flex-col gap-6 border-[1px] xl:w-[500px] rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:p-6"
        >
          <div className="flex items-center gap-2">
            <SiSocialblade className="size-[18px]" />
            <h2 className="text-sm font-light">Bio</h2>
          </div>
          <p className="text-[0.8rem] md:text-[1rem] leading-8">
            I started in web development in 2022, learning HTML, CSS,
            JavaScript, and then advancing to React.js and Next.js. I&apos;ve worked
            JavaScript, and then advancing to React.js and Next.js. Ive worked
            at Metridsh using React Native and Next.js, and served as a Project
            Lead at a startup. My successful projects on Upwork
            showcase my full-stack capabilities, and I recently obtained a
            Back-End Development certification. I offer a problem-solving
            approach and a broad skill set, ready to deliver efficient and
            innovative solutions. I&apos;m equipped to build engaging websites and
            strong back-ends, adding value to any team.
          </p>
        </motion.div>
      </div>
      <Link href="/about" className="flex items-center justify-center mt-5">
        <Button className="font-bold">Know more about me</Button>
      </Link>
    </div>
  );
};

export default About;
