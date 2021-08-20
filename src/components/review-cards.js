import React from "react"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const ReviewCards = props => {
  const reviews = props.reviews.nodes
  return (
    <section style={{ margin: "60px 0" }}>
      <StaticImage
        height={40}
        layout="fixed"
        style={{ margin: "30px auto" }}
        src="../assets/oji-review.svg"
        alt="member"
      />
      <Carousel
        showArrows={true}
        interval={2000}
        autoPlay={true}
        swipeable={true}
        emulateTouch={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
      >
        {/* <div className="review-cards"> */}
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
                to={"review/" + review.slug}
                itemProp="url"
                style={{ textDecoration: "none" }}
              >
                <GatsbyImage
                  imgStyle={{ borderRadius: shape }}
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
        {/* </div> */}
      </Carousel>
    </section>
  )
}

export default ReviewCards
