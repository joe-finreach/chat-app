import React from "react";

export const ChatInput = ({ sendMessage }) => (
  <form onSubmit={sendMessage}>
    <label>
      Message:
      <input type="text" data-id="message-input" />
    </label>
    <button type="submit" data-id="chat-input-submit">Send</button>
  </form>
);
