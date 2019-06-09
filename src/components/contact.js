import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


class contact extends Component {

    render() {

        return (
            <section id="contact">
                 <h3>Get in Touch! </h3>
                <p>You can find me on all these lovely social media platforms, see what i'm up too..</p>
                {this.props.socials.map((social, i) => 
                (
                <div key={i} className="social-links"> 
                
                    <a target='_blank' rel="noopener noreferrer" href={social.url}><FontAwesomeIcon icon={social.fontAwesome} style={{fontSize: '26px'}} /> <span>{social.name}</span></a>
                </div>
                )
                )}

            </section>
        )
    }
}

export default contact;
