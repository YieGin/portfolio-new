import { formDataType } from "@/types";
import { useMutation } from "react-query";
import { toast } from "sonner";

export const useCreateContact = () => {
  const createContactRequest = async (formData: formDataType) => {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }
    return response.json();
  };

  const { mutate: createRestaurant, isLoading } = useMutation(
    createContactRequest,
    {
      onSuccess: () => {
        toast.success(
          "Your message has been successfully sent! Thank you for reaching out."
        );
      },
      onError: () => {
        toast.error("Unable to send message");
      },
    }
  );

  return { createRestaurant, isLoading };
};
