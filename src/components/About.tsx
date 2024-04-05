import React from "react";
import LocationCard from "./Cobe";
import Connect from "./Connect";
import { SiSocialblade } from "react-icons/si";
import Stacks from "./stacks";

const About = () => {
  return (
    <div className="container flex gap-5 w-full mt-20">
      <div>
        <div className="flex gap-5">
          <div className="h-1/2">
            <LocationCard />
          </div>
          <div>
            <Connect />
          </div>
        </div>
        <div className="w-full">
          <Stacks />
        </div>
      </div>
      <div className="flex flex-col gap-6 border-[1px] w-[500px] rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:p-6">
        <div className="flex items-center gap-2">
          <SiSocialblade className="size-[18px]" />
          <h2 className="text-sm font-light">Bio</h2>
        </div>
        <p>
          With over four years of full stack development experience since 2021,
          I've cultivated a strong foundation in HTML, CSS, and JavaScript,
          progressing to sophisticated front-end development with React.js and
          Next.js. My backend expertise extends to Python frameworks like Flask
          and Django, and Node.js for RESTful API integration. My diverse
          project portfolio includes a Django-based book-selling platform and a
          comprehensive MERN stack food ordering service, demonstrating my
          adaptability and modern authentication methods. Committed to lifelong
          learning and teamwork, I'm poised to innovate in the dynamic field of
          web development. If there's an opportunity that aligns with my
          expertise, please don't hesitate to reach out for a conversation.
        </p>
      </div>
    </div>
  );
};

export default About;
