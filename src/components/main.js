import React from 'react'
// import Project from './Project'
import data from '../data/data'

class Main extends React.Component {

    state = {
        data: data,
    }



    render() {
        return (
            <div className="container">
                <h2>{this.props.headingTitle}</h2>
                <p>I'm a Front-End Web Developer, based in Dunstable, Bedfordshire</p>


                <div id="recentwork" className="recent-work-title">
                    <h3>Recent Work</h3>
                    <hr />
                    <p>Take a look at my portfolio of all work I have perviously done for clients and friends.</p>
                </div>
                <div className="recent-work">

                    {this.state.data.map((project, i) =>
                        // <Project key={i} project={project} />
                        <div key={i}>
                            <h2>{project.project_title}</h2>
                            <img src='{project_img}' alt='project work' />
                            <p>{project.project_short_description}</p>
                            <a href='{project.project_link}'>Link</a>
                        </div>
                    )}

                </div>

            </div >
        )
    }
}

export default Main;
