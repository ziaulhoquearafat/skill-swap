import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "./AuthContext";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createAccountFunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const ProfileUpdateFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  const googlePopupSignInFunc = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const LoginAccountFunc = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutAccountFunc = () => {
    return signOut(auth);
  };

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
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
