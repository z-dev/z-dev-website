import React, { Component } from 'react'
import moment from 'moment'
import firebase from 'scripts/initialiseFirebase.js'

export default class Form extends Component {
  constructor() {
    super()
    this.state = { name: '', email: '', message: '' }
  }
  onSendMessageClick() {
    const timeStamp = moment().format('YYMMDDHHmmss')
    firebase.database().ref(`/projectQueries`).push({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      timeStamp: [timeStamp],
    })
    this.setState({ name: '', email: '', message: '' })
    return false
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input id="name" type="text" value={this.state.name} onChange={event => this.handleNameChange(event)} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input id="email" type="text" value={this.state.email} onChange={event => this.handleEmailChange(event)} />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" value={this.state.message} onChange={event => this.handleMessageChange(event)} />
            </div>
            <div className="button">
              <button onClick={() => this.onSendMessageClick()}>Send your query</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
