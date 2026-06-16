"use client";

import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("app_user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (err) {
      console.error("Failed to restore user session from localStorage:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  async function login(id) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user from the server.");
      }
      
      const data = await response.json();

      if (!data || Object.keys(data).length === 0 || !data.id) {
        throw new Error("User not found. Please try an ID between 1 and 10.");
      }

      const parsedUser = {
        id: data.id,
        name: data.name,
        email: data.email,
        address: {
          street: data.address?.street || "",
          city: data.address?.city || "",
        },
      };

      setUser(parsedUser);
      localStorage.setItem("app_user", JSON.stringify(parsedUser));
      return parsedUser;
    } catch (err) {
      setError(err.message || "An unexpected error occurred during login.");
      throw err;
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setUser(null);
    setError(null);
    try {
      localStorage.removeItem("app_user");
    } catch (err) {
      console.error("Failed to clear user session from localStorage:", err);
    }
  }

  return (
    <UserContext.Provider value={{ user, loading, error, login, logout, setError }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
