import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import PostCard from "../components/post-card"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query allContentfulAsset {
      allContentfulBlogPost {
        nodes {
          id
          title
          slug
          tags
          createdAt
          body {
            body
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <ol className="post-list-wrapper" style={{ listStyle: `none` }}>
      {data.allContentfulBlogPost.nodes.map((post) => {
        return <PostCard key={post.id} post={post} />
      })}
      </ol>
    </Layout>
  )
}

export default IndexPage
