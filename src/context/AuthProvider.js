import React, { createContext, useState } from "react";

const AuthProvider = ({ children }) => {
  const AuthContext = createContext();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const value = {
    user,
    loading,
    setLoading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
