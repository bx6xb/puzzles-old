import { Dispatch, combineReducers } from "redux"
import { schulteTableReducer } from "./schulteTableReducer/schulteTableReducer"
import { TypedUseSelectorHook } from "react-redux"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { loadState, saveState } from "../api/api"
import { snakeReducer } from "./snakeReducer/snakeReducer"

const rootReducer = combineReducers({
  schulteTable: schulteTableReducer,
  snake: snakeReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
})

export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector
export const useAppDispatch = (): Dispatch => useDispatch()

store.subscribe(() => saveState(store.getState()))

// types
export type AppRootState = ReturnType<typeof store.getState>

// @ts-ignore
window.store = store
