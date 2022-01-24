const { fmImagesToRelative } = require("gatsby-remark-relative-images")

//To Acesss frontmatter images
exports.onCreateNode = async ({ node }) => {
  fmImagesToRelative(node)
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "events" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  results.data.allMarkdownRemark.edges.forEach(edge => {
    const event = edge.node
    createPage({
      path: event.frontmatter.slug,
      component: require.resolve("./src/templates/events-desc.jsx"),
      context: {
        slug: event.frontmatter.slug,
      },
    })
  })
}
