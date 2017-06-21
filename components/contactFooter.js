import React from 'react'
import ResponsiveContainer from 'components/core/responsiveContainer'
import Div from 'components/core/div'
import Link from 'components/core/link'
import { H5 } from 'components/core/headerText'
import { IoniconLink } from 'components/core/ionicons'
import styled from 'styled-components'

const Container = styled(ResponsiveContainer)`
  background-color: ${props => props.theme.backgroundColor};

  #innerContainer {
    justify-content: space-between;
    flex-direction: row;

    @media (max-width: ${props => props.theme.screenXsMax}px) {
      flex-direction: column;
    }

    align-items: stretch;
  }

  padding-top: 25px;
  padding-bottom: 25px;
`

const ContactContainer = Div.extend`
  flex-direction: column;
  align-items: center;
  flex: 1;
  @media (max-width: ${props => props.theme.screenXsMax}px) {
    margin-bottom: 30px;
  }
`

const ContactInnerContainer = Div.extend`
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin-top: 15px;
`

const ContactLink = Link.extend`
  text-align: center;
  margin-bottom: 10px;
`

export default () =>
  <Container>
    <ContactContainer>
      <H5>Location</H5>
      <ContactInnerContainer>
        <ContactLink href="https://www.google.co.uk/maps/place/5+Scrutton+St,+London+EC2A+4HJ/@51.5235371,-0.0857933,17z/data=!3m1!4b1!4m5!3m4!1s0x48761cafc64645e3:0x985b56deeafe698c!8m2!3d51.5235371!4d-0.0836046">
          5 Scrutton Street, London, EC2A 4HJ
        </ContactLink>
      </ContactInnerContainer>
    </ContactContainer>
    <ContactContainer>
      <H5>Contact</H5>
      <ContactInnerContainer>
        <ContactLink href="tel:+442071758119">0207 1758119</ContactLink>
        <ContactLink href="mailto:hello@z-dev.io">hello@z-dev.io</ContactLink>
      </ContactInnerContainer>
    </ContactContainer>
    <ContactContainer>
      <H5>LinkedIn</H5>
      <ContactInnerContainer>
        <IoniconLink url="https://www.linkedin.com/company/zdev-limited" icon="ion-social-linkedin" />
      </ContactInnerContainer>
    </ContactContainer>
  </Container>
