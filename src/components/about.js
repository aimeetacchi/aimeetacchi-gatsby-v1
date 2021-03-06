import React from 'react'
import profilepic from '../data/images/profilepic.png'
import { Link } from 'gatsby'
import styled from 'styled-components'

import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'

const About = props => {
  const { headingTitle } = props
  return (
    <div id="about">
      <ScrollAnimation animateIn="bounceInLeft">
        <h3>About Aimee</h3>
      </ScrollAnimation>
      <section className="about_container">
        <div className="about__image">
          <AboutImg src={profilepic} alt="about aimee" />
        </div>

        <div className="about__content">
          <ScrollAnimation animateIn="fadeIn">
            <h3>{headingTitle}</h3>
          </ScrollAnimation>

          <p>
            I'm Aimee: a passionate self-taught Front-End Web Developer and
            crazy cat girl, from Dunstable. I focus primarily on writing clean,
            elegant and efficient code.
          </p>

          <p>
            I have skills in HTML, CSS, SCSS, JavaScript, React &amp; Gatsby.
          </p>

          <p>
            My Hobbies, include travelling, photography, painting, coding,
            swimming, video games &amp; playing board games.
          </p>

          <Link
            to="/about"
            className="nav-link"
            style={{ textDecoration: 'none' }}
          >
            Read More..
          </Link>
        </div>
      </section>
    </div>
  )
}

const AboutImg = styled.img`
  border: 5px solid $color5;
  display: block;
  border-radius: 100%;
  width: 300px;
  margin: 0 auto;

  @media screen and (min-width: $tab) {
    width: 100%;
  }
`

export default About
