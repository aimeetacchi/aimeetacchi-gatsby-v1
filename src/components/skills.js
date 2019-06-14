import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3, faJs, faWordpress } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {

    const skillsLang = [
        {
            name: 'HTML5',
            level: '90%',
            fontawesome: faHtml5,
        },
        {
            name: 'Responsive CSS/Scss',
            level: '80%',
            fontawesome: faCss3,
        },
        {
            name: 'Javascript',
            level: '70%',
            fontawesome: faJs
        },
        {
            name: 'Wordpress',
            level: '60%',
            fontawesome: faWordpress
        },
    ]
    const skillsFandL = [
        {
            name: 'Frameworks & Libraries',
            level: 'Frameworks & Libraries',
            fontawesome: ''
        },
        {
            name: 'jQuery',
            level: '60%',
            fontawesome: '',
        },
        {
            name: 'React',
            level: '40%',
            fontawesome: ''
        },
        {
            name: 'Angular',
            level: '30%',
            fontawesome: ''
        },
       
    ]

    return (
        <section className="skills-section">

            <div className="skill__content"> 
                <h3>My Skills</h3>
                    <ul className="skills-list">

                    {skillsLang.map((skill, i) => <li key={i}>
                            <FontAwesomeIcon icon={skill.fontawesome}> </FontAwesomeIcon> {skill.name}  <div className="skillpoints">{skill.level}</div>
                        </li>)}

                    </ul>

                    <ul className="skills-list">
                     {skillsFandL.map((skill, i) => <li key={i}>
                             {skill.name}  <div className="skillpoints">{skill.level}</div>
                        </li>)}
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
