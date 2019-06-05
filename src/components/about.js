import React, { Component } from 'react'
import profilepic from '../images/profilepic.png'
import { Link } from 'gatsby'

class About extends Component {
    render() {
        return (
            <div id="about">
                <h3>About Aimee</h3>
                <section className="about_container">

                    <div className="about__image">
                        <img src={profilepic} alt="about aimee" />
                    </div>
                
                    <div className="about__content"> 
                      
                        <h3>{this.props.headingTitle}</h3>
                    
                        <p>I'm Aimee a passionate self taught Front-end Web Developer based in Dunstable, Bedfordshire. I primarily focus on writing clean, elegant, &amp; efficient code.</p>
                        <p>I have skills in HTML, CSS, SCSS, JavaScript, React &amp; Gatsby.</p>
                       
                       <Link to='/about' className='nav-link' style={{ textDecoration: 'none' }}> Read More..</Link>
                    </div>
                </section>
            </div>
        )
    }
}

export default About;
