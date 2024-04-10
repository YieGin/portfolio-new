import Image from "next/image";
import React from "react";
import { Profile } from "../../public/assets";

const ProfileSection = () => {
  const name = "Islam Belamri";
  const letters = name.split("").map((char, index) => (
    <span key={index} className="inline-block mx-2">
      {char}
    </span>
  ));
  return (
    <div>
      <div className="flex lg:flex-row flex-col container xl:lg:px-48 lg:px-32 gap-10 relative overflow-hidden">
        <div className="lg:w-[40%] md:mr-5">
          <Image
            className="rounded-md h-[500px] object-cover"
            src={Profile}
            alt="Profile"
            width={1000}
            height={1000}
          />
        </div>
        <div className="lg:w-2/3">
          <h1 className="sm:text-3xl font-bold">FullStack Developer</h1>
          <h1 className="sm:text-3xl font-bold md:hidden block">
            Islam Belamri
          </h1>
          <p className="md:text-[0.9rem] text-[0.7rem] text-muted-foreground mt-2 md:mr-5 leading-7">
            Since 2021, I&apos;ve evolved from mastering front-end technologies like
            HTML, CSS, and JavaScript to becoming a proficient full-stack
            developer. My journey included deep dives into React.js, mastering
            advanced features and state management, and expanding into UI/UX
            design principles. Transitioning to full-stack with Next.js, I&apos;ve
            built scalable applications, moving into backend development with
            Python, Flask, Django, and the MERN stack. Highlights of my work
            include a secure book-selling platform and a sophisticated food
            ordering website, showcasing my skills in database management,
            security, and user authentication. Through continuous learning and
            practical application, including three in-depth backend courses, I&apos;m
            committed to growth, eagerly tackling new technologies and complex
            challenges in a collaborative environment.
          </p>
          <h3 className="absolute -right-44 xl:-right-48 top-1/2 rotate-90 tracking-wide text-3xl font-Pacifico md:block hidden">
            {letters}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
