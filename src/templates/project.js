import React from 'react'
import Layout from '../components/layout'
import Project from '../components/project';
import { graphql } from 'gatsby'

export const query = graphql`
    query ($slug: String!) {
        projectsdataJson(slug: {eq: $slug }) {
            title
            description
            link
            img {
                childImageSharp {
                    fluid {
                        src
                    }
                }
            }
        }
    }
`
const ProjectTemplate = ({data}) => {

   const project = data.projectsdataJson;

    return (
        <Layout>
            <Project project={project} />
        </Layout>
    )
}

export default ProjectTemplate;

