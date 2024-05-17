import React from "react";

export const experiences = [
    {
      title: "Self-Led Learning",
      subtitle: "Continued Education",
      description: "Embarking on my tech adventure in 2022, I was fueled by a zeal for web development and self-taught through YouTube and FreeCodeCamp. I quickly grasped HTML, CSS, JavaScript, and React, crafting my initial interactive websites.",
      period: "2022 - 2022",
    },
    {
      title: "Freelance Web Developer",
      subtitle: "Fiverr Platform",
      description: "In 2022, I leaped into freelancing on Fiverr, tackling a range of projects that tested my abilities and refined my skills. I navigated the challenges of freelance work with determination, resulting in a portfolio of satisfied clients and a solid reputation for reliability and creativity.",
      period: "2022 - 2022",
    },
    {
      title: "Frontend Developer",
      subtitle: "Metridash Â· Full-time",
      description: "As my first job, I established a strong collaborative foundation creating websites using Next JS and React Native.",
      period: "2023 - 2023",
    },
    {
      title: "Frontend Developer & Project Lead",
      subtitle: "MISS SAVAGE SP. Z O.O.",
      description: "Taking on a role in Poland, I not only created engaging frontends but also led projects, coordinating with backend developers and designers. This role was pivotal, stretching my technical knowledge and enhancing my leadership and project management skills.",
      period: "2023 - 2023",
    },
    {
      title: "FullStack Developer",
      subtitle: "Freelance on Upwork",
      description: "My freelance journey continued on Upwork, where I crafted responsive e-commerce stores and templates, balancing functionality with aesthetic design. These projects honed my expertise in responsive design, frontend, and backend development, showcasing my ability to deliver complete, market-ready digital solutions.",
      period: "2023 - 2023",
    },
    {
      title: "Back-End Development Focus & Certification",
      subtitle: "Continued Education",
      description: "In 2024, I enhanced my back-end skills through extensive Node.js and Python courses, mastering MVC architectures and REST APIs. This training, certified by Udemy, involved over 160 hours of focused study.",
      period: "2023 - 2024",
    },
  ];


  const ExperiencePhone = () => {
    return (
      <div className="flex md:hidden">
        <div className="flex flex-col gap-10">
          {experiences.map((experience, index) => (
            <div key={index} className="shadow-feature-card dark:shadow-feature-card-dark border-2 p-3 w-full h-max rounded-md">
              <h1 className="font-bold">{experience.title}</h1>
              <h2 className="font-bold mb-2 text-[0.9rem]">{experience.subtitle}</h2>
              <p className="text-[0.7rem] md:text-[0.8rem]">{experience.description}</p>
              <p className="mt-5 float-right text-[0.8rem] text-muted-foreground">{experience.period}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ExperiencePhone;