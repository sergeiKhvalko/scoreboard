// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// // import { useState } from "react";
// // import ReCAPTCHA from "react-google-recaptcha";
// import { useForm } from "react-hook-form";
// // import { toast } from "sonner";

// import { useRegisterMutation } from "../../hooks";
// import { RegisterSchema, TypeRegisterSchema } from "../../schemes";

// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
// } from "@/shared/ui/Form";
// import { Input } from "@/shared/ui/Input";
// import { Button } from "@/shared/ui/Button";
// import { AuthWrapper } from "../authWrapper";
// import styles from "./RegisterForm.module.scss";
// import cn from "classnames";

// export function RegisterForm() {
//   // const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

//   const form = useForm<TypeRegisterSchema>({
//     resolver: zodResolver(RegisterSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       password: "",
//       passwordRepeat: "",
//     },
//   });

//   const { register, isLoadingRegister } = useRegisterMutation();

//   const onSubmit = (values: TypeRegisterSchema) => {
//     console.log(values);
//     register({ values });
//     // if (recaptchaValue) {
//     //   register({ values, recaptcha: recaptchaValue });
//     // } else {
//     //   toast.error("Пожалуйста, завершите reCAPTCHA");
//     // }
//   };

//   return (
//     <AuthWrapper
//       heading="Registration"
//       description="Enter your details"
//       backButtonLabel="Already have an account? Login"
//       backButtonHref="/auth/login"
//     >
//       <Form {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className={styles.authForm}
//         >
//           <FormField
//             control={form.control}
//             name="name"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Display name</FormLabel>
//                 <FormControl>
//                   <Input
//                     className={cn(styles.formInput)}
//                     placeholder="your name on the site"
//                     disabled={isLoadingRegister}
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                   <Input
//                     className={cn(styles.formInput)}
//                     placeholder="ivan@example.com"
//                     disabled={isLoadingRegister}
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="password"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Password</FormLabel>
//                 <FormControl>
//                   <Input
//                     className={cn(styles.formInput)}
//                     placeholder="******"
//                     disabled={isLoadingRegister}
//                     type="password"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="passwordRepeat"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Repeat password</FormLabel>
//                 <FormControl>
//                   <Input
//                     className={cn(styles.formInput)}
//                     placeholder="******"
//                     disabled={isLoadingRegister}
//                     type="password"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           {/* <div className="flex justify-center">
//             <ReCAPTCHA
//               sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string}
//               onChange={setRecaptchaValue}
//               theme={"dark"}
//             />
//           </div> */}
//           <Button
//             variant="outline"
//             type="submit"
//             disabled={isLoadingRegister}
//             className="jcc"
//           >
//             Create account
//           </Button>
//         </form>
//       </Form>
//     </AuthWrapper>
//   );
// }
