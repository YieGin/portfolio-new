import React from "react";
import { Separator } from "./ui/separator";
import { NavList } from "./MainNav";
import Link from "next/link";

const MobileNavLinks = () => {
  return (
    <div className="flex flex-col gap-y-5 mt-10">
      <div className="flex flex-col gap-5">
        {NavList.map((item, index) => (
          <React.Fragment key={index}>
            <Link
              href={item.href}
              className="text-[0.8rem] md:text-[1rem] font-bold dark:text-white"
            >
              {item.name}
            </Link>
            {index < NavList.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MobileNavLinks;
