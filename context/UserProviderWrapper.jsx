"use client";

import { UserProvider } from "./UserProvider";

export function UserProviderWrapper({ children }) {
  return <UserProvider>{children}</UserProvider>;
}
