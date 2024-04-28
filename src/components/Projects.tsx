"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Alert, AlertDescription } from "./ui/alert";
import { RocketIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import projectsList from "@/utlis/projectsList";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";
import { motion } from "framer-motion";

const Projects = () => {
  const itemVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.3 },
    }),
  };
  return (
    <div className="container w-full">
      <AnimatedCharacters
        className="text-4xl text-center font-bold"
        text="Selected Projects"
        type="heading1"
      />
      <div className="flex items-center justify-center w-full">
        <div className="mt-12 grid xl:grid-cols-2 gap-5">
          {projectsList.map((study, index) => (
            <motion.div
              variants={itemVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              key={index}
              className="rounded-xl p-5 shadow-feature-card dark:shadow-feature-card-dark border-2 w-full"
            >
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col md:w-1/2">
                  <div className="flex items-center gap-2 mb-5">
                    <study.icon />
                    <AnimatedCharacters
                      className="text-1xl font-bold"
                      type="heading2"
                      text={study.title}
                    />
                  </div>
                  <Link href={`/project/${study.subtitle}`}>
                    <Image
                      src={study.imgSrc}
                      width={500}
                      height={500}
                      priority
                      alt={study.subtitle}
                      className="rounded-md object-cover h-[300px] w-full"
                    />
                  </Link>
                </div>
                <div className="md:w-1/2 md:mt-10 flex flex-col gap-y-3">
                  <AnimatedCharacters
                    className="text-2xl font-bold"
                    type="heading2"
                    text={study.subtitle}
                  />
                  <p className="text-[0.8rem] line-clamp-5">
                    {study.description}
                  </p>
                  <Link target="_blank" href={study.websiteLink}>
                    <Alert className="p-2 hover:underline">
                      <AlertDescription>{study.websiteLink}</AlertDescription>
                      <RocketIcon className="h-4 w-4" />
                    </Alert>
                  </Link>
                  <div className="flex flex-wrap gap-3">
                    {study.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
