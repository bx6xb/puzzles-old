import { AppRootState } from "../redux/store"

export const loadState = () => {
  const serializedState = localStorage.getItem("puzzles-state")
  if (serializedState) {
    return JSON.parse(serializedState)
  }
  return undefined
}
export const saveState = (state: AppRootState) => {
  localStorage.setItem("puzzles-state", JSON.stringify(state))
}
