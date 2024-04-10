import { useSelector } from "react-redux"
import { SchulteTable } from "./SchulteTable"
import { AppStateType } from "../../../../redux/store"
import { useDispatch } from "react-redux"
import {
  startGameAC,
  setCurrentNumberAC,
  setTimeAC,
  endGameAC,
} from "../../../../redux/schulteTableReducer/schulteTableReducer"
import React, { useCallback, useEffect, useState } from "react"
import { PlayButton } from "../../../../components/PlayButton/PlayButton"

export const SchulteTableContainer = () => {
  const state = useSelector((state: AppStateType) => state.schulteTable)
  const dispatch = useDispatch()

  const [blackScreenText, setBlackScreenText] = useState<React.ReactNode>(
    <PlayButton
      callback={() => {
        dispatch(startGameAC())
      }}
    />
  )

  useEffect(() => {
    let intervalId: any
    if (state.timeIsRunning) {
      intervalId = setInterval(() => dispatch(setTimeAC(+(state.time + 0.01).toFixed(2))), 10)
    }

    return () => clearInterval(intervalId)
  }, [state.timeIsRunning, state.time])

  const fieldOnClick = useCallback(
    (index: number) => {
      if (
        state.fields[index].text === state.gridSize ** 2 &&
        state.currentNumber === state.gridSize ** 2
      ) {
        dispatch(endGameAC())
        setBlackScreenText(<span>{state.time + "s"}</span>)
      } else if (state.fields[index].text === state.currentNumber) {
        dispatch(setCurrentNumberAC(state.currentNumber + 1))
      }
    },
    [dispatch, state.fields, state.currentNumber, state.gridSize, state.time]
  )

  const restartBtnHandler = useCallback(() => {
    dispatch(startGameAC())
  }, [dispatch])

  return (
    <SchulteTable
      gridSize={state.gridSize}
      bestRecord={state.bestRecords[state.gridSize + "x" + state.gridSize]}
      fields={state.fields}
      currentNumber={state.currentNumber}
      fieldOnClick={fieldOnClick}
      blackScreenText={state.timeIsRunning ? "" : blackScreenText}
      restartBtnHandler={restartBtnHandler}
    />
  )
}
