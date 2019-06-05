import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faInstagram, faLinkedin, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons';

class contact extends Component {

    render() {

        const contacts = [
            {
                name: 'CodePen',
                fontAwesome: faCodepen,
                url: 'https://codepen.io/aimeetacchi'
            },
            {
                name: 'Github',
                fontAwesome: faGithub,
                url: 'https://github.com/aimeetacchi'
            },
            {
                name: 'Instagram',
                fontAwesome: faInstagram,
                url: 'https://www.instagram.com/aimeetacchi/'
            },
            {
                name: 'Linkedin',
                fontAwesome: faLinkedin,
                url: 'https://www.linkedin.com/in/aimeetacchi/'
            },
            {
                name: 'Twitter',
                fontAwesome: faTwitter,
                url: 'https://twitter.com/aimeetacchi'
            },
            
            
            
           
        ];

        return (
            <section id="contact">
                 <h3>Get in Touch! </h3>
                <p>You can find me on all these lovely social media platforms, see what i'm up too..</p>
                {contacts.map((contact, i) => 
                (
                <div key={i} className="social-links"> 
                
                    <a target='_blank' rel="noopener noreferrer" href={contact.url}><FontAwesomeIcon icon={contact.fontAwesome} style={{fontSize: '26px'}} /> <span>{contact.name}</span></a>
                </div>
                )
                )}

            </section>
        )
    }
}

export default contact;
