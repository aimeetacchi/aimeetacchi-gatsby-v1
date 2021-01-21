import React from 'react'
import { StaticQuery, graphql } from "gatsby";
import About from './about'
import Contact from './contact'
import ProjectPreview from '../components/projectPreview';

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

import { faTwitter, faInstagram, faLinkedin, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'gatsby';

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


const Main = () => (

    <StaticQuery
    query={graphql`
        query ProjectsDataQueryHome {
            allProjectsdataJson {
                edges {
                  node {
                    description
                    slug
                    title
                    skills
                    recent_work
                    short_description
                    img {
                      childImageSharp {
                        fluid {
                          src
                        }
                      }
                    }
                  }
                }
              }
        }
    `
    }
    render={data =>(

            <React.Fragment>
                <div className="container">
                 <About headingTitle="I’m passionate about clean looking websites that work really well on all devices."/>
                </div>

                {/* RECENT WORK */}
                <ScrollAnimation duration={2} animateIn="bounceInRight">
                <div id="recent-work" className="container"> 
                    <div className="recent-work">
                        <div className="recent-work-title">
                        <ScrollAnimation animateIn="bounceInRight"> <h3>My Latest Projects</h3> </ScrollAnimation>
                        </div>
                        <ScrollAnimation animateIn="fadeIn"> <p className="recent__work_desc">Below is some of my latest work I have done, my Javascript and React projects have all be built with clean code and made so they are all responsive to different devices.</p> </ScrollAnimation>


                        {/* MAP OVER QUERY JSON and pass data to project component */}

                             {
                                data.allProjectsdataJson.edges.map((project, i) => {
                                // console.log(project)
                                return (project.node.recent_work) ?
                                (<ProjectPreview key={i} project={project}/>) : null
                                
                                })
                            }
                            
                    </div>
                    
                <div>
                <Link to='/projects' className="button" style={{ textDecoration: 'none' }}> View All Projects</Link>
                </div>
               
                </div></ScrollAnimation>
                <div className="container">
                    <Contact socials={socials}/>
                </div>
            </React.Fragment>
             )}
             />
)

export default Main;
