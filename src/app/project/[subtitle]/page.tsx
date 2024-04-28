"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { CaseStudy } from "@/types";
import projectsList from "@/utlis/projectsList";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import { Loader } from "lucide-react";
import Link from "next/link";

const ProjectPage = () => {
  const { subtitle } = useParams();
  const [project, setProject] = useState<CaseStudy | null>(null);

  useEffect(() => {
    if (typeof subtitle === "string") {
      const decodedSubtitle = decodeURIComponent(subtitle);
      const projectDetails = projectsList.find(
        (proj) => proj.subtitle === decodedSubtitle
      );
      setProject(projectDetails ?? null);
    }
  }, [subtitle]);

  if (!project) {
    return (
      <p className="font-bold text-4xl flex items-center justify-center">
        <Loader className="animate-spin" />
      </p>
    );
  }

  return (
    <div className="mt-28 pb-20">
      <div className="space-y-2 container lg:px-48">
        <AnimatedCharacters
          className="lg:text-5xl text-3xl font-bold"
          type="heading1"
          text="Discover My Work"
        />
        <div className="flex gap-1 items-center">
          <p className="text-[1rem] text-muted-foreground">
            Explore This Project Dive into the details and highlights of{" "}
            {project.subtitle}, a key part of my digital portfolio.
          </p>
        </div>
      </div>
      <Separator className="my-20" />
      <div className="container lg:px-48">
        <div className="border-[1px] rounded-lg">
          <Image
            className="object-contain rounded-lg lg:h-[700px]"
            src={project.imgSrc}
            width={2000}
            height={2000}
            alt={project.subtitle}
          />
        </div>
        <p className="w-[90%] text-muted-foreground mt-5">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 md:gap-5 mt-5">
          <Link target="_blank" href={project.websiteLink}>
            <Button className="flex gap-1">
              <p>Visit Website</p> <MdArrowOutward />
            </Button>
          </Link>
          <Link target="_blank" href={project.codeLink}>
            <Button className="flex gap-1">
              <p>Github</p> <MdArrowOutward />
            </Button>
          </Link>
          <Link target="_blank" href={project.youtubeLink}>
            <Button className="flex gap-1">
              <p>Youtube</p> <MdArrowOutward />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
