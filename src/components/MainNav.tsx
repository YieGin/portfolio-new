import { usePathname } from "next/navigation";
import React from "react";
import TransitionLink from "./TransitionLink";

const MainNav = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <div>
      <ul className="flex gap-5">
        <TransitionLink
          href="/projects"
          className={`${
            isActive("/projects")
              ? "text-[#000] dark:text-white"
              : "text-foreground/60 transition-colors"
          } text-[0.8rem] md:text-[1rem] font-medium text`}
        >
          Projects
        </TransitionLink>
        <TransitionLink
          href="/about"
          className={`${
            isActive("/about")
              ? "text-[#000] dark:text-white"
              : "text-foreground/60 transition-colors"
          } text-[0.8rem] md:text-[1rem] font-medium text`}
        >
          About
        </TransitionLink>
        <TransitionLink
          href="/contact"
          className={`${
            isActive("/contact")
              ? "text-[#000] dark:text-white"
              : "text-foreground/60 transition-colors"
          } text-[0.8rem] md:text-[1rem] font-medium text`}
        >
          Contact
        </TransitionLink>
        <TransitionLink
          href="/uses"
          className={`${
            isActive("/uses")
              ? "text-[#000] dark:text-white"
              : "text-foreground/60 transition-colors"
          } text-[0.8rem] md:text-[1rem] font-medium text`}
        >
          Uses
        </TransitionLink>
      </ul>
    </div>
  );
};

export default MainNav;
