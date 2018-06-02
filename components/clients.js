import React from 'react'
import ResponsiveContainer from 'components/core/responsiveContainer'
import Div from 'components/core/div'
import Text from 'components/core/text'
import { H2 } from 'components/core/headerText'
import styled from 'styled-components'
import Carousel from 'react-slick'

const projectWidth = 800
const projectResponsiveBreak = 850

const Container = styled(ResponsiveContainer)`
  #innerContainer {
    justify-content: center;
    flex-direction: column;
    align-items: stretch;
    width: 90%;
  }

  padding-top: 0;
  padding-bottom: 45px;
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
  margin: 20px 0px 40px;
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
  width: ${projectWidth / 2}px;
`

const ExpressoImageContainer = Div.extend`
  width: ${projectWidth / 2}px;

  @media (max-width: ${projectResponsiveBreak}px) {
    width: ${projectWidth / 2.5}px;
  }
  justify-content: center;
  * {
    min-height: 0;
    min-width: 0;
  }
`
const LogosContainer = Div.extend`
  justify-content: center;
  margin: 20px 0px 40px;
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
  width: 300px;
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
  margin: 50px 0 30px;
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
`

const Intro = Div.extend`
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const CarouselItem = Div.extend`
  justify-content: center;
  display: flex !important;
`

const ExpressoLogo = styled.img`
  height: 40px;
  margin-bottom: 20px;
`

export default () => (
  <Container>
    <Intro>
      <TopHeader>{"We'd love to work with you"}</TopHeader>
      <ClientText>
        {
          "We've worked on a variety of projects with a wide range of clients, each with a unique problem set and perspective. We continually improve our process and do our best work in strong partnerships with our clients."
        }
      </ClientText>
      <Seperator />
    </Intro>
    <LogosContainer>
      <LogosInnerContainer>
        <JogLogo src="/static/clients/jogLogo.svg" />
        <KinteractLogo src="/static/clients/kinteractLogo.svg" />
        <DressipiLogo src="/static/clients/dressipiLogo.svg" />
      </LogosInnerContainer>
    </LogosContainer>
    <ExpressoProjectContainer>
      <ExpressoProject>
        <ExpressoImageContainer>
          <Carousel slidesToShow={1} autoplay autoplaySpeed={4000} draggable={false} infinite>
            <CarouselItem>
              <Expresso src="/static/projects/zdevexpresso.png" alt="Expresso App" />
            </CarouselItem>
            <CarouselItem>
              <Expresso src="/static/projects/expresso1.jpg" alt="Expresso App" />
            </CarouselItem>
            <CarouselItem>
              <Expresso src="/static/projects/expresso2.jpg" alt="Expresso App" />
            </CarouselItem>
            <CarouselItem>
              <Expresso src="/static/projects/expresso3.jpg" alt="Expresso App" />
            </CarouselItem>
          </Carousel>
        </ExpressoImageContainer>
        <ExpressoTextContainer>
          <ExpressoTextInnerContainer>
            <ExpressoLogo src="/static/projects/expressoLogo.svg" />
            <ExpressoText>We partnered with the team at Expresso to take their idea from paper to the App Store.</ExpressoText>
            <ExpressoText>Expresso is an App to allow people to pre-order coffee and pick it up.</ExpressoText>
            <ExpressoText>We built a beautiful App to prove the business case.</ExpressoText>
          </ExpressoTextInnerContainer>
        </ExpressoTextContainer>
      </ExpressoProject>
    </ExpressoProjectContainer>
  </Container>
)
