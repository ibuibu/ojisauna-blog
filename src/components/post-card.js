import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostCard = props => {
  const post = props.post
  const title = post.title
  const image = getImage(post.heroImage)
  const shape = props.shape;
  console.log(shape)

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
        <Link
          to={"post/" + post.slug}
          itemProp="url"
        >
          <GatsbyImage image={image} alt={title} imgStyle={{borderRadius: shape, display: "inline"}}/>
        </Link>
        <section className="post-list-content">
          <Tags tags={post.tags} />
          <Link
            className="post-list-link"
            to={"post/" + post.slug}
            itemProp="url"
          ></Link>
          <h2 itemProp="headline">{title}</h2>
          {/* <small className="post-link-date">{post.updatedAt}</small> */}
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
