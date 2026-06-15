"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../context/UserContext";

export default function LoginPage() {
  const [id, setId] = useState("");
  const { login, loading, error } = useUser(); 
    const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!id) return;

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

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col gap-2 text-sm font-medium">
          User ID
          <input
            type="number"
            min="1"
            max="10"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="e.g. 1"
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-base outline-none focus:border-zinc-900"
            required
            disabled={loading}
                      />
        </label>

        {error && <p className="text-sm text-red-600 font-medium">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Log in"}
        </button>
      </form>
    </main>
  );
}