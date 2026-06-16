"use client";

import Link from "next/link";
import { useUser } from "./context/UserContext";

export default function Home() {
  const { user, loading } = useUser();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-16">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {user ? `Welcome back, ${user.name.split(' ')[0]}!` : "Welcome back"}
        </h1>
        <p className="max-w-md text-base text-zinc-600 dark:text-zinc-400">
          This little app wants to greet you by name and show your details. The
          trouble is, it has no idea who you are yet.
        </p>
      </div>

      {loading ? (
        <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 animate-pulse">
          <div className="h-6 w-32 rounded bg-zinc-200 dark:bg-zinc-800"></div>
          <div className="mt-4 space-y-3">
            <div className="h-4 w-48 rounded bg-zinc-200 dark:bg-zinc-800"></div>
            <div className="h-4 w-64 rounded bg-zinc-200 dark:bg-zinc-800"></div>
          </div>
        </section>
      ) : user ? (
        <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-800 pb-3">
            Your profile
          </h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block mb-1">
                Email Address
              </span>
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {user.email}
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block mb-1">
                Location
              </span>
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {user.address?.street}, {user.address?.city}
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
            Your profile
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            You are not logged in.{" "}
            <Link href="/login" className="font-medium text-zinc-900 dark:text-zinc-100 underline hover:opacity-85 transition-opacity">
              Log in
            </Link>{" "}
            to see your details here.
          </p>
        </section>
      )}
    </main>
  );
}
