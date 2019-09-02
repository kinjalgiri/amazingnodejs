import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import TimeAgo from 'react-timeago'

const ArticleTemplate = ({ data }) => (
  <Layout>
      <article className="blog-post px-3 py-5 p-md-5">
        <div className="container">
          <header className="blog-post-header">
          <h2 className="title mb-2">{data.strapiArticle.title} </h2>
          <div className="meta mb-3">
            <span className="date">Published <TimeAgo date={data.strapiArticle.updatedAt} /> by{" "}
            <Link to={`/authors/${data.strapiArticle.user.id}`}>
              {data.strapiArticle.user.username}
            </Link>
            </span>
          </div>
          </header>

          <div className="blog-post-body">
            <figure className="blog-banner">
                <a href="https://made4dev.com">
<Img fluid={data.strapiArticle.image.childImageSharp.fluid} />
                </a>
                <figcaption className="mt-2 text-center image-caption">Image Credit: <a href="https://made4dev.com?ref=devblog" target="_blank">made4dev.com (Premium Programming T-shirts)</a></figcaption>
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
      updatedAt
      image {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      user {
        id
        username
      }
    }
  }
`
