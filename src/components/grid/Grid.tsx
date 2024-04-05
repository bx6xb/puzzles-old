import styled from "styled-components"
import { GridFieldType } from "../../redux/schulteTableReducer/schulteTableReducer"

type GridPropsType = {
  gridWidth: number
  gridHeight: number
  fields: GridFieldType[]
  fieldOnClick: (index: number) => void
}

export const Grid = (props: GridPropsType) => {
  const fieldOnClickHandler = (index: number) => {
    props.fieldOnClick(index)
  }

  return (
    <StyledGrid $gridWidth={props.gridWidth} $gridHeight={props.gridHeight}>
      {props.fields &&
        props.fields.map((field, i) => (
          <Field
            key={field.text}
            $backgroundColor={field.backgroundColor}
            $color={field.color}
            onClick={() => fieldOnClickHandler(i)}
          >
            {field.text}
          </Field>
        ))}
    </StyledGrid>
  )
}

type StyledGridPropsType = {
  $gridWidth: number
  $gridHeight: number
}

const StyledGrid = styled.div<StyledGridPropsType>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(${(p) => p.$gridWidth}, 1fr);
  grid-template-rows: repeat(${(p) => p.$gridHeight}, 1fr);
  border: 1px solid black;
`

type FieldPropsType = {
  $backgroundColor?: string
  $color?: string
}

const Field = styled.div<FieldPropsType>`
  /* border: 1px solid black; */
  background-color: ${(p) => p.$backgroundColor || "transparent"};
  color: ${(p) => p.$color || "black"};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  user-select: none;
`
