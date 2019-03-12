import React, { Component } from 'react'
import Project from './project'
import MyContext from './MyContext'

class Main extends Component {

    render() {
        return (
            <div className="container">
                <h2>{this.props.headingTitle}</h2>
                <p>I'm a Front-End Web Developer, based in Dunstable, Bedfordshire</p>


                <div id="recentwork" className="recent-work-title">
                    <h3>Recent Work</h3>
                    <hr />
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

            </div >
        )
    }
}

export default Main;
