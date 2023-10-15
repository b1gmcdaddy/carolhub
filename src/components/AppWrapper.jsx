import { auth } from "../firebase-config.js";
import { signOut } from "firebase/auth";
import "../App.css";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const AppWrapper = ({ children, isAuth, setIsAuth, setIsInChat }) => {
    
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setIsInChat(false);
  };

  return (
    <div className="App">
      <div className="app-header bg-green-900 w-full p-4 justify-center mb-52">
        <h1 className="text-white tracking-widest text-center
        text-4xl font-bold"> CAROLHUB </h1>
      </div>

      <div className="app-container">{children}</div>
      {isAuth && (
        <div className="sign-out">
          <button onClick={signUserOut}> Sign Out</button>
        </div>
      )}
    </div>
  );
};