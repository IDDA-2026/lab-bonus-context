import {
  clearStoredUser,
  getStoredUser,
  saveStoredUser,
} from "./userStorage";

let user = null;
let hydrated = false;
const listeners = new Set();

function hydrate() {
  if (typeof window === "undefined" || hydrated) {
    return;
  }

  user = getStoredUser();
  hydrated = true;
}

function emitChange() {
  listeners.forEach((listener) => listener());
}

export function subscribeToUser(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getUserSnapshot() {
  hydrate();
  return user;
}

export function getServerUserSnapshot() {
  return null;
}

export function setUserInStore(nextUser) {
  user = nextUser;

  if (nextUser) {
    saveStoredUser(nextUser);
  } else {
    clearStoredUser();
  }

  emitChange();
}
