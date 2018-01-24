import React, { Component } from 'react'
import ResponsiveContainer from 'components/core/responsiveContainer'
import Button from 'components/core/button'
import { H1 } from 'components/core/headerText'
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
const Header = H1.extend`
  text-align: center;
  font-weight: 500;
`

const Logo = styled.img`
  width: 300px;
  margin: 20px 0 28px;

  @media (max-width: ${props => props.theme.screenXsMax}px) {
    display: none;
  }
`

const CallToAction = Button.extend`
  margin-top: 48px;
  cursor: pointer;

  :focus {
    outline: 0;
  }
`

const modalStyle = {
  overlay: {
    top: 75,
  },
  content: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    border: 'none',
    background: 'none',
  },
}
export default class About extends Component {
  constructor() {
    super()
    this.state = { projectModalOpen: false }
  }

  openProjectQueryModal() {
    this.setState({ projectModalOpen: true })
  }

  closeProjectQueryModal() {
    this.setState({ projectModalOpen: false })
  }

  render() {
    return (
      <Container>
        <Logo src="/static/logo.svg" alt="ZDev logo" />
        <Header>Website and App Developers</Header>
        <CallToAction onClick={() => this.openProjectQueryModal()}>Tell us about your project</CallToAction>
        <Modal isOpen={this.state.projectModalOpen} contentLabel="Project Query Modal" style={modalStyle}>
          <ProjectQueryForm onXClick={() => this.closeProjectQueryModal()} />
        </Modal>
      </Container>
    )
  }
}
