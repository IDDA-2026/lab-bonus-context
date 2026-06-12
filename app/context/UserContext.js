"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
  }, []);

  async function login(id) {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );

      if (!response.ok) {
        throw new Error("Try a user ID from 1 to 10.");
      }

      const nextUser = await response.json();

      if (!nextUser.id) {
        throw new Error("Try a user ID from 1 to 10.");
      }

      setUser(nextUser);
      localStorage.setItem("user", JSON.stringify(nextUser));
      return nextUser;
    } catch (err) {
      setUser(null);
      setError(err.message || "Something went wrong. Try again.");
      throw err;
    } finally {
      setIsLoading(false);
    }
  }

  function logout() {
    setUser(null);
    setError("");
    localStorage.removeItem("user");
  }

  const value = useMemo(
    () => ({ user, login, logout, isLoading, error }),
    [user, isLoading, error],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used inside a UserProvider.");
  }

  return context;
}
