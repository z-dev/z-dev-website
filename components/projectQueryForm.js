import React, { Component } from 'react'
import firebase from 'firebase'
import moment from 'moment'
import _ from 'lodash'
import 'common/initializeFirebase.js'
import Div from 'components/core/div.js'
import Form from 'components/core/form.js'
import Button from 'components/core/button.js'
import ResponsiveContainer from 'components/core/responsiveContainer'
import { H3, H5 } from 'components/core/headerText'
import Text from 'components/core/text.js'
import styled from 'styled-components'

const OuterContainer = styled(ResponsiveContainer)`
  #innerContainer {
    align-items: stretch;
    justify-content: stretch;
    flex: 1;
    border: solid 1px #dedee0;
    background: white;
    display: flex;

    @media (min-width: ${props => props.theme.screenSmMin}px) {
      max-width: ${props => props.theme.screenLgWidth / 2.5}px;
      min-width: ${props => props.theme.screenLgWidth / 2.5}px;
      margin-left: auto;
      margin-right: auto;
    }

    padding-left: 25px;
    padding-right: 25px;
  }

  margin-top: 50px;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  flex: 1;
`

const FormContainer = styled(Div)`
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  flex: 1;
`
const FormHeaderContainer = styled(Div)`
  flex-direction: row;
  justify-content: space-between;
`

const TextArea = styled.textarea`
  height: 100px;
  border: solid 1px #ccc;
  resize: none;
  font-size: 15px;
`

const CloseQueryButton = styled.a`
  display: flex;
  align-self: center;
  font-family: ${props => props.theme.serifFontFamily};
  text-decoration: none;

  :hover {
    text-decoration: none;
  }

  :active {
    color: black;
  }
`

const InvisibleCloseQueryButton = styled.a`
  display: flex;
  visibility: hidden;
`

const ProjectQueryForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  flex: 1;
`

const Label = styled.label`
  font-family: ${props => props.theme.serifFontFamily};
  margin: 20px 0 5px;
  font-weight: 500;
`

const Input = styled.input`
  font-family: ${props => props.theme.serifFontFamily};
  font-size: 15px;
`

const InputContainer = styled(Div)`
  flex-direction: column;
`

const SendQueryButton = styled(Button)`
  margin-top: 25px;
  font-size: 16px;
  display: flex;
  align-self: center;
  margin-bottom: 25px;
  cursor: pointer;

  :focus {
    outline: 0;
  }
`

const WarningText = styled(Text)`
  margin-bottom: 20px;
  text-align: center;
`

const MessageSentTitle = styled(H5)`
  margin: 40px;
  text-align: center;
`

const ProjectQueryTitle = styled(H3)`
  text-align: center;
`

const sendMessage = message => {
  firebase.database().ref('/projectQueries').update(message)
}

export default class ProjectForm extends Component {
  constructor() {
    super()
    this.state = { name: '', email: '', message: '', messageSent: false, formIncomplete: false }
  }

  onFormSubmit() {
    if (this.state.name && this.state.email && this.state.message) {
      const timestamp = moment().utc().format()
      sendMessage({
        [timestamp]: {
          userName: this.state.name,
          userEmail: this.state.email,
          userMessage: this.state.message,
        },
      })
      this.setState({ name: '', email: '', message: '', messageSent: true, formIncomplete: false })
      _.delay(() => this.props.onXClick(), 5000)
    } else {
      this.setState({ formIncomplete: true })
    }
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

  render() {
    return (
      <OuterContainer>
        <FormHeaderContainer>
          <InvisibleCloseQueryButton>X</InvisibleCloseQueryButton>
          <ProjectQueryTitle>How can we help you?</ProjectQueryTitle>
          <CloseQueryButton href="#" onClick={() => this.props.onXClick()}>X</CloseQueryButton>
        </FormHeaderContainer>
        {this.state.messageSent
          ? <MessageSentTitle>Your enquiry has been sent, we will be in touch soon</MessageSentTitle>
          : <FormContainer>
              <ProjectQueryForm onSubmit={() => this.onFormSubmit()}>
                <InputContainer>
                  <Label htmlFor="name">Name:</Label>
                  <Input id="name" type="text" value={this.state.name} onChange={event => this.updateName(event.target.value)} />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="email">Email:</Label>
                  <Input id="email" type="text" value={this.state.email} onChange={event => this.updateEmail(event.target.value)} />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="message">Message:</Label>
                  <TextArea id="message" value={this.state.message} onChange={event => this.updateMessage(event.target.value)} />
                </InputContainer>
                <SendQueryButton>Send</SendQueryButton>
              </ProjectQueryForm>
              {this.state.formIncomplete ? <WarningText>Please fill out all of the boxes above</WarningText> : null}
            </FormContainer>}

      </OuterContainer>
    )
  }
}
