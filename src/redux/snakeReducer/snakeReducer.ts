import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { GridCell } from "../../components/GameGrid/GameGrid"
import { getRandomNumber } from "../../utils/createRandomNumberArray/createRandomNumberArray"

export const oppositeKeys = {
  KeyS: "KeyW", // 87 - w (up direction)
  KeyD: "KeyA", // 65 - a (left direction)
  KeyW: "KeyS", // 83 - s (down direction)
  KeyA: "KeyD", // 68 - d (rigth direction)
} as const

// 87 = KeyW
// 65 = KeyA
// 83 = KeyS
// 68 = KeyD

export const initialState = {
  cells: [],
  xPos: 0,
  yPos: 2,
  snakePosition: [
    [0, 2],
    [0, 1],
    [0, 0],
  ],
  direction: "KeyS",
  isDirectionChanged: false,
  gridSize: 10,
  foodPosition: [],
  isFoodEaten: false,
  currentScore: 0,
  bestScore: 0,
  time: 0,
  isTimeRunning: false,
  messageText: "",
} as SnakeState

const slice = createSlice({
  name: "snake",
  initialState,
  reducers: {
    setCells(state) {
      const cells: GridCell[][] = Array(state.gridSize)
        .fill(null)
        .map((v, i) =>
          Array(state.gridSize)
            .fill(null)
            .map((v, index) => ({ id: +`${i}${index}`, content: `${i}${index}` })),
        )
      return { ...state, cells }
    },
    setXPos(state, action: PayloadAction<{ xPos: number }>) {
      return { ...state, xPos: action.payload.xPos }
    },
    setYPos(state, action: PayloadAction<{ yPos: number }>) {
      return { ...state, yPos: action.payload.yPos }
    },
    setDirection(state, action: PayloadAction<{ direction: DirectionValues }>) {
      return { ...state, direction: action.payload.direction }
    },
    setDirectionChanged(state, action: PayloadAction<{ directionChanged: boolean }>) {
      return { ...state, directionChanged: action.payload.directionChanged }
    },
    createFood(state) {
      let c = true
      while (c) {
        c = false
        const yPosFood: number = getRandomNumber(0, state.gridSize - 1)
        const xPosFood: number = getRandomNumber(0, state.gridSize - 1)

        state.snakePosition.forEach((val) => {
          const [y, x] = val
          if (y === yPosFood && x === xPosFood) {
            c = true
          }
        })

        if (!c) {
          state.foodPosition = [yPosFood, xPosFood]
          state.cells[yPosFood][xPosFood] = {
            ...state.cells[yPosFood][xPosFood],
            backgroundColor: "red",
          }
        }
      }
    },
    removeFood(state) {
      const [xPosFood, yPosFood] = state.foodPosition
      delete state.cells[xPosFood][yPosFood].backgroundColor
    },
    setFoodEaten(state, action: PayloadAction<{ isFoodEaten: boolean }>) {
      return { ...state, isFoodEaten: action.payload.isFoodEaten }
    },
    setCurrentScore(state, action: PayloadAction<{ currentScore: number }>) {
      return { ...state, currentScore: action.payload.currentScore }
    },
    setRecord(state) {
      if (state.currentScore > state.bestScore) {
        return { ...state, bestScore: state.currentScore }
      }
    },
    setTimeRunning(state, action: PayloadAction<{ isTimeRunning: boolean }>) {
      return { ...state, isTimeRunning: action.payload.isTimeRunning }
    },
    startGame(state) {
      return {
        ...state,
        currentScore: 0,
        xPos: 0,
        yPos: 2,
        snakePosition: [
          [2, 0],
          [1, 0],
          [0, 0],
        ],
        direction: "KeyS",
      }
    },
    removeSnakePosition(state) {
      return {
        ...state,
        snakePosition: state.snakePosition.slice(0, -1),
      }
    },
    addSnakePosition(state, action: PayloadAction<{ pos: number[] }>) {
      return {
        ...state,
        snakePosition: [action.payload.pos, ...state.snakePosition],
      }
    },
  },
})

export const snakeReducer = slice.reducer
export const {
  setCells,
  setXPos,
  setYPos,
  setDirection,
  setDirectionChanged,
  setFoodEaten,
  removeFood,
  setCurrentScore,
  createFood,
  setRecord,
  setTimeRunning,
  removeSnakePosition,
  addSnakePosition,
} = slice.actions

// types
export type DirectionValues = "KeyW" | "KeyA" | "KeyS" | "KeyD"
type SnakeState = {
  cells: GridCell[][]
  xPos: number
  yPos: number
  snakePosition: number[][]
  direction: DirectionValues
  isDirectionChanged: boolean
  gridSize: number
  foodPosition: number[]
  isFoodEaten: boolean
  currentScore: number
  bestScore: number
  time: number
  isTimeRunning: boolean
  messageText: string
}
