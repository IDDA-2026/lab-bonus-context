"use client";

import Link from "next/link";
import { useUser } from "../context/UserContext";

export default function ProfileCard() {
  const { user } = useUser();

  if (!user) {
    return (
      <section className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-medium text-zinc-900">Your profile</h2>
        <p className="mt-2 text-sm text-zinc-600">
          You are not logged in.{" "}
          <Link href="/login" className="font-medium text-zinc-900 underline">
            Log in
          </Link>{" "}
          to see your details here.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-6">
      <h2 className="text-lg font-medium text-zinc-900">Your profile</h2>
      <dl className="mt-4 flex flex-col gap-3 text-sm">
        <div className="flex flex-col gap-0.5">
          <dt className="text-xs font-medium uppercase tracking-wide text-zinc-400">
            Email
          </dt>
          <dd className="text-zinc-900">{user.email}</dd>
        </div>
        <div className="flex flex-col gap-0.5">
          <dt className="text-xs font-medium uppercase tracking-wide text-zinc-400">
            Address
          </dt>
          <dd className="text-zinc-900">
            {user.address.street}, {user.address.city}
          </dd>
        </div>
      </dl>
    </section>
  );
}