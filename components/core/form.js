import React, { Component } from 'react'

export default class Form extends Component {
  onSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(event)
  }

  render() {
    return <form {...this.props} onSubmit={e => this.onSubmit(e)}>{this.props.children}</form>
  }
}
