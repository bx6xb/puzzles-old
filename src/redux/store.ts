import { combineReducers, legacy_createStore } from "redux"
import { schulteTableReducer } from "./schulteTableReducer/schulteTableReducer"

const rootReducer = combineReducers({
  schulteTable: schulteTableReducer,
})

export const store = legacy_createStore(rootReducer)

export type AppStateType = ReturnType<typeof store.getState>
