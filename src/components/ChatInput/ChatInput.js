import React from "react";

export const ChatInput = ({ sendMessage }) => (
  <form onSubmit={sendMessage} id="message-input">
    <label>
      <input type="text" data-id="message-input" />
    </label>
    <button type="submit" data-id="chat-input-submit">Send</button>
  </form>
);
