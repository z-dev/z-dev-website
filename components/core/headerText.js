import styled from 'styled-components'

const H1 = styled.h1`
  font-family: ${props => props.theme.headerFont};
`
export const H5 = H1.withComponent('h5').extend`
  fontSize: ${props => props.theme.h5FontSize};
  font-weight: normal;
  color: ${props => props.theme.headerFontColor};
`
