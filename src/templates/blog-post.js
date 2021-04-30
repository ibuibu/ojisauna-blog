// src/templates/post.js
import React from "react"
import Layout from "../components/layout";

export default function Post({ pageContext }) {
    const { title, updatedAt } = pageContext.post;
    const body = pageContext.post.body.childMarkdownRemark.html;

    return (
        <Layout>
            <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
            >
                <div className="post-header">
                    <h1>{title}</h1>
                    <p className="post-date">{updatedAt}</p>
                </div>
                <div dangerouslySetInnerHTML={{ __html: body }} className="post-body" />
            </article>
        </Layout>
    )
}