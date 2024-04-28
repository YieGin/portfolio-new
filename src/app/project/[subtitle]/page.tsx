"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { CaseStudy } from "@/types";
import projectsList from "@/utlis/projectsList";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Loader } from "lucide-react";
import { CiGlobe } from "react-icons/ci";
import { FaGithub, FaYoutube } from "react-icons/fa";
import ProjectLink from "@/components/ProjectLink";

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
      <div className="container flex gap-5 lg:px-48">
        <Image
          className="object-cover rounded-lg h-[350px]"
          src={project.imgSrc}
          width={2000}
          height={2000}
          alt={project.subtitle}
        />
        <div className="flex flex-col">
          <p className="text-muted-foreground leading-8">
            {project.description}
          </p>
          <div className="flex flex-col gap-5 mt-5">
            <ProjectLink
              url={project.websiteLink}
              label="Website"
              Icon={CiGlobe}
            />
            <ProjectLink
              url={project.codeLink}
              label="Github"
              Icon={FaGithub}
            />
            <ProjectLink
              url={project.youtubeLink}
              label="Youtube"
              Icon={FaYoutube}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
