import React from "react"
import SEO from "../components/SEO"
import styles from "../styles/events-desc.module.css"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      frontmatter: { category: { eq: "events" }, slug: { eq: $slug } }
    ) {
      id
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        thumbnail {
          childImageSharp {
            fixed(quality: 100) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
      html
    }
  }
`

const EventsDesc = ({ data }) => {
  const event = data.markdownRemark

  return (
    <Layout>
      <SEO title={event.frontmatter.title} />
      <main>
        <h1 className={styles.header}>{event.title}</h1>
        <Img
          className={styles.eventImage}
          fixed={event.frontmatter.thumbnail.childImageSharp.fixed}
        />
        <section className={styles.dateContainer}>
          <h4 style={{ display: "inline" }}>Date: </h4>
          <span>{event.frontmatter.date}</span>
        </section>
        <section
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: event.html }}
        />
      </main>
    </Layout>
  )
}

export default EventsDesc
