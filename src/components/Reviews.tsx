"use client";
import React, { useState } from "react";
import { Button } from "./ui/button"; // Ensure this path is correct
import {
  ReviewType,
  useDeleteReview,
  useFetchReviews,
  useUpdateReview,
} from "@/query/userApi";
import { useAuth0 } from "@auth0/auth0-react";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const ReviewsSection = () => {
  const { data: reviews, isError, error, isLoading } = useFetchReviews();
  const { isAuthenticated, user } = useAuth0();
  const { mutateAsync: deleteReview } = useDeleteReview();
  const updateReview = useUpdateReview();
  const [editMessage, setEditMessage] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleEditClick = (reviewId: string, currentMessage: string) => {
    setEditingId(reviewId);
    setEditMessage(currentMessage);
  };

  const handleReviewDelete = async (reviewId: string) => {
    try {
      await deleteReview(reviewId);
      toast.success("Review deleted successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete review");
    }
  };

  const handleReviewUpdate = async (reviewId: string) => {
    if (!reviews || !user?.sub) {
      toast.error("User not logged in or reviews not loaded");
      return;
    }

    const review = reviews.find((r) => r._id === reviewId);
    if (!review) {
      toast.error("Review not found");
      return;
    }

    const reviewData: ReviewType = {
      user: user.sub, // Ensured user.sub is defined
      message: editMessage,
      name: review.user.name,
      image: review.user.image,
      auth0Id: review.user.auth0Id,
    };

    try {
      await updateReview.mutateAsync({ reviewId, reviewData });
      toast.success("Review updated successfully!");
      setEditingId(null); // Exit editing mode
    } catch (err) {
      console.error("Failed to update review", err);
      toast.error("Failed to update review");
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <span>Error: {error?.message}</span>;

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
              <div className="w-full">
                <p className="text-[0.9rem]">{review.user.name}</p>
                <p className="text-[0.9rem]">{review.formattedDate}</p>
                {editingId === review._id && (
                  <div className="mt-2 space-y-2">
                    <Textarea
                      value={editMessage}
                      onChange={(e) => setEditMessage(e.target.value)}
                      placeholder="Edit your review here..."
                    />
                    <Button
                      className="bg-[#1a6961] text-white hover:bg-[#3cb3a7]"
                      onClick={() => handleReviewUpdate(review._id)}
                    >
                      Update
                    </Button>
                  </div>
                )}
              </div>
            </div>
            {editingId !== review._id && (
              <p className="text-muted-foreground my-2">{review.message}</p>
            )}
            {isAuthenticated && user && user.sub === review.user.auth0Id && (
              <div className="flex gap-5 float-right">
                <Button
                  className="bg-red-500 hover:bg-red-600 text-white"
                  onClick={() => handleReviewDelete(review._id)}
                >
                  Delete
                </Button>
                <Button
                  className="bg-[#1a6961] text-white hover:bg-[#3cb3a7]"
                  onClick={() => handleEditClick(review._id, review.message)}
                >
                  Edit
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
