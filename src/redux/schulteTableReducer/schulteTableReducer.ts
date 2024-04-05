import { createRandomNumberArray } from "../../func/createRandomNumberArray/createRandomNumberArray"

export type GridFieldType = {
  text: string | number
  backgroundColor?: string
  color?: string
}

type SchulteTableStateType = {
  gridSize: number
  bestRecords: {
    [key: string]: number
  }
  currentNumber: number
  freezeTime: number
  hintsMode: boolean
  fields: GridFieldType[]
  time: number
  timeIsRunning: boolean
}

export const initialState: SchulteTableStateType = {
  gridSize: 3,
  bestRecords: {
    "2x2": 0,
    "3x3": 0,
    "4x4": 0,
    "5x5": 0,
    "6x6": 0,
    "7x7": 0,
    "8x8": 0,
    "9x9": 0,
    "10x10": 0,
  },
  currentNumber: 1,
  freezeTime: 3,
  hintsMode: false,
  fields: [],
  time: 0,
  timeIsRunning: false,
}

type SchulteTableReducerActionType =
  | SetGridSizeActionType
  | SetBestRecordActionType
  | SetCurrentNumberActionType
  | SetFreezeTimeActionType
  | SetHintsModeActionType
  | SetFieldsActionType
  | RestartGameActionType
  | SetTimeActionType
  | SetTimeIsRunningActionType

export const schulteTableReducer = (
  state: SchulteTableStateType = initialState,
  action: SchulteTableReducerActionType
): SchulteTableStateType => {
  switch (action.type) {
    case "SET_GRID_SIZE":
      return {
        ...state,
        gridSize: action.gridSize,
      }
    case "SET_BEST_RECORD":
      return {
        ...state,
        bestRecords: {
          ...state.bestRecords,
          [state.gridSize + "x" + state.gridSize]: action.record,
        },
      }
    case "SET_CURRENT_NUMBER":
      return {
        ...state,
        currentNumber: action.currentNumber,
      }
    case "SET_FREEZE_TIME":
      return {
        ...state,
        freezeTime: action.freezeTime,
      }
    case "SET_HINTS_MODE":
      return {
        ...state,
        hintsMode: action.hintsMode,
      }
    case "SET_FIELDS":
      return {
        ...state,
        fields: createRandomNumberArray(
          1,
          state.gridSize ** 2,
          state.gridSize ** 2
        ).map((num) => ({
          text: num,
        })),
      }
    case "RESTART_GAME":
      return {
        ...state,
        fields: createRandomNumberArray(
          1,
          state.gridSize ** 2,
          state.gridSize ** 2
        ).map((num) => ({
          text: num,
        })),
        currentNumber: 1,
        time: 0,
      }
    case "SET_TIME":
      return {
        ...state,
        time: action.time,
      }
    case "SET_TIME_IS_RUNNING":
      return {
        ...state,
        timeIsRunning: action.timeIsRunning,
      }
    default:
      return state
  }
}

type SetGridSizeActionType = ReturnType<typeof setGridSizeAC>

export const setGridSizeAC = (gridSize: number) =>
  ({
    type: "SET_GRID_SIZE",
    gridSize,
  }) as const

type SetBestRecordActionType = ReturnType<typeof setBestRecordAC>

export const setBestRecordAC = (record: number) =>
  ({
    type: "SET_BEST_RECORD",
    record,
  }) as const

type SetCurrentNumberActionType = ReturnType<typeof setCurrentNumberAC>

export const setCurrentNumberAC = (currentNumber: number) =>
  ({
    type: "SET_CURRENT_NUMBER",
    currentNumber,
  }) as const

type SetFreezeTimeActionType = ReturnType<typeof setFreezeTimeAC>

export const setFreezeTimeAC = (freezeTime: number) =>
  ({
    type: "SET_FREEZE_TIME",
    freezeTime,
  }) as const

type SetHintsModeActionType = ReturnType<typeof setHintsModeAC>

export const setHintsModeAC = (hintsMode: boolean) =>
  ({
    type: "SET_HINTS_MODE",
    hintsMode,
  }) as const

type SetFieldsActionType = ReturnType<typeof setFieldsAC>

export const setFieldsAC = () =>
  ({
    type: "SET_FIELDS",
  }) as const

type RestartGameActionType = ReturnType<typeof restartGameAC>

export const restartGameAC = () =>
  ({
    type: "RESTART_GAME",
  }) as const

type SetTimeActionType = ReturnType<typeof setTimeAC>

export const setTimeAC = (time: number) =>
  ({
    type: "SET_TIME",
    time,
  }) as const

type SetTimeIsRunningActionType = ReturnType<typeof setTimeIsRunningAC>

export const setTimeIsRunningAC = (timeIsRunning: boolean) =>
  ({
    type: "SET_TIME_IS_RUNNING",
    timeIsRunning,
  }) as const
