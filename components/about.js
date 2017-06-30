import React from 'react'
import ResponsiveContainer from 'components/core/responsiveContainer'
import { LinkButton } from 'components/core/button'
import { H3 } from 'components/core/headerText'
import styled from 'styled-components'

const Container = styled(ResponsiveContainer)`
  #innerContainer {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;
    padding-bottom: 90px;
  }

  padding-top: 30px;
  padding-bottom: 25px;
`
const Header = H3.extend`text-align: center;`

const Logo = styled.img`
  width: 300px;
  margin-bottom: 28px;

  @media (max-width: ${props => props.theme.screenXsMax}px) {
    display: none;
  }
`

const CallToAction = LinkButton.extend`margin-top: 48px;`

export default () =>
  <Container>
    <Logo src="/static/logo.svg" alt="ZDev logo" />
    <Header>Website and App Developers</Header>
    <CallToAction href="#contact" data-scroll="true">
      Tell us about your project
    </CallToAction>
  </Container>
