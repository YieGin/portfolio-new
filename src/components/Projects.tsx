"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { RocketIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import reactProjects from "@/utlis/reactProjects";

const Projects = () => {
  return (
    <div className="container w-full">
      <h1 className="text-4xl font-bold text-center">Selected Projects</h1>
      <div className="flex items-center justify-center w-full">
        <div className="mt-12 grid xl:grid-cols-2 gap-5">
          {reactProjects.map((study, index) => (
            <div key={index} className="rounded-xl p-5 shadow-feature-card dark:shadow-feature-card-dark border-2 w-full">
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col md:w-1/2">
                  <div className="flex items-center gap-2 mb-5">
                    <study.icon />
                    <p>{study.title}</p>
                  </div>
                  <Image
                    src={study.imgSrc}
                    width={5000}
                    height={5000}
                    alt={study.subtitle}
                    className="rounded-md object-cover h-full w-full"
                  />
                </div>
                <div className="md:w-1/2 md:mt-10 flex flex-col gap-y-3">
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-red-200">
                    {study.subtitle}
                  </p>
                  <p className="text-[0.8rem] line-clamp-5">
                    {study.description}
                  </p>
                  <Link target="_blank" href={study.websiteLink}>
                    <Alert className="p-2 hover:underline">
                      <AlertDescription>
                        {study.websiteLink}
                      </AlertDescription>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
