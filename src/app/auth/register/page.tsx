import { RegisterForm } from "@/features/auth/components/registerForm/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Создать аккаунт",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
