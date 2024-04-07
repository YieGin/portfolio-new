"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";
import { Textarea } from "./ui/textarea";
import { useCreateContact } from "@/query/emailApi";
import LoadingButton from "./LoadingButton";
import CobeRotate from "./CobeRotate";
import { motion } from "framer-motion";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().optional(),
});

const Contact = () => {
  const { createRestaurant, isLoading } = useCreateContact();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    createRestaurant(values);
  };

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
      className="container flex lg:flex-row flex-col mt-20 justify-between w-full"
    >
      <div className="flex flex-col lg:w-1/2 space-y-5">
        <p>Contact</p>
        <AnimatedCharacters
          className="text-4xl font-bold"
          type="heading1"
          text="Get in touch"
        />
        <p className="font-light text-[0.9rem]">
          Currently on the lookout for new professional challenges, I&lsquo;m
          eager to engage in opportunities where I can contribute and grow. Feel
          free to contact me I&lsquo;ll get back to you as soon as I can.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-5 md:grid-cols-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormDescription>
                      Please enter your first name as you&lsquo;d like me to
                      address you in our correspondence.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormDescription>
                      Please include your last name for a more formal
                      communication.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  {" "}
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormDescription>
                    Please provide your email address to ensure we can respond
                    to your inquiry promptly.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  {" "}
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message here"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Your message is important to me. Please share any thoughts,
                    inquiries, or potential opportunities you have in mind.
                    Looking forward to connecting with you!
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {isLoading ? (
              <LoadingButton />
            ) : (
              <Button type="submit">Submit</Button>
            )}
          </form>
        </Form>
      </div>
      <CobeRotate />
    </motion.div>
  );
};

export default Contact;
