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
import Concentration from "../assets/review-icon/concentration.png"
import HeatWave from "../assets/review-icon/heat-wave.png"
import Entertainment from "../assets/review-icon/entertainment.png"
import Temperature from "../assets/review-icon/temperature.png"
import Meditation from "../assets/review-icon/meditation.png"
import Position from "../assets/review-icon/position.png"
import Bath from "../assets/review-icon/bath.png"
import Outdoor from "../assets/review-icon/outdoor.png"
import WaterQuality from "../assets/review-icon/water-quality.png"
import Conductor from "../assets/review-icon/conductor.png"
import DressingRoom from "../assets/review-icon/dressing-room.png"
import Hydration from "../assets/review-icon/hydration.png"
import Interior from "../assets/review-icon/interior.png"
import Congestion from "../assets/review-icon/congestion.png"
import Food from "../assets/review-icon/food.png"
import Drink from "../assets/review-icon/drink.png"
import Rest from "../assets/review-icon/rest.png"
import Cleanliness from "../assets/review-icon/cleanliness.png"
import Scenery from "../assets/review-icon/scenery.png"

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
        <div className="review-summary">
          <GatsbyImage
            style={{
              width: "300px",
              maxWidth: "50%",
              display: "block",
              background: "black",
            }}
            image={image}
            imgStyle={{ borderRadius: "200px" }}
            alt={imageTitle}
          />
          <p className="review-description"> {post.description.description}</p>
        </div>
        <div className="top-reviews">
          <li className="balloon"> {saunaShortReview}</li>
          <li className="balloon"> {waterShortReview}</li>
          <li className="balloon"> {restSpaceShortReview}</li>
        </div>

        <div className="top-chests">
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
      case "concentration":
        icon = Concentration
        break
      case "heat-wave":
        icon = HeatWave
        break
      case "entertainment":
        icon = Entertainment
        break
      case "temperature":
        icon = Temperature
        break
      case "meditation":
        icon = Meditation
        break
      case "position":
        icon = Position
        break
      case "bath":
        icon = Bath
        break
      case "outdoor":
        icon = Outdoor
        break
      case "water-quality":
        icon = WaterQuality
        break
      case "conductor":
        icon = Conductor
        break
      case "dressing-room":
        icon = DressingRoom
        break
      case "hydration":
        icon = Hydration
        break
      case "interior":
        icon = Interior
        break
      case "congestion":
        icon = Congestion
        break
      case "food":
        icon = Food
        break
      case "drink":
        icon = Drink
        break
      case "rest":
        icon = Rest
        break
      case "cleanliness":
        icon = Cleanliness
        break
      case "scenery":
        icon = Scenery
        break

      default:
        break
    }
    return (
      <div className="review-point" key={idx}>
        <img className="review-point-icon" src={icon} />
        <div className="review-body">
          <div className="review-point-header">
            <span className="review-point-header-count">Point {idx + 1}</span>
            <span className="review-point-header-title">{d.title}</span>
          </div>
          <p className="review-point-body">{d.body}</p>
        </div>
      </div>
    )
  })
  return el
}
