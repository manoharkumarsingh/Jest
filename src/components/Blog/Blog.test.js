import Blog from "./Blog";
import { shallow } from "enzyme";

describe("Shallow Blog Page Test", () => {
  /**Find */
  it("find check", () => {
    let wrapper = shallow(<Blog />);
    expect(wrapper.find(".liCls").length).toBe(3);
  });

  /**At */
  it("At check", () => {
    let wrapper = shallow(<Blog />);
    expect(wrapper.find(".liCls").at(0).key()).toBe("angular");
  });

  /**child check */
  it("child check", () => {
    let wrapper = shallow(<Blog />);
    expect(wrapper.find(".numbers").childAt(0).type()).toBe("span");
  });

  /**Children length */
  it("Children length", () => {
    let wrapper = shallow(<Blog />);
    expect(wrapper.find("ul").children().length).toBe(3);
  });

  /**Has class test */
  it("Has class test", () => {
    let wrapper = shallow(<Blog />);
    expect(wrapper.find(".my-button").hasClass("disabled")).toBe(true);
  });

  /**Is test */
  it("Is Check", () => {
    let wrapper = shallow(<Blog />);
    expect(wrapper.is(".mainCls")).toBe(true);
  });
});
