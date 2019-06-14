// src/pages/about.jsx
import React from 'react'
import Layout from '../components/layout'
import Skills from '../components/skills'
import Experience from '../components/experience'

const About = (props) =>  {
    console.log(props)
        return (
            <Layout>
                <div className="container">
                    <h1>About Aimee</h1>
                    <h2>Skills &amp; Experience</h2>
                    <Skills />
                    <Experience />
                </div >
            </Layout>
        )
}

export default About;