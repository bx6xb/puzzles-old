import { useSelector } from "react-redux"
import { SchulteTable } from "./SchulteTable"
import { AppStateType } from "../../../../redux/store"
import { useDispatch } from "react-redux"
import {
  setBestRecordAC,
  setCurrentNumberAC,
  setFieldsAC,
  setFirstInitAC,
  setMessageTextAC,
  setTimeAC,
  setTimeIsRunningAC,
} from "../../../../redux/schulteTableReducer/schulteTableReducer"
import { useCallback, useEffect } from "react"

export const SchulteTableContainer = () => {
  const state = useSelector((state: AppStateType) => state.schulteTable)
  const dispatch = useDispatch()

  useEffect(() => {
    let intervalId: any
    if (state.timeIsRunning) {
      intervalId = setInterval(() => dispatch(setTimeAC(+(state.time + 0.01).toFixed(2))), 10)
    }

    return () => clearInterval(intervalId)
  }, [state.timeIsRunning, state.time])

  const stateGame = useCallback(() => {
    dispatch(setFieldsAC())
    dispatch(setCurrentNumberAC(state.currentNumber + 1))
    dispatch(setMessageTextAC(""))
    dispatch(setTimeAC(0))
    dispatch(setTimeIsRunningAC(true))
  }, [dispatch])

  const fieldOnClick = useCallback(
    (index: number) => {
      if (
        state.fields[index].text === state.gridSize ** 2 &&
        state.currentNumber === state.gridSize ** 2
      ) {
        dispatch(setTimeIsRunningAC(false))
        dispatch(setMessageTextAC(state.time + "s"))
        dispatch(setCurrentNumberAC(0))
        if (
          state.bestRecords[state.gridSize] === 0 ||
          state.bestRecords[state.gridSize] > state.time
        ) {
          dispatch(setBestRecordAC())
        }
      } else if (state.fields[index].text === state.currentNumber) {
        dispatch(setCurrentNumberAC(state.currentNumber + 1))
      }
    },
    [dispatch, state.fields, state.currentNumber, state.gridSize, state.time]
  )

  const restartBtnHandler = useCallback(() => {
    stateGame()
  }, [dispatch])

  const playBtnHandler = useCallback(() => {
    dispatch(setFirstInitAC(false))
    stateGame()
  }, [dispatch])

  return (
    <SchulteTable
      gridSize={state.gridSize}
      bestRecord={state.bestRecords[state.gridSize]}
      fields={state.fields}
      currentNumber={state.currentNumber}
      fieldOnClick={fieldOnClick}
      messageText={state.messageText}
      restartBtnHandler={restartBtnHandler}
      shouldPlayButtonDisplayed={state.firstInit}
      playBtnHandler={playBtnHandler}
    />
  )
}
