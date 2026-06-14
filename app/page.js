"use client";

import { useUser } from "./context/UserContext";
import Link from "next/link";

export default function Home() {
  const { user } = useUser();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-16">
      <section className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        {!user ? (
          <div className="text-center py-6">
            <h2 className="text-xl font-semibold text-zinc-900 mb-2">You are not logged in</h2>
            <p className="text-zinc-500 mb-4">Please log in to view your personalized dashboard and profile details.</p>
            <Link 
              href="/login" 
              className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Go to Log in
            </Link>
          </div>
        ) : (
          <div>
            <div className="border-b border-zinc-100 pb-4 mb-6">
              <h2 className="text-2xl font-bold text-zinc-900">User Profile</h2>
              <p className="text-sm text-zinc-500">Welcome back, {user.name}!</p>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1">Email Address</span>
                <span className="text-zinc-800 font-medium">{user.email}</span>
              </div>
              
              <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1">Location</span>
                <span className="text-zinc-800 font-medium">
                  {user.address?.street}, {user.address?.city}
                </span>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}