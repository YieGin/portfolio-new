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
  SiHtml5,
  SiExpress,
  SiDjango,
  SiFlask,
  SiPostman,
  SiInsomnia,
  SiMongoose,
  SiReactquery,
  SiMongodb,
} from "react-icons/si";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog";
import { motion } from "framer-motion";
import AllStacks from "./TechStackList";

const Topicons = [
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiExpress,
  SiPython,
  SiDjango,
  SiFlask,
  SiVite,
];
const Bottomicons = [
  SiFigma,
  SiPrisma,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiJest,
  SiPostman,
  SiInsomnia,
  SiMongoose,
  SiRedux,
  SiReactquery,
];

const Stacks = () => {
  const itemVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: () => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9 },
    }),
  };
  return (
    <motion.div
      variants={itemVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.9 }}
      className="container flex h-max flex-col mt-5 border-[1px] gap-2 overflow-hidden rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:px-6"
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <ZapIcon className="text-lg" />
          <h2 className="text-sm font-light">Stacks</h2>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <h2 className="text-sm font-light underline underline-offset-2 cursor-pointer">
              Check all stacks
            </h2>
          </DialogTrigger>
          <DialogContent className="md:max-w-[550px]">
            <AllStacks />
          </DialogContent>
        </Dialog>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="py-4 animate-marquee whitespace-nowrap flex gap-10">
          {Topicons.map((Icon, index) => (
            <Icon
              key={index}
              className={`text-4xl ${
                index === Topicons.length - 1 ? "mr-10" : ""
              }`}
            />
          ))}
        </div>
        <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex gap-10">
          {Topicons.map((Icon, index) => (
            <Icon
              key={index}
              className={`text-4xl ${
                index === Topicons.length - 1 ? "mr-10" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="py-4 animate-marquee2L2R whitespace-nowrap flex gap-10">
          {Bottomicons.map((Icon, index) => (
            <Icon
              key={index}
              className={`text-4xl ${
                index === Bottomicons.length - 1 ? "mr-10" : ""
              }`}
            />
          ))}
        </div>
        <div className="absolute top-0 py-4 animate-marqueeL2R whitespace-nowrap flex gap-10">
          {Bottomicons.map((Icon, index) => (
            <Icon
              key={index}
              className={`text-4xl ${
                index === Bottomicons.length - 1 ? "mr-10" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Stacks;
