"use client";

import Link from "next/link";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { user, logout } = useUser();

  return (
    <header className="w-full border-b border-zinc-200 bg-white">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-900">
          Hi, It&apos;s Me
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              {/* İstifadəçi giriş edibsə adı görsənir */}
              <span className="text-sm font-medium text-zinc-700">Hi, {user.name}</span>
              <button
                onClick={logout}
                className="text-sm font-medium text-red-600 hover:underline"
              >
                Log out
              </button>
            </>
          ) : (
            /* Giriş edilməyibsə sənin orijinal Log in düymən */
            <Link
              href="/login"
              className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Log in
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}