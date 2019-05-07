import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ChatInput } from "./ChatInput";

storiesOf("Chat Input", module).add("default", () => <ChatInput sendMessage={action("clicked")} />);
