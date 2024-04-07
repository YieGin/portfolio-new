import Link from "next/link";
import React from "react";
import TransitionLink from "./TransitionLink";
import { Logo } from "../../public/assets";

const Footer = () => {
  return (
    <div className="container flex items-center justify-center w-full">
      <div className="relative mx-auto mb-6 flex flex-col rounded-2xl p-8 shadow-sm saturate-100 backdrop-blur-[10px] dark:bg-gradient-to-br bg-gradient-to-bl dark:from-[#030712] dark:to-[#242731] from-[#e0e0e0] to-[#eeeeee] lg:max-w-5xl w-full">
        <div className="flex gap-2 items-center relative right-5">
          <Logo className="dark:text-white text-black w-[80px] h-[80px]" />
        </div>
        <div className="flex justify-between lg:gap-52 lg:justify-normal mt-5">
          <div className="space-y-4">
            <TransitionLink
              href={"/"}
              className="text-[0.8rem] text-muted-foreground hover:dark:text-white hover:text-black cursor-pointer"
            >
              Home
            </TransitionLink>
            <TransitionLink
              href={"/about"}
              className="text-[0.8rem] text-muted-foreground hover:dark:text-white hover:text-black cursor-pointer"
            >
              About
            </TransitionLink>
            <TransitionLink
              href={"/contact"}
              className="text-[0.8rem] text-muted-foreground hover:dark:text-white hover:text-black cursor-pointer"
            >
              Contact
            </TransitionLink>
          </div>
          <div className="space-y-4">
            <TransitionLink
              href={"/projects"}
              className="text-[0.8rem] text-muted-foreground hover:dark:text-white hover:text-black cursor-pointer"
            >
              Projects
            </TransitionLink>
            <TransitionLink
              href={"/uses"}
              className="text-[0.8rem] text-muted-foreground hover:dark:text-white hover:text-black cursor-pointer"
            >
              Uses
            </TransitionLink>
            <TransitionLink
              href={"/guestbook"}
              className="text-[0.8rem] text-muted-foreground hover:dark:text-white hover:text-black cursor-pointer"
            >
              Guestbook
            </TransitionLink>
          </div>
          <div className="space-y-4 flex flex-col">
            <Link
              target="_blank"
              href={"/"}
              className="text-[0.8rem] text-muted-foreground hover:dark:text-white hover:text-black cursor-pointer"
            >
              Instagram
            </Link>
            <Link
              target="_blank"
              href={"/"}
              className="text-[0.8rem] text-muted-foreground hover:dark:text-white hover:text-black cursor-pointer"
            >
              GitHub
            </Link>
            <Link
              target="_blank"
              href={"/"}
              className="text-[0.8rem] text-muted-foreground hover:dark:text-white hover:text-black cursor-pointer"
            >
              Linkden
            </Link>
          </div>
        </div>
        <p className="text-[0.8rem] mt-10">
          © Copyright 2024 – Islam. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
