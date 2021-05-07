import React from "react"
import Logo from "../assets/ojilogo.svg"
import TopVideo from "../assets/topvideo.mp4"
import { AiOutlineInstagram } from "react-icons/ai"
import { FiTwitter } from "react-icons/fi"

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
      ></div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isTop}>
      {header}
      <main>{children}</main>
      <footer className="global-footer">
        <p className="sns-links">
          <a href="https://www.instagram.com/tokyoojisauna/" target="_blank">
            <AiOutlineInstagram size={70} />
          </a>
          <a href="https://twitter.com/tokyoojisauna/" target="_blank">
            <FiTwitter size={70} />
          </a>
        </p>
        <p>
          © {new Date().getFullYear()}
          {` `}
          tokyo oji sauna
        </p>
      </footer>
    </div>
  )
}

export default Layout
