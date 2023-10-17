import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import ParticleBg from "./ParticleBg.jsx";
const cookies = new Cookies();

export const Auth = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="auth text-center">
      <ParticleBg />
      <p className="font-medium text-lg text-white"> Sign In With Google To Continue </p>
      <button onClick={signInWithGoogle} className="bg-custom-bg3 text-white mt-3
      w-48 h-12 rounded-lg font-medium text-lg hover:bg-custom-bg hover:text-black"> Sign In With Google </button>
    </div>
  );
};