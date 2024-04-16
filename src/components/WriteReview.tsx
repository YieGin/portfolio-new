import { useCreateReview } from "@/query/userApi";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const WriteReview = () => {
  const { mutateAsync: createReview } = useCreateReview();
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  const handleReviewSubmit = async () => {
    if (!isAuthenticated || !user) {
      alert("You need to be logged in to submit a review!");
      return;
    }
    const reviewElement = document.getElementById(
      "reviewTextarea"
    ) as HTMLTextAreaElement | null;
    if (!reviewElement || !reviewElement.value) {
      alert("No review text found!");
      return;
    }

    const review = {
      user: user.sub!,
      message: reviewElement.value,
      email: user.email!,
      name: user.name!,
      image: user.picture!,
      auth0Id: user.auth0Id!,
    };

    try {
      await createReview(review);
      alert("Review submitted successfully!");
      reviewElement.value = "";
    } catch (err) {
      console.error(err);
      alert("Failed to submit review");
    }
  };
  
  return (
    <div className="container xl:lg:px-48 lg:px-32">
      <div className="flex flex-col gap-5 w-1/2 border-[1px] h-full p-5 rounded-lg">
        <h1 className="text-3xl font-bold">Pinned</h1>
        <p className="text-muted-foreground">
          Hey there! Thanks for visiting my website. If you have a moment,
          I&apos;d love to hear your thoughts on my work. Please log in with
          your account to leave a comment. Thanks!
        </p>
      </div>
      <div className="flex gap-5 w-1/2">
        {isAuthenticated ? (
          <div className="w-full mt-10">
            <div className="flex gap-2">
              <img
                className="rounded-full w-14 h-14"
                src={user?.picture}
                alt={user?.name}
              />
              <div className="w-full space-y-2">
                <p className="text-muted-foreground">{user?.name}</p>
                <Textarea
                  id="reviewTextarea"
                  className=""
                  placeholder="Type your message here."
                />
              </div>
            </div>
            <div className="flex gap-2 float-right mt-2">
              <Button className="w-max" onClick={async () => await logout()}>
                Log Out
              </Button>
              <Button
                className="w-max bg-[#1a6961] text-white hover:bg-[#3cb3a7]"
                onClick={handleReviewSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        ) : (
          <div className="ml-auto mt-2">
            <Button
              className="w-max"
              onClick={async () => await loginWithRedirect()}
            >
              Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WriteReview;
