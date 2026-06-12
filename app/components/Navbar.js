'use client'
import { useUser } from '../context/UserContext'

export default function Navbar() {
  const { user } = useUser()

  return (
    <nav>
      {/* ...your existing nav markup... */}
      {user ? (
        <span>Hi, {user.name}</span>
      ) : (
        <a href="/login">Log in</a>
      )}
    </nav>
  )
}