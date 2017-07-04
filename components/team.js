import React from 'react'
import ResponsiveContainer from 'components/core/responsiveContainer'
import Div from 'components/core/div'
import Text from 'components/core/text'
import { IoniconLink } from 'components/core/ionicons'
import { H2, H4 } from 'components/core/headerText'
import styled from 'styled-components'

const Container = styled(ResponsiveContainer)`
  #innerContainer {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  padding-top: 30px;
  padding-bottom: 25px;
`

const Header = H2.extend`align-text: center;`

const TeamMemberContainer = Div.extend`
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 30px;
  @media (max-width: ${props => props.theme.screenXsMax}px) {
    width: auto;
  }
`

const HeadShotImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
`

const TeamMemberDescription = Text.extend`
  margin-top: 15px;
  text-align: center;
`

const TeamMembersContainer = Div.extend`
  flex-wrap: wrap;
  justify-content: center;
`

const TeamMember = props => {
  return (
    <TeamMemberContainer>
      <HeadShotImage src={props.image} alt={props.name} />
      <H4>
        {props.name}
      </H4>
      <TeamMemberDescription>
        {props.description}
      </TeamMemberDescription>
      <IoniconLink url={props.linkedInProfile} icon="ion-social-linkedin" />
    </TeamMemberContainer>
  )
}

export default () =>
  <Container>
    <Header>The Team</Header>
    <TeamMembersContainer>
      <TeamMember
        name="Richard"
        image="/static/staff/rich.jpg"
        linkedInProfile="https://www.linkedin.com/in/richardgill3"
        description="Richard has a decade of experience ranging from Investment Banks to Start Ups. He enjoys learning new technologies and helping people solve real business problems."
      />
      <TeamMember
        name="John"
        image="/static/staff/john.jpg"
        linkedInProfile="https://uk.linkedin.com/in/johnagill1"
        description="John specializes in frontend development. He‘s got a keen eye for detail and loves building great applications."
      />
    </TeamMembersContainer>
  </Container>
