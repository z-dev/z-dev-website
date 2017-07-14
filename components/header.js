import React, { Component } from 'react'
import Div from 'components/core/div'
import styled from 'styled-components'

const LargeScreenLinks = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: ${props => props.theme.screenXsMax}px) {
    display: none;
  }

  li a {
    margin: 0 10px;
    font-size: 17px;
    font-weight: 200;
    padding: 10px;
    text-decoration: none;

    :hover {
      background: ${props => props.theme.primaryColor};
      color: white;
      text-decoration: none;
    }
  }
`

const SmallScreenLinks = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  border-top: solid 1px ${props => props.theme.lightGrey};
  align-self: stretch;

  @media (min-width: ${props => props.theme.screenXsMax}px) {
    display: none;
  }

  li a {
    text-decoration: none;
    display: flex;
    flex: 1;
    font-size: 17px;
    font-weight: 200;
    padding: 10px 0 10px 25px;

    :hover {
      background: ${props => props.theme.primaryColor};
      color: white;
      text-decoration: none;
    }
  }
`

const NavBarHeader = styled(Div)`
  padding-left: 20px;
  align-items: center;

  @media (max-width: ${props => props.theme.screenXsMax}px) {
    align-self: stretch;
    justify-content: space-between;
  }
`

const NavBar = styled(Div)`
  justify-content: space-between;
  align-items: baseline;
  border-bottom: solid 1px ${props => props.theme.lightGrey};
  position: fixed;
  top: 0;
  background: white;
  z-index: 100;
  width: 100%;

  @media (max-width: ${props => props.theme.screenXsMax}px) {
    flex-direction: column;
  }
`

const MenuToggleButton = styled.button`
  @media (min-width: ${props => props.theme.screenXsMax}px) {
    display: none;
  }

  :focus {
    outline: 0;
    background: ${props => props.theme.lightGrey};
  }

  margin-right: 10px;
  background: white;
  border: solid 1px ${props => props.theme.lightGrey};
  border-radius: 4px;
`

const NavBarLinks = props =>
  <div className={props.className}>
    <li><a data-scroll="true" href="#about">About</a></li>
    <li><a data-scroll="true" href="#services">Services</a></li>
    <li><a data-scroll="true" href="#clients">Clients</a></li>
    <li><a data-scroll="true" href="#techstack">Tech</a></li>
    <li><a data-scroll="true" href="#team">Team</a></li>
    <li><a href="https://blog.z-dev.io/">Blog</a></li>
    <li><a data-scroll="true" href="#contact">Contact</a></li>
  </div>

const LargeNavBarLinks = styled(NavBarLinks)`
  .flex {
    display: flex;
  }
`
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
      <NavBar>
        <NavBarHeader>
          <a href="#home" title="ZDev">
            <img src="/static/logo.svg" alt="ZDev logo" width="100px" height="80px" />
          </a>
          <MenuToggleButton onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
            <img src="/static/menu-icon.svg" alt="Menu Toggle" width="25px" height="25px" />
          </MenuToggleButton>
        </NavBarHeader>

        <LargeScreenLinks onClick={() => this.onResponsiveMenuClick()}>
          <LargeNavBarLinks className="flex" />
        </LargeScreenLinks>

        {!this.state.collapsed
          ? <SmallScreenLinks onClick={() => this.onResponsiveMenuClick()}>
              <NavBarLinks />
            </SmallScreenLinks>
          : null}
      </NavBar>
    )
  }
}
