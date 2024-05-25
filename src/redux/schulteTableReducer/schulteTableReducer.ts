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
    hintsMode: true,
    currentNumber: 0,
    fields: [],
    time: 0,
    timeIsRunning: false,
    messageText: "",
    firstInit: true,
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
    setHintsMode(state, action: PayloadAction<{ hintsMode: boolean }>) {
      return {
        ...state,
        hintsMode: action.payload.hintsMode,
      }
    },
    setCurrentNumber(state, action: PayloadAction<{ currentNumber: number }>) {
      if (state.hintsMode) {
        return {
          ...state,
          currentNumber: action.payload.currentNumber,
          fields: state.fields.map((field) =>
            field.text === state.currentNumber
              ? { ...field, backgroundColor: Theme.colors.accent, color: Theme.colors.main }
              : field
          ),
        }
      }
      return {
        ...state,
        currentNumber: action.payload.currentNumber,
      }
    },
    setFields(state) {
      return {
        ...state,
        fields: createRandomNumberArray(1, state.gridSize ** 2, state.gridSize ** 2).map((num) => ({
          text: num,
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
    setFirstInit(state, action: PayloadAction<{ firstInit: boolean }>) {
      return {
        ...state,
        firstInit: action.payload.firstInit,
      }
    },
  },
})

export const schulteTableReducer = slice.reducer
export const {
  setBestRecord,
  setCurrentNumber,
  setFields,
  setFirstInit,
  setMessageText,
  setTime,
  setTimeIsRunning,
} = slice.actions

// types
type SchulteTableState = {
  gridSize: number
  bestRecords: {
    [key: string]: number
  }
  hintsMode: boolean
  currentNumber: number
  fields: GridField[]
  time: number
  timeIsRunning: boolean
  messageText: string
  firstInit: boolean
}
export type GridField = {
  text: string | number
  backgroundColor?: string
  color?: string
}
