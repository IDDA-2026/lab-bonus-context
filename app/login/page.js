"use client";
import { useUser } from "../context/UserContext";
import { useRouter } from "next/navigation";

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
