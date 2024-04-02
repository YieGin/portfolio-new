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

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetDescription className="flex flex-col gap-4 font-Rubik">
          <h1 className="text-2xl font-bold text-[#3ccabc] dark:text-[#00dac4]">Yie.com</h1>
          <MobileNavLinks />
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
