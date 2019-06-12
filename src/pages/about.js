// src/pages/about.jsx
import React from 'react'
import Layout from '../components/layout'
import Skills from '../components/skills'
import Experience from '../components/experience'

const About = () =>  {

        return (
            <Layout>
                <div className="container">
                    <h2>Skills &amp; Experience</h2>
                    <Skills />
                    <Experience />
                </div >
            </Layout>
        )
}

export default About;