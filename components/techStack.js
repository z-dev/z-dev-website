import React from 'react'
import ResponsiveContainer from 'components/core/responsiveContainer'
import Div from 'components/core/div'
import Text from 'components/core/text'
import Link from 'components/core/link'
import { Ionicon } from 'components/core/ionicons'
import { H2, H5 } from 'components/core/headerText'
import styled from 'styled-components'

const Container = styled(ResponsiveContainer)`
  background-color: ${props => props.theme.backgroundColor};

  #innerContainer {
    justify-content: center;
    flex-direction: column;
    align-items: stretch;
  }

  padding-top: 30px;
  padding-bottom: 45px;
`

const Header = H2.extend`text-align: center;`

const Tagline = H5.extend`text-align: center;`

const TechStackContainer = Div.extend`
  flex-direction: column;
  align-items: center;
`

const Headline = Text.extend`
  font-size: 19.2px;
  margin-top: 15px;
  margin-bottom: 20px;
  text-align: center;
`

const LogoImage = styled.img`
  height: 40px;
  margin: 20px;
`

const Logo = props => <LogoImage src={`/static/techStackLogos/${props.logo}`} alt={props.altText} style={props.style} />

const LogosContainer = Div.extend`
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  flex-wrap: wrap;
  max-width: 1000px;
`

export default () =>
  <Container>
    <TechStackContainer>
      <Header>Tech Stack</Header>
      <Tagline>We‘re Fullstack Javascript Developers.</Tagline>
      <Headline>We work with:</Headline>
      <LogosContainer>
        <Logo logo="node.svg" altText="Node" />
        <Logo logo="npm.svg" altText="npm" />
        <Logo logo="react.svg" altText="React" />
        <Logo logo="reactNative.svg" altText="React Native" />
        <Logo logo="redux.png" altText="Redux" />
        <Logo logo="firebase.png" altText="Firebase" />
        <Logo logo="next.png" altText="next.js" />
        <Logo logo="webpack.png" altText="Webpack" />
        <Logo logo="docker.png" altText="Docker" />
      </LogosContainer>
      <Headline>
        See our{' '}
        <Link href="https://github.com/z-dev/code-portfolio/blob/master/readme.md">
          code portfolio <Ionicon className="ion-social-github" />
        </Link>{' '}
        for examples of how we build things.
      </Headline>
    </TechStackContainer>
  </Container>
