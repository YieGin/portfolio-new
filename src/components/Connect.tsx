import { LinkIcon } from "lucide-react";
import Link from "next/link";
import { IconType } from "react-icons/lib";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiSocialblade,
  SiX,
  SiYoutube,
} from "react-icons/si";

type Props = Array<{
  href: string;
  title: string;
  icon: IconType;
}>;

export const SOCIALS: Props = [
  {
    href: "https://github.com/YieGin",
    title: "GitHub",
    icon: SiGithub,
  },
  {
    href: "https://www.facebook.com/islam.bba.182/",
    title: "Facebook",
    icon: SiFacebook,
  },
  {
    href: "https://www.instagram.com/belamri_yie/",
    title: "Instagram",
    icon: SiInstagram,
  },
  {
    href: "https://www.linkedin.com/in/islam-belamri/",
    title: "Linkedin",
    icon: SiX,
  },
];

const Connect = () => {
  return (
    <div className="flex flex-col gap-6 border-[1px] md:w-1/2 xl:w-[300px] rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:p-6">
      <div className="flex items-center gap-2">
        <SiSocialblade className="size-[18px]" />
        <h2 className="text-sm font-light">Connect</h2>
      </div>
      <div className="flex flex-col gap-4 px-2">
        {SOCIALS.map((link) => {
          const { href, title, icon } = link;
          const Icon = icon;
          return (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-[18px]" />
              <h2 className="font-light">{title}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Connect;
