import styled from "styled-components"

type FlexContainerPropsType = {
  $justifyContent?: string
  $alignItems?: string
  $flexWrap?: string
  $gap?: string
  $flexDirection?: string
}

export const FlexContainer = styled.div<FlexContainerPropsType>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${(p) => p.$justifyContent || "start"};
  align-items: ${(p) => p.$alignItems || "start"};
  flex-wrap: ${(p) => p.$flexWrap || "nowrap"};
  gap: ${(p) => p.$gap || "0px"};
  flex-direction: ${(p) => p.$flexDirection || "row"};
  position: relative;
`
