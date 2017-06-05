import React, { Component } from 'react'

export default class Header extends Component {
  constructor() {
    super()
    this.state = { collapsed: true }
  }

  onClick(e) {
      this.setState({ collapsed: true })
  }


  render() {
    return (
      <div>
        <header>
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button type="button" onClick={() => this.setState({ collapsed: !this.state.collapsed })} className="navbar-toggle collapsed">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                    <a className="brand" rel="home" data-scroll="true" href="#home" title="ZDev"><img src="/static/logo.svg" alt="ZDev logo" /></a>
                  </div> {/* /navbar-header */}
                  <div id="nav-bar" className={`${this.state.collapsed ? 'collapse' : ''} navbar-collapse`}>
                    <ul className="nav navbar-nav navbar-right navbar-links">
                      <li><a data-scroll="true" href="#about" onClick={this.onClick.bind(this)}>About</a></li>
                      <li><a data-scroll="true" href="#services" onClick={this.onClick.bind(this)}>Services</a></li>
                      <li><a data-scroll="true" href="#our-work" onClick={this.onClick.bind(this)}>Our Work</a></li>
                      <li><a data-scroll="true" href="#techstack" onClick={this.onClick.bind(this)}>Tech</a></li>
                      <li><a data-scroll="true" href="#team" onClick={this.onClick.bind(this)}>Team</a></li>
                      <li><a href="https://blog.z-dev.io/" onClick={this.onClick.bind(this)}>Blog</a></li>
                      <li><a data-scroll="true" href="#contact" onClick={this.onClick.bind(this)}>Contact</a></li>
                      <li />
                      <li />
                    </ul>
                  </div> {/* /collapse navbar-collapse */}
                </div> {/* /containerfluid */}
              </nav>
            </div> {/* /row */}
          </div> {/* /container */}
        </header>
      </div>
    )
  }
}
