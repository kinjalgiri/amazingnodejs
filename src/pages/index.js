import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import TimeAgo from 'react-timeago'

const IndexPage = ({ data }) => (
  <Layout>
    <section className="cta-section theme-bg-light py-5">
      <div className="container text-center">
        <h2 className="heading">DevBlog - A Blog Template Made For Developers</h2>
        <div className="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
        <form className="signup-form form-inline justify-content-center pt-3">
          <div className="form-group">
            <label className="sr-only" htmlFor="semail">Your email</label>
            <input type="email" id="semail" name="semail1" className="form-control mr-md-1 semail" placeholder="Enter email" />
          </div>
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </section>

    <section className="blog-list px-3 py-5 p-md-5">
      <div className="container">
        {data.allStrapiArticle.edges.map(document => (
          <div key={document.node.id} className="item mb-5">
            <div className="media">
              <Img className="mr-3 img-fluid post-thumb d-none d-md-flex" fixed={document.node.image.childImageSharp.fixed} />
              <div className="media-body">
              <h3 className="title mb-1">
              <Link to={`/${document.node.slug}`}>{document.node.title}</Link>
              </h3>
              <div className="meta mb-1">
                <span className="date">Published <TimeAgo date={document.node.updatedAt} /></span>
              </div>
              <div className="intro">{document.node.description}</div>
            <Link className="more-link" to={`/${document.node.slug}`}>Read more &rarr;</Link>
            </div>
          </div>
        </div>
        ))}
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          slug
          description
          updatedAt
        }
      }
    }
  }
  `
