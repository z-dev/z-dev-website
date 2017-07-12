import React, { Component } from 'react'
import firebase from 'firebase'
import moment from 'moment-timezone'
import _ from 'lodash'
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

const CloseQueryAnchor = styled.a`
  display: flex;
  align-self: flex-end;
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
    this.state = { name: '', email: '', message: '', messageSent: false, incompleteDataEntered: false }
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
          ? <h3>Your enquiry has been sent, we will be in touch soon!</h3>
          : <div>
              <FormHeaderContainer>
                <h3>Tell us about your project</h3>
                <CloseQueryAnchor href="#" onClick={() => this.props.onXClick()}>X</CloseQueryAnchor>
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
                    const timestamp = moment().tz('Europe/London').format('YYYYDDMMHHmmss')

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
              {this.state.incompleteDataEntered ? <text>Please fill out all of the boxes above</text> : null}
            </div>}

      </OuterContainer>
    )
  }
}
