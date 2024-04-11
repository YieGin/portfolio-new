import { BiteZHero, BiteZImg, BookoeHero, BookoeImg, InpuctHero, InpuctImg, VanguardEliteHero, VanguardEliteImg } from "../../public/assets";
import { SiNextdotjs } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import React from "react";


interface CaseStudy {
  imgSrc: any;
  ProjectImg: any;
  icon: React.ElementType;
  title: string;
  Summary: string;
  subtitle: string;
  description: string;
  websiteLink: string;
  youtubeLink: string;
  codeLink: string;
  skills: string[];
}

const projectsList: CaseStudy[] = [
  {
    imgSrc: BiteZImg,
    ProjectImg: BiteZHero,
    icon: SiNextdotjs,
    title: "Next JS",
    subtitle: "BiteZ",
    Summary: "Food ordering website",
    description:
      "This full-stack food ordering website is built with a modern technology stack that includes Next.js, Tailwind CSS, React Query, MongoDB, Node.js, and Express.js. It features a dual-theme interface, offering users the choice between dark and light modes to suit their preference. Designed to be fully responsive.",
    websiteLink: "https://mern-food-ordering-app-frontend-one.vercel.app",
    youtubeLink: "",
    codeLink: "https://github.com/YieGin/mern-food-ordering-app-frontend",
    skills: ["Next.js", "Tailwind css", "TypeScript", "Stripe", "Node js", "Express js", "ux/ui", "MongoDB", "Responsive Design", "Auth0", "React Query"],
  },
  {
    imgSrc: InpuctImg,
    ProjectImg: InpuctHero,
    icon: SiNextdotjs,
    title: "Next JS",
    subtitle: "Impact Consulting",
    Summary: "Nonprofit organization for kids",
    description:
      "This website, designed for a client dedicated to uplifting African children, harnesses the full potential of Next.js 14 for both the front-end and back-end. It's a platform built with compassion at its core, aiming to connect donors with impactful stories and tangible means to help. With a user-friendly interface and a responsive design, the site ensures that visitors can easily navigate through information, understand the mission, and contribute to the cause. ",
    websiteLink: "https://impact-consulting-xi.vercel.app",
    youtubeLink: "",
    codeLink: "https://github.com/YieGin/Impact-consulting",
    skills: ["Next.js", "Tailwind css", "TypeScript", "Stripe", "Framer Motion", "ux/ui", "Responsive Design"],
  },
  {
    imgSrc: VanguardEliteImg,
    ProjectImg: VanguardEliteHero,
    icon: RiReactjsLine,
    title: "Next JS",
    subtitle: "Gym Vanguard Elite",
    Summary: "E-commerce website for selling gym outfits",
    description:
      "I developed this unique website with a keen focus on detail, combining sophisticated design elements crafted by an experienced designer. The code is meticulously clean and well-organized, ensuring that the site is fully responsive and adapts seamlessly across a wide range of screen resolutions, from 4K to 320px. I invite you to explore the site and would greatly appreciate your feedback on how effectively it integrates professional design with functionality. Thank you!",
    websiteLink: "https://gym-vanguard-elite-eedd.vercel.app",
    youtubeLink: "",
    codeLink: "https://github.com/YieGin/Gym-Vanguard-Elite",
    skills: ["React", "CSS3", "Responsive Design", "Tailwind css", "JavaScript", "ux/ui", "Framer Motion"],
  },
  {
    imgSrc: BookoeImg,
    ProjectImg: BookoeHero,
    icon: SiNextdotjs,
    title: "React JS",
    subtitle: "Bookoe",
    Summary: "E-commerce website for selling books",
    description:
      "I created this book e-commerce website to showcase my skills, utilizing Next.js, Tailwind CSS, and TypeScript for the frontend. For the backend, I employed Python, Django, and SQLite, with JWT tokens and HttpOnly cookies to enhance security. This combination of technologies allowed me to build a secure, efficient, and user-friendly platform for selling books online.",
    websiteLink: "https://bookoe-jade.vercel.app",
    youtubeLink: "",
    codeLink: "https://github.com/YieGin/Bookoe",
    skills: ["Next js", "Tailwind css", "TypeScript", "Responsive Design", "Python", "Django", "SQLite", "JWT tokens", "ui/ux", "JWT"],
  },
];

export default projectsList;