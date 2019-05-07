import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { UserList } from "./UserList";

const users = [
  { id: 1, isOnline: true, userName: "Josip the Bear Brcina!!!" },
  { id: 2, isOnline: false, userName: "Welson Roberto the Rabbit Costa Jr!!!" },
  { id: 3, isOnline: true, userName: "Joe the Cheese Crick!!!" }
];

storiesOf("User List", module).add("default", () => <UserList users={users} showUserMessages={action("clicked")} />);
