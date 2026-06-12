const STORAGE_KEY = "user";

export function getStoredUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return null;
    }

    const user = JSON.parse(raw);

    if (!user?.id) {
      return null;
    }

    return user;
  } catch {
    return null;
  }
}

export function saveStoredUser(user) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function clearStoredUser() {
  localStorage.removeItem(STORAGE_KEY);
}
