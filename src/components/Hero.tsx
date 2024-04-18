"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import TransitionLink from "./TransitionLink";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container py-10 lg:py-16 flex">
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="dark:text-white font-bold mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal dark:font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-800">
              Hello, I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Islam",
                1000,
                "Full-Stack Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-sm sm:text-lg mb-6 lg:text-xl">
            With a passion for creating seamless user experiences and a
            dedication to modern, clean design, I craft full-stack solutions
            that bring your digital visions to life. Let&apos;s build something great
            together.
          </p>
          <div className="flex items-center justify-center sm:items-start sm:justify-start gap-5">
            <Button>
              <TransitionLink href="/contact">Hire Me</TransitionLink>
            </Button>
            <Button>
              <a href="/assets/cv/Islam_Resume.pdf" download="Islam_CV.pdf">
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>
        <div className="flex items-center justify-center mt-10 sm:w-max">
          <Avatar className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <AvatarImage className="object-cover" src="https://res.cloudinary.com/dnttuevkd/image/upload/v1713451509/profile-pic_16_s4unet.png" />
          </Avatar>
        </div>
      </div>
    </section>
  );
};

export default Hero;