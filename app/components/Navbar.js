"use client";

import Link from "next/link";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { user, logout } = useUser();

  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 backdrop-blur-md sticky top-0 z-50 transition-colors">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 hover:opacity-85 transition-opacity">
          Hi, It&apos;s Me
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                Hi, <span className="font-semibold text-zinc-900 dark:text-zinc-50">{user.name}</span>
              </span>
              <button
                onClick={logout}
                className="rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-1.5 text-sm font-medium text-zinc-900 dark:text-zinc-200 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 focus:outline-none cursor-pointer"
              >
                Log out
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-zinc-900 dark:bg-zinc-50 px-4 py-2 text-sm font-medium text-white dark:text-zinc-950 transition-opacity hover:opacity-90 cursor-pointer"
            >
              Log in
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
