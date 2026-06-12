"use client";

import Link from "next/link";
import { useUser } from "./context/UserContext";

export default function Home() {
  const { user } = useUser();

  const greetingName = user ? user.name.split(" ")[0] : "";

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-16">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
          {user ? `Welcome back, ${greetingName}!` : "Welcome back"}
        </h1>
        <p className="max-w-md text-base text-slate-400">
          This secure portal uses React Context to share your profile across components efficiently.
        </p>
      </div>

      <section className="glass-card rounded-2xl p-8 relative overflow-hidden">
        {/* Subtle glowing highlight */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
          <h2 className="text-xl font-bold text-slate-100 tracking-tight flex items-center gap-2">
            <svg
              className="h-5 w-5 text-emerald-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            User Profile Card
          </h2>
          {user && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Logged In
            </span>
          )}
        </div>

        {user ? (
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="mt-1 rounded-lg bg-emerald-500/10 p-2 text-emerald-400 border border-emerald-500/20">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Address</span>
                <p className="text-sm font-medium text-slate-200">{user.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="mt-1 rounded-lg bg-indigo-500/10 p-2 text-indigo-400 border border-indigo-500/20">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Address Location</span>
                <p className="text-sm font-medium text-slate-200">
                  {user.address.street}, {user.address.city}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="rounded-full bg-slate-900 border border-slate-850 p-4 mb-4 text-slate-400">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-slate-300">Access Restricted</h3>
            <p className="mt-1 text-sm text-slate-400 max-w-sm">
              Please sign in using your User ID to retrieve and display your personal details.
            </p>
            <Link
              href="/login"
              className="mt-5 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-2.5 text-sm font-medium text-slate-950 hover:bg-emerald-400 active:scale-95 transition-all duration-200 shadow-md shadow-emerald-500/10 hover:shadow-emerald-400/20 font-semibold cursor-pointer"
            >
              Log In
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
