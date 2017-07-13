import React, { Component } from 'react'
import Div from 'components/core/div'
import styled from 'styled-components'

const NavBarLinks = styled.ul`
  list-style: none;
  display: flex;

  li {
    margin: 0 10px;
    font-size: 17px;
    font-weight: 200;
    padding: 10px;

    @media (max-width: ${props => props.theme.screenXsMax}px) {
      margin: 0;
      padding-left: 20px;
    }

    :hover,
    :active,
    :visited,
    :focus {
      background: ${props => props.theme.primaryColor};

      a {
        color: white;
        text-decoration: none;
      }
    }
  }

  @media (max-width: ${props => props.theme.screenXsMax}px) {
    flex-direction: column;
    border-top: solid 1px ${props => props.theme.lightGrey};
    align-self: flex-start;
    padding: 0;
    width: 100%;
  }
`

const NavBarHeader = styled(Div)`
  padding-left: 20px;

  @media (max-width: ${props => props.theme.screenXsMax}px) {
    align-self: flex-start;
    width: 100%;
    justify-content: space-between;
  }
`

const NavBar = styled(Div)`
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px ${props => props.theme.lightGrey};
  position: fixed;
  top: 0;
  background: white;
  width: 100%;

  @media (max-width: ${props => props.theme.screenXsMax}px) {
    flex-direction: column;
  }
`

const MenuToggleButton = styled.button`
  @media (min-width: ${props => props.theme.screenXsMax}px) {
    display: none;
  }
`

export default class Header extends Component {
  constructor() {
    super()
    this.state = { collapsed: false }
  }

  onResponsiveMenuClick() {
    this.setState({ collapsed: true })
  }

  render() {
    return (
      <NavBar>
        <NavBarHeader>
          <a href="#home" title="ZDev">
            <img src="/static/logo.svg" alt="ZDev logo" width="100px" height="100px" />
          </a>
          <MenuToggleButton onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </MenuToggleButton>
        </NavBarHeader>

        <NavBarLinks onClick={() => this.onResponsiveMenuClick()} style={this.state.collapsed ? { display: 'none' } : { display: 'flex' }}>
          <li>
            <a data-scroll="true" href="#about">
              About
            </a>
          </li>
          <li>
            <a data-scroll="true" href="#services">
              Services
            </a>
          </li>
          <li>
            <a data-scroll="true" href="#clients">
              Clients
            </a>
          </li>
          <li>
            <a data-scroll="true" href="#techstack">
              Tech
            </a>
          </li>
          <li>
            <a data-scroll="true" href="#team">
              Team
            </a>
          </li>
          <li>
            <a href="https://blog.z-dev.io/">Blog</a>
          </li>
          <li>
            <a data-scroll="true" href="#contact">
              Contact
            </a>
          </li>
        </NavBarLinks>

      </NavBar>
    )
  }
}
