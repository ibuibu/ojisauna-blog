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

import SaunaIcon from "../assets/sauna-icon.svg"
import WaterIcon from "../assets/water-icon.svg"
import RestSpaceIcon from "../assets/rest-space-icon.svg"

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
            style={{ width: "150px", marginTop: "10px", margin: "auto" }}
            className="top-logo"
            alt="main logo"
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
          style={{ margin: "20px auto" }}
          src="../assets/ojisauna-voice-title.svg"
          alt="member"
        />
        <div className="top-reviews">
          <li className="balloon"> {saunaShortReview}</li>
          <li className="balloon"> {waterShortReview}</li>
          <li className="balloon"> {restSpaceShortReview}</li>
        </div>

        <div className="voice-icons">
          <img className="voice-icon" alt="サウナアイコン" src={SaunaIcon} />
          <img className="voice-icon" alt="水風呂アイコン" src={WaterIcon} />
          <img className="voice-icon" alt="休憩所アイコン" src={RestSpaceIcon} />
        </div>
        <div
          style={{ backgroundColor: "#5972A3" }}
          className="review-check-title"
        >
          <img className="top-logo" alt="IPイラスト" src={IpWhite} width="100px" />
          <img className="top-logo" alt="IPチェックタイトル" src={IpCheckTitle} width="200px" />
        </div>
        <Check bgCol="rgba(89, 114, 163, 0.15)" checkData={ipCheckData} />
        <div
          style={{ backgroundColor: "#947C59" }}
          className="review-check-title"
        >
          <img className="top-logo" alt="Ibuイラスト" src={IbuWhite} width="100px" />
          <img className="top-logo" alt="Ibuチェックタイトル" src={IbuCheckTitle} width="200px" />
        </div>
        <Check bgCol="rgba(148, 124, 89, 0.32)" checkData={ibuCheckData} />
        <div
          style={{ backgroundColor: "#758D71" }}
          className="review-check-title"
        >
          <img className="top-logo" alt="nu-nuイラスト" src={NuNuWhite} width="100px" />
          <img className="top-logo" alt="nu-nuチェックタイトル" src={NuNuCheckTitle} width="200px" />
        </div>
        <Check bgCol="rgba(117, 141, 113, 0.38)" checkData={nuNuCheckData} />
      </section>
    </Layout>
  )
}

const Check = props => {
  const el = props.checkData.map((d, idx) => {
    let icon
    let title

    switch (d.tag) {
      case "aroma":
        icon = Aroma
        title = "鼻腔をくすぐる香り"
        break
      case "steam":
        icon = Steam
        title = "サウナ室内の蒸され具合"
        break
      case "variation":
        icon = Variation
        title = "サウナのバリエーション"
        break
      case "concentration":
        icon = Concentration
        title = "サウナ室内の集中環境"
        break
      case "heat-wave":
        icon = HeatWave
        title = "施設独自の熱波形状"
        break
      case "entertainment":
        icon = Entertainment
        title = "サ室エンターテイメント"
        break
      case "temperature":
        icon = Temperature
        title = "あまみが浮き出る温度差"
        break
      case "meditation":
        icon = Meditation
        title = "瞑想できるととのい空間"
        break
      case "position":
        icon = Position
        title = "ととのいポジショニング"
        break
      case "bath":
        icon = Bath
        title = "サウナ中に嗜むお湯"
        break
      case "outdoor":
        icon = Outdoor
        title = "解放感あふれる露天"
        break
      case "water-quality":
        icon = WaterQuality
        title = "オリジナルの水質"
        break
      case "conductor":
        icon = Conductor
        title = "サウナー視点の動線設計"
        break
      case "dressing-room":
        icon = DressingRoom
        title = "安心の脱衣所クオリティ"
        break
      case "hydration":
        icon = Hydration
        title = "発汗に不安なしの水分補給"
        break
      case "interior":
        icon = Interior
        title = "心躍る外観・インテリア"
        break
      case "congestion":
        icon = Congestion
        title = "施設の来客状況"
        break
      case "food":
        icon = Food
        title = "サウナ後に外せない「サ飯」"
        break
      case "drink":
        icon = Drink
        title = "風呂上がりの一杯"
        break
      case "rest":
        icon = Rest
        title = "アフターサウナのくつろぎ空間"
        break
      case "cleanliness":
        icon = Cleanliness
        title = "すっきり・さっぱり清潔感"
        break
      case "scenery":
        icon = Scenery
        title = "ここでしか見られない景色"
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
        <div className='review-point-icon-wrapper'>
          <img className="review-point-icon" alt="レビューポイントアイコン" src={icon} />
        </div>
        <div className="review-body">
          <div className="review-point-header">
            <span className="review-point-header-title">{title}</span>
          </div>
          <p className="review-point-body">{d.body}</p>
        </div>
      </div>
    )
  })
  return el
}
