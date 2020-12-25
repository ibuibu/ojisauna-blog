import React from "react"
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
      <header className="global-header">
        <Link to="/">
          <div style={{ width: "200px", margin: "auto" }}>
            <Image
              fadeIn={false}
              fluid={data.testFluid.childImageSharp.fluid}
            ></Image>
          </div>
        </Link>
        <Link to="/engeneering">エンジニアリング</Link>
        <Link to="/updates">アップデート情報</Link>
      </header>
    )
  } else {
    header = (
      <header>
        <Link to="/">
          <div style={{ width: "200px", margin: "auto" }}>
            <Image
              fadeIn={false}
              fluid={data.testFluid.childImageSharp.fluid}
            ></Image>
          </div>
        </Link>
        <Link to="/engeneering">
          エンジニアリング
        </Link>
        <Link to="/updates">
          アップデート情報
        </Link>
      </header>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      {header}
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
