import React, { Component } from 'react'

import About from './about'
import Contact from './contact'
// import Projects from '../pages/projects';

import { faTwitter, faInstagram, faLinkedin, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons';
// import MyContext from './MyContext'
import { Link } from 'gatsby';

class Main extends Component {

    render() {
        const socials = [
            {
                name: 'CodePen',
                fontAwesome: faCodepen,
                url: 'https://codepen.io/aimeetacchi'
            },
            {
                name: 'Github',
                fontAwesome: faGithub,
                url: 'https://github.com/aimeetacchi'
            },
            {
                name: 'Instagram',
                fontAwesome: faInstagram,
                url: 'https://www.instagram.com/aimeetacchi/'
            },
            {
                name: 'Linkedin',
                fontAwesome: faLinkedin,
                url: 'https://www.linkedin.com/in/aimeetacchi/'
            },
            {
                name: 'Twitter',
                fontAwesome: faTwitter,
                url: 'https://twitter.com/aimeetacchi'
            },
           
        ];

        return (
            <React.Fragment>
                <div className="container">
                    <About headingTitle="I’m passionate about clean looking websites that work really well on all devices."/>
                </div>

                {/* RECENT WORK */}
                
                <div id="recent-work" className="recent-work">
                    <div className="recent-work-title">
                        <h3>My Projects</h3>
                        <p>My Javascript and React projects have all be built with clean code and made so they are all responsive to different devices.</p>
                        <Link to='/projects' style={{ textDecoration: 'none' }}> View Projects</Link>
                    </div>
                    {/* PROJECTS PAGE  */}
                   {/* <Projects/> */}
                    
                </div>
                <div className="container">
                    <Contact socials={socials}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Main;
