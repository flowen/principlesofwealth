const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  await graphql(`
    {
      allMarkdownRemark(sort: { fields: id, order: ASC }) {
        edges {
          node {
            html
            frontmatter {
              description
              path
              subtitle
              title
            }
            id
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
     * @description create chapter pages
     */

    const nodes = result.data.allMarkdownRemark.edges
    nodes.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/content-page.js`),
        context: {
          id: node.id,
        },
      })
    })

    createPage({
      path: '/chapters/',
      component: path.resolve(`src/templates/chapters.js`),
      context: {
        chapters: nodes,
      },
    })
  })
}
