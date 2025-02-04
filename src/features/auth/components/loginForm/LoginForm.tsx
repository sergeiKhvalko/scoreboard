"use client";

import { zodResolver } from "@hookform/resolvers/zod";
// import { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
// import { toast } from "sonner";

import { useRegisterMutation } from "../../hooks";
import { RegisterSchema, TypeRegisterSchema } from "../../schemes";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/shared/ui/Form";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { AuthWrapper } from "../authWrapper";
import styles from "./LoginForm.module.scss";
import cn from "classnames";

export function LoginForm() {
  // const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const form = useForm<TypeRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordRepeat: "",
    },
  });

  const { register, isLoadingRegister } = useRegisterMutation();

  const onSubmit = (values: TypeRegisterSchema) => {
    register({ values });
    // if (recaptchaValue) {
    //   register({ values, recaptcha: recaptchaValue });
    // } else {
    //   toast.error("Пожалуйста, завершите reCAPTCHA");
    // }
  };

  return (
    <AuthWrapper
      heading="Login"
      description="To enter the site, enter your email and password"
      backButtonLabel="Don't have an account yet? Register"
      backButtonHref="/auth/register"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={styles.authForm}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className={cn(styles.formInput)}
                    placeholder="test@example.com"
                    disabled={isLoadingRegister}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className={cn(styles.formInput)}
                    placeholder="******"
                    disabled={isLoadingRegister}
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string}
              onChange={setRecaptchaValue}
              theme={"dark"}
            />
          </div> */}
          <Button
            variant="outline"
            type="submit"
            disabled={isLoadingRegister}
            className="jcc"
          >
            Log in
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  );
}
