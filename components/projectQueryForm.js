import React, { Component } from 'react'
import moment from 'moment'
import firebase from 'scripts/initialiseFirebase.js'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {name : '', email : '', message : ''}
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value})
  }

  onSendMessageClick () {
    const timeStamp = moment().format("YYMMDDHHmmss")
    firebase.database().ref(`/projectQueries`).update({
      [timeStamp] : {
        name : this.state.name,
        email: this.state.email,
        message: this.state.message
      }
    })
    return false
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form>
            <div>
              <label>Name:</label>
              <input type="text" onChange={(event) => this.handleNameChange(event)}/>
            </div>
            <div>
              <label>Email:</label>
              <input type="text" onChange={(event) => this.handleEmailChange(event)}/>
            </div>
            <div>
              <label>Message:</label>
              <textarea onChange={(event) => this.handleMessageChange(event)}></textarea>
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
