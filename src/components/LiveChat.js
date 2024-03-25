import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [postMessage, setPostMessage] = useState("");

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
    }, 2500);

    return () => clearInterval(i);
  }, []);

  return (
    <section className=" mx-2">
      <div className="px-2 border-black border-l border-r border-t w-full rounded-t-xl bg-slate-100 h-[350px] overflow-y-auto flex flex-col-reverse relative">
        {chatMessages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      <form
        className="px-2 py-2 bg-slate-100 flex gap-2 border-black border-l border-r border-b rounded-b-xl "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "vijay", message: postMessage }));
          setPostMessage("");
        }}
      >
        <input
          type="text"
          placeholder="message"
          className="w-full py-1 px-4 rounded-full"
          value={postMessage}
          onChange={(e) => {
            setPostMessage(e.target.value);
          }}
        />
        <button className="bg-[#e5e5e5] rounded-full px-4">▶send</button>
      </form>
    </section>
  );
};

export default LiveChat;
