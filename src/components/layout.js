import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Logo from "../assets/ojilogo.svg"
import TopVideo from "../assets/topvideo.mp4"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const pn = location.pathname
  const isTop = pn === rootPath || pn === "/about"
  const pageName = pn === rootPath ? "東京オジサウナ" : "ABOUT"
  let header

  if (isTop) {
    header = (
      <div className="global-header-wrapper">
        <div className="navbar">
          {/* <div className="navbar-link">
            <Link to="#">アバウト</Link>
            <Link to="#">SNS</Link>
          </div> */}
        </div>
        <header className="global-header">
          <img className="top-logo" src={Logo} />
          <video
            className="top-video"
            src={TopVideo}
            playsInline
            controls
            loop
            autoPlay
            muted
          />
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
              <StaticImage
                alt="logo"
                src="../content/assets/logo.png"
              ></StaticImage>
            </Link>
          </div>
          <div className="navbar-link">
            <Link to="#">アバウト</Link>
            <Link to="#">SNS</Link>
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
          © {new Date().getFullYear()}
          {` `}
          Ojisauna
        </p>
      </footer>
    </div>
  )
}

export default Layout
