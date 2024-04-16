"use client";
import WriteReview from "@/components/WriteReview";
import ReviewsSection from "@/components/Reviews";
import { Separator } from "@/components/ui/separator";
import AnimatedCharacters from "@/utlis/AnimatedCharacters";

const Guestbook = () => {
  return (
    <div className="mt-28 pb-20">
      <div className="space-y-2 container lg:px-48">
        <AnimatedCharacters
          className="lg:text-5xl text-3xl font-bold"
          type="heading1"
          text="Guestbook"
        />
        <p className="text-[1rem] text-muted-foreground lg:w-1/2">
          Welcome to my Guestbook! I’d love to hear your thoughts about my work
          or just say hello. Drop a message below!
        </p>
      </div>
      <Separator className="my-20" />
      <WriteReview />
      <ReviewsSection />
    </div>
  );
};

export default Guestbook;
