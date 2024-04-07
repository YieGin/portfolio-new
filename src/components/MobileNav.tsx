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
import Image from "next/image";
import { Logo } from "../../public/assets";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-[#00dac4]" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetDescription className="flex flex-col gap-4 font-Rubik">
          <Image alt="Logo" width={25} height={25} src={Logo} />
          <MobileNavLinks />
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
