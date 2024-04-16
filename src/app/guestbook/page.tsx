"use client";
import WriteReview from "@/components/WriteReview";
import ReviewsSection from "@/components/Reviews";
import { Separator } from "@/components/ui/separator";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";
import { GiHand } from "react-icons/gi";

const Guestbook = () => {

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
      <ReviewsSection />
      <WriteReview />
    </div>
  );
};

export default Guestbook;
