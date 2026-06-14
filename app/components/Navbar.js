"use client";

import Link from "next/link";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { user, logout } = useUser();

  return (
    <header className="w-full border-b border-zinc-200 bg-white shadow-sm">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-indigo-600 hover:text-indigo-700 transition">
          InternalApp
        </Link>

        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-zinc-700">
              Hi, <strong className="text-zinc-950">{user.name}</strong>
            </span>
            <button 
              onClick={logout}
              className="text-sm px-3 py-1.5 border border-zinc-300 rounded-lg hover:bg-zinc-50 font-medium transition"
            >
              Log out
            </button>
          </div>
        ) : (
          <Link 
            href="/login" 
            className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Log in
          </Link>
        )}
      </nav>
    </header>
  );
}