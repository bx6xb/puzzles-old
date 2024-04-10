import styled from "styled-components"

type PlayButtonPropsType = {
  callback: () => void
}

export const PlayButton = (props: PlayButtonPropsType) => {
  return <StyledPlayButton onClick={props.callback}>Play</StyledPlayButton>
}

const StyledPlayButton = styled.button`
  border: 1px solid white;
  padding: 5px;
`
