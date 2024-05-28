import { timeFormatter } from "./timeFormatter"

test("time should be formatted", () => {
  let formattedTime = timeFormatter(48.23)
  expect(formattedTime).toBe("48.23s")

  formattedTime = timeFormatter(123.45)
  expect(formattedTime).toBe("2:03")

  formattedTime = timeFormatter(80.42)
  expect(formattedTime).toBe("1:20")
})
