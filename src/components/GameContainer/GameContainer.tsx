import s from "./GameContainer.module.css"
import { ReactNode } from "react"

type GameContainerProps = {
  children: ReactNode
}

export const GameContainer = (props: GameContainerProps) => {
  return <div className={s.gameContainer}></div>
}
