import styled from "styled-components"
import { Container } from "../../components/Container/Container"
import { Theme } from "../../style/Theme"

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Container>Footer</Container>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: ${Theme.colors.main};
  box-shadow: 0px -1px 6px 0px rgba(0, 0, 0, 0.5);
  min-height: 100px;
`
