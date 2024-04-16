"use client";
import React from "react";
import FormSection from "./Form";
import ContactImage from "./ContactImage";

const Contact = () => {
  return (
    <div className="container flex md:flex-row flex-col mt-20 justify-between w-full gap-10 overflow-hidden">
      <FormSection />
      <ContactImage />
    </div>
  );
};

export default Contact;
