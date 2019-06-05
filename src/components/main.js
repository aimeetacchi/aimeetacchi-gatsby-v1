import React, { Component } from 'react'
import Project from './project'
import About from './about'
import Contact from './contact'
import { Link } from 'gatsby';
import MyContext from './MyContext'

class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <About id="about" headingTitle="I’m passionate about clean looking websites that work really well on all devices."/>
                </div>
                <div className="recent-work-title">
                    <h3>Recent Work</h3>
                    <p>This is some of my recent work. More coming soon..</p>
                    {/* <Link to='/about' className='nav-link' style={{ textDecoration: 'none' }}> Read More..</Link> */}
                </div>
                <div className="recent-work">

                    <MyContext.Consumer>
                    {(context) => (
                        <>
                        {context.state.data.map((project, i) => 
                              <Project key={i} project={project} />
                               )}
                               </>
                    )}
                    </MyContext.Consumer>
                    
                </div>
                <div className="container">
                    <Contact/>
                </div>
            </React.Fragment>
        )
    }
}

export default Main;
