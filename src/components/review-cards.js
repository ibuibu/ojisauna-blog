import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ReviewCard = props => {
  const reviews = props.reviews.nodes
  return (
    <li className="post-list">
      {reviews.map((review, idx) => {
        const image = getImage(review.facilityImage)
        const imageTitle = review.facilityImage.title
        return (
          <div key={idx}>
            <Link to={"review/" + review.slug} itemProp="url">
              <GatsbyImage
                style={{
                  width: "300px",
                  display: "block",
                  background: "black",
                }}
                image={image}
                alt={imageTitle}
              />
              <p>{review.facilityName}</p>
            </Link>
          </div>
        )
      })}
    </li>
  )
}

export default ReviewCard
