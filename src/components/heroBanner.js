import React, { Component } from 'react'
import styled from 'styled-components'

import Particles from 'react-particles-js'


const HeroContainer = styled.div`
background-color: #4956ba;
border-bottom: 30px solid #414073;
height: 92vh;

@media screen and (min-width: 1024px) {
    height: 90vh; }
`

const HeroContent = styled.div`  
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
height: 100%;
margin: 0 auto;
text-align: center;
width: 100%;
z-index: 5;

@media screen and (min-width: 1024px){
    padding: 4em 2em;
    width: 60%;
}
`

const HeroH1 = styled.h1`
padding-bottom: 0.5em;
border-top-right-radius: 25px;
border-top-left-radius: 25px;
color: #f9f7f7;
line-height: 1.2;
font-size: 2.8em;
margin: 0;
width: 90%;
`

const HeroH2 = styled.h2`
color: #f9f7f7;
border-bottom-right-radius: 25px;
border-bottom-left-radius: 25px;
margin: 0;
width: 90%;
`

const particlesOptions = {
    particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

  let particlesStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
  }

class HeroBanner extends Component {
    render() {
        return (
            <React.Fragment>
            <HeroContainer>
                <HeroContent>
                    <HeroH1>I'm {this.props.name}, a Front-end Web Developer</HeroH1>
                    <HeroH2>Building Responsive Websites and Applications</HeroH2>
                </HeroContent>
            </HeroContainer>
            <Particles style={particlesStyles} params={particlesOptions} />
            </React.Fragment>
        )
    }
}

export default HeroBanner;
