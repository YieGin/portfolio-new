"use client";
import { animatePageIn } from "@/utlis/animations";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      animatePageIn();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="z-20">
      <div
        id="banner-1"
        className="min-h-screen bg-[#000] z-50 fixed top-0 left-0 w-1/4 hidden md:block"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-[#000] z-50 fixed top-0 left-1/4 w-1/4 hidden md:block"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-[#000] z-50 fixed top-0 left-2/4 w-1/4 hidden md:block"
      />
      <div
        id="banner-4"
        className="min-h-screen bg-[#000] z-50 fixed top-0 left-3/4 w-1/4 hidden md:block"
      />
      {children}
    </div>
  );
}
