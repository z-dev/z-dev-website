import React from 'react'
import ResponsiveContainer from 'components/core/responsiveContainer'
import Div from 'components/core/div'
import Text from 'components/core/text'
import { LinkButton } from 'components/core/button'
import { H2, H3, H4 } from 'components/core/headerText'
import styled from 'styled-components'

const projectWidth = 800
const projectResponsiveBreak = 850

const Container = styled(ResponsiveContainer)`
  #innerContainer {
    justify-content: center;
    flex-direction: column;
    align-items: stretch;
  }

  padding-top: 0;
  padding-bottom: 45px;
`

const Header = H3.extend`
  align-text: center;
  padding-bottom: 0;
  margin-top: 0;
  @media (max-width: ${projectResponsiveBreak}px) {
    display:none;
  }
`

const ViewProjectButton = LinkButton.extend`
  @media (max-width: ${projectResponsiveBreak}px) {
    margin-top: 15px;
  }
`

const ClientHeader = H4.extend`
`

const ExpressoProject = Div.extend`
  flex-direction: row;
  width: ${projectWidth}px;
  @media (max-width: ${projectResponsiveBreak}px) {
    flex-direction: column;
    align-items: center;
    width: auto;
  }
`

const ExpressoProjectContainer = Div.extend`
  flex-direction: column;
  align-items: center;
  margin: 20px 0px 80px;
`
const ClientsInnerContainer = Div.extend`
  flex-direction: column;
  align-items: center;
`
const ClientsContainer = Div.extend`
  flex-direction: column;
  align-items: stretch;
`
const ExpressoTextInnerContainer = Div.extend`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 297px;
  @media (max-width: ${projectResponsiveBreak}px) {
    align-items: center;
  }
`
const ExpressoTextContainer = Div.extend`
  @media (max-width: ${projectResponsiveBreak}px) {
    margin-top: 40px;
    width: auto;
  }
  justify-content: center;
  width: ${projectWidth / 2}px
`

const ExpressoImageContainer = Div.extend`
  width: ${projectWidth / 2}px;
  @media (max-width: ${projectResponsiveBreak}px) {
    width: auto;
  }
  justify-content: center;
`
const LogosContainer = Div.extend`
  margin-top: 50px;
  justify-content: center;
`
const LogosInnerContainer = Div.extend`
  max-width: 900px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`

const Expresso = styled.img`
  border-radius: 8px;
  height: 300px;
`

const ExpressoText = Text.extend`
  font-size: 18px;
  @media (max-width: ${projectResponsiveBreak}px) {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`
const ClientText = Text.extend`
  font-size: 18px;
  text-align: center;
  max-width: 700px;
`

const Seperator = styled.hr`
  width: 150px;
  border-top: 3px solid ${props => props.theme.primaryColor};
  margin-bottom: 30px;
`

const JogLogo = styled.img`
  height: 90px;

  @media (max-width: ${props => props.theme.screenXsMax}px) {
    height: 60px;
  }
`
const DressipiLogo = styled.img`
  height: 50px;

  @media (max-width: ${props => props.theme.screenXsMax}px) {
    height: 30px;
  }
`
const KinteractLogo = styled.img`
  height: 100px;

  @media (max-width: ${props => props.theme.screenXsMax}px) {
    height: 65px;
  }
`
const TopHeader = H2.extend`
  text-align: center;
  margin-bottom: 40px;
`

export default () =>
  <Container>
    <ExpressoProjectContainer>
      <TopHeader>Our Clients</TopHeader>
      <ExpressoProject>
        <ExpressoImageContainer>
          <Expresso src="/static/zdevexpresso.png" alt="Expresso App" />
        </ExpressoImageContainer>
        <ExpressoTextContainer>
          <ExpressoTextInnerContainer>
            <Header>Expresso</Header>
            <ExpressoText>We partnered with the guys at Expresso to take their idea from paper to App Store.</ExpressoText>
            <ExpressoText>We built a beautiful App to prove the business case.</ExpressoText>
            <ViewProjectButton>View Project</ViewProjectButton>
          </ExpressoTextInnerContainer>
        </ExpressoTextContainer>
      </ExpressoProject>
    </ExpressoProjectContainer>
    <ClientsContainer>
      <ClientsInnerContainer>
        <ClientHeader>{"We'd love to work with you"}</ClientHeader>
        <Seperator />
        <ClientText>
          {
            "We've worked on a variety of projects with a wide range of clients, each with a unique problem set and perspective. We continually improve our process and do our best work in strong partnerships with our clients."
          }
        </ClientText>
      </ClientsInnerContainer>
      <LogosContainer>
        <LogosInnerContainer>
          <JogLogo src="/static/clients/jogLogo.svg" />
          <KinteractLogo src="/static/clients/kinteractLogo.svg" />
          <DressipiLogo src="/static/clients/dressipiLogo.svg" />
        </LogosInnerContainer>
      </LogosContainer>
    </ClientsContainer>
  </Container>
