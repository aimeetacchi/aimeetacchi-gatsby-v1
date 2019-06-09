/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);

exports.createPages = async({ actions, graphql, reporter }) => {
  
       const blogresults = await graphql(`
            {
              allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] }
                  limit: 1000
              ) {
                  edges  {
                      node {
                          fields {
                              slug
                          }
                          frontmatter {
                              title
                          }
                      }
                  }
              }
            }
        `)
            if (blogresults.errors) {
                const errors = result1.errrors;
                console.log(errors)
                return reject(errors)
            }

            blogresults.data.allMarkdownRemark.edges.forEach(({ node }) => {
                    actions.createPage({
                        path: node.fields.slug,
                        component: require.resolve('./src/templates/blog-post.js'),
                        context: {
                            slug: node.fields.slug,
                        }, // additional data can be passed via context
                    })
                })

    const projectsresults = await graphql(`
            {
              allProjectsdataJson {
                  edges  {
                      node {
                         slug 
                      }
                  }
              }
            }
        `);

        if(projectsresults.error) {
            reporter.panic('There was a problem building your projects!');
            return;
        }

        const projects = projectsresults.data.allProjectsdataJson.edges;

        projects.forEach( ({node}) => {
            const slug = node.slug;

            actions.createPage({
                path:  `/${slug}/`,
                component: require.resolve('./src/templates/project.js'),
                context: { slug }
            });
        });
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type ===  `MarkdownRemark`) {
         const slug = createFilePath({ node, getNode, basePath: `pages` })
         createNodeField({
             node,
             name: `slug`,
             value: slug,
        })
    }
}
