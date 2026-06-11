"use client";

import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function login(id) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await res.json();

      // API returns {} for non-existent IDs
      if (!data.id) {
        setError("No user found with that ID. Try a number from 1 to 10.");
        setLoading(false);
        return false;
      }

      setUser(data);
      setLoading(false);
      return true;
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
      return false;
    }
  }

  function logout() {
    setUser(null);
    setError(null);
  }

  return (
    <UserContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used inside a UserProvider");
  return ctx;
}