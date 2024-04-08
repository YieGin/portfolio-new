import React from "react";
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
  SiReactquery,
  SiMongodb,
} from "react-icons/si";
import { DialogHeader, DialogTitle } from "./ui/dialog";
import Link from "next/link";

const links = [
  {
    href: "https://github.com/YieGin/Gym-Vanguard-Elite",
    icon: <SiHtml5 className="text-2xl" />,
    title: "HTML",
  },
  {
    href: "https://github.com/YieGin/Gym-Vanguard-Elite",
    icon: <SiCss3 className="text-2xl" />,
    title: "CSS",
  },
  {
    href: "https://github.com/YieGin/Gym-Vanguard-Elite",
    icon: <SiJavascript className="text-2xl" />,
    title: "Javascript",
  },
  {
    href: "https://github.com/YieGin/mern-food-ordering-app-frontend",
    icon: <SiTypescript className="text-2xl" />,
    title: "Typescript",
  },
  {
    href: "https://github.com/YieGin/mern-food-ordering-app-frontend",
    icon: <SiTailwindcss className="text-2xl" />,
    title: "Tailwindcss",
  },
  {
    href: "https://github.com/YieGin/Gym-Vanguard-Elite",
    icon: <SiReact className="text-2xl" />,
    title: "React",
  },
  {
    href: "https://github.com/YieGin/mern-food-ordering-app-frontend",
    icon: <SiNextdotjs className="text-2xl" />,
    title: "Next js",
  },
  {
    href: "https://github.com/YieGin/Bookoe/tree/main/client/redux",
    icon: <SiRedux className="text-2xl" />,
    title: "Redux",
  },
  {
    href: "https://github.com/YieGin/Bookoe/tree/main/server",
    icon: <SiPython className="text-2xl" />,
    title: "Python",
  },
  {
    href: "https://github.com/YieGin/Bookoe/tree/main/server",
    icon: <SiDjango className="text-2xl" />,
    title: "Django",
  },
  {
    href: "https://github.com/YieGin/Flask-Hashing-and-Salting-passwords",
    icon: <SiFlask className="text-2xl" />,
    title: "Flask",
  },
  {
    href: "https://github.com/YieGin/mern-food-ordering-app-backend",
    icon: <SiNodedotjs className="text-2xl" />,
    title: "Node js",
  },
  {
    href: "https://github.com/YieGin/mern-food-ordering-app-backend",
    icon: <SiExpress className="text-2xl" />,
    title: "Express",
  },
  {
    href: "https://github.com/YieGin/mern-food-ordering-app-backend",
    icon: <SiMongodb className="text-2xl" />,
    title: "MongoDB",
  },
  {
    href: "https://github.com/YieGin/mern-food-ordering-app-frontend",
    icon: <SiFigma className="text-2xl" />,
    title: "Figma",
  },
  {
    href: "",
    icon: <SiPostgresql className="text-2xl" />,
    title: "Postgresql",
  }, // URL missing
  { href: "", icon: <SiPrisma className="text-2xl" />, title: "Prisma" }, // URL missing
  { href: "", icon: <SiMysql className="text-2xl" />, title: "Mysql" }, // URL missing
  { href: "", icon: <SiGit className="text-2xl" />, title: "Git" }, // URL missing
  {
    href: "https://github.com/YieGin",
    icon: <SiGithub className="text-2xl" />,
    title: "Github",
  },
  {
    href: "https://github.com/YieGin/mern-food-ordering-app-backend",
    icon: <SiMongoose className="text-2xl" />,
    title: "Mongoose",
  },
  { href: "", icon: <SiJest className="text-2xl" />, title: "Jest" }, // URL missing
  {
    href: "https://github.com/YieGin/mern-food-ordering-app-frontend/tree/main/api",
    icon: <SiReactquery className="text-2xl" />,
    title: "React query",
  },
  {
    href: "https://github.com/YieGin/mern-food-ordering-app-backend",
    icon: <SiPostman className="text-2xl" />,
    title: "Postman",
  },
  {
    href: "https://github.com/YieGin/mern-food-ordering-app-backend",
    icon: <SiInsomnia className="text-2xl" />,
    title: "Insomnia",
  },
];

const AllStacks = () => {
  return (
    <div>
      <DialogHeader>
        <DialogTitle className="mb-5">Edit Profile</DialogTitle>
        <div className="grid grid-cols-4 gap-2 md:gap-5">
          {links.map((link, index) => (
            <Link
              key={index}
              target="_blank"
              href={link.href}
              className="px-5 py-3 flex flex-col items-center justify-center gap-y-2 border-[1px] rounded-md hover:bg-gray-800 cursor-pointer"
            >
              {link.icon}
              <p className="text-[0.7rem] text-muted-foreground text-center">
                {link.title}
              </p>
            </Link>
          ))}
        </div>
      </DialogHeader>
    </div>
  );
};

export default AllStacks;
