import React, { useState, useEffect } from "react";
import { Chat } from "./components/Chat";
import { Auth } from "./components/Auth";
import { AppWrapper } from "./components/AppWrapper";
import Cookies from "universal-cookie";
import "./App.css";
import ParticleBg from "./components/ParticleBg";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");
  const [nickname, setNickname] = useState("");

  if (!isAuth) {
    return (
      <AppWrapper
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        setIsInChat={setIsInChat}
      >
        <Auth setIsAuth={setIsAuth} />
      </AppWrapper>
    );
  }

  return (
    <AppWrapper isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={setIsInChat}>
      {!isInChat ? (
        <div className="room bg-custom-bg4 p-8 shadow-xl shadow-orange-500/50 
        rounded-xl">
          <label className="font-bold text-xl mb-1 text-white"> Enter nickname: </label>
          <input
            type="text"
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
            className="focus:outline-none focus:border-slate-500 
          focus:ring-1 focus:ring-slate-500 text-base"
            placeholder="'Anonymous' if blank"
          />
          <label className="font-bold text-xl mb-1 text-white"> Type room name: </label>
          <input onChange={(e) => setRoom(e.target.value)} value={room} className="focus:outline-none focus:border-slate-500 
          focus:ring-1 focus:ring-slate-500" placeholder="Enter Room Name"/>
          <button
            onClick={() => {
              if (room.trim() !== "") { 
                setIsInChat(true);
              } else {
                alert("Room Name CANNOT be blank.");
              }}}
            className="bg-custom-bg text-black
            hover:bg-orange-400 font-bold"
          >Enter Chat
          </button>
        </div>
      ) : (
        <Chat room={room} setIsInChat={setIsInChat} nickname={nickname} />
      )}
    </AppWrapper> 
  );
}

export default App;