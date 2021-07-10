import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Logo from "../assets/ojilogo.svg"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { StaticImage } from "gatsby-plugin-image"

import IpIllust from "../assets/prof_ip.svg"
import IbuIllust from "../assets/prof_ibu.svg"
import NuNuIllust from "../assets/prof_nu-nu.svg"

import IpChest from "../assets/ip_chest.svg"
import IbuChest from "../assets/ibu_chest.svg"
import NuNuChest from "../assets/nu-nu_chest.svg"

import Aroma from "../assets/review-icon/aroma.png"
import Steam from "../assets/review-icon/steam.png"
import Variation from "../assets/review-icon/variation.png"

export default function Review({ location, pageContext }) {
  const post = pageContext.post
  const {
    facilityName,
    saunaShortReview,
    waterShortReview,
    restSpaceShortReview,
  } = post
  const ipCheckData = post.ipCheck.data
  const ibuCheckData = post.ibuCheck.data
  const nuNuCheckData = post.nuNuCheck.data
  const image = getImage(post.facilityImage)
  const imageTitle = post.facilityImage.title

  return (
    <Layout location={location}>
      <SEO title={facilityName} description={facilityName} />
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
      <section className="review-area">
        <h1> {post.facilityName}</h1>
        <GatsbyImage
          style={{ width: "300px", display: "block", background: "black" }}
          image={image}
          imgStyle={{ borderRadius: "200px" }}
          alt={imageTitle}
        />
        <p> {post.description.description}</p>
        <div className="top-reviews">
          <li> {saunaShortReview}</li>
          <li> {waterShortReview}</li>
          <li> {restSpaceShortReview}</li>
        </div>

        <div className="top-reviews">
          <img className="top-logo" src={IpChest} width="100px" />
          <img className="top-logo" src={IbuChest} width="100px" />
          <img className="top-logo" src={NuNuChest} width="100px" />
        </div>
        <img className="top-logo" src={IpIllust} width="100px" />
        <Check checkData={ipCheckData} />
        <img className="top-logo" src={IbuIllust} width="100px" />
        <Check checkData={ibuCheckData} />
        <img className="top-logo" src={NuNuIllust} width="100px" />
        <Check checkData={nuNuCheckData} />
      </section>
    </Layout>
  )
}

const Check = props => {
  const el = props.checkData.map((d, idx) => {
    let icon
    switch (d.tag) {
      case "aroma":
        icon = Aroma
        break
      case "steam":
        icon = Steam
        break
      case "variation":
        icon = Variation
        break

      default:
        break
    }
    return (
      <div className="review-point" key={idx}>
        <p>
          <span className="review-point-count">Point {idx + 1}</span>
          <span className="review-point-count">{d.title}</span>
        </p>
        <div className="review-body">
          <img className="top-logo" src={icon} width="100px" />
          <p>{d.body}</p>
        </div>
      </div>
    )
  })
  return el
}
