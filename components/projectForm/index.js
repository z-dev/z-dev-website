import React, { Component } from 'react'
import Div from 'components/core/Div.js'

export default class ProjectForm extends Component {
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
              <button
                type="button"
                onClick={() =>
                  this.props.onSendMessageClick({
                    userName: this.props.name,
                    userEmail: this.props.email,
                    userMessage: this.props.message,
                  })}
              >
                Send your query
              </button>
            </div>
          </form>
        </div>
      </Div>
    )
  }
}
