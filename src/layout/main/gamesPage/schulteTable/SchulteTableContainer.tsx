import { useSelector } from "react-redux"
import { SchulteTable } from "./SchulteTable"
import { AppStateType } from "../../../../redux/store"
import { useDispatch } from "react-redux"
import {
  restartGameAC,
  setCurrentNumberAC,
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
      intervalId = setInterval(
        () => dispatch(setTimeAC(+(state.time + 0.01).toFixed(2))),
        10
      )
    }

    return () => clearInterval(intervalId)
  }, [state.timeIsRunning, state.time])

  const fieldOnClick = useCallback(
    (index: number) => {
      if (
        state.fields[index].text === state.gridSize ** 2 &&
        state.currentNumber === state.gridSize ** 2
      ) {
        console.log(state.time + "s")
        dispatch(restartGameAC())
      } else if (state.fields[index].text === state.currentNumber) {
        dispatch(setCurrentNumberAC(state.currentNumber + 1))
      }
    },
    [dispatch, state.fields, state.currentNumber, state.gridSize]
  )

  const restartBtnHandler = useCallback(() => {
    dispatch(restartGameAC())
    dispatch(setTimeIsRunningAC(true))
  }, [dispatch])

  return (
    <>
      {state.time}
      <SchulteTable
        gridSize={state.gridSize}
        bestRecord={state.bestRecords[state.gridSize + "x" + state.gridSize]}
        fields={state.fields}
        currentNumber={state.currentNumber}
        fieldOnClick={fieldOnClick}
        blackScreenText={""}
        restartBtnHandler={restartBtnHandler}
      />
    </>
  )
}
