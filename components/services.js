import React from 'react'
import ResponsiveContainer from 'components/core/responsiveContainer'
import Div from 'components/core/div'
import Text from 'components/core/text'
import { Ionicon } from 'components/core/ionicons'
import { H2, H6 } from 'components/core/headerText'
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

const InnerContainer = Div.extend`
  flex-direction: column;
  align-items: center;
`

const ServicesContainer = Div.extend`
  flex-wrap: wrap;
  justify-content: center;
`
const ServiceContainer = Div.extend`
  flex-direction: column;
  align-items: center;
  width: 350px;
  @media (max-width: ${props => props.theme.screenXsMax}px) {
    width: auto;
  }
  margin: 30px;
`
const RightHandSide = Div.extend`flex-direction: column;`

const ServiceIonicon = styled(Ionicon)`
  font-size: 60px;
  margin-bottom: -8px;
`

const ServiceTitle = H6.extend`
  text-align: center;
  margin: 15px 0 5px 0;
`

const ServiceBody = Text.extend`
  text-align: center;
  margin-top: 5px;
`

const Service = props => {
  return (
    <ServiceContainer>
      <ServiceIonicon className={props.icon} />
      <RightHandSide>
        <ServiceTitle>
          {props.title}
        </ServiceTitle>
        <ServiceBody>
          {props.body}
        </ServiceBody>
      </RightHandSide>
    </ServiceContainer>
  )
}

export default () =>
  <Container>
    <InnerContainer>
      <Header>Services</Header>
      <ServicesContainer>
        <Service title="Web Development" body="We build modern websites using cutting edge technology" icon="ion-monitor" />
        <Service title="App Development" body="We build for iOS and Android Apps and ship them to the App Store" icon="ion-iphone" />
        <Service title="UX & UI Design" body="Simplify your product with design sprints, research, and user tests" icon="ion-android-color-palette" />
        <Service title="Backend & API development" body="Experts at storing data and building APIs" icon="ion-ios-lightbulb" />
        <Service title="DevOps & Deployment" body="We have expertise in many cloud services to help you ship your product more often, with less issues" icon="ion-android-cloud" />
        <Service title="Tech Advice & Consulting" body="Advice for startups and corporates alike" icon="ion-ios-lightbulb" />
      </ServicesContainer>
    </InnerContainer>
  </Container>
