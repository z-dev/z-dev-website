import React, { Component } from 'react'
import firebase from 'firebase'
import moment from 'moment'
import 'common/initializeFirebase.js'
import Div from 'components/core/div.js'
import Button from 'components/core/button.js'

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
    console.log(this.state)
    return (
      <Div className="container">
        <div className="row">
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input id="name" type="text" value={this.state.name} onChange={event => this.updateName(event.target.value)} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input id="email" type="text" value={this.state.email} onChange={event => this.updateEmail(event.target.value)} />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" value={this.state.message} onChange={event => this.updateMessage(event.target.value)} />
            </div>
            <div className="button">
              <Button
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
              </Button>
            </div>
          </form>
        </div>
      </Div>
    )
  }
}
