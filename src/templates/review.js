import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Logo from "../assets/ojilogo.svg"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"

import IpWhite from "../assets/ip-white.svg"
import IbuWhite from "../assets/ibu-white.svg"
import NuNuWhite from "../assets/nu-nu-white.svg"

import IpCheckTitle from "../assets/ip-check-title.svg"
import IbuCheckTitle from "../assets/ibu-check-title.svg"
import NuNuCheckTitle from "../assets/nu-nu-check-title.svg"

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
    saunaSpec,
    waterSpec,
    restSpaceSpec,
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
        <h1 className="review-facility-name"> {post.facilityName}</h1>
        <GatsbyImage
          style={{
            width: "100%",
            display: "block",
            background: "black",
          }}
          image={image}
          placeholder="none"
          imgStyle={{ borderRadius: "10px" }}
          alt={imageTitle}
        />
        <div className="review-summary">
          <p className="review-description">{post.description.description}</p>
          <p className="review-description">
            <span className="review-description-title">サウナ</span> {saunaSpec}
          </p>
          <p className="review-description">
            <span className="review-description-title">水風呂</span> {waterSpec}
          </p>
          <p className="review-description">
            <span className="review-description-title">休憩スペース</span>{" "}
            {restSpaceSpec}
          </p>
        </div>
        <StaticImage
          width={200}
          layout="fixed"
          placeholder="none"
          style={{ margin: "20px auto" }}
          src="../assets/ojisauna-voice-title.svg"
          alt="member"
        />
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
        <div
          style={{ backgroundColor: "#5972A3" }}
          className="review-check-title"
        >
          <img className="top-logo" src={IpWhite} width="100px" />
          <img className="top-logo" src={IpCheckTitle} width="200px" />
        </div>
        <Check bgCol="rgba(89, 114, 163, 0.15)" checkData={ipCheckData} />
        <div
          style={{ backgroundColor: "#947C59" }}
          className="review-check-title"
        >
          <img className="top-logo" src={IbuWhite} width="100px" />
          <img className="top-logo" src={IbuCheckTitle} width="200px" />
        </div>
        <Check bgCol="rgba(148, 124, 89, 0.32)" checkData={ibuCheckData} />
        <div
          style={{ backgroundColor: "#758D71" }}
          className="review-check-title"
        >
          <img className="top-logo" src={NuNuWhite} width="100px" />
          <img className="top-logo" src={NuNuCheckTitle} width="200px" />
        </div>
        <Check bgCol="rgba(117, 141, 113, 0.38)" checkData={nuNuCheckData} />
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
      <div
        style={{ backgroundColor: props.bgCol }}
        className="review-point"
        key={idx}
      >
        <img className="review-point-icon" src={icon} />
        <div className="review-body">
          <div className="review-point-header">
            <span className="review-point-header-title">{d.title}</span>
          </div>
          <p className="review-point-body">{d.body}</p>
        </div>
      </div>
    )
  })
  return el
}
