import styled from "styled-components"
import { Icon } from "../../../components/Icon/Icon"

export const ThemeSwitcher = () => {
  return (
    <StyledThemeSwitcher>
      <Icon iconId="themeSwitcher" width="25" height="25" />
    </StyledThemeSwitcher>
  )
}

const StyledThemeSwitcher = styled.div`
  svg {
    cursor: pointer;
  }
`
