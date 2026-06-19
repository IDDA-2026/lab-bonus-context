"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../context/UserContext";

export default function LoginPage() {
  const [id, setId] = useState("");
  const router = useRouter();
  // Bonus: get loading and error from context
  const { login, loading, error } = useUser();

  async function handleSubmit(e) {
    e.preventDefault();
    const success = await login(id);
    if (success) {
      router.push("/");
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center gap-6 px-6 py-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Log in</h1>
        <p className="text-sm text-zinc-600">
          Enter a user ID (try a number from 1 to 10) and we will pull up that
          account.
        </p>
      </div>

      {/* Bonus: Error message for bad IDs */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col gap-2 text-sm font-medium">
          User ID
          <input
            type="number"
            min="1"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="e.g. 1"
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-base outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 transition-all"
            required
            disabled={loading}
          />
        </label>

        {/* Bonus: disabled + loading state on button */}
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              {/* Spinner */}
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Looking you up…
            </>
          ) : (
            "Log in"
          )}
        </button>
      </form>
    </main>
  );
}
