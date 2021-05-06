import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Logo from "../assets/ojilogo.svg"

export default function Post({ location, pageContext }) {
  const { title, updatedAt } = pageContext.post
  const image = getImage(pageContext.post.heroImage)
  const body = pageContext.post.body.childMarkdownRemark.html

  return (
    <Layout location={location}>
      <div
        itemProp="headline"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "55vw",
          // justifyContent: "center",
          // alignItems: "center",
          position: "absolute",
          zIndex: 2,
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Link to="/">
            <img
              style={{ width: "300px", marginTop: "10px", margin: "auto" }}
              className="top-logo"
              src={Logo}
            />
          </Link>
        </div>
        <div
          style={{
            marginLeft: "30px",
          }}
        >
          <h1
            style={{
              marginTop: "20vw",
              fontSize: "2rem",
              color: "white",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              color: "white",
            }}
          >
            {updatedAt}
          </p>
        </div>
      </div>
      <GatsbyImage style={{ width: "100%" }} image={image} alt={title} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div dangerouslySetInnerHTML={{ __html: body }} className="post-body" />
      </article>
    </Layout>
  )
}
