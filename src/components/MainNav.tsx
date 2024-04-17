import { usePathname } from "next/navigation";
import React from "react";
import TransitionLink from "./TransitionLink";

export const NavList = [
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Guestbook",
    href: "/guestbook",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Uses",
    href: "/uses",
  },
];

const MainNav = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <div>
      <div className="flex gap-10">
        {NavList.map((item, index) => (
          <div key={index}>
            <TransitionLink
              href={item.href}
              className={`${
                isActive("/projects")
                  ? "text-[#fff]"
                  : "text-foreground/60 transition-colors"
              } text-[0.8rem] md:text-[1rem] font-medium text`}
            >
              {item.name}
            </TransitionLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNav;
