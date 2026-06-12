import Link from "next/link";
import NavbarAuth from "./NavbarAuth";

export default function Navbar() {
  return (
    <header className="w-full border-b border-zinc-200 bg-white">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Hi, It&apos;s Me
        </Link>

        <NavbarAuth />
      </nav>
    </header>
  );
}
