import React from 'react'


class Project extends React.Component {
    render() {
        
        const {project_title, project_short_description, project_link, project_img } = this.props.project;
        return (
            <div key={this.props.i}>
            <h2>{project_title}</h2>
            <img src={project_img} alt='project work' />
            <p>{project_short_description}</p>
            <a href={project_link}> Link </a>
            </div>
        )
    }
}
export default Project;