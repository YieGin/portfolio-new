"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "./ui/sheet";
import MobileNavLinks from "./MobileNavLinks";
import { Menu } from "lucide-react";
import { Logo } from "../../public/assets";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetDescription className="flex flex-col gap-4">
          <Logo className="dark:text-white text-black w-[50px] h-[40px]" />
          <MobileNavLinks />
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
