import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const AuthContext = createContext();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const getProfile = (displayName, imgUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: imgUrl,
    });
  };
  const logOut = () => {
    return signOut(auth);
  };
  const value = {
    user,
    loading,
    setLoading,
    signUp,
    signIn,
    getProfile,
    logOut,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
