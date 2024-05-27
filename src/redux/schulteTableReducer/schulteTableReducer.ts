import { createRandomNumberArray } from "../../utils/createRandomNumberArray/createRandomNumberArray"
import { Theme } from "../../style/Theme"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "schulteTable",
  initialState: {
    gridSize: 3,
    bestRecords: {
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
    },
    isHintsMode: false,
    currentNumber: 0,
    cells: [],
    time: 0,
    timeIsRunning: false,
    messageText: "",
    isShuffleMode: false,
  } as SchulteTableState,
  reducers: {
    setState(state, action: PayloadAction<{ state: SchulteTableState }>) {
      return {
        ...state,
        ...action.payload.state,
      }
    },
    setGridSize(state, action: PayloadAction<{ gridSize: number }>) {
      return {
        ...state,
        gridSize: action.payload.gridSize,
      }
    },
    setBestRecord(state) {
      return {
        ...state,
        bestRecords: {
          ...state.bestRecords,
          [state.gridSize]: state.time,
        },
      }
    },
    setHintsMode(state, action: PayloadAction<{ isHintsMode: boolean }>) {
      return {
        ...state,
        isHintsMode: action.payload.isHintsMode,
      }
    },
    setCurrentNumber(state, action: PayloadAction<{ currentNumber: number }>) {
      if (state.isHintsMode) {
        return {
          ...state,
          currentNumber: action.payload.currentNumber,
          cells: state.cells.map((cell) =>
            cell.id === state.currentNumber
              ? { ...cell, backgroundColor: Theme.colors.accent, color: Theme.colors.main }
              : cell,
          ),
        }
      }
      return {
        ...state,
        currentNumber: action.payload.currentNumber,
      }
    },
    setCells(state) {
      return {
        ...state,
        cells: createRandomNumberArray(1, state.gridSize ** 2, state.gridSize ** 2).map((num) => ({
          id: num,
          content: num,
        })),
      }
    },
    setTime(state, action: PayloadAction<{ time: number }>) {
      return {
        ...state,
        time: action.payload.time,
      }
    },
    setTimeIsRunning(state, action: PayloadAction<{ timeIsRunning: boolean }>) {
      return {
        ...state,
        timeIsRunning: action.payload.timeIsRunning,
      }
    },
    setMessageText(state, action: PayloadAction<{ messageText: string }>) {
      return {
        ...state,
        messageText: action.payload.messageText,
      }
    },
    startGame(state) {
      return {
        ...state,
        cells: createRandomNumberArray(1, state.gridSize ** 2, state.gridSize ** 2).map((num) => ({
          id: num,
          content: num,
        })),
        currentNumber: 1,
        messageText: "",
        time: 0,
        timeIsRunning: true,
      }
    },
    finishGame(state) {
      return {
        ...state,
        timeIsRunning: false,
        currentNumber: 0,
        messageText: state.time + "s",
      }
    },
    setShuffleMode(state, action: PayloadAction<{ isShuffleMode: boolean }>) {
      return {
        ...state,
        isShuffleMode: action.payload.isShuffleMode,
        isHintsMode: false,
      }
    },
  },
})

export const schulteTableReducer = slice.reducer
export const {
  setBestRecord,
  setCurrentNumber,
  setCells,
  setMessageText,
  setTime,
  setTimeIsRunning,
  startGame,
  finishGame,
  setGridSize,
  setHintsMode,
  setState,
  setShuffleMode,
} = slice.actions

// types
type SchulteTableState = {
  gridSize: number
  bestRecords: {
    [key: string]: number
  }
  isHintsMode: boolean
  currentNumber: number
  cells: GridCell[]
  time: number
  timeIsRunning: boolean
  messageText: string
  isShuffleMode: boolean
}
export type GridCell = {
  id: number
  content: string | number
  backgroundColor?: string
  color?: string
}
