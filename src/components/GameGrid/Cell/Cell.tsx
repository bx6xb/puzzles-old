import { GridCell } from "../../../redux/schulteTableReducer/schulteTableReducer"
import s from "./Cell.module.css"

type CellProps = {
  gridCell: GridCell
  onClick: (id: number) => void
}

export const Cell = ({ gridCell: { id, content, backgroundColor, color }, onClick }: CellProps) => {
  return (
    <div onClick={() => onClick(id)} className={s.cell} style={{ backgroundColor, color }}>
      {content}
    </div>
  )
}
