import { BackButton } from "../../../components/BackButton/BackButton"
import { GameGrid } from "../../../components/GameGrid/GameGrid"
import { useSnake } from "./hooks/useSnake"

export const Snake = () => {
  const { gridSize, cells, isTimeRunning, messageText, playBtnOnClick } = useSnake()

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
