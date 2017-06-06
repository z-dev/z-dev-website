import React, { Component } from 'react'
import moment from 'moment'
import firebase from 'scripts/initialiseFirebase.js'
import Div from 'components/core/Div.js'

export default class ProjectForm extends Component {
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

  render(props) {
    return (
      <Div className="container" {...props}>
        <div className="row">
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input id="name" type="text" value={this.props.name} onChange={event => this.props.handleNameChange(event.target.value)} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input id="email" type="text" value={this.props.email} onChange={event => this.props.handleEmailChange(event.target.value)} />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" value={this.props.message} onChange={event => this.props.handleMessageChange(event.target.value)} />
            </div>
            <div className="button">
              <button onClick={() => this.props.onSendMessageClick()}>Send your query</button>
            </div>
          </form>
        </div>
      </Div>
    )
  }
}
