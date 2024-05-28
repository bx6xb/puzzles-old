import { ReactNode } from "react"
import s from "./Container.module.css"

export const Container = ({ children }: ContainerProps) => (
  <div className={s.container}>{children}</div>
)

// types
type ContainerProps = {
  children: ReactNode
}