import React from "react";
import { shallow } from "enzyme/build";
import { UserList } from "./UserList";

const users = [
  { id: 1, isOnline: true, userName: "Josip the Bear Brcina!!!" },
  { id: 2, isOnline: false, userName: "Welson Roberto the Rabbit Costa Jr!!!" },
  { id: 3, isOnline: true, userName: "Joe the Cheese Crick!!!" }
];

describe("Message List", () => {
  it("should render a list of users", () => {
    const expected = true;
    const component = shallow(<UserList users={users} />);
    const actual = component.exists('[data-id="users-list-item"]');
    expect(actual).toEqual(expected);
  });
  it("should show a user's online status", () => {
    const expected = 2;
    const component = shallow(<UserList users={users} />);
    const actual = component.find(".user-online").length;
    expect(actual).toEqual(expected);
  });
  it("should show the users messages ", () => {
    const mock = jest.fn();
    const component = shallow(<UserList users={users} showUserMessages={mock} />);
    const sut = component.find('[data-id="users-list-item"] button').first();
    sut.simulate("click");
    expect(mock).toBeCalled();
  });
});
