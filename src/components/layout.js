import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const pn = location.pathname
  const isTop = pn === rootPath || pn === "/updates" || pn === "/engeneering"
  const pageName =
    pn === rootPath
      ? "SkyWay Product Blog"
      : pn === "/updates"
      ? "アップデート情報"
      : "エンジニアリング"
  let header

  const data = useStaticQuery(
    graphql`
      {
        estFixed: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        estFluid: file(relativePath: { eq: "aa.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  if (isTop) {
    header = (
      <div className="global-header-wrapper">
        <div className="navbar">
          <div style={{ width: "150px", margin: "1.2rem", marginLeft: "5rem" }}>
            <Link to="/">
              <Image
                fadeIn={false}
                fluid={data.estFluid.childImageSharp.fluid}
              ></Image>
            </Link>
          </div>
          <div className="navbar-link">
            <Link to="/updates">アップデート情報</Link>
            <Link to="/engeneering">エンジニアリング</Link>
            <Link to="https://webrtc.ecl.ntt.com" target="_blank">
              公式サイト□
            </Link>
          </div>
        </div>
        <header className="global-header">
          <Link to="/">
            <h1>{pageName}</h1>
          </Link>
        </header>
      </div>
    )
  } else {
    header = (
      <div
        style={{
          position: "absolute",
          zIndex: 10,
          display: "flex",
          width: "100%",
        }}
      >
        <div className="navbar">
          <div style={{ width: "150px", margin: "1.2rem", marginLeft: "5rem" }}>
            <Link to="/">
              <Image
                fadeIn={false}
                fluid={data.estFluid.childImageSharp.fluid}
              ></Image>
            </Link>
          </div>
          <div className="navbar-link">
            <Link to="/updates">アップデート情報</Link>
            <Link to="/engeneering">エンジニアリング</Link>
            <Link to="https://webrtc.ecl.ntt.com" target="_blank">
              公式サイト□
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isTop}>
      {header}
      <main>{children}</main>
      <footer className="global-footer">
        <p>
          {/* © {new Date().getFullYear()} */}
          {/* {` `} */}
          © NTT Communications Corporation All Rights Reserved.
          <br />
          <br />
          <a href="https://webrtc.ecl.ntt.com/">SkyWay</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
