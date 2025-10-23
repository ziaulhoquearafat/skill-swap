import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "./AuthContext";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createAccountFunc = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const ProfileUpdateFunc = (displayName, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  const googlePopupSignInFunc = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const LoginAccountFunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutAccountFunc = () => {
    setLoading(true);
    return signOut(auth);
  };

  const forgotPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      console.log(currUser);
      setUser(currUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createAccountFunc,
    ProfileUpdateFunc,
    googlePopupSignInFunc,
    LoginAccountFunc,
    user,
    setUser,
    loading,
    setLoading,
    signOutAccountFunc,
    forgotPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
