import React, { useContext } from "react";

import { ChatWindowContext } from "../ChatWindow/ChatWindow";

function setActiveUser(showUserMessages, id) {
  return () => showUserMessages(id);
}

export const UserList = ({ showUserMessages }) => {
  const { users } = useContext(ChatWindowContext);
  return (
    <ul>
      {users.map(({ id, isOnline, userName }) => {
        return (
          <li key={id} data-id="users-list-item">
            <span className={isOnline ? "user-online" : "user-offline"}>
              <button onClick={setActiveUser(showUserMessages, id)}>{userName}</button>{" "}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
