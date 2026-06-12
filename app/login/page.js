"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../context/UserContext";

export default function LoginPage() {
  const [id, setId] = useState("");
  const router = useRouter();
  const { login, isLoading, error } = useUser();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await login(id);
      router.push("/");
    } catch {
      setId("");
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-6 px-6 py-16">
      <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
        {/* Subtle glowing highlight */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
            Log In
          </h1>
          <p className="text-sm text-slate-450 leading-relaxed">
            Enter a user ID (from <span className="text-emerald-400 font-semibold">1 to 10</span>) to fetch mock account details via JSONPlaceholder.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className="flex flex-col gap-2 text-sm font-semibold text-slate-300">
            User ID
            <div className="relative">
              <input
                type="number"
                min="1"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="e.g. 1"
                className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 text-base text-slate-100 outline-none transition-all placeholder:text-slate-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15"
                required
              />
            </div>
          </label>

          {error ? (
            <div className="flex items-start gap-2.5 rounded-lg border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-450">
              <svg
                className="h-5 w-5 shrink-0 text-rose-450"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>{error}</p>
            </div>
          ) : null}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/15 active:scale-98 disabled:cursor-not-allowed disabled:bg-slate-800 disabled:text-slate-500 disabled:shadow-none cursor-pointer"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-950"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Logging in...
              </>
            ) : (
              "Log in"
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
