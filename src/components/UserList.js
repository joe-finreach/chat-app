import React from "react";

function setActiveUser(showUserMessages, id) {
  return () => showUserMessages(id);
}

export const UserList = ({ users, showUserMessages }) => {
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
