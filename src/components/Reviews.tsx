"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  ReviewType,
  useDeleteReview,
  useFetchReviews,
  useUpdateReview,
} from "@/query/userApi";
import { useAuth0 } from "@auth0/auth0-react";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import LoadingButton from "@/utlis/LoadingButton";

const ReviewsSection = () => {
  const { data: reviews, isError, error, isLoading } = useFetchReviews();
  const { isAuthenticated, user } = useAuth0();
  const { mutateAsync: deleteReview } = useDeleteReview();
  const updateReview = useUpdateReview();
  const [editMessage, setEditMessage] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleEditClick = (reviewId: string, currentMessage: string) => {
    setEditingId(reviewId);
    setEditMessage(currentMessage);
    setShowEditDialog(true);
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
    setShowEditDialog(false);
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
      user: user.sub,
      message: editMessage,
      name: review.user.name,
      image: review.user.image,
      auth0Id: review.user.auth0Id,
    };

    try {
      await updateReview.mutateAsync({ reviewId, reviewData });
      toast.success("Review updated successfully!");
      setEditingId(null);
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
              </div>
            </div>
            {editingId !== review._id && (
              <p className="text-muted-foreground my-2">{review.message}</p>
            )}
            {isAuthenticated && user && user.sub === review.user.auth0Id && (
              <div className="flex gap-5 float-right">
                <Dialog>
                  <DialogTrigger asChild>
                    {isLoading ? (
                      <LoadingButton />
                    ) : (
                      <Button
                        className="w-max p-2 md:p-4 bg-red-500 hover:bg-red-600 text-white"
                        onClick={() => setShowDeleteDialog(true)}
                      >
                        Delete
                      </Button>
                    )}
                  </DialogTrigger>
                  {showDeleteDialog && (
                    <DialogContent className="md:max-w-[550px]">
                      <div className="flex flex-col gap-5">
                        <h1 className="text-2xl font-bold">Remove a Comment</h1>
                        <p className="text-muted-foreground">
                          Do you really want to remove this comment? Keep in
                          mind, this can&apos;t be reversed.
                        </p>
                        <div>
                          {isLoading ? (
                            <LoadingButton />
                          ) : (
                            <Button
                              className="bg-red-500 hover:bg-red-600 text-white w-max p-2 md:p-4 float-right"
                              onClick={() => handleReviewDelete(review._id)}
                            >
                              Delete
                            </Button>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  )}
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    {isLoading ? (
                      <LoadingButton />
                    ) : (
                      <Button
                        className="w-max p-2 md:p-4"
                        onClick={() =>
                          handleEditClick(review._id, review.message)
                        }
                      >
                        Edit
                      </Button>
                    )}
                  </DialogTrigger>
                  {showEditDialog && (
                    <DialogContent className="md:max-w-[550px]">
                      <div className="flex flex-col gap-5">
                        <h1 className="text-2xl font-bold">Edit Your Review</h1>
                        <p className="text-muted-foreground">
                          Make changes to your review below. Please remember
                          that your edits will update the existing review.
                        </p>
                        {editingId === review._id && (
                          <div className="mt-2 space-y-2">
                            <Textarea
                              value={editMessage}
                              onChange={(e) => setEditMessage(e.target.value)}
                              placeholder="Edit your review here..."
                            />
                            <Button
                              className="w-max p-2 md:p-4"
                              onClick={() => handleReviewUpdate(review._id)}
                            >
                              Save Changes
                            </Button>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  )}
                </Dialog>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
