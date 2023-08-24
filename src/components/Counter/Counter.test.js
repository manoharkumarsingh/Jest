import Counter from "./Counter";
import { shallow, mount } from "enzyme";
import Table from "./Table";

describe.skip("Counter Page Test", () => {
  it("Click count", () => {
    let wrapper = shallow(<Counter />);
    wrapper.find("button").simulate("click");
    expect(wrapper.find(".clicks-1").length).toEqual(1);
  });

  it("Click 3 count", () => {
    let wrapper = shallow(<Counter />);
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    expect(wrapper.find(".clicks-2").length).toEqual(1);
  });
  /**Child component  */
  it("Dive", () => {
    let wrapper = shallow(<Counter />);
    expect(wrapper.find(Table).dive().find(".custom-border").length).toEqual(1);
  });

  /**Child component  */
  it("Snapshot 1", () => {
    let wrapper = shallow(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Mount vs shallow", () => {
  it("Full rendering", () => {
    let wrapper = mount(<Counter />);
    // console.log(wrapper.debug());
  });
});
