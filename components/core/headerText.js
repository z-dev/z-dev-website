import styled from 'styled-components'

const H1 = styled.h1`
  font-family: ${props => props.theme.headerFont};
  color: ${props => props.theme.headerFontColor};
`
export const H2 = H1.withComponent('h2').extend`
  fontSize: ${props => props.theme.h2FontSize};
  font-weight: 500;
`

export const H4 = H1.withComponent('h4').extend`
  fontSize: ${props => props.theme.h4FontSize};
  font-weight: normal;
  color: ${props => props.theme.smallerHeaderFontColor};
`

export const H5 = H1.withComponent('h5').extend`
  fontSize: ${props => props.theme.h5FontSize};
  font-weight: normal;
  color: ${props => props.theme.smallerHeaderFontColor};
`

export const H6 = H1.withComponent('h6').extend`
  fontSize: ${props => props.theme.h6FontSize};
  font-weight: normal;
  color: ${props => props.theme.smallerHeaderFontColor};
`
