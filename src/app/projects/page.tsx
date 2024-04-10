"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";
import { BiteZHero } from "../../../public/assets";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { GiLifeBuoy } from "react-icons/gi";
import projectsList from "@/utlis/projectsList";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <div className="w-full h-full flex items-center justify-center border-none absolute top-0 overflow-hidden">
        <Carousel setApi={setApi} className="w-full h-full border-none">
          <CarouselContent>
            {projectsList.map((project, index) => (
              <CarouselItem key={index}>
                <Card className="h-screen border-none">
                  <Image
                    className="h-full object-cover absolute brightness-50"
                    src={project.ProjectImg}
                    width={3500}
                    height={3500}
                    alt={project.subtitle}
                  />
                  <div className="container relative flex items-center h-[80%] font-Roboto">
                    <div className="flex flex-col gap-5 justify-center w-1/2 font-Rubik">
                      <h1 className="font-semibold text-3xl relative right-40 bottom-10">
                        {project.subtitle}
                      </h1>
                      <h1 className="text-1xl text-[#e2e2e2]">ABOUT</h1>
                      <h1 className="font-bold text-3xl">
                        {(index + 1).toString().padStart(2, "0")}
                      </h1>
                      <h1 className="font-bold text-2xl w-[90%]">{project.Summary}</h1>
                    </div>
                    <div className="flex flex-col gap-5 w-1/2">
                      <div className="flex gap-5">
                        <p className="relative w-full text-[#e2e2e2] text-[1rem] leading-8 font-Roboto">
                          {project.description}
                        </p>
                        <div className="h-20 w-1 rounded-full bg-white" />
                      </div>
                      <div className="flex flex-wrap gap-5 w-full">
                        {project.skills.map((skill, skillIndex) => (
                          <Badge className="w-max" key={skillIndex}>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardContent className="flex aspect-square items-center justify-center">
                    <Button className="relative">{index + 1}</Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-10" />
          <CarouselNext className="absolute right-10" />
        </Carousel>
        <div className="bg-[#b92d0c] rounded-full w-20 h-20 absolute -right-14" />
        <div className="bg-[#b92d0c] rounded-full w-20 h-20 absolute -left-14" />
        <div className="w-full absolute bottom-10">
          <svg
            className="w-full relative z-10"
            viewBox="0 0 883 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 39.0002C125.5 -85.5 777 144 882 39.0002"
              stroke="white"
              stroke-width="0.5"
            />
          </svg>
        </div>
        <div className="w-full h-1 absolute bottom-36">
          <div className="float-right flex gap-5 underline underline-offset-2 mr-20">
            <Link href="/">
              <FaGithub className="text-3xl" />
            </Link>
            <Link href="/">
              <GiLifeBuoy className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-screen" />
    </div>
  );
};

export default Projects;
