"use client";
import React, { useEffect, useState } from "react";
import TransitionLink from "./TransitionLink";
import MainNav from "./MainNav";
import { ModeToggle } from "@/utlis/ModeToggle";
import MobileNav from "./MobileNav";

const Header = () => {

  return (
    <nav
      className="sticky top-3 right-0  z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl border-b-2 px-8 shadow-sm saturate-100 backdrop-blur-[100px]"
    >
      <TransitionLink
        href={"/"}
        className="text-3x1 font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-teal-500"
      >
        Yie.com
      </TransitionLink>
      <div className="hidden lg:flex items-center gap-2">
        <MainNav />
        <div className="h-7 w-[1px] bg-gray-200 mx-2" />
        <ModeToggle />
      </div>
      <div className="ml-auto flex items-center gap-5 lg:hidden">
        <ModeToggle />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Header;
