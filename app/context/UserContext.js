"use client";

import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Stretch Goal: Persist user state on page refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await res.json();

      // Guard condition: JSONPlaceholder returns an empty object {} for non-existing IDs
      if (!data || !data.id) {
        setError("User not found! Please enter a valid ID between 1 and 10.");
        setUser(null);
        setLoading(false);
        return false;
      }

      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      setLoading(false);
      return true;
    } catch (err) {
      setError("An error occurred. Please try again.");
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);