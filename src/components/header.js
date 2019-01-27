import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from "styled-components"

const HeaderStyles = styled.header`
display:flex;
justify-content: space-between;
align-items: center;
margin: 0;
height: 8vh;
background-color: #3f72af;

@media (min-width: 1024px){
    justify-content: flex-start;
}

@media (min-width: 680px) {
    height: 10vh;
    align-items: center;
}
`
const NavStyles = styled.nav`
    background-color: #3f72af;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    opacity: .9;
    display: none;

@media  (min-width: 1024px){
    display: block;
    position: static;
    width: 30%;
    height: auto;
    opacity: 1;
}
`
const LogoH1 = styled.h1`
color: #f1f1f1;
font-size: 1.8em;
line-height: 1.2;
margin: 0;
padding: 0 .2em 0;
font-family: 'Fjalla One', sans-serif;
`

const NavItems = styled.ul`
    font-size: 3em;
    font-weight: 700;
    font-family: "Fjalla One", sans-serif;
    list-style: none;
    height: 100vh;
    margin: 0;
    padding: 0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    
    
    @media (min-width: 680px) { 
            
    }
    
    @media (min-width: 1024px) {
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
margin: 0;
`


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.isActive = this.isActive.bind(this);
    this.state = {
      active: false,
    }
  }

  isActive() {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <HeaderStyles>
        <div className="logo">
          <Link to='/' style={{ textDecoration: 'none' }}>
            <LogoH1>{this.props.siteName}</LogoH1>
          </Link>
        </div>

        <div onClick={this.isActive} id="burgermenu">
          <div id="bar" className={this.state.active ? 'rotatebar1' : null}></div>
          <div id="bar" className={this.state.active ? 'hidebar2' : null} ></div>
          <div id="bar" className={this.state.active ? 'rotatebar3' : null}></div>
        </div>
        <NavStyles className={this.state.active ? 'toogleNav' : null} >
          <NavItems>
            <NavLi>
              <Link to='/about' className='nav-link' style={{ textDecoration: 'none' }}>About</Link>
            </NavLi>
            <NavLi>
              <Link to='/blog' className='nav-link' style={{ textDecoration: 'none' }}>Blog</Link>
            </NavLi>
            <NavLi>
              <Link to='/projects' className='nav-link' style={{ textDecoration: 'none' }}>Projects</Link>
            </NavLi>
            <NavLi>
              <Link to='/contact' className='nav-link' style={{ textDecoration: 'none' }}>Contact</Link>
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
