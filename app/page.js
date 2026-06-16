import Link from "next/link";
import { useUser } from "../context/UserContext";
import { useRouter } from "next/navigation";
export default function Home() {
  const { user } = useUser();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-16">
      <section className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-medium">Your profile</h2>
        {user ? (
          <div className="mt-2 text-sm text-zinc-600">
            <p>Email: {user.email}</p>
            <p>Address: {user.address.street}, {user.address.city}</p>
          </div>
        ) : (
          <p className="mt-2 text-sm text-zinc-600">
            You are not logged in. <a href="/login" className="font-medium underline">Log in</a>
          </p>
        )}
      </section>
    </main>
  );
}
export default function LoginPage() {
  const { login } = useUser();
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const id = e.target.userId.value;
    const success = await login(id);
    if (success) router.push("/");
  }

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <input name="userId" type="number" className="border p-2" placeholder="User ID (1-10)" />
      <button type="submit" className="bg-black text-white p-2">Log in</button>
    </form>
  );
}
