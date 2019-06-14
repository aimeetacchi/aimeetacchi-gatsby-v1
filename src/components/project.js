import React from 'react'
import { Link } from 'gatsby';

const Project = (props) => {
        const {title, description, link, img } = props.project;
        return (
            <div className="project-container" key={props.i}>
                <h1>{title}</h1>
                <a target="_blank" rel="noopener noreferrer" href={link}>
                    <img src={img.childImageSharp.fluid.src} alt={title}/>
                </a>

                <div className="project-content"> 
                    <p className="project-description">{description}</p>
                    
                    <a className="button" target="_blank" rel="noopener noreferrer" href={link}>View Live Project</a>
                    <Link to="/projects">Back to all projects</Link>
                </div>
            </div>
        )
}
export default Project;