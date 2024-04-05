import { createRandomNumberArray } from "./createRandomNumberArray"

test("array contains a certain number of non-repeating digits", () => {
  const min = 1
  const max = 9
  const length = 9

  const arr: number[] = createRandomNumberArray(min, max, length)

  expect(arr.length).toEqual(length)
  expect(arr.includes(min)).toBeTruthy()
  expect(arr.includes(max)).toBeTruthy()
  expect(arr.sort()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})
