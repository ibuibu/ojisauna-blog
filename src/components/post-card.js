import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostCard = props => {
  const post = props.post
  const title = post.title
  const image = getImage(post.heroImage)

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
        <GatsbyImage image={image} alt={title} />
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
          <small>{post.updatedAt}</small>
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
