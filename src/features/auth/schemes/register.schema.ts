import { z } from "zod";

export const RegisterSchema = z
  .object({
    name: z.string().min(2, {
      message: "Enter your display name",
    }),
    email: z.string().email({
      message: "Incorrect mail",
    }),
    password: z.string().min(6, {
      message: "Password minimum 6 characters",
    }),
    passwordRepeat: z.string().min(6, {
      message: "Confirmation password minimum 6 characters",
    }),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: "The passwords do not match",
    path: ["passwordRepeat"],
  });

export type TypeRegisterSchema = z.infer<typeof RegisterSchema>;
