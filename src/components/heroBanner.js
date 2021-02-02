import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'

const HeroBanner = props => {
  const { name } = props
  return (
    <React.Fragment>
      <HeroContainer>
        <HeroContent>
          <HeroH1>
            <ScrollAnimation
              delay={500}
              // initiallyVisible={true}
              animateIn="fadeInRight"
            >
              Hello I'm {name}, a Front-end Web Developer
            </ScrollAnimation>
          </HeroH1>

          <HeroH2>
            <ScrollAnimation animateIn="bounceInLeft" delay={1000}>
              Building Responsive Websites and Applications
            </ScrollAnimation>
          </HeroH2>
        </HeroContent>
      </HeroContainer>
      <Particles style={particlesStyles} params={particlesOptions} />
    </React.Fragment>
  )
}

const HeroContainer = styled.div`
  background-color: #4956ba;
  border-bottom: 30px solid #414073;
  height: 92vh;

  @media screen and (min-width: 1024px) {
    height: 90vh;
  }
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

  @media screen and (min-width: 1024px) {
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

// PARTICLES JS
const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 1200,
      },
    },
  },
}

let particlesStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
}

export default HeroBanner
