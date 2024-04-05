import { NavLink, Route, Routes } from "react-router-dom"
import { SchulteTableContainer } from "./schulteTable/SchulteTableContainer"

export const GamesPage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/games/schulte-table"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Schulte Table
            </NavLink>
          </li>
        </ul>
      </nav>

      <SchulteTableContainer />
    </div>
  )
}
