"use client";

import Link from "next/link";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { user, logout } = useUser();

  return (
    <header className="w-full border-b border-zinc-200 bg-white shadow-sm">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-900 hover:text-zinc-600 transition-colors">
          Hi, It&apos;s Me
        </Link>

        {user ? (
          <div className="flex items-center gap-4">
            {/* Greeting with avatar initial */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white">
                {user.name.charAt(0)}
              </div>
              <span className="text-sm font-medium text-zinc-700">
                Hi, <span className="text-zinc-900 font-semibold">{user.name}</span>
              </span>
            </div>
            {/* Bonus: Log out button */}
            <button
              onClick={logout}
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-all hover:border-zinc-400 hover:text-zinc-900"
            >
              Log out
            </button>
          </div>
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
