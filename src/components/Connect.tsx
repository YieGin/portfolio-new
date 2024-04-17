import Link from "next/link";
import { SiSocialblade } from "react-icons/si";
import { motion } from "framer-motion";
import { SOCIALS } from "@/lib/constant";

const Connect = () => {
  const itemVariants = {
    offscreen: { opacity: 0, x: 50 },
    onscreen: () => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    }),
  };
  return (
    <motion.div
      variants={itemVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col gap-6 border-[1px] md:w-1/2 xl:w-[300px] rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:p-6"
    >
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
              target="_blank"
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-[18px]" />
              <h2 className="font-light">{title}</h2>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Connect;
