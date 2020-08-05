import { shallow } from "enzyme";
import AppHeader from "@components/app-header/app-header";

describe("Testing AppHeader component", () => {
  it("Header should shows correct title 2 active 0 done", () => {
    const wrapper = shallow(<AppHeader active={2} done={0} />);
    const titleText = wrapper.find(".app-header__task-count");
    expect(titleText.text()).toEqual("2 осталось, 0 выполнен");
  });
  it("Header should shows correct title 0 active 25 done", () => {
    const wrapper = shallow(<AppHeader active={0} done={25} />);
    const titleText = wrapper.find(".app-header__task-count");
    expect(titleText.text()).toEqual("0 осталось, 25 выполнен");
  });
});
