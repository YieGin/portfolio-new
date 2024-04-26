import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { GiChainedHeart } from "react-icons/gi";
import StarRating from "./StarRating";
import { useCreateReview, useFetchReviews } from "@/query/userApi";
import { z } from "zod";
import LoadingButton from "@/utlis/LoadingButton";
import { Loader } from "lucide-react";
import StarDisplay from "./StarDisplay";

// Updated schema to include rating validation
const reviewSchema = z.object({
  message: z
    .string()
    .min(2, "Your message must be at least 2 characters long."),
  rating: z.number().min(1, "Please select at least one star."),
});

const WriteReview = () => {
  const { mutateAsync: createReview, isLoading } = useCreateReview();
  const {
    data: reviews,
    isError,
    isLoading: isReviewsLoading,
  } = useFetchReviews();
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const [rating, setRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [ratingError, setRatingError] = useState("");

  useEffect(() => {
    if (reviews && reviews.length > 0) {
      const totalRating = reviews.reduce(
        (acc, review) => acc + (review.rating || 0),
        0
      );
      const avgRating = totalRating / reviews.length;
      setAverageRating(avgRating);
    }
  }, [reviews]);

  const handleReviewSubmit = async () => {
    if (!isAuthenticated || !user) {
      toast.error("You need to be logged in to submit a review!");
      return;
    }

    try {
      reviewSchema.parse({ message, rating });
      const review = {
        user: user.sub!,
        message: message,
        rating,
        email: user.email!,
        name: user.name!,
        image: user.picture!,
        auth0Id: user.auth0Id!,
      };
      await createReview(review);
      toast.success("Review submitted successfully!");
      setMessage("");
      setRating(0);
      setMessageError("");
      setRatingError("");
    } catch (err) {
      if (err instanceof z.ZodError) {
        const messageErr = err.errors.find((e) => e.path.includes("message"));
        const ratingErr = err.errors.find((e) => e.path.includes("rating"));
        if (messageErr) setMessageError(messageErr.message);
        if (ratingErr) setRatingError(ratingErr.message);
        toast.error("Please correct the errors before submitting.");
      } else {
        console.error(err);
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="container xl:lg:px-48 lg:px-32 space-y-4 flex md:items-center flex-col">
      <div className="flex flex-col gap-5 lg:w-2/3 border-[1px] h-full p-5 rounded-lg">
        <div className="flex justify-between flex-col md:flex-row">
          <h1 className="md:text-2xl font-bold flex items-center gap-2">
            Share Your Feedback <GiChainedHeart className="text-red-400" />
          </h1>
          <p className="flex">
            {isReviewsLoading ? (
              <Loader className="animate-spin" />
            ) : (
              <StarDisplay rating={Math.round(averageRating)} />
            )}{" "}
            <span className="ml-2">{Math.round(averageRating)} / 5</span>
          </p>
        </div>
        <p className="text-muted-foreground text-[0.8rem] md:text-[1rem]">
          Welcome to my digital portfolio! I&apos;m thrilled to have you here.
          Your feedback is invaluable to me as I strive to improve and evolve
          professionally. If you could spare a moment, please log in and share
          your thoughts on my projects and presentations. Your insights not only
          help me grow but also refine my creative expression. Thank you for
          taking the time to contribute to my journey!
        </p>
      </div>

      <div className="flex gap-5 md:w-2/3">
        {isAuthenticated ? (
          <div className="w-full">
            <div className="flex gap-2">
              <img
                className="rounded-full w-10 h-10"
                src={user?.picture}
                alt={user?.name}
              />
              <div className="w-full space-y-2">
                <p className="font-semibold">{user?.name}</p>
                <Textarea
                  id="reviewTextarea"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setMessageError("");
                  }}
                  className=""
                  placeholder="Type your message here."
                />
                {messageError && (
                  <p className="text-[0.8rem] font-medium text-red-600">
                    {messageError}
                  </p>
                )}
                {ratingError && (
                  <p className="text-[0.8rem] font-medium text-red-600">
                    {ratingError}
                  </p>
                )}
                <div className="flex flex-col-reverse sm:flex-row gap-2 float-right mt-2">
                  <div>
                    <StarRating onRating={setRating} />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      className="w-max p-2 md:p-4 bg-red-500 hover:bg-red-600 text-white"
                      onClick={async () => await logout()}
                    >
                      Log Out
                    </Button>
                    {isLoading ? (
                      <LoadingButton />
                    ) : (
                      <Button
                        className="w-max p-2 md:p-4"
                        onClick={handleReviewSubmit}
                      >
                        Submit
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="ml-auto">
            {isLoading ? (
              <LoadingButton />
            ) : (
              <Button
                className="w-max p-2 md:p-4"
                onClick={async () => await loginWithRedirect()}
              >
                Login
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WriteReview;
