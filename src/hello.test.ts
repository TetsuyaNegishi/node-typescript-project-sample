import { hello } from "./hello";

test("hello method", () => {
  const actual = hello("world");
  const extected = "Hello, world!";
  expect(actual).toBe(extected);
});
