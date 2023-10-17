import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase-config";
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export const Chat = ({ room, setIsInChat, nickname }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log(messages);
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: nickname || "anonymous",
      userPhotoURL: auth.currentUser.photoURL,
      room,
    });
    setNewMessage("");
  };  

  const backRoomChoice = async () => {
    setIsInChat(false);
  };

  return (
    
    <div className="flex-col font-sans w-full bg-white-smoke rounded-lg">
      <div className="p-3 bg-custom-bg3 relative text-center w-full flex">
        <h1 className="font-bold text-white text-xl">Welcome to: {room.toUpperCase()}</h1>
        <FontAwesomeIcon icon={faRightFromBracket} size="xl" className="text-hub-color 
        cursor-pointer absolute right-3" onClick={backRoomChoice}
        title="Leave Room"/>
      </div>
      <div className="p-4">
        {messages.map((message) => (
          <div key={message.id} className="flex items-center mb-2.5">
            <img src={message.userPhotoURL} alt={message.user} className="user-photo w-8
            h-8 rounded-full" />
            <span className="user mx-2 font-bold">{message.user}:</span> 
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="new-message-form w-full flex relative p-2.5">
        <input
          type="text"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
          className="new-message-input flex-1 border-none 
          outline-none bg-transparent p-2.5"
          placeholder="Type your message here..."
        />
        <button type="submit" className="send-button text-black font-semibold
        bg-none outline-none text-base">
          Send
        </button>
      </form>
    </div>
    
  );
};