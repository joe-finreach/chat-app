import React from "react";

export const MessageList = ({ messages }) => (
  <ul>
    {messages.map(({ id, userPrefix, text }) => {
      return (
        <li key={id} data-id="message-list-item">
          {userPrefix}: {text}
        </li>
      );
    })}
  </ul>
);
