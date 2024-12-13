import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../Firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create or register user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // create user with GOOGLE
  const createGoogleUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("state captured", currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // auth object
  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    createGoogleUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
