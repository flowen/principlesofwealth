const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  await graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___order, order: ASC }) {
        edges {
          node {
            id
            frontmatter {
              intro
              path
              subtitle
              title
              order
            }
          }
          next {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }

    /**
     * @description create content pages
     */

    const nodes = result.data.allMarkdownRemark.edges

    nodes.forEach(({ node, next }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/content-page.js`),
        context: {
          id: node.id,
          next: next,
        },
      })
    })

    /**
     * @description create chapters page
     */

    createPage({
      path: '/chapters/',
      component: path.resolve(`src/templates/chapters.js`),
      context: {
        chapters: nodes,
      },
    })
  })
}
