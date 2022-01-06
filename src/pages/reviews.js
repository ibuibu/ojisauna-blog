import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import Logo from "../assets/ojilogo.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPageReview = ({ location }) => {
  const { allContentfulReview } = useStaticQuery(graphql`
    query MyQuery {
      allContentfulReview(sort: { fields: updatedAt, order: ASC }) {
        nodes {
          id
          facilityName
          facilityImage {
            gatsbyImageData(width: 320)
          }
          slug
        }
      }
    }
  `)

  const reviews = allContentfulReview.nodes
  return (
    <Layout location={location}>
      <SEO title="東京オジサウナ" />
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Link to="/">
          <img
            style={{
              width: "150px",
              marginTop: "10px",
              margin: "auto",
            }}
            className="top-logo"
            alt="main logo"
            src={Logo}
          />
        </Link>
      </div>
      <StaticImage
        height={40}
        layout="fixed"
        style={{ margin: "30px auto" }}
        src="../assets/oji-review.svg"
        alt="member"
      />
      <div className="reviews">
        {reviews.map((review, idx) => {
          const image = getImage(review.facilityImage)
          const imageTitle = review.slug

          let lis = []
          for (let i = 0; i < 4; i++) {
            const num = Math.floor(10 + Math.random() * 81)
            const left = 100 - num
            lis.push(num + "%")
            lis.push(left + "%")
          }
          const shape = `${lis[0]} ${lis[1]} ${lis[2]} ${lis[3]} / ${lis[4]} ${lis[6]} ${lis[7]} ${lis[5]}`

          return (
            <div className="review-card" key={idx}>
              <Link
                to={"/review/" + review.slug}
                itemProp="url"
                style={{ textDecoration: "none" }}
              >
                <GatsbyImage
                  imgStyle={{ borderRadius: shape }}
                  image={image}
                  alt={imageTitle}
                />
                <span className="review-card-title">{review.facilityName}</span>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPageReview
