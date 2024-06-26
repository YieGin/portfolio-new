"use client";
import React from "react";
import MainNav from "./MainNav";
import { ModeToggle } from "@/utlis/ModeToggle";
import MobileNav from "./MobileNav";
import { Logo } from "../../public/assets";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`${
        isActive("/projects")
          ? "bg-transparent backdrop-blur-[100px]"
          : "bg-white dark:bg-transparent backdrop-blur-[1000px]"
      } sticky top-3 right-0 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl border-b-2 px-8 shadow-sm saturate-100`}
    >
      <Link href="/">
        <Logo
          aria-label="Home"
          className={`${
            isActive("/projects") ? "text-[#fff]" : "text-[#000]"
          } dark:text-white w-[50px] h-[40px]`}
        />
      </Link>
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
