import styled from 'styled-components'

const Button = styled.button`
  color: white;
  padding: 8px 16px;
  font-size: 20px;
  border-radius: 4px;
  background-color: ${props => props.theme.primaryColor};
  border-color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.fontFamily};
  font-weight: 300;
`

export const LinkButton = Button.withComponent('a').extend`
  text-decoration: none;
  :hover {
    color: white;
    text-decoration: none;
  }
  :link {
     text-decoration: none;
  }
  :visited {
    color: white;
    text-decoration: none;
  }
`

export default Button
