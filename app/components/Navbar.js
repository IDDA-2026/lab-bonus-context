"use client";

import Link from "next/link";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { user, logout } = useUser();

  return (
    <header className="w-full sticky top-0 z-50 glass-nav">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity duration-200">
          Hi, It&apos;s Me
        </Link>

        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-300">
              Hi, <span className="text-emerald-400 font-semibold">{user.name}</span>
            </span>
            <button
              type="button"
              onClick={logout}
              className="rounded-lg bg-rose-500/10 border border-rose-500/20 px-4 py-2 text-sm font-medium text-rose-400 transition-all hover:bg-rose-500/20 active:scale-95 duration-200 cursor-pointer"
            >
              Log out
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 transition-all hover:bg-emerald-400 active:scale-95 duration-200 shadow-md shadow-emerald-500/10 hover:shadow-emerald-400/20"
          >
            Log in
          </Link>
        )}
      </nav>
    </header>
  );
}
