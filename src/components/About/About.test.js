import About from "./About";
import { shallow } from "enzyme";

describe("Shallow About Page Test", () => {
  /**Class Check */
  it("class check", () => {
    let wrapper = shallow(<About />);
    expect(wrapper.exists(".hlcls")).toEqual(true);
  });

  /**State check */
  it("State check", () => {
    let wrapper = shallow(<About />);
    expect(wrapper.state()).toEqual({ name: "Code improve", id: 111 });
  });

  /**Html Contains message */
  it("Html contains check", () => {
    let wrapper = shallow(<About />);
    expect(wrapper.contains(<div className="hlcls">Hello</div>)).toEqual(true);
  });

  /**Html only message */
  it("only msg check", () => {
    let wrapper = shallow(<About />);
    expect(wrapper.containsAllMatchingElements([<div>Hello</div>])).toEqual(
      true
    );
  });

  /**Html Any message */
  it("ANy msg check", () => {
    let wrapper = shallow(<About />);
    expect(
      wrapper.containsAnyMatchingElements([
        <div>Hello</div>,
        <div>Welcome</div>,
      ])
    ).toEqual(true);
  });
});
