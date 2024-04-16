"use client";
import { useDeleteReview, useFetchReviews } from "@/query/userApi";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

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
    <div className="reviews-container">
      {reviews?.map((review) => (
        <div key={review._id} className="review">
          <p>{review.message}</p>
          <p>Name: {review.user.name}</p>
          <p>Email: {review.user.email}</p>
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={review.user.image}
            alt="User"
          />
          {isAuthenticated && user && user.sub === review.user.auth0Id && (
            <button onClick={() => handleReviewDelete(review._id)}>
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewsSection;