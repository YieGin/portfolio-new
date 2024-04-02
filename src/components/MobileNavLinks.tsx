import React from "react";
import TransitionLink from "./TransitionLink";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";

const MobileNavLinks = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <div className="flex flex-col gap-y-5 mt-10">
      <ul className="flex flex-col gap-5">
        <TransitionLink
          href="/projects"
          className={`${
            isActive("/projects")
              ? "text-[#000] dark:text-white"
              : "text-foreground/60 transition-colors"
          } text-[0.8rem] md:text-[1rem] font-bold text`}
        >
          Projects
        </TransitionLink>
        <Separator />
        <TransitionLink
          href="/about"
          className={`${
            isActive("/about")
              ? "text-[#000] dark:text-white"
              : "text-foreground/60 transition-colors"
          } text-[0.8rem] md:text-[1rem] font-bold text`}
        >
          About
        </TransitionLink>
        <Separator />
        <TransitionLink
          href="/contact"
          className={`${
            isActive("/contact")
              ? "text-[#000] dark:text-white"
              : "text-foreground/60 transition-colors"
          } text-[0.8rem] md:text-[1rem] font-bold text`}
        >
          Contact
        </TransitionLink>
        <Separator />
        <TransitionLink
          href="/uses"
          className={`${
            isActive("/uses")
              ? "text-[#000] dark:text-white"
              : "text-foreground/60 transition-colors"
          } text-[0.8rem] md:text-[1rem] font-bold text`}
        >
          Uses
        </TransitionLink>
        <Separator />
      </ul>
    </div>
  );
};

export default MobileNavLinks;
