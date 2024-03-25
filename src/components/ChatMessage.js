import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex  flex-row p-2  ">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.217 19.332A6.982 6.982 0 0 0 12 17c-2.073 0-3.935.9-5.217 2.332M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18m0-7a3 3 0 1 1 0-6a3 3 0 0 1 0 6"
          ></path>
        </svg>
      </span>
      <h4 className="font-bold px-2 text-sm">{name}</h4>
      <p className="text-sm text-wrap">{message}</p>
    </div>
  );
};

export default ChatMessage;
