"use client";
import { MapPinIcon } from "lucide-react";
import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Cobe } from "../../public/assets";

const LocationCard = () => {
  const itemVariants = {
    offscreen: { opacity: 0, x: -50 },
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
      className="relative flex h-60 flex-col border-[1px] gap-6 overflow-hidden rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark md:w-1/2 xl:w-[500px] lg:p-6"
    >
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <MapPinIcon className="size-[18px]" />
          <p>Algeria</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          className="w-max object-cover h-max absolute bottom-0"
          width={1000}
          height={1000}
          src={Cobe}
          alt="test"
        />
      </div>
    </motion.div>
  );
};

export default LocationCard;