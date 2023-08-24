import Home from "./Home";
import { shallow } from "enzyme";

describe("Shallow Home Page Test", () => {
  it("Home component class test", () => {
    let wrapper = shallow(<Home />);
    // console.log(wrapper.debug());
    expect(wrapper.exists(".home")).toEqual(true);
  });
});
