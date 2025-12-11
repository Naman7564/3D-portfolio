"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type FormState = {
  message: string;
  status: "success" | "error" | "idle";
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const validatedFields = contactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    if (!validatedFields.success) {
      return {
        message: validatedFields.error.errors.map((err) => err.message).join(", "),
        status: "error",
      };
    }
    
    // Here you would typically send an email or save to a database.
    // For this example, we'll just log it to the console.
    console.log("New message received:");
    console.log(validatedFields.data);

    return {
      message: "Thank you for your message! I'll get back to you soon.",
      status: "success",
    };
  } catch (error) {
    console.error(error);
    return {
      message: "An unexpected error occurred. Please try again.",
      status: "error",
    };
  }
}
