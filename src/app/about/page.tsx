import { Separator } from "@/components/ui/separator";
import React from "react";
import { GiHand } from "react-icons/gi";
import ProfileSection from "@/components/ProfileSection";
import { products } from "@/lib/constant";
import { HeroParallax } from "@/components/connect-parallax";
import Skills from "@/components/Skills";
import Certification from "@/components/Certification";

const About = () => {
  
  return (
    <div className="mt-28 pb-20">
      <div className="space-y-2 container lg:px-44">
        <h1 className="text-5xl font-bold">About</h1>
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
      <HeroParallax products={products} />
      <Separator className="my-20" />
      <Skills />
      <Separator className="my-20" />
      <Certification />
    </div>
  );
};

export default About;
