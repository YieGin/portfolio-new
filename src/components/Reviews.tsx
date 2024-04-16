"use client";
import { useDeleteReview, useFetchReviews } from "@/query/userApi";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "./ui/button";

const ReviewsSection = () => {
  const { data: reviews, isError, error, isLoading } = useFetchReviews();
  const { isAuthenticated, user } = useAuth0();
  const { mutateAsync: deleteReview } = useDeleteReview();

  const handleReviewDelete = async (reviewId: any) => {
    try {
      await deleteReview(reviewId);
      alert("Review deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to delete review");
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  return (
    <div className="container xl:lg:px-48 lg:px-32 mt-10 flex md:items-center flex-col">
      <div className="flex flex-col gap-y-5 md:w-2/3">
        {reviews?.map((review) => (
          <div key={review._id} className="border-[1px] p-5 rounded-md w-full">
            <div className="flex gap-2">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={review.user.image}
                alt="User"
              />
              <div>
                <p className="text-[0.9rem]">{review.user.name}</p>
                <p className="text-[0.9rem]">{review.formattedDate}</p>
              </div>
            </div>
            <p className="text-muted-foreground my-2">{review.message}</p>
            {isAuthenticated && user && user.sub === review.user.auth0Id && (
              <Button className="float-right bg-red-500 text-white" onClick={() => handleReviewDelete(review._id)}>
                Delete
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
