import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/post-card"

const EngeneerTags = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Engeneering | SkyWay Blog" />
      <ol className="post-list-wrapper" style={{ listStyle: `none` }}>
        {posts.map(post => {
          return <PostCard key={post.fields.slug} post={post} />
        })}
      </ol>
    </Layout>
  )
}

export default EngeneerTags

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: ["Engeneering"] } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-M-D")
          title
          description
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          tags
        }
      }
    }
  }
`
