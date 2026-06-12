"use client";

import { useState, useSyncExternalStore } from "react";
import { fetchUser } from "@/services/fetchUser";
import {
  getServerUserSnapshot,
  getUserSnapshot,
  setUserInStore,
  subscribeToUser,
} from "@/services/userStore";
import { UserContext } from "./UserContext";

export function UserProvider({ children }) {
  const user = useSyncExternalStore(
    subscribeToUser,
    getUserSnapshot,
    getServerUserSnapshot,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function login(id) {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchUser(id);

      if (!data) {
        setError("User not found. Try an ID from 1 to 10.");
        return false;
      }

      setUserInStore(data);
      return true;
    } catch {
      setError("Something went wrong. Please try again.");
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  function logout() {
    setUserInStore(null);
    setError(null);
  }

  function clearError() {
    setError(null);
  }

  return (
    <UserContext.Provider
      value={{ user, login, logout, isLoading, error, clearError }}
    >
      {children}
    </UserContext.Provider>
  );
}
