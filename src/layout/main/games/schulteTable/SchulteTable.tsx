import { GameGrid } from "../../../../components/GameGrid/GameGrid"
import { PlayButton } from "../../../../components/PlayButton/PlayButton"
import { useSchulteTable } from "./hooks/useSchulteTable"
import { memo } from "react"
import s from "./SchulteTable.module.css"

export const SchulteTable = memo(() => {
  const {
    timeIsRunning,
    gridSize,
    bestRecords,
    currentNumber,
    messageText,
    cells,
    isHintsMode,
    isShuffleMode,
    cellOnClick,
    playBtnHandler,
    hintsModeOnChange,
    gridSizeOnSize,
    shuffleModeOnChange,
  } = useSchulteTable()

  return (
    <>
      <div className={s.gameAndSettingsWrapper}>
        <div>
          <div className={s.gameInfoWrapper}>
            <span className={s.bestTime}>
              Best time {gridSize + "x" + gridSize}: {bestRecords[gridSize]}
            </span>
            {currentNumber ? <span className={s.currentNumber}>Find {currentNumber}</span> : null}
          </div>

          <div className={s.gameGridContainer}>
            {!timeIsRunning || messageText ? (
              <div className={s.messageTextScreen}>
                {!timeIsRunning && (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {messageText}
                    <PlayButton callback={playBtnHandler} />
                  </div>
                )}
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
        </div>

        <div className={s.settings}>
          <span>Settings</span>
          <hr style={{ margin: "10px 0" }} />
          <form>
            <label>
              Hints mode{" "}
              <input
                type="checkbox"
                onChange={hintsModeOnChange}
                checked={isHintsMode}
                disabled={isShuffleMode}
              />
            </label>
            <br />
            <label>
              Shuffle mode{" "}
              <input type="checkbox" onChange={shuffleModeOnChange} checked={isShuffleMode} />
            </label>
            <br />
            <label>
              Game grid size{" "}
              <select value={gridSize} onChange={gridSizeOnSize}>
                <option value="2">2x2</option>
                <option value="3">3x3</option>
                <option value="4">4x4</option>
                <option value="5">5x5</option>
                <option value="6">6x6</option>
                <option value="7">7x7</option>
                <option value="8">8x8</option>
                <option value="9">9x9</option>
                <option value="10">10x10</option>
              </select>
            </label>
          </form>
        </div>
      </div>
    </>
  )
})
