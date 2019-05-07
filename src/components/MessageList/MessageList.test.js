import React from "react";
import { shallow } from "enzyme/build";
import { MessageList } from "./MessageList";

const prefixes = {
  bot: "bot",
  user: "user"
};

const messages = [
  { id: 1, userPrefix: prefixes.bot, text: "Don't shave Josip!!!" },
  { id: 2, userPrefix: prefixes.bot, text: "Don't shave Joe!!!" },
  { id: 3, userPrefix: prefixes.bot, text: "Don't shave Welson!!!" }
];

describe("Message List", () => {
  it("should render a list of messages", () => {
    const expected = true;
    const component = shallow(<MessageList messages={messages} />);
    const actual = component.exists('[data-id="message-list-item"]');
    expect(actual).toEqual(expected);
  });
});
