"use client";
import { HardwareList } from "@/lib/constant";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HardwareSection = () => {

  const itemVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.3 },
    }),
  };
  
  return (
    <div className="container lg:px-48">
      <AnimatedCharacters
        className="md:text-4xl text-2xl font-bold"
        type="heading1"
        text="My PC - Hardware"
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-10">
        {HardwareList.map((item) => (
          <motion.div
            variants={itemVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            custom={item.id}
            key={item.id}
            className="p-3 rounded-md border-[1px] dark:hover:bg-gray-800 hover:bg-gray-100 cursor-pointer hover: h-full"
          >
            <Image
              className="object-contain h-[250px]"
              src={item.img}
              width={1000}
              height={1000}
              alt="Screen"
            />
            <div className="mt-5">
              <h1 className="font-bold">{item.title}</h1>
              <p className="text-[0.9rem] text-muted-foreground">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HardwareSection;
