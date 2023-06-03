import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState('not-authenticated');
  const [username, setUsername] = useState('');

  const updateAuthStatus = (status, name) => {
    setAuthStatus(status);
    setUsername(name)
  };

  useEffect(() => {
    // Recuperar el estado de autenticación desde el almacenamiento local al cargar la página
    const storedAuthStatus = localStorage.getItem('authStatus');
    const storedUsername = localStorage.getItem('username');

    if (storedAuthStatus && storedUsername) {
      setAuthStatus(storedAuthStatus);
      setUsername(storedUsername);
    }
  }, []);

  useEffect(() => {
    // Guardar el estado de autenticación en el almacenamiento local al cambiar
    localStorage.setItem('authStatus', authStatus);
    localStorage.setItem('username', username);
  }, [authStatus, username]);

  return (
    <AuthContext.Provider value={{ authStatus, username, updateAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};