import { NavLink } from "react-router-dom"
import s from "./Header.module.css"
import { Container } from "../../components/container/Container"
import { FlexContainer } from "../../components/flexContainer/FlexContainer"
import styled from "styled-components"

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexContainer justifyContent="space-evenly" alignItems="center">
          <img src="#" alt="logo" />
          <nav>
            <Menu>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? s.active : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/puzzles"
                className={({ isActive }) => (isActive ? s.active : "")}
              >
                Games
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? s.active : "")}
              >
                Profile
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? s.active : "")}
              >
                About
              </NavLink>
            </Menu>
          </nav>
        </FlexContainer>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: darkcyan;
`

const Menu = styled.ul`
  display: flex;
  gap: 20px;
`
