import React from "react";
import { ChatInput } from "../ChatInput/ChatInput";
import { MessageList } from "../MessageList/MessageList";
import { UserList } from "../UserList/UserList";

export const ChatWindow = ({}) => (
  <div>
    <div>
      <UserList />
    </div>
    <div>
      <MessageList />
      <ChatInput />
    </div>
  </div>
);
