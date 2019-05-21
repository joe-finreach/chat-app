import React, { useContext } from "react";
import { ChatWindowContext } from "../ChatWindow/ChatWindow";

export const MessageList = () => {
  const { messages } = useContext(ChatWindowContext);
  return (
    <ul>
      {messages.map(({ id, userName, text }) => {
        return (
          <li key={id} data-id="message-list-item">
            {userName}: {text}
          </li>
        );
      })}
    </ul>
  );
};
