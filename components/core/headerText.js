import styled from 'styled-components'

export const H1 = styled.h1`
  font-family: ${props => props.theme.headerFont};
  color: ${props => props.theme.headerFontColor};
`
export const H2 = H1.withComponent('h2').extend`
  font-size: ${props => props.theme.h2FontSize};
  font-weight: 500;
`

export const H3 = H2.withComponent('h3').extend`
  font-size: ${props => props.theme.h3FontSize};
`

export const H4 = H1.withComponent('h4').extend`
  font-size: ${props => props.theme.h4FontSize};
  font-weight: normal;
  color: ${props => props.theme.smallerHeaderFontColor};
`

export const H5 = H4.withComponent('h5').extend`
  font-size: ${props => props.theme.h5FontSize};
`

export const H6 = H1.withComponent('h6').extend`
  font-size: ${props => props.theme.h6FontSize};
  font-weight: 400;
`
