import React, { Component } from 'react'
import ResponsiveContainer from 'components/core/responsiveContainer'
import { LinkButton } from 'components/core/button'
import { H3 } from 'components/core/headerText'
import ProjectQueryForm from 'components/projectQueryForm'
import Modal from 'react-modal'
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

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 75,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  content: {
    position: 'absolute',
    top: '200px',
    left: '600px',
    right: '600px',
    bottom: '300px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
  },
}
export default class About extends Component {
  constructor() {
    super()
    this.state = { projectModalOpen: false }
  }

  onProjectQueryButtonClick() {
    this.setState({ projectModalOpen: true })
  }

  render() {
    return (
      <Container>
        <Logo src="/static/logo.svg" alt="ZDev logo" />
        <Header>Website and App Developers</Header>
        <CallToAction href="#contact" data-scroll="true" onClick={() => this.onProjectQueryButtonClick()}>
          Tell us about your project
        </CallToAction>
        <Modal isOpen={this.state.projectModalOpen} contentLabel="Project Query Modal" style={modalStyle}>
          <ProjectQueryForm />
        </Modal>
      </Container>
    )
  }
}
