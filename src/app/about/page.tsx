"use client"
import { Separator } from "@/components/ui/separator";
import React from "react";
import { GiHand } from "react-icons/gi";
import { products } from "@/lib/constant";
import ProfileSection from "@/components/Profile";
import SkillsSection from "@/components/Skills";
import CertificationSection from "@/components/Certifications";
import ExperienceSection from "@/components/Experience";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";
import { HeroParallax } from "@/components/Parallax";

const About = () => {
  
  return (
    <div className="mt-28 pb-20">
      <div className="space-y-2 container lg:px-48">
        <AnimatedCharacters
          className="lg:text-5xl text-3xl font-bold"
          type="heading1"
          text="About"
        />
        <div className="flex gap-1 items-center">
          <GiHand />
          <p className="text-[1rem] text-muted-foreground">
            Hi there! I am Islam.
          </p>
        </div>
      </div>
      <Separator className="my-20" />
      <ProfileSection />
      <Separator className="my-20" />
      <SkillsSection />
      <Separator className="my-20" />
      <HeroParallax products={products} />
      <Separator className="my-20" />
      <ExperienceSection />
      <Separator className="my-20" />
      <CertificationSection />
    </div>
  );
};

export default About;
