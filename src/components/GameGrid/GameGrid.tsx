import s from "./GameGrid.module.css"
import { Cell } from "./Cell/Cell"
import { PlayButton } from "../PlayButton/PlayButton"

export const GameGrid = (props: GridProps) => {
  return (
    <div className={s.container}>
      {props.showPlayButton ? (
        <div className={s.messageTextScreen}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {props.messageText}
            <PlayButton callback={props.playBtnOnClick} />
          </div>
        </div>
      ) : (
        props.cells && (
          <div
            className={s.grid}
            style={{
              gridTemplateColumns: `repeat(${props.gridWidth}, 1fr)`,
              gridTemplateRows: `repeat(${props.gridHeight}, 1fr) `,
            }}
          >
            {props.cells.map((cell) => (
              <Cell key={cell.id} gridCell={cell} onClick={props.cellOnClick} />
            ))}
          </div>
        )
      )}
    </div>
  )
}

// types
type GridProps = {
  gridWidth: number
  gridHeight: number
  cells: GridCell[]
  showPlayButton: boolean
  messageText: string
  cellOnClick?: (id: number) => void
  playBtnOnClick: () => void
}
export type GridCell = {
  id: number
  content: string | number | null
  backgroundColor?: string
  color?: string
}
