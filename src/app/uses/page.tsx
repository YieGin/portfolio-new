"use client";
import { Separator } from "@/components/ui/separator";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";
import Image from "next/image";
import React from "react";
import { PcImgTwo } from "../../../public/assets";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import HardwareSection from "@/components/Hardware-Section";
import SoftwaresSection from "@/components/Softwares-Section";
import { motion } from "framer-motion";

const Uses = () => {
  const itemVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: () => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9 },
    }),
  };
  return (
    <div className="mt-28 pb-20">
      <div className="space-y-2 container lg:px-48">
        <AnimatedCharacters
          className="lg:text-5xl text-3xl font-bold"
          type="heading1"
          text="My Gear"
        />
        <div className="flex gap-1 items-center">
          <p className="md:text-[1rem] text-[0.8rem] text-muted-foreground md:w-2/3">
            Below is the collection of tools and tech I rely on for development,
            gaming, content creation, and daily tasks.
          </p>
        </div>
      </div>
      <Separator className="md:my-20 my-10" />
      <motion.div
        variants={itemVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        className="container lg:px-48"
      >
        <AnimatedCharacters
          className="md:text-4xl text-3xl font-bold mb-5"
          type="heading1"
          text="My computer"
        />
        <AspectRatio ratio={10 / 5} className="float-left flex gap-10">
          <Image
            className="object-cover"
            src={PcImgTwo}
            width={2000}
            height={2000}
            alt="computer"
          />
        </AspectRatio>
      </motion.div>
      <Separator className="my-20" />
      <HardwareSection />
      <Separator className="my-20" />
      <SoftwaresSection />
    </div>
  );
};

export default Uses;
