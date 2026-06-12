'use client'
import { useUser } from './context/UserContext'

export default function HomePage() {
  const { user } = useUser()

  return (
    <main>
      {user ? (
        <div>
          <p>{user.email}</p>
          <p>{user.address.street}, {user.address.city}</p>
        </div>
      ) : (
        <p>Not logged in.</p>
      )}
    </main>
  )
}