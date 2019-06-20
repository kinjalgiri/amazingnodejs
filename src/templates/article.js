import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const ArticleTemplate = ({ data }) => (
  <Layout>
      <article class="blog-post px-3 py-5 p-md-5">
        <div class="container">
          <header class="blog-post-header">
          <h2 class="title mb-2">{data.strapiArticle.title}</h2>
          <div class="meta mb-3"><span class="date">Published 3 months ago       by{" "}
            <Link to={`/authors/${data.strapiArticle.user.id}`}>
              {data.strapiArticle.user.username}
            </Link></span><span class="time">5 min read</span><span class="comment"><a href="#">4 comments</a></span></div>
          </header>
          
          <div class="blog-post-body">
            <figure class="blog-banner">
                <a href="https://made4dev.com"><img class="img-fluid" src="assets/images/blog/blog-post-banner.jpg" alt="image" /></a>
                <figcaption class="mt-2 text-center image-caption">Image Credit: <a href="https://made4dev.com?ref=devblog" target="_blank">made4dev.com (Premium Programming T-shirts)</a></figcaption>
          </figure>
          {data.strapiArticle.description}
          </div>
      </div>
      </article>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($slug: String!) {
    strapiArticle(slug: { eq: $slug }) {
      title
      description
      user {
        id
        username
      }
    }
  }
`