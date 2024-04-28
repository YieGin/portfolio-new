import Image from "next/image";
import React from "react";
import { P5 } from "../../public/assets";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";
import { motion } from "framer-motion";

const ProfileSection = () => {
  const itemVariants = {
    offscreen: { opacity: 0, x: 20 },
    onscreen: () => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.5, duration: 0.5 },
    }),
  };
  const itemVariantsLeft = {
    offscreen: { opacity: 0, x: -50 },
    onscreen: () => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.5, duration: 0.5 },
    }),
  };

  const name = "Islam Belamri";
  const letters = name.split("").map((char, index) => (
    <span key={index} className="inline-block mx-2">
      {char}
    </span>
  ));
  return (
    <div>
      <div className="flex lg:flex-row flex-col container xl:lg:px-48 lg:px-32 gap-10 relative overflow-hidden">
        <motion.div
          variants={itemVariantsLeft}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          className="lg:w-[40%] md:mr-5"
        >
          <Image
            className="rounded-md h-[500px] object-cover"
            src={P5}
            alt="Profile"
            width={1000}
            height={1000}
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          className="lg:w-2/3 overflow-hidden"
        >
          <AnimatedCharacters
            className="sm:text-3xl font-bold"
            type="heading1"
            text="FullStack Developer"
          />
          <h1 className="sm:text-3xl font-bold md:hidden block">
            Islam Belamri
          </h1>
          <p className="md:text-[0.9rem] text-[0.7rem] text-muted-foreground mt-2 md:mr-5 leading-7">
            Hello there, I’m Islam 👋 I’m a Full-Stack Developer with a
            focus on Next.js, React.js, and Node.js. Starting my coding journey
            in 2022, I quickly embraced both front-end and back-end
            technologies, specializing in creating dynamic and secure web
            applications. My expertise includes developing complex
            functionalities and robust authentication systems with Auth0. After
            a leadership role as a Project Lead, I shifted back to freelancing,
            delivering full-stack solutions on Upwork. In 2024, I obtained a
            Back-End Development Focus & Certification, which expanded my
            server-side capabilities. I’m continually exploring the latest in
            tech to ensure my skills are cutting-edge. Off the keyboard, I enjoy
            engaging with the developer community and sharing knowledge. Feel
            free to reach out or explore my projects. Let’s build something
            innovative together!
          </p>
        </motion.div>
        <h3 className="absolute -right-44 xl:-right-48 top-1/2 rotate-90 tracking-wide text-3xl font-Pacifico md:block hidden">
          {letters}
        </h3>
      </div>
    </div>
  );
};

export default ProfileSection;
