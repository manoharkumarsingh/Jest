import News from "./news";
import { shallow } from "enzyme";

describe("Shallow Home Page Test", () => {
  /**Instance check test */
  it("Instance check", () => {
    let wrapper = shallow(<News />);
    let anyfn = wrapper.instance().checkBoxChecked();
    expect(anyfn).toEqual({ id: 3 });
  });
  /**Async Test */
  it("load data check", () => {
    let wrapper = shallow(<News />);
    return wrapper
      .instance()
      .loadData()
      .then((data) => {
        expect(data).toEqual({ me: 12 });
      });
  });

  it("Jest spyon componentDidMount", () => {
    jest.spyOn(News.prototype, "componentDidMount");
    shallow(<News />);
    expect(News.prototype.componentDidMount).toHaveBeenCalled();
    expect(News.prototype.componentDidMount).toHaveBeenCalledTimes(1);
    News.prototype.componentDidMount.mockRestore();
  });

  it("Understanding spyon", () => {
    let wrapper = shallow(<News></News>);
    let instance = wrapper.instance();
    jest.spyOn(instance, "func");
    wrapper.find("button").simulate("click");
    expect(instance.func).toHaveBeenCalled();
    expect(instance.func).toHaveBeenCalledWith(90, 80);
  });
  it("State check", () => {
    let wrapper = shallow(<News></News>);
    return wrapper
      .instance()
      .loadData()
      .then((data) => {
        expect(data).toEqual({ me: 12 });
        expect(wrapper.state()).toEqual({ newscount: 50 });
      });
  });

  it("Props check", () => {
    let wrapper = shallow(<News></News>);
    let inputProp = wrapper.find("input").props();
    let match = {
      type: "text",
      id: "firstname",
      value: "codeimprove",
      name: "firstname",
    };
    expect(inputProp).toEqual(match);
  });
});
