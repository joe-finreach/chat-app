import React, { useContext } from "react";

import { ChatWindowContext } from "../ChatWindow/ChatWindow";

function setActiveUser(showUserMessages, id) {
  return () => showUserMessages(id);
}

export const UserList = ({ showUserMessages }) => {
  const { users } = useContext(ChatWindowContext);
  return (
    <ul id="users-list">
      {users.map(({ id, isOnline, userName }) => {
        return (
          <li key={id} data-id="users-list-item">
            <span className={isOnline ? "user-online" : "user-offline"}>
              <button onClick={setActiveUser(showUserMessages, id)} className="user-select">{userName}</button>
            </span>
          </li>
        );
      })}
    </ul>
  );
};
