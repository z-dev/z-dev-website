import React from 'react'
import Div from './div'

const OuterContainer = Div.extend`
  flex: 1;
  display: flex;

  #innerContainer {
    flex: 1;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: ${props => props.theme.screenXsMax}px) {
      margin-left: ${props => props.theme.xsGridMargin}px;
      margin-right: ${props => props.theme.xsGridMargin}px;
    }

    @media (min-width: ${props => props.theme.screenXsMin}px) and (max-width: ${props => props.theme.screenSmMax}px) {
      margin-left: ${props => props.theme.smGridMargin}px;
      margin-right: ${props => props.theme.smGridMargin}px;
    }

    @media (min-width: ${props => props.theme.screenSmMin}px) and (max-width: ${props => props.theme.screenMdMax}px) {
      margin-left: ${props => props.theme.mdGridMargin}px;
      margin-right: ${props => props.theme.mdGridMargin}px;
    }

    @media (min-width: ${props => props.theme.screenMdMin}px) and (max-width: ${props => props.theme.screenLgMin}px) {
      margin-left: ${props => props.theme.lgGridMargin}px;
      margin-right: ${props => props.theme.lgGridMargin}px;
    }

    @media (min-width: ${props => props.theme.screenLgMin}px) {
      max-width: ${props => props.theme.screenLgWidth}px;
      min-width: ${props => props.theme.screenLgWidth}px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`

export default props => {
  return (
    <OuterContainer className={props.className}>
      <Div id="innerContainer">{props.children}</Div>
    </OuterContainer>
  )
}
