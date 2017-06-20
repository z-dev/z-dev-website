import React from 'react'
import ResponsiveContainer from 'components/core/responsiveContainer'
import Div from 'components/core/div'
import Text from 'components/core/text'
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

const Header = H2.extend`
  align-text: center;
`

const TeamMemberContainer = Div.extend`
  flex-direction: column;
  align-items: center;
  width: 400px;
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
      <H4>{props.name}</H4>
      <TeamMemberDescription>{props.description}</TeamMemberDescription>
      <a href={props.linkedInProfile}>
        <span className="contact-icon ion-social-linkedin" />
      </a>
    </TeamMemberContainer>
  )
}

export default () =>
  <Container>
    <Header>The Team</Header>
    <TeamMembersContainer>
      <TeamMember
        name="Richard"
        image="/static/Richheadshot.jpg"
        linkedInProfile="https://www.linkedin.com/in/richardgill3"
        description="Richard has a decade of experience ranging from Investment Banks to Start Ups. He enjoys learning new technologies and helping people solve real business problems."
      />
      <TeamMember
        name="John"
        image="/static/john_headshot.jpg"
        linkedInProfile="https://uk.linkedin.com/in/johnagill1"
        description="John specializes in frontend development. He‘s got a keen eye for detail and loves building great applications."
      />
    </TeamMembersContainer>
  </Container>

// <div className="team">
//   <div className="container">
//     <div className="row">
//       <h2 className="text-center team">The Team</h2>
//       <div className="col-xs-12 col-sm-12 col-md-6 text-center">
//         <img src="/static/Richheadshot.jpg" className="headshot" alt="Richard" />
//         <h4 className="padding-top-image">Richard</h4>
//         <p>
//           Richard has a decade of experience ranging from Investment Banks to Start Ups. He enjoys learning new technologies and helping people solve real business problems.
//         </p>
//         <a href="https://www.linkedin.com/in/richardgill3">
//           <span className="contact-icon ion-social-linkedin" />
//         </a>
//       </div>
//       <div className="col-xs-12 col-sm-12 col-md-6 text-center team-member">
//         <img src="/static/john_headshot.jpg" className="headshot" alt="John" />
//         <h4 className="padding-top-image">John</h4>
//         <p>John specializes in frontend development. He‘s got a keen eye for detail and loves building great applications.</p>
//         <a href="https://uk.linkedin.com/in/johnagill1">
//           <span className="contact-icon ion-social-linkedin" />
//         </a>
//       </div>
//     </div>
//   </div>
// </div>
