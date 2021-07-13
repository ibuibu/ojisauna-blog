import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ReviewCard = props => {
  const reviews = props.reviews.nodes
  return (
    <section style={{ margin: "40px 0" }}>
      <h1 style={{ textAlign: "center" }}>オジレビュー</h1>
      <div className="review-cards">
        {reviews.map((review, idx) => {
          const image = getImage(review.facilityImage)
          const imageTitle = review.slug
          return (
            <div className="review-card" key={idx}>
              <Link
                to={"review/" + review.slug}
                itemProp="url"
                style={{ textDecoration: "none" }}
              >
                <GatsbyImage
                  style={{
                    width: "200px",
                    display: "block",
                    background: "black",
                  }}
                  placeHolder="blurred"
                  imgStyle={{ borderRadius: "10px" }}
                  image={image}
                  alt={imageTitle}
                />
                <span className="review-card-title">
                  No.{idx + 1} {review.facilityName}
                </span>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ReviewCard
