import React from 'react'
import { Link } from 'gatsby';

const Project = (props) => {
    
        const {title, description, link, img } = props.project;
        return (
            <div className="recent-work-container" key={props.i}>
                <h4>{title}</h4>
                <a target="_blank" rel="noopener noreferrer" href={link}>
                    <img src={img.childImageSharp.fluid.src} alt={title}/>
                </a>
                <p className="recent-work-description">{description}</p>
                
                <a className="button" target="_blank" rel="noopener noreferrer" href={link}>View Live Project</a>
                <Link to="/projects">Back to all projects</Link>
            </div>
        )
}
export default Project;