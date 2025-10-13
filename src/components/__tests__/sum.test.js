import { sum } from "../sum";

test("sum function should calculate the sum of two functions", () => {
  const result = sum(2, 3);
  console.log(typeof result);
  //Assertion
  expect(result).toBe(5);
});
