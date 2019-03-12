import React from 'react'


class Project extends React.Component {
    render() {
        
        const {project_title, project_short_description, project_link, project_img } = this.props.project;
        return (
            <div className="recent-work-container" key={this.props.i}>
                <img src={project_img} alt='project work' />
                <div className="text-container">
                <div className="text">
                    <h4>{project_title}</h4>
                    <p className="recent-work-description">{project_short_description}</p>
                    <a className="button" target="_blank" rel="noopener noreferrer" href={project_link}> View Project </a>
                </div>
               </div>
               
               
            </div>
        )
    }
}
export default Project;