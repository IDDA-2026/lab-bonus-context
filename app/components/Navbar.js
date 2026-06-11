"use client";

import Link from "next/link";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { user, logout } = useUser();

  return (
    <header className="w-full border-b border-zinc-800 bg-zinc-950">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          Hi, It&apos;s Me
        </Link>

        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-zinc-300">
              Hi, {user.name}
            </span>
            <button
              onClick={logout}
              className="rounded-full border border-zinc-600 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800"
            >
              Log out
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition-opacity hover:opacity-90"
          >
            Log in
          </Link>
        )}
      </nav>
    </header>
  );
}