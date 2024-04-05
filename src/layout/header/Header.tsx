import { NavLink } from "react-router-dom"
import { Container } from "../../components/container/Container"
import { FlexContainer } from "../../components/flexContainer/FlexContainer"
import styled from "styled-components"

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexContainer $justifyContent="space-evenly" $alignItems="center">
          <img src="#" alt="logo" style={{ width: "20px" }} />
          <nav>
            <Menu>
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/games"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Games
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  About
                </NavLink>
              </li>
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
