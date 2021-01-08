import React from 'react'

const Experience = () => {
    return (
        <section className="experience-section">
            <h2>My Experience</h2>
            <p>All my past and present work experience for the last 4.5 years.</p>
            <h3>Monogram Digital</h3>
            <p><strong>Web Developer</strong> | Milton Keynes | Sept 2019 - current</p>

            <hr />

            <h3>Barley House Agency</h3>
            <p><strong>Web Developer</strong> | Cuffley, Hertfordshire | August 2018 - Sept 2019</p>
            <ul className="experience-list"> 
                <li>Building custom designed CMS websites and web applications using HTML,SCSS, Javascript & jQuery, PHP</li>

                <li>Workflow tools included: HTML, Scss, Wordpress, jQuery, Glup and Git. </li>
                <li>Example - 
                    <a rel="noopener noreferrer" target='_blank' href='https://www.allanandbertram.com/'>  Allan & Bertram, </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.lochinverhouse.com/">Lochinver House School, </a> 
                    <a target="_blank" rel="noopener noreferrer" href="https://www.groveroadprimary.co.uk/"> Grove Road School, </a>
                </li>
                    
            </ul>

            <hr />

            <h3>Big Marketing</h3>
            <p><strong>Front-End Web Developer</strong> | Milton Keynes | May 2017 - August 2018</p>

            <ul className="experience-list">
                <li>Using HTML, CSS & Scss, jQuery & Javascript, Google Maps API, I was involved in the design and development of microsites, brochure sites, and e-commerce websites and HTML emails.</li>

                <li>Assisted the digital lead in building an Angular 4 & NodeJS file transfer application to assist the design and sales team.</li>
            </ul>

            <hr />

            <h3>Octopus Energy</h3>
            <p><strong>Junior Front-End Web Developer</strong> | London | Feb 2017 - May 2017</p>

            <ul className="experience-list">
                <li>Developed, enhanced & maintained company’s websites using HTML, Sass, & Javascript with libraries such as jQuery and ReactJS.</li>

                <li>Daily stand ups every morning, worked with tickets on Trello.</li>

                <li> Ran code meetings at lunchtime for people who were interested in learning.</li>
            </ul>
            <p>Workflow tools included: HTML, CSS, Scss Bootstrap, jQuery, React, Gulp and Git</p>

            <hr />

            <h3>IO42</h3>
            <p><strong>Junior Web Developer</strong> | Chesham | March 2016 - Feb 2017</p>

            <ul className="experience-list">
                <li>Created bespoke websites from scratch and working closely with the Web designers.</li>
                <li>Hand coding front-end code responsive websites that work on all devices, with HTML/CSS, Javascript &amp; jQuery.</li>
                <li>Example: <a rel="noopener noreferrer" target='_blank' href='http://www.ladiescircle.co.uk/'>Ladies Circle</a>, &amp;
                <a rel="noopener noreferrer" target="_blank" href="http://charlottesandersondesign.co.uk/"> Charlotte Sanderson Garden Design</a></li>
            </ul>
        </section >
    )

}

export default Experience;