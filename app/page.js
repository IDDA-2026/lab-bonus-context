"use client";

import Link from "next/link";
import { useUser } from "./context/UserContext";

export default function Home() {
  const { user } = useUser();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-16">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Welcome back</h1>
        <p className="max-w-md text-base text-zinc-600">
          This little app wants to greet you by name and show your details. The
          trouble is, it has no idea who you are yet.
        </p>
      </div>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-medium text-zinc-900">Your profile</h2>
        
        {user ? (
          <div className="mt-4 flex flex-col gap-4 border-t border-zinc-100 pt-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block">Email</span>
              <p className="text-base font-medium text-zinc-800">{user.email}</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block">Address</span>
              <p className="text-base font-medium text-zinc-800">
                {user.address?.street}, {user.address?.city}
              </p>
            </div>
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