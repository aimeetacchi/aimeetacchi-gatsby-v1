import React from 'react';
// import Project from './Project';
// import axios from 'axios';

class Main extends React.Component {

    state = {
        data: []
    }

    // componentDidMount() {
    //     // axios.get(`http://localhost:3000/data.json`)
    //     axios.get(`https://aimeetacchi-react.netlify.com/data.json`)
    //         .then(res => {
    //             const data = res.data;
    //             this.setState({ data });
    //         })
    // }


    render() {
        return (
            <div className="container">
                {/* <h2>{this.props.headingTitle}</h2> */}
                <p>I'm a Front-End Web Developer, based in Dunstable, Bedfordshire</p>


                <div id="recentwork" className="recent-work-title">
                    <h3>Recent Work</h3>
                    <hr />
                    <p>Take a look at my portfolio of all work I have perviously done for clients and friends.</p>
                </div>
                <div className="recent-work">
                    {/* {this.state.data.map((project, i) =>
                        <Project key={i} project={project} />
                    )} */}
                </div>

            </div >
        )
    }
}

export default Main;
