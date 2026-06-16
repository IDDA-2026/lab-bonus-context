"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../context/UserContext";

export default function LoginPage() {
  const [id, setId] = useState("");
  const { login, loading, error, setError } = useUser();
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!id.trim()) return;

    try {
      await login(id.trim());
      router.push("/");
    } catch (err) {
      console.error("Login attempt failed:", err);
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center gap-6 px-6 py-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Log in</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Enter a user ID (try a number from 1 to 10) and we will pull up that
          account.
        </p>
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-950/20 p-4 text-sm text-red-600 dark:text-red-400">
          <p className="font-medium">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          User ID
          <input
            type="number"
            min="1"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
              if (error) setError(null);
            }}
            placeholder="e.g. 1"
            disabled={loading}
            className="rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-base outline-none focus:border-zinc-900 dark:focus:border-zinc-100 text-zinc-900 dark:text-zinc-50 transition-colors disabled:opacity-60"
            required
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-zinc-900 dark:bg-zinc-50 px-5 py-2.5 text-sm font-medium text-white dark:text-zinc-950 transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white dark:text-zinc-950" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Logging in...
            </>
          ) : (
            "Log in"
          )}
        </button>
      </form>
    </main>
  );
}
