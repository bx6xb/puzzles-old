import { ChangeEvent, useCallback, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../redux/store"
import {
  GridSizeValues,
  finishGame,
  setBestRecord,
  setCells,
  setCurrentNumber,
  setGridSize,
  setHintsMode,
  setMessageText,
  setShuffleMode,
  setTime,
  startGame,
} from "../../../../redux/schulteTableReducer/schulteTableReducer"
import { timeFormatter } from "../../../../utils/timeFormatter/timeFormatter"

export const useSchulteTable = () => {
  const {
    gridSize,
    timeIsRunning,
    time,
    bestRecords,
    cells,
    currentNumber,
    messageText,
    isHintsMode,
    isShuffleMode,
  } = useAppSelector((state) => state.schulteTable)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(finishGame())
  }, [])
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
        dispatch(setMessageText({ messageText: timeFormatter(time) }))
        if (bestRecords[gridSize] === 0 || bestRecords[gridSize] > time) {
          dispatch(setBestRecord())
        }
      } else if (id === currentNumber) {
        if (isShuffleMode) {
          dispatch(setCells())
        }
        dispatch(setCurrentNumber({ currentNumber: currentNumber + 1 }))
      }
    },
    [time, cells, gridSize, currentNumber, bestRecords, dispatch],
  )
  const playBtnOnClick = useCallback(() => {
    dispatch(startGame())
  }, [dispatch])

  // settings callbacks
  const hintsModeOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setHintsMode({ isHintsMode: e.currentTarget.checked }))
    dispatch(finishGame())
  }
  const gridSizeOnSize = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGridSize({ gridSize: +e.currentTarget.value as GridSizeValues }))
    dispatch(finishGame())
  }
  const shuffleModeOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setShuffleMode({ isShuffleMode: e.currentTarget.checked }))
    dispatch(finishGame())
  }

  return {
    timeIsRunning,
    gridSize,
    bestRecords,
    currentNumber,
    messageText,
    cells,
    isHintsMode,
    isShuffleMode,
    cellOnClick,
    playBtnOnClick,
    hintsModeOnChange,
    gridSizeOnSize,
    shuffleModeOnChange,
  }
}
