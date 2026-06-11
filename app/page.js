import Link from "next/link";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-16">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">Welcome back</h1>
        <p className="max-w-md text-base text-zinc-600">
          This little app wants to greet you by name and show your details. The
          trouble is, it has no idea who you are yet.
        </p>
      </div>

      {/*
        ProfileCard is a Client Component that reads the user from context.
        The rest of this page stays a Server Component.
      */}
      <ProfileCard />
    </main>
  );
}