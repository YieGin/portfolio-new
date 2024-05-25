"use client";
import { Separator } from "@/components/ui/separator";
import React from "react";
import ProfileSection from "@/components/Profile";
import SkillsSection from "@/components/Skills";
import CertificationSection from "@/components/Certifications";
import ExperienceSection from "@/components/Experience";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";

const About = () => {
  return (
    <div className="mt-28 pb-20">
      <div className="space-y-2 container lg:px-48">
        <AnimatedCharacters
          className="lg:text-5xl text-3xl font-bold"
          type="heading1"
          text="About Me"
        />
        <p className="text-[1rem] text-muted-foreground md:w-2/3">
          Hello! I&lsquo;m Islam you can call me Yie. I&lsquo;m passionate about technology and have a strong
          background in the field. Here, I&lsquo;ll share my experiences, skills, and
          the projects I&lsquo;ve worked on.
        </p>
      </div>
      <Separator className="my-20" />
      <ProfileSection />
      <Separator className="my-20" />
      <SkillsSection />
      <Separator className="my-20" />
      <ExperienceSection />
      <Separator className="my-20" />
      <CertificationSection />
    </div>
  );
};

export default About;
