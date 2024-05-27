import { GameGrid } from "../../../../components/GameGrid/GameGrid"
import { PlayButton } from "../../../../components/PlayButton/PlayButton"
import { GameContainer } from "../../../../components/GameContainer/GameContainer"
import { useSchulteTable } from "./hooks/useSchulteTable"
import { memo } from "react"
import s from "./SchulteTable.module.css"

export const SchulteTable = memo(() => {
  const {
    gridSize,
    bestRecords,
    currentNumber,
    firstInit,
    messageText,
    cells,
    cellOnClick,
    restartBtnHandler,
    playBtnHandler,
  } = useSchulteTable()

  console.log("SchulteTable")

  return (
    <GameContainer>
      <div className={s.gameInfoWrapper}>
        <span className={s.bestTime}>
          Best time {gridSize + "x" + gridSize}: {bestRecords[gridSize]}
        </span>
        {currentNumber ? <span className={s.currentNumber}>Find {currentNumber}</span> : null}
      </div>
      <div className={s.gameGridContainer}>
        {firstInit || messageText ? (
          <div className={s.messageTextScreen}>
            {firstInit ? <PlayButton callback={playBtnHandler} /> : messageText}
          </div>
        ) : (
          <GameGrid
            gridWidth={gridSize}
            gridHeight={gridSize}
            cells={cells}
            cellOnClick={cellOnClick}
          />
        )}
      </div>

      <button onClick={restartBtnHandler} className={s.restartButton}>
        Restart
      </button>
    </GameContainer>
  )
})
