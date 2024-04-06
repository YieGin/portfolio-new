import React from "react";
import { ZapIcon } from "lucide-react";
import {
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiFigma,
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiPython,
  SiPostgresql,
  SiPrisma,
  SiMysql,
  SiGit,
  SiGithub,
  SiVite,
  SiVisualstudiocode,
  SiJest,
  SiNodedotjs,
  SiRedux,
  SiJquery,
  SiHtml5,
  SiExpress,
  SiDjango,
  SiFlask,
  SiPostman,
  SiInsomnia,
  SiMongoose,
} from "react-icons/si";

const Stacks = () => {
  return (
    <div className="flex h-max flex-col mt-5 border-[1px] gap-2 overflow-hidden rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:px-6">
      <div className="flex items-center gap-2">
        <ZapIcon className="text-lg" /> {/* Adjusted class name for sizing */}
        <h2 className="text-sm font-light">Stacks</h2>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="py-4 animate-marquee whitespace-nowrap flex gap-10">
          <SiHtml5 className="text-4xl" />
          <SiCss3 className="text-4xl" />
          <SiJavascript className="text-4xl" />
          <SiTypescript className="text-4xl" />
          <SiTailwindcss className="text-4xl" />
          <SiReact className="text-4xl" />
          <SiNextdotjs className="text-4xl" />
          <SiRedux className="text-4xl" />
          <SiPython className="text-4xl" />
          <SiDjango className="text-4xl" />
          <SiFlask className="text-4xl" />
          <SiNodedotjs className="text-4xl" />
          <SiVite className="text-4xl" />
          <SiExpress className="text-4xl mr-10" />
        </div>
        <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex gap-10">
          <SiHtml5 className="text-4xl" />
          <SiCss3 className="text-4xl" />
          <SiJavascript className="text-4xl" />
          <SiTypescript className="text-4xl" />
          <SiTailwindcss className="text-4xl" />
          <SiReact className="text-4xl" />
          <SiNextdotjs className="text-4xl" />
          <SiRedux className="text-4xl" />
          <SiPython className="text-4xl" />
          <SiDjango className="text-4xl" />
          <SiFlask className="text-4xl" />
          <SiNodedotjs className="text-4xl" />
          <SiVite className="text-4xl" />
          <SiExpress className="text-4xl mr-10" />
        </div>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="py-4 animate-marquee2L2R whitespace-nowrap flex gap-10">
          <SiFigma className="text-4xl" />
          <SiPostgresql className="text-4xl" />
          <SiPrisma className="text-4xl" />
          <SiMysql className="text-4xl" />
          <SiGit className="text-4xl" />
          <SiGithub className="text-4xl" />
          <SiVisualstudiocode className="text-4xl" />
          <SiJest className="text-4xl" />
          <SiJquery className="text-4xl" />
          <SiPostman className="text-4xl" />
          <SiInsomnia className="text-4xl" />
          <SiMongoose className="text-4xl mr-10" />
        </div>
        <div className="absolute top-0 py-4 animate-marqueeL2R whitespace-nowrap flex gap-10">
          <SiFigma className="text-4xl" />
          <SiPostgresql className="text-4xl" />
          <SiPrisma className="text-4xl" />
          <SiMysql className="text-4xl" />
          <SiGit className="text-4xl" />
          <SiGithub className="text-4xl" />
          <SiVisualstudiocode className="text-4xl" />
          <SiJest className="text-4xl" />
          <SiJquery className="text-4xl" />
          <SiPostman className="text-4xl" />
          <SiInsomnia className="text-4xl" />
          <SiMongoose className="text-4xl mr-10" />
        </div>
      </div>
    </div>
  );
};

export default Stacks;
