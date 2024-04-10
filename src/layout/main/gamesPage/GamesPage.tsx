import { NavLink, Outlet } from "react-router-dom"
import styled from "styled-components"

export const GamesPage = () => {
  return (
    <>
      <Navigation>
        <Menu>
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
        </Menu>
      </Navigation>

      <Outlet />
    </>
  )
}

const Menu = styled.ul`
  display: flex;
  gap: 30px;
`

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  padding: 5px;
`
