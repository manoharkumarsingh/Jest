import * as math from "./Moc";

jest.mock("./Moc", () => {
  return {
    ...jest.requireActual("./Moc"),
    add: jest.fn(),
  };
});

describe("Shallow Home Page Test", () => {
  it("Moc add check", () => {
    math.add.mockImplementation(() => 25);
    console.log(math.add(12, 12));
  });
});
