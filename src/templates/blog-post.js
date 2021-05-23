import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Logo from "../assets/ojilogo.svg"

export default function Post({ location, pageContext }) {
  const post = pageContext.post
  const { title, createdAt, author } = post
  const description = post.description.description
  const image = getImage(pageContext.post.heroImage)
  const body = pageContext.post.body.childMarkdownRemark.html

  return (
    <Layout location={location}>
      <SEO title={title} description={description} />
      <div
        itemProp="headline"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "55vw",
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
          <h5
            style={{
              color: "white",
              fontWeight: "bold"
            }}
          >
            {author.name}
          </h5>
          <p
            style={{
              color: "white",
            }}
          >
            {createdAt}
          </p>
        </div>
      </div>
      <div className="mask">
        <GatsbyImage
          style={{ width: "100%", display: "block", background: "black" }}
          image={image}
          imgClassName="post-bg"
          alt={title}
        />
      </div>
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
