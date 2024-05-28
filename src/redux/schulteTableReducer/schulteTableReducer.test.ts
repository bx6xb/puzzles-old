import {
  setGridSize,
  initialState,
  schulteTableReducer,
  setBestRecord,
  setCurrentNumber,
  setHintsMode,
  setTime,
  setState,
  SchulteTableState,
  setCells,
  setShuffleMode,
  startGame,
  finishGame,
} from "./schulteTableReducer"

test("state should be set", () => {
  const newState = schulteTableReducer({} as SchulteTableState, setState({ state: initialState }))

  expect(Object.keys(newState).length).toBe(9)
  expect(newState.gridSize).toBe(initialState.gridSize)
  expect(newState.bestRecords).toBe(initialState.bestRecords)
  expect(newState.isHintsMode).toBe(initialState.isHintsMode)
  expect(newState.currentNumber).toBe(initialState.currentNumber)
  expect(newState.cells).toBe(initialState.cells)
  expect(newState.time).toBe(initialState.time)
  expect(newState.timeIsRunning).toBe(initialState.timeIsRunning)
  expect(newState.messageText).toBe(initialState.messageText)
  expect(newState.isShuffleMode).toBe(initialState.isShuffleMode)
})
test("grid size should be changed", () => {
  const gridSize = 7
  const newState = schulteTableReducer(initialState, setGridSize({ gridSize }))

  expect(newState.gridSize).toBe(gridSize)
})
test("best records should be changed", () => {
  const time = 3.25
  const newState = schulteTableReducer({ ...initialState, time }, setBestRecord())

  expect(newState.bestRecords).not.toBe(initialState.bestRecords)
  expect(newState.bestRecords["3"]).toBe(time)
})
test("hints mode value should be changed", () => {
  const isHintsMode = true
  const newState = schulteTableReducer(initialState, setHintsMode({ isHintsMode }))

  expect(newState.isHintsMode).toBe(isHintsMode)
})
test("current number should be changed", () => {
  const currentNumber = 5
  const newState = schulteTableReducer(initialState, setCurrentNumber({ currentNumber }))

  expect(newState.currentNumber).toBe(currentNumber)
})
test("cells should be set", () => {
  let newState = schulteTableReducer(initialState, setCells())
  expect(newState.cells.length).toBe(9)

  newState = schulteTableReducer({ ...initialState, gridSize: 5 }, setCells())
  expect(newState.cells.length).toBe(25)
})
test("time should be changed", () => {
  const time = 2.15
  const newState = schulteTableReducer(initialState, setTime({ time }))

  expect(newState.time).toBe(time)
})
test("shuffle mode value should be changed", () => {
  const isShuffleMode = true
  const newState = schulteTableReducer(initialState, setShuffleMode({ isShuffleMode }))

  expect(newState.isShuffleMode).toBe(isShuffleMode)
})
test("start game: cells should be set, current number is 1, empty message text, time is 0, time is running is true", () => {
  const newState = schulteTableReducer(
    { ...initialState, gridSize: 4, messageText: "1.23s", time: 1.23, timeIsRunning: false },
    startGame(),
  )

  expect(newState.cells.length).toBe(16)
  expect(newState.currentNumber).toBe(1)
  expect(newState.messageText).toBe("")
  expect(newState.time).toBe(0)
  expect(newState.timeIsRunning).toBeTruthy()
})
test("finish game: time is running is false, current number is 0, empty message text", () => {
  const newState = schulteTableReducer(
    { ...initialState, timeIsRunning: true, currentNumber: 9, messageText: "3.24" },
    finishGame(),
  )

  expect(newState.timeIsRunning).toBeFalsy()
  expect(newState.currentNumber).toBe(0)
  expect(newState.messageText).toBe("")
})
