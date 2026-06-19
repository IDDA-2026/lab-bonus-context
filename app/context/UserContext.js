"use client";

import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Bonus: Restore user from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("loggedInUser");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {
        localStorage.removeItem("loggedInUser");
      }
    }
  }, []);

  async function login(id) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await res.json();

      // Bonus: Handle invalid ID (API returns {} for non-existent IDs)
      if (!data || !data.id) {
        setError(`No user found with ID ${id}. Try a number from 1 to 10.`);
        setLoading(false);
        return false;
      }

      setUser(data);
      // Bonus: Persist to localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(data));
      setLoading(false);
      return true;
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
      return false;
    }
  }

  // Bonus: Logout clears state and localStorage
  function logout() {
    setUser(null);
    setError(null);
    localStorage.removeItem("loggedInUser");
  }

  return (
    <UserContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used inside <UserProvider>");
  return ctx;
}
