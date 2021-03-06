import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ThemeSwitch from './themeSwitch'

const Header = props => {
  const { siteName } = props
  const [active, setActive] = useState(false)
  const [checked, setChecked] = useState(false)

  const toggleTheme = () => {
    console.log('Calling Toggle Theme')
    // toggling checked from True/False
    setChecked(!checked)
    // Dark mode will only be in local storage if Checked is True, if there is darkmode set then Remove it.
    localStorage.getItem('darkMode') && localStorage.removeItem('darkMode')
  }

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode')

    if (darkMode) {
      console.log('There is local storage')
      setChecked(true)
    }

    active
      ? document.body.classList.add('hidden')
      : document.body.classList.remove('hidden')

    if (checked) {
      document.body.classList.add('dark-theme')
      document.body.classList.remove('light-theme')
      localStorage.setItem('darkMode', JSON.stringify(checked))
    } else {
      document.body.classList.add('light-theme')
      document.body.classList.remove('dark-theme')
      localStorage.removeItem('darkMode')
    }
  }, [active, checked])

  return (
    <HeaderStyles>
      <div className="logo">
        <Link
          onClick={() => setActive(false)}
          to="/"
          style={{ textDecoration: 'none' }}
        >
          <LogoH1>{siteName}</LogoH1>
        </Link>
      </div>

      <div
        role="menu"
        tabIndex={0}
        onKeyDown={() => setActive(!active)}
        onClick={() => setActive(!active)}
        id="burgermenu"
      >
        <div id="bar" className={active ? 'rotatebar1' : ''} />
        <div id="bar" className={active ? 'hidebar2' : ''} />
        <div id="bar" className={active ? 'rotatebar3' : ''} />
      </div>

      <NavStyles className={active ? 'toogleNav' : ''}>
        <NavItems>
          <NavLi>
            <NavLink
              to="/about"
              className="nav-link"
              onClick={() => setActive(false)}
            >
              About
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink
              to="/blog"
              className="nav-link"
              onClick={() => setActive(false)}
            >
              Blog
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink
              to="/projects"
              className="nav-link"
              onClick={() => setActive(false)}
            >
              Projects
            </NavLink>
          </NavLi>
        </NavItems>
      </NavStyles>
      <ThemeSwitch checked={checked} toggleTheme={toggleTheme} />
    </HeaderStyles>
  )
}

Header.propTypes = {
  siteName: PropTypes.string,
}

// STYLES ===
const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  height: 8vh;
  position: relative;
  padding: 0 10px;
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
  /* background: rgba(73, 86, 186, 0.9); */
  position: absolute;
  top: 8vh;
  left: 0;
  width: 100%;
  height: 400vh;
  z-index: 9;
  display: none;

  @media (min-width: 720px) {
    display: block;
    position: static;
    width: 20%;
    height: auto;
    margin-left: 25px;
    /* background: rgba(10, 17, 40, 1); */
  }
`
const LogoH1 = styled.h1`
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
  padding: 10px 0;
`
const NavLink = styled(Link)`
  text-decoration: 'none';

  &:hover {
    color: #a6b1e1;
  }
`

export default Header
