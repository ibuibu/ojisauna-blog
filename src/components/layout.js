import React from "react"
import Logo from "../assets/ojilogo.svg"
import TopVideo from "../assets/topvideo.mp4"
import { AiOutlineInstagram } from "react-icons/ai"
import { FiTwitter } from "react-icons/fi"
import { StaticImage } from "gatsby-plugin-image"
// import { GrSpotify } from "react-icons/gr"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const pn = location.pathname
  const isTop = pn === rootPath
  let header

  if (isTop) {
    header = (
      <div>
        <div className="global-header-wrapper">
          <header className="global-header">
            <img className="top-logo" alt="main logo" src={Logo} width="90%" />
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
        <section className="profile-area">
          <p className="profile-desc">
            サウナと散歩を愛するおじさん3人組。
            <br />
            ささやかな日々の営みを、
            <br />
            不定期に更新していきます。
          </p>
          <StaticImage
            height={80}
            layout="fixed"
            style={{ margin: "0 auto" }}
            src="../assets/oji-member.svg"
            alt="member"
          />
          <div className="profile-photos">
            <div style={{ margin: "10px" }}>
              <StaticImage src="../assets/prof_ibu.svg" alt="ibu" />
            </div>
            <div style={{ margin: "10px" }}>
              <StaticImage src="../assets/prof_nu-nu.svg" alt="nu-nu" />
            </div>
            <div style={{ margin: "10px" }}>
              <StaticImage src="../assets/prof_ip.svg" alt="ip" />
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ marginTop: "4rem" }}>アプリ</h2>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://salog.ojisauna.com"
            >
              <StaticImage src="../assets/salog.png" alt="ip" width="500" />
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ marginBottom: 0 }}>Third Single</p>
            <h2 style={{ marginTop: 0 }}>気泡は希望</h2>
            <div className="iframe-wrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WPjYz_EfqII"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <p style={{ marginBottom: 0 }}>Second Single</p>
            <h2 style={{ marginTop: 0 }}>TTNG</h2>
            <div className="iframe-wrapper">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/4w1cysrIytY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <p style={{ marginBottom: 0 }}>First Single</p>
            <h2 style={{ marginTop: 0 }}>Ojisauna_Time</h2>
            <div className="iframe-wrapper">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/drtjimAfiYw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>
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
          <a
            href="https://www.instagram.com/tokyoojisauna/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram size={54} />
          </a>
          <a
            href="https://twitter.com/tokyoojisauna/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter size={54} />
          </a>
          {/* <a href="https://open.spotify.com/user/31m4lj5xn2ldjgh75o75ua2qr2hy?si=fee067d55d7f4379" target="_blank">
            <GrSpotify size={54} />
          </a> */}
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
