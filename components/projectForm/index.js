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
              <input id="name" type="text" value={this.props.name} onChange={event => this.props.updateName(event.target.value)} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input id="email" type="text" value={this.props.email} onChange={event => this.props.updateEmail(event.target.value)} />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" value={this.props.message} onChange={event => this.props.updateMessage(event.target.value)} />
            </div>
            <div className="button">
              <button
                type="button"
                onClick={() =>
                  this.props.sendMessage({
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
