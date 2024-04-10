import styled from "styled-components"
import { FlexContainer } from "../../../components/FlexContainer/FlexContainer"
import { Icon } from "../../../components/Icon/Icon"
import { Theme } from "../../../style/Theme"

export const Logo = () => {
  return (
    <FlexContainer $gap="10px" $alignItems="center">
      <Icon iconId="logo" width="40" height="31" />
      <LogoName>Puzzles.com</LogoName>
    </FlexContainer>
  )
}

const LogoName = styled.span`
  font-weight: 700;
  font-size: 22px;
  color: ${Theme.colors.second};
`
