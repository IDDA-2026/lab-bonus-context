"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../context/UserContext";

export default function LoginPage() {
  const [id, setId] = useState("");
  const router = useRouter();
  const { login, loading, error } = useUser();

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
      <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
        <h1 className="text-2xl font-bold text-zinc-900 mb-2">Welcome Back</h1>
        <p className="text-sm text-zinc-500 mb-6">Enter a user ID (1-10) to access your profile.</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-xs font-semibold text-zinc-600 uppercase tracking-wider block mb-2">
              User ID
            </label>
            <input
              type="number"
              min="1"
              max="10"
              placeholder="e.g. 1"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full border border-zinc-300 rounded-lg p-2.5 bg-zinc-50 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-100">
              {error}
            </p>
          )}

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-zinc-950 text-white p-2.5 rounded-lg font-medium hover:bg-zinc-800 disabled:bg-zinc-400 transition"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>
      </div>
    </main>
  );
}