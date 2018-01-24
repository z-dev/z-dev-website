import Text from './text'

export default Text.withComponent('a').extend`
 color: ${props => props.theme.linkColor};
 text-decoration: none;
`
