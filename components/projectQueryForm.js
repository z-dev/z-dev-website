import React, { Component } from 'react'
import firebase from 'firebase'
import moment from 'moment'
import 'common/initializeFirebase.js'
import Div from 'components/core/div.js'
import Button from 'components/core/button.js'
import styled from 'styled-components'

const OuterContainer = styled(Div)`
  flex-direction: column;
  align-items: center;
`

const FormHeaderContainer = styled(Div)`
  flex-direction: row;
  align-items: center;
`

const Form = styled.form`
  display: flex;
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
`

export default class ProjectForm extends Component {
  constructor() {
    super()
    this.state = { name: '', email: '', message: '' }
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
    firebase.database().ref('/projectQueries').update(message)
    this.setState({ name: '', email: '', message: '' })
  }

  render() {
    return (
      <OuterContainer>
        <FormHeaderContainer>
          <h3>Tell us about your project</h3>
          <a>X</a>
        </FormHeaderContainer>
        <Form>
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
            <textarea id="message" value={this.state.message} onChange={event => this.updateMessage(event.target.value)} />
          </InputContainer>
          <SendQueryButton
            type="button"
            onClick={() => {
              const timestamp = moment().format('YYYYDDMMHHmmss')
              this.sendMessage({
                [timestamp]: {
                  userName: this.state.name,
                  userEmail: this.state.email,
                  userMessage: this.state.message,
                },
              })
            }}
          >
            Send your query
          </SendQueryButton>
        </Form>
      </OuterContainer>
    )
  }
}
