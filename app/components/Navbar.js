import Link from "next/link";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { user, logout } = useUser();

  return (
    <header className="w-full border-b border-zinc-200 bg-white">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">Hi, It&apos;s Me</Link>
        {user ? (
          <div className="flex items-center gap-4 text-sm">
            <span>Hi, {user.name}</span>
            <button onClick={logout} className="underline">Log out</button>
          </div>
        ) : (
          <Link href="/login" className="rounded-full bg-zinc-900 px-4 py-2 text-white text-sm">Log in</Link>
        )}
      </nav>
    </header>
  );
}