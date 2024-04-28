import { SchulteTableStateDomainType } from "../../api/api"
import { createRandomNumberArray } from "../../utils/createRandomNumberArray/createRandomNumberArray"
import { Theme } from "../../style/Theme"
import { ThunkType } from "../store"

export const initialState: SchulteTableStateType = {
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
}

export const schulteTableReducer = (
  state: SchulteTableStateType = initialState,
  action: SchulteTableReducerActionType
): SchulteTableStateType => {
  switch (action.type) {
    case "schulteTable/SET_STATE":
      return {
        ...state,
        ...action.state,
      }
    case "schulteTable/SET_GRID_SIZE":
      return {
        ...state,
        gridSize: action.gridSize,
      }
    case "schulteTable/SET_BEST_RECORD":
      return {
        ...state,
        bestRecords: {
          ...state.bestRecords,
          [state.gridSize]: state.time,
        },
      }
    case "schulteTable/SET_HINTS_MODE":
      return {
        ...state,
        hintsMode: action.hintsMode,
      }
    case "schulteTable/SET_CURRENT_NUMBER":
      if (state.hintsMode) {
        return {
          ...state,
          currentNumber: action.currentNumber,
          fields: state.fields.map((field) =>
            field.text === state.currentNumber
              ? { ...field, backgroundColor: Theme.colors.accent, color: Theme.colors.main }
              : field
          ),
        }
      }
      return {
        ...state,
        currentNumber: action.currentNumber,
      }
    case "schulteTable/SET_FIELDS":
      return {
        ...state,
        fields: createRandomNumberArray(1, state.gridSize ** 2, state.gridSize ** 2).map((num) => ({
          text: num,
        })),
      }
    case "schulteTable/SET_TIME":
      return {
        ...state,
        time: action.time,
      }
    case "schulteTable/SET_TIME_IS_RUNNING":
      return {
        ...state,
        timeIsRunning: action.timeIsRunning,
      }
    case "schulteTable/SET_MESSAGE_TEXT":
      return {
        ...state,
        messageText: action.messageText,
      }
    case "schulteTable/SET_FIRST_INIT":
      return {
        ...state,
        firstInit: action.firstInit,
      }
    default:
      return state
  }
}

// actions
export const setStateAC = (state: SchulteTableStateDomainType) =>
  ({
    type: "schulteTable/SET_STATE",
    state,
  }) as const
export const setGridSizeAC = (gridSize: number) =>
  ({
    type: "schulteTable/SET_GRID_SIZE",
    gridSize,
  }) as const
export const setBestRecordAC = () =>
  ({
    type: "schulteTable/SET_BEST_RECORD",
  }) as const
export const setHintsModeAC = (hintsMode: boolean) =>
  ({
    type: "schulteTable/SET_HINTS_MODE",
    hintsMode,
  }) as const
export const setCurrentNumberAC = (currentNumber: number) =>
  ({
    type: "schulteTable/SET_CURRENT_NUMBER",
    currentNumber,
  }) as const
export const setFieldsAC = () =>
  ({
    type: "schulteTable/SET_FIELDS",
  }) as const
export const setTimeAC = (time: number) =>
  ({
    type: "schulteTable/SET_TIME",
    time,
  }) as const
export const setTimeIsRunningAC = (timeIsRunning: boolean) =>
  ({
    type: "schulteTable/SET_TIME_IS_RUNNING",
    timeIsRunning,
  }) as const
export const setMessageTextAC = (messageText: string) =>
  ({
    type: "schulteTable/SET_MESSAGE_TEXT",
    messageText,
  }) as const
export const setFirstInitAC = (firstInit: boolean) =>
  ({
    type: "schulteTable/SET_FIRST_INIT",
    firstInit,
  }) as const

// thunks
export const setStateTC = (): ThunkType => (dispatch) => {}

// types
type SchulteTableStateType = {
  gridSize: number
  bestRecords: {
    [key: string]: number
  }
  hintsMode: boolean
  currentNumber: number
  fields: GridFieldType[]
  time: number
  timeIsRunning: boolean
  messageText: string
  firstInit: boolean
}
export type GridFieldType = {
  text: string | number
  backgroundColor?: string
  color?: string
}
export type SchulteTableReducerActionType =
  | ReturnType<typeof setStateAC>
  | ReturnType<typeof setGridSizeAC>
  | ReturnType<typeof setBestRecordAC>
  | ReturnType<typeof setHintsModeAC>
  | ReturnType<typeof setCurrentNumberAC>
  | ReturnType<typeof setFieldsAC>
  | ReturnType<typeof setTimeAC>
  | ReturnType<typeof setTimeIsRunningAC>
  | ReturnType<typeof setMessageTextAC>
  | ReturnType<typeof setFirstInitAC>
