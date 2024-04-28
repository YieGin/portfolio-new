import React, { lazy } from "react";

const HeroSection = lazy(() => import("@/components/Hero"));
const Projects = lazy(() => import("@/components/Projects"));
const About = lazy(() => import("@/components/About"));
const Experience = lazy(() => import("@/components/Experience"));
const ContactSection = lazy(() => import("@/components/Contact"));

const page = () => {
  return (
    <div className="pb-20">
      <HeroSection />
      <Projects />
      <About />
      <Experience />
      <ContactSection />
    </div>
  );
};

export default page;
