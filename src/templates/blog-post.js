import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  HatenaShareButton,
  HatenaIcon,
} from "react-share"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  const FeaturedImg = () => {
    if (post.frontmatter.featuredImage) {
      const featuredImgFluid =
        post.frontmatter.featuredImage.childImageSharp.fluid
      return (
        <Image
          fadeIn={false}
          imgStyle={{ opacity: 0.4 }}
          style={{ background: "#000" }}
          fluid={featuredImgFluid}
        />
      )
    } else {
      return <></>
    }
  }

  const ShareButtons = () => {
    return (
      <section className="share-buttons">
        <TwitterShareButton
          style={{ marginRight: "10px" }}
          url={location.href}
          title={post.frontmatter.title}
          hashtags={["WebRTCSkyWay"]}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <FacebookShareButton
          style={{ marginRight: "10px" }}
          url={location.href}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <HatenaShareButton
          style={{ marginRight: "10px" }}
          url={location.href}
          title={post.frontmatter.title}
        >
          <HatenaIcon size={32} round={true} />
        </HatenaShareButton>
      </section>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div
        itemProp="headline"
        style={{
          display: "flex",
          width: "100%",
          height: "55vw",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          zIndex: 9,
        }}
      >
        <div>
          <h1
            style={{
              margin: "auto",
              fontSize: "3rem",
              color: "white",
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            {post.frontmatter.date}
          </p>
        </div>
      </div>
      <FeaturedImg />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <ShareButtons />
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        {/* <footer> */}
        {/* <Bio /> */}
        {/* </footer> */}
        <ShareButtons />
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            paddingLeft: "16rem",
            paddingRight: "16rem",
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-M-D")
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
