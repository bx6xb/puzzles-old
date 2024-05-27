import { ReactNode } from "react"
import s from "./Container.module.css"

type ContainerProps = {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <div className={s.container}>{children}</div>
)
