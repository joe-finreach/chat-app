import React from "react";
import { shallow } from "enzyme";
import { ChatInput } from "./ChatInput";

describe("Chat Window", () => {
  it("should display a message input ", () => {
    const expected = true;
    const component = shallow(<ChatInput />);
    const actual = component.exists('[data-id="message-input"]');
    expect(actual).toEqual(expected);
  });
  it("should run a function on submit", () => {
    const mock = jest.fn();
    const component = shallow(<ChatInput sendMessage={mock} />);
    const sut = component.find('form');
    sut.simulate("submit");
    expect(mock).toBeCalled();
  });
});
