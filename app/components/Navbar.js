"use client";

import Link from "next/link";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { user } = useUser();

  return (
    <header className="w-full border-b border-zinc-200 bg-white">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Hi, It&apos;s Me
        </Link>

        {/*
          When someone is logged in, this is where the greeting lives:
          something like "Hi, Leanne Graham". Right now the navbar has no idea
          who that is. Teaching it to read the user from your context is your job.
        */}
        {user ? (
          <div className="text-sm font-medium">Hi, {user.name}</div>
        ) : (
          <Link
            href="/login"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Log in
          </Link>
        )}
      </nav>
    </header>
  );
}
