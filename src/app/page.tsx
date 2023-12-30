"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RVz8iUmEjX1
 */
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
export default function Component() {
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-[#f9f9f9] px-4 py-8">
        <section className="mt-8 w-full max-w-xs">
          <h2 className="text-center text-3xl font-semibold">Sign In</h2>
          <p className="mt-2 text-center text-lg">
            Welcome back! Please sign in to continue.
          </p>
        </section>
        <section className="mt-8 w-full max-w-xs">
          <div className="flex flex-col space-y-4">
            <Button
              className="w-full"
              variant="outline"
              onClick={() =>
                signIn("google", {
                  callbackUrl: "/protected",
                })
              }
            >
              Sign in with Google
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
