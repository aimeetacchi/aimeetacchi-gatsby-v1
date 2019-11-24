import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  height: 8vh;
  background-color: #0a1128;
  position: relative;
  z-index: 10;

  @media (min-width: 720px) {
    justify-content: flex-start;
    height: 10vh;
  }

  @media (min-width: 680px) {
    align-items: center;
  }
`
const NavStyles = styled.nav`
  background-color: #4956ba;
  position: absolute;
  top: 8vh;
  left: 0;
  width: 100%;
  height: 400vh;
  z-index: 9;
  opacity: 0.9;
  display: none;

  @media (min-width: 720px) {
    display: block;
    position: static;
    width: 20%;
    height: auto;
    opacity: 1;
    margin-left: 25px;
    background-color: transparent;
  }
`
const LogoH1 = styled.h1`
  color: #f1f1f1;
  font-size: 1.8em;
  line-height: 1.2;
  margin: 0;
  padding: 0 0.2em 0;
  font-family: 'Fjalla One', sans-serif;
`

const NavItems = styled.ul`
  font-size: 3em;
  font-weight: 700;
  font-family: 'Fjalla One', sans-serif;
  list-style: none;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    font-size: 1em;
    width: 100%;
    height: auto;
    padding: 0;
    background: none;
  }
`
const NavLi = styled.li`
  width: 100%;
  text-align: center;
  -webkit-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
  padding: 10px 0;

  &:hover {
    background-color: #414073;
  }
`
let getClass = document.body.classList;

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
    }
  }

  isActive = () => {
    this.setState({
      active: !this.state.active,
    })
  }

  componentDidUpdate() {
    console.log('component did update!!')
    this.state.active
      ? document.body.classList.add('hidden')
      : document.body.classList.remove('hidden')
  }
  render() {
   
    return (
      <HeaderStyles>
        <div className="logo">
          <Link onClick={this.state.active ? getClass.add('hidden')
      : getClass.remove('hidden')} to="/" style={{ textDecoration: 'none' }}>
            <LogoH1>{this.props.siteName}</LogoH1>
          </Link>
        </div>

        <div onClick={this.isActive} id="burgermenu">
          <div id="bar" className={this.state.active ? 'rotatebar1' : null} />
          <div id="bar" className={this.state.active ? 'hidebar2' : null} />
          <div id="bar" className={this.state.active ? 'rotatebar3' : null} />
        </div>
        <NavStyles className={this.state.active ? 'toogleNav' : null}>
          <NavItems>
            <NavLi>
              <Link
                to="/about"
                className="nav-link"
                onClick={this.isActive}
                style={{ textDecoration: 'none' }}
              >
                About
              </Link>
            </NavLi>
            <NavLi>
              <Link
                to="/blog"
                className="nav-link"
                onClick={this.isActive}
                style={{ textDecoration: 'none' }}
              >
                Blog
              </Link>
            </NavLi>
            <NavLi>
              <Link
                to="/projects"
                className="nav-link"
                onClick={this.isActive}
                style={{ textDecoration: 'none' }}
              >
                Projects
              </Link>
            </NavLi>
          </NavItems>
        </NavStyles>
      </HeaderStyles>
    )
  }
}

Header.propTypes = {
  siteName: PropTypes.string,
}

export default Header
