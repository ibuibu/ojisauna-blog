import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import PostCard from "../components/post-card"
import ReviewCards from "../components/review-cards"
import SEO from "../components/seo"
import { FiTwitter } from "react-icons/fi"
import { RiSpotifyLine } from "react-icons/ri"

import { StaticImage } from "gatsby-plugin-image"

const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query allContentfulAsset {
      allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
        nodes {
          id
          heroImage {
            gatsbyImageData(width: 320)
          }
          title
          slug
          tags
          updatedAt(locale: "ja-JP", formatString: "YYYY.MM.DD")
          createdAt(locale: "ja-JP", formatString: "YYYY.MM.DD")
          body {
            body
          }
        }
      }
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

  return (
    <Layout location={location}>
      <SEO title="東京オジサウナ" />
      <ReviewCards reviews={data.allContentfulReview} />
      <Twitter />
      <StaticImage
        height={80}
        layout="fixed"
        style={{ margin: "0 auto" }}
        src="../assets/oji-log.svg"
        alt="member"
      />
      <ol className="post-list-wrapper" style={{ listStyle: `none` }}>
        {data.allContentfulBlogPost.nodes.map(post => {
          let lis = []
          for (let i = 0; i < 4; i++) {
            const num = Math.floor(10 + Math.random() * 81)
            const left = 100 - num
            lis.push(num + "%")
            lis.push(left + "%")
          }
          const shape = `${lis[0]} ${lis[1]} ${lis[2]} ${lis[3]} / ${lis[4]} ${lis[6]} ${lis[7]} ${lis[5]}`
          return <PostCard key={post.id} post={post} shape={shape} />
        })}
      </ol>
      <div style={{ textAlign: "center" }}>
        <div>
          <a
            href="https://open.spotify.com/playlist/0D8tXpGdhbtZzSndxyrK2a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiSpotifyLine size={30} color={"#81b71a"} />
            <RiSpotifyLine size={30} color={"#81b71a"} />
            <RiSpotifyLine size={30} color={"#81b71a"} />
          </a>
        </div>
        <iframe
          src="https://open.spotify.com/embed?uri=spotify%3Aplaylist%3A0D8tXpGdhbtZzSndxyrK2a"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </Layout>
  )
}

const Twitter = () => {
  React.useEffect(() => {
    const s = document.createElement("script")
    s.setAttribute("src", "https://platform.twitter.com/widgets.js")
    document.body.appendChild(s)
  }, [])
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <a
          href="https://twitter.com/tokyoojisauna/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter size={30} color={"#00acee"} />
          <FiTwitter size={30} color={"#00acee"} />
          <FiTwitter size={30} color={"#00acee"} />
        </a>
      </div>
      <a
        class="twitter-timeline"
        href="https://twitter.com/tokyoojisauna?ref_src=twsrc%5Etfw"
        data-width="300"
        data-height="300"
        data-chrome="noheadernofooternoborders"
      >
        Tweets by tokyoojisauna
      </a>
    </div>
  )
}

export default IndexPage
