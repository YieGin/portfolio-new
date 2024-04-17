import React from "react";
import TransitionLink from "./TransitionLink";
import { Separator } from "./ui/separator";
import { NavList } from "./MainNav";

const MobileNavLinks = () => {
  return (
    <div className="flex flex-col gap-y-5 mt-10">
      <div className="flex flex-col gap-5">
        {NavList.map((item, index) => (
          <React.Fragment key={index}>
            <TransitionLink
              href={item.href}
              className="text-[0.8rem] md:text-[1rem] font-bold dark:text-white"
            >
              {item.name}
            </TransitionLink>
            {index < NavList.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MobileNavLinks;
