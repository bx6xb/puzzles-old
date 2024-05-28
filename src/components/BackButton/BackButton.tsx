import { NavLink } from "react-router-dom"
import s from "./BackButton.module.css"

export const BackButton = () => {
  return (
    <NavLink to="/games">
      <button className={s.backButton}>{"<-"}</button>
    </NavLink>
  )
}
