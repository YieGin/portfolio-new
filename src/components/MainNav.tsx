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
              className={`text-[0.8rem] md:text-[1rem] font-medium ${
                isActive("/projects")
                  ? "text-[#fff]"
                  : isActive(item.href)
                    ? "text-black dark:text-white"
                    : "text-foreground/60"
              }`}
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
