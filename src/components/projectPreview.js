import React from 'react'
import { Link } from 'gatsby';

const ProjectPreview = (props) => {
        const {title, short_description, slug, img } = props.project.node;
        // console.log(props.project);
        return (
            <div className="recent-work-container" key={props.i}>
               <img src={img.childImageSharp.fluid.src} alt={title}/>
                <div className="text-container">
                <div className="text">
                <h4>{title}</h4> 
                    <p className="recent-work-description">{short_description}</p>
                    <Link className="button" to={`/${slug}/`}>View Project</Link>
                </div>
               </div>
            </div>
        )
}
export default ProjectPreview;