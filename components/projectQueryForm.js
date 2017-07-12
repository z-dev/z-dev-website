import React, { Component } from 'react'
import firebase from 'firebase'
import moment from 'moment-timezone'
import _ from 'lodash'
import 'common/initializeFirebase.js'
import Div from 'components/core/div.js'
import Form from 'components/core/form.js'
import Button from 'components/core/button.js'
import ResponsiveContainer from 'components/core/responsiveContainer'
import { H3 } from 'components/core/headerText'
import styled from 'styled-components'

const OuterContainer = styled(ResponsiveContainer)`
  #innerContainer {
    align-items: center;
    border: solid 1px #dedee0;
    background: white;
    display: flex;

    @media (min-width: ${props => props.theme.screenLgMin}px) {
      max-width: ${props => props.theme.screenLgWidth / 2.5}px;
      min-width: ${props => props.theme.screenLgWidth / 2.5}px;
      margin-left: auto;
      margin-right: auto;
    }

    @media (max-width: ${props => props.theme.screenLgMin}px) {
      padding-left: 25px;
      padding-right: 25px;
    }
  }

  margin-top: 50px;
  flex-direction: column;
  align-items: center;
`

const FormContainer = styled(Div)`
  width: 100%;
  flex-direction: column;
  align-items: center;
`
const FormHeaderContainer = styled(Div)`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`

const TextArea = styled.textarea`
  height: 100px;
`

const CloseQueryButton = styled.a`
  display: flex;
  align-self: center;
  margin-left: 15px;

  :hover {
    text-decoration: none;
  }
`

const InvisibleCloseQueryButton = styled.a`
  display: flex;
  visibility: hidden;
  justify-self: flex-end;
`

const ProjectQueryForm = styled(Form)`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Label = styled.label`
  margin-top: 20px;
`
const InputContainer = styled(Div)`
  flex-direction: column;
  width: 100%;
`

const SendQueryButton = styled(Button)`
  margin-top: 25px;
  font-size: 16px;
  display: flex;
  align-self: center;
  margin-bottom: 25px;
`

const Text = styled.text`
  margin-bottom: 20px;
`

const MessageSentTitle = styled(H3)`
  margin: 40px;
  text-align: center;
`

export default class ProjectForm extends Component {
  constructor() {
    super()
    this.state = { name: '', email: '', message: '', messageSent: false, incompleteDataEntered: false }
  }

  onFormSubmit() {
    const timestamp = moment().tz('Europe/London').utc().format()
    this.sendMessage({
      [timestamp]: {
        userName: this.state.name,
        userEmail: this.state.email,
        userMessage: this.state.message,
      },
    })
  }

  updateName(value) {
    this.setState({ name: value })
  }

  updateEmail(value) {
    this.setState({ email: value })
  }

  updateMessage(value) {
    this.setState({ message: value })
  }

  sendMessage(message) {
    if (this.state.name && this.state.email && this.state.message) {
      firebase.database().ref('/projectQueries').update(message)
      this.setState({ name: '', email: '', message: '', messageSent: true, incompleteDataEntered: false })
      _.delay(() => this.props.onXClick(), 5000)
    } else {
      this.setState({ incompleteDataEntered: true })
    }
  }

  render() {
    return (
      <OuterContainer>
        {this.state.messageSent
          ? <MessageSentTitle>Your enquiry has been sent, we will be in touch soon</MessageSentTitle>
          : <FormContainer>
              <FormHeaderContainer>
                <InvisibleCloseQueryButton>X</InvisibleCloseQueryButton>
                <H3>Tell us about your project</H3>
                <CloseQueryButton href="#" onClick={() => this.props.onXClick()}>X</CloseQueryButton>
              </FormHeaderContainer>
              <ProjectQueryForm onSubmit={() => this.onFormSubmit()}>
                <InputContainer>
                  <Label htmlFor="name">Name:</Label>
                  <input id="name" type="text" value={this.state.name} onChange={event => this.updateName(event.target.value)} />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="email">Email:</Label>
                  <input id="email" type="text" value={this.state.email} onChange={event => this.updateEmail(event.target.value)} />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="message">Message:</Label>
                  <TextArea id="message" value={this.state.message} onChange={event => this.updateMessage(event.target.value)} />
                </InputContainer>
                <SendQueryButton>Send your query</SendQueryButton>
              </ProjectQueryForm>
              {this.state.incompleteDataEntered ? <Text>Please fill out all of the boxes above</Text> : null}
            </FormContainer>}

      </OuterContainer>
    )
  }
}
