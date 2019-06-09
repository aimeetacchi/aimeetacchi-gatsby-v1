import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Blog = () => (

    <StaticQuery
    query={graphql`
      query ListQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              fields {
                slug
              }
              excerpt(pruneLength: 250)
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    `
    }
    render={data => (
      <Layout>
        <div className="container">
        <SEO title="Page two" />
        <h2>Blog</h2>
        {data.allMarkdownRemark.edges.map(({ node }, i) => (
          <Link key={i} to={node.fields.slug} className="link">
            <div className="post-list">
              <h3>{node.frontmatter.title}</h3>
              <span>{node.frontmatter.date}</span>
              <p>{node.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
      </Layout>
    )}
  />
)

export default Blog;