import { sum } from "../sum";

test("sum function should calculate the sum of two functions", () => {
  const result = sum(2, 3);
  //Assertion
  expect(result).toBe(5);
});
