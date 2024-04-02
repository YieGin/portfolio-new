"use client";
import React, { useEffect, useState } from "react";
import TransitionLink from "./TransitionLink";
import MainNav from "./MainNav";
import { ModeToggle } from "@/utlis/ModeToggle";
import MobileNav from "./MobileNav";

const Header = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbarElement = document.querySelector("nav");
    if (navbarElement) {
      setNavbarHeight(navbarElement.clientHeight);
    }
  }, []);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <nav
      style={{ top: showNav ? "0" : `-${navbarHeight}px` }}
      className="fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl border-b-2 px-8 shadow-sm saturate-100 backdrop-blur-[10px] transition-colors"
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
