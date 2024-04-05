import styled from "styled-components"
import { Container } from "../../components/container/Container"

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>Footer</Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: darkred;
`
