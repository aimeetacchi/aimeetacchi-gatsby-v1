import React from 'react'
import { Link } from 'gatsby';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class ProjectPreview extends React.Component {
    render() {
        
        const {title, short_description, slug, img } = this.props.project.node;

        // console.log(this.props.project);
        return (
            
            <div className="recent-work-container" key={this.props.i}>
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
}
export default ProjectPreview;