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
import Link from "next/link";
import { motion } from "framer-motion";

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
  },
  { href: "", icon: <SiPrisma className="text-2xl" />, title: "Prisma" },
  { href: "", icon: <SiMysql className="text-2xl" />, title: "Mysql" },
  { href: "", icon: <SiGit className="text-2xl" />, title: "Git" },
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
  { href: "", icon: <SiJest className="text-2xl" />, title: "Jest" },
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

const Skills = () => {
  const itemVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.1 },
    }),
  };
  const itemVariantsLeft = {
    offscreen: { opacity: 0, x: -50 },
    onscreen: () => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.3, duration: 0.3 },
    }),
  };

  return (
    <div className="flex container flex-col lg:flex-row xl:lg:px-48 lg:px-32 gap-10 justify-between">
      <motion.div
        variants={itemVariantsLeft}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        className="lg:w-1/2"
      >
        <h1 className="md:text-6xl text-4xl font-bold font-Rubik">My skills</h1>
        <p className="text-[0.9rem] mt-5 text-muted-foreground leading-7">
          In the rapidly evolving digital landscape, my skillset is a unique
          blend of technical mastery, creative problem-solving, and effective
          communication. Armed with a comprehensive understanding of both
          front-end and back-end technologies, I navigate through the
          complexities of full-stack development with ease. My expertise extends
          beyond code; it&apos;s about building solutions that resonate with
          users and meet the strategic objectives of businesses. Below is a
          showcase of the technologies I excel in and the methodologies that
          guide my approach to successful project completion. Whether it&apos;s
          crafting engaging user experiences or engineering robust server-side
          architectures, I&apos;m committed to pushing the boundaries of
          what&apos;s possible.
        </p>
      </motion.div>
      <div className="grid lg:grid-cols-5 md:grid-cols-6 grid-cols-4 gap-2 md:gap-5">
        {links.map((link, index) => (
          <motion.div
            variants={itemVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            custom={index}
            key={index}
          >
            <Link
              target="_blank"
              href={link.href}
              className="px-5 h-full py-3 flex flex-col items-center justify-center gap-y-2 border-[1px] rounded-md dark:hover:bg-gray-800 hover:bg-gray-100 cursor-pointer"
            >
              {link.icon}
              <p className="sm:text-[0.7rem] text-[0.6rem] text-muted-foreground text-center">
                {link.title}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
