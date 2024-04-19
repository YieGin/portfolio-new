import Link from "next/link";
import React from "react";
import TransitionLink from "./TransitionLink";
import { Logo } from "../../public/assets";

const linkData = [
  {
    id: "primary",
    links: [
      { href: "/", text: "Home" },
      { href: "/about", text: "About" },
      { href: "/contact", text: "Contact" },
    ],
  },
  {
    id: "projects",
    links: [
      { href: "/projects", text: "Projects" },
      { href: "/uses", text: "Uses" },
      { href: "/testimonials", text: "testimonials" },
    ],
  },
  {
    id: "social",
    links: [
      { href: "/https://www.instagram.com/belamri_yie", text: "Instagram" },
      { href: "/https://github.com/YieGin", text: "GitHub" },
      { href: "/https://www.linkedin.com/in/islam-belamri", text: "Linkden" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="container flex items-center justify-center w-full">
      <div className="relative mx-auto mb-6 flex flex-col rounded-2xl p-8 shadow-sm saturate-100 backdrop-blur-[10px] dark:bg-gradient-to-br bg-gradient-to-bl dark:from-[#030712] dark:to-[#242731] from-[#e0e0e0] to-[#eeeeee] lg:max-w-5xl w-full">
        <div className="flex gap-2 items-center relative right-5">
          <Logo className="dark:text-white text-black w-[80px] h-[80px]" />
        </div>
        <div className="flex justify-between lg:gap-52 lg:justify-normal mt-5">
          {linkData.map((section) => (
            <div key={section.id} className="space-y-4">
              {section.links.map((link) =>
                section.id === "social" ? (
                  <div key={link.text} className="flex flex-col">
                    <Link
                      href={link.href}
                      target="_blank"
                      className="text-[0.8rem] text-muted-foreground hover:dark:text-white hover:text-black cursor-pointer"
                    >
                      {link.text}
                    </Link>
                  </div>
                ) : (
                  <TransitionLink
                    key={link.text}
                    href={link.href}
                    className="text-[0.8rem] text-muted-foreground hover:dark:text-white hover:text-black cursor-pointer"
                  >
                    {link.text}
                  </TransitionLink>
                )
              )}
            </div>
          ))}
        </div>
        <p className="text-[0.8rem] mt-10">
          © Copyright 2024 – Islam. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
