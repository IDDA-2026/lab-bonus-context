"use client";

import Link from "next/link";
import { useUser } from "./context/UserContext";

export default function Home() {
  const { user } = useUser();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-16">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">Welcome back</h1>
        <p className="max-w-md text-base text-zinc-600">
          This little app wants to greet you by name and show your details. The
          trouble is, it has no idea who you are yet.
        </p>
      </div>

      {/*
        This is the profile card. Once the user is logged in, it should show
        their email and their address (street and city only). For now there is
        no user anywhere, so we show the logged-out state.

        Reading the user means reading your context, which means this part has
        to become a Client Component. Building that piece is your job.
      */}
      <section className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-medium">Your profile</h2>
        {user ? (
          <div className="mt-4 space-y-2">
            <p className="text-sm text-zinc-600">
              <span className="font-medium text-zinc-900">Email:</span> {user.email}
            </p>
            <p className="text-sm text-zinc-600">
              <span className="font-medium text-zinc-900">Address:</span> {user.address.street}, {user.address.city}
            </p>
          </div>
        ) : (
          <p className="mt-2 text-sm text-zinc-600">
            You are not logged in.{" "}
            <Link href="/login" className="font-medium text-zinc-900 underline">
              Log in
            </Link>{" "}
            to see your details here.
          </p>
        )}
      </section>
    </main>
  );
}
