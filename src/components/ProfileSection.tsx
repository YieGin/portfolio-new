import Image from "next/image";
import React from "react";
import { Profile } from "../../public/assets";

const ProfileSection = () => {
  const name = "Islam Belamri";
  const letters = name.split("").map(
    (char, index) => (
      <span key={index} className="inline-block mx-2">
        {char}
      </span>
    )
  );
  return (
    <div>
      <div className="flex container px-44 gap-10 relative">
        <Image
          className="rounded-md h-[500px] object-cover"
          src={Profile}
          alt="Profile"
          width={400}
          height={400}
        />
        <div className="w-2/3">
          <h1 className="text-3xl font-bold">FullStack Developer</h1>
          <p className="text-[0.9rem] text-muted-foreground mt-2">
            Since beginning my coding journey in 2021, I have honed my skills as
            a full stack developer through continuous learning and practical
            application. My foundational expertise started with front-end
            technologies—HTML, CSS, and JavaScript—quickly advancing to
            React.js, where I mastered ES6 features, React Router, Hooks, Redux
            Toolkit, Context API, and React Query. With a solid grasp of
            front-end development, I expanded my proficiency into UI/UX
            principles, adopting best practices that significantly enhanced the
            user interfaces of my projects. My transition to full-stack
            development was marked by embracing Next.js, leveraging its
            capabilities to build scalable and dynamic web applications. As I
            ventured into backend development, I began with Python and explored
            web frameworks like Flask and Django. I gained competency in both
            SQL and NoSQL databases, including MySQL, PostgreSQL, and MongoDB,
            enriching my full-stack development toolkit. My first full-stack
            endeavor—a book-selling platform—showcased my integrated skills,
            employing Next.js 14, Tailwind CSS, Django, JWT authentication, and
            HTTP-only cookies to bolster security. Continuing my growth, I
            explored the MERN stack, delving into Node.js, Express.js, and
            MongoDB. This journey was supplemented by three comprehensive
            courses, each sharpening different facets of backend development. My
            portfolio of full-stack projects includes a sophisticated food
            ordering website, crafted using Next.js, Tailwind CSS, Node.js,
            Express.js, and MongoDB, with Auth0 integration for secure user
            authentication. Currently, I&apos;m dedicated to expanding my project
            repertoire and embracing new challenges. As a fast learner and a
            collaborative team player, I&apos;m always ready to explore and adapt to
            new technologies, ensuring that my contributions are impactful andd
            innovative.
          </p>
          <h3 className="absolute -right-48 top-1/2 rotate-90 tracking-wide text-3xl font-Pacifico">
            {letters}
          </h3>
          <p>Yooo</p>
          <p>Yooo</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
