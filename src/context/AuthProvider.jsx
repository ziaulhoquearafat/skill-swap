import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "./AuthContext";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const createAccountFunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const ProfileUpdateFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  const googlePopupSignInFunc = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    createAccountFunc,
    ProfileUpdateFunc,
    googlePopupSignInFunc,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
