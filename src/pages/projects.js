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