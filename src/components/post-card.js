import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

const PostCard = props => {
  const post = props.post
  const title = post.frontmatter.title || post.fields.slug
  const FeaturedImg = () => {
    if (post.frontmatter.featuredImage) {
      const featuredImgFluid =
        post.frontmatter.featuredImage.childImageSharp.fluid
      return <Image fluid={featuredImgFluid} />
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
    <li key={post.fields.slug}>
      <article
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <FeaturedImg />
          <h2>
            <Link to={post.fields.slug} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          </h2>
          <Tags tags={post.frontmatter.tags} />
          <small>{post.frontmatter.date}</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </article>
    </li>
  )
}

export default PostCard
