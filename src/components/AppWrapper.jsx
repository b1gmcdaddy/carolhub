import { auth } from "../firebase-config.js";
import { signOut } from "firebase/auth";
import "../App.css";
import Cookies from "universal-cookie";
import ParticleBg from "./ParticleBg.jsx";

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
      <ParticleBg />
      <div className="app-header bg-custom-bg4 w-full p-4 justify-center">
        <h1 className="text-white text-center
        text-4xl font-bold"> Carol <span className="rounded-sm bg-custom-bg px-1 text-black">hub</span> </h1>
      </div>
      {/*Only when logged in*/}
      <div className="app-container">{children}</div>
      {isAuth && (
        <div className="sign-out">
          <button onClick={signUserOut} className="bg-custom-bg4 text-white
      w-24 h-12 rounded-lg text-lg absolute bottom-6 right-6 hover:bg-custom-bg3"> Logout</button>
        </div>
      )}
    </div>
  );
};