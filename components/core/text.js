import styled from 'styled-components'

export default styled.p`
  font-family: ${props => props.theme.sansFontFamily};
  font-weight: ${props => props.theme.fontWeight};
  color: ${props => props.theme.textFontColor};
`
