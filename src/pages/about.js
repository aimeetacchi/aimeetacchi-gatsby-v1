// src/pages/about.jsx
import React from 'react'
import Layout from '../components/layout'
import Skills from '../components/skills'
import Experience from '../components/experience'

const About = props => {
  return (
    <Layout>
      <div className="container">
        <h1>About Aimee</h1>
        <p>
          I'm Aimee: a passionate self-taught Front-End Web Developer and crazy
          cat girl, From Dunstable. I focus primarily on writing clean, elegant
          and efficient code.
        </p>

        <p>I have skills in HTML, CSS, SCSS, JavaScript, React & Gatsby.</p>

        <p>
          My Hobbies, include travelling, photography, painting, coding,
          swimming, video games &amp; playing board games.
        </p>
        <h2>Skills &amp; Experience</h2>
        <Skills />
        {/* <Experience /> */}
      </div>
    </Layout>
  )
}

export default About
