"use client";
import { Separator } from "@/components/ui/separator";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";
import Image from "next/image";
import React from "react";
import { GiHand } from "react-icons/gi";
import {  PcImg, PcImgTwo } from "../../../public/assets";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import HardwareSection from "@/components/Hardware-Section";
import SoftwaresSection from "@/components/Softwares-Section";


const Uses = () => {
  return (
    <div className="mt-28 pb-20">
      <div className="space-y-2 container lg:px-48">
        <AnimatedCharacters
          className="text-5xl font-bold"
          type="heading1"
          text="Uses"
        />
        <div className="flex gap-1 items-center">
          <GiHand />
          <p className="text-[1rem] text-muted-foreground">
            This is the equipment I currently use for gaming, programming,
            making videos, and every day.
          </p>
        </div>
      </div>
      <Separator className="my-20" />
      <div className="container lg:px-48">
        <AnimatedCharacters
          className="text-4xl font-bold mb-5"
          type="heading1"
          text="My computer"
        />
        <AspectRatio ratio={13 / 9} className="float-left flex gap-10">
          <Image
            className="object-contain"
            src={PcImg}
            width={400}
            height={400}
            alt="computer"
          />
          <Image
            className="object-contain"
            src={PcImgTwo}
            width={400}
            height={400}
            alt="computer"
          />
        </AspectRatio>
      </div>
      <Separator className="my-20" />
      <HardwareSection />
      <Separator className="my-20" />
      <SoftwaresSection />
    </div>
  );
};

export default Uses;
