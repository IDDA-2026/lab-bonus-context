"use client";

import Link from "next/link";
import { useUser } from "./context/UserContext";

export default function Home() {
  const { user, logout } = useUser();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-16">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          {user ? `Welcome back, ${user.name.split(" ")[0]}!` : "Welcome back"}
        </h1>
        <p className="max-w-md text-base text-zinc-600">
          {user
            ? "Here are your account details."
            : "This little app wants to greet you by name and show your details. The trouble is, it has no idea who you are yet."}
        </p>
      </div>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-medium">Your profile</h2>

        {user ? (
          <div className="mt-4 flex flex-col gap-4">
            {/* Avatar + name row */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-xl font-bold text-white">
                {user.name.charAt(0)}
              </div>
              <div>
                <p className="text-lg font-semibold text-zinc-900">{user.name}</p>
                <p className="text-sm text-zinc-500">User #{user.id}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-zinc-100" />

            {/* Details grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-zinc-50 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">Email</p>
                <p className="mt-1 text-sm font-medium text-zinc-900 break-all">{user.email}</p>
              </div>
              <div className="rounded-xl bg-zinc-50 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">Address</p>
                <p className="mt-1 text-sm font-medium text-zinc-900">
                  {user.address.street}, {user.address.city}
                </p>
              </div>
            </div>

            {/* Bonus: Log out link from home page too */}
            <button
              onClick={logout}
              className="mt-2 self-start text-sm text-zinc-500 underline-offset-4 hover:text-zinc-900 hover:underline transition-colors"
            >
              Not you? Log out
            </button>
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
