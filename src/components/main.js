import React from 'react'
import Project from './project'
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
                        <Project key={i} project={project} />
                        )}

                </div>

            </div >
        )
    }
}

export default Main;
