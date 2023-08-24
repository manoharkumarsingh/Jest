import util from "./util";

describe("Util File Test", () => {
  it("Sum function with valid test", () => {
    expect(util.sum(1, 2)).toBe(3);
  });

  it("Sum function with not", () => {
    expect(util.sum(1, 2)).not.toBe(4);
  });
  /**Object check */
  it("Object function", () => {
    expect(util.objectFunction(1, 2)).toEqual({ name: "Manohar", id: 111 });
  });
});
