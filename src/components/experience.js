import React from 'react'

function Experience() {
    return (
        <section className="experience-section">
            <h2>My Experience</h2>
            <p>All my past and present work experience for the last 3 years.</p>

            <h3>Barley House Agency</h3>
            <p>Current Role: <strong>Web Developer</strong> | Cuffley, Hertfordshire | August 2018 - Current</p>
            <ul className="experience-list"> 
                <li>Creating and Developing Bespoke wordpress sites from stratch, custom built themes</li>

                <li>Workflow tools included: HTML, Scss, Wordpress PHP, jQuery, Glup and Git</li>
            </ul>

            <hr />

            <h3>Big Marketing</h3>
            <p><strong>Junior Front-End Web Developer</strong> | Milton Keynes | May 2017 - August 2018</p>

            <ul className="experience-list">
                <li>Build Web pages, using HTML,CSS, Javascript, jQuery, JSON, Google maps API.</li>
                <li>Assisted the Digital lead in building an Angular 4 &amp; NodeJS file transfer application to assist the design and sales team.</li>
                <li>Create Websites in Wordpress and modify photos to be used in websites using Adobe Photoshop and create wireframes.</li>
            </ul>

            <hr />

            <h3>Octopus Energy</h3>
            <p><strong>Junior Front-End Web Developer</strong> | London | Feb 2017 - May 2017</p>

            <ul className="experience-list">
                <li>Developed, enhanced and maintained company’s websites using HTML, Sass, and Javascript with some frameworks such as jQuery and React.
                </li>
                <li>Fixed front end bugs (HTML, CSS)</li>
                <li>Ran some code meetings at lunchtime for people who were interested in learning.</li>
            </ul>
            <p>Workflow tools included: HTML, CSS, Scss Bootstrap, jQuery, React(JSX), Glup and Git</p>

            <hr />

            <h3>IO42</h3>
            <p><strong>Junior Web Developer</strong> | Chesham | March 2016 - Feb 2017</p>

            <ul className="experience-list">
                <li>Created bespoke websites from scratch and working closely with the Web designers.</li>
                <li>Hand coding front-end code responsive websites that work on all devices, with HTML/CSS, Javascript &amp; jQuery.</li>
                <li>Example: <a rel="noopener noreferrer" target='_blank' href='http://www.ladiescircle.co.uk/'>Ladies Circle</a></li>
                <li>Example: <a rel="noopener noreferrer" target="_blank" href="http://charlottesandersondesign.co.uk/">Charlotte Sanderson Garden Design</a></li>
            </ul>
        </section >
    )

}

export default Experience;