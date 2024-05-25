import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../../redux/store"
import {
  setBestRecord,
  setCurrentNumber,
  setFields,
  setFirstInit,
  setMessageText,
  setTime,
  setTimeIsRunning,
} from "../../../../../redux/schulteTableReducer/schulteTableReducer"

export const useSchulteTable = () => {
  const {
    gridSize,
    timeIsRunning,
    time,
    bestRecords,
    fields,
    currentNumber,
    firstInit,
    messageText,
  } = useAppSelector((state) => state.schulteTable)
  const dispatch = useAppDispatch()

  useEffect(() => {
    let intervalId: any
    if (timeIsRunning) {
      const timeToDispatch = +(time + 0.01).toFixed(2)
      intervalId = setInterval(() => dispatch(setTime({ time: timeToDispatch })), 10)
    }

    return () => clearInterval(intervalId)
  }, [timeIsRunning, time])

  const startGame = () => {
    dispatch(setFields())
    dispatch(setCurrentNumber({ currentNumber: currentNumber + 1 }))
    dispatch(setMessageText({ messageText: "" }))
    dispatch(setTime({ time: 0 }))
    dispatch(setTimeIsRunning({ timeIsRunning: true }))
  }
  const fieldOnClick = (index: number) => {
    if (fields[index].text === gridSize ** 2 && currentNumber === gridSize ** 2) {
      dispatch(setTimeIsRunning({ timeIsRunning: false }))
      dispatch(setMessageText({ messageText: time + "s" }))
      dispatch(setCurrentNumber({ currentNumber: 0 }))
      if (bestRecords[gridSize] === 0 || bestRecords[gridSize] > time) {
        dispatch(setBestRecord())
      }
    } else if (fields[index].text === currentNumber) {
      dispatch(setCurrentNumber({ currentNumber: currentNumber + 1 }))
    }
  }
  const restartBtnHandler = () => {
    startGame()
  }
  const playBtnHandler = () => {
    dispatch(setFirstInit({ firstInit: false }))
    startGame()
  }

  return {
    gridSize,
    bestRecords,
    currentNumber,
    firstInit,
    messageText,
    fields,
    fieldOnClick,
    restartBtnHandler,
    playBtnHandler,
  }
}
