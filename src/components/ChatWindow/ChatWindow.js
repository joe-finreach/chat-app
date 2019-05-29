import React from "react";
import { ChatInput } from "../ChatInput/ChatInput";
import { MessageList } from "../MessageList/MessageList";
import { UserList } from "../UserList/UserList";

import { users } from "../../__mocks__/users";
import { messages } from "../../__mocks__/messages";

export const ChatWindowContext = React.createContext({ users, messages });

export const ChatWindow = ({}) => (
  <ChatWindowContext.Provider value={{ users, messages }}>
    <div id="chat-window">
      <div id="user-menu">
        <UserList showUserMessages={() => {}} />
      </div>
      <div>
        <MessageList />
        <ChatInput />
      </div>
    </div>
  </ChatWindowContext.Provider>
);
