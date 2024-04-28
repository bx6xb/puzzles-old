import styled from "styled-components"
import { Grid } from "../../../../components/Grid/Grid"
import { GridFieldType } from "../../../../redux/schulteTableReducer/schulteTableReducer"
import React from "react"
import { FlexContainer } from "../../../../components/FlexContainer/FlexContainer"
import { Theme } from "../../../../style/Theme"
import { PlayButton } from "../../../../components/PlayButton/PlayButton"
import { GameContainer } from "../../../../components/GameContainer/GameContainer"

type SchulteTablePropsType = {
  gridSize: number
  fields: GridFieldType[]
  bestRecord: number
  currentNumber: number
  fieldOnClick: (index: number) => void
  messageText?: React.ReactNode
  restartBtnHandler: () => void
  shouldPlayButtonDisplayed: boolean
  playBtnHandler: () => void
}

export const SchulteTable = React.memo((props: SchulteTablePropsType) => {
  return (
    <GameContainer>
      <FlexContainer $flexDirection="column" $justifyContent="space-evenly" $alignItems="center">
        <BestTime>
          Best time {props.gridSize + "x" + props.gridSize}: {props.bestRecord}
        </BestTime>
        {props.currentNumber ? <CurrentNumber>Find {props.currentNumber}</CurrentNumber> : null}
      </FlexContainer>
      <GridContainer>
        {props.shouldPlayButtonDisplayed ? (
          <FlexContainer $justifyContent="center" $alignItems="center">
            <PlayButton callback={props.playBtnHandler} />
          </FlexContainer>
        ) : props.messageText ? (
          <FlexContainer $justifyContent="center" $alignItems="center">
            {props.messageText}
          </FlexContainer>
        ) : (
          <Grid
            gridWidth={props.gridSize}
            gridHeight={props.gridSize}
            fields={props.fields}
            fieldOnClick={props.fieldOnClick}
          />
        )}
      </GridContainer>

      <RestartButton onClick={props.restartBtnHandler}>
        <FlexContainer $justifyContent="center" $alignItems="center">
          Restart
        </FlexContainer>
      </RestartButton>
    </GameContainer>
  )
})

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
