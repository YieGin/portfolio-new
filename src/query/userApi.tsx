import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery, useQueryClient } from "react-query";

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export type Review = {
  user: string;
  message: string;
  email: string;
  name: string;
  image: string;
};

interface ReviewResponse {
  _id: string;
  user: {
    name: string;
    email: string;
    image: string;
  };
  message: string;
}

export const useCreateUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createMyUserRequest);

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};

export const useFetchReviews = () => {
  return useQuery<ReviewResponse[], Error>(
    "reviews",
    async (): Promise<ReviewResponse[]> => {
      const response = await fetch("/api/review", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );
};

export const useCreateReview = () => {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const createReview = async (review: Review): Promise<ReviewResponse> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch("/api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(review),
    });

    if (!response.ok) {
      throw new Error("Failed to submit review");
    }

    return response.json();
  };

  return useMutation<ReviewResponse, Error, Review>(createReview, {
    onSuccess: (newReview, variables) => {
      // Now 'variables' contains the 'review' that was used in the mutation
      queryClient.setQueryData<ReviewResponse[]>("reviews", (oldReviews = []) => [
        ...oldReviews,
        {
          ...newReview,
          user: {
            name: newReview.user.name || variables.name, // Use the 'variables' context to access the original review data
            email: newReview.user.email || variables.email,
            image: newReview.user.image || variables.image
          },
        },
      ]);
    },
  });
};
