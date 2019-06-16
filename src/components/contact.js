import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"

const contact = (props) => {

        return (
            <section id="contact">
                  <ScrollAnimation animateIn='bounceInLeft' animateOut='fadeOut'>
                    <h3>Get in Touch! </h3>
                    </ScrollAnimation>
                 <p>You can <a href="mailto:aimeetacchi@hotmail.co.uk" >Email</a> me or you can find me on all these lovely social media platforms, see what i'm up too..</p>
                {props.socials.map((social, i) => 
                (
                <div key={i} className="social-links"> 
                
                    <a target='_blank' rel="noopener noreferrer" href={social.url}><FontAwesomeIcon icon={social.fontAwesome} style={{fontSize: '26px'}} /> <span>{social.name}</span></a>
                </div>
                )
                )}

            </section>
        )
}

export default contact;
