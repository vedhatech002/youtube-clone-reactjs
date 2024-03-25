import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      console.log("API polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " ❤️🚀",
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="px-2 mx-2 border-black border w-full rounded-xl bg-slate-100 h-[400px] overflow-y-auto flex flex-col-reverse">
      {chatMessages.map((chat, index) => (
        <ChatMessage key={index} name={chat.name} message={chat.message} />
      ))}
    </div>
  );
};

export default LiveChat;
