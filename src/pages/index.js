import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import PostCard from "../components/post-card"
import SEO from "../components/seo"

const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query allContentfulAsset {
      allContentfulBlogPost(
        sort: { fields: createdAt, order: DESC}
      ) {
        nodes {
          id
          heroImage {
            gatsbyImageData(width: 320)
          }
          title
          slug
          tags
          updatedAt(locale: "ja-JP", formatString: "YYYY.MM.DD")
          createdAt(locale: "ja-JP", formatString: "YYYY.MM.DD")
          body {
            body
          }
        }
      }
    }
  `)

  return (
    <Layout location={location}>
      <SEO title="東京オジサウナ" />
      <ol className="post-list-wrapper" style={{ listStyle: `none` }}>
        {data.allContentfulBlogPost.nodes.map(post => {
          let lis = []
          for (let i = 0; i < 4; i++) {
            const num = Math.floor(10 + Math.random() * 81)
            const left = 100 - num
            lis.push(num + "%")
            lis.push(left + "%")
          }
          const shape = `${lis[0]} ${lis[1]} ${lis[2]} ${lis[3]} / ${lis[4]} ${lis[6]} ${lis[7]} ${lis[5]}`
          return <PostCard key={post.id} post={post} shape={shape}/>
        })}
      </ol>
    </Layout>
  )
}

export default IndexPage
