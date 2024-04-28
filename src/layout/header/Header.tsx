import { NavLink } from "react-router-dom"
import { Container } from "../../components/Container/Container"
import { FlexContainer } from "../../components/FlexContainer/FlexContainer"
import styled from "styled-components"
import { Logo } from "./logo/Logo"
import { Theme } from "../../style/Theme"
import { ThemeSwitcher } from "./themeSwitcher/ThemeSwitcher"

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexContainer $justifyContent="space-between" $alignItems="center">
          <Logo />

          <nav>
            <Menu>
              <li>
                <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/games" className={({ isActive }) => (isActive ? "active" : "")}>
                  Games
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                  About
                </NavLink>
              </li>
            </Menu>
          </nav>

          <ThemeSwitcher />
        </FlexContainer>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  /* position: fixed; */
  z-index: 1;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.5);
`

const Menu = styled.ul`
  display: flex;
  gap: 80px;
  a {
    color: ${Theme.colors.link};
    font-weight: 400;
    font-size: 16px;
    transition: 0.2s;
  }
  a.active {
    font-weight: 700;
  }
`
