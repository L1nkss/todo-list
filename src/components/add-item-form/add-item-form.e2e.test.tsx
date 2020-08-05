import AddItemForm from "@components/add-item-form/add-item-form";
import { shallow } from "enzyme";

describe("Testing AddItemForm component", () => {
  it("Submut shouldn't work without value from input", () => {
    const mockSubmit = { preventDefault: jest.fn() };
    const addItem = jest.fn();
    const wrapper = shallow(<AddItemForm addItem={addItem} />);

    wrapper.find("form").simulate("submit", mockSubmit);
    // Не должно быть вызова функции
    expect(addItem).toHaveBeenCalledTimes(0);
  });
  it("Submut should work with some value from input", () => {
    const mockSubmit = { preventDefault: jest.fn() };
    const addItem = jest.fn();
    const wrapper = shallow(<AddItemForm addItem={addItem} />);

    wrapper.setState({ name: "Some value" });

    wrapper.find("form").simulate("submit", mockSubmit);
    // Не должно быть вызова функции
    expect(addItem).toHaveBeenCalledTimes(1);
  });
});
