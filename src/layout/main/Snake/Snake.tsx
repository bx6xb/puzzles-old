import { useEffect } from "react"
import { BackButton } from "../../../components/BackButton/BackButton"
import { GameGrid } from "../../../components/GameGrid/GameGrid"
import { useAppDispatch, useAppSelector } from "../../../redux/store"
import {
  DirectionValues,
  addSnakePosition,
  createFood,
  oppositeKeys,
  removeFood,
  removeSnakePosition,
  setCells,
  setCurrentScore,
  setDirection,
  setDirectionChanged,
  setFoodEaten,
  setRecord,
  setTimeRunning,
  setXPos,
  setYPos,
} from "../../../redux/snakeReducer/snakeReducer"
import { startGame } from "../../../redux/schulteTableReducer/schulteTableReducer"

export const Snake = () => {
  const {
    cells,
    xPos,
    yPos,
    gridSize,
    isTimeRunning,
    messageText,
    direction,
    isDirectionChanged,
    isFoodEaten,
    foodPosition,
    snakePosition,
    currentScore,
    bestScore,
  } = useAppSelector((state) => state.snake)
  const dispatch = useAppDispatch()

  useEffect(() => {
    document.addEventListener("keydown", changeDirection)
    dispatch(setCells())
    return () => document.removeEventListener("keydown", changeDirection)
  }, [])
  useEffect(() => {
    let intervalId: number
    if (isTimeRunning) {
      intervalId = +setInterval(() => {
        dispatch(setDirectionChanged({ directionChanged: false }))
        updatePosition()
      }, 150 /* snake speed */)
    }

    return () => clearInterval(intervalId)
  }, [isTimeRunning])

  const playBtnOnClick = () => {
    debugger
    dispatch(setTimeRunning({ isTimeRunning: true }))
  }

  const gameOver = () => {
    console.log("Game is over!")
    dispatch(removeFood())
    dispatch(startGame())
  }
  const changeDirection = (e: KeyboardEvent) => {
    if (
      ["KeyW", "KeyA", "KeyS", "KeyD"].includes(e.code) &&
      // @ts-ignore
      direction !== oppositeKeys[e.code] &&
      !isDirectionChanged
    ) {
      dispatch(setDirection({ direction: e.code as DirectionValues }))
    } else {
      dispatch(setDirectionChanged({ directionChanged: true }))
    }
  }
  const checkRecord = () => {
    if (currentScore > bestScore) {
      dispatch(setRecord())
    }
  }
  const checkCollision = () => {
    snakePosition.forEach((val, i) => {
      if (i !== 0) {
        const [y, x]: number[] = val
        if (x === xPos && y === yPos) {
          gameOver()
        }
      }
    })
  }
  const checkFood = () => {
    if (snakePosition[0].join("") === foodPosition.join("")) {
      dispatch(setFoodEaten({ isFoodEaten: true }))
      dispatch(removeFood())
      dispatch(createFood())

      dispatch(setCurrentScore({ currentScore: currentScore + 1 }))
      checkRecord()
    }
  }
  const updatePosition = () => {
    const downCollision = direction === "KeyS" && yPos + 1 < gridSize
    const upperCollision = direction === "KeyW" && yPos - 1 >= 0
    const rightCollision = direction === "KeyD" && xPos + 1 < gridSize
    const leftCollision = direction === "KeyA" && xPos - 1 >= 0
    const collision = downCollision || upperCollision || rightCollision || leftCollision

    if (downCollision) {
      dispatch(setYPos({ yPos: yPos + 1 }))
    } else if (upperCollision) {
      dispatch(setYPos({ yPos: yPos - 1 }))
    } else if (rightCollision) {
      dispatch(setXPos({ xPos: xPos + 1 }))
    } else if (leftCollision) {
      dispatch(setXPos({ xPos: xPos - 1 }))
    } else {
      gameOver()
    }

    if (collision) {
      if (!isFoodEaten) dispatch(removeSnakePosition())
      dispatch(addSnakePosition({ pos: [xPos, yPos] }))
    }

    checkCollision()
    dispatch(setFoodEaten({ isFoodEaten: false }))
    checkFood()
  }

  return (
    <>
      <BackButton />

      <GameGrid
        gridWidth={gridSize}
        gridHeight={gridSize}
        cells={cells && cells.flat()}
        showPlayButton={!isTimeRunning}
        messageText={messageText}
        playBtnOnClick={playBtnOnClick}
      />
    </>
  )
}
