import {
  setGridSizeAC,
  initialState,
  schulteTableReducer,
  setBestRecordAC,
  setCurrentNumberAC,
  setHintsModeAC,
  startGameAC,
  setTimeAC,
  endGameAC,
} from "./schulteTableReducer"

test("grid size should be changed", () => {
  const newValue = 7
  const newState = schulteTableReducer(initialState, setGridSizeAC(newValue))

  expect(newState).not.toBe(initialState)
  expect(newState.gridSize).toBe(newValue)
  expect(initialState.gridSize).toBeGreaterThanOrEqual(2)
  expect(initialState.gridSize).toBeLessThanOrEqual(10)
})

test("best records should be changed", () => {
  const newValue = 3.25
  const newState = schulteTableReducer(initialState, setBestRecordAC(newValue))

  expect(newState).not.toBe(initialState)
  expect(newState.bestRecords).not.toBe(initialState.bestRecords)
  expect(newState.bestRecords["3x3"]).toBe(newValue)
})

test("current number should be changed", () => {
  const newValue = 5
  const newState = schulteTableReducer(initialState, setCurrentNumberAC(newValue))

  expect(newState).not.toBe(initialState)
  expect(newState.currentNumber).toBe(newValue)
})

test("hints mode value should be changed", () => {
  const newValue = true
  const newState = schulteTableReducer(initialState, setHintsModeAC(newValue))

  expect(newState).not.toBe(initialState)
  expect(newState.hintsMode).toBe(newValue)
})

test("start game: time should be equal 0, fields should be added, timeIsRunning value should be true and current number should be equal 1", () => {
  const transitState = schulteTableReducer(initialState, setCurrentNumberAC(5))
  const newState = schulteTableReducer(transitState, startGameAC())

  expect(newState).not.toBe(initialState)
  expect(newState.fields).not.toBe(initialState.fields)
  expect(newState.fields.length).toEqual(9)
  expect(newState.currentNumber).toEqual(1)
  expect(newState.time).toEqual(0)
  expect(newState.timeIsRunning).toBeTruthy()
})

test("end game: fields array should be empty and timeIsRunning value should be equal false", () => {
  const newState = schulteTableReducer(initialState, endGameAC())

  expect(newState).not.toBe(initialState)
  expect(newState.fields).not.toBe(initialState.fields)
  expect(newState.fields.length).toEqual(0)
  expect(newState.timeIsRunning).toBeFalsy()
})

test("time should be changed", () => {
  const newValue = 2
  const newState = schulteTableReducer(initialState, setTimeAC(newValue))

  expect(newState).not.toBe(initialState)
  expect(newState.time).toBe(newValue)
})
