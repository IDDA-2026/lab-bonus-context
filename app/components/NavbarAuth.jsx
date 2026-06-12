"use client";

import Link from "next/link";
import { useUser } from "@/context/UserContext";

export default function NavbarAuth() {
  const { user, logout } = useUser();

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-zinc-700">
          Hi, {user.name}
        </span>
        <button
          type="button"
          onClick={logout}
          className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition-opacity hover:opacity-90"
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
    >
      Log in
    </Link>
  );
}
