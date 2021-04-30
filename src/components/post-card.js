import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

const PostCard = props => {
  const post = props.post
  console.log('hoge', post)
  const title = post.title
  const FeaturedImg = () => {
    if (post.featuredImage) {
      const featuredImgFluid =
        post.featuredImage.childImageSharp.fluid
      return <Image fadeIn={false} fluid={featuredImgFluid} />
    } else {
      return <></>
    }
  }

  const Tags = ({ tags }) => {
    return (
      <div className="tags">
        {(tags || []).map(tag => (
          <a key={tag}>{tag}</a>
        ))}
      </div>
    )
  }

  return (
    <li className="post-list" key={post.slug}>
      <article
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <FeaturedImg />
        <section className="post-list-content">
          <Tags tags={post.tags} />
          <h2>
            <Link
              className="post-list-link"
              to={"post/" + post.slug}
              itemProp="url"
            >
            </Link>
              <p itemProp="headline">{title}</p>
          </h2>
          <small>{post.date}</small>
          <p
            dangerouslySetInnerHTML={{
              __html: post.description || post.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </article>
    </li>
  )
}

export default PostCard
