import { NavLink } from "react-router-dom"
import { Container } from "../../components/Container/Container"
import { Logo } from "./Logo/Logo"
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher"
import s from "./Header.module.css"

export const Header = () => {
  const linkStyle = ({ isActive }: { isActive: boolean }) => (isActive ? s.active : "")

  return (
    <div className={s.header}>
      <Container>
        <div className={s.headerContentWrapper}>
          <Logo />

          <nav>
            <ul className={s.menu}>
              <li>
                <NavLink to="/home" className={linkStyle}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/games" className={linkStyle}>
                  Games
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" className={linkStyle}>
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={linkStyle}>
                  About
                </NavLink>
              </li>
            </ul>
          </nav>

          <ThemeSwitcher />
        </div>
      </Container>
    </div>
  )
}
