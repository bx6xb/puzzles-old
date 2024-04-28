import { combineReducers, legacy_createStore } from "redux"
import {
  SchulteTableReducerActionType,
  schulteTableReducer,
} from "./schulteTableReducer/schulteTableReducer"
import { ThunkAction } from "redux-thunk"

const rootReducer = combineReducers({
  schulteTable: schulteTableReducer,
})

export const store = legacy_createStore(rootReducer)

export type AppStateType = ReturnType<typeof store.getState>

export type AppActionType = SchulteTableReducerActionType

export type ThunkType = ThunkAction<void, AppStateType, unknown, AppActionType>

// @ts-ignore
window.store = store
