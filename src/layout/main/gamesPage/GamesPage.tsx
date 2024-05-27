import { NavLink, Outlet } from "react-router-dom"
import s from "./GamesPage.module.css"

export const GamesPage = () => {
  return (
    <>
      <nav className={s.navigation}>
        <ul className={s.menu}>
          <li>
            <NavLink
              to="/games/schulte-table"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Schulte Table
            </NavLink>
          </li>
          <li>
            <NavLink to="/games/snake" className={({ isActive }) => (isActive ? "active" : "")}>
              Snake
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/games/memory-game"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Memory Game
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}
