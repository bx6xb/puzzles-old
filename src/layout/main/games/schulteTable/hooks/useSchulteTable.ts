import { useCallback, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../../redux/store"
import {
  finishGame,
  setBestRecord,
  setCurrentNumber,
  setFirstInit,
  setTime,
  startGame,
} from "../../../../../redux/schulteTableReducer/schulteTableReducer"

export const useSchulteTable = () => {
  const {
    gridSize,
    timeIsRunning,
    time,
    bestRecords,
    cells,
    currentNumber,
    firstInit,
    messageText,
  } = useAppSelector((state) => state.schulteTable)
  const dispatch = useAppDispatch()

  useEffect(() => {
    let intervalId: number
    if (timeIsRunning) {
      const timeToDispatch = +(time + 0.01).toFixed(2)
      intervalId = +setInterval(() => dispatch(setTime({ time: timeToDispatch })), 10)
    }

    return () => clearInterval(intervalId)
  }, [timeIsRunning, time, dispatch])

  const cellOnClick = useCallback(
    (id: number) => {
      if (id === gridSize ** 2 && currentNumber === gridSize ** 2) {
        dispatch(finishGame())
        if (bestRecords[gridSize] === 0 || bestRecords[gridSize] > time) {
          dispatch(setBestRecord())
        }
      } else if (id === currentNumber) {
        dispatch(setCurrentNumber({ currentNumber: currentNumber + 1 }))
      }
    },
    [cells, gridSize, currentNumber, bestRecords, dispatch],
  )
  const restartBtnHandler = useCallback(() => {
    dispatch(startGame())
  }, [dispatch])
  const playBtnHandler = useCallback(() => {
    dispatch(setFirstInit({ firstInit: false }))
    dispatch(startGame())
  }, [dispatch])

  return {
    gridSize,
    bestRecords,
    currentNumber,
    firstInit,
    messageText,
    cells,
    cellOnClick,
    restartBtnHandler,
    playBtnHandler,
  }
}
