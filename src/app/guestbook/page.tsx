"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import React from "react";
import { GiHand } from "react-icons/gi";

const Guestbook = () => {
  const { user, error, isLoading } = useUser();

  return (
    <div className="mt-28 pb-20">
      <div className="space-y-2 container lg:px-48">
        <AnimatedCharacters
          className="lg:text-5xl text-3xl font-bold"
          type="heading1"
          text="About"
        />
        <div className="flex gap-1 items-center">
          <GiHand />
          <p className="text-[1rem] text-muted-foreground">
            Hi there! I am Islam.
          </p>
        </div>
      </div>
      <Separator className="my-20" />
      <div className="container xl:lg:px-48 lg:px-32">
        <div className="flex flex-col gap-5 w-1/2 border-[1px] h-full p-5 rounded-lg">
          <h1 className="text-3xl font-bold">Pinned</h1>
          <p className="text-muted-foreground">
            Hey there! Thanks for visiting my website. If you have a moment, I'd
            love to hear your thoughts on my work. Please log in with your
            account to leave a comment. Thanks!
          </p>
        </div>
        {user && (
          <>
            <img
              src={user.picture ?? "/default-profile.png"}
              alt={user.name ?? "User"}
            />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <Link href="/api/auth/login">
              <Button>Login</Button>
            </Link>
            <Link href="/api/auth/logout">
              <Button>Logout</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Guestbook;
