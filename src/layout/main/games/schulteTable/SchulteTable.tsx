import styled from "styled-components"
import { Grid } from "../../../../components/Grid/Grid"
import { FlexContainer } from "../../../../components/FlexContainer/FlexContainer"
import { Theme } from "../../../../style/Theme"
import { PlayButton } from "../../../../components/PlayButton/PlayButton"
import { GameContainer } from "../../../../components/GameContainer/GameContainer"
import { useSchulteTable } from "./hooks/useSchulteTable"

export const SchulteTable = () => {
  const {
    gridSize,
    bestRecords,
    currentNumber,
    firstInit,
    messageText,
    fields,
    fieldOnClick,
    restartBtnHandler,
    playBtnHandler,
  } = useSchulteTable()

  return (
    <GameContainer>
      <FlexContainer $flexDirection="column" $justifyContent="space-evenly" $alignItems="center">
        <BestTime>
          Best time {gridSize + "x" + gridSize}: {bestRecords[gridSize]}
        </BestTime>
        {currentNumber ? <CurrentNumber>Find {currentNumber}</CurrentNumber> : null}
      </FlexContainer>
      <GridContainer>
        {firstInit ? (
          <FlexContainer $justifyContent="center" $alignItems="center">
            <PlayButton callback={playBtnHandler} />
          </FlexContainer>
        ) : messageText ? (
          <FlexContainer $justifyContent="center" $alignItems="center">
            {messageText}
          </FlexContainer>
        ) : (
          <Grid
            gridWidth={gridSize}
            gridHeight={gridSize}
            fields={fields}
            fieldOnClick={fieldOnClick}
          />
        )}
      </GridContainer>

      <RestartButton onClick={restartBtnHandler}>
        <FlexContainer $justifyContent="center" $alignItems="center">
          Restart
        </FlexContainer>
      </RestartButton>
    </GameContainer>
  )
}

const GridContainer = styled.div`
  width: 600px;
  height: 600px;
  margin: 0 auto 15px;
  border: 1px solid black;
  ${FlexContainer} {
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 100px;
    color: white;
  }
`
const BestTime = styled.span`
  text-align: center;
  font-size: 30px;
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 50px;
`
const CurrentNumber = styled.span`
  text-align: center;
  margin-bottom: 5px;
  font-size: 25px;
  position: absolute;
  bottom: 5px;
`
const RestartButton = styled.button`
  background-color: ${Theme.colors.accent};
  width: 270px;
  height: 50px;
  font-size: 20px;
  transition: 0.2s;
  color: white;
  &:hover {
    transform: scale(1.1);
  }
`
