"use client";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";
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
                    className="h-full object-cover absolute brightness-50 w-full"
                    src={project.ProjectImg}
                    width={3500}
                    height={3500}
                    alt={project.subtitle}
                  />
                  <div className="container md:w-[85%] relative flex md:flex-row flex-col md:items-center justify-center h-full xl:h-[80%] font-Roboto">
                    <div className="flex flex-col gap-2 md:gap-5 justify-center md:w-1/2 font-Rubik px-5 md:px-0">
                      <h1
                        className="font-bold text-1xl lg:text-3xl text-white relative 2xl:right-10 md:bottom-10 underline underline-offset-4"
                        style={{ textDecorationColor: "#00dac4" }}
                      >
                        {project.subtitle}
                      </h1>
                      <h1 className="text-1xl text-[#e2e2e2] md:block hidden">
                        ABOUT
                      </h1>
                      <h1 className="font-bold text-1xl lg:text-3xl text-white">
                        {(index + 1).toString().padStart(2, "0")}
                      </h1>
                      <h1 className="font-bold text-1xl lg:text-3xl md:w-[90%] text-white">
                        {project.Summary}
                      </h1>
                    </div>
                    <div className="flex flex-col gap-5 w-full md:w-1/2 mt-5 md:mt-0 px-5 md:px-0">
                      <div className="flex gap-5">
                        <p className="relative w-full text-[#e2e2e2] lg:text-[1rem] text-[0.8rem] leading-6 lg:leading-8 font-Roboto">
                          {project.description}
                        </p>
                        <div className="relative flex flex-col items-center gap-5">
                          <div className="md:flex hidden flex-col gap-5 relative">
                            <Link target="_blank" href={project.codeLink}>
                              <FaGithub className="text-3xl text-white hover:text-[#00dac4]" />
                            </Link>
                            <Link target="_blank" href={project.websiteLink}>
                              <GiLifeBuoy className="text-3xl text-white hover:text-[#00dac4]" />
                            </Link>
                            <Link target="_blank" href={project.youtubeLink}>
                              <FaYoutube className="text-3xl text-white hover:text-[#00dac4]" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 lg:gap-3 w-full">
                        {project.skills.map((skill, skillIndex) => (
                          <Badge
                            className="w-max text-[0.7rem] md:text-[0.7rem]"
                            key={skillIndex}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex md:hidden gap-5 relative">
                        <Link target="_blank" href={project.codeLink}>
                          <FaGithub className="text-3xl text-white hover:text-[#00dac4]" />
                        </Link>
                        <Link target="_blank" href={project.websiteLink}>
                          <GiLifeBuoy className="text-3xl text-white hover:text-[#00dac4]" />
                        </Link>
                        <Link target="_blank" href={project.youtubeLink}>
                          <FaYoutube className="text-3xl text-white hover:text-[#00dac4]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-1 lg:left-10 cursor-pointer" />
          <CarouselNext className="absolute right-1 lg:right-10" />
        </Carousel>
        <div className="bg-[#b92d0c] rounded-full w-20 h-20 absolute -right-14 lg:block hidden" />
        <div className="bg-[#b92d0c] rounded-full w-20 h-20 absolute -left-14 lg:block hidden" />
      </div>
      <div className="h-screen" />
    </div>
  );
};

export default Projects;
