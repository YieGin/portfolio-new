"use client";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import { useCreateUser } from "@/query/userApi";

const AuthCallback = () => {
  const { user } = useAuth0();
  const { createUser } = useCreateUser();
  const navigate = useRouter();
  const hasCreatedUser = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    navigate.push("/testimonials");
  }, [createUser, navigate, user]);

  return (
    <div className="flex justify-center items-center h-screen">
      <Loader className="animate-spin" size={48} />
    </div>
  );
};

export default AuthCallback;