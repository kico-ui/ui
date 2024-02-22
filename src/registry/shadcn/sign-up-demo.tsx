"use client"

import Link from "next/link"
import { useState } from "react"

// npm packages
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

// just add icons whatever you wants for your site
import SignUpIcon from "@/components/icons/signup-icon"
import { Icons } from "@/components/icons/icons"

// shadcn ui components
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

// form validation using zod
const signUpFormSchema = z.object({
  fullname: z
    .string()
    .min(4, {
      message: "Fullname must be at least 4 characters.",
    })
    .max(75, {
      message: "Fullname must not be longer than 75 characters.",
    }),

  email: z
    .string({
      required_error: "Please enter valid email address.",
    })
    .email(),

  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
      "Password must contain at least one special character"
    ),

  // add other fields...
})

type SignUpFormValues = z.infer<typeof signUpFormSchema>

function AuthenticationStrategy() {
  const isLoading = false
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 size-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 size-4" />
        )}{" "}
        Google
      </Button>
    </>
  )
}

function SignUpForm() {
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    mode: "onChange",
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const onSubmit = (data: SignUpFormValues) => {
    setIsLoading(true)
    console.log(data) // get all form fields
    setTimeout(() => setIsLoading(false), 3000)
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col md:px-0 space-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem className="h-20">
              <FormLabel className="md:text-xs">Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter full name"
                  className="focus-visible:ring-[1px] text-xs py-0 focus-visible:ring-offset-0 rign-offset-0"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="h-20">
              <FormLabel className="md:text-xs">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@kicoui.com"
                  className="focus-visible:ring-[1px] text-xs py-0 focus-visible:ring-offset-0 rign-offset-0"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="h-20">
              <FormLabel className="md:text-xs">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter password"
                  className="focus-visible:ring-[1px] text-xs py-0 focus-visible:ring-offset-0 rign-offset-0"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        {/* add other form fields */}

        <Button type="submit" disabled={isLoading}>
          Create An Account
          {isLoading ? (
            <Icons.spinner className="ml-2 size-4 animate-spin" />
          ) : (
            <Icons.nextBtn className="ml-2 size-4" />
          )}{" "}
        </Button>
      </form>
    </Form>
  )
}

function SignUpDemo() {
  return (
    <div className="relative border px-5 py-10 rounded-lg">
      <div className="gap-4 flex items-center md:grid md:grid-cols-2">
        <div className="items-center justify-center hidden md:flex">
          <SignUpIcon />
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-xs text-muted-foreground">
                Enter your information below to create your account
              </p>
            </div>
            <SignUpForm />
            <div className="flex items-center justify-start">
              <Link
                href="#"
                className="text-sm text-foreground/60 transition-all hover:text-foreground md:text-xs"
              >
                Already have an acount?
              </Link>
            </div>
            <AuthenticationStrategy />
            <p className="px-4 text-center text-sm md:text-xs text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpDemo
