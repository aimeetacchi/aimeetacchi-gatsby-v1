import React from 'react'
import Layout from '../components/layout'

class Contact extends React.Component {
    render() {
        return (
            <Layout>
                <div className="container">
                    <h2>Contact Me..</h2>
                    You can contact me <a href="mailto:aimetacchi@hotmail.co.uk" className="button">Email</a>
                    <p>I am contactable on my social accounts</p>
                    <a target="_blank" rel="noopener noreferrer" className="button" href="https://linkedin.com/in/aimeetacchi/"> Linkedin</a>
                    <a target="_blank" rel="noopener noreferrer" className="button" href="https://twitter.com/aimeetacchi/"> Twitter</a>
                </div>
            </Layout>
        )
    }
}
export default Contact;