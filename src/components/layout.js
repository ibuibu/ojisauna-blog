import React from "react"
// import { Link } from "gatsby"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  const data = useStaticQuery(
    graphql`
      {
        testFixed: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        testFluid: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  if (isRootPath) {
    header = (
      // <h1 className="main-heading">
      // <Link to="/">{title}</Link>
      // </h1>
      <Link to="/">
        <div style={{ width: "200px", margin: "auto" }}>
          <Image
            fadeIn={true}
            fluid={data.testFluid.childImageSharp.fluid}
          ></Image>
        </div>
      </Link>
    )
  } else {
    header = (
      // <Link className="header-link-home" to="/">
      //   {title}
      // </Link>
      <Link to="/">
        <div style={{ width: "200px" }}>
          <Image
            fadeIn={true}
            fluid={data.testFluid.childImageSharp.fluid}
          ></Image>
        </div>
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className="global-footer">
        <p>
          © {new Date().getFullYear()}
          {` `}
          <a href="https://webrtc.ecl.ntt.com/">SkyWay</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
