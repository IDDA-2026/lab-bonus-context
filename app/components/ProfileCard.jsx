"use client";

import Link from "next/link";
import { useUser } from "@/context/UserContext";

export default function ProfileCard() {
  const { user } = useUser();

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-6">
      <h2 className="text-lg font-medium">Your profile</h2>

      {user ? (
        <dl className="mt-4 flex flex-col gap-3 text-sm">
          <div>
            <dt className="font-medium text-zinc-500">Email</dt>
            <dd className="mt-1 text-zinc-900">{user.email}</dd>
          </div>
          <div>
            <dt className="font-medium text-zinc-500">Address</dt>
            <dd className="mt-1 text-zinc-900">
              {user.address.street}, {user.address.city}
            </dd>
          </div>
        </dl>
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
  );
}
