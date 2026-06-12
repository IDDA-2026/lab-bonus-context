'use client'
import { useUser } from '../context/UserContext'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const { login } = useUser()
  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
    const id = e.target.userId.value
    await login(id)
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="userId" type="number" min="1" max="10" required />
      <button type="submit">Log in</button>
    </form>
  )
}