import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function Login() {
    setUser(true);
  }

  async function logout() {
    localStorage.clear();
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, Login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
