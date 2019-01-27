// src/pages/about.jsx
import React, { Component } from 'react'
import Layout from '../components/layout'
import Skills from '../components/skills'
import Experience from '../components/experience'

class About extends Component {
    render() {
        return (
            <Layout>
                <div className="container">
                    <h2>About Me....</h2>
                    <p>I'm Aimee a passionate self taught Front-end Web Developer. I primarily focus on writing clean, elegant, &amp; efficient code. I have skills in HTML, CSS &amp; Javascript, and currently learning with React and Gatsby.
                    <br />
                        I am committed to having an impact on the future of any company that I work for and possess the enthusiasm and commitment to learn and develop my career within a growing business.</p>
                    <Skills />
                    <Experience />
                </div >
            </Layout>
        )
    }
}

export default About;