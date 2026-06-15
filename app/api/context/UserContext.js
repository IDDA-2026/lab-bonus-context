'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


useEffect(() => {
  const savedUser = localStorage.getItem('app_user');
  if (savedUser) {
    const timeoutId = setTimeout(() => {
      setUser(JSON.parse(savedUser));
    }, 0);

    return () => clearTimeout(timeoutId);
  }
}, []);

  const login = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await res.json();

      if (!data || Object.keys(data).length === 0) {
        setError('İstifadəçi tapılmadı! (1-10 arası ID yoxlayın)');
        setLoading(false);
        return false;
      }

      setUser(data);
      localStorage.setItem('app_user', JSON.stringify(data));
      setLoading(false);
      return true;
    } catch (err) {
      setError('Xəta baş verdi, yenidən yoxlayın.');
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('app_user');
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}