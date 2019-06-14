// src/pages/projects.jsx
import React from 'react'
import Layout from '../components/layout'
import { StaticQuery, graphql } from "gatsby";
// import { Link } from 'gatsby';
import ProjectPreview from '../components/projectPreview';

const Projects = () => (

    <StaticQuery
    query={graphql`
        query ProjectsDataQuery {
            allProjectsdataJson {
                edges {
                  node {
                    description
                    slug
                    title
                    skills
                    recent_work
                    short_description
                    img {
                      childImageSharp {
                        fluid {
                          src
                        }
                      }
                    }
                  }
                }
              }
        }
    `
    }
    render={data =>(
        
        <Layout>
            <div className="container">
                <h2>Projects</h2>
                <p>I hope you like my Javascript, jQuery & React projects I have  built, they are all written with clean code and developed so they are all using responsive design. I have a whole load of other things over on my codepen, also check out my github. Enjoy :D</p>
                <div className="recent-work">
                {/* MAP OVER QUERY JSON and pass data to project component */}
                    {
                        data.allProjectsdataJson.edges.map((project, i) => (
                        <ProjectPreview key={i} project={project}/>
                    ))
                 }
                        
                </div>
            </div>
        </Layout>
        
    )}
    />
)

export default Projects;