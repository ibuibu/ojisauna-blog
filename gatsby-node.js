const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
    {
      allContentfulBlogPost {
        edges {
          node {
            title
            heroImage {
              gatsbyImageData
            }
            body {
              childMarkdownRemark {
                html
              }
            }
            updatedAt(locale: "ja-JP", formatString: "YYYY.MM.DD")
            createdAt(locale: "ja-JP", formatString: "YYYY.MM.DD")
            description {
              description
            }
            author {
              name
            }
            slug
          }
        }
      }
      allContentfulReview {
        edges {
          node {
            facilityName
            slug
            facilityImage {
              gatsbyImageData
							title
            }
            description {
              description
            }
            saunaSpec
            waterSpec
            restSpaceSpec
						saunaShortReview
						waterShortReview
						restSpaceShortReview
						ipCheck {
							data {
								tag,
                title,
								body
							}
						}
						ibuCheck {
							data {
								tag,
                title,
								body
							}
						}
						nuNuCheck {
							data {
								tag,
                title,
								body
							}
						}
          }
        }
      }
    }
    `
)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  // const posts = result.data.allMarkdownRemark.nodes
  const { edges } = result.data.allContentfulBlogPost
  edges.forEach(edge => {
    createPage({
        path: `/post/${edge.node.slug}/`,
        component: path.resolve("./src/templates/blog-post.js"),
        context: { post: edge.node }
    })
  });

  const reviewEdges = result.data.allContentfulReview.edges
  reviewEdges.forEach(edge => {
    createPage({
        path: `/review/${edge.node.slug}/`,
        component: path.resolve("./src/templates/review.js"),
        context: { post: edge.node }
    })
  });

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  // if (posts.length > 0) {
  //   posts.forEach((post, index) => {
  //     const previousPostId = index === 0 ? null : posts[index - 1].id
  //     const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

  //     createPage({
  //       path: post.fields.slug,
  //       component: blogPost,
  //       context: {
  //         id: post.id,
  //         previousPostId,
  //         nextPostId,
  //       },
  //     })
  //   })
  // }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
