import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3, faJs, faWordpress } from '@fortawesome/free-brands-svg-icons';


// faHtml5, faCss3, faJs, fa 
function Skills() {
    return (
        <section className="skills-section">

            <div className="skill__content"> 
                <h3>My Skills</h3>
                    <ul className="skills-list">
                        <li><FontAwesomeIcon icon={faHtml5}> </FontAwesomeIcon> HTML5 </li>
                        <li><FontAwesomeIcon icon={faCss3}> </FontAwesomeIcon> Responsive CSS/Scss</li>
                        <li><FontAwesomeIcon icon={faJs}> </FontAwesomeIcon> Javascript</li>
                        <li><FontAwesomeIcon icon={faWordpress}> </FontAwesomeIcon> Wordpress</li>
                    </ul>
                    <ul className="skills-list">
                        <li className="sub"><strong>Frameworks & Libraries</strong></li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>Angular V2</li>
                    </ul>
                    <ul className="skills-list">
                        <li className="sub"><strong>Tools</strong></li>
                        <li>Git</li>
                        <li>Gulp</li>
                        <li>Command Line</li>
                    </ul>
                    <ul className="skills-list">
                        <li className="sub">Design Skills</li>
                        <li>Wireframing</li>
                        <li>Photoshop</li>
                    </ul>
                
            </div>
        </section>
    )
}

export default Skills;
