import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import { Logo, P1 } from "../../public/assets";

const ContactImage = () => {
  const container = useRef<HTMLDivElement>(null);
  const paths = useRef<(SVGTextPathElement | null)[]>([]);
  const { scrollYProgress } = useScroll({
    target: container,
  });

  const itemVariants = {
    offscreen: { opacity: 0, x: 100 },
    onscreen: () => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    }),
  };

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      paths.current.forEach((path, i) => {
        if (path) {
          path.setAttribute("startOffset", `${-60 + i * 60 + e * 60}%`);
        }
      });
    });
  }, []);

  return (
    <motion.div
      variants={itemVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="w-1/2 relative md:block hidden"
    >
      <Image
        className="w-full h-full object-cover rounded-md absolute brightness-75"
        src={P1}
        width={2000}
        height={2000}
        alt="Get in tou"
      />
      <Logo className="text-white w-[80px] h-[80px] relative float-right" />
      <div className="flex flex-col gap-3 absolute right-2 bottom-5">
        {[...Array(5)].map((_, index) => (
          <div key={index}>
            <h1 className="font-bold text-2xl text-white">X</h1>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 absolute left-2 bottom-5">
        {[...Array(5)].map((_, index) => (
          <div key={index}>
            <h1 className="font-bold text-2xl text-white">X</h1>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full" ref={container}>
        <svg className="w-full" viewBox="0 0 250 90">
          <path
            fill="none"
            id="curve"
            d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
          />
          <text className="text-[6px] uppercase" style={{ fill: "white" }}>
            {[...Array(4)].map((_, i) => (
              <textPath
                key={i}
                ref={(ref) => {
                  paths.current[i] = ref;
                }}
                startOffset={`${i * 40}%`}
                xlinkHref="#curve"
              >
                Creating Opportunities Together Every Day
              </textPath>
            ))}
          </text>
        </svg>
      </div>
    </motion.div>
  );
};

export default ContactImage;
