import React from 'react'
import styled from 'styled-components'

function themeSwitch({ toggleTheme, checked }) {
  return (
    <div className="theme-switch">
      <ThemeSwitchLabel>
        <ThemeSwitchInput
          type="checkbox"
          checked={checked}
          onChange={() => toggleTheme()}
        />
        <ThemeSwitchSlider></ThemeSwitchSlider>
      </ThemeSwitchLabel>
    </div>
  )
}

const ThemeSwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`
const ThemeSwitchSlider = styled.span`
  border-radius: 34px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &::before {
    border-radius: 50%;
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`

const ThemeSwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${ThemeSwitchSlider} {
    background-color: #4956ba;
  }

  &:checked + ${ThemeSwitchSlider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  &:focus + ${ThemeSwitchSlider} {
    box-shadow: 0 0 1px #2196f3;
  }
`

export default themeSwitch
