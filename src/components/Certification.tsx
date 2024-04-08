import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";

const certificationsSkills = [
  {
    id: 1,
    skills: [
      "React.js",
      "JavaScript",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Mongoose Web Server",
      "NoSQL",
      "Node.js",
      "Express.js",
      "Embedded JavaScript (EJS)",
      "TypeScript",
      "GraphQL",
      "REST APIs",
      "CRUD",
    ],
    name: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno) (40 total houres)",
    link: "https://www.udemy.com/certificate/UC-3916e26f-06b0-4cbd-af23-0f36b4196474",
  },
  {
    id: 2,
    skills: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Mongoose Web Server",
      "NoSQL",
      "Node.js",
      "Express.js",
      "Embedded JavaScript (EJS)",
      "REST APIs",
      "CRUD",
      "HTML5",
      "Cascading Style Sheets (CSS)",
    ],
    name: "The Complete 2024 Web Development Bootcamp (62 total houres)",
    link: "https://www.udemy.com/certificate/UC-2000b66b-f341-4d65-8135-5817b048933f",
  },
  {
    id: 3,
    skills: [
      "Python",
      "Django",
      "Flask",
      "MySQL",
      "PostgreSQL",
      "Selenium",
      "tkinter",
      "MySQL",
      "HTML 5",
      "CSS 3",
      "Bootstrap 4",
      "Bash Command Line",
      "Git, GitHub and Version Control",
      "SQLite",
      "Authentication",
      "Web Design",
      "Data Science",
      "Pandas",
      "Deployment with GitHub Pages, Heroku and GUnicorn",
    ],
    name: "100 Days of Code: The Complete Python Pro Bootcamp (58.5 total houres)",
    link: "https://www.udemy.com/certificate/UC-fe072e8b-d5b6-421e-a4cb-4d5286141219",
  },
  {
    id: 4,
    skills: [],
    descripition: "Achieved a C2 certification to demonstrate my high proficiency in English, both in speaking and writing, ensuring effective communication will not be a barrier in any professional setting.",
    name: "EF SET English Certificate 74/100 (C2 Proficient)",
    link: "https://cert.efset.org/vkh5S7",
  },
];

const Certification = () => {
  return (
    <div className="flex container flex-col lg:flex-row xl:px-44 lg:px-32 gap-10 justify-between">
      <div className="lg:w-1/2">
        <h1 className="md:text-6xl text-4xl font-bold font-Rubik">Certifications</h1>
        <p className="text-[0.9rem] mt-5 text-muted-foreground leading-7">
          In 2024, I honed my backend development skills, dedicating over 160
          hours to deep dives into Node.js and Python. This journey encompassed
          mastering MVC architectures, RESTful APIs, and comprehensive database
          management with MongoDB, MySQL, and PostgreSQL. My commitment to
          mastering these technologies was recognized through prestigious Udemy
          certifications, underscoring my adherence to industry best practices
          and my pursuit of efficient, clean coding. Additionally, achieving a
          C2 English proficiency underscored my ability to communicate complex
          technical ideas effectively in any global setting. These milestones
          reflect my ongoing dedication to lifelong learning, preparing me to
          solve complex challenges and drive innovation in web development and
          communication.
        </p>
      </div>
      <div className="lg:w-1/2">
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-10 text-start"
        >
          {certificationsSkills.map((certification) => (
            <AccordionItem
              className="text-start"
              key={certification.id}
              value={certification.id.toString()}
            >
              <AccordionTrigger className="text-start">
                {certification.name}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-3">
                  {certification.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </div>
                <AccordionContent>{certification.descripition}</AccordionContent>
                <Link
                  target="_blank"
                  href={certification.link}
                  className="underline-offset-2 underline float-right mb-5 font-semibold"
                >
                  Check out certification
                </Link>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Certification;
