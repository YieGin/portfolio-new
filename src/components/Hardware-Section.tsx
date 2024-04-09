"use client";
import { HardwareList } from "@/lib/constant";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";
import Image from "next/image";
import React from "react";

const HardwareSection = () => {
  return (
    <div className="container lg:px-48">
      <AnimatedCharacters
        className="text-4xl font-bold"
        type="heading1"
        text="My PC - Hardware"
      />
      <div className="grid grid-cols-4 gap-5 mt-10">
        {HardwareList.map((item) => (
          <div
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default HardwareSection;
