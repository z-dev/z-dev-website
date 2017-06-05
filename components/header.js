import React, { Component } from 'react'

export default class Header extends Component {
  constructor() {
    super()
    this.state = { collapsed: true }
  }

  onResponsiveMenuClick() {
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
                    {/* eslint-disable */}
                    <ul className="nav navbar-nav navbar-right navbar-links" onClick={() => this.onResponsiveMenuClick()}>
                    {/* eslint-enable */}
                      <li><a data-scroll="true" href="#about">About</a></li>
                      <li><a data-scroll="true" href="#services">Services</a></li>
                      <li><a data-scroll="true" href="#our-work">Our Work</a></li>
                      <li><a data-scroll="true" href="#techstack">Tech</a></li>
                      <li><a data-scroll="true" href="#team">Team</a></li>
                      <li><a href="https://blog.z-dev.io/">Blog</a></li>
                      <li><a data-scroll="true" href="#contact">Contact</a></li>
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
