import { GridCell } from "../GameGrid"
import s from "./Cell.module.css"

export const Cell = ({ gridCell: { id, content, backgroundColor, color }, onClick }: CellProps) => {
  return (
    <div onClick={() => onClick && onClick(id)} className={s.cell} style={{ backgroundColor, color }}>
      {content}
    </div>
  )
}

// types
type CellProps = {
  gridCell: GridCell
  onClick?: (id: number) => void
}
