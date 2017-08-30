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
      <TeamMemberDescription>
        {props.description2}
      </TeamMemberDescription>
      {props.linkedInProfile ? <IoniconLink url={props.linkedInProfile} icon="ion-social-linkedin" /> : null}
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
        description="Richard has over a decade of experience ranging from Investment Banks to Start Ups. He also enjoys watching rocket launches."
      />
      <TeamMember
        name="John"
        image="/static/staff/john.png"
        description="John is a Javascript, C# and Go developer. When he's not coding he's competing in or watching e-sports."
      />
      <TeamMember
        name="Alex"
        image="/static/staff/alex.png"
        description="Alex is a fullstack developer. He builds awesome chatbots and websites. When he's not doing that - he's probably listening to 80's music."
      />
      <TeamMember name="Dan" image="/static/staff/dan.png" description="Dan builds great Apps. In his downtime he's probably reading a classic novel." />
    </TeamMembersContainer>
  </Container>
