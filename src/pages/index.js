import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <section class="cta-section theme-bg-light py-5">
      <div class="container text-center">
        <h2 class="heading">DevBlog - A Blog Template Made For Developers</h2>
        <div class="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
        <form class="signup-form form-inline justify-content-center pt-3">
          <div class="form-group">
            <label class="sr-only" for="semail">Your email</label>
            <input type="email" id="semail" name="semail1" class="form-control mr-md-1 semail" placeholder="Enter email" />
          </div>
          <button type="submit" class="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </section>

    <section class="blog-list px-3 py-5 p-md-5">
      <div class="container">
        {data.allStrapiArticle.edges.map(document => (
          <div key={document.node.id} class="item mb-5">
            <div class="media">
              <Img class="mr-3 img-fluid post-thumb d-none d-md-flex" fixed={document.node.image.childImageSharp.fixed} />
              <div class="media-body">
              <h3 class="title mb-1">
              <Link to={`/${document.node.slug}`}>{document.node.title}</Link>
              </h3>
              <div class="meta mb-1">
                <span class="date">Published 2 days ago</span>
                <span class="time">5 min read</span>
                <span class="comment"><a href="#">8 comments</a></span>
              </div>
              <div class="intro">{document.node.description}</div>
            <Link class="more-link" to={`/${document.node.slug}`}>Read more &rarr;</Link>
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
        }
      }
    }
  }
  `