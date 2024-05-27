import { GridCell } from "../../redux/schulteTableReducer/schulteTableReducer"
import s from "./GameGrid.module.css"
import { Cell } from "./Cell/Cell"

type GridProps = {
  gridWidth: number
  gridHeight: number
  cells: GridCell[]
  cellOnClick: (id: number) => void
}

export const GameGrid = (props: GridProps) => {
  return (
    <div
      className={s.grid}
      style={{
        gridTemplateColumns: `repeat(${props.gridWidth}, 1fr)`,
        gridTemplateRows: `repeat(${props.gridHeight}, 1fr) `,
      }}
    >
      {props.cells &&
        props.cells.map((cell) => (
          <Cell key={cell.id} gridCell={cell} onClick={props.cellOnClick} />
        ))}
    </div>
  )
}
