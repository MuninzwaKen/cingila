import { z } from "zod";

// Signup Request Schema for waitlist
export const insertSignupRequestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  location: z.string().min(3, "Location must be at least 3 characters"),
  userType: z.enum(["property_manager", "landlord"], {
    required_error: "Please select a user type",
  }),
});

export type InsertSignupRequest = z.infer<typeof insertSignupRequestSchema>;
